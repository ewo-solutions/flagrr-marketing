import type { ReactNode } from "react";
import { FlagrrIcon } from "@/components/Logo";
import { qrPath } from "@/lib/qr";
import {
  IconBell,
  IconChevronBack,
  IconCheck,
  IconFlame,
  IconGallery,
  IconScanCorners,
  RewardIcon,
} from "@/components/icons";

const screenStats = [
  { label: "Rounds played", value: "14" },
  { label: "Flagrr Cash earned", value: "4 210" },
  { label: "Receipts scanned", value: "23" },
  { label: "Rewards redeemed", value: "3" },
];

const scannedItems = [
  { tag: "PS", name: "Titleist Pro V1", rate: "Pro shop · 3 FC per R10", fc: "+270" },
  { tag: "PS", name: "FootJoy Glove", rate: "Pro shop · 3 FC per R10", fc: "+102" },
  { tag: "GF", name: "Green Fee 18", rate: "Green fee · 2 FC per R10", fc: "+126" },
];

const screenTiers = [
  { name: "Bronze", mult: "×1", threshold: "0 FC", perk: "Birthday reward of 50 Flagrr Cash" },
  { name: "Silver", mult: "×1.2", threshold: "5 000 FC", perk: "Birthday reward of 100 Flagrr Cash" },
  { name: "Gold", mult: "×1.5", threshold: "10 000 FC", perk: "Birthday 150 FC · R100 bar voucher a quarter" },
  { name: "Platinum", mult: "×1.7", threshold: "15 000 FC", perk: "Birthday 200 FC · R200 bar voucher a quarter" },
];

const screenRewards: { title: string; desc: string; price: string; icon: Parameters<typeof RewardIcon>[0]["kind"] }[] = [
  { title: "Free Round", desc: "Nine or eighteen holes, on the house.", price: "500 FC", icon: "flag" },
  { title: "Pro Shop", desc: "Credit towards balls, gloves and kit.", price: "700 FC", icon: "bag" },
  { title: "Bar & Kitchen", desc: "Something at the turn, or after.", price: "140 FC", icon: "glass" },
  { title: "Cart Hire", desc: "Ride the course instead of walking.", price: "400 FC", icon: "cart" },
  { title: "Driving Range", desc: "Range time to sort out the swing.", price: "150 FC", icon: "range" },
  { title: "Lesson", desc: "Thirty minutes with the club pro.", price: "900 FC", icon: "coach" },
];

/**
 * Presentational phone-app screen artwork used inside the marketing pages.
 * `screen` selects which app view renders (1-6), mirroring the design
 * reference's parameterised component.
 */
export default function PhoneScreen({ screen = 1 }: { screen?: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 }) {
  return (
    <div
      style={{
        width: 393,
        height: 852,
        position: "relative",
        overflow: "hidden",
        background: "#FFFFFF",
        fontFamily: "var(--font-body)",
        color: "#1F1F1F",
        WebkitFontSmoothing: "antialiased",
      }}
    >
      {screen === 1 && <ScreenHome />}
      {screen === 2 && <ScreenScan />}
      {screen === 3 && <ScreenReceiptApproved />}
      {screen === 4 && <ScreenTiers />}
      {screen === 5 && <ScreenRewards />}
      {screen === 6 && <ScreenVoucher />}
      {screen === 7 && <ScreenHomeAd />}
      {screen === 8 && <ScreenCourseHole />}
      {screen === 9 && <ScreenMyGolf />}
    </div>
  );
}

function StreakDots(count = 6, total = 7) {
  return (
    <div style={{ display: "flex", gap: 5, margin: "8px 0 0" }}>
      {Array.from({ length: total }).map((_, i) => (
        <span
          key={i}
          style={{ width: 11, height: 11, borderRadius: 6, background: i < count ? "#CDDE5C" : "rgba(255,255,255,.3)" }}
        />
      ))}
    </div>
  );
}

