import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "Cohera Health™ Suite — Screen, Assess, Therapy & Care",
  "description": "Four connected applications for early identification, structured assessment, intervention delivery, and family participation.",
  "path": "/products/",
  "noindex": false,
  "jsonld": []
};

export default function Products() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-sub">
          <div className="sky" aria-hidden="true"></div>
          <div className="cloud" style={{width: "340px", height: "170px", left: "6%", top: "120px"}} aria-hidden="true"></div>
          <div className="cloud" style={{width: "280px", height: "150px", right: "8%", top: "210px"}} aria-hidden="true"></div>
          <div className="container">
            
            <p className="eyebrow">The Cohera Health suite</p>
            <h1 className="reveal in">Purpose-built for each role. Connected around one child.</h1>
            <p className="lede reveal in">Screen, Assess, Therapy, and Care create one coordinated pathway from early identification to intervention and progress.</p>
            <div className="btn-row center"><a className="textlink" href="#portfolio">Explore Applications <i className="ti ti-arrow-down tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a><a className="btn btn-glass" href="/request-demo/">Request a Demo</a></div>
            
          </div>
          
        </section>
      
      <section className="section-pad" id="portfolio">
        <div className="container-wide">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Four connected applications</p>
          <h2>The right workflow for every stage of developmental care.</h2>
          <p className="lede">Clear applications, distinct users, and a shared longitudinal context.</p>
        </div>
          <div className="grid-4 app-grid mt-6" data-stagger>
            <article className="product-card app-card">
              <div className="pc-head"><h3>Cohera Screen</h3></div>
              <p className="pc-sub">For pediatricians</p>
              <p className="pc-desc">Guided caregiver inputs and video-based observations help integrate developmental screening into routine consultations and support timely referral.</p>
              <a className="textlink" href="/products/cohera-screen/">Explore Cohera Screen <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a>
            </article>
            <article className="product-card app-card">
              <div className="pc-head"><h3>Cohera Assess</h3></div>
              <p className="pc-sub">For clinicians and specialists</p>
              <p className="pc-desc">Structured assessment workflows consolidate observations and translate complex developmental information into clear, actionable insight.</p>
              <a className="textlink" href="/products/cohera-assess/">Explore Cohera Assess <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a>
            </article>
            <article className="product-card app-card">
              <div className="pc-head"><h3>Cohera Therapy</h3></div>
              <p className="pc-sub">For therapists and care teams</p>
              <p className="pc-desc">Personalized intervention planning, therapy delivery, and progress tracking keep multidisciplinary teams aligned over time.</p>
              <a className="textlink" href="/products/cohera-therapy/">Explore Cohera Therapy <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a>
            </article>
            <article className="product-card app-card">
              <div className="pc-head"><h3>Cohera Care</h3></div>
              <p className="pc-sub">For families</p>
              <p className="pc-desc">A connected family home for screening activities, reports, progress, care plans, expert resources, and care-team communication.</p>
              <a className="textlink" href="/products/cohera-care/">Explore Cohera Care <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a>
            </article>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="band band-sky journey-band"><div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">One coordinated journey</p>
          <h2>Each application fits one care workflow. The context moves between them.</h2>
          <p className="lede">Start with the operational need in front of you. Cohera preserves role-specific practice while making preparation, documentation, and handoffs more productive.</p>
        </div>
          <div className="mt-6"><ol className="flow " aria-label="Connected care pathway" data-stagger>
          <li className="f-step">
            <div className="f-stage-head">
              <div className="f-dot"><i className="ti ti-message-circle tabler-ui-icon" style={{"--ti-size": "20px"}} aria-hidden="true"></i></div>
              <span className="f-num">Stage 01</span>
            </div>
            <div className="f-copy">
              <h3>Identify</h3>
              <p>Bring family concerns and everyday observations into view.</p>
              
            </div>
            <span className="f-bridge" aria-hidden="true"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "16px"}} aria-hidden="true"></i></span>
          </li>
          <li className="f-step">
            <div className="f-stage-head">
              <div className="f-dot"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "20px"}} aria-hidden="true"></i></div>
              <span className="f-num">Stage 02</span>
            </div>
            <div className="f-copy">
              <h3>Screen</h3>
              <p>Review developmental context within routine pediatric care.</p>
              
            </div>
            <span className="f-bridge" aria-hidden="true"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "16px"}} aria-hidden="true"></i></span>
          </li>
          <li className="f-step">
            <div className="f-stage-head">
              <div className="f-dot"><i className="ti ti-clipboard-check tabler-ui-icon" style={{"--ti-size": "20px"}} aria-hidden="true"></i></div>
              <span className="f-num">Stage 03</span>
            </div>
            <div className="f-copy">
              <h3>Assess</h3>
              <p>Build a structured, multidisciplinary clinical picture.</p>
              
            </div>
            <span className="f-bridge" aria-hidden="true"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "16px"}} aria-hidden="true"></i></span>
          </li>
          <li className="f-step">
            <div className="f-stage-head">
              <div className="f-dot"><i className="ti ti-heart-handshake tabler-ui-icon" style={{"--ti-size": "20px"}} aria-hidden="true"></i></div>
              <span className="f-num">Stage 04</span>
            </div>
            <div className="f-copy">
              <h3>Care</h3>
              <p>Translate goals into coordinated intervention delivery.</p>
              
            </div>
            <span className="f-bridge" aria-hidden="true"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "16px"}} aria-hidden="true"></i></span>
          </li>
          <li className="f-step">
            <div className="f-stage-head">
              <div className="f-dot"><i className="ti ti-chart-line tabler-ui-icon" style={{"--ti-size": "20px"}} aria-hidden="true"></i></div>
              <span className="f-num">Stage 05</span>
            </div>
            <div className="f-copy">
              <h3>Progress</h3>
              <p>Keep outcomes, family input, and next steps visible.</p>
              
            </div>
            
          </li></ol></div>
        </div></div>
      </section>
      
      <section className="section-pad">
        <div className="container section-summary">
          <div><p className="eyebrow">Shared developmental context</p><h2>One longitudinal record across the suite.</h2></div>
          <div className="summary-body">
            <p>Caregiver observations, screening results, assessment findings, therapy plans, reports, and progress updates remain connected through Cohera’s proprietary developmental signal architecture.</p>
            <p>The architecture prepares role-appropriate context while keeping sources traceable, sharing consent-led, and clinical interpretation firmly with professionals. Teams spend less effort rebuilding the same picture at every stage.</p>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Choose your starting point</p>
          <h2>Explore Cohera by role.</h2>
          
        </div>
          <div className="mt-6"><div className="grid-4" data-stagger>
          <div className="tile">
            <div className="t-ic sky"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Pediatric practices</h3>
            <p>Bring structured screening into routine care.<br /><br /><a className="textlink" href="/request-demo/">Request a demo <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a></p>
          </div>
          <div className="tile">
            <div className="t-ic slate"><i className="ti ti-building-hospital tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Hospitals and specialists</h3>
            <p>Explore structured assessment and clinical validation.<br /><br /><a className="textlink" href="/request-demo/">Discuss a pilot <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a></p>
          </div>
          <div className="tile">
            <div className="t-ic "><i className="ti ti-heart-handshake tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Therapy teams</h3>
            <p>Plan for connected intervention delivery and progress tracking.<br /><br /><a className="textlink" href="/join-network/">Join the network <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a></p>
          </div>
          <div className="tile">
            <div className="t-ic sun"><i className="ti ti-heart tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Families</h3>
            <p>Learn how Cohera Care access through a participating care team works.<br /><br /><a className="textlink" href="/products/cohera-care/">Explore family access <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a></p>
          </div></div></div>
        </div>
      </section>
    </Fragment>
  );
}
