import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "Cohera Health™ — One connected child-development pathway",
  "description": "Cohera Health connects pediatricians, clinicians, therapists, and families from early identification to intervention and progress.",
  "path": "/",
  "noindex": false,
  "jsonld": [
    {
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      "@id": "https://cohera.health/#medicalbusiness",
      "name": "Cohera Health™",
      "alternateName": "Cohera Health",
      "legalName": "NurtureBridge Tech Pvt Ltd",
      "url": "https://cohera.health/",
      "description": "Connected developmental-care technology for pediatricians, clinicians, therapists, and families—from early identification through assessment and intervention.",
      "medicalSpecialty": "Pediatrics",
      "knowsAbout": [
        "Child developmental surveillance",
        "Pediatric developmental screening",
        "Developmental assessment",
        "Child therapy coordination"
      ]
    },
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": "https://cohera.health/#software",
      "name": "Cohera Health™ Platform",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web",
      "url": "https://cohera.health/",
      "description": "Clinical-grade digital health platform connecting pediatricians, developmental specialists, therapists, and families across the child developmental care pathway.",
      "offers": {
        "@type": "Offer",
        "availability": "https://schema.org/PreOrder",
        "description": "Request a demo to learn about pricing and deployment"
      },
      "publisher": {
        "@type": "Organization",
        "name": "NurtureBridge Tech Pvt Ltd"
      }
    }
  ]
};

