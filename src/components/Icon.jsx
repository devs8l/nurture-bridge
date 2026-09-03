// Tabler icon-font wrapper — same markup pattern the original icons.mjs emitted:
// <i class="ti ti-{name} tabler-ui-icon" style="--ti-size:{size}px" aria-hidden="true"></i>
export default function Icon({ name, size = 18 }) {
  return <i className={`ti ti-${name} tabler-ui-icon`} style={{ '--ti-size': `${size}px` }} aria-hidden="true" />;
}