function ScreenHome() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#FFFFFF", overflow: "hidden" }}>
      <div style={{ background: "#00805A", padding: "62px 24px 46px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <FlagrrIcon color="white" height={24} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "#FFFFFF" }}>Home</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ position: "relative", display: "flex" }}>
              <IconBell size={23} color="#FFFFFF" />
              <span style={{ position: "absolute", top: -2, right: -4, width: 9, height: 9, borderRadius: 5, background: "#CDDE5C" }} />
            </span>
            <span style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,.24)" }} />
          </div>
        </div>
        <div style={{ margin: "16px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, color: "#FFFFFF" }}>Hello, Lourens</div>
      </div>

      <div style={{ margin: "-36px 20px 0", borderRadius: 24, background: "#1F4234", padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 36, lineHeight: 1, color: "#FFFFFF", fontVariantNumeric: "tabular-nums" }}>12 480</div>
            <div style={{ fontSize: 12, color: "#FFFFFF", margin: "3px 0 0" }}>Flagrr Cash</div>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", padding: "6px 11px", borderRadius: 44, background: "linear-gradient(135deg,#A86C0A,#FDD248)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: ".06em", color: "#FFFFFF", textTransform: "uppercase" }}>
            Gold Member
          </span>
        </div>
        <div style={{ height: 10, borderRadius: 44, background: "rgba(255,255,255,.16)", overflow: "hidden" }}>
          <div style={{ height: "100%", width: "64%", borderRadius: 44, background: "#CDDE5C" }} />
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,.72)" }}>1 786 FC to Platinum</div>
        <div style={{ height: 50, borderRadius: 44, background: "#CDDE5C", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "#1F4234" }}>
          Redeem Flagrr Cash &#8594;
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center", margin: "14px 20px 0", padding: 14, borderRadius: 18, background: "#00805A" }}>
        <span style={{ width: 50, height: 50, flex: "none", borderRadius: 13, background: "#1F4234", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconFlame size={24} color="#CDDE5C" />
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, color: "#FFFFFF" }}>6-Week Streak</div>
          <div style={{ fontSize: 10.5, color: "rgba(255,255,255,.82)", margin: "2px 0 0" }}>2 more weeks to a 200 FC bonus</div>
          {StreakDots()}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "12px 20px 0", padding: 13, borderRadius: 18, background: "#CCF2E6", border: ".5px solid #00805A" }}>
        <span style={{ width: 44, height: 44, borderRadius: 10, background: "#1F4234", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <RewardIcon kind="flag" size={20} color="#CDDE5C" strokeWidth={1.8} />
        </span>
        <div>
          <div style={{ fontSize: 10.5, color: "#4B5563" }}>Your Club</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#1F1F1F", margin: "1px 0 0" }}>Strand Golf Club</div>
        </div>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "20px 20px 0" }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "#1F1F1F" }}>My Stats</span>
        <span style={{ display: "flex", gap: 3, padding: 3, borderRadius: 44, background: "#CCF2E6" }}>
          <span style={{ padding: "6px 13px", borderRadius: 44, background: "#1F4234", fontFamily: "var(--font-display)", fontSize: 11, color: "#FFFFFF" }}>Month</span>
          <span style={{ padding: "6px 13px", borderRadius: 44, fontFamily: "var(--font-display)", fontSize: 11, color: "#1F1F1F" }}>Year</span>
        </span>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "12px 20px 0" }}>
        {screenStats.map((s) => (
          <div key={s.label} style={{ padding: 14, borderRadius: 18, background: "#CCF2E6", border: ".5px solid #00805A" }}>
            <div style={{ fontSize: 10, color: "#1F1F1F", lineHeight: 1.3 }}>{s.label}</div>
            <div style={{ margin: "4px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "#1F1F1F", fontVariantNumeric: "tabular-nums" }}>{s.value}</div>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 110, background: "linear-gradient(180deg,rgba(255,255,255,0),#FFFFFF 60%)" }} />
      <TabBar />
    </div>
  );
}

type TabName = "home" | "course" | "golf" | "rewards" | "activity" | "profile";

const tabGlyphs: Record<TabName, ReactNode> = {
  home: (
    <>
      <path d="M3 10.5 12 3l9 7.5" />
      <path d="M5 9.5V21h14V9.5" />
    </>
  ),
  course: (
    <>
      <path d="M6 21V3.5" />
      <path d="M6 4h11l-2.6 3.8L17 11.5H6" />
    </>
  ),
  golf: <path d="M4 20v-7M10 20V6M16 20v-9M21 20H3" />,
  rewards: (
    <>
      <rect x="3" y="8" width="18" height="13" rx="1.5" />
      <path d="M3 12h18M12 8v13" />
    </>
  ),
  activity: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5.5l3.5 2" />
    </>
  ),
  profile: (
    <>
      <circle cx="12" cy="8" r="3.6" />
      <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
    </>
  ),
};

/** The app's floating tab bar: your golf left of Scan, your Flagrr Cash right of it. */
function TabBar({ active = "home" }: { active?: TabName }) {
  const tab = (name: TabName) => {
    const on = name === active;
    return (
      <span key={name} style={{ position: "relative", display: "flex", width: 22, justifyContent: "center" }}>
        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke={on ? "#00805A" : "rgba(31,66,52,.4)"} strokeWidth={on ? 2.1 : 1.8} strokeLinecap="round" strokeLinejoin="round">
          {tabGlyphs[name]}
        </svg>
        {on && <span style={{ position: "absolute", bottom: -9, width: 4, height: 4, borderRadius: 2, background: "#00805A" }} />}
      </span>
    );
  };
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: 20,
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: 17,
        height: 64,
        padding: "0 19px",
        borderRadius: 25,
        background: "#F0FFFB",
        boxShadow: "0 0 16px rgba(31,66,52,.16)",
      }}
    >
      {(["home", "course", "golf"] as const).map(tab)}
      <span style={{ width: 42, height: 42, marginTop: -18, borderRadius: 22, background: "#00805A", border: "2px solid #F0FFFB", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IconScanCorners size={20} color="#FFFFFF" />
      </span>
      {(["rewards", "activity", "profile"] as const).map(tab)}
    </div>
  );
}

function ScreenHomeAd() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#FFFFFF", overflow: "hidden" }}>
      <div style={{ background: "#00805A", padding: "62px 24px 46px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
            <FlagrrIcon color="white" height={24} />
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "#FFFFFF" }}>Home</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <span style={{ position: "relative", display: "flex" }}>
              <IconBell size={23} color="#FFFFFF" />
              <span style={{ position: "absolute", top: -2, right: -4, width: 9, height: 9, borderRadius: 5, background: "#CDDE5C" }} />
            </span>
            <span style={{ width: 32, height: 32, borderRadius: "50%", background: "rgba(255,255,255,.24)" }} />
          </div>
        </div>
        <div style={{ margin: "16px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 24, color: "#FFFFFF" }}>Hello, Lourens</div>
      </div>

      <div style={{ margin: "-36px 20px 0", borderRadius: 24, background: "#1F4234", padding: 20, display: "flex", flexDirection: "column", gap: 12 }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <div>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 36, lineHeight: 1, color: "#FFFFFF", fontVariantNumeric: "tabular-nums" }}>12 480</div>
            <div style={{ fontSize: 12, color: "#FFFFFF", margin: "3px 0 0" }}>Flagrr Cash</div>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", padding: "6px 11px", borderRadius: 44, background: "linear-gradient(135deg,#A86C0A,#FDD248)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, letterSpacing: ".06em", color: "#FFFFFF", textTransform: "uppercase" }}>
            Gold Member
          </span>
        </div>
        <div style={{ height: 10, borderRadius: 44, background: "rgba(255,255,255,.16)", overflow: "hidden" }}>
          <div style={{ height: "100%", width: "64%", borderRadius: 44, background: "#CDDE5C" }} />
        </div>
        <div style={{ fontSize: 11, color: "rgba(255,255,255,.72)" }}>1 786 FC to Platinum</div>
        <div style={{ height: 50, borderRadius: 44, background: "#CDDE5C", display: "flex", alignItems: "center", justifyContent: "center", gap: 8, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "#1F4234" }}>
          Redeem Flagrr Cash &#8594;
        </div>
      </div>

      <div style={{ position: "relative", margin: "16px 20px 0", borderRadius: 18, overflow: "hidden", border: "1px solid rgba(31,31,31,.08)" }}>
        <div style={{ padding: "14px 16px", display: "flex", alignItems: "center", gap: 12, background: "linear-gradient(120deg,#12271F,#1F4234)" }}>
          <span style={{ width: 44, height: 44, flex: "none", borderRadius: 11, background: "rgba(255,255,255,.12)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 15, color: "#CDDE5C" }}>
            TP
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: 13.5, fontWeight: 600, color: "#FFFFFF" }}>Titleist Pro V1 — 20% off</div>
            <div style={{ fontSize: 10.5, color: "rgba(255,255,255,.7)", margin: "2px 0 0" }}>This month at the pro shop</div>
          </div>
          <span style={{ flex: "none", padding: "4px 9px", borderRadius: 6, background: "rgba(255,255,255,.14)", fontFamily: "var(--font-mono)", fontSize: 8, letterSpacing: ".14em", color: "rgba(255,255,255,.75)", textTransform: "uppercase" }}>
            Ad
          </span>
        </div>
      </div>

      <div style={{ display: "flex", gap: 10, alignItems: "center", margin: "14px 20px 0", padding: 14, borderRadius: 18, background: "#00805A" }}>
        <span style={{ width: 50, height: 50, flex: "none", borderRadius: 13, background: "#1F4234", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <IconFlame size={24} color="#CDDE5C" />
        </span>
        <div style={{ flex: 1 }}>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, color: "#FFFFFF" }}>6-Week Streak</div>
          <div style={{ fontSize: 10.5, color: "rgba(255,255,255,.82)", margin: "2px 0 0" }}>2 more weeks to a 200 FC bonus</div>
          {StreakDots()}
        </div>
      </div>

      <div style={{ display: "flex", alignItems: "center", gap: 10, margin: "12px 20px 0", padding: 13, borderRadius: 18, background: "#CCF2E6", border: ".5px solid #00805A" }}>
        <span style={{ width: 44, height: 44, borderRadius: 10, background: "#1F4234", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <RewardIcon kind="flag" size={20} color="#CDDE5C" strokeWidth={1.8} />
        </span>
        <div>
          <div style={{ fontSize: 10.5, color: "#4B5563" }}>Your Club</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#1F1F1F", margin: "1px 0 0" }}>Strand Golf Club</div>
        </div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 110, background: "linear-gradient(180deg,rgba(255,255,255,0),#FFFFFF 60%)" }} />
      <TabBar />
    </div>
  );
}

// Hole view: 362 m par 4 drawn tee at the bottom, green at the top, at
// 1.35 px a metre, so the arcs and the shot line sit at true distances.
const HOLE = { tee: [196, 600], pin: [194, 112], pxPerM: 1.35 };
const holeAim = [208, HOLE.tee[1] - 230 * HOLE.pxPerM];

function arcPath(r: number) {
  const [cx, cy] = HOLE.tee;
  const a = (deg: number) => [cx + r * Math.sin((deg * Math.PI) / 180), cy - r * Math.cos((deg * Math.PI) / 180)];
  const [x0, y0] = a(-34);
  const [x1, y1] = a(34);
  return `M${x0.toFixed(1)} ${y0.toFixed(1)}A${r} ${r} 0 0 1 ${x1.toFixed(1)} ${y1.toFixed(1)}`;
}

function ScreenCourseHole() {
  const pills = [
    { n: 5, par: 3, done: true },
    { n: 6, par: 5, done: true },
    { n: 7, par: 4, done: false },
    { n: 8, par: 3, done: false },
    { n: 9, par: 4, done: false },
    { n: 10, par: 4, done: false },
  ];
  return (
    <div style={{ position: "absolute", inset: 0, background: "#6F9A4F", overflow: "hidden" }}>
      <svg viewBox="0 0 393 852" width="393" height="852" style={{ position: "absolute", inset: 0 }}>
        <rect width="393" height="852" fill="#6F9A4F" />
        {/* Drawn at 1.35 px a metre, then fitted between the header and the shot card. */}
        <g transform="translate(196 560) scale(0.74) translate(-196 -600)">
        {[[40, 230, 26], [62, 270, 20], [340, 180, 24], [356, 400, 28], [30, 470, 22], [352, 520, 18], [48, 160, 18]].map(([x, y, r]) => (
          <circle key={`${x}-${y}`} cx={x} cy={y} r={r} fill="#2E5B35" opacity={0.9} />
        ))}
        <path d="M120 610 C 132 520 150 430 158 340 C 164 260 150 200 154 150 L 236 150 C 244 210 252 270 246 340 C 240 430 262 520 272 610 Z" fill="#7BA757" />
        <path d="M150 600 C 160 520 172 430 176 340 C 180 270 168 210 172 160 L 218 160 C 222 220 230 280 226 340 C 222 430 236 520 244 600 Z" fill="#8DC05C" />
        <path d="M58 300 C 60 250 96 236 112 262 C 126 286 120 330 92 340 C 66 348 56 330 58 300 Z" fill="#5AA3C8" stroke="#3E85AD" strokeWidth="2" />
        <ellipse cx="262" cy="236" rx="18" ry="11" fill="#F1E6C8" stroke="#D6C394" strokeWidth="1.5" />
        <ellipse cx="148" cy="138" rx="14" ry="9" fill="#F1E6C8" stroke="#D6C394" strokeWidth="1.5" />
        <ellipse cx="194" cy="112" rx="42" ry="30" fill="#98C963" />
        <ellipse cx="194" cy="112" rx="36" ry="25" fill="#AAD76F" />
        <rect x="178" y="596" width="36" height="22" rx="6" fill="#9ECC67" />
        {[100, 150, 200, 250].map((m) => (
          <g key={m}>
            <path d={arcPath(m * HOLE.pxPerM)} fill="none" stroke="#FFFFFF" strokeOpacity={0.55} strokeWidth="1.2" strokeDasharray="1 4" strokeLinecap="round" />
            <text x={196 + m * HOLE.pxPerM * Math.sin((34 * Math.PI) / 180) - 4} y={600 - m * HOLE.pxPerM * Math.cos((34 * Math.PI) / 180) + 4} textAnchor="end" fontSize="14" fill="#FFFFFF" fillOpacity={0.92} fontFamily="var(--font-body)">
              {m}
            </text>
          </g>
        ))}
        <line x1={HOLE.tee[0]} y1={HOLE.tee[1]} x2={holeAim[0]} y2={holeAim[1]} stroke="rgba(0,0,0,.25)" strokeWidth="4" strokeLinecap="round" />
        <line x1={HOLE.tee[0]} y1={HOLE.tee[1]} x2={holeAim[0]} y2={holeAim[1]} stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" />
        <line x1={holeAim[0]} y1={holeAim[1]} x2={HOLE.pin[0]} y2={HOLE.pin[1] + 6} stroke="#FFFFFF" strokeOpacity={0.9} strokeWidth="1.6" strokeDasharray="4 5" strokeLinecap="round" />
        <circle cx={holeAim[0]} cy={holeAim[1]} r="12" fill="#CDDE5C" fillOpacity={0.28} stroke="#CDDE5C" strokeWidth="2" />
        <circle cx={holeAim[0]} cy={holeAim[1]} r="3" fill="#CDDE5C" />
        <ellipse cx={HOLE.pin[0]} cy={HOLE.pin[1] + 6} rx="3" ry="1.6" fill="#10241A" />
        <path d={`M${HOLE.pin[0]} ${HOLE.pin[1] + 6}V${HOLE.pin[1] - 22}`} stroke="#FFFFFF" strokeWidth="1.6" />
        <path d={`M${HOLE.pin[0]} ${HOLE.pin[1] - 22}l14 5-14 5Z`} fill="#CDDE5C" />
        <circle cx={HOLE.tee[0]} cy={HOLE.tee[1]} r="6" fill="#FFFFFF" stroke="rgba(0,0,0,.35)" strokeWidth="1.5" />
        <g>
          <rect x="262" y="242" width="96" height="27" rx="13.5" fill="rgba(16,34,24,.72)" />
          <text x="310" y="260" textAnchor="middle" fontSize="13" fill="#F4F7F1" fontFamily="var(--font-body)">reach 261 m</text>
          <rect x="28" y="348" width="98" height="27" rx="13.5" fill="rgba(16,34,24,.72)" />
          <text x="77" y="366" textAnchor="middle" fontSize="13" fill="#F4F7F1" fontFamily="var(--font-body)">carry 214 m</text>
        </g>
        </g>
      </svg>

      <div style={{ position: "absolute", top: 0, left: 0, right: 0, background: "#1F4234", padding: "56px 12px 10px", display: "flex", flexDirection: "column", gap: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 36, height: 36, borderRadius: 18, background: "rgba(255,255,255,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <IconChevronBack size={20} color="#FFFFFF" strokeWidth={2} />
          </span>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "#FFFFFF", lineHeight: 1.1 }}>Hole 7</div>
            <div style={{ fontSize: 11, color: "rgba(255,255,255,.72)", margin: "2px 0 0" }}>Par 4 · 362 m · Stroke index 3</div>
          </div>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 10px", borderRadius: 18, background: "rgba(255,255,255,.1)", fontSize: 11, color: "#FFFFFF" }}>
            <span style={{ width: 8, height: 8, borderRadius: 4, background: "#FFFFFF" }} /> HCP 14
          </span>
          <span style={{ padding: "7px 12px", borderRadius: 18, background: "#CDDE5C", fontSize: 12, fontWeight: 600, color: "#1F4234" }}>Bag</span>
        </div>
        <div style={{ display: "flex", gap: 6 }}>
          {pills.map((p) => {
            const on = p.n === 7;
            return (
              <span key={p.n} style={{ position: "relative", flex: 1, height: 40, borderRadius: 12, background: on ? "#CDDE5C" : "rgba(255,255,255,.08)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontSize: 13, fontWeight: 600, color: on ? "#1F4234" : "#FFFFFF" }}>{p.n}</span>
                <span style={{ fontSize: 9, color: on ? "#1F4234" : "rgba(255,255,255,.6)" }}>P{p.par}</span>
                {p.done && <span style={{ position: "absolute", top: 5, right: 5, width: 5, height: 5, borderRadius: 3, background: "#CDDE5C" }} />}
              </span>
            );
          })}
        </div>
      </div>

      <div style={{ position: "absolute", left: 10, top: 182, display: "inline-flex", alignItems: "center", gap: 5, padding: "3px 8px", borderRadius: 10, background: "rgba(16,34,24,.72)", fontSize: 10, color: "#F4F7F1" }}>
        GPS integration coming soon
      </div>
      <div style={{ position: "absolute", right: 12, top: 180, padding: "8px 12px", borderRadius: 14, background: "rgba(16,34,24,.78)", display: "flex", flexDirection: "column", gap: 3, alignItems: "flex-end" }}>
        {[["Back", "374"], ["Middle", "362"], ["Front", "349"]].map(([k, v]) => (
          <div key={k} style={{ display: "flex", alignItems: "baseline", gap: 6 }}>
            <span style={{ fontSize: 9.5, color: "rgba(255,255,255,.65)" }}>{k}</span>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: k === "Middle" ? 22 : 14, color: "#FFFFFF", fontVariantNumeric: "tabular-nums" }}>{v}</span>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", left: 12, right: 12, bottom: 122, borderRadius: 16, background: "#FFFFFF", padding: "12px 14px", boxShadow: "0 10px 26px -14px rgba(0,0,0,.5)" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ padding: "3px 9px", borderRadius: 20, background: "#CCF2E6", fontSize: 10.5, fontWeight: 600, color: "#00805A" }}>Suggested shot</span>
          <span style={{ fontSize: 11, color: "#4B5563" }}>From the tee</span>
        </div>
        <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", margin: "8px 0 0" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "#1F1F1F" }}>Driver</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "#1F1F1F", fontVariantNumeric: "tabular-nums" }}>
            230<span style={{ fontSize: 13, color: "#4B5563" }}> m</span>
          </span>
        </div>
        <div style={{ display: "flex", margin: "10px 0 0", padding: "7px 0", borderRadius: 12, background: "#F3F4F1" }}>
          {[["Leaves", "132 m"], ["Next", "8 iron"], ["Usual miss", "±21 m"]].map(([k, v], i) => (
            <div key={k} style={{ flex: 1, textAlign: "center", borderLeft: i ? "1px solid rgba(31,31,31,.1)" : undefined }}>
              <div style={{ fontSize: 9.5, color: "#4B5563" }}>{k}</div>
              <div style={{ fontSize: 13, fontWeight: 600, color: "#1F1F1F", margin: "1px 0 0" }}>{v}</div>
            </div>
          ))}
        </div>
        <div style={{ margin: "8px 0 0", fontSize: 11, lineHeight: 1.4, color: "#4B5563" }}>Water left is inside your usual miss. Favour the right half; the bunker is out of reach.</div>
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, display: "flex", alignItems: "center", gap: 10, padding: "10px 12px 34px 16px", background: "#FFFFFF", borderTop: "1px solid rgba(31,31,31,.1)" }}>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontSize: 10.5, color: "#4B5563" }}>1 shot received on this hole</div>
          <div style={{ fontSize: 14, fontWeight: 600, color: "#00805A", margin: "1px 0 0" }}>Par · net birdie · 3 pts</div>
        </div>
        <div style={{ display: "flex", alignItems: "center", padding: 3, borderRadius: 16, background: "#F3F4F1", border: "1px solid rgba(31,31,31,.1)" }}>
          <span style={{ width: 30, textAlign: "center", fontSize: 18, color: "#1F4234" }}>&#8722;</span>
          <span style={{ width: 44, height: 42, borderRadius: 12, background: "#1F4234", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 20, color: "#FFFFFF" }}>4</span>
          <span style={{ width: 30, textAlign: "center", fontSize: 18, color: "#1F4234" }}>+</span>
        </div>
        <div style={{ height: 46, borderRadius: 14, border: "1px solid rgba(31,31,31,.12)", display: "flex", alignItems: "center", gap: 7, padding: "0 10px 0 9px" }}>
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="#00805A" strokeWidth="1.8">
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600, color: "#1F1F1F" }}>14 pts</div>
            <div style={{ fontSize: 9.5, color: "#4B5563" }}>thru 6</div>
          </div>
        </div>
      </div>
    </div>
  );
}