export default function Home() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-home">
        <div className="hero-panel">
          <div className="hero-content">
            <h1 className="reveal in">One connected pathway for every child’s developmental journey.</h1>
            <p className="lede reveal in">Cohera Health™ connects pediatricians, clinicians, therapists, and families—from early identification and assessment to intervention and progress.</p>
            <div className="btn-row center reveal in">
              <a className="btn btn-dark hero-cta" href="/request-demo/">Request a Demo</a>
            </div>
          </div>
          <div className="hero-scene">
            <img className="hero-purple-character" src="/assets/hero/purple-character.svg" alt="" />
            <img className="hero-mobile-ui" src="/assets/hero/mobile.svg" alt="" />
            <img className="hero-doctor-character" src="/assets/hero/doctor-character.svg" alt="" />
            <img className="hero-doctor-ui" src="/assets/hero/doctor-ui.svg" alt="" />
            <a className="hero-hover-target hero-hover-target--parent-character" data-hero-hover="parent" href="/for-families/" aria-label="Explore Cohera for families from the violet character"></a>
            <a className="hero-hover-target hero-hover-target--parent-ui" data-hero-hover="parent" href="/for-families/" aria-label="Explore Cohera for families from the mobile application"></a>
            <a className="hero-hover-target hero-hover-target--doctor-character" data-hero-hover="doctor" href="/for-clinicians/" aria-label="Explore Cohera for clinicians from the doctor character"></a>
            <a className="hero-hover-target hero-hover-target--doctor-ui" data-hero-hover="doctor" href="/for-clinicians/" aria-label="Explore Cohera for clinicians from the clinical interface"></a>
          </div>
          <a className="hero-hover-card hero-hover-card--parent" data-hero-card="parent" href="/for-families/" aria-hidden="true" tabIndex="-1">
            <span className="hero-hover-card__head">
              <span className="hero-hover-card__avatar hero-hover-card__avatar--parent"><img src="/assets/hero/parent-hover-avatar-v2.png" alt="" /></span>
              <strong>Hello Parent!</strong>
            </span>
            <span className="hero-hover-card__link">Explore Cohera Care <span aria-hidden="true">›</span></span>
            <span className="hero-hover-card__copy">Your child’s development companion.</span>
          </a>
          <a className="hero-hover-card hero-hover-card--doctor" data-hero-card="doctor" href="/for-clinicians/" aria-hidden="true" tabIndex="-1">
            <span className="hero-hover-card__head">
              <span className="hero-hover-card__avatar hero-hover-card__avatar--doctor"><img src="/assets/hero/doctor-hover-avatar-v2.png" alt="" /></span>
              <strong>Hello Doctor!</strong>
            </span>
            <span className="hero-hover-card__link">Explore Cohera Screen <span aria-hidden="true">›</span></span>
            <span className="hero-hover-card__copy">Your one stop solution for managing profiles</span>
          </a>
        </div>
      </section>
      
      <section className="section-pad" id="why-cohera">
        <div className="container split story-split">
          <figure className="story-photo reveal">
            <img src="/assets/imagery/cohera-pediatrician-mother-baby.png" alt="A pediatrician examining a baby while the mother looks on" width="3052" height="1994" loading="lazy" decoding="async" />
          </figure>
          <div className="txt">
            <p className="eyebrow">The gap in developmental care</p>
            <h2>The signals appear early. The system connects them late.</h2>
            <p className="lede">Developmental information is often scattered across family observations, short consultations, specialist reports, and therapy notes. The result is repetition, delayed referrals, and a fragmented view of progress.</p>
            <div className="mt-4"><ul className="list-check">
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Important everyday observations are easy to lose</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Families repeat the same history across providers</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Professionals work without the full longitudinal context</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Intervention progress can disappear between appointments</span></li></ul></div>
          </div>
        </div>
      </section>
      
      <section className="section-pad" id="pathway">
        <div className="band band-sky journey-band"><div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">One coordinated pathway</p>
          <h2>From first concern to measurable progress.</h2>
          <p className="lede">Cohera connects the work already happening across families and care teams—helping each conversation begin prepared and each handoff move forward with context.</p>
        </div>
          <div className="mt-6"><div className="pathway-tabs journey-tabs reveal" data-pathway-tabs>
        <div className="pt-tablist" role="tablist" aria-label="Developmental care pathway" style={{"--tab-count": "5"}}>
          <button className="pt-tab is-active" type="button" role="tab" id="pt-tab-identify" aria-controls="pt-panel-identify" aria-selected="true" tabIndex="0" data-pathway-tab>
            <span className="pt-tab-icon"><i className="ti ti-message-circle tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Identify</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
          </button><button className="pt-tab" type="button" role="tab" id="pt-tab-screen" aria-controls="pt-panel-screen" aria-selected="false" tabIndex="-1" data-pathway-tab>
            <span className="pt-tab-icon"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Screen</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
          </button><button className="pt-tab" type="button" role="tab" id="pt-tab-assess" aria-controls="pt-panel-assess" aria-selected="false" tabIndex="-1" data-pathway-tab>
            <span className="pt-tab-icon"><i className="ti ti-clipboard-check tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Assess</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
          </button><button className="pt-tab" type="button" role="tab" id="pt-tab-care" aria-controls="pt-panel-care" aria-selected="false" tabIndex="-1" data-pathway-tab>
            <span className="pt-tab-icon"><i className="ti ti-heart-handshake tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Care</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
          </button><button className="pt-tab" type="button" role="tab" id="pt-tab-progress" aria-controls="pt-panel-progress" aria-selected="false" tabIndex="-1" data-pathway-tab>
            <span className="pt-tab-icon"><i className="ti ti-chart-line tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Progress</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
          </button>
        </div>
        <div className="pt-panels">
          <section className="pt-panel" role="tabpanel" id="pt-panel-identify" aria-labelledby="pt-tab-identify">
            <div className="pt-main">
              <p className="pt-audience">Families and care teams</p>
              <h3>Start with what families notice.</h3>
              <p>Concerns, strengths, history, and everyday examples are captured before they disappear into another conversation.</p>
              <a className="textlink" href="/for-families/">See the family journey <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a>
            </div>
            <div className="pt-detail">
              <div><span>In the workflow</span><p>Families share relevant context before or between visits.</p></div>
              <div><span>Cohera contributes</span><p>Cohera organizes each observation with its source and place in the child’s journey.</p></div>
              <div className="pt-value"><span>Practical value</span><p>The first clinical conversation begins better prepared.</p></div>
            </div>
          </section><section className="pt-panel" role="tabpanel" id="pt-panel-screen" aria-labelledby="pt-tab-screen" hidden>
            <div className="pt-main">
              <p className="pt-audience">Pediatricians</p>
              <h3>Bring developmental context into routine care.</h3>
              <p>Structured caregiver inputs and guided observations help pediatricians review what deserves closer attention without redesigning the consultation.</p>
              <a className="textlink" href="/products/cohera-screen/">Explore Cohera Screen <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a>
            </div>
            <div className="pt-detail">
              <div><span>In the workflow</span><p>The pediatrician reviews sources, examines the child, and determines the next step.</p></div>
              <div><span>Cohera contributes</span><p>Cohera prepares a concise, traceable developmental picture for review.</p></div>
              <div className="pt-value"><span>Practical value</span><p>More attention can stay on the child and the clinical decision.</p></div>
            </div>
          </section><section className="pt-panel" role="tabpanel" id="pt-panel-assess" aria-labelledby="pt-tab-assess" hidden>
            <div className="pt-main">
              <p className="pt-audience">Clinicians and specialists</p>
              <h3>Give specialists a prepared multidisciplinary picture.</h3>
              <p>Family history, referral context, prior records, and professional observations arrive in one coherent view before assessment begins.</p>
              <a className="textlink" href="/products/cohera-assess/">Explore Cohera Assess <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a>
            </div>
            <div className="pt-detail">
              <div><span>In the workflow</span><p>Qualified professionals continue using approved tools, observation, and judgment.</p></div>
              <div><span>Cohera contributes</span><p>Cohera supports case preparation, provenance, and clinician-owned documentation.</p></div>
              <div className="pt-value"><span>Practical value</span><p>Less document chasing, repeated intake, and context loss.</p></div>
            </div>
          </section><section className="pt-panel" role="tabpanel" id="pt-panel-care" aria-labelledby="pt-tab-care" hidden>
            <div className="pt-main">
              <p className="pt-audience">Therapists and care teams</p>
              <h3>Connect clinical goals to everyday delivery.</h3>
              <p>Plans, sessions, family guidance, and multidisciplinary updates remain aligned around the goals that matter.</p>
              <a className="textlink" href="/products/cohera-therapy/">Explore Cohera Therapy <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a>
            </div>
            <div className="pt-detail">
              <div><span>In the workflow</span><p>Each professional retains their role, method, and responsibility for care.</p></div>
              <div><span>Cohera contributes</span><p>Cohera connects plans, delivery notes, and relevant observations across the team.</p></div>
              <div className="pt-value"><span>Practical value</span><p>Fewer fragmented handoffs and clearer review points.</p></div>
            </div>
          </section><section className="pt-panel" role="tabpanel" id="pt-panel-progress" aria-labelledby="pt-tab-progress" hidden>
            <div className="pt-main">
              <p className="pt-audience">Everyone around the child</p>
              <h3>Make change visible over time.</h3>
              <p>New observations and outcomes build on the same developmental history so every review begins with what has changed.</p>
              <a className="textlink" href="/products/">Explore the connected suite <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a>
            </div>
            <div className="pt-detail">
              <div><span>In the workflow</span><p>Families and professionals contribute through appropriate, consent-led access.</p></div>
              <div><span>Cohera contributes</span><p>Cohera keeps goals, sources, updates, and next steps connected longitudinally.</p></div>
              <div className="pt-value"><span>Practical value</span><p>The child does not start over at the next appointment.</p></div>
            </div>
          </section>
        </div>
      </div></div>
        </div></div>
      </section>
      
      <section className="section-pad" id="suite">
        <div className="container-wide">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">The Cohera Health suite</p>
          <h2>Four applications. One continuous care pathway.</h2>
          <p className="lede">Each application is purpose-built for a specific role. Together, they preserve the context every role needs.</p>
        </div>
          <div className="mt-6">
      <div className="grid-4 product-grid app-grid" data-stagger id="products">
        <article className="product-card app-card">
          <div className="pc-head"><span className="pc-icon"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "32px"}} aria-hidden="true"></i></span><h3>Cohera Screen</h3></div>
          <p className="pc-sub">For pediatricians</p>
          <p className="pc-desc">Bring guided caregiver inputs and video-based observations into routine consultations to identify potential developmental concerns earlier.</p>
          <a className="textlink" href="/products/cohera-screen/">Explore Screen <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a>
        </article>
        <article className="product-card app-card">
          <div className="pc-head"><span className="pc-icon"><i className="ti ti-clipboard-check tabler-ui-icon" style={{"--ti-size": "32px"}} aria-hidden="true"></i></span><h3>Cohera Assess</h3></div>
          <p className="pc-sub">For clinicians and specialists</p>
          <p className="pc-desc">Conduct structured assessments, consolidate observations, and translate complex information into clear, actionable insight.</p>
          <a className="textlink" href="/products/cohera-assess/">Explore Assess <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a>
        </article>
        <article className="product-card app-card">
          <div className="pc-head"><span className="pc-icon"><i className="ti ti-heart-handshake tabler-ui-icon" style={{"--ti-size": "32px"}} aria-hidden="true"></i></span><h3>Cohera Therapy</h3></div>
          <p className="pc-sub">For therapists and care teams</p>
          <p className="pc-desc">Create personalized intervention plans, manage therapy delivery, and follow a child’s progress over time.</p>
          <a className="textlink" href="/products/cohera-therapy/">Explore Therapy <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a>
        </article>
        <article className="product-card app-card">
          <div className="pc-head"><span className="pc-icon"><i className="ti ti-heart tabler-ui-icon" style={{"--ti-size": "32px"}} aria-hidden="true"></i></span><h3>Cohera Care</h3></div>
          <p className="pc-sub">For families</p>
          <p className="pc-desc">Access activities, reports, progress updates, therapy plans, expert resources, and care-team communication in one place.</p>
          <a className="textlink" href="/products/cohera-care/">Explore Cohera Care <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a>
        </article>
      </div></div>
        </div>
      </section>
      
      <section className="section-pad" id="shared-context">
        <div className="band band-mist"><div className="container split visual-split">
          <div className="txt">
            <p className="eyebrow">The connective layer</p>
            <h2>A developmental record that moves with the child.</h2>
            <p>Cohera brings caregiver inputs, screening results, assessment findings, intervention plans, reports, and progress updates into a longitudinal record.</p>
            <p>Every contributor sees information appropriate to their role. Sources stay traceable, access stays consent-led, and the next conversation starts with better context.</p>
            <div className="mt-4"><a className="textlink" href="/products/">See how the suite works together <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a></div>
          </div>
          <div className="context-orbit reveal" aria-label="Four care perspectives connected around one child">
          <div className="orbit-track" aria-hidden="true"></div>
          <div className="orbit-node orbit-family"><span className="orbit-ic"><i className="ti ti-heart tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span><strong>Family</strong><small>Everyday observations</small></span></div><div className="orbit-node orbit-screen"><span className="orbit-ic"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span><strong>Pediatrician</strong><small>Screening and referral</small></span></div><div className="orbit-node orbit-assess"><span className="orbit-ic"><i className="ti ti-clipboard-check tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span><strong>Specialist</strong><small>Assessment insight</small></span></div><div className="orbit-node orbit-therapy"><span className="orbit-ic"><i className="ti ti-heart-handshake tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span><strong>Therapy team</strong><small>Goals and progress</small></span></div>
          <div className="orbit-center"><span className="orbit-kicker">One child</span><strong><span className="orbit-title-line">Shared</span><span className="orbit-title-line">developmental</span><span className="orbit-title-line">context</span></strong><small>Consent-led · longitudinal · clinician-governed</small></div>
        </div>
        </div></div>
      </section>
      
      <section className="section-pad" id="technology">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">The Cohera intelligence layer</p>
          <h2>Purpose-built technology for developmental care.</h2>
          <p className="lede">Cohera’s proprietary architecture turns information from families, professionals, and supported media workflows into structured, traceable context—without turning technology into the decision-maker.</p>
        </div>
          <div className="ip-architecture mt-6 reveal">
            <article className="ip-core">
              <span className="ip-icon"><i className="ti ti-layers-intersect tabler-ui-icon" style={{"--ti-size": "24px"}} aria-hidden="true"></i></span>
              <p className="ip-label">Cohera technology IP</p>
              <h3>A connected developmental signal layer.</h3>
              <p>Observations remain linked to who shared them, when they were captured, and the care context in which they matter.</p>
            </article>
            <div className="ip-capabilities">
              <article><span>01</span><div><h3>Workflow-ready views</h3><p>The right context is organized for the right professional and stage of care.</p></div></article>
              <article><span>02</span><div><h3>Controlled intelligence</h3><p>Defined logic, visible sources, and human review keep interpretation accountable.</p></div></article>
              <article><span>03</span><div><h3>Longitudinal understanding</h3><p>New observations build on the child’s history instead of starting another disconnected record.</p></div></article>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-pad" id="for-every-role">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Built around the people who deliver care</p>
          <h2>Clarity for every role around the child.</h2>
          
        </div>
          <div className="mt-6"><div className="grid-4" data-stagger>
          <div className="tile">
            <div className="t-ic sky"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Pediatricians</h3>
            <p>Make developmental screening more consistent without losing the pace of routine practice.</p>
          </div>
          <div className="tile">
            <div className="t-ic slate"><i className="ti ti-building-hospital tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Clinicians and specialists</h3>
            <p>Review structured, source-linked context and turn complex information into actionable insight.</p>
          </div>
          <div className="tile">
            <div className="t-ic "><i className="ti ti-heart-handshake tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Therapists and care teams</h3>
            <p>Coordinate goals, intervention delivery, and progress across disciplines.</p>
          </div>
          <div className="tile">
            <div className="t-ic sun"><i className="ti ti-heart tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Families</h3>
            <p>Understand the plan, complete requested activities, and stay connected between visits.</p>
          </div></div></div>
        </div>
      </section>
      
      <section className="section-pad" id="responsible-ai">
        <div className="band band-mist trust-band"><div className="container split">
          <div className="txt">
            <p className="eyebrow">Professional judgment, strengthened</p>
            <h2>AI assists. Professionals decide.</h2>
            <p className="lede">Cohera helps organize, summarize, and surface relevant information. It supports qualified professionals; it does not independently diagnose a child or replace clinical care.</p>
            <div className="btn-row mt-5"><a className="textlink" href="/evidence/">Evidence &amp; Safeguards <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a><a className="textlink" href="/trust/">Trust &amp; Privacy <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a></div>
          </div>
          <ul className="list-check">
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Source-linked information for review</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Clinician-controlled reports and decisions</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Role-based access and consent-led sharing</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Clear product status and intended-use boundaries</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Human oversight across the care pathway</span></li></ul>
        </div></div>
      </section>
    </Fragment>
  );
}
