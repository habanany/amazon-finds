
const artByCategory = {
  'Smart home': (
    <svg viewBox="0 0 320 190" role="presentation">
      <path className="art-line art-line-soft" d="M65 100c24-38 55-56 95-56s71 18 95 56" />
      <path className="art-line" d="M91 103c18-24 41-36 69-36s51 12 69 36" />
      <path className="art-line" d="M124 106c10-11 22-17 36-17s26 6 36 17" />
      <rect className="art-solid" x="126" y="113" width="68" height="40" rx="8" />
      <circle className="art-accent" cx="143" cy="133" r="4" />
      <path className="art-cutout" d="M157 133h22" />
    </svg>
  ),
  Audio: (
    <svg viewBox="0 0 320 190" role="presentation">
      <path className="art-line art-line-soft" d="M76 108V91c0-47 38-70 84-70s84 23 84 70v17" />
      <path className="art-line" d="M98 105V89c0-32 26-48 62-48s62 16 62 48v16" />
      <rect className="art-solid" x="65" y="96" width="48" height="70" rx="22" />
      <rect className="art-solid" x="207" y="96" width="48" height="70" rx="22" />
      <path className="art-accent-line" d="M151 83v30m18-42v54m18-36v18" />
    </svg>
  ),
  Streaming: (
    <svg viewBox="0 0 320 190" role="presentation">
      <rect className="art-line art-frame" x="47" y="26" width="226" height="132" rx="8" />
      <path className="art-solid" d="M142 73l51 29-51 29z" />
      <path className="art-accent-line" d="M119 174h82M160 159v15" />
      <circle className="art-dot" cx="70" cy="48" r="4" />
      <circle className="art-dot" cx="84" cy="48" r="4" />
    </svg>
  ),
  Workspace: (
    <svg viewBox="0 0 320 190" role="presentation">
      <path className="art-line art-line-soft" d="M35 151h250" />
      <rect className="art-line art-frame" x="64" y="35" width="128" height="90" rx="6" />
      <path className="art-accent-line" d="M96 151l10-26h44l10 26" />
      <path className="art-solid" d="M215 67c24 0 43 19 43 43v41h-86v-41c0-24 19-43 43-43z" />
      <path className="art-cutout" d="M215 82v54" />
      <circle className="art-accent" cx="215" cy="76" r="4" />
    </svg>
  ),
}

function DealArt({ deal }) {
  return (
    <div className={`card-art art-${deal.category.toLowerCase().replace(' ', '-')}`} aria-hidden="true">
      <span className="art-label">{deal.category}</span>
      {artByCategory[deal.category] ?? <span className="art-monogram">{deal.category.slice(0, 1)}</span>}
    </div>
  )
}

const Disclosure = () => (
  <span className="disclosure">As an Amazon Associate I earn from qualifying purchases.</span>
)

export function Header() {
  return (
    <>
      <div className="disclosure-bar"><Disclosure /></div>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="Habanany Finds home">Habanany <em>Finds</em></a>
        <nav aria-label="Primary navigation">
          <a href="#deals">Deals</a>
          <a href="#bounties">Bounties</a>
          <a href="#about">About</a>
        </nav>
      </header>
    </>
  )
}

export function FeaturedPost({ deal, checked }) {
  return (
    <article className="featured">
      <div className="featured-art" aria-hidden="true">
        <span>H</span><span>F</span>
        <p>Useful tech.<br />No clutter.</p>
      </div>
      <div className="featured-copy">
        <p className="eyebrow">Featured find · {deal.category}</p>
        <h1>{deal.title}</h1>
        <p className="dek">{deal.summary}</p>
        <p className="checked">Link last checked {checked}</p>
        <a className="cta" href={deal.url} target="_blank" rel="sponsored nofollow noopener">View on Amazon</a>
        <Disclosure />
      </div>
    </article>
  )
}

export function PostCard({ deal, checked }) {
  return (
    <article className="post-card">
      <DealArt deal={deal} />
      <div className="card-copy">
        <p className="eyebrow">{deal.category}</p>
        <h3>{deal.title}</h3>
        <p>{deal.summary}</p>
        <div className="card-meta"><span>{deal.note}</span><span>Checked {checked}</span></div>
        <a className="text-link" href={deal.url} target="_blank" rel="sponsored nofollow noopener">View on Amazon <span aria-hidden="true">→</span></a>
        <Disclosure />
      </div>
    </article>
  )
}

export function BountyStrip({ items, checked }) {
  return (
    <section className="bounty-section" id="bounties">
      <div className="section-heading">
        <p className="eyebrow">Signup offers</p>
        <h2>Amazon bounties, without the fine-print fog</h2>
        <p>Terms can change. Each link takes you to Amazon to see the current offer before you sign up.</p>
      </div>
      <div className="bounty-list">
        {items.map((item) => (
          <article className="bounty-item" key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <p className="checked">Link last checked {checked}</p>
            <a className="text-link" href={item.url} target="_blank" rel="sponsored nofollow noopener">See current terms <span aria-hidden="true">→</span></a>
            <Disclosure />
          </article>
        ))}
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer id="about">
      <div><a className="wordmark" href="#top">Habanany <em>Finds</em></a><p>Useful tech deals and Amazon signup offers, explained simply.</p></div>
      <div className="footer-disclosure"><strong>Affiliate disclosure</strong><Disclosure /><p>Prices, availability and program terms can change. Confirm the final details on Amazon before buying or signing up.</p></div>
    </footer>
  )
}
