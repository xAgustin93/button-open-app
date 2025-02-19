"use client";

export default function HomePage() {
  const openApp = () => {
    const url = "com.fitxa://";
    window.location.href = url;
  };

  const openApp2 = () => {
    const url = "com.fitxa";
    window.location.href = url;
  };

  const openAppStore = () => {
    const playStoreUrl =
      "https://play.google.com/store/apps/details?id=com.fitxa";
    window.location.href = playStoreUrl;
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "50px" }}>
      <button
        onClick={openApp}
        style={{ backgroundColor: "red", padding: "20px" }}
      >
        Abrir App
      </button>
      <button
        onClick={openApp2}
        style={{ backgroundColor: "blue", padding: "20px" }}
      >
        Abrir App 2
      </button>
      <button
        onClick={openAppStore}
        style={{ backgroundColor: "green", padding: "20px" }}
      >
        Abrir App Store
      </button>
    </div>
  );
}
