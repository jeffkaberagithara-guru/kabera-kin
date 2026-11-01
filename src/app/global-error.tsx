"use client";

export default function GlobalError({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <html lang="en-KE">
      <body
        style={{
          backgroundColor: "#F4EEE1",
          color: "#1C221D",
          fontFamily: "Georgia, serif",
          margin: 0,
        }}
      >
        <main
          style={{
            maxWidth: "720px",
            margin: "0 auto",
            padding: "96px 24px",
          }}
        >
          <p
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#8E3F25",
            }}
          >
            Kabera Kin
          </p>
          <h1
            style={{
              fontSize: "clamp(2.4rem, 6vw, 4rem)",
              lineHeight: 1.04,
              margin: "24px 0 0",
              color: "#14352C",
            }}
          >
            The sanctuary is temporarily offline.
          </h1>
          <p style={{ fontSize: "17px", lineHeight: 1.7, color: "#1C221D" }}>
            Please refresh the page. If the problem continues, call the 24-hour
            rescue desk on 0800 720 KIN.
          </p>
          <button
            type="button"
            onClick={() => reset()}
            style={{
              marginTop: "24px",
              backgroundColor: "#14352C",
              color: "#FBF7EE",
              border: 0,
              padding: "14px 24px",
              fontFamily: "Arial, sans-serif",
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              cursor: "pointer",
            }}
          >
            Try again
          </button>
        </main>
      </body>
    </html>
  );
}
