import './index.css'
import { deals, bounties } from './deals'
import { Header, FeaturedPost, PostCard, BountyStrip, Footer } from './components'

const LAST_CHECKED = 'August 27, 2026'

export default function App() {
  const [featured, ...latest] = deals

  return (
    <div id="top">
      <Header />
      <main>
        <FeaturedPost deal={featured} checked={LAST_CHECKED} />
        <section className="latest" id="deals">
          <div className="section-heading">
            <p className="eyebrow">Latest deals</p>
            <h2>Worth a look</h2>
            <p>No made-up discounts or stale countdowns. Open Amazon to see the live price and availability.</p>
          </div>
          <div className="post-grid">
            {latest.map((deal) => <PostCard key={deal.id} deal={deal} checked={LAST_CHECKED} />)}
          </div>
        </section>
        <BountyStrip items={bounties} checked={LAST_CHECKED} />
      </main>
      <Footer />
    </div>
  )
}
