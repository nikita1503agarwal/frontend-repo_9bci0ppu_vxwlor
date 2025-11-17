export default function Showcase() {
  return (
    <section className="relative bg-[#0A0B0F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-3xl sm:text-4xl font-semibold">Algorithm Engine</h2>
            <p className="text-white/70">A modular pipeline for ingestion, feature engineering, signal orchestration, and risk-aware execution.</p>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <ul className="space-y-2 text-sm text-white/70 list-disc pl-5">
                <li>Streaming ingestion with venue-normalized schemas</li>
                <li>On-line feature stores and adaptive signals</li>
                <li>Stateful execution with slippage modeling</li>
                <li>Policy-driven risk and portfolio constraints</li>
              </ul>
            </div>
          </div>
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="h-56 w-full rounded-xl neon-panel" />
              <p className="px-2 pt-3 text-sm text-white/60">Trade Automation Pipeline</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
              <div className="h-56 w-full rounded-xl neon-panel" />
              <p className="px-2 pt-3 text-sm text-white/60">Dashboard Preview & API Integrations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
