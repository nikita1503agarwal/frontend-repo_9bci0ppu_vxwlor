import { ShieldCheck, Zap, BarChart2, Cpu } from 'lucide-react'

const features = [
  {
    icon: Cpu,
    title: 'AI-Optimized Trade Execution',
    desc: 'Adaptive order routing and microstructure-aware fills engineered for precision and speed.'
  },
  {
    icon: ShieldCheck,
    title: 'Institutional-Grade Risk Management',
    desc: 'Granular limits, circuit breakers, and continuous monitoring designed for reliability.'
  },
  {
    icon: BarChart2,
    title: 'Real-Time Market Intelligence',
    desc: 'Normalized data streams across venues with low-latency analytics and signal visualization.'
  },
  {
    icon: Zap,
    title: 'Autonomous Strategy Backtesting',
    desc: 'High-fidelity historical simulation with execution modeling and parameter sweeps.'
  }
]

export default function ValueProps() {
  return (
    <section className="relative bg-[#05060A] text-white">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(800px_400px_at_10%_10%,rgba(255,0,122,0.05),transparent),radial-gradient(900px_500px_at_90%_0%,rgba(0,209,255,0.06),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 py-24 relative">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div key={i} className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 backdrop-blur-xl transition hover:bg-white/[0.06]">
              <f.icon className="h-6 w-6 text-white/80" />
              <h3 className="mt-4 text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm text-white/70">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
