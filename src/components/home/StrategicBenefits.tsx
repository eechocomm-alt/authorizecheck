const benefits = [
  {
    icon: "warning",
    iconWrap: "bg-error-container text-error",
    title: "Avoid Costly Surprises",
    body: "Save thousands on unrecorded hidden gearbox failures, flooded electrics, or frame structural cut-and-shuts.",
    accent: "text-error",
    accentLabel: "Prevent £3,500+ Avg Repairs",
  },
  {
    icon: "balance",
    iconWrap: "bg-secondary-fixed text-secondary",
    title: "Negotiate with Confidence",
    body: "Leverage past MOT failure advisories (brake wear, suspension bushes, tyre degradation) to secure major cash discounts.",
    accent: "text-secondary",
    accentLabel: "Sovereign Bargaining Power",
  },
  {
    icon: "gavel",
    iconWrap: "bg-surface-container text-on-tertiary-container",
    title: "Protect Yourself Legally",
    body: "Eliminate repossession risk. If an active loan is unpaid, banks retain legal ownership and can seize your car.",
    accent: "text-on-tertiary-container",
    accentLabel: "100% Title Guarantee",
  },
  {
    icon: "trending_up",
    iconWrap: "bg-surface-container-high text-secondary-container",
    title: "Make Smarter Investments",
    body: "Review depreciation forecasts, tax band adjustments, and residual valuations to safeguard resale equity.",
    accent: "text-secondary-container",
    accentLabel: "5-Year Equity Forecasting",
  },
];

export function StrategicBenefits() {
  return (
    <section className="w-full py-space-3xl bg-surface-container-low">
      <div className="max-w-[1240px] mx-auto px-gutter-desktop">
        <div className="text-center max-w-2xl mx-auto mb-space-2xl">
          <span className="font-label-md text-label-md text-secondary uppercase font-bold tracking-wider">
            Uncompromising Clarity
          </span>
          <h2 className="font-headline-xl text-headline-xl text-on-surface mt-space-2xs tracking-tight">
            Strategic Buyer Benefits
          </h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant mt-space-xs">
            Never buy blind. Our institutional audits insulate you from severe
            mechanical liabilities and legal forfeitures.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-space-lg">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="p-space-lg rounded-xl bg-surface-container-lowest shadow-md flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center mb-space-md ${benefit.iconWrap}`}
                >
                  <span className="material-symbols-outlined text-[24px]">
                    {benefit.icon}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-space-xs">
                  {benefit.title}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {benefit.body}
                </p>
              </div>
              <span
                className={`font-label-md text-label-md font-bold mt-space-md ${benefit.accent}`}
              >
                {benefit.accentLabel}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
