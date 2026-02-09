import { ImageResponse } from "next/og";

export const runtime = "edge";

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
          background: "#f6f2ea",
          color: "#0f0f0f",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          gap: 24,
        }}
      >
        <div style={{ fontSize: 64, fontWeight: 800 }}>Teo Yu Dong</div>
        <div style={{ fontSize: 40, fontWeight: 700 }}>Maker Portfolio</div>
        <div style={{ fontSize: 28 }}>Robotics - Fabrication - Prototyping</div>
        <div
          style={{
            marginTop: 20,
            padding: "12px 20px",
            border: "3px solid #0f0f0f",
            borderRadius: 999,
            width: "fit-content",
            fontSize: 24,
            fontWeight: 700,
            background: "#c8ff47",
          }}
        >
          osfordteo@gmail.com
        </div>
      </div>
    ),
    size
  );
}
