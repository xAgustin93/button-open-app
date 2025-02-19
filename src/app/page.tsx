import React from "react";

export default function HomePage() {
  const openApp = () => {
    const url = "com.fitxa://"; // Reemplázalo con el esquema de la app
    window.location.href = url;
  };

  const openAppStore = () => {
    const playStoreUrl =
      "https://play.google.com/store/apps/details?id=com.fitxa";
    window.location.href = playStoreUrl;
  };
  return (
    <div>
      <h1>OPEN APP</h1>
      <button onClick={openApp}>Abrir App</button>;
      <button onClick={openAppStore}>Abrir App Store</button>;
    </div>
  );
}
