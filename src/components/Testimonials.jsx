import { Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Elena Park',
    role: 'Head of Electronic Trading, Apex Capital',
    quote: 'Remarkable clarity and execution consistency. The platform abstracts complexity while preserving control.'
  },
  {
    name: 'Daniel Ruiz',
    role: 'Quant Lead, Meridian Labs',
    quote: 'Data pipelines and backtesting fidelity are best-in-class. Integration was straightforward and robust.'
  },
  {
    name: 'Priya Nair',
    role: 'CTO, Helix Digital Markets',
    quote: 'A reliable system that respects constraints and scales without drama. Exactly what we needed.'
  }
]

export default function Testimonials() {
  return (
    <section className="relative bg-[#05060A] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Trusted by Professional Teams</h2>
          <p className="mt-3 max-w-2xl text-white/70">Consistent, clear, dependable. Feedback from practitioners who care about precision.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <Quote className="h-6 w-6 text-white/50" />
              <p className="mt-4 text-white/80">“{t.quote}”</p>
              <div className="mt-6">
                <div className="h-10 w-10 rounded-full bg-white/10" />
                <p className="mt-2 text-sm font-medium">{t.name}</p>
                <p className="text-xs text-white/60">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
