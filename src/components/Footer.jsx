import { Mark } from './Brand';
import Icon from './Icon';

export default function Footer() {
  return (
    <footer className="site-footer site-footer--reference">
      <div className="f-img" style={{ backgroundImage: 'url(/assets/imagery/cohera-footer-background.svg)' }} aria-hidden="true" />
      <div className="f-inner">
        <div className="f-layout">
          <div className="f-lead">
            <a className="f-logo" href="/" aria-label="Cohera home"><Mark height={34} /><span>Cohera</span></a>
            <h2>Keep the whole journey in view.</h2>
            <p className="f-disclaimer">Cohera supports clinical work; it does not independently diagnose a child or replace qualified professional judgment. Cohera is not an emergency service — for urgent medical or safety concerns, contact an appropriate healthcare professional or your local emergency service.</p>
            <div className="f-actions"><a className="btn btn-dark" href="/request-demo/">Request a Demo</a></div>
          </div>
          <nav className="f-nav-grid" aria-label="Footer">
            <div className="f-col">
              <h4>Company</h4>
              <ul>
                <li><a href="/company/">About Us</a></li>
                <li><a href="/contact/">Contact Us</a></li>
                <li><a href="/request-demo/">Request a Demo</a></li>
                <li><a href="/join-network/">Join Our Network</a></li>
                <li><a href="/trust/">Trust &amp; Privacy</a></li>
              </ul>
            </div>
            <div className="f-col">
              <h4>Products</h4>
              <ul>
                <li><a href="/products/cohera-screen/">Cohera Screen</a></li>
                <li><a href="/products/cohera-assess/">Cohera Assess</a></li>
                <li><a href="/products/cohera-therapy/">Cohera Therapy</a></li>
                <li><a href="/products/cohera-care/">Cohera Care</a></li>
              </ul>
            </div>
            <div className="f-col">
              <h4>Explore</h4>
              <ul>
                <li><a href="/for-clinicians/">For Clinicians</a></li>
                <li><a href="/for-families/">For Families</a></li>
                <li><a href="/evidence/">Evidence</a></li>
                <li><a href="/resources/">Resources</a></li>
              </ul>
            </div>
            <div className="f-col">
              <h4>Other Links</h4>
              <ul>
                <li><a href="/privacy-policy/">Privacy Policy</a></li>
                <li><a href="/terms-of-use/">Terms of Use</a></li>
              </ul>
            </div>
            <div className="f-col f-socials">
              <h4>Socials</h4>
              <ul>
                <li><a href="#" rel="noopener"><Icon name="brand-linkedin" size={18} /><span>LinkedIn</span></a></li>
                <li><a href="#" rel="noopener"><Icon name="brand-instagram" size={18} /><span>Instagram</span></a></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
      <div className="f-bottom">&copy; 2026 NurtureBridge Tech Pvt Ltd. Cohera Health™. All rights reserved.</div>
    </footer>
  );
}