const golfBars = [31, 27, 36, 33, 29, 38, 34, 30, 35, 37];

function ScreenMyGolf() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#F6F5F0", overflow: "hidden" }}>
      <div style={{ background: "#00805A", padding: "62px 22px 30px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "#FFFFFF" }}>My Golf</span>
          <span style={{ display: "flex", gap: 3, padding: 3, borderRadius: 44, background: "rgba(255,255,255,.16)" }}>
            {["Month", "Year", "All"].map((t) => (
              <span key={t} style={{ padding: "5px 11px", borderRadius: 44, background: t === "Year" ? "#FFFFFF" : "transparent", fontSize: 11, fontWeight: 600, color: t === "Year" ? "#1F4234" : "#FFFFFF" }}>
                {t}
              </span>
            ))}
          </span>
        </div>
      </div>

      <div style={{ margin: "-16px 20px 0", borderRadius: 22, background: "#1F4234", padding: "18px 20px", display: "flex", alignItems: "flex-end", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontSize: 11, color: "rgba(255,255,255,.72)" }}>Stableford average</div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 46, lineHeight: 1, color: "#CDDE5C", fontVariantNumeric: "tabular-nums", margin: "4px 0 0" }}>33.2</div>
        </div>
        <div style={{ textAlign: "right", fontSize: 11, lineHeight: 1.6, color: "rgba(255,255,255,.8)" }}>
          <div>Best round <b style={{ color: "#FFFFFF" }}>38 pts</b></div>
          <div>Played to handicap <b style={{ color: "#FFFFFF" }}>4 of 12</b></div>
          <div>Handicap Index <b style={{ color: "#FFFFFF" }}>12.4</b></div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10, margin: "12px 20px 0" }}>
        {[["Rounds", "12"], ["Scoring average", "88.1"], ["Best score", "83"], ["Doubles per 18", "2.4"]].map(([k, v]) => (
          <div key={k} style={{ padding: "12px 14px", borderRadius: 18, background: "#FFFFFF" }}>
            <div style={{ fontSize: 10.5, color: "#4B5563" }}>{k}</div>
            <div style={{ margin: "3px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "#1F1F1F", fontVariantNumeric: "tabular-nums" }}>{v}</div>
          </div>
        ))}
      </div>

      <div style={{ margin: "12px 20px 0", padding: "14px 16px", borderRadius: 18, background: "#FFFFFF" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "#1F1F1F" }}>Points per round</span>
          <span style={{ fontSize: 10.5, color: "#4B5563" }}>last 10</span>
        </div>
        <div style={{ position: "relative", display: "flex", alignItems: "flex-end", gap: 7, height: 92, margin: "12px 0 0" }}>
          <span style={{ position: "absolute", left: 0, right: 0, bottom: (36 / 40) * 92, borderTop: "1px dashed rgba(0,128,90,.45)" }} />
          {golfBars.map((b, i) => (
            <span key={i} style={{ flex: 1, height: `${(b / 40) * 100}%`, borderRadius: 5, background: b >= 36 ? "#00805A" : "#CCF2E6" }} />
          ))}
        </div>
        <div style={{ margin: "6px 0 0", fontSize: 10, color: "#4B5563" }}>Dashed line: 36 points, played to handicap</div>
      </div>

      <div style={{ margin: "12px 20px 0", padding: "12px 16px", borderRadius: 18, background: "#FFFFFF", display: "flex", flexDirection: "column", gap: 10 }}>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "#1F1F1F" }}>Toughest holes</span>
        {[["Hole 7 · par 4", "+1.6"], ["Hole 14 · par 5", "+1.4"]].map(([k, v]) => (
          <div key={k} style={{ display: "flex", justifyContent: "space-between", fontSize: 12.5, color: "#1F1F1F" }}>
            <span>{k}</span>
            <span style={{ fontWeight: 600, color: "#8A5A00", fontVariantNumeric: "tabular-nums" }}>{v} over</span>
          </div>
        ))}
      </div>

      <div style={{ position: "absolute", left: 0, right: 0, bottom: 0, height: 110, background: "linear-gradient(180deg,rgba(246,245,240,0),#F6F5F0 60%)" }} />
      <TabBar active="golf" />
    </div>
  );
}

