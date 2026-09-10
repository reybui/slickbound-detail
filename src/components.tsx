import type { CSSProperties, ReactNode } from "react";

export const wrap: CSSProperties = {
  maxWidth: 1230,
  margin: "0 auto",
  padding: "0 24px",
};

/* fine film grain — keeps the gradient "photos" from reading as flat CSS */
const GRAIN =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")";

export function Photo({
  tone = "#0e131a",
  src,
  alt = "",
  objectPosition = "center",
  label,
  vignette = true,
  grain = 0.08,
  sheen = 112,
  glow = "rgba(27,124,255,.22)",
  children,
}: {
  /** CSS background used when no `src` is given (the gradient placeholder) */
  tone?: string;
  /** real image URL — a file in /public is referenced as "/name.png" */
  src?: string;
  alt?: string;
  objectPosition?: string;
  label?: string;
  vignette?: boolean;
  grain?: number;
  /** angle of the raking specular highlight, deg */
  sheen?: number;
  /** colour of the soft reflected glow */
  glow?: string;
  children?: ReactNode;
}) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        background: tone,
        overflow: "hidden",
      }}
    >
      {src && (
        <img
          src={src}
          alt={alt}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition,
          }}
        />
      )}
      {/* soft reflected colour glow */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: `radial-gradient(80% 60% at 72% 18%, ${glow} 0%, transparent 60%)`,
        }}
      />
      {/* key light falling across the panel — skipped over real photos */}
      {!src && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(90% 70% at 32% 8%, rgba(255,255,255,.14) 0%, rgba(255,255,255,.03) 34%, transparent 62%)",
          }}
        />
      )}
      {/* raking specular streak — reads as light on clear-coat */}
      {!src && (
        <div
          style={{
            position: "absolute",
            inset: "-20%",
            background: `linear-gradient(${sheen}deg, transparent 40%, rgba(255,255,255,.11) 49%, rgba(255,255,255,.28) 50%, rgba(255,255,255,.08) 52%, transparent 60%)`,
          }}
        />
      )}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: GRAIN,
          opacity: grain,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />
      {vignette && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "radial-gradient(130% 100% at 50% 25%, transparent 45%, rgba(7,9,12,.5) 82%, rgba(7,9,12,.88) 100%)",
          }}
        />
      )}
      {label && (
        <div
          style={{
            position: "absolute",
            left: 16,
            bottom: 13,
            fontFamily: "ui-monospace, Menlo, monospace",
            fontSize: 10,
            letterSpacing: 0.6,
            color: "rgba(255,255,255,.32)",
          }}
        >
          {label}
        </div>
      )}
      {children}
    </div>
  );
}

export function Eyebrow({
  children,
  center = false,
  style,
}: {
  children: ReactNode;
  center?: boolean;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        fontSize: 14,
        fontWeight: 900,
        letterSpacing: 1.8,
        textTransform: "uppercase",
        color: "#1B7CFF",
        marginBottom: 16,
        textAlign: center ? "center" : "left",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** Two-tone condensed heading: accent top line, white remainder. */
export function Display({
  top,
  rest,
  as: Tag = "h2",
  size = "clamp(34px,4.6vw,56px)",
  oblique = false,
  center = false,
  style,
}: {
  top: ReactNode;
  rest?: ReactNode;
  as?: "h1" | "h2" | "h3";
  size?: string;
  oblique?: boolean;
  center?: boolean;
  style?: CSSProperties;
}) {
  return (
    <Tag
      className={"sb-display" + (oblique ? " sb-oblique" : "")}
      style={{
        fontWeight: 700,
        fontSize: size,
        lineHeight: 0.9,
        letterSpacing: "-0.03em",
        margin: 0,
        textAlign: center ? "center" : "left",
        ...style,
      }}
    >
      <span style={{ color: "#1B7CFF" }}>{top}</span>
      {rest ? (
        <>
          {" "}
          <br />
          {rest}
        </>
      ) : null}
    </Tag>
  );
}

export function PrimaryButton({
  children,
  href = "#",
  style,
}: {
  children: ReactNode;
  href?: string;
  style?: CSSProperties;
}) {
  return (
    <a href={href} className="sb-btn sb-btn-primary" style={style}>
      {children}
    </a>
  );
}

export function GhostButton({
  children,
  href = "#",
  style,
}: {
  children: ReactNode;
  href?: string;
  style?: CSSProperties;
}) {
  return (
    <a href={href} className="sb-btn sb-btn-ghost" style={style}>
      {children}
    </a>
  );
}

export const Arrow = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M5 12h14M13 6l6 6-6 6"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="square"
    />
  </svg>
);
