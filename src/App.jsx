import React, { useState } from 'react';
import './index.css';

// Primary Amazon Associates Configuration
const ASSOCIATE_TAG = 'habanany0c-20';
const STORE_OWNER = 'Lazaro Alejo';
const DEPLOYMENT_URL = 'https://habanany-finds.netlify.app/';

// Helper to ensure all affiliate links append tag=habanany0c-20
const formatAffiliateLink = (url) => {
  if (!url) return `https://www.amazon.com/?tag=${ASSOCIATE_TAG}`;
  if (url.includes('tag=')) return url;
  const separator = url.includes('?') ? '&' : '?';
  return `${url}${separator}tag=${ASSOCIATE_TAG}`;
};

// High-Yield Amazon Bounties Database
const BOUNTIES = [
  {
    id: 'prime_young_adult',
    title: 'Prime for Young Adults',
    badge: '$30 Bounty Offer',
    subtitle: 'Ages 18-24 / College Students',
    description: 'Claim a 6-month trial at $0. Includes fast free shipping, Prime Video, 5% cash back, and exclusive student discounts.',
    icon: '🎓',
    ctaText: 'Claim 6-Month Free Trial',
    link: formatAffiliateLink('https://www.amazon.com/amazonprime?primeCampaignId=prime_young_adult')
  },
  {
    id: 'audible_free_trial',
    title: 'Audible Premium Plus',
    badge: '$5–$10 Bounty',
    subtitle: '30-Day Free Trial',
    description: 'Get 1-2 free audiobooks to keep forever plus unlimited listening to thousands of Audible Originals & podcasts.',
    icon: '🎧',
    ctaText: 'Start 30-Day Free Trial',
    link: formatAffiliateLink('https://www.amazon.com/hz/audible/mlp/membership/premiumplus')
  },
  {
    id: 'amazon_haul',
    title: 'Amazon Haul Deals',
    badge: '$4 Bounty',
    subtitle: 'Budget Finds from $2.99',
    description: 'Discover ultra budget-friendly tech accessories, home essentials, and gadgets priced from $2.99 with free shipping on $25+.',
    icon: '🏷️',
    ctaText: 'Shop Amazon Haul ($2.99+)',
    link: formatAffiliateLink('https://www.amazon.com/haul')
  },
  {
    id: 'baby_registry',
    title: 'Amazon Baby Registry',
    badge: 'Free Welcome Box',
    subtitle: '15% Completion Discount',
    description: 'Enjoy a free Welcome Box ($35 value), universal item additions, 15% completion discount, and 365-day returns.',
    icon: '🍼',
    ctaText: 'Create Free Baby Registry',
    link: formatAffiliateLink('https://www.amazon.com/baby-reg/homepage')
  },
  {
    id: 'wedding_registry',
    title: 'Amazon Wedding Registry',
    badge: 'Up to 20% Off',
    subtitle: 'Group Gifting & Bonus Gifts',
    description: 'Create your dream registry with up to 20% completion discount, group gifting for big items, and 180-day returns.',
    icon: '💍',
    ctaText: 'Create Wedding Registry',
    link: formatAffiliateLink('https://www.amazon.com/wedding/home')
  }
];

// Featured Audiobooks Database
const AUDIOBOOKS = [
  {
    id: 'calamity_club',
    title: 'The Calamity Club',
    author: 'Featured Audio Drama',
    description: 'An immersive, pulse-pounding audio experience exclusively available on Audible.',
    emoji: '🎙️',
    link: formatAffiliateLink('https://www.amazon.com/dp/B0D123CALM')
  },
  {
    id: 'whistler',
    title: 'Whistler',
    author: 'John Grisham',
    description: 'A judicial insider unravels a high-stakes conspiracy of corruption and mystery.',
    emoji: '⚖️',
    link: formatAffiliateLink('https://www.amazon.com/dp/B01EICN4S0')
  },
  {
    id: 'yesteryear',
    title: 'Yesteryear',
    author: 'Mark Sullivan',
    description: 'A gripping historical saga of resilience, memory, and extraordinary heroism.',
    emoji: '📖',
    link: formatAffiliateLink('https://www.amazon.com/dp/B0CT1YESTR')
  },
  {
    id: 'the_deal',
    title: 'The Deal',
    author: 'Elle Kennedy',
    description: 'The hit romance audiobook that captivated millions of listeners worldwide.',
    emoji: '🏒',
    link: formatAffiliateLink('https://www.amazon.com/dp/B00V52DEAL')
  }
];

