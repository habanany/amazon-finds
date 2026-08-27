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
      <div className={`card-art art-${deal.category.toLowerCase().replace(' ', '-')}`} aria-hidden="true"><span>{deal.category.slice(0, 1)}</span></div>
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
