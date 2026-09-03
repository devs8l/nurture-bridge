import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "Contact Us — Start the right conversation | Cohera Health",
  "description": "Whether you are a family looking for information, a clinician exploring Cohera, an institution considering a pilot, or a researcher interested in collaboration — tell us how we can help.",
  "path": "/contact/",
  "noindex": false,
  "jsonld": [
    {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": "Contact Cohera Health",
      "url": "https://cohera.health/contact/",
      "description": "Contact Cohera Health for clinical demos, pilot discussions, partnerships, research collaboration, or general enquiries.",
      "contactType": "customer support",
      "areaServed": "Worldwide"
    }
  ]
};

export default function Contact() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-sub">
          <div className="sky" aria-hidden="true"></div>
          <div className="cloud" style={{width: "340px", height: "170px", left: "6%", top: "120px"}} aria-hidden="true"></div>
          <div className="cloud" style={{width: "280px", height: "150px", right: "8%", top: "210px"}} aria-hidden="true"></div>
          <div className="container">
            
            <p className="eyebrow">Contact us</p>
            <h1 className="reveal in">Start the right conversation.</h1>
            <p className="lede reveal in">Whether you are a family looking for information, a clinician exploring Cohera, an institution considering a pilot, or a researcher interested in collaboration — tell us how we can help.</p>
            
            
          </div>
          
        </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Choose your path</p>
          <h2>Four fast lanes to the right team</h2>
          
        </div>
          <div className="grid-4 mt-6" data-stagger>
            <div className="tile">
              <div className="t-ic slate"><i className="ti ti-building-hospital tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
              <h3>Healthcare organizations</h3>
              <p>Request a product demonstration, pilot discussion, or implementation conversation.</p>
              <p className="mt-3"><a className="textlink" href="/request-demo/">Request a Demo <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a></p>
            </div>
            <div className="tile">
              <div className="t-ic sky"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
              <h3>Clinicians and professionals</h3>
              <p>Explore clinical use, advisory work, referral collaboration, research, or validation.</p>
              <p className="mt-3"><a className="textlink" href="/join-network/">Join Our Network <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a></p>
            </div>
            <div className="tile">
              <div className="t-ic"><i className="ti ti-users tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
              <h3>Families and caregivers</h3>
              <p>Access resources, early-access updates, or approved programme information.</p>
              <p className="mt-3"><a className="textlink" href="/for-families/">Explore Family Support <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a></p>
            </div>
            <div className="tile">
              <div className="t-ic sun"><i className="ti ti-affiliate tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
              <h3>Research, funding, and ecosystem</h3>
              <p>Discuss research, grants, public-health programmes, investment, or strategic partnerships.</p>
              <p className="mt-3"><a className="textlink" href="#contact-form">Contact the Team <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a></p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="band band-mist journey-band"><div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">What to expect</p>
          <h2>A clear handoff to the right team.</h2>
          
        </div>
          <div className="enterprise-strip mt-6 reveal">
            <div><span className="es-label">01 · Route</span><strong>Choose the closest path</strong><p>Demo, network, family resources, or general enquiry.</p></div>
            <div><span className="es-label">02 · Review</span><strong>We read the context</strong><p>Your enquiry is directed to the appropriate Cohera team member.</p></div>
            <div><span className="es-label">03 · Respond</span><strong>Two-business-day aim</strong><p>We confirm the most relevant next conversation.</p></div>
            <div><span className="es-label">Privacy</span><strong>No patient data</strong><p>Keep reports, diagnoses, and videos out of marketing forms.</p></div>
          </div>
        </div></div>
      </section>
      
      <section className="section-pad" id="contact-form">
        <div className="container" style={{maxWidth: "860px"}}>
          
        <div className="sec-head center reveal">
          <p className="eyebrow">General contact</p>
          <h2>Send us a message</h2>
          
        </div>
          <div className="form-card mt-5 reveal">
            <form data-validate noValidate aria-label="Contact form">
              <div style={{position: "absolute", left: "-9999px"}} aria-hidden="true"><label>Leave this field empty<input type="text" name="company_website_hp" tabIndex="-1" autoComplete="off" /></label></div>
              <div className="form-grid">
                
        <div className="field">
          <label htmlFor="ct-name">Full name <span className="req" aria-hidden="true">*</span></label>
          <input id="ct-name" name="ct-name" type="text" required placeholder="Your name" autoComplete="name" />
          
          <p className="err">Please complete this field.</p>
        </div>
                
        <div className="field">
          <label htmlFor="ct-email">Email <span className="req" aria-hidden="true">*</span></label>
          <input id="ct-email" name="ct-email" type="email" required placeholder="name@example.com" autoComplete="email" />
          
          <p className="err">Please enter a valid email address.</p>
        </div>
                
        <div className="field">
          <label htmlFor="ct-phone">Phone / WhatsApp</label>
          <input id="ct-phone" name="ct-phone" type="tel" placeholder="+91" autoComplete="tel" />
          <p className="help">Optional — include a country code if outside India.</p>
          <p className="err">Please complete this field.</p>
        </div>
                
        <div className="field">
          <label htmlFor="ct-role">I am a… <span className="req" aria-hidden="true">*</span></label>
          <select id="ct-role" name="ct-role" required>
            <option value="" disabled>Select an option</option><option value="Parent or caregiver">Parent or caregiver</option><option value="Pediatrician">Pediatrician</option><option value="Specialist or therapist">Specialist or therapist</option><option value="Hospital or clinic representative">Hospital or clinic representative</option><option value="Researcher or academic">Researcher or academic</option><option value="Investor or funder">Investor or funder</option><option value="Media">Media</option><option value="Other">Other</option>
          </select>
          <p className="err">Please choose an option.</p>
        </div>
                
        <div className="field">
          <label htmlFor="ct-org">Organization, if applicable</label>
          <input id="ct-org" name="ct-org" type="text" placeholder="Organization name" autoComplete="organization" />
          
          <p className="err">Please complete this field.</p>
        </div>
                
        <div className="field">
          <label htmlFor="ct-city">Country and city</label>
          <input id="ct-city" name="ct-city" type="text" placeholder="e.g. India, Bengaluru" autoComplete="address-level2" />
          
          <p className="err">Please complete this field.</p>
        </div>
                
        <div className="field">
          <label htmlFor="ct-nature">Nature of enquiry <span className="req" aria-hidden="true">*</span></label>
          <select id="ct-nature" name="ct-nature" required>
            <option value="" disabled>Select an option</option><option value="Product demonstration">Product demonstration</option><option value="Pilot or implementation">Pilot or implementation</option><option value="Clinical or research collaboration">Clinical or research collaboration</option><option value="Family resources and programmes">Family resources and programmes</option><option value="Partnership or funding">Partnership or funding</option><option value="Media enquiry">Media enquiry</option><option value="Something else">Something else</option>
          </select>
          <p className="err">Please choose an option.</p>
        </div>
                
        <div className="field">
          <label htmlFor="ct-pref">Preferred contact method</label>
          <select id="ct-pref" name="ct-pref">
            <option value="" disabled>Select an option</option><option value="Email">Email</option><option value="Phone">Phone</option><option value="WhatsApp">WhatsApp</option>
          </select>
          <p className="err">Please choose an option.</p>
        </div>
                
        <div className="field full">
          <label htmlFor="ct-msg">Message <span className="req" aria-hidden="true">*</span></label>
          <textarea id="ct-msg" name="ct-msg" required placeholder="How can we help? Please do not include clinical reports, diagnoses, or videos."></textarea>
          
          <p className="err">Please complete this field.</p>
        </div>
                
        <label className="check full">
          <input type="checkbox" id="ct-consent" name="ct-consent" required />
          <span>I agree to be contacted about this enquiry and acknowledge the <a href="/trust/">privacy approach</a>.</span>
        </label>
              </div>
              <div className="btn-row mt-4"><button className="btn btn-dark btn-lg" type="submit">Send Message</button></div>
              <p className="small mt-3">Cohera is not an emergency service and this form should not be used for urgent medical or safety concerns.</p>
            </form>
            
        <div className="form-success" hidden>
          <div className="fs-ic"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "28px"}} aria-hidden="true"></i></div>
          <h3>Your enquiry has been received</h3>
          <p>Thank you for contacting Cohera Health. Your enquiry will be directed to the appropriate member of our team.</p>
        </div>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Contact details</p>
          <h2>Official channels</h2>
          
        </div>
          <div className="grid-3 mt-6" data-stagger>
            <div className="tile center" style={{textAlign: "center"}}>
              <div className="t-ic" style={{marginInline: "auto"}}><i className="ti ti-mail tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
              <h3>Email</h3>
              <p>General — <a href="mailto:hello@cohera.health">hello@cohera.health</a><br />Partnerships — <a href="mailto:partnerships@cohera.health">partnerships@cohera.health</a></p>
            </div>
            <div className="tile center" style={{textAlign: "center"}}>
              <div className="t-ic sky" style={{marginInline: "auto"}}><i className="ti ti-map-pin tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
              <h3>Location</h3>
              <p>Bengaluru, India<br />Working with families and clinics across India</p>
            </div>
            <div className="tile center" style={{textAlign: "center"}}>
              <div className="t-ic sun" style={{marginInline: "auto"}}><i className="ti ti-clock tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
              <h3>Hours and response</h3>
              <p>Monday to Saturday, 10:00–18:00 IST<br />We aim to respond within two business days</p>
            </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
