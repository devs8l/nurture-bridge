import { Fragment, useState, useEffect } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "Resources — Clear developmental-care guidance | Cohera Health",
  "description": "Practical, professionally reviewed guidance for families and care teams.",
  "path": "/resources/",
  "noindex": false,
  "jsonld": [
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "What should I write down before a developmental appointment?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Start with a few specific moments from everyday life: how your child communicates, plays, moves, learns, or responds to routines. Include strengths as well as concerns. Bring your two or three most important questions and any relevant reports."
          }
        },
        {
          "@type": "Question",
          "name": "What does a developmental flag mean?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "A flag means an observation may deserve closer professional attention. It is not a diagnosis. Screening can suggest that more information would help; diagnosis requires qualified clinical assessment."
          }
        },
        {
          "@type": "Question",
          "name": "What makes a good developmental referral?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Include the reason for referral, the family's priorities, relevant history, specific source observations, and what has already been tried. Make the expected next step clear and agree how the outcome will return to primary care."
          }
        }
      ]
    }
  ]
};

export default function Resources() {
  usePageMeta(PAGE_META);

  const [placeholder, setPlaceholder] = useState('');
  const [isUserActive, setIsUserActive] = useState(false);
  const [isConsentAgreed, setIsConsentAgreed] = useState(true);

  useEffect(() => {
    if (isUserActive) return;

    const phrases = [
      "Search by question or topic...",
      "Search screening, early signs, therapy...",
      "Search developmental milestones...",
      "Search clinician & family guides..."
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let timeoutId;

    const type = () => {
      const currentPhrase = phrases[phraseIndex];

      if (isDeleting) {
        setPlaceholder(currentPhrase.substring(0, charIndex - 1));
        charIndex--;
      } else {
        setPlaceholder(currentPhrase.substring(0, charIndex + 1));
        charIndex++;
      }

      let speed = isDeleting ? 35 : 65;

      if (!isDeleting && charIndex === currentPhrase.length) {
        speed = 2200;
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        speed = 400;
      }

      timeoutId = setTimeout(type, speed);
    };

    timeoutId = setTimeout(type, 300);

    return () => clearTimeout(timeoutId);
  }, [isUserActive]);

  return (
    <Fragment>
      <section className="hero-sub">
          <div className="sky" aria-hidden="true"></div>
          <div className="cloud" style={{width: "340px", height: "170px", left: "6%", top: "120px"}} aria-hidden="true"></div>
          <div className="cloud" style={{width: "280px", height: "150px", right: "8%", top: "210px"}} aria-hidden="true"></div>
          <div className="container">
            
            <p className="eyebrow">Resources</p>
            <h1 className="reveal in">Clear guidance for the next conversation.</h1>
            <p className="lede reveal in">Practical, professionally reviewed information for families, clinicians, and organizations supporting child development.</p>
            
            <div className="searchbar">
              <i className="ti ti-search tabler-ui-icon" style={{"--ti-size": "20px"}} aria-hidden="true"></i>
              <input
                type="search"
                data-search
                placeholder={isUserActive ? "Search by question or topic" : placeholder}
                aria-label="Search resources"
                onFocus={() => setIsUserActive(true)}
                onBlur={(e) => {
                  if (!e.target.value) setIsUserActive(false);
                }}
                onChange={(e) => {
                  if (e.target.value) setIsUserActive(true);
                  else setIsUserActive(false);
                }}
              />
            </div>
            <p className="small mt-3" data-search-empty hidden>No matching resources yet. Try a broader phrase.</p>
          </div>
          
        </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Start with your role</p>
          <h2>Find what is useful now.</h2>
          
        </div>
          <div className="mt-6"><div className="grid-3" data-stagger>
          <div className="tile">
            <div className="t-ic "><i className="ti ti-users tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Families</h3>
            <p>Prepare for appointments, organize observations, and understand referrals or next steps.</p>
          </div>
          <div className="tile">
            <div className="t-ic sky"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Clinicians</h3>
            <p>Strengthen surveillance, family conversations, referral, and follow-up.</p>
          </div>
          <div className="tile">
            <div className="t-ic slate"><i className="ti ti-building-hospital tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Organizations</h3>
            <p>Plan responsible workflows, pilots, governance, and evaluation.</p>
          </div></div></div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Browse by topic</p>
          <h2>Move directly to the question in front of you.</h2>
          
        </div>
          <div className="feature-rows mt-6 reveal">
            <div className="feature-row" data-searchable><span className="fr-num">01</span><h3>Milestones and surveillance</h3><p>Understand ongoing observation, structured screening, and when closer review may help.</p></div>
            <div className="feature-row" data-searchable><span className="fr-num">02</span><h3>Preparing for a visit</h3><p>Organize family priorities, developmental history, relevant reports, and questions.</p></div>
            <div className="feature-row" data-searchable><span className="fr-num">03</span><h3>Referral and assessment</h3><p>Know what makes a useful handoff and how comprehensive evaluation differs from screening.</p></div>
            <div className="feature-row" data-searchable><span className="fr-num">04</span><h3>Therapy and home support</h3><p>Connect professionally guided goals with appropriate everyday routines.</p></div>
            <div className="feature-row" data-searchable><span className="fr-num">05</span><h3>Responsible AI and privacy</h3><p>Review intended use, source traceability, human oversight, consent, and access.</p></div>
          </div>
        </div>
      </section>
      
      <section className="section-pad">
        <div className="band band-sky journey-band"><div className="container">
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Featured guides</p>
          <h2>Three useful places to begin.</h2>
          
        </div>
          <div className="grid-3 mt-6" data-stagger>
            
        <article className="res-card" data-searchable>
          <p className="r-aud"><i className="ti ti-users tabler-ui-icon" style={{"--ti-size": "14px"}} aria-hidden="true"></i> For families</p>
          <h3>What should I write down before an appointment?</h3>
          <p className="r-desc">A simple way to record concerns, strengths, and questions without trying to document everything.</p>
          <details>
            <summary><span className="plus"><i className="ti ti-plus tabler-ui-icon" style={{"--ti-size": "14px"}} aria-hidden="true"></i></span> Read the guide</summary>
            <div className="resource-body"><p>Start with a few specific moments from everyday life: how your child communicates, plays, moves, learns, or responds to routines. Include strengths as well as concerns.</p><p>Bring your two or three most important questions and any relevant reports. Clear examples help the conversation focus on your child instead of rebuilding memory.</p></div>
          </details>
          <p className="r-meta">Educational information · Reviewed July 2026</p>
        </article>
            
        <article className="res-card" data-searchable>
          <p className="r-aud"><i className="ti ti-heart tabler-ui-icon" style={{"--ti-size": "14px"}} aria-hidden="true"></i> For families</p>
          <h3>What does a developmental flag mean?</h3>
          <p className="r-desc">A plain-language distinction between a review prompt, screening, evaluation, and diagnosis.</p>
          <details>
            <summary><span className="plus"><i className="ti ti-plus tabler-ui-icon" style={{"--ti-size": "14px"}} aria-hidden="true"></i></span> Read the guide</summary>
            <div className="resource-body"><p>A flag means an observation may deserve closer professional attention. It is not a diagnosis. Screening can suggest that more information would help; diagnosis requires qualified clinical assessment.</p><p>What matters is that the observation is discussed and followed rather than lost between appointments.</p></div>
          </details>
          <p className="r-meta">Educational information · Reviewed July 2026</p>
        </article>
            
        <article className="res-card" data-searchable>
          <p className="r-aud"><i className="ti ti-stethoscope tabler-ui-icon" style={{"--ti-size": "14px"}} aria-hidden="true"></i> For clinicians</p>
          <h3>Better referrals begin with better context</h3>
          <p className="r-desc">A concise checklist for carrying useful history and the follow-up plan into a handoff.</p>
          <details>
            <summary><span className="plus"><i className="ti ti-plus tabler-ui-icon" style={{"--ti-size": "14px"}} aria-hidden="true"></i></span> Read the guide</summary>
            <div className="resource-body"><p>Include the reason for referral, the family’s priorities, relevant history, specific source observations, and what has already been tried.</p><p>Make the expected next step clear and agree how the outcome will return to primary care.</p></div>
          </details>
          <p className="r-meta">Educational information · Reviewed July 2026</p>
        </article>
          </div>
        </div></div>
      </section>
      
      <section className="section-pad">
        <div className="container split" style={{alignItems: "start"}}>
          <div className="txt">
            <p className="eyebrow">Our content standard</p>
            <h2>Every guide should show its work.</h2>
            <p className="lede">Cohera resources use plain language, distinguish education from medical advice, disclose uncertainty, and include review dates and correction pathways.</p>
          </div>
          <div className="resource-standard">
            <div className="grid-3" data-stagger>
          <div className="tile">
            <div className="t-ic "><i className="ti ti-user-check tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Professionally reviewed</h3>
            <p>Clinical review is visible and dated.</p>
          </div>
          <div className="tile">
            <div className="t-ic sky"><i className="ti ti-book tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Source aware</h3>
            <p>Substantive guidance links to its references.</p>
          </div>
          <div className="tile">
            <div className="t-ic sun"><i className="ti ti-language tabler-ui-icon" style={{"--ti-size": "22px"}} aria-hidden="true"></i></div>
            <h3>Plain and inclusive</h3>
            <p>Clear language without stigma or unnecessary jargon.</p>
          </div></div>
          </div>
        </div>
      </section>
      
      <section className="section-pad" id="subscribe">
        <div className="container" style={{maxWidth: "760px"}}>
          
        <div className="sec-head center reveal">
          <p className="eyebrow">Stay connected</p>
          <h2>Receive new resources, occasionally.</h2>
          
        </div>
          <div className="form-card mt-5 reveal">
            <form data-validate noValidate aria-label="Subscribe for updates">
              <div style={{position: "absolute", left: "-9999px"}} aria-hidden="true"><label>Leave this field empty<input type="text" name="company_website_hp" tabIndex="-1" autoComplete="off" /></label></div>
              <div className="form-grid">
                
        <div className="field">
          <label htmlFor="sub-name">Name</label>
          <input id="sub-name" name="sub-name" type="text" placeholder="" autoComplete="name" />
          
          <p className="err">Please complete this field.</p>
        </div>
                
        <div className="field">
          <label htmlFor="sub-email">Email <span className="req" aria-hidden="true">*</span></label>
          <input id="sub-email" name="sub-email" type="email" required placeholder="" autoComplete="email" />
          
          <p className="err">Please enter a valid email address.</p>
        </div>
                
        <label className="check full">
          <input type="checkbox" id="sub-family" name="sub-family" />
          <span>Family resources</span>
        </label>
                
        <label className="check full">
          <input type="checkbox" id="sub-clinician" name="sub-clinician" />
          <span>Clinical and research updates</span>
        </label>
                
        <label className="check full">
          <input
            type="checkbox"
            id="sub-consent"
            name="sub-consent"
            required
            checked={isConsentAgreed}
            onChange={(e) => setIsConsentAgreed(e.target.checked)}
          />
          <span>I agree to receive selected updates and acknowledge the <a href="/trust/">privacy approach</a>.</span>
        </label>
              </div>
              <div className="btn-row mt-4">
                <button
                  className="btn btn-dark btn-lg"
                  type="submit"
                  disabled={!isConsentAgreed}
                  style={{
                    opacity: isConsentAgreed ? 1 : 0.45,
                    cursor: isConsentAgreed ? 'pointer' : 'not-allowed',
                    pointerEvents: isConsentAgreed ? 'auto' : 'none'
                  }}
                >
                  Subscribe
                </button>
              </div>
            </form>
            
        <div className="form-success" hidden>
          <div className="fs-ic"><i className="ti ti-check tabler-ui-icon" style={{"--ti-size": "28px"}} aria-hidden="true"></i></div>
          <h3>You are subscribed</h3>
          <p>We will send only the updates you selected.</p>
        </div>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
