import React from "react";
import ModelViewer from "../Components/ModelViewer";

const Hero = () => {
  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        background: "#0a0015",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Left: Headline */}
      <div
        style={{
          position: "relative",
          zIndex: 10,
          paddingLeft: "6vw",
          flex: "0 0 auto",
        }}
      >
        <span
          style={{
            fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
            fontWeight: 800,
            color: "#ffffff",
            textShadow: "0 0 60px rgba(255,255,255,0.4)",
            lineHeight: 1.1,
            display: "block",
            whiteSpace: "nowrap",
            fontFamily: "sans-serif",
          }}
        >
          HACKSERIES
        </span>
      </div>

      {/* Right: 3D Model — absolutely positioned, overflows bottom */}
      <div
        style={{
          position: "absolute",
          right: "0",
          top: "0",
          width: "50vw",
          height: "100vh",
        }}
      >
        <ModelViewer
          url="/models/phoenix.glb"
          width="100%"
          height="100%"
          defaultRotationX={0}
          defaultRotationY={90}
          defaultZoom={0.22}
          minZoomDistance={0.22}
          maxZoomDistance={0.22}
          cameraFov={45}
          modelXOffset={0}
          modelYOffset={0}
          enableHoverRotation={false}
          enableManualRotation={true}
          autoRotate={false}
          environmentPreset="studio"
          ambientIntensity={0.3}
          keyLightIntensity={0.8}
          fillLightIntensity={0.2}
          rimLightIntensity={1.5}
          shadowOpacity={0.5}
        />
      </div>
    </section>
  );
};

export default Hero;
