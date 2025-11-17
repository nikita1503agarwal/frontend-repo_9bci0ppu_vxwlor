import { Lock, Server, Shield, Database } from 'lucide-react'

export default function Integrations() {
  return (
    <section className="relative bg-[#0A0B0F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center">
          <p className="text-sm uppercase tracking-widest text-white/50">Trusted Connections</p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-semibold">Integrations & Infrastructure</h2>
          <p className="mt-3 max-w-2xl text-white/70">Connect to leading broker APIs, exchanges, and fintech tools. Built on secure, compliant, and scalable infrastructure.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
          {['Binance','Coinbase','Interactive Brokers','Polygon.io','Alpaca','Kraken'].map((name, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/[0.03] p-4 text-center text-sm text-white/70">{name}</div>
          ))}
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3"><Lock className="h-5 w-5" /> <span className="font-semibold">Data Encryption</span></div>
            <p className="mt-2 text-white/70">AES-256 at rest, TLS 1.3 in transit</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3"><Shield className="h-5 w-5" /> <span className="font-semibold">Secure Infrastructure</span></div>
            <p className="mt-2 text-white/70">Hardened network perimeters and isolation</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3"><Server className="h-5 w-5" /> <span className="font-semibold">High Availability</span></div>
            <p className="mt-2 text-white/70">Redundant regions with continuous monitoring</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="flex items-center gap-3"><Database className="h-5 w-5" /> <span className="font-semibold">Data Integrity</span></div>
            <p className="mt-2 text-white/70">Checksummed storage and audit trails</p>
          </div>
        </div>
      </div>
    </section>
  )
}