function ScreenScan() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#12271F", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: "none", background: "#00805A", padding: "62px 22px 0" }}>
        <div style={{ height: 70, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <IconChevronBack size={25} color="#FFFFFF" strokeWidth={2} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "#FFFFFF" }}>Scan Receipt</span>
          <svg viewBox="0 0 24 24" width="23" height="23" fill="none" stroke="#FFFFFF" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
            <path d="M13 2 4.5 13H11l-1 9 5.5-7.5" />
            <path d="M3 3l18 18" />
          </svg>
        </div>
      </div>
      <div style={{ flex: 1, position: "relative", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(120% 90% at 50% 30%,#20342B,#0A140F)" }} />
        <div
          style={{
            position: "absolute",
            left: "15%",
            right: "15%",
            top: "16%",
            bottom: "16%",
            background: "#EDEBE4",
            borderRadius: 4,
            transform: "rotate(-1.4deg)",
            boxShadow: "0 22px 44px -14px rgba(0,0,0,.7)",
            padding: "24px 20px",
            overflow: "hidden",
          }}
        >
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "#1F1F1F", textAlign: "center" }}>STRAND GOLF CLUB</div>
          <div style={{ margin: "5px 0 16px", fontFamily: "var(--font-mono)", fontSize: 9, letterSpacing: ".1em", color: "#6B7280", textAlign: "center" }}>
            PRO SHOP · TILL 02 · TXN 40118
          </div>
          <div style={{ borderTop: "1px dashed rgba(31,31,31,.35)", padding: "12px 0 0", display: "flex", flexDirection: "column", gap: 8, fontFamily: "var(--font-mono)", fontSize: 10, color: "#1F1F1F" }}>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>TITLEIST PRO V1</span><span>899.00</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>FOOTJOY GLOVE</span><span>341.00</span></div>
            <div style={{ display: "flex", justifyContent: "space-between" }}><span>GREEN FEE 18</span><span>420.00</span></div>
          </div>
          <div style={{ margin: "12px 0 0", borderTop: "1px dashed rgba(31,31,31,.35)", padding: "12px 0 0", display: "flex", justifyContent: "space-between", fontFamily: "var(--font-mono)", fontSize: 12, fontWeight: 600, color: "#1F1F1F" }}>
            <span>TOTAL</span><span>R1660.00</span>
          </div>
          <div style={{ margin: "16px 0 0", fontFamily: "var(--font-mono)", fontSize: 8.5, letterSpacing: ".08em", color: "#9CA3AF", textAlign: "center" }}>30 JUL 2026 · 14:22 · THANK YOU</div>
        </div>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg,rgba(10,20,15,.5),rgba(10,20,15,.15) 40%,rgba(10,20,15,.55))" }} />
        <div style={{ position: "absolute", top: 26, left: "50%", transform: "translateX(-50%)", padding: "9px 20px", borderRadius: 44, background: "rgba(0,0,0,.42)", fontSize: 13, fontWeight: 500, color: "#FFFFFF", whiteSpace: "nowrap" }}>
          Align receipt or QR code
        </div>
        <div style={{ position: "relative", width: "80%", height: "56%", borderRadius: 24, border: "2.5px dashed #CDDE5C" }} />
        <div className="fl-scan-line" style={{ position: "absolute", left: "10%", right: "10%", top: "24%", height: 2, background: "linear-gradient(90deg,transparent,#CDDE5C,transparent)" }} />
      </div>
      <div style={{ flex: "none", background: "#F6F5F0", padding: "24px 24px 40px", display: "flex", flexDirection: "column", alignItems: "center", gap: 16 }}>
        <div style={{ width: "100%", height: 54, borderRadius: 44, background: "#CDDE5C", display: "flex", alignItems: "center", justifyContent: "center", gap: 9, fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "#1F4234" }}>
          <IconScanCorners size={18} color="#1F4234" strokeWidth={2} />
          Scan Receipt
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, color: "#4B5563" }}>
          <IconGallery size={15} color="#4B5563" />
          Upload from gallery
        </div>
      </div>
    </div>
  );
}

