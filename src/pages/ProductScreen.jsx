import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "Cohera Screen — Developmental surveillance for pediatric practice | Cohera Health",
  "description": "Structured family observations, guided video activities, concise developmental reports, and clinically controlled follow-up for pediatric practice.",
  "path": "/products/cohera-screen/",
  "noindex": false,
  "jsonld": [
    {
      "@context": "https://schema.org",
      "@type": "SoftwareApplication",
      "@id": "https://cohera.health/products/cohera-screen/#software",
      "name": "Cohera Screen",
      "applicationCategory": "HealthApplication",
      "operatingSystem": "Web",
      "url": "https://cohera.health/products/cohera-screen/",
      "description": "Developmental surveillance tool for pediatricians. Brings structured family observations and guided video activities into a concise developmental picture before, during, and after the well-child visit.",
      "audience": { "@type": "MedicalAudience", "audienceType": "Pediatricians" },
      "publisher": { "@type": "Organization", "name": "NurtureBridge Tech Pvt Ltd" }
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://cohera.health/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Products",
          "item": "https://cohera.health/products/"
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Cohera Screen"
        }
      ]
    }
  ]
};

export default function ProductScreen() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-sub">
        <div className="sky" aria-hidden="true"></div>
        <div className="cloud" style={{ width: "340px", height: "170px", left: "6%", top: "120px" }} aria-hidden="true"></div>
        <div className="cloud" style={{ width: "280px", height: "150px", right: "8%", top: "210px" }} aria-hidden="true"></div>
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a><i className="ti ti-chevron-right tabler-ui-icon" style={{ "--ti-size": "13px" }} aria-hidden="true"></i></li><li><a href="/products/">Products</a><i className="ti ti-chevron-right tabler-ui-icon" style={{ "--ti-size": "13px" }} aria-hidden="true"></i></li><li aria-current="page">Cohera Screen</li></ol></nav>

          <h1 className="reveal in">Developmental surveillance that fits everyday pediatric practice.</h1>
          <p className="lede reveal in">Cohera Screen brings structured family observations and guided video activities into a concise developmental picture—helping pediatricians review concerns, decide the next step, and maintain continuity after the visit.</p>
          <div className="btn-row center"><a className="btn btn-dark" href="/request-demo/">Request a Demo</a><a className="btn btn-glass" href="/join-network/">Join the Pediatrician Network</a></div>

        </div>

      </section>



      <section className="section-pad" id="why">
        <div className="container section-summary">
          <div><p className="eyebrow">Why pediatricians need better context</p><h2>The first opportunity to notice often happens in primary care.</h2></div>
          <div className="summary-body">
            <p>Short consultations, incomplete histories, and scattered records can make consistent developmental surveillance difficult.</p>
            <p>Cohera Screen organizes family priorities, milestone history, relevant observations, previous interventions, and follow-up actions into a better-prepared clinical conversation—not an automated conclusion.</p>
          </div>
        </div>
        <div className="container mt-6"><div className="enterprise-strip reveal">
          <div><span className="es-label">Before the visit</span><strong>Structured family input</strong><p>Capture concerns, strengths, history, and everyday examples.</p></div>
          <div><span className="es-label">At review</span><strong>Concise developmental picture</strong><p>See domain-level context and source-linked observations.</p></div>
          <div><span className="es-label">At decision</span><strong>Clinical judgment</strong><p>Reassure, monitor, gather more information, or refer.</p></div>
          <div><span className="es-label">Over time</span><strong>Visible continuity</strong><p>Keep follow-up and longitudinal change in view.</p></div>
        </div></div>
      </section>

      <section className="section-pad" id="workflow">
        <div className="band band-sky journey-band"><div className="container">

          <div className="sec-head center reveal">
            <p className="eyebrow">How Cohera Screen fits</p>
            <h2>Add developmental context without redesigning the consultation.</h2>
            <p className="lede">Cohera works around the visit: families prepare relevant information beforehand, pediatricians review it within their normal clinical process, and the agreed next step remains visible afterward.</p>
          </div>
          <div className="mt-6"><div className="pathway-tabs journey-tabs reveal" data-pathway-tabs>
            <div className="pt-tablist" role="tablist" aria-label="Cohera Screen workflow" style={{ "--tab-count": "5" }}>
              <button className="pt-tab is-active" type="button" role="tab" id="screen-workflow-tab-0" aria-controls="screen-workflow-panel-0" aria-selected="true" tabIndex="0" data-pathway-tab>
                <span className="pt-tab-icon"><i className="ti ti-send-2 tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Invite</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></span>
              </button><button className="pt-tab" type="button" role="tab" id="screen-workflow-tab-1" aria-controls="screen-workflow-panel-1" aria-selected="false" tabIndex="-1" data-pathway-tab>
                <span className="pt-tab-icon"><i className="ti ti-layers-intersect tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Prepare</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></span>
              </button><button className="pt-tab" type="button" role="tab" id="screen-workflow-tab-2" aria-controls="screen-workflow-panel-2" aria-selected="false" tabIndex="-1" data-pathway-tab>
                <span className="pt-tab-icon"><i className="ti ti-stethoscope tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Review</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></span>
              </button><button className="pt-tab" type="button" role="tab" id="screen-workflow-tab-3" aria-controls="screen-workflow-panel-3" aria-selected="false" tabIndex="-1" data-pathway-tab>
                <span className="pt-tab-icon"><i className="ti ti-route tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Act</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></span>
              </button><button className="pt-tab" type="button" role="tab" id="screen-workflow-tab-4" aria-controls="screen-workflow-panel-4" aria-selected="false" tabIndex="-1" data-pathway-tab>
                <span className="pt-tab-icon"><i className="ti ti-refresh tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Follow</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></span>
              </button>
            </div>
            <div className="pt-panels">
              <section className="pt-panel" role="tabpanel" id="screen-workflow-panel-0" aria-labelledby="screen-workflow-tab-0">
                <div className="pt-main">
                  <p className="pt-audience">Before the visit</p>
                  <h3>Request the right context before the conversation.</h3>
                  <p>The clinic connects the child’s profile and invites the family to complete the relevant history, observations, or guided activity.</p>

                </div>
                <div className="pt-detail">
                  <div><span>Existing workflow</span><p>The appointment and clinical responsibility remain unchanged.</p></div><div><span>Cohera contributes</span><p>Structured family input arrives through an approved pathway.</p></div><div className="pt-value"><span>Practical value</span><p>Less consultation time is spent reconstructing history.</p></div>
                </div>
              </section><section className="pt-panel" role="tabpanel" id="screen-workflow-panel-1" aria-labelledby="screen-workflow-tab-1" hidden>
                <div className="pt-main">
                  <p className="pt-audience">Clinical preparation</p>
                  <h3>See a concise developmental picture.</h3>
                  <p>Relevant context is organized by domain while the source, informant, and capture context remain visible.</p>

                </div>
                <div className="pt-detail">
                  <div><span>Existing workflow</span><p>The pediatrician prepares for the consultation as appropriate.</p></div><div><span>Cohera contributes</span><p>A reviewable view of concerns, strengths, and available context.</p></div><div className="pt-value"><span>Practical value</span><p>Important information is easier to find before review begins.</p></div>
                </div>
              </section><section className="pt-panel" role="tabpanel" id="screen-workflow-panel-2" aria-labelledby="screen-workflow-tab-2" hidden>
                <div className="pt-main">
                  <p className="pt-audience">During the visit</p>
                  <h3>Professional judgment remains the centre of the visit.</h3>
                  <p>The pediatrician reviews the sources, examines the child, adds findings, and determines what the information means clinically.</p>

                </div>
                <div className="pt-detail">
                  <div><span>Existing workflow</span><p>Examination, judgment, and the authoritative note remain clinical.</p></div><div><span>Cohera contributes</span><p>Source-linked observations and visible information gaps.</p></div><div className="pt-value"><span>Practical value</span><p>More attention can stay on the child and the decision.</p></div>
                </div>
              </section><section className="pt-panel" role="tabpanel" id="screen-workflow-panel-3" aria-labelledby="screen-workflow-tab-3" hidden>
                <div className="pt-main">
                  <p className="pt-audience">The next step</p>
                  <h3>Document the agreed path forward.</h3>
                  <p>The clinician may reassure, monitor, request more information, refer, or recommend another appropriate action.</p>

                </div>
                <div className="pt-detail">
                  <div><span>Existing workflow</span><p>The clinician owns the referral and follow-up decision.</p></div><div><span>Cohera contributes</span><p>A clear record of the plan, responsibility, and next review.</p></div><div className="pt-value"><span>Practical value</span><p>Fewer fragmented handoffs after the consultation.</p></div>
                </div>
              </section><section className="pt-panel" role="tabpanel" id="screen-workflow-panel-4" aria-labelledby="screen-workflow-tab-4" hidden>
                <div className="pt-main">
                  <p className="pt-audience">Over time</p>
                  <h3>Let each review build on the last.</h3>
                  <p>New family observations and clinical updates connect to the same developmental history as follow-up continues.</p>

                </div>
                <div className="pt-detail">
                  <div><span>Existing workflow</span><p>The care team reviews change at appropriate intervals.</p></div><div><span>Cohera contributes</span><p>Longitudinal context with sources and next steps attached.</p></div><div className="pt-value"><span>Practical value</span><p>The child does not start over at the next visit.</p></div>
                </div>
              </section>
            </div>
          </div></div>
        </div></div>
      </section>

      <section className="section-pad" id="video-intelligence">
        <div className="container split tech-video-split">
          <div className="txt">
            <p className="eyebrow">Guided video observations</p>
            <h2>More context from a short, purposeful activity.</h2>
            <p className="lede">Cohera Screen is designed to guide families through age-appropriate video activities and organize relevant observations for pediatric review. The video remains one source within a broader developmental picture—not a diagnosis.</p>
            <div className="mt-4"><ul className="list-check">
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Clear activity guidance for the family</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Capture context retained with the observation</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Structured signals prepared for professional review</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Clinician interpretation before any care decision</span></li></ul></div>
          </div>
          <div className="video-pipeline reveal" aria-label="Guided video observation workflow">
            <article><span className="vp-icon"><i className="ti ti-activity tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></span><div><small>01 · Capture</small><h3>Guided activity</h3><p>A family completes a defined, age-appropriate task.</p></div></article>
            <span className="vp-connector" aria-hidden="true"></span>
            <article><span className="vp-icon"><i className="ti ti-layers-intersect tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></span><div><small>02 · Organize</small><h3>Reviewable signals</h3><p>Relevant observations are structured with their source and context intact.</p></div></article>
            <span className="vp-connector" aria-hidden="true"></span>
            <article><span className="vp-icon"><i className="ti ti-user-check tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></span><div><small>03 · Decide</small><h3>Pediatric review</h3><p>The clinician reviews the evidence and determines what happens next.</p></div></article>
          </div>
        </div>
      </section>

      <section className="section-pad" id="report">
        <div className="container split">
          <div className="reveal"><div className="shot"><img src="/assets/imagery/report-screenshot.png" alt="Cohera Screen report designed for rapid pediatric review" loading="lazy" /></div></div>
          <div className="txt">
            <p className="eyebrow">What the pediatrician sees</p>
            <h2>A concise report designed for rapid review.</h2>
            <div className="mt-4"><ul className="list-check">
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Child and family context with primary concerns</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Developmental overview across selected domains</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Strengths and items requiring closer review</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Source-linked family inputs</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Video-based observations with activity context where used</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Previous flags, referral history, and follow-up status</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Longitudinal change where sufficient information exists</span></li></ul></div>
            <p className="note mt-4">Review the source, add your findings, and keep the final decision clinical.</p>
          </div>
        </div>
      </section>

      <section className="section-pad" id="control">
        <div className="band band-control trust-band"><div className="container split">
          <div className="txt">
            <p className="eyebrow">Built around clinical control</p>
            <h2>A flag is a review prompt—never a diagnosis.</h2>
            <p className="lede">Cohera Screen supports surveillance. It does not replace a validated screening tool, comprehensive assessment, or professional diagnosis.</p>
            <div className="btn-row mt-5"><a className="textlink" href="/evidence/">See Our Clinical Approach <i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></a></div>
          </div>
          <ul className="list-check">
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Review every family-reported observation</span></li>
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Edit or correct the record</span></li>
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Add clinical findings</span></li>
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Confirm or dismiss a flag</span></li>
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Record referral and follow-up plans</span></li>
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>See when information is incomplete</span></li>
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Maintain the authoritative clinical note</span></li></ul>
        </div>
          <div className="container mt-6">
            <div className="trust-diagram reveal" role="img" aria-label="A family observation becomes an AI-assisted summary, which the clinician reviews, edits, or overrides before any decision.">
              <div className="td-card">
                <h4><i className="ti ti-message-circle tabler-ui-icon" style={{ "--ti-size": "16px" }} aria-hidden="true"></i> Source observation</h4>
                <p className="td-line">“He lines up his toys for a long time and gets upset when the order changes.”</p>
                <span className="td-tag"><i className="ti ti-user tabler-ui-icon" style={{ "--ti-size": "13px" }} aria-hidden="true"></i> Parent · recorded at home</span>
              </div>
              <div className="td-arrow" aria-hidden="true"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <div className="td-card">
                <h4><i className="ti ti-sparkles tabler-ui-icon" style={{ "--ti-size": "16px" }} aria-hidden="true"></i> AI-assisted summary</h4>
                <p className="td-line">Repetitive play patterns reported across settings. Grouped under Play &amp; Interaction for review.</p>
                <span className="td-tag"><i className="ti ti-link tabler-ui-icon" style={{ "--ti-size": "13px" }} aria-hidden="true"></i> Linked to its source</span>
              </div>
              <div className="td-arrow" aria-hidden="true"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <div className="td-card">
                <h4><i className="ti ti-stethoscope tabler-ui-icon" style={{ "--ti-size": "16px" }} aria-hidden="true"></i> Clinician review</h4>
                <p className="td-line">The pediatrician confirms, edits, or rejects the summary and records the clinical finding.</p>
                <span className="td-tag"><i className="ti ti-shield-check tabler-ui-icon" style={{ "--ti-size": "13px" }} aria-hidden="true"></i> Decision stays clinical</span>
              </div>
            </div></div>
        </div>
      </section>

      <section className="section-pad" id="implementation">
        <div className="container">

          <div className="sec-head center reveal">
            <p className="eyebrow">Bring Screen to your practice</p>
            <h2>Implementation that respects the consultation.</h2>
            <p className="lede">Onboarding aligns Cohera with existing clinical and front-desk workflows before any expansion.</p>
          </div>
          <div className="mt-6"><div className="implementation-tabs reveal" data-pathway-tabs>
            <div className="impl-tablist" role="tablist" aria-label="Cohera Screen implementation stages">
              <button className="impl-tab is-active" type="button" role="tab" id="screen-implementation-tab-0" aria-controls="screen-implementation-panel-0" aria-selected="true" tabIndex="0" data-pathway-tab>
                <span className="impl-tab-icon"><i className="ti ti-search tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span>
                <span className="impl-tab-copy"><small>Stage 01</small><strong>Discover</strong><span>Understand the current workflow</span></span>
                <span className="impl-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "16px" }} aria-hidden="true"></i></span>
              </button><button className="impl-tab" type="button" role="tab" id="screen-implementation-tab-1" aria-controls="screen-implementation-panel-1" aria-selected="false" tabIndex="-1" data-pathway-tab>
                <span className="impl-tab-icon"><i className="ti ti-clipboard-text tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span>
                <span className="impl-tab-copy"><small>Stage 02</small><strong>Configure</strong><span>Align domains and follow-up</span></span>
                <span className="impl-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "16px" }} aria-hidden="true"></i></span>
              </button><button className="impl-tab" type="button" role="tab" id="screen-implementation-tab-2" aria-controls="screen-implementation-panel-2" aria-selected="false" tabIndex="-1" data-pathway-tab>
                <span className="impl-tab-icon"><i className="ti ti-users tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span>
                <span className="impl-tab-copy"><small>Stage 03</small><strong>Onboard</strong><span>Prepare clinical and front-desk teams</span></span>
                <span className="impl-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "16px" }} aria-hidden="true"></i></span>
              </button><button className="impl-tab" type="button" role="tab" id="screen-implementation-tab-3" aria-controls="screen-implementation-panel-3" aria-selected="false" tabIndex="-1" data-pathway-tab>
                <span className="impl-tab-icon"><i className="ti ti-shield-check tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span>
                <span className="impl-tab-copy"><small>Stage 04</small><strong>Pilot</strong><span>Begin with a controlled scope</span></span>
                <span className="impl-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "16px" }} aria-hidden="true"></i></span>
              </button><button className="impl-tab" type="button" role="tab" id="screen-implementation-tab-4" aria-controls="screen-implementation-panel-4" aria-selected="false" tabIndex="-1" data-pathway-tab>
                <span className="impl-tab-icon"><i className="ti ti-chart-line tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span>
                <span className="impl-tab-copy"><small>Stage 05</small><strong>Review</strong><span>Measure use and experience</span></span>
                <span className="impl-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "16px" }} aria-hidden="true"></i></span>
              </button><button className="impl-tab" type="button" role="tab" id="screen-implementation-tab-5" aria-controls="screen-implementation-panel-5" aria-selected="false" tabIndex="-1" data-pathway-tab>
                <span className="impl-tab-icon"><i className="ti ti-sparkles tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span>
                <span className="impl-tab-copy"><small>Stage 06</small><strong>Expand</strong><span>Grow only when evidence supports it</span></span>
                <span className="impl-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "16px" }} aria-hidden="true"></i></span>
              </button>
            </div>
            <div className="impl-panels">
              <section className="impl-panel" role="tabpanel" id="screen-implementation-panel-0" aria-labelledby="screen-implementation-tab-0">
                <div className="impl-panel-head">
                  <div><p className="pt-audience">Stage 01 · Workflow discovery</p><h3>Start with how the practice already works.</h3><p>We map the consultation, front-desk handoffs, and follow-up process before proposing any change.</p></div>
                  <span className="impl-hero-icon"><i className="ti ti-search tabler-ui-icon" style={{ "--ti-size": "27px" }} aria-hidden="true"></i></span>
                </div>
                <div className="impl-board" aria-label="Discover implementation overview">
                  <div className="impl-progress" aria-hidden="true">
                    <span className="is-current"><i>1</i></span><span className=""><i>2</i></span><span className=""><i>3</i></span><span className=""><i>4</i></span><span className=""><i>5</i></span><span className=""><i>6</i></span>
                  </div>
                  <div className="impl-detail-grid">
                    <article><span><i className="ti ti-route tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Focus</small><strong>Current patient journey</strong></article><article><span><i className="ti ti-users tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Involved</small><strong>Clinical and front-desk leads</strong></article><article className="is-outcome"><span><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Ready when</small><strong>Workflow and friction points are agreed</strong></article>
                  </div>
                </div>
              </section><section className="impl-panel" role="tabpanel" id="screen-implementation-panel-1" aria-labelledby="screen-implementation-tab-1" hidden>
                <div className="impl-panel-head">
                  <div><p className="pt-audience">Stage 02 · Practice configuration</p><h3>Shape Screen around the agreed pathway.</h3><p>Domains, invitations, review responsibilities, and follow-up actions are configured to match the practice.</p></div>
                  <span className="impl-hero-icon"><i className="ti ti-clipboard-text tabler-ui-icon" style={{ "--ti-size": "27px" }} aria-hidden="true"></i></span>
                </div>
                <div className="impl-board" aria-label="Configure implementation overview">
                  <div className="impl-progress" aria-hidden="true">
                    <span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-current"><i>2</i></span><span className=""><i>3</i></span><span className=""><i>4</i></span><span className=""><i>5</i></span><span className=""><i>6</i></span>
                  </div>
                  <div className="impl-detail-grid">
                    <article><span><i className="ti ti-layers-intersect tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Focus</small><strong>Screening and review settings</strong></article><article><span><i className="ti ti-stethoscope tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Involved</small><strong>Clinical implementation lead</strong></article><article className="is-outcome"><span><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Ready when</small><strong>The configured pathway passes review</strong></article>
                  </div>
                </div>
              </section><section className="impl-panel" role="tabpanel" id="screen-implementation-panel-2" aria-labelledby="screen-implementation-tab-2" hidden>
                <div className="impl-panel-head">
                  <div><p className="pt-audience">Stage 03 · Team readiness</p><h3>Give each team member a clear role.</h3><p>Short, role-specific onboarding prepares staff to invite families, review context, and maintain follow-up.</p></div>
                  <span className="impl-hero-icon"><i className="ti ti-users tabler-ui-icon" style={{ "--ti-size": "27px" }} aria-hidden="true"></i></span>
                </div>
                <div className="impl-board" aria-label="Onboard implementation overview">
                  <div className="impl-progress" aria-hidden="true">
                    <span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-current"><i>3</i></span><span className=""><i>4</i></span><span className=""><i>5</i></span><span className=""><i>6</i></span>
                  </div>
                  <div className="impl-detail-grid">
                    <article><span><i className="ti ti-user-check tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Focus</small><strong>Role-based practice sessions</strong></article><article><span><i className="ti ti-users tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Involved</small><strong>Clinicians and front-desk team</strong></article><article className="is-outcome"><span><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Ready when</small><strong>Each role can complete its workflow</strong></article>
                  </div>
                </div>
              </section><section className="impl-panel" role="tabpanel" id="screen-implementation-panel-3" aria-labelledby="screen-implementation-tab-3" hidden>
                <div className="impl-panel-head">
                  <div><p className="pt-audience">Stage 04 · Controlled launch</p><h3>Learn safely with a defined pilot.</h3><p>The practice starts with an agreed patient group, named owners, and visible support during early use.</p></div>
                  <span className="impl-hero-icon"><i className="ti ti-shield-check tabler-ui-icon" style={{ "--ti-size": "27px" }} aria-hidden="true"></i></span>
                </div>
                <div className="impl-board" aria-label="Pilot implementation overview">
                  <div className="impl-progress" aria-hidden="true">
                    <span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-current"><i>4</i></span><span className=""><i>5</i></span><span className=""><i>6</i></span>
                  </div>
                  <div className="impl-detail-grid">
                    <article><span><i className="ti ti-shield-check tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Focus</small><strong>Limited cohort and clear guardrails</strong></article><article><span><i className="ti ti-heart-handshake tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Involved</small><strong>Pilot team and Cohera support</strong></article><article className="is-outcome"><span><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Ready when</small><strong>Early cases complete end to end</strong></article>
                  </div>
                </div>
              </section><section className="impl-panel" role="tabpanel" id="screen-implementation-panel-4" aria-labelledby="screen-implementation-tab-4" hidden>
                <div className="impl-panel-head">
                  <div><p className="pt-audience">Stage 05 · Evidence review</p><h3>Review what happened—not just adoption.</h3><p>Use, team experience, workflow fit, and follow-up quality are reviewed together before the scope changes.</p></div>
                  <span className="impl-hero-icon"><i className="ti ti-chart-line tabler-ui-icon" style={{ "--ti-size": "27px" }} aria-hidden="true"></i></span>
                </div>
                <div className="impl-board" aria-label="Review implementation overview">
                  <div className="impl-progress" aria-hidden="true">
                    <span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-current"><i>5</i></span><span className=""><i>6</i></span>
                  </div>
                  <div className="impl-detail-grid">
                    <article><span><i className="ti ti-chart-line tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Focus</small><strong>Use, experience, and outcomes</strong></article><article><span><i className="ti ti-users tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Involved</small><strong>Practice leads and Cohera team</strong></article><article className="is-outcome"><span><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Ready when</small><strong>Next actions are evidence-based</strong></article>
                  </div>
                </div>
              </section><section className="impl-panel" role="tabpanel" id="screen-implementation-panel-5" aria-labelledby="screen-implementation-tab-5" hidden>
                <div className="impl-panel-head">
                  <div><p className="pt-audience">Stage 06 · Measured expansion</p><h3>Scale the parts that have earned confidence.</h3><p>Expansion follows demonstrated value, with the workflow and support model adjusted for the broader scope.</p></div>
                  <span className="impl-hero-icon"><i className="ti ti-sparkles tabler-ui-icon" style={{ "--ti-size": "27px" }} aria-hidden="true"></i></span>
                </div>
                <div className="impl-board" aria-label="Expand implementation overview">
                  <div className="impl-progress" aria-hidden="true">
                    <span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-done"><i><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "9px" }} aria-hidden="true"></i></i></span><span className="is-current"><i>6</i></span>
                  </div>
                  <div className="impl-detail-grid">
                    <article><span><i className="ti ti-sparkles tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Focus</small><strong>Sustainable practice-wide use</strong></article><article><span><i className="ti ti-route tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Involved</small><strong>Wider clinical network</strong></article><article className="is-outcome"><span><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "17px" }} aria-hidden="true"></i></span><small>Ready when</small><strong>Evidence supports responsible growth</strong></article>
                  </div>
                </div>
              </section>
            </div>
          </div></div>
          {/*<div className="btn-row center mt-6"><a className="btn btn-dark" href="/request-demo/">Request a Demo</a></div>*/}
        </div>
      </section>
    </Fragment>
  );
}
