export const metadata = {
  title: "Work",
};

export default function WorkPage() {
  return (
    <div className="main-container py-12">
      <div className="card p-8">
        <h1 className="hero-title">Work & Capabilities</h1>
        <p className="text-sm subtle mt-3 max-w-2xl">
          A snapshot of hands-on experience across robotics, fabrication, and prototyping.
          TODO: add formal experience and awards.
        </p>
      </div>

      <div className="grid gap-6 mt-8 lg:grid-cols-[2fr,1fr]">
        <div className="grid gap-6">
          <section className="card p-6">
            <h2 className="section-title">Highlights</h2>
            <ul className="mt-4 list-disc list-inside text-sm subtle">
              <li>Custom gearbox design and precision motion control for a 4-DOF robot arm.</li>
              <li>Modular humanoid torso with expandable electronics housing.</li>
              <li>Autonomous mobile robotics with ultrasonic sensing and control logic.</li>
              <li>End-to-end manufacturing: CAD ? CAM ? CNC machining.</li>
            </ul>
          </section>
          <section className="card p-6">
            <h2 className="section-title">Capabilities</h2>
            <div className="grid gap-3 sm:grid-cols-2 text-sm">
              {[
                "Mechanical design & CAD",
                "Additive manufacturing",
                "CNC machining workflows",
                "Embedded control",
                "Rapid prototyping",
                "System integration",
              ].map((item) => (
                <div key={item} className="card p-3 bg-white">
                  <p className="font-semibold">{item}</p>
                </div>
              ))}
            </div>
          </section>
        </div>

        <aside className="card p-6 h-fit">
          <h3 className="section-title">Experience</h3>
          <ul className="mt-4 text-sm subtle list-disc list-inside">
            <li>TODO: Add internships, lab roles, or leadership positions.</li>
            <li>TODO: Add competitions or awards.</li>
            <li>TODO: Add certifications.</li>
          </ul>
        </aside>
      </div>
    </div>
  );
}
