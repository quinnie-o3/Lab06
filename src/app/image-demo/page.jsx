import Image from "next/image";

export default function ImageDemoPage() {
  return (
    <main style={{ padding: 24, maxWidth: 960, margin: "0 auto" }}>
      <h1 style={{ marginTop: 0 }}>Image Optimization</h1>
      <p>
        The first image uses a standard img tag without width/height to observe
        layout shift. The second uses next/image with explicit dimensions.
      </p>

      <section style={{ marginBottom: 32 }}>
        <h2>Standard img</h2>
        <img
          src="/hero-landscape.svg"
          alt="Landscape illustration"
          style={{ width: "100%", height: "auto", display: "block" }}
        />
      </section>

      <section>
        <h2>next/image</h2>
        <Image
          src="/hero-landscape.svg"
          alt="Landscape illustration"
          width={2400}
          height={1400}
          style={{ width: "100%", height: "auto" }}
          priority
        />
      </section>
    </main>
  );
}
