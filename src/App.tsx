import { useEffect, useState, type CSSProperties } from "react";
import { services, servicePackages, testimonials, tiles } from "./data";
import { useRevealOnScroll } from "./useReveal";
import {
  Arrow,
  Display,
  Eyebrow,
  Photo,
  PrimaryButton,
  wrap,
} from "./components";

const sectionPad = "clamp(24px, 32px, 132px)";

/* ------------------------------------------------------------------ */
/* Header                                                              */
/* ------------------------------------------------------------------ */

const nav = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

function Header() {
  const [open, setOpen] = useState(false);

  /* hold the page still behind the panel, and let Escape close it */
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  /* rotating to landscape can cross the breakpoint while the panel is
     open — the desktop nav is back, so the panel should go */
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1025px)");
    const onChange = () => {
      if (mq.matches) setOpen(false);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "rgba(7,9,12,.82)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid rgba(255,255,255,.08)",
        }}
      >
        <div
          className="sb-headbar"
          style={{
            ...wrap,
            display: "flex",
            alignItems: "center",
            gap: 48,
          }}
        >
          <a
            href="#top"
            onClick={() => setOpen(false)}
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 7,
              minWidth: 0,
            }}
          >
            <span
              className="sb-display sb-oblique"
              style={{
                fontWeight: 700,
                fontSize: "clamp(22px, 6vw, 27px)",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
              }}
            >
              Slick<span style={{ color: "#1b7cff" }}>Bound</span>
            </span>
            <span
              className="sb-wordmark-sub"
              style={{
                fontSize: 12,
                letterSpacing: 0.1,
                color: "#c9cfd8",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
              }}
            >
              Detailing
            </span>
          </a>

          <nav
            className="sb-nav"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 30,
              fontSize: 13,
              fontWeight: 500,
              letterSpacing: 1.5,
              textTransform: "uppercase",
            }}
          >
            {nav.map((n, i) => (
              <a
                key={n.label}
                href={n.href}
                data-active={i === 0 ? "true" : undefined}
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div
            style={{
              marginLeft: "auto",
              display: "flex",
              alignItems: "center",
              gap: 14,
            }}
          >
            <button
              type="button"
              className="sb-burger"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="sb-mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
            <div className="sb-headcta">
              <PrimaryButton style={{ padding: "13px 28px" }} href="#contact">
                Book now
              </PrimaryButton>
            </div>
          </div>
        </div>
      </header>

      {/* sits outside <header> on purpose: the header's backdrop-filter
          makes it a containing block, which would trap this fixed panel */}
      <div
        id="sb-mobile-menu"
        className="sb-menu"
        data-open={open ? "true" : "false"}
      >
        {nav.map((n, i) => (
          <a
            key={n.label}
            href={n.href}
            className="sb-menulink"
            onClick={() => setOpen(false)}
          >
            {n.label}
            <span className="sb-menuidx">{String(i + 1).padStart(2, "0")}</span>
          </a>
        ))}

        <div className="sb-menufoot" onClick={() => setOpen(false)}>
          <PrimaryButton href="#contact">
            Book a detail <Arrow />
          </PrimaryButton>
          <div className="sb-menumeta">
            <a href="tel:0210286731">021 028 67321</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </div>
        </div>
      </div>
    </>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

function Hero() {
  return (
    <section
      id="top"
      className="sb-hero"
      style={{
        position: "relative",
        display: "flex",
        alignItems: "flex-end",
      }}
    >
      <Photo src="/dash.jpeg" alt="Car-dash" objectPosition="center">
        <div
          className="sb-heroscrim"
          style={{ position: "absolute", inset: 0 }}
        />
      </Photo>

      <div
        style={{
          position: "relative",
          width: "100%",
          ...wrap,
          paddingBottom: "clamp(56px, 9vw, 96px)",
        }}
      >
        {/* <Eyebrow>Complete care. Inside &amp; out.</Eyebrow> */}
        <h1
          className="sb-display sb-oblique"
          style={{
            fontWeight: 800,
            fontSize: "clamp(60px, 13vw, 176px)",
            lineHeight: 0.82,
            letterSpacing: "-0.035em",
          }}
        >
          professional
          <br />
          <span style={{ color: "#1b7cff" }}>detailing</span>
        </h1>

        <div
          className="sb-two"
          style={{
            display: "grid",
            gridTemplateColumns: "1.7fr 1fr",
            gap: 44,
            alignItems: "end",
            marginTop: 30,
            maxWidth: 900,
          }}
        >
          <p style={{ maxWidth: "46ch", color: "#b3bcc8", margin: 0 }}>
            Complete care. Inside &amp; out. Every booking covers both exterior
            and interior, ensuring your vehicle remains fresh and tidy.
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: 14,
            }}
          >
            <PrimaryButton style={{ padding: "16px 40px" }} href="#contact">
              Book a detail <Arrow />
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Trust strip                                                         */
/* ------------------------------------------------------------------ */

// function TrustStrip() {
//   return (
//     <div
//       style={{
//         background: "#0b0f14",
//         borderBottom: "1px solid rgba(255,255,255,.07)",
//       }}
//     >
//       <div
//         style={{
//           ...wrap,
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: 0,
//         }}
//       >
//         {features.map((f, i) => (
//           <div
//             key={f.title}
//             style={{
//               padding: "26px 22px 26px 0",
//               borderLeft: i === 0 ? "none" : "1px solid rgba(255,255,255,.08)",
//               paddingLeft: i === 0 ? 0 : 24,
//             }}
//           >
//             <div
//               className="sb-display"
//               style={{
//                 fontWeight: 600,
//                 fontSize: 19,
//                 letterSpacing: "-0.01em",
//                 marginBottom: 4,
//               }}
//             >
//               {f.title}
//             </div>
//             <div style={{ fontSize: 13.5, color: "#8c95a3" }}>{f.line}</div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

/* ------------------------------------------------------------------ */
/* Services — edge-to-edge image tiles                                 */
/* ------------------------------------------------------------------ */

function ServicesTiles() {
  return (
    <section
      id="services"
      className="sb-rev"
      style={{ padding: `${sectionPad} 0` }}
    >
      {/* <div style={{ ...wrap, padding: `clamp(16px, 5vw, 56px) 24px 28px` }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            gap: 30,
            flexWrap: "wrap",
          }}
        >
          <div>
            <Display
              top="Four ways"
              rest="we work"
              oblique
              size="clamp(36px,5vw,60px)"
            />
          </div>
          <p
            style={{
              fontSize: 15.5,
              color: "#8c95a3",
              margin: 0,
              maxWidth: "32ch",
            }}
          >
            Book one on its own, or stack an add-on onto a full detail.
          </p>
        </div>
      </div> */}

      <div
        className="sb-tilegrid"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 2,
        }}
      >
        {tiles.map((t) => (
          <div
            key={t.num}
            className="sb-tile"
            style={{ display: "block", minHeight: 380, color: "#fff" }}
          >
            <Photo src={t.src} vignette grain={0.06}>
              <div
                style={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(180deg, transparent 38%, rgba(7,9,12,.9) 100%)",
                }}
              />
            </Photo>
            <span
              style={{
                position: "absolute",
                top: 20,
                left: 22,
                fontFamily: "ui-monospace, Menlo, monospace",
                fontSize: 12,
                color: "rgba(255,255,255,.5)",
              }}
            >
              {t.num}
            </span>
            <div
              style={{ position: "absolute", left: 22, right: 22, bottom: 22 }}
            >
              <div
                className="sb-display"
                style={{
                  fontWeight: 600,
                  fontSize: "clamp(22px,2.3vw,28px)",
                  letterSpacing: "-0.02em",
                }}
              >
                {t.title}
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 8,
                }}
              >
                <span style={{ fontSize: 13.5, color: "#b3bcc8" }}>
                  {t.line}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Intro split                                                         */
/* ------------------------------------------------------------------ */

// function IntroSplit() {
//   return (
//     <section
//       className="sb-asym sb-rev"
//       style={{
//         ...wrap,
//         padding: `${sectionPad} 24px`,
//         display: "grid",
//         gridTemplateColumns: "5fr 6fr",
//         gap: "clamp(40px, 6vw, 84px)",
//         alignItems: "center",
//       }}
//     >
//       <div>
//         <Eyebrow>Who we are</Eyebrow>
//         <Display
//           top="Detailing,"
//           rest="done right"
//           oblique
//           size="clamp(38px,5vw,60px)"
//           style={{ marginBottom: 20 }}
//         />
//         <p style={{ color: "#fff", fontWeight: 500, margin: "0 0 14px" }}>
//           One van. One standard.
//         </p>
//         <p style={{ color: "#b3bcc8", margin: "0 0 30px", maxWidth: "42ch" }}>
//           Six years detailing across Auckland — mostly repeat clients and the
//           cars they told their mates about. No upsell theatre, no cutting
//           corners you can&apos;t see.
//         </p>
//         <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
//           <div
//             style={{
//               width: 52,
//               height: 52,
//               flexShrink: 0,
//               display: "flex",
//               alignItems: "center",
//               justifyContent: "center",
//               border: "1px solid #1b7cff",
//               color: "#1b7cff",
//             }}
//           >
//             <svg
//               width="20"
//               height="20"
//               viewBox="0 0 24 24"
//               fill="none"
//               aria-hidden
//             >
//               <path
//                 d="M4 5c0 9 6 15 15 15l-3-4-3 1c-3-1-6-4-7-7l1-3-4-3z"
//                 stroke="currentColor"
//                 strokeWidth="1.6"
//               />
//             </svg>
//           </div>
//           <div>
//             <div
//               style={{
//                 fontSize: 11.5,
//                 letterSpacing: 1.6,
//                 textTransform: "uppercase",
//                 color: "#8a93a1",
//               }}
//             >
//               Call or text
//             </div>
//             <a
//               href="tel:0210286731"
//               className="sb-display"
//               style={{
//                 fontSize: 26,
//                 letterSpacing: "-0.01em",
//                 fontStyle: "italic",
//               }}
//             >
//               021 028 67321
//             </a>
//           </div>
//         </div>
//       </div>

//       <div
//         style={{ position: "relative", height: "clamp(360px, 42vw, 480px)" }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             left: 0,
//             top: 0,
//             width: "72%",
//             height: "78%",
//           }}
//         >
//           <Photo
//             tone="radial-gradient(130% 110% at 22% 8%, #3c2f28 0%, #1c1712 46%, #0b0b0e 80%)"
//             label="[ interior — leather seat ]"
//             sheen={70}
//             glow="rgba(255,180,120,.14)"
//           />
//         </div>
//         <div
//           style={{
//             position: "absolute",
//             right: 0,
//             bottom: 0,
//             width: "56%",
//             height: "62%",
//             border: "1px solid rgba(255,255,255,.16)",
//             outline: "10px solid #07090c",
//           }}
//         >
//           <Photo
//             tone="radial-gradient(130% 110% at 78% 88%, #1d4a76 0%, #12263b 46%, #0a0f16 82%)"
//             label="[ microfibre + panel ]"
//             sheen={122}
//           />
//         </div>
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/* Full-bleed divider band                                             */
/* ------------------------------------------------------------------ */

// function BleedBand() {
//   return (
//     <section style={{ position: "relative", height: "46vh", minHeight: 320 }}>
//       <Photo
//         tone="radial-gradient(130% 120% at 32% 16%, #2a3b4b 0%, #16222e 44%, #0a0e13 78%)"
//         label="[ full-bleed — wheel face, foam, close crop ]"
//         sheen={100}
//       />
//       <div
//         style={{
//           position: "absolute",
//           left: 24,
//           bottom: 24,
//           fontSize: 12,
//           letterSpacing: 1.6,
//           textTransform: "uppercase",
//           color: "#8c95a3",
//         }}
//       >
//         Wheel &amp; tyre deep clean —{" "}
//         <span style={{ color: "#1b7cff" }}>step 02</span>
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/* What's included                                                     */
/* ------------------------------------------------------------------ */

const subhead: CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 600,
  fontSize: 20,
  letterSpacing: 0,
  textTransform: "uppercase",
  color: "#fff",
  paddingBottom: 12,
  borderBottom: "1px solid #1b7cff",
  marginBottom: 16,
};

function ChecklistItem({ text }: { text: string }) {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "14px 1fr",
        gap: 12,
        alignItems: "baseline",
        fontSize: 15,
        color: "#c9cfd8",
        padding: "9px 0",
        borderBottom: "1px solid rgba(255,255,255,.06)",
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          background: "#1b7cff",
          display: "block",
          transform: "translateY(-3px)",
        }}
      />
      <span>{text}</span>
    </div>
  );
}

