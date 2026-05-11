import Script from "next/script";

const PLAUSIBLE_DOMAIN = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN || "getapscorecalculator.xyz";

export function Analytics() {
  return (
    <>
      {/* Plausible Analytics — privacy-friendly, no cookies */}
      <Script
        defer
        data-domain={PLAUSIBLE_DOMAIN}
        src="https://plausible.io/js/script.js"
        strategy="afterInteractive"
      />
    </>
  );
}
