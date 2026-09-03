import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "Cohera Therapy — Connected intervention delivery | Cohera Health",
  "description": "Personalized intervention planning, therapy delivery, multidisciplinary coordination, and progress tracking in one connected workflow.",
  "path": "/products/cohera-therapy/",
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
          "name": "Cohera Therapy"
        }
      ]
    }
  ]
};

export default function ProductTherapy() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-sub">
        <div className="sky" aria-hidden="true"></div>
        <div className="cloud" style={{ width: "340px", height: "170px", left: "6%", top: "120px" }} aria-hidden="true"></div>
        <div className="cloud" style={{ width: "280px", height: "150px", right: "8%", top: "210px" }} aria-hidden="true"></div>
        <div className="container">
          <nav className="crumbs" aria-label="Breadcrumb"><ol><li><a href="/">Home</a><i className="ti ti-chevron-right tabler-ui-icon" style={{ "--ti-size": "13px" }} aria-hidden="true"></i></li><li><a href="/products/">Products</a><i className="ti ti-chevron-right tabler-ui-icon" style={{ "--ti-size": "13px" }} aria-hidden="true"></i></li><li aria-current="page">Cohera Therapy</li></ol></nav>

          <h1 className="reveal in">Turn clinical goals into coordinated, measurable intervention.</h1>
          <p className="lede reveal in">Cohera Therapy connects planning, session delivery, family guidance, and progress around the therapy workflows teams already use—reducing fragmented administration without taking control away from professionals.</p>
          <div className="btn-row center"><a className="btn btn-dark" href="/join-network/">Join the Therapy Network</a><a className="btn btn-glass" href="/request-demo/">Discuss Your Workflow</a></div>

        </div>

      </section>



      <section className="section-pad" id="purpose">
        <div className="container split">
          <div className="txt"><p className="eyebrow">Intervention with context</p><h2>A plan is only useful when the whole team can carry it forward.</h2></div>
          <div className="txt"><p className="lede">Care often spans disciplines, settings, and months of a child’s life. Cohera Therapy is designed to keep goals, sessions, family input, and outcomes connected to the broader developmental picture.</p>
            <div className="mt-4"><ul className="list-check">
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Personalized goals linked to assessment insight</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Clear plans for every participating discipline</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Session delivery and outcome capture</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Family guidance aligned with professional goals</span></li>
              <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Longitudinal progress visible to the right care-team members</span></li></ul></div>
          </div>
        </div>
      </section>

      <section className="section-pad" id="workflow">
        <div className="band band-sky journey-band"><div className="container">

          <div className="sec-head center reveal">
            <p className="eyebrow">Designed around therapy delivery</p>
            <h2>Connect the work without changing how professionals practise.</h2>
            <p className="lede">Cohera Therapy gives each discipline a shared structure while preserving role-specific methods, notes, responsibilities, and clinical judgment.</p>
          </div>
          <div className="mt-6"><div className="pathway-tabs journey-tabs reveal" data-pathway-tabs>
            <div className="pt-tablist" role="tablist" aria-label="Cohera Therapy workflow" style={{ "--tab-count": "3" }}>
              <button className="pt-tab is-active" type="button" role="tab" id="therapy-workflow-tab-0" aria-controls="therapy-workflow-panel-0" aria-selected="true" tabIndex="0" data-pathway-tab>
                <span className="pt-tab-icon"><i className="ti ti-clipboard-check tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Plan</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></span>
              </button><button className="pt-tab" type="button" role="tab" id="therapy-workflow-tab-1" aria-controls="therapy-workflow-panel-1" aria-selected="false" tabIndex="-1" data-pathway-tab>
                <span className="pt-tab-icon"><i className="ti ti-heart-handshake tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Deliver</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></span>
              </button><button className="pt-tab" type="button" role="tab" id="therapy-workflow-tab-2" aria-controls="therapy-workflow-panel-2" aria-selected="false" tabIndex="-1" data-pathway-tab>
                <span className="pt-tab-icon"><i className="ti ti-refresh tabler-ui-icon" style={{ "--ti-size": "19px" }} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Review</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{ "--ti-size": "15px" }} aria-hidden="true"></i></span>
              </button>
            </div>
            <div className="pt-panels">
              <section className="pt-panel" role="tabpanel" id="therapy-workflow-panel-0" aria-labelledby="therapy-workflow-tab-0">
                <div className="pt-main">
                  <p className="pt-audience">Begin with clinical goals</p>
                  <h3>Build from the context already established.</h3>
                  <p>Assessment insight and family priorities become clear, personalized goals without rebuilding the child’s history for every discipline.</p>

                </div>
                <div className="pt-detail">
                  <div><span>Existing workflow</span><p>Each professional defines appropriate goals within their scope.</p></div><div><span>Cohera contributes</span><p>A coordinated plan with role-specific responsibilities and shared context.</p></div><div className="pt-value"><span>Practical value</span><p>Less duplicate setup across disciplines.</p></div>
                </div>
              </section><section className="pt-panel" role="tabpanel" id="therapy-workflow-panel-1" aria-labelledby="therapy-workflow-tab-1" hidden>
                <div className="pt-main">
                  <p className="pt-audience">During care</p>
                  <h3>Document within the rhythm of therapy.</h3>
                  <p>Relevant session notes, adaptations, completed activities, and outcomes are captured as care is delivered.</p>

                </div>
                <div className="pt-detail">
                  <div><span>Existing workflow</span><p>Therapists retain their methods, notes, and professional responsibility.</p></div><div><span>Cohera contributes</span><p>Role-aware documentation connected to goals and the wider plan.</p></div><div className="pt-value"><span>Practical value</span><p>One relevant update can inform the appropriate team members.</p></div>
                </div>
              </section><section className="pt-panel" role="tabpanel" id="therapy-workflow-panel-2" aria-labelledby="therapy-workflow-tab-2" hidden>
                <div className="pt-main">
                  <p className="pt-audience">Between review points</p>
                  <h3>Keep family guidance and progress connected.</h3>
                  <p>Professionally approved activities, family observations, and multidisciplinary updates remain visible against agreed goals.</p>

                </div>
                <div className="pt-detail">
                  <div><span>Existing workflow</span><p>Qualified professionals review change and adapt the plan.</p></div><div><span>Cohera contributes</span><p>Longitudinal progress and a clearer record of what changed.</p></div><div className="pt-value"><span>Practical value</span><p>Fewer scattered messages and clearer review points.</p></div>
                </div>
              </section>
            </div>
          </div></div>
        </div></div>
      </section>

      <section className="section-pad" id="teamwork">
        <div className="container">

          <div className="sec-head center reveal">
            <p className="eyebrow">Multidisciplinary by design</p>
            <h2>Different disciplines. One coherent plan.</h2>

          </div>
          <div className="mt-6"><div className="grid-3" data-stagger>
            <div className="tile">
              <div className="t-ic "><i className="ti ti-clipboard-check tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Shared goals</h3>
              <p>Keep each discipline working toward clear, connected outcomes.</p>
            </div>
            <div className="tile">
              <div className="t-ic sky"><i className="ti ti-user-check tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Role-aware workflows</h3>
              <p>Each professional sees and contributes information appropriate to their role.</p>
            </div>
            <div className="tile">
              <div className="t-ic slate"><i className="ti ti-message-circle tabler-ui-icon" style={{ "--ti-size": "22px" }} aria-hidden="true"></i></div>
              <h3>Care-team communication</h3>
              <p>Reduce fragmented handoffs and keep important changes visible.</p>
            </div></div></div>
        </div>
      </section>

      <section className="section-pad" id="progress">
        <div className="band band-mist trust-band"><div className="container split">
          <div className="txt"><p className="eyebrow">Progress that stays visible</p><h2>Move beyond isolated session notes.</h2><p className="lede">Connect goals, delivery, observations, and outcomes so professionals and families can understand what is changing and what comes next.</p></div>
          <ul className="list-check">
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Progress linked to agreed goals</span></li>
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Family observations alongside professional notes</span></li>
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Clear review points and plan updates</span></li>
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>A longitudinal view across disciplines</span></li>
            <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{ "--ti-size": "12px" }} aria-hidden="true"></i></span><span>Source-linked information for professional review</span></li></ul>
        </div></div>
      </section>

      {/*<section className="section-pad" id="status">
        <div className="container">

          <div className="sec-head center reveal">
            <p className="eyebrow">For therapy teams</p>
            <h2>A coordinated workflow built around real care delivery.</h2>
            <p className="lede">Cohera Therapy brings therapists and multidisciplinary partners into a shared workflow for goals, delivery, family participation, and progress.</p>
          </div>
          <div className="btn-row center mt-5"><a className="btn btn-dark" href="/join-network/">Join Our Network</a><a className="btn btn-glass" href="/contact/">Contact the Team</a></div>
          <p className="note center mt-4">Cohera supports therapy workflows and professional judgment. It does not prescribe treatment or replace qualified care.</p>
        </div>
      </section>*/}
    </Fragment>
  );
}
