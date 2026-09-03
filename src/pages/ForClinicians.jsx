import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "For Clinicians — Connected developmental care | Cohera Health",
  "description": "Better-prepared consultations and continuity across developmental care.",
  "path": "/for-clinicians/",
  "noindex": false,
  "jsonld": [
    {
      "@context": "https://schema.org",
      "@type": "SpecialAnnouncement",
      "name": "Cohera Health for Clinicians",
      "text": "Cohera connects pediatricians, developmental specialists, and therapists with structured family observations, developmental history, and role-appropriate information before, during, and after the consultation.",
      "url": "https://cohera.health/for-clinicians/"
    }
  ]
};

export default function ForClinicians() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-sub hero-sub--clinicians">
        <div className="sky" aria-hidden="true"></div>
        <div className="cloud" style={{ width: "340px", height: "170px", left: "6%", top: "120px" }} aria-hidden="true"></div>
        <div className="cloud" style={{ width: "280px", height: "150px", right: "8%", top: "210px" }} aria-hidden="true"></div>
        <div className="container">

          <p className="eyebrow">For clinicians</p>
          <h1 className="reveal in">Connecting every developmental insight. Supporting every clinical decision.</h1>
          <p className="lede reveal in">Cohera brings structured family observations, developmental history, clinician insights, and multidisciplinary information into a connected clinical view—before, during, and after the consultation.</p>
          <div className="btn-row center"><a className="btn btn-dark" href="/request-demo/">Request a Demo</a><a className="btn btn-glass" href="/join-network/">Join the Network</a></div>

        </div>

      </section>



      <section className="section-pad" id="realities">
        <div className="container">

          <div className="sec-head center reveal">
            <p className="eyebrow">The realities of developmental care</p>
            <h2>Every consultation is an opportunity—but it often begins with incomplete information.</h2>
            <p className="lede">Relevant context often sits across family recollection, referral notes, therapy updates, and separate records. Cohera makes that information easier to review and carry forward.</p>
          </div>
          <div className="mt-6"><div className="grid-4" data-stagger>
            <div className="tile">
              <div className="t-ic "><i className="ti ti-clock tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Prepare earlier</h3>
              <p>Collect structured family input before or between visits.</p>
            </div>
            <div className="tile">
              <div className="t-ic sky"><i className="ti ti-eye tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Review clearly</h3>
              <p>See a concise, source-linked developmental picture.</p>
            </div>
            <div className="tile">
              <div className="t-ic sun"><i className="ti ti-route tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Refer with context</h3>
              <p>Send the relevant history and plan forward.</p>
            </div>
            <div className="tile">
              <div className="t-ic slate"><i className="ti ti-refresh tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Follow over time</h3>
              <p>Keep new observations and progress connected.</p>
            </div></div></div>
        </div>
      </section>

      <section className="section-pad" id="consultation">
        <div className="band band-sky journey-band"><div className="container">

          <div className="sec-head center reveal">
            <p className="eyebrow">Across the consultation</p>
            <h2>A better-prepared visit. A clearer path forward.</h2>
            <p className="lede">Cohera works around the consultation rather than replacing it—preparing relevant context beforehand, supporting review during the visit, and carrying the agreed next step forward afterward.</p>
          </div>
          <div className="consultation-timeline mt-6" data-stagger>
            <div className="ct-rail" aria-hidden="true"><span className="ct-rail-fill"></span><i></i><i></i><i></i></div>
            <article className="ct-card">
              <div className="ct-top"><span className="ct-icon"><i className="ti ti-message-circle tabler-ui-icon" style={{ "--ti-size": "21px" }} aria-hidden="true"></i></span><span className="ct-num">01</span></div>
              <p className="ct-stage">Before the visit</p>
              <h3>Context arrives prepared.</h3>
              <p>Families share priorities, history, strengths, and everyday observations before the conversation begins.</p>
              <span className="ct-out">Less time rebuilding history</span>
            </article>
            <article className="ct-card ct-card-focus">
              <div className="ct-top"><span className="ct-icon"><i className="ti ti-stethoscope tabler-ui-icon" style={{ "--ti-size": "21px" }} aria-hidden="true"></i></span><span className="ct-num">02</span></div>
              <p className="ct-stage">During the visit</p>
              <h3>Professional judgment leads.</h3>
              <p>The clinician reviews the sources, examines the child, adds findings, and determines the appropriate next step.</p>
              <span className="ct-out">More focus on review and decision</span>
            </article>
            <article className="ct-card">
              <div className="ct-top"><span className="ct-icon"><i className="ti ti-refresh tabler-ui-icon" style={{ "--ti-size": "21px" }} aria-hidden="true"></i></span><span className="ct-num">03</span></div>
              <p className="ct-stage">After the visit</p>
              <h3>The plan keeps moving.</h3>
              <p>Guidance, referrals, responsibilities, and follow-up remain visible to the right people over time.</p>
              <span className="ct-out">Fewer fragmented handoffs</span>
            </article>
          </div>
        </div></div>
      </section>

      <section className="section-pad" id="roles">
        <div className="container">

          <div className="sec-head center reveal">
            <p className="eyebrow">Built for every member of the care team</p>
            <h2>Different expertise. One shared understanding.</h2>

          </div>
          <div className="mt-6"><div className="grid-4" data-stagger>
            <div className="tile">
              <div className="t-ic sky"><i className="ti ti-stethoscope tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Pediatricians</h3>
              <p>Structured surveillance, family history, reviewable flags, referral support, and longitudinal follow-up.</p>
            </div>
            <div className="tile">
              <div className="t-ic "><i className="ti ti-clipboard-check tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Developmental specialists</h3>
              <p>Better-prepared referrals with history, family observations, previous interventions, and multidisciplinary context.</p>
            </div>
            <div className="tile">
              <div className="t-ic sun"><i className="ti ti-heart-handshake tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Therapists</h3>
              <p>Connect goals and progress with the broader journey while contributing through appropriate access.</p>
            </div>
            <div className="tile">
              <div className="t-ic slate"><i className="ti ti-building-hospital tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Hospitals and centres</h3>
              <p>Establish consistent workflows with coordination, access control, governance, and implementation support.</p>
            </div></div></div>
        </div>
      </section>

      <section className="section-pad" id="technology">
        <div className="container">

          <div className="sec-head center reveal">
            <p className="eyebrow">Technology that stays accountable</p>
            <h2>Structured intelligence—with the evidence still attached.</h2>
            <p className="lede">Cohera’s proprietary developmental signal layer prepares information for clinical review while preserving its source, context, and place in the child’s history.</p>
          </div>
          <div className="mt-6"><div className="grid-3" data-stagger>
            <div className="tile">
              <div className="t-ic "><i className="ti ti-layers-intersect tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Consistent structure</h3>
              <p>Bring multi-source developmental information into a coherent view without flattening clinical nuance.</p>
            </div>
            <div className="tile">
              <div className="t-ic sky"><i className="ti ti-link tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Traceable context</h3>
              <p>Keep observations connected to the person, activity, and point in time from which they came.</p>
            </div>
            <div className="tile">
              <div className="t-ic slate"><i className="ti ti-user-check tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Controlled interpretation</h3>
              <p>Use technology to prepare the picture while qualified professionals retain the conclusion and next step.</p>
            </div></div></div>
        </div>
      </section>

      <section className="section-pad" id="trust">
        <div className="container split">
          <div className="txt">
            <p className="eyebrow">Professional judgment stays central</p>
            <h2>AI can organize information. It cannot own the decision.</h2>
            <p className="lede">Cohera-assisted outputs remain source-linked, editable, and subordinate to the treating clinician’s record.</p>
            <div className="mt-4"><ul className="list-check">
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Review, correct, or reject generated summaries</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>See provenance and uncertainty</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Control documentation and next steps</span></li></ul></div>
            <div className="mt-5"><a className="textlink" href="/evidence/">Read our evidence approach <i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></a></div>
          </div>

        </div>
      </section>

      {/*<section className="section-pad" id="collaborate">
        <div className="container center">

          <div className="sec-head center reveal">
            <p className="eyebrow">Work with Cohera</p>
            <h2>Help build the future of connected developmental care.</h2>
            <p className="lede">Use Cohera in practice, become a design partner, participate in a pilot, support validation, or contribute to the clinical advisory network.</p>
          </div>
          <div className="btn-row center mt-5"><a className="btn btn-dark" href="/request-demo/">Request a Demo</a><a className="btn btn-glass" href="/join-network/">Join the Clinical Network</a></div>
        </div>
      </section>*/}
    </Fragment>
  );
}
