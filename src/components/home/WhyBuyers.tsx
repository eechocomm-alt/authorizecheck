const buyerItems = [
  {
    icon: "verified",
    title: "Hidden structural damage detection",
    body: "Spot unrecorded frame damage and poorly executed cosmetic patchwork before buying.",
  },
  {
    icon: "history",
    title: "V5C ownership logs & plate change timeline",
    body: "Trace full keeper durations and identify rapid churn or cloned plate switches.",
  },
  {
    icon: "speed",
    title: "MOT history & verified mileage rollback alerts",
    body: "Full MOT pass/fail records with itemized technician advisories and clocking flags.",
  },
  {
    icon: "analytics",
    title: "Real-time market valuation calculator",
    body: "See private trade-in and forecourt dealer values tailored to current UK market demand.",
  },
  {
    icon: "security",
    title: "Scam and clone vehicle prevention",
    body: "Ensure the chassis VIN matches national records, preventing legal seizure.",
  },
];

const checkpoints = [
  "Finance Free (HPI Clear)",
  "Not Written-Off",
  "Not Reported Stolen",
  "Valid MOT (318 Days)",
];

export function WhyBuyers() {
  return (
    <section className="w-full py-space-3xl bg-surface-container-low">
      <div className="max-w-[1240px] mx-auto px-gutter-desktop grid grid-cols-1 lg:grid-cols-12 gap-space-2xl items-center">
        <div className="lg:col-span-6 flex flex-col">
          <span className="font-label-md text-label-md text-secondary font-bold uppercase tracking-wider">
            Buyer Protection Shield
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface mt-space-2xs tracking-tight">
            Why Buyers Choose a Vehicle Check
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-sm mb-space-lg">
            Over 1 in 3 used cars in the UK carry a hidden story—from clocked
            odometers to severe collision write-offs. Purchase a vehicle check
            and receive your full report by email within 3–4 hours, so you can
            negotiate from strength or walk away.
          </p>
          <ul className="flex flex-col gap-space-sm">
            {buyerItems.map((item) => (
              <li
                key={item.title}
                className="flex items-start gap-space-sm p-space-sm bg-surface-container-lowest rounded-lg shadow-sm"
              >
                <span className="material-symbols-outlined text-on-tertiary-container mt-0.5">
                  {item.icon}
                </span>
                <div>
                  <strong className="font-label-lg text-label-lg text-on-surface block">
                    {item.title}
                  </strong>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {item.body}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-6">
          <div className="p-space-lg rounded-xl bg-surface-container-lowest shadow-xl">
            <div className="flex items-center justify-between pb-space-md border-b border-surface-container">
              <div className="flex items-center gap-space-sm">
                <div className="px-space-sm py-space-2xs bg-[#FFD200] rounded font-label-vrm text-[16px] text-black tracking-wider">
                  LR69 GXZ
                </div>
                <div>
                  <h4 className="font-label-lg text-label-lg text-on-surface">
                    2019 BMW 3 Series 320d M Sport
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    VIN: WBA5R72070F•••••• • 2.0L Diesel Automatic
                  </p>
                </div>
              </div>
              <span className="px-space-sm py-space-2xs rounded-full bg-tertiary-container text-tertiary-fixed-dim font-label-md text-label-md">
                PASS CLEAR
              </span>
            </div>
            <div className="my-space-lg p-space-md rounded-lg bg-surface-container-low flex items-center justify-between">
              <div>
                <span className="font-label-md text-label-md text-on-surface-variant uppercase">
                  AuthorizeCheck Health Index
                </span>
                <div className="flex items-baseline gap-space-xs mt-1">
                  <span className="font-display-hero text-[42px] leading-none text-on-surface font-black">
                    98
                  </span>
                  <span className="font-body-md text-body-md text-on-surface-variant">
                    / 100
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-tertiary-container mt-1 font-semibold flex items-center gap-1">
                  <span className="material-symbols-outlined text-[16px]">
                    check_circle
                  </span>
                  PASSED 28 CRITICAL INSTITUTIONAL CHECKS
                </p>
              </div>
              <div className="w-16 h-16 relative flex items-center justify-center">
                <svg className="w-16 h-16 -rotate-90" viewBox="0 0 36 36">
                  <path
                    className="text-surface-container-high"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3.5"
                  />
                  <path
                    className="text-on-tertiary-container"
                    d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="98, 100"
                    strokeLinecap="round"
                    strokeWidth="3.5"
                  />
                </svg>
                <span className="absolute font-label-md text-label-md font-bold text-on-surface">
                  98%
                </span>
              </div>
            </div>
            <div className="p-space-md rounded-lg bg-surface-container-lowest shadow-sm mb-space-md">
              <div className="flex justify-between items-center mb-space-xs">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  Verified Mileage Trajectory
                </span>
                <span className="font-label-md text-label-md text-on-tertiary-container flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]">
                    trending_up
                  </span>{" "}
                  No Rollback Detected
                </span>
              </div>
              <svg
                className="w-full h-16 text-secondary-container"
                fill="none"
                viewBox="0 0 300 60"
              >
                <path
                  d="M0 50 Q 75 42 150 28 T 300 8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                />
                <circle cx="0" cy="50" fill="currentColor" r="4" />
                <circle cx="100" cy="38" fill="currentColor" r="4" />
                <circle cx="200" cy="22" fill="currentColor" r="4" />
                <circle cx="300" cy="8" fill="#00C48C" r="5" />
              </svg>
              <div className="flex justify-between text-on-surface-variant font-body-sm text-body-sm mt-1">
                <span>2020: 12,400 mi</span>
                <span>2022: 34,100 mi</span>
                <span className="font-bold text-on-surface">
                  2024: 51,820 mi
                </span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-space-xs">
              {checkpoints.map((label) => (
                <div
                  key={label}
                  className="p-space-xs rounded bg-surface-container flex items-center gap-space-xs"
                >
                  <span className="material-symbols-outlined text-on-tertiary-container text-[18px]">
                    verified
                  </span>
                  <span className="font-label-md text-label-md text-on-surface">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
