import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "Trust & Privacy — Our approach to consent, data, and responsible AI | Cohera Health",
  "description": "How Cohera handles a child’s developmental information: consent-led collection, role-based access, safeguards for photos and videos, and clinician-governed AI.",
  "path": "/trust/",
  "noindex": false,
  "jsonld": [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What information does Cohera collect about my child?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cohera collects only the information requested as part of an approved clinical workflow. This includes family-reported observations, developmental history, and consent-approved media where applicable. Each collection is explained before you share it."
          }
        },
        {
          "@type": "Question",
          "name": "Who can see my child's information in Cohera?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Access is role-based and consent-governed. People see only what their role in the child's care requires. Parent or lawful guardian consent guides all sharing decisions."
          }
        },
        {
          "@type": "Question",
          "name": "Does Cohera diagnose children?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Cohera organizes information and supports professional conversations. Diagnosis requires qualified clinical assessment by a licensed professional."
          }
        }
      ]
    }
  ]
};

export default function Trust() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-sub">
          <div className="sky" aria-hidden="true"></div>
          <div className="cloud" style={{width: "340px", height: "170px", left: "6%", top: "120px"}} aria-hidden="true"></div>
          <div className="cloud" style={{width: "280px", height: "150px", right: "8%", top: "210px"}} aria-hidden="true"></div>
          <div className="container">
            
            <p className="eyebrow">Trust and privacy</p>
            <h1 className="reveal in">A child’s developmental information deserves exceptional care.</h1>
            <p className="lede reveal in">This page explains our approach in plain language — what we collect, why, who can see it, and the safeguards around it. Programme-specific legal privacy notices and terms accompany each product deployment.</p>
            
            
          </div>
          
        </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Our commitments</p>
          <h2>Designed around clarity and consent</h2>
          
        </div>
          <div className="mt-6">
          <div className="grid-4" data-stagger>
          <div className="tile">
            <div className="t-ic "><i className="ti ti-eye tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Clear explanations</h3>
            <p>What information is collected, why it is needed, and how it will be used — explained before you share it.</p>
          </div>
          <div className="tile">
            <div className="t-ic sky"><i className="ti ti-user-check tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Consent-led collection</h3>
            <p>Parent or lawful guardian consent guides collection and sharing, with purpose-specific permissions.</p>
          </div>
          <div className="tile">
            <div className="t-ic slate"><i className="ti ti-lock tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Role-based access</h3>
            <p>People see only what their role in the child’s care requires — nothing more.</p>
          </div>
          <div className="tile">
            <div className="t-ic "><i className="ti ti-shield-check tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Safeguards for media</h3>
            <p>Photos and videos carry additional protections, and are requested only through approved clinical workflows.</p>
          </div>
          <div className="tile">
            <div className="t-ic sun"><i className="ti ti-layers-intersect tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Separated purposes</h3>
            <p>Care use, research use, and any model-training permission are distinct choices — never bundled.</p>
          </div>
          <div className="tile">
            <div className="t-ic sky"><i className="ti ti-pencil tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Correction and withdrawal</h3>
            <p>Pathways to correct, withdraw, or delete information, subject to legal and clinical-record obligations.</p>
          </div>
          <div className="tile">
            <div className="t-ic slate"><i className="ti ti-history tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Auditable access</h3>
            <p>Secure handling with auditable access, so it is possible to know who saw what, and when.</p>
          </div>
          <div className="tile">
            <div className="t-ic "><i className="ti ti-scale tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Regulatory alignment</h3>
            <p>Our roadmap aligns with India’s DPDP Act and Rules as they come into force, and with applicable institutional requirements.</p>
          </div></div>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="container split">
          <div className="txt">
            <p className="eyebrow">Video deserves additional safeguards</p>
            <h2>A controlled observation—not a passive data stream.</h2>
            <p className="lede">When video is used in an approved Cohera workflow, it is requested for a defined developmental activity and handled as sensitive child information.</p>
          </div>
          <div><ul className="list-check">
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>A clear purpose before capture</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Parent or lawful guardian consent</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Activity and source context kept with the observation</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Professional review before clinical use</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Separate permission for any research or model-training use</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Access and retention governed by the specific deployment</span></li></ul></div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="band band-mist trust-band">
          <div className="container split">
            <div className="txt">
              <p className="eyebrow">Responsible AI</p>
              <h2>AI organizes information. It does not decide about your child.</h2>
              <p className="lede">Every AI-assisted output in Cohera is designed to remain source-linked, reviewable, editable, and subordinate to professional judgment.</p>
            </div>
            <div>
              <ul className="list-check">
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Defined intended use and limitations</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Human review before clinical use</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Traceable source information</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Visible uncertainty and missing data</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Performance and bias evaluation</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Change control and model governance</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Incident and feedback pathways</span></li></ul>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="container split">
          
          <div className="txt">
            <p className="eyebrow">Sensitive information belongs in protected workflows</p>
            <h2>Help us keep a child’s information in the right channel.</h2>
            <ul className="list-check">
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Do not submit diagnoses, clinical reports, or child videos through marketing forms</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Share clinical information only inside approved product workflows</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Use official Cohera channels for account and privacy requests</span></li></ul>
            <p className="note mt-4">Cohera is not an emergency service. For urgent medical or safety concerns, contact an appropriate healthcare professional or your local emergency service.</p>
            <div className="btn-row mt-5"><a className="btn btn-dark" href="/contact/">Contact the Team</a></div>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="container section-summary">
          <div><p className="eyebrow">Regulatory and institutional alignment</p><h2>Requirements are specific to the programme and setting.</h2></div>
          <div className="summary-body">
            <p>Cohera’s roadmap aligns with India’s DPDP Act and Rules as they come into force, alongside the requirements of each participating institution.</p>
            <p>Security standards, interoperability, retention, and clinical-record obligations are described for the exact deployment. Roadmap alignment is not presented as certification, blanket compliance, or universal integration.</p>
          </div>
        </div>
      </section>
      
      <section className="section-pad" id="terms">
        <div className="container" style={{maxWidth: "840px"}}>
          
        <div className="sec-head left reveal">
          <p className="eyebrow">Terms of use</p>
          <h2>Using this website</h2>
          
        </div>
          <div className="mt-4" style={{display: "grid", gap: "14px", fontSize: "15.5px"}}>
            <p>The content of this website is educational and informational. It describes the Cohera platform, its intended use, and its current status, and it does not constitute medical advice, a diagnosis, or a treatment recommendation.</p>
            <p>Product capabilities are described for their intended workflows. Exact functionality, availability, and programme safeguards are governed by the specific deployment and its accompanying agreements.</p>
            <p>Clinical use of Cohera products is governed by the agreements, consent flows, and privacy notices of the specific programme or deployment, which take precedence over this page for those uses.</p>
            <p>Questions about these terms, our privacy approach, or your information can be directed to the team through the <a href="/contact/">contact page</a>.</p>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
