import { motion } from 'framer-motion'
import { ArrowRight, PlayCircle } from 'lucide-react'
import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative min-h-[92vh] w-full overflow-hidden bg-[#0A0B0F] text-white">
      {/* Spline 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Grain + gradient beams overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(1000px_600px_at_10%_-10%,rgba(78,0,255,0.25),transparent),radial-gradient(800px_500px_at_90%_10%,rgba(0,209,255,0.18),transparent),radial-gradient(600px_400px_at_50%_120%,rgba(255,0,122,0.18),transparent)]" />
        <div className="absolute inset-0 grain opacity-30" />
      </div>

      {/* Top announcement pill */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 lg:pt-14">
        <div className="w-full flex justify-center">
          <a href="#" className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur transition hover:bg-white/10">
            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]" />
            <span className="tracking-wide">Introducing AI-Powered Trade Automation</span>
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pb-24 pt-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl lg:text-7xl font-semibold leading-[1.05] tracking-tight text-white drop-shadow-xl"
            >
              Precision Algorithms for Autonomous Markets
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="mt-6 text-lg sm:text-xl text-white/70 max-w-2xl"
            >
              An advanced platform for systematic trading—built for accuracy, speed, and institutional-grade reliability. Execute, monitor, and evolve strategies with AI at the core.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-xl bg-white text-[#0A0B0F] px-6 py-3 text-base font-semibold shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset,0_10px_30px_rgba(255,255,255,0.1)] transition hover:-translate-y-0.5 hover:shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset,0_20px_40px_rgba(255,255,255,0.18)]"
              >
                Start Free Trial
              </a>
              <a
                href="#performance"
                className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-base font-semibold text-white/90 backdrop-blur transition hover:bg-white/10"
              >
                <PlayCircle className="h-5 w-5 mr-2" /> View Performance Metrics
              </a>
            </motion.div>

            <div className="mt-10 flex items-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                <span>Encrypted data at rest and in transit</span>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-sky-400" />
                <span>Millisecond-level execution</span>
              </div>
            </div>
          </div>

          {/* Hero mockup panel */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.12 }}
              className="relative rounded-2xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-xl shadow-2xl"
            >
              <div className="absolute -inset-px rounded-2xl pointer-events-none [mask-image:radial-gradient(80%_120%_at_50%_0%,black,transparent)]" style={{ background: 'linear-gradient(120deg, rgba(255,0,122,0.25), rgba(0,209,255,0.25))' }} />
              <div className="relative rounded-xl overflow-hidden bg-[#0C0E14] ring-1 ring-white/10">
                {/* Simulated dashboard mockup */}
                <div className="flex items-center justify-between px-4 py-3 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="h-3 w-3 rounded-full bg-red-500/70" />
                    <span className="h-3 w-3 rounded-full bg-yellow-400/70" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400/70" />
                  </div>
                  <span className="text-xs text-white/50">Algorithmic Console</span>
                </div>
                <div className="grid grid-cols-12 gap-3 p-4">
                  <div className="col-span-12 md:col-span-7 rounded-lg bg-white/5 p-4 ring-1 ring-white/10">
                    <div className="h-40 w-full neon-chart" />
                    <p className="mt-3 text-xs text-white/60">Live Execution Stream</p>
                  </div>
                  <div className="col-span-12 md:col-span-5 space-y-3">
                    <div className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                      <p className="text-xs text-white/50">Latency</p>
                      <p className="text-lg font-semibold">2.8 ms</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                      <p className="text-xs text-white/50">Fill Quality</p>
                      <p className="text-lg font-semibold">99.2%</p>
                    </div>
                    <div className="rounded-lg bg-white/5 p-3 ring-1 ring-white/10">
                      <p className="text-xs text-white/50">Coverage</p>
                      <p className="text-lg font-semibold">120+ markets</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
