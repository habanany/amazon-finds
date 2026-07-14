import React, { useState } from 'react';
import './index.css';

// Curated affiliate product database
const PRODUCTS = {
  // Smart Home
  blink_mini: {
    id: 'blink_mini',
    title: 'Blink Mini Smart Camera (2-Pack)',
    category: 'smart-home',
    description: '1080p HD plug-in indoor security camera with motion detection and two-way audio. Integrates natively with Home Assistant for subscription-free local control.',
    emoji: '📹',
    link: 'https://amzn.to/3RH54g5', // Using the valid short link from current App.jsx
    specs: ['1080p HD', 'Motion Alerts', 'Local HA Sync']
  },
  zigbee_dongle: {
    id: 'zigbee_dongle',
    title: 'SONOFF Zigbee 3.0 USB Dongle Plus',
    category: 'smart-home',
    description: 'The ultimate universal Zigbee gateway for Home Assistant. Connect smart sensors, lights, and relays locally without cloud delay.',
    emoji: '🔌',
    link: 'https://amazon.com/',
    specs: ['Zigbee 3.0', 'CC2652P Chip', 'SMA Interface']
  },
  smart_plug: {
    id: 'smart_plug',
    title: 'Kasa Smart Plug Mini (4-Pack)',
    category: 'smart-home',
    description: 'Reliable Wi-Fi smart plugs with energy monitoring. Easily set automated schedules or control devices using local polling via Home Assistant.',
    emoji: '⚡',
    link: 'https://amazon.com/',
    specs: ['Energy Monitor', '15A Max', 'No Hub Required']
  },
  
  // Workspace / Productivity
  ergonomic_keyboard: {
    id: 'ergonomic_keyboard',
    title: 'Ergonomic Developer Keyboard',
    category: 'productivity',
    description: 'Split layout mechanical keyboard designed to optimize hand positioning and reduce wrist strain during long coding marathons.',
    emoji: '⌨️',
    link: 'https://amazon.com/',
    specs: ['Split Layout', 'Hot-Swappable', 'Gateron Browns']
  },
  ultrawide_monitor: {
    id: 'ultrawide_monitor',
    title: 'Ultra-Wide 4K IPS Monitor',
    category: 'productivity',
    description: 'Massive screen real estate to fit your terminal, IDE, and web browser side-by-side without constant alt-tabbing.',
    emoji: '🖥️',
    link: 'https://amazon.com/',
    specs: ['34-Inch', 'IPS Panel', 'USB-C Charging']
  },
  mx_master: {
    id: 'mx_master',
    title: 'Logitech MX Master 3S Wireless Mouse',
    category: 'productivity',
    description: 'Ergonomic office mouse with electromagnetic MagSpeed scrolling and 8K DPI tracking on any surface, including glass.',
    emoji: '🖱️',
    link: 'https://amazon.com/',
    specs: ['Silent Clicks', '8000 DPI', 'Multi-Device Flow']
  },
  
  // Audio
  airpods_pro: {
    id: 'airpods_pro',
    title: 'Apple AirPods Pro (2nd Generation)',
    category: 'audio',
    description: 'Industry-leading Active Noise Cancellation and adaptive transparency. Perfect for silencing background distractions during focused work.',
    emoji: '🎧',
    link: 'https://amazon.com/',
    specs: ['USB-C', 'H2 Chip', 'Spatial Audio']
  },
  powerbeats_pro: {
    id: 'powerbeats_pro',
    title: 'Powerbeats Pro Wireless Earphones',
    category: 'audio',
    description: 'Secure-fit earhooks designed for active movement and workouts. Long battery life and powerful, balanced acoustic response.',
    emoji: '🎵',
    link: 'https://amazon.com/',
    specs: ['Apple H1 Chip', '9-Hour Battery', 'Water Resistant']
  }
};

