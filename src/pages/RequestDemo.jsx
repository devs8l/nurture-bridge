import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "Request a Demo — See Cohera in your workflow | Cohera Health",
  "description": "Tell us about your clinical setting and the workflow you want to improve. We will prepare a focused Cohera conversation.",
  "path": "/request-demo/",
  "noindex": false,
  "jsonld": []
};

export default function RequestDemo() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-sub">
          <div className="sky" aria-hidden="true"></div>
          <div className="cloud" style={{width: "340px", height: "170px", left: "6%", top: "120px"}} aria-hidden="true"></div>
          <div className="cloud" style={{width: "280px", height: "150px", right: "8%", top: "210px"}} aria-hidden="true"></div>
          <div className="container">
            
            <p className="eyebrow">Request a demo</p>
            <h1 className="reveal in">See how Cohera can fit your developmental-care workflow.</h1>
            <p className="lede reveal in">Tell us about your setting and the challenge you want to solve. We will prepare a focused conversation around the most relevant product and pathway.</p>
            <div className="btn-row center"><a className="btn btn-dark" href="#request-form">Request My Demo</a></div>
            
          </div>
          
        </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Who the demo is for</p>
          <h2>A conversation designed around real care settings.</h2>
          
        </div>
          <div className="mt-6"><div className="grid-3" data-stagger>
          <div className="tile">
            <div className="t-ic sky"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Pediatric practices</h3>
            <p>Explore structured surveillance, reports, referral, and follow-up with Cohera Screen.</p>
          </div>
          <div className="tile">
            <div className="t-ic slate"><i className="ti ti-building-hospital tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Hospitals and centres</h3>
            <p>Discuss assessment preparation, multidisciplinary workflow, governance, and a controlled Cohera Assess pilot.</p>
          </div>
          <div className="tile">
            <div className="t-ic "><i className="ti ti-microscope tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Clinical and research partners</h3>
            <p>Review validation priorities, methodology, intended outcomes, and collaboration pathways.</p>
          </div></div></div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="band band-sky trust-band"><div className="container split">
          <div className="txt">
            <p className="eyebrow">What the conversation covers</p>
            <h2>A demo shaped around your setting, not a script.</h2>
            <p className="lede">We focus on the workflow that matters to your team and state product status and boundaries clearly.</p>
          </div>
          <ul className="list-check">
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Current workflow and operational friction</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Screen, Assess, Therapy, and Care positioning</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Family and clinician journey</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Report and dashboard walkthrough</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Clinical governance and AI limitations</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Consent, privacy, and access model</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Pilot scope and evaluation measures</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Onboarding and implementation requirements</span></li></ul>
        </div></div>
      </section>
      
      <section className="section-pad" id="request-form">
        <div className="container split demo-layout" style={{alignItems: "start"}}>
          <div className="txt demo-copy">
            <p className="eyebrow">Before you submit</p>
            <h2>Give us enough context to prepare well.</h2>
            <p className="lede">A short description of your setting and challenge is more useful than a long requirements list at this stage.</p>
            <p className="note mt-4">Please do not include patient information, clinical documents, diagnoses, or videos.</p>
          </div>
          <div className="form-card reveal">
            <form data-validate noValidate aria-label="Request a demo">
              <div style={{position: "absolute", left: "-9999px"}} aria-hidden="true"><label>Leave this field empty<input type="text" name="company_website_hp" tabIndex="-1" autoComplete="off" /></label></div>
              <div className="form-grid">
                
        <div className="field">
          <label htmlFor="rd-name">Full name <span className="req" aria-hidden="true">*</span></label>
          <input id="rd-name" name="rd-name" type="text" required placeholder="" autoComplete="name" />
          
          <p className="err">Please complete this field.</p>
        </div>
                
        <div className="field">
          <label htmlFor="rd-email">Work email <span className="req" aria-hidden="true">*</span></label>
          <input id="rd-email" name="rd-email" type="email" required placeholder="" autoComplete="email" />
          
          <p className="err">Please enter a valid work email.</p>
        </div>
                
        <div className="field">
          <label htmlFor="rd-org">Organization <span className="req" aria-hidden="true">*</span></label>
          <input id="rd-org" name="rd-org" type="text" required placeholder="" autoComplete="organization" />
          
          <p className="err">Please complete this field.</p>
        </div>
                
        <div className="field">
          <label htmlFor="rd-role">Your role <span className="req" aria-hidden="true">*</span></label>
          <select id="rd-role" name="rd-role" required>
            <option value="" disabled>Select an option</option><option value="Clinician">Clinician</option><option value="Hospital or clinic leader">Hospital or clinic leader</option><option value="Research or academic partner">Research or academic partner</option><option value="Other">Other</option>
          </select>
          <p className="err">Please choose an option.</p>
        </div>
                
        <div className="field full">
          <label htmlFor="rd-product">Product interest <span className="req" aria-hidden="true">*</span></label>
          <select id="rd-product" name="rd-product" required>
            <option value="" disabled>Select an option</option><option value="Cohera Screen">Cohera Screen</option><option value="Cohera Assess">Cohera Assess</option><option value="Cohera Therapy">Cohera Therapy</option><option value="Cohera Care">Cohera Care</option><option value="Not sure yet">Not sure yet</option>
          </select>
          <p className="err">Please choose an option.</p>
        </div>
                
        <div className="field full">
          <label htmlFor="rd-usecase">What should we focus on? <span className="req" aria-hidden="true">*</span></label>
          <textarea id="rd-usecase" name="rd-usecase" required placeholder="Briefly describe the workflow or challenge. Please do not include patient data."></textarea>
          
          <p className="err">Please complete this field.</p>
        </div>
                
        <label className="check full">
          <input type="checkbox" id="rd-consent" name="rd-consent" required />
          <span>I agree to be contacted about this request and acknowledge the <a href="/trust/">privacy approach</a>.</span>
        </label>
              </div>
              <div className="btn-row mt-4"><button className="btn btn-dark btn-lg" type="submit">Request My Demo</button></div>
            </form>
            
        <div className="form-success" hidden>
          <div className="fs-ic"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "28px"}} aria-hidden="true"></i></div>
          <h3>Request received</h3>
          <p>We will review your context and contact you to arrange the right Cohera conversation.</p>
        </div>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">What happens next</p>
          <h2>From request to the right next step.</h2>
          
        </div>
          <div className="mt-5" style={{maxWidth: "860px", marginInline: "auto"}}><div className="steps-v">
          <div className="sv reveal">
            <div className="sv-num" aria-hidden="true">1</div>
            <div>
              <h3>We review your use case</h3>
              <p>Your organization, role, and challenge route the enquiry to the right person.</p>
              
            </div>
          </div>
          <div className="sv reveal">
            <div className="sv-num" aria-hidden="true">2</div>
            <div>
              <h3>A Cohera team member contacts you</h3>
              <p>We confirm the focus, attendees, and timing for the conversation.</p>
              
            </div>
          </div>
          <div className="sv reveal">
            <div className="sv-num" aria-hidden="true">3</div>
            <div>
              <h3>We tailor the demonstration</h3>
              <p>The walkthrough follows your workflow and the product’s current status.</p>
              
            </div>
          </div>
          <div className="sv reveal">
            <div className="sv-num" aria-hidden="true">4</div>
            <div>
              <h3>We define next steps together</h3>
              <p>If there is a fit, the next step may be discovery, pilot, validation, or implementation planning.</p>
              
            </div>
          </div></div></div>
        </div>
      </section>
    </Fragment>
  );
}
