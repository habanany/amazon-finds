import React from 'react';
import './index.css';

// Reusable, 100% compliant Product Component
const ProductCard = ({ title, description, placeholderImg, affiliateLink }) => {
  return (
    <div className="product-card">
      <div className="product-image">
        {/* Placeholder for the image. In production, use Amazon SiteStripe Image HTML here! */}
        <div style={{ fontSize: '3rem' }}>{placeholderImg}</div>
      </div>
      <div className="product-content">
        <h3>{title}</h3>
        <p>{description}</p>
        
        {/* Automated Compliance Group */}
        <div className="button-container">
          <a 
            href={affiliateLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="amazon-btn"
          >
            Check Price on Amazon
          </a>
          <span className="ftc-disclosure">(paid link)</span>
        </div>
      </div>
    </div>
  );
};

function App() {
  return (
    <>
      {/* Mandatory Amazon Site-Wide Disclosure */}
      <div className="compliance-banner">
        As an Amazon Associate I earn from qualifying purchases.
      </div>

      <nav className="navbar">
        <h1>TechFinds Daily</h1>
        <div className="nav-links">
          {/* Add links to About or Contact later */}
        </div>
      </nav>

      <main>
        <div className="hero">
          <h2>Top Tech Recommendations for 2026</h2>
          <p>Carefully curated gadgets and gear to upgrade your workspace, meticulously reviewed.</p>
        </div>

        <div className="product-grid">
          {/* Example Product 1 */}
          <ProductCard 
            title="Try Audible Premium Plus (Free Trial)"
            description="Listen to thousands of audiobooks and podcasts. Sign up for a free trial today and get your first audiobook completely free!"
            placeholderImg="📚"
            affiliateLink="https://amzn.to/3RH54g5"
          />

          {/* Example Product 2 */}
          <ProductCard 
            title="Ergonomic Developer Keyboard"
            description="Split layout mechanical keyboard designed to reduce wrist strain during long coding marathons."
            placeholderImg="⌨️"
            affiliateLink="https://amazon.com/"
          />

          {/* Example Product 3 */}
          <ProductCard 
            title="Ultra-Wide 4K Monitor"
            description="Massive screen real estate to fit your terminal, IDE, and browser side-by-side without alt-tabbing."
            placeholderImg="🖥️"
            affiliateLink="https://amazon.com/"
          />
        </div>
      </main>

      <footer>
        <p>&copy; {new Date().getFullYear()} TechFinds Daily. All rights reserved.</p>
        <p style={{ marginTop: '0.5rem', fontSize: '0.75rem' }}>
          CERTAIN CONTENT THAT APPEARS ON THIS SITE COMES FROM AMAZON. THIS CONTENT IS PROVIDED 'AS IS' AND IS SUBJECT TO CHANGE OR REMOVAL AT ANY TIME.
        </p>
      </footer>
    </>
  );
}

export default App;
