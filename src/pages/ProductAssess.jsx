import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "Cohera Assess — Assessment support for hospitals and specialists | Cohera Health",
  "description": "A clinician-governed workflow for structured developmental history, multidisciplinary context, assessment preparation, reporting, and follow-up.",
  "path": "/products/cohera-assess/",
  "noindex": false,
  "jsonld": [
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
          "name": "Cohera Assess"
        }
      ]
    }
  ]
};

export default function ProductAssess() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-sub hero-sub--dense-copy">
          <div className="sky" aria-hidden="true"></div>
          <div className="cloud" style={{width: "340px", height: "170px", left: "6%", top: "120px"}} aria-hidden="true"></div>
          <div className="cloud" style={{width: "280px", height: "150px", right: "8%", top: "210px"}} aria-hidden="true"></div>
          <div className="container">
            <nav className="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a><i className="ti ti-chevron-right tabler-ui-icon" style={{"--ti-size": "13px"}} aria-hidden="true"></i></li><li><a href="/products/">Products</a><i className="ti ti-chevron-right tabler-ui-icon" style={{"--ti-size": "13px"}} aria-hidden="true"></i></li><li aria-current="page">Cohera Assess</li></ol></nav>
            
            <h1 className="reveal in">Build a more complete developmental picture before the clinical decision.</h1>
            <p className="lede reveal in">Cohera Assess helps hospitals and developmental-care teams organize history, family observations, multidisciplinary inputs, and supporting records before assessment—so clinicians can focus on interpretation rather than information assembly.</p>
            <div className="btn-row center"><a className="btn btn-dark" href="/request-demo/">Discuss a Pilot</a><a className="btn btn-glass" href="/join-network/">Join as a Validation Partner</a></div>
            
          </div>
          
        </section>
      
      
      
      <section className="section-pad" id="gap">
        <div className="container section-summary">
          <div><p className="eyebrow">The institutional assessment gap</p><h2>Comprehensive evaluation depends on complete information.</h2></div>
          <div className="summary-body">
            <p>Skilled clinical interpretation deserves a stronger information layer.</p>
            <p>Teams often begin with inconsistent history collection, limited referral context, reports spread across providers, and little longitudinal visibility before or after assessment.</p>
          </div>
        </div>
        <div className="container mt-6"><div className="enterprise-strip reveal">
          <div><span className="es-label">History</span><strong>Collect consistently</strong><p>Guide families through relevant context before review.</p></div>
          <div><span className="es-label">Case view</span><strong>Organize traceably</strong><p>Retain the source and informant behind every summary.</p></div>
          <div><span className="es-label">Assessment</span><strong>Keep clinicians in control</strong><p>Apply approved tools, observation, and professional judgment.</p></div>
          <div><span className="es-label">Continuity</span><strong>Carry the plan forward</strong><p>Connect reports, goals, referrals, and follow-up.</p></div>
        </div></div>
      </section>
      
      <section className="section-pad" id="workflow">
        <div className="band band-mist journey-band"><div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">A clinician-governed workflow</p>
          <h2>A more prepared assessment—not a replacement process.</h2>
          <p className="lede">Cohera sits around approved assessment practice. It prepares the case, supports consistent documentation, and carries the clinician-owned outcome into follow-up.</p>
        </div>
          <div className="mt-6"><div className="pathway-tabs journey-tabs reveal" data-pathway-tabs>
          <div className="pt-tablist" role="tablist" aria-label="Cohera Assess workflow" style={{"--tab-count": "3"}}>
            <button className="pt-tab is-active" type="button" role="tab" id="assess-workflow-tab-0" aria-controls="assess-workflow-panel-0" aria-selected="true" tabIndex="0" data-pathway-tab>
              <span className="pt-tab-icon"><i className="ti ti-layers-intersect tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Prepare</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
            </button><button className="pt-tab" type="button" role="tab" id="assess-workflow-tab-1" aria-controls="assess-workflow-panel-1" aria-selected="false" tabIndex="-1" data-pathway-tab>
              <span className="pt-tab-icon"><i className="ti ti-clipboard-check tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Assess</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
            </button><button className="pt-tab" type="button" role="tab" id="assess-workflow-tab-2" aria-controls="assess-workflow-panel-2" aria-selected="false" tabIndex="-1" data-pathway-tab>
              <span className="pt-tab-icon"><i className="ti ti-file-description tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Continue</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
            </button>
          </div>
          <div className="pt-panels">
            <section className="pt-panel" role="tabpanel" id="assess-workflow-panel-0" aria-labelledby="assess-workflow-tab-0">
              <div className="pt-main">
                <p className="pt-audience">Before assessment</p>
                <h3>Assemble the case once.</h3>
                <p>Referral context, family history, prior reports, and multidisciplinary observations are brought together before clinical review.</p>
                
              </div>
              <div className="pt-detail">
                <div><span>Existing workflow</span><p>Referral, scheduling, and assessment responsibilities remain with the institution.</p></div><div><span>Cohera contributes</span><p>Structured, source-linked case preparation and visible information gaps.</p></div><div className="pt-value"><span>Practical value</span><p>Less document chasing and repeated intake.</p></div>
              </div>
            </section><section className="pt-panel" role="tabpanel" id="assess-workflow-panel-1" aria-labelledby="assess-workflow-tab-1" hidden>
              <div className="pt-main">
                <p className="pt-audience">During assessment</p>
                <h3>Keep approved practice intact.</h3>
                <p>Qualified professionals inspect the sources, use their approved instruments, add observations, and apply clinical judgment.</p>
                
              </div>
              <div className="pt-detail">
                <div><span>Existing workflow</span><p>The clinical method, interpretation, and diagnosis stay professional.</p></div><div><span>Cohera contributes</span><p>A traceable workspace for review and clinician-owned documentation.</p></div><div className="pt-value"><span>Practical value</span><p>A clearer case view without automating diagnosis.</p></div>
              </div>
            </section><section className="pt-panel" role="tabpanel" id="assess-workflow-panel-2" aria-labelledby="assess-workflow-tab-2" hidden>
              <div className="pt-main">
                <p className="pt-audience">After assessment</p>
                <h3>Move the conclusion into action.</h3>
                <p>The clinician-owned report, goals, recommendations, referrals, and follow-up remain connected to the wider pathway.</p>
                
              </div>
              <div className="pt-detail">
                <div><span>Existing workflow</span><p>The treating team determines recommendations and communicates the outcome.</p></div><div><span>Cohera contributes</span><p>Consistent documentation and continuity into the next responsible service.</p></div><div className="pt-value"><span>Practical value</span><p>Cleaner handoffs with less context loss.</p></div>
              </div>
            </section>
          </div>
        </div></div>
        </div></div>
      </section>
      
      <section className="section-pad" id="team">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Designed for multidisciplinary care</p>
          <h2>Every role sees what it needs—and contributes what it knows.</h2>
          
        </div>
          <div className="mt-6"><div className="grid-4" data-stagger>
          <div className="tile">
            <div className="t-ic sky"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Developmental specialists</h3>
            <p>Receive better-prepared history and family context before evaluation.</p>
          </div>
          <div className="tile">
            <div className="t-ic "><i className="ti ti-heart-handshake tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Therapists</h3>
            <p>Contribute relevant observations, intervention history, goals, and progress.</p>
          </div>
          <div className="tile">
            <div className="t-ic sun"><i className="ti ti-route tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Care coordinators</h3>
            <p>Track documentation, referrals, next steps, and follow-up across the pathway.</p>
          </div>
          <div className="tile">
            <div className="t-ic slate"><i className="ti ti-building-hospital tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Hospital leadership</h3>
            <p>Establish consistent workflows with clinical governance and access control.</p>
          </div></div></div>
        </div>
      </section>
      
      <section className="section-pad" id="boundaries">
        <div className="band band-navy trust-band"><div className="container split">
          <div className="txt">
            <p className="eyebrow">Responsible assessment support</p>
            <h2>Strengthen preparation. Never automate diagnosis.</h2>
            <p className="lede">Cohera Assess is introduced through controlled clinical and institutional pathways. Every AI-assisted output remains source-linked, reviewable, editable, and subordinate to the treating clinician’s documentation.</p>
            <div className="btn-row mt-5"><a className="textlink" href="/evidence/">Explore the Evidence <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a></div>
          </div>
          <ul className="list-check list-x">
          <li><span className="ck"><i className="ti ti-x tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Does not diagnose independently</span></li>
          <li><span className="ck"><i className="ti ti-x tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Does not replace standardized assessment instruments</span></li>
          <li><span className="ck"><i className="ti ti-x tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Does not generate treatment plans without oversight</span></li>
          <li><span className="ck"><i className="ti ti-x tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Does not make referral decisions autonomously</span></li>
          <li><span className="ck"><i className="ti ti-x tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Does not present uncertainty as established fact</span></li></ul>
        </div></div>
      </section>
      
      <section className="section-pad" id="validation">
        <div className="container split">
          <div className="txt">
            <p className="eyebrow">Validation and implementation</p>
            <h2>Help define the evidence, not just consume it.</h2>
            <p className="lede">Cohera is seeking hospitals, developmental clinics, academic institutions, and multidisciplinary centres for structured validation and pilot collaboration.</p>
            <div className="btn-row mt-5"><a className="btn btn-dark" href="/join-network/">Become a Validation Partner</a><a className="btn btn-glass" href="/request-demo/">Discuss an Institutional Pilot</a></div>
          </div>
          <div>
            <p className="eyebrow eyebrow-slate">A pilot may evaluate</p>
            <ul className="list-check">
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Completeness and consistency of history collection</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Clinical preparation time and usability</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Source traceability and professional review</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Referral and follow-up continuity</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Family and clinician experience</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Safety, privacy, and governance controls</span></li></ul>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
