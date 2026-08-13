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
export default function PhoneScreen({ screen = 1 }: { screen?: 1 | 2 | 3 | 4 | 5 | 6 }) {
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

function TabBar() {
  return (
    <div
      style={{
        position: "absolute",
        left: "50%",
        bottom: 20,
        transform: "translateX(-50%)",
        display: "flex",
        alignItems: "center",
        gap: 26,
        height: 66,
        padding: "0 26px",
        borderRadius: 30,
        background: "#F0FFFB",
        boxShadow: "0 0 16px rgba(31,66,52,.16)",
      }}
    >
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="#00805A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 10.5 12 3l9 7.5" />
        <path d="M5 9.5V21h14V9.5" />
      </svg>
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="rgba(31,66,52,.4)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="8" width="18" height="13" rx="1.5" />
        <path d="M3 12h18M12 8v13" />
      </svg>
      <span style={{ width: 44, height: 44, marginTop: -18, borderRadius: 24, background: "#00805A", border: "2px solid #F0FFFB", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <IconScanCorners size={20} color="#FFFFFF" />
      </span>
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="rgba(31,66,52,.4)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5.5l3.5 2" />
      </svg>
      <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="rgba(31,66,52,.4)" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="8" r="3.6" />
        <path d="M5 21c0-3.9 3.1-7 7-7s7 3.1 7 7" />
      </svg>
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