// Curated Products Database
const PRODUCTS = [
  // Smart Home
  {
    id: 'blink_mini',
    title: 'Blink Mini Smart Camera (2-Pack)',
    category: 'smart-home',
    description: '1080p HD plug-in indoor security camera with motion detection and two-way audio. Integrates natively with Home Assistant.',
    emoji: '📹',
    price: '$29.99',
    badge: 'Popular',
    image: 'https://m.media-amazon.com/images/I/61R-jYy4f-L._AC_SL1200_.jpg',
    specs: ['1080p HD', 'Motion Alerts', 'Local HA Sync'],
    link: formatAffiliateLink('https://amzn.to/3RH54g5')
  },
  {
    id: 'zigbee_dongle',
    title: 'SONOFF Zigbee 3.0 USB Dongle Plus',
    category: 'smart-home',
    description: 'Universal Zigbee 3.0 USB gateway for Home Assistant. Connect smart sensors, lights, and relays locally without cloud delay.',
    emoji: '🔌',
    price: '$19.99',
    badge: 'Developer Pick',
    image: 'https://m.media-amazon.com/images/I/51wJ-M15T0L._AC_SL1000_.jpg',
    specs: ['Zigbee 3.0', 'CC2652P Chip', 'SMA Antenna'],
    link: formatAffiliateLink('https://www.amazon.com/dp/B09KXTCMSC')
  },
  {
    id: 'kasa_plug',
    title: 'Kasa Smart Plug Mini (4-Pack)',
    category: 'smart-home',
    description: 'Wi-Fi smart plugs with energy monitoring. Easily set automated schedules or control devices using local polling via Home Assistant.',
    emoji: '⚡',
    price: '$22.99',
    badge: 'Best Seller',
    image: 'https://m.media-amazon.com/images/I/61-mJ726hLL._AC_SL1500_.jpg',
    specs: ['Energy Monitor', '15A Max', 'No Hub Required'],
    link: formatAffiliateLink('https://www.amazon.com/dp/B07RCNB2L3')
  },
  {
    id: 'tuya_hub',
    title: 'Tuya Smart Zigbee 3.0 Gateway Hub',
    category: 'smart-home',
    description: 'Compact Zigbee smart home hub supporting up to 50 local Zigbee sub-devices with Tuya & Home Assistant bridge integration.',
    emoji: '🌐',
    price: '$17.99',
    badge: 'Local Control',
    image: '',
    specs: ['Zigbee 3.0', '50+ Devices', 'App Automation'],
    link: formatAffiliateLink('https://www.amazon.com/dp/B09G3F1XYZ')
  },

  // Audio & Open Ear
  {
    id: 'monster_ac360',
    title: 'Monster Open Ear AC360 Earbuds',
    category: 'audio',
    description: 'Open-ear directional acoustic earphones with Bluetooth 5.4, ultra-clear microphones, and comfortable all-day fit.',
    emoji: '🎧',
    price: '$39.99',
    badge: 'Open-Ear Tech',
    image: '',
    specs: ['Open Ear Tech', 'BT 5.4', 'Dual Mics'],
    link: formatAffiliateLink('https://www.amazon.com/dp/B0CS360AC3')
  },
  {
    id: 'monster_ac210',
    title: 'Monster Open Ear AC210 Clip-on',
    category: 'audio',
    description: 'Lightweight clip-on sports open-ear earphones designed for active workouts, ambient awareness, and safety.',
    emoji: '🏃‍♂️',
    price: '$29.99',
    badge: 'Sports Pick',
    image: '',
    specs: ['Clip-on Design', 'IPX5 Water Resistant', '24H Battery'],
    link: formatAffiliateLink('https://www.amazon.com/dp/B0CS210AC2')
  },
  {
    id: 'airpods_pro',
    title: 'Apple AirPods Pro (2nd Gen USB-C)',
    category: 'audio',
    description: 'Active Noise Cancellation and Adaptive Audio. Perfect for eliminating background noise during focused coding sessions.',
    emoji: '🎵',
    price: '$189.99',
    badge: 'Top Rated',
    image: 'https://m.media-amazon.com/images/I/61SUj2aKoEL._AC_SL1500_.jpg',
    specs: ['H2 Chip', 'USB-C Charging', 'Spatial Audio'],
    link: formatAffiliateLink('https://www.amazon.com/dp/B0CHWRXH8B')
  },
  {
    id: 'powerbeats_pro',
    title: 'Powerbeats Pro Wireless Earphones',
    category: 'audio',
    description: 'Secure-fit earhooks designed for active movement and long shifts. Powerful acoustic response with Apple H1 chip.',
    emoji: '🔋',
    price: '$149.99',
    badge: 'Workout Ready',
    image: '',
    specs: ['Apple H1', '9H Playtime', 'Secure Earhooks'],
    link: formatAffiliateLink('https://www.amazon.com/dp/B07R5QD598')
  },

  // Prime Video & Streaming Media
  {
    id: 'elle_series',
    title: 'Elle — Prime Video Original Series',
    category: 'streaming',
    description: 'Stream the acclaimed new drama series exclusively on Amazon Prime Video with your Prime trial.',
    emoji: '🎬',
    price: 'Included in Prime',
    badge: 'Prime Original',
    image: '',
    specs: ['4K Ultra HD', 'Prime Video Excl', 'HDR10+'],
    link: formatAffiliateLink('https://www.amazon.com/dp/B0D123ELLE')
  },
  {
    id: 'project_hail_mary',
    title: 'Project Hail Mary (Audiobook & Film)',
    category: 'streaming',
    description: 'Andy Weir’s gripping sci-fi masterpiece narrated by Ray Porter. Get it free with your 30-day Audible trial.',
    emoji: '🚀',
    price: 'Free with Trial',
    badge: 'Must Listen',
    image: '',
    specs: ['Sci-Fi Hit', 'Ray Porter Narration', 'Unabridged'],
    link: formatAffiliateLink('https://www.amazon.com/dp/B08G9PRS1K')
  },
  {
    id: 'firetv_4k_max',
    title: 'Amazon Fire TV Stick 4K Max',
    category: 'streaming',
    description: 'Amazon’s flagship streaming player with Wi-Fi 6E support, Ambient Experience, and lightning-fast app navigation.',
    emoji: '📺',
    price: '$39.99',
    badge: 'Wi-Fi 6E',
    image: '',
    specs: ['4K Ultra HD', 'Wi-Fi 6E', '16GB Storage'],
    link: formatAffiliateLink('https://www.amazon.com/dp/B0BW2L1WKH')
  },

  // Workspace & Productivity
  {
    id: 'ergonomic_keyboard',
    title: 'Ergonomic Split Mechanical Keyboard',
    category: 'productivity',
    description: 'Split layout mechanical keyboard designed to optimize hand positioning and reduce wrist strain during long work hours.',
    emoji: '⌨️',
    price: '$89.99',
    badge: 'Ergonomic',
    image: '',
    specs: ['Split Layout', 'Hot-Swappable', 'Gateron Switches'],
    link: formatAffiliateLink('https://www.amazon.com/dp/B09V3KBD12')
  },
  {
    id: 'mx_master',
    title: 'Logitech MX Master 3S Wireless Mouse',
    category: 'productivity',
    description: 'Ergonomic office mouse with electromagnetic MagSpeed scrolling and 8K DPI tracking on glass surfaces.',
    emoji: '🖱️',
    price: '$99.99',
    badge: 'Pro Pick',
    image: '',
    specs: ['8000 DPI', 'Quiet Click', 'Multi-Device Flow'],
    link: formatAffiliateLink('https://www.amazon.com/dp/B09HM94VDS')
  }
];

