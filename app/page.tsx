export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-medium px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          For SRE &amp; DevOps Teams
        </span>
        <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
          Build Incident Playbooks<br />
          <span className="text-[#58a6ff]">from Past Outages</span>
        </h1>
        <p className="text-lg text-[#8b949e] max-w-2xl mx-auto mb-10">
          Paste in your incident logs, chat threads, or monitoring alerts. Our AI analyzes patterns, extracts debugging steps, and generates structured runbooks with decision trees and escalation paths — ready for your next on-call shift.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={checkoutUrl}
            className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Start for $39/mo
          </a>
          <a
            href="#faq"
            className="inline-block border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Learn More
          </a>
        </div>
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'Ingest Any Source', desc: 'PagerDuty, Slack threads, Datadog alerts, plain text — paste it all in.' },
            { title: 'AI Pattern Analysis', desc: 'Detects recurring failure modes and maps common remediation steps automatically.' },
            { title: 'Structured Runbooks', desc: 'Outputs decision trees, escalation paths, and step-by-step resolution guides.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-[#8b949e] text-sm">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-xs mb-3">Pro Plan</p>
          <p className="text-5xl font-bold text-white mb-1">$39</p>
          <p className="text-[#8b949e] text-sm mb-6">per month, cancel anytime</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              'Unlimited runbook generations',
              'AI-powered incident pattern analysis',
              'Decision tree &amp; escalation path builder',
              'Export to Markdown, Confluence, Notion',
              'Team sharing &amp; version history',
              'Priority email support'
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm">
                <span className="text-[#58a6ff] mt-0.5">&#10003;</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-semibold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'What incident data formats are supported?',
              a: 'You can paste plain text, JSON exports from PagerDuty or Datadog, Slack conversation exports, or any structured log format. The AI handles parsing automatically.'
            },
            {
              q: 'How accurate are the generated runbooks?',
              a: 'Accuracy improves with more incident data. We recommend feeding at least 5–10 past incidents per failure category. You can always edit and refine the generated runbooks before publishing.'
            },
            {
              q: 'Can I cancel my subscription at any time?',
              a: 'Yes. Cancel anytime from your billing portal with no questions asked. You keep access until the end of your billing period.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-6 text-[#8b949e] text-xs">
        &copy; {new Date().getFullYear()} Incident Runbook Builder. All rights reserved.
      </footer>
    </main>
  )
}
