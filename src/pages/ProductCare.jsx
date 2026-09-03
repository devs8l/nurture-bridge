import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "Cohera Care — Family access, connected | Cohera Health",
  "description": "A connected family app for screening activities, reports, progress updates, care plans, trusted resources, and care-team communication.",
  "path": "/products/cohera-care/",
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
          "name": "Cohera Care"
        }
      ]
    }
  ]
};

export default function ProductCare() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-sub">
        <div className="sky" aria-hidden="true"></div>
        <div className="cloud" style={{ width: "340px", height: "170px", left: "6%", top: "120px" }} aria-hidden="true"></div>
        <div className="cloud" style={{ width: "280px", height: "150px", right: "8%", top: "210px" }} aria-hidden="true"></div>
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a><i className="ti ti-chevron-right tabler-ui-icon" style={{ "--ti-size": "13px" }} aria-hidden="true"></i></li><li><a href="/products/">Products</a><i className="ti ti-chevron-right tabler-ui-icon" style={{ "--ti-size": "13px" }} aria-hidden="true"></i></li><li aria-current="page">Cohera Care</li></ol></nav>

          <h1 className="reveal in">Everything a family needs to stay informed, prepared, and connected.</h1>
          <p className="lede reveal in">Families access the Cohera Health™ ecosystem through an invite from their care team—bringing activities, reports, plans, resources, and communication into one calm experience.</p>
          <div className="btn-row center"><a className="textlink" href="#access">How Access Works <i className="ti ti-arrow-down tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></a><a className="textlink" href="/for-families/">For Families <i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></a></div>

        </div>

      </section>



      <section className="section-pad" id="one-place">
        <div className="container split">
          <div className="txt"><p className="eyebrow">A clearer family experience</p><h2>Less searching. Less repeating. More confidence in the next step.</h2></div>
          <div className="txt"><p className="lede">Cohera Care gives families one place to complete requested activities, understand professional guidance, follow progress, and communicate with the people supporting their child.</p>
            <div className="mt-4"><ul className="list-check">
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Complete screening inputs requested by a pediatrician</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Access developmental reports and progress updates</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Review therapy plans and recommended resources</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Receive updates from the care team</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Keep the developmental journey organized over time</span></li></ul></div>
          </div>
        </div>
      </section>

      <section className="section-pad" id="experience">
        <div className="band band-sky journey-band"><div className="container">

          <div className="sec-head center reveal">
            <p className="eyebrow">Connected to professional care</p>
            <h2>A simple family experience that makes care-team workflows easier.</h2>
            <p className="lede">Cohera Care gathers requested information, guidance, and updates in one place so families stay prepared and care teams spend less effort chasing context.</p>
          </div>
          <div className="mt-6"><div className="pathway-tabs journey-tabs reveal" data-pathway-tabs>
            <div className="pt-tablist" role="tablist" aria-label="Cohera Care family workflow" style={{ "--tab-count": "3" }}>
              <button className="pt-tab is-active" type="button" role="tab" id="care-workflow-tab-0" aria-controls="care-workflow-panel-0" aria-selected="true" tabIndex="0" data-pathway-tab>
                <span className="pt-tab-icon"><i className="ti ti-send-2 tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Prepare</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></span>
              </button><button className="pt-tab" type="button" role="tab" id="care-workflow-tab-1" aria-controls="care-workflow-panel-1" aria-selected="false" tabIndex="-1" data-pathway-tab>
                <span className="pt-tab-icon"><i className="ti ti-folder-heart tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Stay connected</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></span>
              </button><button className="pt-tab" type="button" role="tab" id="care-workflow-tab-2" aria-controls="care-workflow-panel-2" aria-selected="false" tabIndex="-1" data-pathway-tab>
                <span className="pt-tab-icon"><i className="ti ti-chart-line tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Review</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></span>
              </button>
            </div>
            <div className="pt-panels">
              <section className="pt-panel" role="tabpanel" id="care-workflow-panel-0" aria-labelledby="care-workflow-tab-0">
                <div className="pt-main">
                  <p className="pt-audience">Before a visit</p>
                  <h3>Complete only what the care team requests.</h3>
                  <p>Families receive clear activities, consent information, and instructions through the appropriate professional pathway.</p>

                </div>
                <div className="pt-detail">
                  <div><span>Family experience</span><p>Complete relevant inputs at a convenient time with clear guidance.</p></div><div><span>Care-team workflow</span><p>Requested context arrives before the planned conversation.</p></div><div className="pt-value"><span>Practical value</span><p>Better-prepared visits and fewer administrative follow-ups.</p></div>
                </div>
              </section><section className="pt-panel" role="tabpanel" id="care-workflow-panel-1" aria-labelledby="care-workflow-tab-1" hidden>
                <div className="pt-main">
                  <p className="pt-audience">Between visits</p>
                  <h3>Keep the plan in one calm place.</h3>
                  <p>Reports, approved guidance, resources, reminders, and care-team updates stay organized around the child’s pathway.</p>

                </div>
                <div className="pt-detail">
                  <div><span>Family experience</span><p>Find the current plan and relevant information without searching across channels.</p></div><div><span>Care-team workflow</span><p>Share appropriate updates through the connected care pathway.</p></div><div className="pt-value"><span>Practical value</span><p>Less searching, repetition, and fragmented communication.</p></div>
                </div>
              </section><section className="pt-panel" role="tabpanel" id="care-workflow-panel-2" aria-labelledby="care-workflow-tab-2" hidden>
                <div className="pt-main">
                  <p className="pt-audience">At the next review</p>
                  <h3>Bring progress back with context.</h3>
                  <p>Family observations connect to the existing plan and can be reviewed by the appropriate professional alongside other relevant information.</p>

                </div>
                <div className="pt-detail">
                  <div><span>Family experience</span><p>Share meaningful change and questions from everyday routines.</p></div><div><span>Care-team workflow</span><p>Review updates against the agreed plan and history.</p></div><div className="pt-value"><span>Practical value</span><p>A more productive conversation about what changed.</p></div>
                </div>
              </section>
            </div>
          </div></div>
        </div></div>
      </section>

      <section className="section-pad" id="included">
        <div className="container">

          <div className="sec-head center reveal">
            <p className="eyebrow">Designed around family needs</p>
            <h2>The essentials, without the noise.</h2>

          </div>
          <div className="mt-6"><div className="grid-3" data-stagger>
            <div className="tile">
              <div className="t-ic "><i className="ti ti-clipboard-text tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Screening activities</h3>
              <p>Guided inputs requested as part of a professional workflow.</p>
            </div>
            <div className="tile">
              <div className="t-ic sky"><i className="ti ti-book tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Reports and resources</h3>
              <p>Clear information and expert-recommended guidance in one place.</p>
            </div>
            <div className="tile">
              <div className="t-ic sun"><i className="ti ti-heart-handshake tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Therapy plans</h3>
              <p>Professionally guided activities and goals for continuity at home.</p>
            </div>
            <div className="tile">
              <div className="t-ic "><i className="ti ti-chart-line tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Progress updates</h3>
              <p>A clearer view of change and the next review point.</p>
            </div>
            <div className="tile">
              <div className="t-ic sky"><i className="ti ti-message-circle tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Care-team communication</h3>
              <p>Important updates stay connected to the child’s pathway.</p>
            </div>
            <div className="tile">
              <div className="t-ic slate"><i className="ti ti-clock tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Reminders</h3>
              <p>Gentle prompts for agreed activities and follow-up.</p>
            </div></div></div>
        </div>
      </section>

      <section className="section-pad" id="control">
        <div className="band band-mist trust-band"><div className="container split">
          <div className="txt"><p className="eyebrow">Family control</p><h2>Clear consent. Appropriate access. No hidden clinical decisions.</h2><p className="lede">Families should understand what is collected, why it is useful, and who can access it. Cohera supports professional care and does not label or diagnose a child.</p></div>
          <ul className="list-check">
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Clear explanations before information is collected</span></li>
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Parent or lawful guardian consent</span></li>
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Role-based access and auditable handling</span></li>
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Additional safeguards for photos and videos</span></li>
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Correction and withdrawal pathways where applicable</span></li></ul>
        </div></div>
      </section>

      <section className="section-pad" id="access">
        <div className="container">

          <div className="sec-head center reveal">
            <p className="eyebrow">Family access</p>
            <h2>Cohera Care begins with a participating care team.</h2>
            <p className="lede">Access is provided through a participating pediatrician, clinician, therapist, or care organization within the Cohera Health ecosystem.</p>
          </div>
          <div className="btn-row center mt-5"><a className="btn btn-dark" href="/join-network/">Join Our Network</a><a className="btn btn-glass" href="/contact/">Contact Cohera</a></div>
        </div>
      </section>
    </Fragment>
  );
}
