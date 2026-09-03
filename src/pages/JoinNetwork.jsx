import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "Join Our Network — Shape connected developmental care | Cohera Health",
  "description": "Join Cohera as a clinician, organization, family contributor, or research partner.",
  "path": "/join-network/",
  "noindex": false,
  "jsonld": []
};

export default function JoinNetwork() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-sub">
          <div className="sky" aria-hidden="true"></div>
          <div className="cloud" style={{width: "340px", height: "170px", left: "6%", top: "120px"}} aria-hidden="true"></div>
          <div className="cloud" style={{width: "280px", height: "150px", right: "8%", top: "210px"}} aria-hidden="true"></div>
          <div className="container">
            
            <p className="eyebrow">Join our network</p>
            <h1 className="reveal in">Connected care takes a connected community.</h1>
            <p className="lede reveal in">Join clinicians, families, institutions, and researchers helping shape a more continuous developmental-care journey.</p>
            <div className="btn-row center"><a className="btn btn-dark" href="#apply">Join the Network</a></div>
            
          </div>
          
        </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Who can join</p>
          <h2>A place for every contributor to the journey.</h2>
          
        </div>
          <div className="enterprise-strip mt-6 reveal">
            <div><span className="es-label">Clinical</span><strong>Clinicians and therapists</strong><p>Pediatricians, specialists, psychologists, and intervention professionals.</p></div>
            <div><span className="es-label">Institutional</span><strong>Care organizations</strong><p>Hospitals, clinics, therapy centres, early-childhood programmes, and schools.</p></div>
            <div><span className="es-label">Lived experience</span><strong>Families and caregivers</strong><p>Contribute perspective to resources, journeys, and approved programmes.</p></div>
            <div><span className="es-label">Ecosystem</span><strong>Research and partners</strong><p>Universities, NGOs, public-health bodies, funders, and collaborators.</p></div>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Ways to contribute</p>
          <h2>Choose the role that fits.</h2>
          
        </div>
          <div className="mt-6"><div className="grid-4" data-stagger>
          <div className="tile">
            <div className="t-ic sky"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Use or pilot Cohera</h3>
            <p>Explore a structured workflow in an approved care setting.</p>
          </div>
          <div className="tile">
            <div className="t-ic "><i className="ti ti-pencil tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Shape the product</h3>
            <p>Share practical feedback on usability and clinical relevance.</p>
          </div>
          <div className="tile">
            <div className="t-ic slate"><i className="ti ti-microscope tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Support validation</h3>
            <p>Contribute research, expert review, or outcome design.</p>
          </div>
          <div className="tile">
            <div className="t-ic sun"><i className="ti ti-users tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Strengthen the network</h3>
            <p>Help improve referral pathways, resources, and continuity.</p>
          </div></div></div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="band band-mist journey-band"><div className="container split" style={{alignItems: "start"}}>
          <div className="txt">
            <p className="eyebrow">What to expect</p>
            <h2>A clear path from interest to participation.</h2>
            <p className="lede">We match each person or organization to an appropriate opportunity. Clinical participation may require credential verification and agreed terms.</p>
          </div>
          <div className="steps-v">
          <div className="sv reveal">
            <div className="sv-num" aria-hidden="true">1</div>
            <div>
              <h3>Share your interest</h3>
              <p>Tell us who you are and how you would like to contribute.</p>
              
            </div>
          </div>
          <div className="sv reveal">
            <div className="sv-num" aria-hidden="true">2</div>
            <div>
              <h3>Explore the fit</h3>
              <p>We arrange a conversation when there is a relevant pathway.</p>
              
            </div>
          </div>
          <div className="sv reveal">
            <div className="sv-num" aria-hidden="true">3</div>
            <div>
              <h3>Agree and onboard</h3>
              <p>Roles, safeguards, and expectations are made clear before participation.</p>
              
            </div>
          </div></div>
        </div></div>
      </section>
      
      <section className="section-pad" id="apply">
        <div className="container" style={{maxWidth: "780px"}}>
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Your interest</p>
          <h2>Start with a short introduction</h2>
          <p className="lede">Please do not include health records, diagnoses, reports, or videos.</p>
        </div>
          <div className="form-card mt-5 reveal">
            <form data-validate noValidate aria-label="Join the Cohera network">
              <div style={{position: "absolute", left: "-9999px"}} aria-hidden="true"><label>Leave this field empty<input type="text" name="company_website_hp" tabIndex="-1" autoComplete="off" /></label></div>
              <div className="form-grid">
                
        <div className="field">
          <label htmlFor="jn-name">Full name <span className="req" aria-hidden="true">*</span></label>
          <input id="jn-name" name="jn-name" type="text" required placeholder="" autoComplete="name" />
          
          <p className="err">Please complete this field.</p>
        </div>
                
        <div className="field">
          <label htmlFor="jn-email">Email <span className="req" aria-hidden="true">*</span></label>
          <input id="jn-email" name="jn-email" type="email" required placeholder="" autoComplete="email" />
          
          <p className="err">Please enter a valid email address.</p>
        </div>
                
        <div className="field">
          <label htmlFor="jn-role">I am a… <span className="req" aria-hidden="true">*</span></label>
          <select id="jn-role" name="jn-role" required>
            <option value="" disabled>Select an option</option><option value="Clinician or professional">Clinician or professional</option><option value="Organization">Organization</option><option value="Parent or caregiver">Parent or caregiver</option><option value="Research or ecosystem partner">Research or ecosystem partner</option>
          </select>
          <p className="err">Please choose an option.</p>
        </div>
                
        <div className="field">
          <label htmlFor="jn-org">Organization</label>
          <input id="jn-org" name="jn-org" type="text" placeholder="" autoComplete="organization" />
          <p className="help">Optional</p>
          <p className="err">Please complete this field.</p>
        </div>
                
        <div className="field full">
          <label htmlFor="jn-city">City and country</label>
          <input id="jn-city" name="jn-city" type="text" placeholder="" />
          
          <p className="err">Please complete this field.</p>
        </div>
                
        <div className="field full">
          <label htmlFor="jn-motivation">How would you like to contribute? <span className="req" aria-hidden="true">*</span></label>
          <textarea id="jn-motivation" name="jn-motivation" required placeholder="A brief introduction and the pathway that interests you."></textarea>
          
          <p className="err">Please complete this field.</p>
        </div>
                
        <label className="check full">
          <input type="checkbox" id="jn-consent" name="jn-consent" required />
          <span>I agree to be contacted about my interest and acknowledge the <a href="/trust/">privacy approach</a>.</span>
        </label>
              </div>
              <div className="btn-row mt-4"><button className="btn btn-dark btn-lg" type="submit">Submit My Interest</button></div>
            </form>
            
        <div className="form-success" hidden>
          <div className="fs-ic"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "28px"}} aria-hidden="true"></i></div>
          <h3>Interest received</h3>
          <p>We will review your introduction and reach out when there is a relevant pathway.</p>
        </div>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="container center">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">After you apply</p>
          <h2>Participation begins with clarity.</h2>
          <p className="lede">We review the profile, arrange a conversation when there is a relevant pathway, verify credentials where needed, agree roles and safeguards, and then begin onboarding.</p>
        </div>
          <p className="note mt-5" style={{maxWidth: "760px", marginInline: "auto"}}>Joining the network does not guarantee referrals, paid work, public listing, investment, or immediate product access.</p>
          <div className="btn-row center mt-5"><a className="btn btn-dark" href="#apply">Submit Your Interest</a><a className="btn btn-glass" href="/contact/">Contact the Team</a></div>
        </div>
      </section>
    </Fragment>
  );
}
