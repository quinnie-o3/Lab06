import SettingsToggle from "../../components/SettingsToggle";

async function getUserProfile() {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return {
    name: "Bao Bao",
    role: "Student",
    status: "Active",
  };
}

export default async function DashboardPage() {
  const profile = await getUserProfile();

  return (
    <div>
      <h1 style={{ marginTop: 0 }}>User Profile</h1>
      <div style={{ marginBottom: 16 }}>
        <p>
          <strong>Name:</strong> {profile.name}
        </p>
        <p>
          <strong>Role:</strong> {profile.role}
        </p>
        <p>
          <strong>Status:</strong> {profile.status}
        </p>
      </div>
      <SettingsToggle />
    </div>
  );
}