// Local Guides database
const GUIDES = [
  {
    title: 'Local Blink Mini Camera Integration',
    summary: 'Did you know you can run Blink Mini cameras inside Home Assistant without an active cloud subscription? Read how to link motion sensors and live streams.',
    emoji: '📹',
    theme: 'primary',
    steps: [
      'Install the native Blink integration in Home Assistant Settings -> Devices.',
      'Authenticate with your Blink credentials to import the device entities.',
      'Create a local Lovelace dashboard card using the camera entity for live view.',
      'Trigger automations (e.g. Alexa or Blink chime alerts) off the motion_detected binary sensor locally, bypassing subscription cloud delays.'
    ]
  },
  {
    title: 'Tailscale VPN for Remote HA Access',
    summary: 'Avoid exposing port 8123 to the open internet. Access your dashboard, cameras, and Plex server securely from anywhere using a Tailscale private mesh.',
    emoji: '🌐',
    theme: 'secondary',
    steps: [
      'Install Tailscale on your host machine (WSL2 / Linux) and log in.',
      'Install Tailscale on your client device (iPhone, Android tablet).',
      'Ensure the local Subnet routes are advertised if accessing other LAN gear.',
      'Connect to your Home Assistant dashboard securely from cellular data using the private 100.x.y.z IP without exposing public firewall ports.'
    ]
  },
  {
    title: 'Automated 3:00 AM Nightly Backups',
    summary: 'Protect your automation configs. Set up a simple automated rotation script that backs up your configuration directories daily and keeps a 7-day log.',
    emoji: '💾',
    theme: 'primary',
    steps: [
      'Write a bash script that compresses your homeassistant config folder.',
      'Name it with a datestamp and save to an external storage mount (/mnt/wd_storage).',
      'Schedule a systemd-timer or cron job (`0 3 * * *`) to execute the script.',
      'Incorporate a prune command (`find -mtime +7 -delete`) to keep only the last 7 backups and avoid filling the drive.'
    ]
  }
];

