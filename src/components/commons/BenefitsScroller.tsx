import AutoScrollRow from "./AutoScrollRow";

export default function BenefitsScroller() {
  const row1 = [
    "Secure Transactions",
    "Dedicated Support",
    "Automatic Adjustments",
    "Real-Time Reports",
  ];

  const row2 = [
    "Smart Spending",
    "Customizable Plans",
    "Instant Savings",
    "Flexible Payments",
  ];

  return (
    <div className="relative w-full mt-20 space-y-6 pb-16">

      {/* Fade left + right */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-40 bg-gradient-to-r from-[#F4FDE8] to-transparent"></div>
      <div className="pointer-events-none absolute right-0 top-0 h-full w-40 bg-gradient-to-l from-[#F4FDE8] to-transparent"></div>

      {/* Row 1 */}
      <AutoScrollRow items={row1} />

      {/* Row 2 (reverse direction) */}
      <AutoScrollRow items={row2} reverse />
    </div>
  );
}
