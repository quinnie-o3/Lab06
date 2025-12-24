"use client";

import { useState } from "react";

export default function SettingsToggle() {
  const [theme, setTheme] = useState("light");

  return (
    <div
      style={{
        padding: 16,
        border: "1px solid #e5e7eb",
        borderRadius: 8,
        background: theme === "dark" ? "#111827" : "#f9fafb",
        color: theme === "dark" ? "#f9fafb" : "#111827",
      }}
    >
      <p style={{ marginTop: 0 }}>
        Theme: <strong>{theme}</strong>
      </p>
      <button
        type="button"
        onClick={() =>
          setTheme((prev) => (prev === "light" ? "dark" : "light"))
        }
      >
        Toggle dark/light
      </button>
    </div>
  );
}
