import { ImageResponse } from "next/og";

export const alt = "Marco Lee — Senior Backend Engineer";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: "#0a0a0a",
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(249,115,22,0.25) 0%, transparent 50%), radial-gradient(rgba(255,255,255,0.06) 1.5px, transparent 1.5px)",
          backgroundSize: "100% 100%, 32px 32px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "88px",
              height: "88px",
              borderRadius: "20px",
              background: "linear-gradient(135deg, #f97316, #f59e0b)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#ffffff",
              fontSize: "36px",
              fontWeight: 700,
            }}
          >
            ML
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#34d399",
              fontSize: "26px",
            }}
          >
            <div
              style={{
                width: "14px",
                height: "14px",
                borderRadius: "50%",
                backgroundColor: "#34d399",
              }}
            />
            Available for senior remote roles
          </div>
        </div>
        <div
          style={{
            fontSize: "84px",
            fontWeight: 800,
            color: "#ffffff",
            letterSpacing: "-2px",
          }}
        >
          Marco Lee
        </div>
        <div
          style={{
            marginTop: "12px",
            fontSize: "42px",
            color: "#a1a1aa",
          }}
        >
          Senior Backend Engineer
        </div>
        <div
          style={{
            marginTop: "28px",
            fontSize: "30px",
            color: "#f97316",
            fontWeight: 600,
          }}
        >
          Laravel · NestJS · Node.js · MySQL/PostgreSQL · AWS
        </div>
        <div
          style={{
            marginTop: "48px",
            fontSize: "26px",
            color: "#71717a",
          }}
        >
          12+ years · 5M+ monthly users served · solutionslee.com
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
