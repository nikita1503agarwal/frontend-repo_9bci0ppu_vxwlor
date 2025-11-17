export default function FAQ() {
  const faqs = [
    { q: 'How do you handle security?', a: 'Encryption at rest and in transit, strict access controls, and continuous monitoring. We never sell data.' },
    { q: 'Which brokers and exchanges are supported?', a: 'We integrate with leading broker APIs and exchanges including equities, crypto, and FX venues.' },
    { q: 'How does strategy automation work?', a: 'Define policies and execution parameters; the platform schedules, monitors, and adapts strategies with guardrails.' },
    { q: 'What is the trial and refund policy?', a: 'Start with a risk-free trial. Cancel anytime during the trial period to avoid charges.' },
  ]

  return (
    <section className="relative bg-[#05060A] text-white">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <h2 className="text-3xl sm:text-4xl font-semibold text-center">FAQs</h2>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl border border-white/10 bg-white/[0.03]">
          {faqs.map((f, i) => (
            <div key={i} className="p-6">
              <p className="text-lg font-medium">{f.q}</p>
              <p className="mt-2 text-white/70">{f.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