function ScreenReceiptApproved() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#F6F5F0", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: "none", background: "#00805A", padding: "62px 22px 34px" }}>
        <div style={{ height: 40, display: "flex", alignItems: "center", gap: 14 }}>
          <IconChevronBack size={25} color="#FFFFFF" strokeWidth={2} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "#FFFFFF" }}>Receipt</span>
        </div>
      </div>
      <div style={{ flex: 1, padding: "0 20px", display: "flex", flexDirection: "column", gap: 14, marginTop: -18 }}>
        <div style={{ borderRadius: 24, background: "#FFFFFF", padding: "26px 22px", textAlign: "center", boxShadow: "0 12px 30px -18px rgba(18,39,31,.4)" }}>
          <span style={{ display: "inline-flex", width: 62, height: 62, borderRadius: "50%", background: "#CCF2E6", alignItems: "center", justifyContent: "center" }}>
            <IconCheck size={30} color="#00805A" strokeWidth={2.4} />
          </span>
          <div style={{ margin: "16px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "#1F1F1F" }}>Receipt approved</div>
          <div style={{ margin: "6px 0 0", fontSize: 12.5, color: "#4B5563" }}>Strand Golf Club · Pro Shop · R1 660.00</div>
          <div style={{ margin: "20px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 52, lineHeight: 1, color: "#00805A", fontVariantNumeric: "tabular-nums" }}>+498</div>
          <div style={{ margin: "4px 0 0", fontSize: 12, letterSpacing: ".14em", textTransform: "uppercase", color: "#4B5563" }}>Flagrr Cash earned</div>
          <div style={{ margin: "14px 0 0", display: "inline-flex", alignItems: "center", gap: 7, padding: "7px 14px", borderRadius: 44, background: "linear-gradient(135deg,#A86C0A,#FDD248)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 11, color: "#FFFFFF" }}>
            Gold multiplier ×1.5 applied
          </div>
        </div>
        <div style={{ borderRadius: 24, background: "#FFFFFF", padding: "18px 20px" }}>
          <div style={{ fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#4B5563" }}>Items matched</div>
          <div style={{ margin: "12px 0 0", display: "flex", flexDirection: "column", gap: 12 }}>
            {scannedItems.map((it) => (
              <div key={it.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ width: 38, height: 38, flex: "none", borderRadius: 11, background: "#CCF2E6", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "#00805A" }}>
                  {it.tag}
                </span>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 13.5, fontWeight: 500, color: "#1F1F1F" }}>{it.name}</div>
                  <div style={{ fontSize: 11, color: "#4B5563" }}>{it.rate}</div>
                </div>
                <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "#00805A", fontVariantNumeric: "tabular-nums" }}>{it.fc}</span>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 10, padding: "14px 16px", borderRadius: 18, background: "#1F4234" }}>
          <IconFlame size={20} color="#CDDE5C" />
          <span style={{ fontSize: 12.5, color: "#FFFFFF" }}>Week 6 of your streak logged</span>
        </div>
      </div>
      <div style={{ flex: "none", padding: "16px 20px 40px" }}>
        <div style={{ height: 54, borderRadius: 44, background: "#CDDE5C", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "#1F4234" }}>
          Done
        </div>
      </div>
    </div>
  );
}

function ScreenTiers() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#12271F", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: "none", padding: "62px 24px 0" }}>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: 11, letterSpacing: ".24em", color: "rgba(205,222,92,.9)", textTransform: "uppercase" }}>Your tier</div>
        <div style={{ margin: "14px 0 0", fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 38, lineHeight: 1, color: "#F6F5F0" }}>A rate that climbs.</div>
        <div style={{ margin: "12px 0 0", fontSize: 13, fontWeight: 300, lineHeight: 1.55, color: "rgba(246,245,240,.72)" }}>
          Qualified each quarter on Flagrr Cash earned — not a lifetime total.
        </div>
      </div>
      <div style={{ flex: 1, padding: "26px 20px 0", display: "flex", flexDirection: "column", gap: 12 }}>
        {screenTiers.map((t) => (
          <div key={t.name} style={{ flex: 1, display: "flex", alignItems: "center", gap: 16, padding: 18, borderRadius: 20, background: "rgba(246,245,240,.06)", border: "1px solid rgba(246,245,240,.14)" }}>
            <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 30, lineHeight: 1, color: "#CDDE5C", fontVariantNumeric: "tabular-nums", minWidth: 64 }}>{t.mult}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 19, color: "#F6F5F0" }}>{t.name}</div>
              <div style={{ margin: "3px 0 0", fontSize: 11.5, fontWeight: 300, lineHeight: 1.4, color: "rgba(246,245,240,.66)" }}>{t.perk}</div>
            </div>
            <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "rgba(246,245,240,.5)", whiteSpace: "nowrap" }}>{t.threshold}</span>
          </div>
        ))}
      </div>
      <div style={{ flex: "none", margin: 20, padding: "18px 20px", borderRadius: 20, background: "#CDDE5C", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, color: "#12271F" }}>You&#8217;re Gold</div>
          <div style={{ fontSize: 11.5, color: "rgba(18,39,31,.72)", margin: "2px 0 0" }}>1 786 FC to Platinum this quarter</div>
        </div>
        <span style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: 26, color: "#12271F" }}>×1.5</span>
      </div>
    </div>
  );
}

