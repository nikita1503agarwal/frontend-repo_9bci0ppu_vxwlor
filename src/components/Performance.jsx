import { motion } from 'framer-motion'

export default function Performance() {
  const stats = [
    { label: 'Backtesting Depth', value: '12+ years', sub: 'Tick & L2 where available' },
    { label: 'Execution Latency', value: '2.8 ms', sub: 'Median venue round-trip' },
    { label: 'Data Coverage', value: '120+ markets', sub: 'Equities, crypto, FX' },
    { label: 'Reliability', value: '99.98%', sub: 'Uptime last 12 months' },
  ]

  return (
    <section id="performance" className="relative bg-[#05060A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Performance Overview</h2>
          <p className="mt-3 max-w-2xl text-white/70">Engineered for deterministic speed and uncompromising consistency. No unrealistic claims—just rigorous engineering.</p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: i * 0.05 }}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div className="text-3xl font-semibold">{s.value}</div>
              <div className="mt-2 text-sm text-white/60">{s.label}</div>
              <div className="mt-1 text-xs text-white/50">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* Animated chart placeholder */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-white/[0.03] p-6">
          <div className="h-64 w-full neon-chart" />
          <p className="mt-3 text-sm text-white/60">Latency distribution and execution stability</p>
        </div>
      </div>
    </section>
  )
}
