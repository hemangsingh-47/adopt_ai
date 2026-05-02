import React from 'react';
import { Link } from 'react-router-dom';
import { Network, ArrowRight, ChevronDown, BarChart3, Zap, Shield } from 'lucide-react';
import SEO from '../components/SEO';

const Landing = () => {
  return (
    <div className="landing">
      <SEO 
        title="Precision Marketing & Intelligence" 
        description="Optimize your marketing campaigns with AI-driven insights. Reduce wasted ad spend and maximize ROAS with AdOpt AI's autonomous optimization engine."
        url="/"
      />
      {/* ── Navbar ── */}
      <nav className="landing-nav">
        <div className="landing-nav-inner">
          <Link to="/" className="landing-brand">
            <Network size={22} />
            <span>ADOPT AI</span>
          </Link>

          <div className="landing-nav-links">
            <a href="#features">Platform</a>
            <a href="#features">Solutions</a>
            <a href="#pricing">Pricing</a>
          </div>

          <div className="landing-nav-actions">
            <Link to="/login" className="landing-login-link">Log in</Link>
            <Link to="/register" className="landing-cta-sm">Get Started Free</Link>
          </div>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="landing-hero">
        <div className="landing-badge">
          <span className="landing-badge-dot"></span>
          AdOpt 2.0 Engine Live
        </div>

        <h1 className="landing-headline">
          AI-powered ad optimization.<br />
          <span className="landing-headline-purple">Reduce wasted ad spend.</span>
        </h1>

        <p className="landing-subtext">
          Deploy autonomous agents that analyze campaigns, track creative performance, and
          reallocate budgets in real-time. Maximize your ROAS without the cognitive overload.
        </p>

        <div className="landing-hero-btns">
          <Link to="/register" className="landing-btn-primary">
            Get Started Free <ArrowRight size={16} />
          </Link>
          <a href="#features" className="landing-btn-secondary">
            Book Demo
          </a>
        </div>

        {/* ── Dashboard Preview ── */}
        <div className="landing-preview">
          <div className="landing-preview-window">
            <div className="landing-preview-topbar">
              <div className="landing-preview-dots">
                <span></span><span></span><span></span>
              </div>
            </div>
            <div className="landing-preview-body">
              <div className="landing-preview-sidebar">
                <div className="landing-preview-sidebar-item active">
                  <BarChart3 size={14} /> Dashboard
                </div>
                <div className="landing-preview-sidebar-item">
                  <Zap size={14} /> Campaigns
                </div>
                <div className="landing-preview-sidebar-item">
                  <Shield size={14} /> AI Insights
                </div>
              </div>
              <div className="landing-preview-content">
                <div className="landing-preview-header">
                  <span>Performance</span>
                  <span className="landing-preview-tag">+51%</span>
                </div>
                <div className="landing-preview-label">Database Preview</div>
                <div className="landing-preview-table">
                  <div className="landing-preview-row head">
                    <span>Campaign Tag</span>
                    <span>Location</span>
                  </div>
                  <div className="landing-preview-row">
                    <span>Marketing Deals</span>
                    <span>Europe Eastern Region</span>
                  </div>
                  <div className="landing-preview-row">
                    <span>Operations</span>
                    <span>Ontario County Leeds</span>
                  </div>
                  <div className="landing-preview-row">
                    <span>Market Reach</span>
                    <span>Queensland</span>
                  </div>
                  <div className="landing-preview-row">
                    <span>Organic</span>
                    <span>Frontline</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Features ── */}
      <section className="landing-features" id="features">
        <h2 className="landing-section-title">Why teams choose AdOpt AI</h2>
        <div className="landing-features-grid">
          <div className="landing-feature-card">
            <div className="landing-feature-icon"><BarChart3 size={24} /></div>
            <h3>Unified Dashboard</h3>
            <p>All your campaign metrics in a single, real-time view. No more tab-switching across platforms.</p>
          </div>
          <div className="landing-feature-card">
            <div className="landing-feature-icon"><Zap size={24} /></div>
            <h3>AI-Driven Insights</h3>
            <p>Get actionable recommendations generated by GPT to reduce wasted spend and improve ROAS.</p>
          </div>
          <div className="landing-feature-card">
            <div className="landing-feature-icon"><Shield size={24} /></div>
            <h3>Budget Alerts</h3>
            <p>Real-time notifications when campaigns exceed thresholds or performance drops unexpectedly.</p>
          </div>
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="landing-footer">
        <div className="landing-footer-inner">
          <div className="landing-footer-brand">
            <Network size={18} />
            <span>ADOPT AI</span>
          </div>
          <p className="landing-footer-copy">&copy; {new Date().getFullYear()} AdOpt AI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;
