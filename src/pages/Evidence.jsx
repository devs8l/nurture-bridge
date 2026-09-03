import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "Evidence — Foundations and validation status | Cohera Health",
  "description": "The clinical foundations behind Cohera, what is being validated, and how human oversight remains central.",
  "path": "/evidence/",
  "noindex": false,
  "jsonld": [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Evidence and Clinical Foundations | Cohera Health",
      "description": "The clinical foundations behind Cohera, validation status, human oversight principles, and AI governance approach for developmental care technology.",
      "url": "https://cohera.health/evidence/",
      "publisher": { "@type": "Organization", "name": "NurtureBridge Tech Pvt Ltd" },
      "about": [
        { "@type": "MedicalCondition", "name": "Developmental Delay" },
        { "@type": "Thing", "name": "Developmental Screening" },
        { "@type": "Thing", "name": "Responsible AI in Healthcare" }
      ]
    }
  ]
};

export default function Evidence() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-sub">
          <div className="sky" aria-hidden="true"></div>
          <div className="cloud" style={{width: "340px", height: "170px", left: "6%", top: "120px"}} aria-hidden="true"></div>
          <div className="cloud" style={{width: "280px", height: "150px", right: "8%", top: "210px"}} aria-hidden="true"></div>
          <div className="container">
            
            <p className="eyebrow">Evidence</p>
            <h1 className="reveal in">Clear about what is known—and what is still being tested.</h1>
            <p className="lede reveal in">Cohera separates established clinical guidance, our product methodology, active validation, and future outcome goals.</p>
            <div className="btn-row center"><a className="btn btn-dark" href="/join-network/">Collaborate on Validation</a></div>
            
          </div>
          
        </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Clinical foundation</p>
          <h2>Developmental understanding grows over time.</h2>
          <p className="lede">Family observations, professional judgment, structured screening, comprehensive evaluation, and ongoing support each contribute something different.</p>
        </div>
          <div className="mt-6"><div className="pathway-tabs journey-tabs reveal" data-pathway-tabs>
          <div className="pt-tablist" role="tablist" aria-label="Clinical foundation stages" style={{"--tab-count": "4"}}>
            <button className="pt-tab is-active" type="button" role="tab" id="evidence-foundation-tab-0" aria-controls="evidence-foundation-panel-0" aria-selected="true" tabIndex="0" data-pathway-tab>
              <span className="pt-tab-icon"><i className="ti ti-eye tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Surveillance</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
            </button><button className="pt-tab" type="button" role="tab" id="evidence-foundation-tab-1" aria-controls="evidence-foundation-panel-1" aria-selected="false" tabIndex="-1" data-pathway-tab>
              <span className="pt-tab-icon"><i className="ti ti-clipboard-text tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Screening</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
            </button><button className="pt-tab" type="button" role="tab" id="evidence-foundation-tab-2" aria-controls="evidence-foundation-panel-2" aria-selected="false" tabIndex="-1" data-pathway-tab>
              <span className="pt-tab-icon"><i className="ti ti-clipboard-check tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Evaluation</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
            </button><button className="pt-tab" type="button" role="tab" id="evidence-foundation-tab-3" aria-controls="evidence-foundation-panel-3" aria-selected="false" tabIndex="-1" data-pathway-tab>
              <span className="pt-tab-icon"><i className="ti ti-heart-handshake tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Support</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
            </button>
          </div>
          <div className="pt-panels">
            <section className="pt-panel" role="tabpanel" id="evidence-foundation-panel-0" aria-labelledby="evidence-foundation-tab-0">
              <div className="pt-main">
                <p className="pt-audience">Ongoing attention</p>
                <h3>Developmental understanding begins over time.</h3>
                <p>Family concerns, developmental history, professional observation, and changes across visits all contribute to surveillance.</p>
                
              </div>
              <div className="pt-detail">
                <div><span>Purpose</span><p>Notice patterns, strengths, concerns, and changing context.</p></div><div><span>Led by</span><p>Families and healthcare professionals together.</p></div><div className="pt-value"><span>Boundary</span><p>Surveillance is an ongoing process, not a diagnostic conclusion.</p></div>
              </div>
            </section><section className="pt-panel" role="tabpanel" id="evidence-foundation-panel-1" aria-labelledby="evidence-foundation-tab-1" hidden>
              <div className="pt-main">
                <p className="pt-audience">Structured review</p>
                <h3>Screening may indicate a need to look closer.</h3>
                <p>Standardized screening can supplement surveillance by bringing consistency to selected developmental questions.</p>
                
              </div>
              <div className="pt-detail">
                <div><span>Purpose</span><p>Identify when closer review or evaluation may be appropriate.</p></div><div><span>Led by</span><p>Qualified professionals using appropriate tools and context.</p></div><div className="pt-value"><span>Boundary</span><p>A screening result is not a diagnosis.</p></div>
              </div>
            </section><section className="pt-panel" role="tabpanel" id="evidence-foundation-panel-2" aria-labelledby="evidence-foundation-tab-2" hidden>
              <div className="pt-main">
                <p className="pt-audience">Comprehensive assessment</p>
                <h3>Diagnosis requires qualified clinical evaluation.</h3>
                <p>A comprehensive evaluation brings together approved instruments, clinical observation, history, and multidisciplinary judgment.</p>
                
              </div>
              <div className="pt-detail">
                <div><span>Purpose</span><p>Develop a fuller understanding of needs, strengths, and appropriate support.</p></div><div><span>Led by</span><p>Qualified clinicians and developmental specialists.</p></div><div className="pt-value"><span>Boundary</span><p>Software does not replace professional assessment or diagnosis.</p></div>
              </div>
            </section><section className="pt-panel" role="tabpanel" id="evidence-foundation-panel-3" aria-labelledby="evidence-foundation-tab-3" hidden>
              <div className="pt-main">
                <p className="pt-audience">Guidance and intervention</p>
                <h3>The pathway continues after the decision.</h3>
                <p>Guidance, intervention, family participation, and follow-up help translate clinical understanding into everyday support.</p>
                
              </div>
              <div className="pt-detail">
                <div><span>Purpose</span><p>Connect goals, delivery, family experience, and progress.</p></div><div><span>Led by</span><p>Families and qualified care professionals.</p></div><div className="pt-value"><span>Boundary</span><p>Plans remain individualized and professionally governed.</p></div>
              </div>
            </section>
          </div>
        </div></div>
          <div className="evidence-sources mt-6">
            <p><strong>Global context:</strong> WHO and UNICEF describe fragmented care, delayed diagnosis, and limited access among major barriers for children with developmental disabilities. <a href="https://www.who.int/news/item/15-09-2023-new-reports-highlights-neglected-health-needs-of-children-with-developmental-disabilities" rel="noopener" target="_blank">Read the report</a>.</p>
            <p><strong>Clinical guidance:</strong> The American Academy of Pediatrics describes surveillance as an ongoing process that standardized screening supplements, rather than replaces. <a href="https://www.aap.org/en/patient-care/developmental-surveillance-and-screening-patient-care/" rel="noopener" target="_blank">Read the guidance</a>.</p>
          </div>
          <p className="small center mt-3">These sources describe the field and do not imply endorsement of Cohera.</p>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Controlled by design</p>
          <h2>Different jobs are handled in different ways.</h2>
          <p className="lede">Cohera deliberately separates the organization of information from scoring, professional interpretation, and care decisions.</p>
        </div>
          <div className="control-separation mt-6 reveal">
            <article><span>01</span><h3>Prepare</h3><p>Technology helps structure relevant information and preserve provenance.</p></article>
            <article><span>02</span><h3>Apply defined logic</h3><p>Where a workflow uses scoring, it follows governed rules rather than an open-ended generated conclusion.</p></article>
            <article><span>03</span><h3>Review</h3><p>A qualified professional examines the sources, limitations, and clinical context.</p></article>
            <article><span>04</span><h3>Decide</h3><p>Diagnosis, referral, and care remain human responsibilities.</p></article>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="band band-sky journey-band"><div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">The Cohera method</p>
          <h2>One record. Multiple perspectives. Clear provenance.</h2>
          
        </div>
          <div className="mt-6"><div className="grid-4" data-stagger>
          <div className="tile">
            <div className="t-ic "><i className="ti ti-message-circle tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Capture</h3>
            <p>Collect role-appropriate observations, history, findings, and updates.</p>
          </div>
          <div className="tile">
            <div className="t-ic sky"><i className="ti ti-link tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Trace</h3>
            <p>Keep the source, informant, date, and context attached.</p>
          </div>
          <div className="tile">
            <div className="t-ic sun"><i className="ti ti-layers-intersect tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Organize</h3>
            <p>Structure information without turning an observation into a diagnosis.</p>
          </div>
          <div className="tile">
            <div className="t-ic slate"><i className="ti ti-user-check tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Review</h3>
            <p>Clinicians verify, edit, reject, and add professional context.</p>
          </div></div></div>
        </div></div>
      </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Validation status</p>
          <h2>Progress labelled plainly.</h2>
          <p className="lede">Named partners, study details, results, and approvals are published only after written confirmation.</p>
        </div>
          <div className="grid-3 mt-6" data-stagger>
            
        <div className="tile evidence-status">
          
          <div className="mt-3"><ul className="list-check">
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Documented domain and expert review</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Approved proof-of-concept testing</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Parent and clinician usability work</span></li></ul></div>
        </div>
            
        <div className="tile evidence-status">
          
          <div className="mt-3"><ul className="list-check">
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Clinical workflow validation</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Report review and usability evaluation</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Consent and data-governance review</span></li></ul></div>
        </div>
            
        <div className="tile evidence-status">
          
          <div className="mt-3"><ul className="list-check">
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Larger prospective studies</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Comparative and longitudinal evaluation</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Peer-reviewed publication</span></li></ul></div>
        </div>
          </div>
          <p className="note mt-5" style={{maxWidth: "760px", marginInline: "auto"}}>These are programme statuses, not claims of diagnostic performance or achieved health outcomes.</p>
          <div className="mt-6">
            <p className="eyebrow center">Outcomes we intend to measure</p>
            <div className="enterprise-strip reveal">
              <div><span className="es-label">Family experience</span><strong>Clarity and continuity</strong><p>Next-step understanding, referral completion, confidence, and reduced repetition.</p></div>
              <div><span className="es-label">Clinical workflow</span><strong>Prepared and reviewable</strong><p>Context completeness, preparation time, correction, referral quality, and trust.</p></div>
              <div><span className="es-label">Institutional implementation</span><strong>Safe and sustainable</strong><p>Workflow adherence, coordination, governance events, effort, and recurring use.</p></div>
              <div><span className="es-label">Claim boundary</span><strong>Evaluation priorities</strong><p>These are intended measures—not achieved outcome claims.</p></div>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="band band-mist trust-band"><div className="container split">
          <div className="txt">
            <p className="eyebrow">Responsible AI</p>
            <h2>Human oversight is part of the product, not a disclaimer.</h2>
            <p className="lede">Cohera’s intended use, limitations, source traceability, uncertainty, access, and change controls are designed to remain visible throughout the workflow.</p>
            <p className="small mt-4">Reference frameworks: <a href="https://www.nist.gov/itl/ai-risk-management-framework" rel="noopener" target="_blank">NIST AI RMF</a> · <a href="https://iris.who.int/bitstreams/ad62580f-540f-4e36-b957-e7f2946ae1fb/download" rel="noopener" target="_blank">WHO guidance on AI in health</a>.</p>
          </div>
          <ul className="list-check">
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Defined intended use and clear limitations</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Human review before clinical use</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Traceable source information</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Visible uncertainty and missing data</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Consent, role-based access, and auditability</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Performance, bias, and incident review</span></li></ul>
        </div></div>
      </section>
      
      <section className="section-pad">
        <div className="container center">
          
        <div className="sec-head center reveal">
          
          <h2>Help build the evidence with us.</h2>
          <p className="lede">We welcome clinical, academic, and institutional partners for structured validation.</p>
        </div>
          <div className="btn-row center mt-5"><a className="btn btn-dark" href="/join-network/">Become a Validation Partner</a><a className="btn btn-glass" href="/request-demo/">Discuss a Pilot</a></div>
        </div>
      </section>
    </Fragment>
  );
}
