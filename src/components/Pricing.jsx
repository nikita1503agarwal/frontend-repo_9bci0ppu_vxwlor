export default function Pricing() {
  return (
    <section id="pricing" className="relative bg-[#0A0B0F] text-white">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Pricing</h2>
          <p className="mt-3 max-w-2xl text-white/70">Simple, transparent options—no surprises. Choose monthly or annual and adapt as you scale.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            { name: 'Starter', price: '$79/mo', features: ['Core algorithms', 'Standard data coverage', 'Email support'], cta: 'Get Started' },
            { name: 'Professional', price: '$199/mo', features: ['Advanced execution', 'Priority data feeds', 'Priority support'], cta: 'Get Started', popular: true },
            { name: 'Institutional', price: 'Custom', features: ['Dedicated infrastructure', 'Custom integrations', 'SLA & compliance'], cta: 'Contact Sales' },
          ].map((p, i) => (
            <div key={i} className={`relative rounded-2xl border ${p.popular ? 'border-white/20 bg-white/[0.06]' : 'border-white/10 bg-white/[0.03]'} p-6`}> 
              {p.popular && (
                <div className="absolute -top-3 left-6 rounded-full bg-white text-[#0A0B0F] px-3 py-1 text-xs font-semibold">Most Popular</div>
              )}
              <h3 className="text-xl font-semibold">{p.name}</h3>
              <div className="mt-2 text-3xl font-semibold">{p.price}</div>
              <ul className="mt-4 space-y-2 text-sm text-white/70">
                {p.features.map((f, idx) => <li key={idx}>• {f}</li>)}
              </ul>
              <a href="#" className={`mt-6 inline-flex w-full items-center justify-center rounded-xl px-4 py-2 font-semibold ${p.popular ? 'bg-white text-[#0A0B0F]' : 'border border-white/20 text-white/90 hover:bg-white/10'}`}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
