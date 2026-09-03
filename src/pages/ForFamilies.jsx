import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "For Families — Clarity across the developmental journey | Cohera Health",
  "description": "A clearer way to prepare for developmental-care conversations and stay connected to next steps.",
  "path": "/for-families/",
  "noindex": false,
  "jsonld": [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Does noticing a difference mean my child has a diagnosis?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Children develop differently, and an observation is not a diagnosis. A pediatrician or qualified professional can help you understand whether monitoring or further evaluation is appropriate."
          }
        },
        {
          "@type": "Question",
          "name": "Can Cohera diagnose my child?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. Cohera organizes information and supports professional conversations. Diagnosis requires qualified clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "What should I bring to an appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Bring the questions that matter most, a few specific everyday examples, and any relevant reports or recommendations you already have."
          }
        },
        {
          "@type": "Question",
          "name": "What if I have an urgent concern?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Cohera is not an emergency service. Contact an appropriate healthcare professional or your local emergency service for urgent medical or safety concerns."
          }
        }
      ]
    }
  ]
};

export default function ForFamilies() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-sub">
          <div className="sky" aria-hidden="true"></div>
          <div className="cloud" style={{width: "340px", height: "170px", left: "6%", top: "120px"}} aria-hidden="true"></div>
          <div className="cloud" style={{width: "280px", height: "150px", right: "8%", top: "210px"}} aria-hidden="true"></div>
          <div className="container">
            
            <p className="eyebrow">For families</p>
            <h1 className="reveal in">Questions about development deserve clarity, not fear.</h1>
            <p className="lede reveal in">Cohera helps you organize what you notice, prepare for professional conversations, and keep the next step in view.</p>
            <div className="btn-row center"><a className="textlink" href="/products/cohera-care/">Explore Cohera Care <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a><a className="textlink" href="/resources/">Explore Resources <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a></div>
            
          </div>
          
        </section>
      
      <section className="section-pad">
        <div className="container split">
          <div className="txt">
            <p className="eyebrow">Your view matters</p>
            <h2>You see the moments a clinic visit cannot.</h2>
            <p className="lede">Everyday examples from play, communication, movement, routines, and learning can help a professional understand the wider picture.</p>
            <p className="note mt-4">Noticing something is not labelling your child. It is simply information worth discussing.</p>
          </div>
          <ul className="list-check">
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Capture concerns, strengths, and specific examples</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Keep relevant history and reports organized</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Prepare the questions you want answered</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Record the plan and follow-up after the visit</span></li></ul>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="band band-sky journey-band"><div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">A simpler path</p>
          <h2>The same care journey—with less repetition for families.</h2>
          <p className="lede">Cohera helps information move between the moments that already happen, so families can prepare once, understand the plan, and bring useful updates to the next conversation.</p>
        </div>
          <div className="mt-6"><div className="pathway-tabs journey-tabs reveal" data-pathway-tabs>
          <div className="pt-tablist" role="tablist" aria-label="The family care journey" style={{"--tab-count": "5"}}>
            <button className="pt-tab is-active" type="button" role="tab" id="family-path-tab-0" aria-controls="family-path-panel-0" aria-selected="true" tabIndex="0" data-pathway-tab>
              <span className="pt-tab-icon"><i className="ti ti-message-circle tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Observe</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
            </button><button className="pt-tab" type="button" role="tab" id="family-path-tab-1" aria-controls="family-path-panel-1" aria-selected="false" tabIndex="-1" data-pathway-tab>
              <span className="pt-tab-icon"><i className="ti ti-clipboard-text tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Prepare</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
            </button><button className="pt-tab" type="button" role="tab" id="family-path-tab-2" aria-controls="family-path-panel-2" aria-selected="false" tabIndex="-1" data-pathway-tab>
              <span className="pt-tab-icon"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Review</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
            </button><button className="pt-tab" type="button" role="tab" id="family-path-tab-3" aria-controls="family-path-panel-3" aria-selected="false" tabIndex="-1" data-pathway-tab>
              <span className="pt-tab-icon"><i className="ti ti-route tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Care</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
            </button><button className="pt-tab" type="button" role="tab" id="family-path-tab-4" aria-controls="family-path-panel-4" aria-selected="false" tabIndex="-1" data-pathway-tab>
              <span className="pt-tab-icon"><i className="ti ti-refresh tabler-ui-icon" style={{"--ti-size": "19px"}} aria-hidden="true"></i></span><span className="pt-tab-copy"><strong>Progress</strong></span><span className="pt-tab-arrow"><i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span>
            </button>
          </div>
          <div className="pt-panels">
            <section className="pt-panel" role="tabpanel" id="family-path-panel-0" aria-labelledby="family-path-tab-0">
              <div className="pt-main">
                <p className="pt-audience">At home</p>
                <h3>Start with the moments you already see.</h3>
                <p>Everyday examples from play, communication, movement, routines, and learning can help a professional understand the wider picture.</p>
                
              </div>
              <div className="pt-detail">
                <div><span>Your role</span><p>Notice concerns and strengths without trying to interpret or label them.</p></div><div><span>Cohera helps</span><p>Keep specific examples and relevant history organized.</p></div><div className="pt-value"><span>Why it matters</span><p>Useful details are easier to bring into the next conversation.</p></div>
              </div>
            </section><section className="pt-panel" role="tabpanel" id="family-path-panel-1" aria-labelledby="family-path-tab-1" hidden>
              <div className="pt-main">
                <p className="pt-audience">Before the visit</p>
                <h3>Bring the right context together once.</h3>
                <p>Questions, reports, history, and requested activities can be prepared before the appointment rather than reconstructed during it.</p>
                
              </div>
              <div className="pt-detail">
                <div><span>Your role</span><p>Share what matters most and the questions you want answered.</p></div><div><span>Cohera helps</span><p>Guide requested inputs and keep supporting information together.</p></div><div className="pt-value"><span>Why it matters</span><p>The visit can begin with more clarity and less repetition.</p></div>
              </div>
            </section><section className="pt-panel" role="tabpanel" id="family-path-panel-2" aria-labelledby="family-path-tab-2" hidden>
              <div className="pt-main">
                <p className="pt-audience">With a professional</p>
                <h3>Let qualified judgment lead.</h3>
                <p>A pediatrician or qualified professional reviews the wider picture, examines the child where appropriate, and decides what needs attention.</p>
                
              </div>
              <div className="pt-detail">
                <div><span>Your role</span><p>Ask questions, clarify examples, and share anything that feels incomplete.</p></div><div><span>Cohera helps</span><p>Present source-linked context for professional review.</p></div><div className="pt-value"><span>Why it matters</span><p>Technology supports the conversation; it does not diagnose.</p></div>
              </div>
            </section><section className="pt-panel" role="tabpanel" id="family-path-panel-3" aria-labelledby="family-path-tab-3" hidden>
              <div className="pt-main">
                <p className="pt-audience">The next step</p>
                <h3>Understand what happens next.</h3>
                <p>The appropriate next step may be reassurance, monitoring, referral, evaluation, guidance, or professional support.</p>
                
              </div>
              <div className="pt-detail">
                <div><span>Your role</span><p>Understand the plan, responsibilities, and next review point.</p></div><div><span>Cohera helps</span><p>Keep agreed guidance and next steps visible.</p></div><div className="pt-value"><span>Why it matters</span><p>Families leave with a clearer path rather than another loose handoff.</p></div>
              </div>
            </section><section className="pt-panel" role="tabpanel" id="family-path-panel-4" aria-labelledby="family-path-tab-4" hidden>
              <div className="pt-main">
                <p className="pt-audience">Between visits</p>
                <h3>Carry useful updates into the next review.</h3>
                <p>Reports, guidance, family observations, and professional updates remain connected as the child’s needs evolve.</p>
                
              </div>
              <div className="pt-detail">
                <div><span>Your role</span><p>Follow appropriate guidance and note meaningful changes or questions.</p></div><div><span>Cohera helps</span><p>Organize progress against the existing plan and history.</p></div><div className="pt-value"><span>Why it matters</span><p>The next conversation starts with context instead of starting over.</p></div>
              </div>
            </section>
          </div>
        </div></div>
        </div></div>
      </section>
      
      <section className="section-pad">
        <div className="container split">
          
          <div className="txt">
            <p className="eyebrow">Support between visits</p>
            <h2>Everyday routines can support connection and learning.</h2>
            <p className="lede">Professionally guided activities can help families carry appropriate strategies into play, communication, movement, and daily routines.</p>
            <div className="mt-4"><ul className="list-check">
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Reviewed guidance in plain language</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Activities connected to professional goals</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Prompts to capture questions and progress</span></li>
          <li><span className="ck"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "12px"}} aria-hidden="true"></i></span><span>Continuity between family and care team</span></li></ul></div>
            <p className="note mt-4">Home guidance complements professional care. It does not replace therapy, assessment, or medical advice.</p>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Family control</p>
          <h2>Respect should be visible in every interaction.</h2>
          
        </div>
          <div className="mt-6"><div className="grid-3" data-stagger>
          <div className="tile">
            <div className="t-ic "><i className="ti ti-eye tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Clear explanations</h3>
            <p>Know what is collected, why it matters, and who can see it.</p>
          </div>
          <div className="tile">
            <div className="t-ic sky"><i className="ti ti-shield-check tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Consent-led sharing</h3>
            <p>Access follows clear permissions and care roles.</p>
          </div>
          <div className="tile">
            <div className="t-ic sun"><i className="ti ti-heart tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>No labels from software</h3>
            <p>Technology supports the conversation; professionals make clinical decisions.</p>
          </div></div></div>
          <div className="btn-row center mt-6"><a className="textlink" href="/trust/">Read Our Privacy Approach <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a><a className="textlink" href="/products/cohera-care/">Explore Cohera Care <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a></div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Common questions</p>
          <h2>Straight answers</h2>
          
        </div>
          <div className="mt-4"><div className="faq reveal">
          <details>
            <summary>Does noticing a difference mean my child has a diagnosis?<span className="fx" aria-hidden="true"><i className="ti ti-plus tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span></summary>
            <div className="fa"><div className="fa-inner">No. Children develop differently, and an observation is not a diagnosis. A pediatrician or qualified professional can help you understand whether monitoring or further evaluation is appropriate.</div></div>
          </details>
          <details>
            <summary>Can Cohera diagnose my child?<span className="fx" aria-hidden="true"><i className="ti ti-plus tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span></summary>
            <div className="fa"><div className="fa-inner">No. Cohera organizes information and supports professional conversations. Diagnosis requires qualified clinical assessment.</div></div>
          </details>
          <details>
            <summary>What should I bring to an appointment?<span className="fx" aria-hidden="true"><i className="ti ti-plus tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span></summary>
            <div className="fa"><div className="fa-inner">Bring the questions that matter most, a few specific everyday examples, and any relevant reports or recommendations you already have.</div></div>
          </details>
          <details>
            <summary>What if I have an urgent concern?<span className="fx" aria-hidden="true"><i className="ti ti-plus tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></span></summary>
            <div className="fa"><div className="fa-inner">Cohera is not an emergency service. Contact an appropriate healthcare professional or your local emergency service for urgent medical or safety concerns.</div></div>
          </details></div></div>
        </div>
      </section>
    </Fragment>
  );
}