function App() {
  const [activeTab, setActiveTab] = useState('planner'); // 'planner', 'gear', 'guides'
  
  // Configurator Wizard State
  const [configStep, setConfigStep] = useState(1);
  const [budget, setBudget] = useState('');
  const [ecosystem, setEcosystem] = useState('');
  const [goal, setGoal] = useState('');
  
  const handleResetConfigurator = () => {
    setBudget('');
    setEcosystem('');
    setGoal('');
    setConfigStep(1);
  };

  const getRecommendations = () => {
    const list = [];
    
    // Core ecosystem recommendations
    if (ecosystem === 'ha') {
      list.push({
        name: PRODUCTS.zigbee_dongle.title,
        desc: 'Enables high-performance, subscription-free communication with local smart sensors.',
        emoji: PRODUCTS.zigbee_dongle.emoji,
        link: PRODUCTS.zigbee_dongle.link
      });
    }

    // Goal-based recommendations
    if (goal === 'security') {
      list.push({
        name: PRODUCTS.blink_mini.title,
        desc: 'Affordable HD monitoring. Works subscription-free using local Home Assistant automation hooks.',
        emoji: PRODUCTS.blink_mini.emoji,
        link: PRODUCTS.blink_mini.link
      });
    } else {
      list.push({
        name: PRODUCTS.smart_plug.title,
        desc: 'Automate appliances, monitor energy consumption, and configure scheduled timers.',
        emoji: PRODUCTS.smart_plug.emoji,
        link: PRODUCTS.smart_plug.link
      });
    }

    // Budget-based upgrades
    if (budget === 'enthusiast') {
      list.push({
        name: PRODUCTS.ultrawide_monitor.title,
        desc: 'Upgrade your smart home management cockpit with a high-end ultrawide productivity display.',
        emoji: PRODUCTS.ultrawide_monitor.emoji,
        link: PRODUCTS.ultrawide_monitor.link
      });
    } else {
      list.push({
        name: PRODUCTS.mx_master.title,
        desc: 'Precision control device for building complex automation flows and scripts.',
        emoji: PRODUCTS.mx_master.emoji,
        link: PRODUCTS.mx_master.link
      });
    }

    return list;
  };

  return (
    <>
      <div className="bg-grid-glow"></div>
      
      {/* Site-wide FTC Amazon Associates Disclosure */}
      <div className="compliance-banner">
        As an Amazon Associate I earn from qualifying purchases. 
        <a href="#disclosure-info">Learn more</a>
      </div>

      <nav className="navbar">
        <h1><span>⚡</span> SmartFinds Labs</h1>
        <div className="nav-links">
          <button 
            className={`nav-link ${activeTab === 'planner' ? 'active' : ''}`}
            onClick={() => setActiveTab('planner')}
          >
            Smart Home Planner
          </button>
          <button 
            className={`nav-link ${activeTab === 'gear' ? 'active' : ''}`}
            onClick={() => setActiveTab('gear')}
          >
            Curated Gear
          </button>
          <button 
            className={`nav-link ${activeTab === 'guides' ? 'active' : ''}`}
            onClick={() => setActiveTab('guides')}
          >
            Automation Guides
          </button>
        </div>
      </nav>

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="badge">
            <span>🔬</span> Local Automation & Productivity Hub
          </div>
          <h2>Upgrade Your Space & Automate Your Life</h2>
          <p>
            Welcome to SmartFinds Labs. We build local-first smart home systems, test ergonomic work gear, 
            and publish straightforward guides to help you regain control of your technology.
          </p>
        </section>

        {/* Tab Filters */}
        <div className="tabs-container">
          <button 
            className={`tab-btn ${activeTab === 'planner' ? 'active' : ''}`}
            onClick={() => setActiveTab('planner')}
          >
            🛠️ Interactive Planner
          </button>
          <button 
            className={`tab-btn ${activeTab === 'gear' ? 'active' : ''}`}
            onClick={() => setActiveTab('gear')}
          >
            📦 Curated Gear Catalog
          </button>
          <button 
            className={`tab-btn ${activeTab === 'guides' ? 'active' : ''}`}
            onClick={() => setActiveTab('guides')}
          >
            📘 Setup & Automation Guides
          </button>
        </div>

        {/* ACTIVE SECTION: PLANNER */}
        {activeTab === 'planner' && (
          <div className="configurator-widget">
            <div className="widget-header">
              <h3 className="widget-title">Smart Home Configurator</h3>
              <p className="widget-subtitle">Answer 3 quick questions to generate a local-first hardware checklist.</p>
            </div>

            <div className="configurator-steps-indicator">
              <div className={`step-indicator-dot ${configStep >= 1 ? 'active' : ''} ${configStep > 1 ? 'completed' : ''}`}>
                {configStep > 1 ? '✓' : '1'}
              </div>
              <div className={`step-indicator-dot ${configStep >= 2 ? 'active' : ''} ${configStep > 2 ? 'completed' : ''}`}>
                {configStep > 2 ? '✓' : '2'}
              </div>
              <div className={`step-indicator-dot ${configStep >= 3 ? 'active' : ''} ${configStep > 3 ? 'completed' : ''}`}>
                {configStep > 3 ? '✓' : '3'}
              </div>
            </div>

            <div className="configurator-body">
              {/* Step 1: Budget Selection */}
              {configStep === 1 && (
                <div>
                  <h4 className="configurator-question">Select your smart home project budget:</h4>
                  <div className="radio-cards-grid">
                    <div 
                      className={`radio-card ${budget === 'starter' ? 'selected' : ''}`}
                      onClick={() => setBudget('starter')}
                    >
                      <span className="radio-card-icon">🌱</span>
                      <span className="radio-card-title">Starter ($100 - $300)</span>
                      <span className="radio-card-desc">Budget-friendly upgrades, smart plugs, and local indoor cams.</span>
                    </div>
                    <div 
                      className={`radio-card ${budget === 'enthusiast' ? 'selected' : ''}`}
                      onClick={() => setBudget('enthusiast')}
                    >
                      <span className="radio-card-icon">🏆</span>
                      <span className="radio-card-title">Enthusiast ($300+)</span>
                      <span className="radio-card-desc">Advanced local controllers, Zigbee meshes, and custom hardware.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 2: Ecosystem Selection */}
              {configStep === 2 && (
                <div>
                  <h4 className="configurator-question">Choose your preferred control ecosystem:</h4>
                  <div className="radio-cards-grid">
                    <div 
                      className={`radio-card ${ecosystem === 'ha' ? 'selected' : ''}`}
                      onClick={() => setEcosystem('ha')}
                    >
                      <span className="radio-card-icon">🏠</span>
                      <span className="radio-card-title">Home Assistant</span>
                      <span className="radio-card-desc">(Recommended) 100% local, high privacy, infinite options.</span>
                    </div>
                    <div 
                      className={`radio-card ${ecosystem === 'commercial' ? 'selected' : ''}`}
                      onClick={() => setEcosystem('commercial')}
                    >
                      <span className="radio-card-icon">📱</span>
                      <span className="radio-card-title">Commercial App</span>
                      <span className="radio-card-desc">Apple HomeKit, Google Home, or Amazon Alexa-centric control.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 3: Main Goal */}
              {configStep === 3 && (
                <div>
                  <h4 className="configurator-question">What is your primary automation goal?</h4>
                  <div className="radio-cards-grid">
                    <div 
                      className={`radio-card ${goal === 'security' ? 'selected' : ''}`}
                      onClick={() => setGoal('security')}
                    >
                      <span className="radio-card-icon">🛡️</span>
                      <span className="radio-card-title">Security & Guarding</span>
                      <span className="radio-card-desc">Motion sensors, cameras, and local event warnings.</span>
                    </div>
                    <div 
                      className={`radio-card ${goal === 'convenience' ? 'selected' : ''}`}
                      onClick={() => setGoal('convenience')}
                    >
                      <span className="radio-card-icon">☕</span>
                      <span className="radio-card-title">Utility & Comfort</span>
                      <span className="radio-card-desc">Smart plugs, lighting schedules, and energy monitoring.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Step 4: Results Display */}
              {configStep === 4 && (
                <div className="results-container">
                  <h4 className="configurator-question">⚡ Your Personalized Build Summary:</h4>
                  
                  <div className="results-summary-card">
                    <div>
                      <div className="summary-item-label">Budget Tier</div>
                      <div className="summary-item-value">{budget === 'starter' ? '🌱 Starter' : '🏆 Enthusiast'}</div>
                    </div>
                    <div>
                      <div className="summary-item-label">Ecosystem</div>
                      <div className="summary-item-value">{ecosystem === 'ha' ? '🏠 Home Assistant' : '📱 Commercial App'}</div>
                    </div>
                    <div>
                      <div className="summary-item-label">Focus Goal</div>
                      <div className="summary-item-value">{goal === 'security' ? '🛡️ Security' : '☕ Utility'}</div>
                    </div>
                  </div>

                  <h5 className="recommendations-title">Recommended Build Checklist:</h5>
                  <div className="recs-list">
                    {getRecommendations().map((rec, index) => (
                      <div key={index} className="rec-item">
                        <div className="rec-item-info">
                          <span className="rec-item-icon">{rec.emoji}</span>
                          <div>
                            <div className="rec-item-name">{rec.name}</div>
                            <div className="rec-item-desc">{rec.desc}</div>
                          </div>
                        </div>
                        <div className="rec-item-action">
                          <a 
                            href={rec.link} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="btn-rec-shop"
                          >
                            Shop Amazon ↗
                          </a>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="configurator-footer">
              {configStep > 1 && configStep < 4 && (
                <button className="btn-secondary" onClick={() => setConfigStep(prev => prev - 1)}>
                  Back
                </button>
              )}
              {configStep === 4 && (
                <button className="btn-secondary" onClick={handleResetConfigurator}>
                  Configure Another Project
                </button>
              )}

              {configStep === 1 && (
                <button 
                  className="btn-accent" 
                  disabled={!budget} 
                  onClick={() => setConfigStep(2)}
                  style={{ marginLeft: 'auto' }}
                >
                  Continue
                </button>
              )}
              {configStep === 2 && (
                <button 
                  className="btn-accent" 
                  disabled={!ecosystem} 
                  onClick={() => setConfigStep(3)}
                >
                  Continue
                </button>
              )}
              {configStep === 3 && (
                <button 
                  className="btn-accent" 
                  disabled={!goal} 
                  onClick={() => setConfigStep(4)}
                >
                  Generate Plan
                </button>
              )}
            </div>
          </div>
        )}

        {/* ACTIVE SECTION: CURATED GEAR */}
        {activeTab === 'gear' && (
          <div className="product-grid">
            {Object.values(PRODUCTS).map(prod => (
              <div key={prod.id} className="glass-card">
                <div className="card-image-wrapper">
                  <span className="card-category-tag">{prod.category.replace('-', ' ')}</span>
                  <span className="card-emoji-placeholder">{prod.emoji}</span>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{prod.title}</h3>
                  <p className="card-description">{prod.description}</p>
                  
                  <div className="specs-badge-list">
                    {prod.specs.map((spec, i) => (
                      <span key={i} className="spec-badge">{spec}</span>
                    ))}
                  </div>

                  <div className="card-footer">
                    <a 
                      href={prod.link} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="btn-primary"
                    >
                      Check Price on Amazon
                    </a>
                    <span className="ftc-tag">(paid link)</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* ACTIVE SECTION: GUIDES */}
        {activeTab === 'guides' && (
          <div className="guide-grid">
            {GUIDES.map((guide, idx) => (
              <div key={idx} className={`glass-card guide-card ${guide.theme === 'secondary' ? 'alternative' : ''}`}>
                <div className="card-image-wrapper" style={{ height: '140px' }}>
                  <span className="card-emoji-placeholder" style={{ fontSize: '2.5rem' }}>{guide.emoji}</span>
                </div>
                <div className="card-body">
                  <h3 className="card-title">{guide.title}</h3>
                  <p className="card-description" style={{ fontSize: '0.88rem', marginBottom: '1.25rem' }}>
                    {guide.summary}
                  </p>
                  
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '0.5rem', color: 'var(--primary-light)' }}>
                      Execution steps:
                    </div>
                    <ol style={{ paddingLeft: '1.2rem', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                      {guide.steps.map((step, sIdx) => (
                        <li key={sIdx} style={{ marginBottom: '0.4rem' }}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <div className="card-footer">
                    <a 
                      href="https://amazon.com/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="read-guide-btn"
                    >
                      Browse Related Devices
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Footer & Amazon FTC compliance disclaimers */}
      <footer id="disclosure-info">
        <div className="footer-content">
          <div className="footer-brand">
            <h4>SmartFinds Labs</h4>
            <p>
              Reviewing the best home automation hardware, developer components, and custom electronics. 
              Always focus on local-first control and privacy.
            </p>
          </div>
          <div className="footer-links">
            <h5>Navigation</h5>
            <ul>
              <li><a href="#top" onClick={(e) => { e.preventDefault(); setActiveTab('planner'); }}>Home Planner</a></li>
              <li><a href="#top" onClick={(e) => { e.preventDefault(); setActiveTab('gear'); }}>Gear Reviews</a></li>
              <li><a href="#top" onClick={(e) => { e.preventDefault(); setActiveTab('guides'); }}>Automation Guides</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h5>Ecosystem links</h5>
            <ul>
              <li><a href="https://www.home-assistant.io/" target="_blank" rel="noopener noreferrer">Home Assistant</a></li>
              <li><a href="https://tailscale.com/" target="_blank" rel="noopener noreferrer">Tailscale VPN</a></li>
              <li><a href="https://partner-program.amazon.com/" target="_blank" rel="noopener noreferrer">Amazon Associates</a></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <p className="footer-copyright">&copy; {new Date().getFullYear()} SmartFinds Labs. All rights reserved.</p>
          <p className="footer-disclaimer">
            SmartFinds Labs is a participant in the Amazon Services LLC Associates Program, 
            an affiliate advertising program designed to provide a means for sites to earn advertising 
            fees by advertising and linking to Amazon.com. CERTAIN CONTENT THAT APPEARS ON THIS SITE 
            COMES FROM AMAZON. THIS CONTENT IS PROVIDED 'AS IS' AND IS SUBJECT TO CHANGE OR REMOVAL AT ANY TIME.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