function ScreenRewards() {
  return (
    <div style={{ position: "absolute", inset: 0, background: "#F6F5F0", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: "none", background: "#00805A", padding: "62px 22px 40px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "#FFFFFF" }}>Rewards</span>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 7, padding: "8px 14px", borderRadius: 44, background: "rgba(255,255,255,.16)", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 13, color: "#FFFFFF" }}>
            12 480 FC
          </span>
        </div>
        <div style={{ margin: "14px 0 0", fontSize: 13, color: "rgba(255,255,255,.82)" }}>Strand Golf Club catalogue</div>
      </div>
      <div style={{ flex: 1, padding: 20, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, alignContent: "start" }}>
        {screenRewards.map((r) => (
          <div key={r.title} style={{ borderRadius: 20, background: "#FFFFFF", padding: 16, display: "flex", flexDirection: "column", gap: 10, boxShadow: "0 10px 26px -20px rgba(18,39,31,.5)" }}>
            <span style={{ width: 44, height: 44, borderRadius: 13, background: "#CCF2E6", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <RewardIcon kind={r.icon} size={21} color="#00805A" strokeWidth={1.8} />
            </span>
            <div style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, lineHeight: 1.15, color: "#1F1F1F" }}>{r.title}</div>
            <div style={{ fontSize: 11, lineHeight: 1.4, color: "#4B5563", flex: 1 }}>{r.desc}</div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "#00805A" }}>{r.price}</span>
              <span style={{ width: 26, height: 26, borderRadius: "50%", background: "#CDDE5C", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 13, color: "#1F4234" }}>&#8594;</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ScreenVoucher() {
  const d = qrPath("FLGR-8T4K");
  return (
    <div style={{ position: "absolute", inset: 0, background: "#1F4234", display: "flex", flexDirection: "column", overflow: "hidden" }}>
      <div style={{ flex: "none", background: "#00805A", padding: "62px 22px 0" }}>
        <div style={{ height: 70, display: "flex", alignItems: "center", gap: 14 }}>
          <IconChevronBack size={25} color="#FFFFFF" strokeWidth={2} />
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 22, color: "#FFFFFF" }}>Voucher</span>
        </div>
      </div>
      <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "0 30px" }}>
        <div style={{ padding: 18, borderRadius: 22, background: "#F6F5F0" }}>
          <svg viewBox="0 0 37 37" width="176" height="176" style={{ display: "block" }}>
            <rect width="37" height="37" fill="#F6F5F0" />
            <path d={d} fill="#1F4234" shapeRendering="crispEdges" />
          </svg>
        </div>
        <div style={{ margin: "28px 0 0", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 30, lineHeight: 1.05, color: "#CDDE5C", textAlign: "center" }}>Reward Redeemed</div>
        <div style={{ margin: "12px 0 0", maxWidth: "30ch", fontSize: 13, fontWeight: 300, lineHeight: 1.55, color: "rgba(255,255,255,.86)", textAlign: "center" }}>
          Present your QR code or voucher code at the club. Staff validate it in person.
        </div>
        <div style={{ margin: "26px 0 0", padding: "14px 26px", borderRadius: 44, background: "#00805A", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 15, color: "#FFFFFF" }}>
          Pro Shop Voucher — R500
        </div>
        <div style={{ margin: "26px 0 0", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(255,255,255,.6)" }}>Voucher Code</div>
        <div style={{ margin: "6px 0 0", fontFamily: "var(--font-mono)", fontSize: 20, fontWeight: 600, letterSpacing: ".12em", color: "#FFFFFF" }}>FLGR-8T4K</div>
      </div>
      <div style={{ flex: "none", padding: "0 24px 44px" }}>
        <div style={{ height: 54, borderRadius: 44, background: "#CDDE5C", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, color: "#1F4234" }}>
          Back to Rewards
        </div>
      </div>
    </div>
  );
}