// Product Image Renderer with SVG Fallback
function ProductImage({ src, alt, emoji }) {
  const [imgError, setImgError] = useState(false);

  if (!src || imgError) {
    return (
      <div className="fallback-media-card">
        <span className="fallback-emoji">{emoji}</span>
        <span style={{ fontSize: '0.8rem', color: '#94a3b8', fontWeight: 600 }}>{alt}</span>
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="product-img"
      onError={() => setImgError(true)}
      loading="lazy"
    />
  );
}

export default function App() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedLink, setCopiedLink] = useState('');

  // Interactive Deal Finder Wizard State
  const [showWizard, setShowWizard] = useState(false);
  const [wizardStep, setWizardStep] = useState(1);
  const [userRole, setUserRole] = useState('');

  const handleCopyLink = (link, title) => {
    navigator.clipboard.writeText(link);
    setCopiedLink(title);
    setTimeout(() => setCopiedLink(''), 2500);
  };

  // Filter products based on search & category tab
  const filteredProducts = PRODUCTS.filter((item) => {
    const matchesCategory = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          item.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="app-wrapper">
      {/* Compliance Bar */}
      <div className="compliance-banner">
        📢 <strong>Amazon Associates Disclosure:</strong> As an Amazon Associate I earn from qualifying purchases. Affiliate Tag: <code>{ASSOCIATE_TAG}</code>
      </div>

      {/* Header & Brand Nav */}
      <header className="header-container">
        <a href="#" className="brand-logo">
          <div className="brand-icon">🛍️</div>
          <div>
            <div className="brand-title">Habanany<span>Finds</span></div>
            <div className="brand-subtitle">Curated Bounties & Smart Tech</div>
          </div>
        </a>

        <nav className="nav-links">
          <button
            className={`nav-btn ${activeCategory === 'all' ? 'active' : ''}`}
            onClick={() => setActiveCategory('all')}
          >
            🔥 All Deals
          </button>
          <button
            className={`nav-btn highlight ${activeCategory === 'bounties' ? 'active' : ''}`}
            onClick={() => setActiveCategory('bounties')}
          >
            🎁 High Bounties
          </button>
          <button
            className={`nav-btn ${activeCategory === 'smart-home' ? 'active' : ''}`}
            onClick={() => setActiveCategory('smart-home')}
          >
            🏠 Smart Home
          </button>
          <button
            className={`nav-btn ${activeCategory === 'audio' ? 'active' : ''}`}
            onClick={() => setActiveCategory('audio')}
          >
            🎧 Audio Tech
          </button>
          <button
            className={`nav-btn ${activeCategory === 'streaming' ? 'active' : ''}`}
            onClick={() => setActiveCategory('streaming')}
          >
            🎬 Prime Video
          </button>
          <button
            className={`nav-btn ${activeCategory === 'productivity' ? 'active' : ''}`}
            onClick={() => setActiveCategory('productivity')}
          >
            💻 Productivity
          </button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-card">
          <div className="hero-tag">✨ High-Yield Amazon Bounties & Tech Hub</div>
          <h1 className="hero-heading">
            Unlock <span>$30 Prime Trials</span>, Audible Audiobooks & Smart Home Gear
          </h1>
          <p className="hero-description">
            Explore hand-picked Amazon Bounty programs, budget deals starting at $2.99, and local home automation gear curated by {STORE_OWNER}.
          </p>

          <div className="hero-stats">
            <div className="stat-chip">
              <span className="stat-val">$30.00</span>
              <span className="stat-label">Prime Young Adult Trial</span>
            </div>
            <div className="stat-chip">
              <span className="stat-val">30 Days</span>
              <span className="stat-label">Audible Free Trial</span>
            </div>
            <div className="stat-chip">
              <span className="stat-val">$2.99+</span>
              <span className="stat-label">Amazon Haul Budget Deals</span>
            </div>
            <div className="stat-chip">
              <span className="stat-val">100%</span>
              <span className="stat-label">Verified Affiliate Tag</span>
            </div>
          </div>
        </div>

        {/* High-Payout Bounties Spotlight Grid */}
        <div style={{ marginTop: '36px' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: 800, marginBottom: '16px', color: '#ffffff' }}>
            🎯 High-Yield Amazon Bounty Spotlight
          </h2>
          <div className="bounties-grid">
            {BOUNTIES.map((bounty) => (
              <div key={bounty.id} className="bounty-card">
                <span className="bounty-badge">{bounty.badge}</span>
                <div className="bounty-header">
                  <div className="bounty-icon">{bounty.icon}</div>
                  <div>
                    <h3 className="bounty-title">{bounty.title}</h3>
                    <span className="bounty-subtitle">{bounty.subtitle}</span>
                  </div>
                </div>
                <p className="bounty-desc">{bounty.description}</p>
                
                <a
                  href={bounty.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button"
                >
                  {bounty.ctaText} →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Main Catalog Content */}
      <main className="main-content">
        {/* Audiobook Spotlight Section */}
        <section className="audiobooks-section">
          <div className="section-header">
            <h2 className="section-title">
              🎙️ Audible Free Trial Featured Audiobooks
            </h2>
            <p className="section-subtitle">
              Claim any of these top-tier audiobooks for $0 when you start your 30-Day Audible Premium Plus Trial.
            </p>
          </div>

          <div className="audiobook-grid">
            {AUDIOBOOKS.map((book) => (
              <div key={book.id} className="book-card">
                <div className="book-cover">
                  <span style={{ fontSize: '2.8rem', marginBottom: '8px' }}>{book.emoji}</span>
                  <div className="book-title">{book.title}</div>
                  <div className="book-author">by {book.author}</div>
                </div>
                <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '16px', flexGrow: 1 }}>
                  {book.description}
                </p>
                <a
                  href={book.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-button secondary"
                  style={{ fontSize: '0.85rem', padding: '8px 14px' }}
                >
                  Listen Free on Audible →
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Catalog Filter & Search Bar */}
        <div className="filter-bar">
          <div className="category-tabs">
            <button
              className={`tab-btn ${activeCategory === 'all' ? 'active' : ''}`}
              onClick={() => setActiveCategory('all')}
            >
              All Products ({PRODUCTS.length})
            </button>
            <button
              className={`tab-btn ${activeCategory === 'smart-home' ? 'active' : ''}`}
              onClick={() => setActiveCategory('smart-home')}
            >
              🏠 Smart Home
            </button>
            <button
              className={`tab-btn ${activeCategory === 'audio' ? 'active' : ''}`}
              onClick={() => setActiveCategory('audio')}
            >
              🎧 Audio Tech
            </button>
            <button
              className={`tab-btn ${activeCategory === 'streaming' ? 'active' : ''}`}
              onClick={() => setActiveCategory('streaming')}
            >
              🎬 Prime Video
            </button>
            <button
              className={`tab-btn ${activeCategory === 'productivity' ? 'active' : ''}`}
              onClick={() => setActiveCategory('productivity')}
            >
              💻 Productivity
            </button>
          </div>

          <div className="search-box">
            <span className="search-icon">🔍</span>
            <input
              type="text"
              className="search-input"
              placeholder="Search products & deals..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Toast Notification */}
        {copiedLink && (
          <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            background: '#10b981',
            color: '#0f172a',
            fontWeight: 800,
            padding: '12px 20px',
            borderRadius: '12px',
            boxShadow: '0 8px 24px rgba(16, 185, 129, 0.4)',
            zIndex: 1000
          }}>
            ✅ Copied affiliate link for "{copiedLink}"!
          </div>
        )}

        {/* Product Grid */}
        <div className="products-grid">
          {filteredProducts.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-media">
                <ProductImage src={item.image} alt={item.title} emoji={item.emoji} />
                <span className="product-tag-badge">{item.badge}</span>
              </div>

              <div className="product-body">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-desc">{item.description}</p>

                <div className="product-specs">
                  {item.specs.map((spec, i) => (
                    <span key={i} className="spec-badge">{spec}</span>
                  ))}
                </div>

                <div className="product-footer">
                  <div className="price-tag">{item.price}</div>
                  
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <button
                      onClick={() => handleCopyLink(item.link, item.title)}
                      title="Copy Affiliate Link"
                      style={{
                        background: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.15)',
                        color: '#ffffff',
                        padding: '10px 12px',
                        borderRadius: '8px',
                        cursor: 'pointer',
                        fontWeight: 600
                      }}
                    >
                      📋
                    </button>
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-button"
                      style={{ padding: '10px 16px', fontSize: '0.875rem' }}
                    >
                      Buy on Amazon →
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Compliance Footer */}
      <footer className="site-footer">
        <div className="footer-container">
          <div className="footer-col">
            <div className="brand-logo" style={{ marginBottom: '16px' }}>
              <div className="brand-icon">🛍️</div>
              <div className="brand-title" style={{ fontSize: '1.3rem' }}>Habanany<span>Finds</span></div>
            </div>
            <p style={{ fontSize: '0.85rem', color: '#94a3b8', marginBottom: '12px' }}>
              Curated Amazon Bounty offers, smart home automation gear, and developer productivity tools managed by {STORE_OWNER}.
            </p>
            <p style={{ fontSize: '0.8rem', color: '#f59e0b', fontWeight: 600 }}>
              Official Tracking Tag: <code>{ASSOCIATE_TAG}</code>
            </p>
          </div>

          <div className="footer-col">
            <h4>Featured Amazon Bounties</h4>
            <ul style={{ listStyle: 'none', lineHeight: '2' }}>
              {BOUNTIES.map(b => (
                <li key={b.id}>
                  <a href={b.link} target="_blank" rel="noopener noreferrer" style={{ color: '#cbd5e1', textDecoration: 'none' }}>
                    • {b.title} ({b.badge})
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h4>Amazon Associates FTC Compliance</h4>
            <div className="footer-disclosure">
              "As an Amazon Associate I earn from qualifying purchases. Product prices and availability are accurate as of the date/time indicated and are subject to change."
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div>© {new Date().getFullYear()} Habanany Finds | Managed by {STORE_OWNER}</div>
          <div>Deployed at <a href={DEPLOYMENT_URL} style={{ color: '#818cf8', textDecoration: 'none' }}>{DEPLOYMENT_URL}</a></div>
        </div>
      </footer>
    </div>
  );
}
