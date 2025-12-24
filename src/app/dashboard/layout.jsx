export default function DashboardLayout({ children }) {
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: 220,
          padding: 16,
          background: "#111827",
          color: "#f9fafb",
        }}
      >
        <h2 style={{ marginTop: 0 }}>Dashboard</h2>
        <nav>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            <li style={{ marginBottom: 8 }}>Overview</li>
            <li style={{ marginBottom: 8 }}>Reports</li>
            <li style={{ marginBottom: 8 }}>Settings</li>
          </ul>
        </nav>
      </aside>
      <section style={{ flex: 1, padding: 24 }}>{children}</section>
    </div>
  );
}
