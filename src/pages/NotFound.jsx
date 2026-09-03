import { Fragment } from 'react';
import usePageMeta from '../hooks/usePageMeta';

const PAGE_META = {
  "title": "Page not found | Cohera Health",
  "description": "The page you are looking for has moved or does not exist.",
  "path": "/404/",
  "noindex": true,
  "jsonld": []
};

export default function NotFound() {
  usePageMeta(PAGE_META);
  return (
    <Fragment>
      <section className="hero-sub" style={{minHeight: "70svh"}}>
        <div className="sky" aria-hidden="true"></div>
        <div className="container center">
          <img src="/assets/imagery/child-hero-06e49db0.png" alt="" aria-hidden="true" className="floaty" style={{width: "130px", margin: "0 auto 26px"}} />
          <p className="eyebrow">404 — page not found</p>
          <h1>This page seems to have wandered off.</h1>
          <p className="lede" style={{maxWidth: "520px", margin: "22px auto 0"}}>The page you are looking for has moved or does not exist. The journey continues from the home page.</p>
          <div className="btn-row center mt-5">
            <a className="textlink" href="/">Back to Home <i className="ti ti-arrow-right tabler-ui-icon" style={{"--ti-size": "15px"}} aria-hidden="true"></i></a>
            <a className="btn btn-glass" href="/contact/">Contact Us</a>
          </div>
        </div>
      </section>
    </Fragment>
  );
}
