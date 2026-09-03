import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "Company — NurtureBridge Tech Pvt Ltd | Cohera Health",
  "description": "Meet NurtureBridge Tech Pvt Ltd, the company building Cohera Health™ and the connected technology for developmental care.",
  "path": "/company/",
  "noindex": false,
  "jsonld": [
    {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "About NurtureBridge Tech Pvt Ltd — Cohera Health",
      "url": "https://cohera.health/company/",
      "description": "Meet NurtureBridge Tech Pvt Ltd, the company building Cohera Health™ and connected developmental-care technology for pediatricians, clinicians, therapists, and families.",
      "about": { "@id": "https://cohera.health/#organization" }
    }
  ]
};

export default function Company() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-sub">
          <div className="sky" aria-hidden="true"></div>
          <div className="cloud" style={{width: "340px", height: "170px", left: "6%", top: "120px"}} aria-hidden="true"></div>
          <div className="cloud" style={{width: "280px", height: "150px", right: "8%", top: "210px"}} aria-hidden="true"></div>
          <div className="container">
            
            <p className="eyebrow">Company</p>
            <h1 className="reveal in">Building the connected infrastructure for developmental care.</h1>
            <p className="lede reveal in">Cohera Health™, developed by NurtureBridge Tech Pvt Ltd, combines developmental-care experience, clinical insight, and responsible technology in one coordinated ecosystem.</p>
            <div className="btn-row center"><a className="textlink" href="#team">Meet the Team <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a><a className="btn btn-glass" href="/join-network/">Work With Cohera</a></div>
            
          </div>
          
        </section>
      
      <section className="section-pad">
        <div className="container split story-split">
          
          <div className="txt">
            <p className="eyebrow">Why Cohera began</p>
            <h2>Families were carrying the burden of connection.</h2>
            <p className="lede">They repeated histories across appointments while professionals worked from only part of the picture. Cohera began with a simple question: what if the context could move with the child?</p>
            <p className="mt-3">The founding team brought together years of family-support work, healthcare product experience, and engineering expertise to build a shared, clinician-governed record for developmental care.</p>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="band band-sky journey-band"><div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">What guides us</p>
          <h2>Four principles, used every day.</h2>
          
        </div>
          <div className="mt-6"><div className="grid-4" data-stagger>
          <div className="tile">
            <div className="t-ic "><i className="ti ti-heart tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Child first</h3>
            <p>Protect dignity, safety, participation, and potential.</p>
          </div>
          <div className="tile">
            <div className="t-ic sun"><i className="ti ti-users tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Family centred</h3>
            <p>Treat caregivers as essential contributors to care.</p>
          </div>
          <div className="tile">
            <div className="t-ic sky"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Clinician governed</h3>
            <p>Technology supports expertise; it does not replace it.</p>
          </div>
          <div className="tile">
            <div className="t-ic slate"><i className="ti ti-microscope tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Evidence led</h3>
            <p>Validation and real-world learning come before scale.</p>
          </div></div></div>
        </div></div>
      </section>
      
      <section className="section-pad">
        <div className="container section-summary">
          <div><p className="eyebrow">Technology IP</p><h2>Domain intelligence built for the realities of developmental care.</h2></div>
          <div className="summary-body">
            <p>Cohera’s defensible technology is the way developmental observations become structured, traceable, and usable across a child’s care journey.</p>
            <p>Its proprietary architecture connects multi-source context, prepares the right view for each workflow, and keeps professional judgment and governance at the centre—without exposing sensitive implementation details or treating a general-purpose model as the product.</p>
          </div>
        </div>
      </section>
      
      <section className="section-pad" id="team">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">The team</p>
          <h2>Domain experience meets product execution.</h2>
          
        </div>
          <div className="grid-3 mt-6" data-stagger>
            
            <article className="team-card">
              <div className="tc-ph"><img src="/assets/imagery/landing-be146ca1.png" alt="Portrait of Gayathri Ananth" loading="lazy" style={{"--portrait-scale": "1.4", "--portrait-y": "8%"}} /></div>
              <div className="tc-meta">
                <div><h3>Gayathri Ananth</h3><p className="tc-role">Co-Founder & CEO</p></div>
                <a className="tc-linkedin" href="https://www.linkedin.com/in/gayathri-s-0ab77b7/" target="_blank" rel="noopener noreferrer" aria-label="View Gayathri Ananth on LinkedIn" title="View Gayathri Ananth on LinkedIn"><i className="ti ti-brand-linkedin tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></a>
              </div>
              <p>Developmental-care leader whose work with families shaped Cohera’s domain-first approach.</p>
            </article>
            <article className="team-card">
              <div className="tc-ph"><img src="/assets/imagery/landing-c07347c6.png" alt="Portrait of Harshit Pandey" loading="lazy" style={{"--portrait-scale": "0.82", "--portrait-y": "5%"}} /></div>
              <div className="tc-meta">
                <div><h3>Harshit Pandey</h3><p className="tc-role">Co-Founder & CTO</p></div>
                <a className="tc-linkedin" href="https://www.linkedin.com/in/pandeyharshit/" target="_blank" rel="noopener noreferrer" aria-label="View Harshit Pandey on LinkedIn" title="View Harshit Pandey on LinkedIn"><i className="ti ti-brand-linkedin tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></a>
              </div>
              <p>Technology leader responsible for engineering, AI infrastructure, security, and scale.</p>
            </article>
            <article className="team-card">
              <div className="tc-ph"><img src="/assets/imagery/landing-bcaea6f3.png" alt="Portrait of Devjeet Choudhury" loading="lazy" style={{"--portrait-scale": "1.03", "--portrait-y": "9%"}} /></div>
              <div className="tc-meta">
                <div><h3>Devjeet Choudhury</h3><p className="tc-role">Co-Founder & CPO</p></div>
                <a className="tc-linkedin" href="https://www.linkedin.com/in/devjeetchoudhury/" target="_blank" rel="noopener noreferrer" aria-label="View Devjeet Choudhury on LinkedIn" title="View Devjeet Choudhury on LinkedIn"><i className="ti ti-brand-linkedin tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></a>
              </div>
              <p>Healthcare product leader connecting clinical workflows, product strategy, and partnerships.</p>
            </article>
          </div>
          <p className="note mt-6" style={{maxWidth: "760px", marginInline: "auto"}}>Cohera’s wider clinical and research network contributes expertise across neurodevelopment, psychology, intervention science, assessment, and responsible AI.</p>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">The road ahead</p>
          <h2>Grow only when the workflow earns it.</h2>
          
        </div>
          <div className="enterprise-strip mt-6 reveal">
            <div><span className="es-label">Incubated and supported by</span><strong>Company building</strong><p>Verified incubation and startup programmes.</p></div>
            <div><span className="es-label">Clinical research and validation</span><strong>Evidence generation</strong><p>Confirmed clinical and academic collaborators.</p></div>
            <div><span className="es-label">Grants and recognition</span><strong>Inclusive innovation</strong><p>Confirmed grants, cohorts, and awards.</p></div>
            <div><span className="es-label">Community collaboration</span><strong>Family-grounded impact</strong><p>Long-standing developmental-care initiatives.</p></div>
          </div>
          <div className="mt-6"><ol className="flow flow-4" aria-label="Connected care pathway" data-stagger>
          <li className="f-step">
            <div className="f-stage-head">
              <div className="f-dot"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "20px"}} aria-hidden="true"></i></div>
              <span className="f-num">Stage 01</span>
            </div>
            <div className="f-copy">
              <h3>Adopt</h3>
              <p>Start with useful clinical workflows.</p>
              
            </div>
            <span className="f-bridge" aria-hidden="true"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "16px"}} aria-hidden="true"></i></span>
          </li>
          <li className="f-step">
            <div className="f-stage-head">
              <div className="f-dot"><i className="ti ti-clipboard-check tabler-ui-icon" style={{"--ti-size": "20px"}} aria-hidden="true"></i></div>
              <span className="f-num">Stage 02</span>
            </div>
            <div className="f-copy">
              <h3>Measure</h3>
              <p>Evaluate preparation, review, and referral.</p>
              
            </div>
            <span className="f-bridge" aria-hidden="true"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "16px"}} aria-hidden="true"></i></span>
          </li>
          <li className="f-step">
            <div className="f-stage-head">
              <div className="f-dot"><i className="ti ti-microscope tabler-ui-icon" style={{"--ti-size": "20px"}} aria-hidden="true"></i></div>
              <span className="f-num">Stage 03</span>
            </div>
            <div className="f-copy">
              <h3>Validate</h3>
              <p>Build evidence with clinical and academic partners.</p>
              
            </div>
            <span className="f-bridge" aria-hidden="true"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "16px"}} aria-hidden="true"></i></span>
          </li>
          <li className="f-step">
            <div className="f-stage-head">
              <div className="f-dot"><i className="ti ti-world tabler-ui-icon" style={{"--ti-size": "20px"}} aria-hidden="true"></i></div>
              <span className="f-num">Stage 04</span>
            </div>
            <div className="f-copy">
              <h3>Scale</h3>
              <p>Expand with governance and evidence in place.</p>
              
            </div>
            
          </li></ol></div>
        </div>
      </section>
    </Fragment>
  );
}