function PriceCell({ label, value }: { label: string; value: string }) {
  return (
    <div style={{ flex: 1 }}>
      <div
        style={{
          fontSize: 11.5,
          letterSpacing: 1.6,
          textTransform: "uppercase",
          fontWeight: 600,
          color: "#8a93a1",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {label}
      </div>
      <div
        className="sb-display"
        style={{
          fontWeight: 700,
          fontSize: "clamp(38px, 11vw, 52px)",
          lineHeight: 1.05,
          letterSpacing: "-0.04em",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function ServicePackageBlock({
  pkg,
}: {
  pkg: (typeof servicePackages)[number];
}) {
  return (
    <div
      className="sb-asym sb-pkg"
      style={{
        display: "grid",
        gridTemplateColumns: "5fr 7fr",
        gap: "clamp(40px, 6vw, 72px)",
        alignItems: "start",
      }}
    >
      <div>
        <Display
          top={pkg.name.split(" ")[0]}
          rest={pkg.name.split(" ").slice(1).join(" ")}
          oblique
          size="clamp(40px,4.6vw,60px)"
          style={{ marginBottom: 18 }}
        />
        <p style={{ color: "#b3bcc8", margin: "0 0 32px", maxWidth: "38ch" }}>
          {pkg.tagline}
        </p>
        <div
          style={{
            display: "flex",
            gap: 26,
            borderTop: "1px solid rgba(255,255,255,.14)",
            borderBottom: "1px solid rgba(255,255,255,.14)",
            padding: "20px 0",
          }}
        >
          <PriceCell label="Cars" value={pkg.carPrice} />
          <div style={{ width: 1, background: "rgba(255,255,255,.14)" }} />
          <PriceCell label="SUVs / 4WDs" value={pkg.suvPrice} />
        </div>
      </div>
      <div
        className="sb-two"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 44 }}
      >
        <div>
          <div style={subhead}>Exterior</div>
          {pkg.exterior.map((r) => (
            <ChecklistItem key={r} text={r} />
          ))}
        </div>
        <div>
          <div style={subhead}>Interior</div>
          {pkg.interior.map((r) => (
            <ChecklistItem key={r} text={r} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Services() {
  return (
    <section
      id="pricing"
      className="sb-rev"
      style={{ ...wrap, padding: `${sectionPad} 24px` }}
    >
      <div style={{ marginBottom: "clamp(40px, 7vw, 70px)" }}>
        <Display top="packages" oblique size="clamp(50px,7vw,70px)" center />
      </div>
      <div
        style={{
          display: "grid",
          gap: "clamp(40px, 6vw, 72px)",
        }}
      >
        {servicePackages.map((pkg, i) => (
          <div
            key={pkg.name}
            style={{
              paddingTop: i === 0 ? 0 : "clamp(40px, 6vw, 72px)",
              borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,.1)",
            }}
          >
            <ServicePackageBlock pkg={pkg} />
          </div>
        ))}
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Marquee watermark                                                   */
/* ------------------------------------------------------------------ */

function Marquee() {
  return (
    <div style={{ padding: "6px 0 20px", overflow: "hidden" }}>
      <div
        className="sb-display"
        style={{
          display: "flex",
          width: "max-content",
          animation: "sbmarq 36s linear infinite",
          fontWeight: 700,
          fontStyle: "italic",
          fontSize: "clamp(72px, 13vw, 184px)",
          lineHeight: 0.9,
          letterSpacing: "-0.05em",
          color: "rgba(255,255,255,.09)",
          whiteSpace: "nowrap",
        }}
      >
        <span style={{ paddingRight: 70 }}>
          Bound to shine - bound to shine -{" "}
        </span>
        <span style={{ paddingRight: 70 }}>
          Bound to shine - bound to shine -{" "}
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Paint polishing add-on                                              */
/* ------------------------------------------------------------------ */

function Polishing() {
  return (
    <section
      className="sb-bleed sb-rev"
      style={{
        display: "grid",
        gridTemplateColumns: "7fr 5fr",
        alignItems: "stretch",
      }}
    >
      <div
        className="sb-polishimg"
        style={{ position: "relative", minHeight: 520 }}
      >
        <Photo
          src="/polish.png"
          alt="Dual-action polisher working a car bonnet"
          objectPosition="center"
        />
      </div>
      <div
        className="sb-overlap"
        style={{
          background: "#0b0f14",
          border: "1px solid rgba(255,255,255,.08)",
          padding: "clamp(44px, 5vw, 72px)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          margin: "56px 0 56px -110px",
          position: "relative",
          zIndex: 2,
        }}
      >
        <Eyebrow>Add-on</Eyebrow>
        <Display
          top="Paint"
          rest="polishing"
          oblique
          size="clamp(34px,4.4vw,52px)"
          style={{ marginBottom: 16 }}
        />
        <p style={{ color: "#b3bcc8", margin: "0 0 28px", maxWidth: "34ch" }}>
          Restore depth, enhance gloss, protect longer. Light swirls and
          imperfections reduced, around six months of protection.
        </p>
        <div
          style={{
            display: "flex",
            gap: 26,
            borderTop: "1px solid rgba(255,255,255,.14)",
            padding: "18px 0 26px",
          }}
        >
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 11.5,
                letterSpacing: 1.6,
                textTransform: "uppercase",
                color: "#8a93a1",
              }}
            >
              Cars
            </div>
            <div
              className="sb-display"
              style={{
                fontWeight: 700,
                fontSize: 38,
                letterSpacing: "-0.04em",
              }}
            >
              +$80
            </div>
          </div>
          <div style={{ flex: 1 }}>
            <div
              style={{
                fontSize: 11.5,
                letterSpacing: 1.6,
                textTransform: "uppercase",
                color: "#8a93a1",
              }}
            >
              SUVs / 4WDs
            </div>
            <div
              className="sb-display"
              style={{
                fontWeight: 700,
                fontSize: 38,
                letterSpacing: "-0.04em",
              }}
            >
              +$100
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Stats band — ghost numbers on accent                                */
/* ------------------------------------------------------------------ */

// function StatCell({ stat, last }: { stat: Stat; last: boolean }) {
//   const { value, ref } = useCountUp(stat.n);
//   return (
//     <div
//       ref={ref}
//       style={{
//         position: "relative",
//         minHeight: 190,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         borderRight: last ? "none" : "1px solid rgba(255,255,255,.28)",
//         padding: "0 12px",
//       }}
//     >
//       <div
//         className="sb-display"
//         style={{
//           fontWeight: 700,
//           fontStyle: "italic",
//           fontSize: "clamp(72px, 9vw, 128px)",
//           lineHeight: 1,
//           letterSpacing: "-0.05em",
//           color: "rgba(255,255,255,.2)",
//         }}
//       >
//         {value.toLocaleString()}
//       </div>
//       <div
//         style={{
//           position: "absolute",
//           bottom: 34,
//           fontSize: 12.5,
//           fontWeight: 600,
//           letterSpacing: 1.8,
//           textTransform: "uppercase",
//           color: "#fff",
//         }}
//       >
//         {stat.label}
//       </div>
//     </div>
//   );
// }

// function StatsBand() {
//   return (
//     <section id="sb-stats" style={{ background: "#1b7cff" }}>
//       <div
//         className="sb-4up"
//         style={{
//           ...wrap,
//           padding: "48px 24px",
//           display: "grid",
//           gridTemplateColumns: "repeat(4, 1fr)",
//           gap: 0,
//         }}
//       >
//         {stats.map((s, i) => (
//           <StatCell key={s.label} stat={s} last={i === stats.length - 1} />
//         ))}
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/* Two-up CTA                                                          */
/* ------------------------------------------------------------------ */

// function CtaBlock({
//   eyebrow,
//   top,
//   rest,
//   cta,
//   tone,
//   label,
//   sheen,
// }: {
//   eyebrow: string;
//   top: string;
//   rest: string;
//   cta: string;
//   tone: string;
//   label: string;
//   sheen?: number;
// }) {
//   return (
//     <div
//       style={{
//         position: "relative",
//         minHeight: 440,
//         display: "flex",
//         flexDirection: "column",
//         alignItems: "center",
//         justifyContent: "center",
//         textAlign: "center",
//         padding: "60px 30px",
//       }}
//     >
//       <Photo tone={tone} label={label} sheen={sheen} />
//       <div
//         style={{
//           position: "absolute",
//           inset: 0,
//           background: "rgba(7,9,12,.34)",
//         }}
//       />
//       <div style={{ position: "relative" }}>
//         <Eyebrow center>{eyebrow}</Eyebrow>
//         <Display
//           top={top}
//           rest={rest}
//           oblique
//           center
//           size="clamp(30px,3.6vw,46px)"
//           style={{ marginBottom: 26 }}
//         />
//         <GhostButton>{cta}</GhostButton>
//       </div>
//     </div>
//   );
// }

// function TwoUpCta() {
//   return (
//     <section
//       className="sb-bleed sb-rev"
//       style={{ display: "grid", gridTemplateColumns: "1fr 1fr" }}
//     >
//       <CtaBlock
//         eyebrow="Get in touch"
//         top="Paint looking"
//         rest="tired?"
//         cta="Book a detail"
//         tone="radial-gradient(130% 110% at 22% 16%, #2d3f52 0%, #17222e 46%, #0a0d12 82%)"
//         sheen={104}
//         label="[ foam-covered rear quarter ]"
//       />
//       <CtaBlock
//         eyebrow="Fleet & regulars"
//         top="Need it done"
//         rest="every month?"
//         cta="Contact us"
//         tone="radial-gradient(130% 110% at 78% 24%, #24333f 0%, #14202c 46%, #090c11 82%)"
//         sheen={126}
//         label="[ interior — front seats ]"
//       />
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/* Testimonials                                                        */
/* ------------------------------------------------------------------ */

function Testimonials() {
  const [i, setI] = useState(0);
  const t = testimonials[i];
  return (
    <section
      className="sb-rev"
      style={{
        background: "#0b0f14",
        borderTop: "1px solid rgba(255,255,255,.07)",
        borderBottom: "1px solid rgba(255,255,255,.07)",
      }}
    >
      <div
        style={{
          maxWidth: 940,
          margin: "0 auto",
          padding: `${sectionPad} 24px`,
          textAlign: "center",
        }}
      >
        <Eyebrow center>Testimonials</Eyebrow>

        <p
          className="sb-display"
          style={{
            fontWeight: 500,
            fontSize: "clamp(26px, 3.8vw, 44px)",
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            margin: "0 0 26px",
          }}
        >
          {t.quote}
        </p>
        <div
          style={{
            fontFamily: "'Barlow Condensed', sans-serif",
            fontWeight: 600,
            fontSize: 18,
            textTransform: "uppercase",
            letterSpacing: 0.5,
            color: "#fff",
          }}
        >
          {t.name}
        </div>
        <div
          style={{
            fontSize: 12,
            letterSpacing: 1.6,
            textTransform: "uppercase",
            color: "#8a93a1",
            marginTop: 4,
          }}
        >
          {t.role}
        </div>

        <div
          className="sb-dots"
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            marginTop: 28,
          }}
        >
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className="sb-dot"
              aria-label={`Testimonial ${idx + 1}`}
              aria-current={idx === i ? "true" : undefined}
              onClick={() => setI(idx)}
              style={{
                width: idx === i ? 28 : 10,
                height: 3,
                background: idx === i ? "#1b7cff" : "rgba(255,255,255,.22)",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Journal                                                             */
/* ------------------------------------------------------------------ */

// function Journal() {
//   return (
//     <section
//       className="sb-rev"
//       style={{ ...wrap, padding: `${sectionPad} 24px` }}
//     >
//       <div style={{ textAlign: "center", marginBottom: 44 }}>
//         <Eyebrow center>From the bay</Eyebrow>
//         <Display
//           top="Detailing"
//           rest="notes"
//           oblique
//           center
//           size="clamp(34px,4.4vw,54px)"
//         />
//       </div>
//       <div
//         className="sb-3up"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: 2,
//         }}
//       >
//         {articles.map((a) => (
//           <a
//             key={a.title}
//             href="#"
//             style={{
//               display: "block",
//               background: "#0b0f14",
//               border: "1px solid rgba(255,255,255,.08)",
//               color: "inherit",
//             }}
//           >
//             <div style={{ position: "relative", height: 180 }}>
//               <Photo
//                 tone="radial-gradient(130% 120% at 50% 12%, #2a3b4b 0%, #16212d 46%, #0b0e13 82%)"
//                 vignette={false}
//                 sheen={108}
//                 grain={0.06}
//               />
//             </div>
//             <div style={{ padding: "22px 24px 26px" }}>
//               <div
//                 style={{
//                   display: "flex",
//                   gap: 10,
//                   fontSize: 11.5,
//                   letterSpacing: 1.4,
//                   textTransform: "uppercase",
//                   marginBottom: 12,
//                 }}
//               >
//                 <span style={{ color: "#1b7cff" }}>{a.tag}</span>
//                 <span style={{ color: "#8a93a1" }}>· {a.date}</span>
//               </div>
//               <div
//                 className="sb-display"
//                 style={{
//                   fontWeight: 600,
//                   fontSize: 21,
//                   lineHeight: 1.08,
//                   letterSpacing: "-0.01em",
//                 }}
//               >
//                 {a.title}
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/* Newsletter                                                          */
/* ------------------------------------------------------------------ */

// function Newsletter() {
//   return (
//     <section style={{ background: "#f2f4f7" }}>
//       <div
//         className="sb-asym"
//         style={{
//           ...wrap,
//           padding: "64px 24px",
//           display: "grid",
//           gridTemplateColumns: "1fr 2fr",
//           gap: 56,
//           alignItems: "end",
//         }}
//       >
//         <h3
//           className="sb-display sb-oblique"
//           style={{
//             fontWeight: 700,
//             fontSize: "clamp(28px,3.4vw,42px)",
//             lineHeight: 0.94,
//             letterSpacing: "-0.03em",
//             color: "#18171a",
//           }}
//         >
//           Detailing
//           <br />
//           <span style={{ color: "#1b7cff" }}>tips &amp; deals</span>
//         </h3>
//         <form
//           style={{ display: "flex", alignItems: "flex-end" }}
//           onSubmit={(e) => e.preventDefault()}
//         >
//           <input
//             type="email"
//             placeholder="Your email address"
//             style={{
//               flex: 1,
//               minWidth: 0,
//               border: "none",
//               borderBottom: "1px solid rgba(0,0,0,.3)",
//               background: "transparent",
//               padding: "14px 2px",
//               fontFamily: "'DM Sans', sans-serif",
//               fontSize: 16,
//               color: "#18171a",
//               outline: "none",
//             }}
//           />
//           <button
//             type="submit"
//             className="sb-btn sb-btn-primary"
//             style={{ padding: "15px 34px" }}
//           >
//             Subscribe
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// }

/* ------------------------------------------------------------------ */
/* Get in touch                                                        */
/* ------------------------------------------------------------------ */

const contactRow: CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: 14,
  padding: "16px 2px",
  borderBottom: "1px solid rgba(0,0,0,.14)",
  color: "#18171a",
  fontFamily: "'DM Sans', sans-serif",
  fontSize: 17,
  textDecoration: "none",
};

const contactLabel: CSSProperties = {
  fontFamily: "'Barlow Condensed', sans-serif",
  fontWeight: 600,
  fontSize: 13,
  textTransform: "uppercase",
  letterSpacing: 1.4,
  color: "#6b7280",
  minWidth: 96,
};

const EMAIL = "slickbound01@gmail.com";
const GMAIL_COMPOSE = "https://mail.google.com/mail/?view=cm&fs=1&to=" + EMAIL;

function GetInTouch() {
  return (
    <section id="contact" style={{ background: "#f2f4f7" }}>
      <div
        className="sb-asym sb-contact sb-rev"
        style={{
          ...wrap,
          padding: `${sectionPad} 24px`,
          display: "grid",
          gridTemplateColumns: "1fr 2fr",
          gap: 56,
          alignItems: "start",
        }}
      >
        <div>
          <Eyebrow>Book a detail</Eyebrow>
          <h3
            className="sb-display sb-oblique"
            style={{
              fontWeight: 700,
              fontSize: "clamp(28px,3.4vw,42px)",
              lineHeight: 0.94,
              letterSpacing: "-0.03em",
              color: "#18171a",
            }}
          >
            Get in
            <br />
            <span style={{ color: "#1b7cff" }}>touch</span>
          </h3>
          <p
            style={{
              marginTop: 18,
              maxWidth: 320,
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 15,
              lineHeight: 1.6,
              color: "#4b5563",
            }}
          >
            Send us an email, DM us on Instagram, or give us a call
          </p>
        </div>

        <div>
          <a
            href={`mailto:${EMAIL}`}
            className="sb-contactrow"
            style={contactRow}
          >
            <span className="sb-contactlabel" style={contactLabel}>
              Email
            </span>
            <span>{EMAIL}</span>
          </a>
          <a
            href="https://www.instagram.com/slickbound_detailing/"
            target="_blank"
            rel="noopener noreferrer"
            className="sb-contactrow"
            style={contactRow}
          >
            <span className="sb-contactlabel" style={contactLabel}>
              Instagram
            </span>
            <span>@slickbounddetailing</span>
          </a>
          <a
            href="tel:0210286731"
            className="sb-contactrow"
            style={{ ...contactRow, borderBottom: "none" }}
          >
            <span className="sb-contactlabel" style={contactLabel}>
              Phone
            </span>
            <span>021 028 67321</span>
          </a>

          <div
            style={{
              marginTop: 28,
              display: "flex",
              flexWrap: "wrap",
              gap: 12,
              alignItems: "center",
            }}
          >
            <a
              href={GMAIL_COMPOSE}
              target="_blank"
              rel="noopener noreferrer"
              className="sb-btn sb-btn-primary"
              style={{ padding: "15px 34px", textDecoration: "none" }}
            >
              Email us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Footer                                                              */
/* ------------------------------------------------------------------ */

const footColHead: CSSProperties = {
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: 1.4,
  textTransform: "uppercase",
  color: "#fff",
  marginBottom: 14,
};

function Footer() {
  return (
    <footer style={{ background: "#07090c" }}>
      <div
        className="sb-foot"
        style={{
          ...wrap,
          padding: "78px 24px 40px",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 44,
        }}
      >
        <div>
          <div
            className="sb-display sb-oblique"
            style={{
              fontWeight: 700,
              fontSize: "clamp(30px,3.6vw,44px)",
              lineHeight: 0.95,
              letterSpacing: "-0.03em",
              marginBottom: 14,
            }}
          >
            Slick<span style={{ color: "#1b7cff" }}>Bound</span>
            <br />
            Detailing
          </div>
        </div>
        <div>
          <div style={footColHead}>Office</div>
          <div style={{ fontSize: 15, color: "#8c95a3", lineHeight: 1.9 }}>
            Auckland, NZ
            <br />
            <a href="tel:0210286731" style={{ color: "#8c95a3" }}>
              021 028 67321
            </a>
            <br />
            <a
              href="mailto:slickbound01@gmail.com"
              style={{ color: "#8c95a3" }}
            >
              slickbound01@gmail.com
            </a>
          </div>
        </div>
        <div>
          <div style={footColHead}>Links</div>
          <div
            className="sb-footlinks"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 9,
              fontSize: 15,
            }}
          >
            <a href="#services" style={{ color: "#8c95a3" }}>
              Services
            </a>
            <a href="#pricing" style={{ color: "#8c95a3" }}>
              Pricing
            </a>
            <a href="#contact" style={{ color: "#8c95a3" }}>
              Contact
            </a>
          </div>
        </div>
        <div>
          <div style={footColHead}>Get in touch</div>
          <div
            className="sb-footlinks"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 9,
              fontSize: 15,
            }}
          >
            <a
              href="https://www.instagram.com/slickbound_detailing/"
              style={{ color: "#8c95a3" }}
            >
              Instagram
            </a>
            {/* <a href="#" style={{ color: "#8c95a3" }}>
              Facebook
            </a>
            <a href="#" style={{ color: "#8c95a3" }}>
              TikTok
            </a> */}
          </div>
        </div>
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,.08)" }}>
        <div
          style={{
            ...wrap,
            padding: 24,
            display: "flex",
            justifyContent: "space-between",
            gap: 20,
            fontSize: 12,
            letterSpacing: 1.2,
            textTransform: "uppercase",
            color: "#8a93a1",
          }}
        >
          <span>© 2026 SlickBound Detailing</span>
        </div>
      </div>
    </footer>
  );
}

/* ------------------------------------------------------------------ */

export default function App() {
  useRevealOnScroll();
  return (
    <>
      <Header />
      <Hero />
      {/* <TrustStrip /> */}
      <ServicesTiles />
      <Services />
      <Marquee />

      {/* <IntroSplit /> */}
      {/* <BleedBand /> */}
      <Polishing />
      {/* <StatsBand /> */}
      {/* <TwoUpCta /> */}
      <Testimonials />
      <GetInTouch />
      <Footer />
    </>
  );
}

/* keep the flat service list available for a future /services page */
export { services };
