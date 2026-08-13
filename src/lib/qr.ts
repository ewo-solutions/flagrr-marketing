/**
 * Minimal real QR code encoder (version 3, ECC level L, byte mode) producing
 * an SVG path of the dark modules, so the voucher artwork actually scans.
 * Ported from the design reference's inline implementation.
 */
export function qrPath(text: string): string {
  const V = 3;
  const size = 29;
  const ecLen = 15;
  const dataLen = 55;
  const bits: number[] = [];
  const push = (val: number, len: number) => {
    for (let i = len - 1; i >= 0; i--) bits.push((val >> i) & 1);
  };
  push(4, 4);
  const bytes: number[] = [];
  for (let i = 0; i < text.length; i++) bytes.push(text.charCodeAt(i) & 0xff);
  push(bytes.length, 8);
  bytes.forEach((b) => push(b, 8));
  const cap = dataLen * 8;
  for (let i = 0; i < 4 && bits.length < cap; i++) bits.push(0);
  while (bits.length % 8 !== 0) bits.push(0);
  const data: number[] = [];
  for (let i = 0; i < bits.length; i += 8) {
    let b = 0;
    for (let j = 0; j < 8; j++) b = (b << 1) | bits[i + j];
    data.push(b);
  }
  const pads = [0xec, 0x11];
  let pi = 0;
  while (data.length < dataLen) data.push(pads[pi++ % 2]);

  const exp = new Array<number>(512);
  const log = new Array<number>(256);
  let x = 1;
  for (let i = 0; i < 255; i++) {
    exp[i] = x;
    log[x] = i;
    x <<= 1;
    if (x & 0x100) x ^= 0x11d;
  }
  for (let i = 255; i < 512; i++) exp[i] = exp[i - 255];
  const mul = (a: number, b: number) => (a === 0 || b === 0 ? 0 : exp[log[a] + log[b]]);
  let gen = [1];
  for (let i = 0; i < ecLen; i++) {
    const next = new Array(gen.length + 1).fill(0);
    for (let j = 0; j < gen.length; j++) {
      next[j] ^= gen[j];
      next[j + 1] ^= mul(gen[j], exp[i]);
    }
    gen = next;
  }
  const rem = new Array(ecLen).fill(0);
  for (const dv of data) {
    const factor = dv ^ rem[0];
    rem.shift();
    rem.push(0);
    for (let j = 0; j < ecLen; j++) rem[j] ^= mul(gen[j + 1], factor);
  }
  const all = data.concat(rem);

  const m: number[][] = Array.from({ length: size }, () => new Array(size).fill(0));
  const fn: boolean[][] = Array.from({ length: size }, () => new Array(size).fill(false));
  const mark = (r: number, c: number, v: number) => {
    if (r >= 0 && c >= 0 && r < size && c < size) {
      m[r][c] = v;
      fn[r][c] = true;
    }
  };
  const finder = (r: number, c: number) => {
    for (let dr = -1; dr <= 7; dr++)
      for (let dc = -1; dc <= 7; dc++) {
        const inside = dr >= 0 && dr <= 6 && dc >= 0 && dc <= 6;
        const d = Math.max(Math.abs(dr - 3), Math.abs(dc - 3));
        mark(r + dr, c + dc, inside ? (d === 2 ? 0 : 1) : 0);
      }
  };
  finder(0, 0);
  finder(0, size - 7);
  finder(size - 7, 0);
  for (let i = 8; i < size - 8; i++) {
    const v = i % 2 === 0 ? 1 : 0;
    mark(6, i, v);
    mark(i, 6, v);
  }
  for (let dr = -2; dr <= 2; dr++)
    for (let dc = -2; dc <= 2; dc++) {
      mark(22 + dr, 22 + dc, Math.max(Math.abs(dr), Math.abs(dc)) === 1 ? 0 : 1);
    }
  mark(4 * V + 9, 8, 1);
  for (let i = 0; i <= 8; i++) {
    if (!fn[8][i]) mark(8, i, 0);
    if (!fn[i][8]) mark(i, 8, 0);
  }
  for (let i = 0; i < 8; i++) {
    if (!fn[8][size - 1 - i]) mark(8, size - 1 - i, 0);
    if (!fn[size - 1 - i][8]) mark(size - 1 - i, 8, 0);
  }

  let bi = 0;
  const total = all.length * 8;
  const bitAt = (i: number) => (all[i >> 3] >> (7 - (i & 7))) & 1;
  let upward = true;
  for (let col = size - 1; col > 0; col -= 2) {
    if (col === 6) col = 5;
    for (let i = 0; i < size; i++) {
      const row = upward ? size - 1 - i : i;
      for (const c of [col, col - 1]) {
        if (fn[row][c]) continue;
        let v = bi < total ? bitAt(bi++) : 0;
        if ((row + c) % 2 === 0) v ^= 1;
        m[row][c] = v;
      }
    }
    upward = !upward;
  }

  const fmt = (1 << 3) | 0;
  const d2Init = fmt << 10;
  let d2 = d2Init;
  for (let i = 4; i >= 0; i--) if ((d2 >> (10 + i)) & 1) d2 ^= 0x537 << i;
  const fmtBits = ((fmt << 10) | (d2 & 0x3ff)) ^ 0x5412;
  for (let i = 0; i < 15; i++) {
    const b = (fmtBits >> i) & 1;
    if (i < 6) m[8][i] = b;
    else if (i < 8) m[8][i + 1] = b;
    else if (i === 8) m[7][8] = b;
    else m[14 - i][8] = b;
    if (i < 8) m[size - 1 - i][8] = b;
    else m[8][size - 15 + i] = b;
  }

  let d = "";
  for (let r = 0; r < size; r++)
    for (let c = 0; c < size; c++) {
      if (m[r][c]) d += "M" + (c + 4) + " " + (r + 4) + "h1v1h-1z";
    }
  return d;
}
