import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #f97316, #f59e0b)",
          borderRadius: "14px",
          color: "#ffffff",
          fontSize: "30px",
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        ML
      </div>
    ),
    { ...size }
  );
}
