import * as resetStyles from '../reset/reset.css';
import type { vars } from '../themes/vars.css';
import type { RequiredResponsiveValue } from './sprinkles.css';
import { sprinkles } from './sprinkles.css';

type Sprinkles = Parameters<typeof sprinkles>[0];

export type Space = keyof typeof vars.space | 'none';
export type ResponsiveSpace = RequiredResponsiveValue<Space>;

type $IntrinsicElements = {
  // HTML
  a: null;
  abbr: null;
  address: null;
  area: null;
  article: null;
  aside: null;
  audio: null;
  b: null;
  base: null;
  bdi: null;
  bdo: null;
  big: null;
  blockquote: null;
  body: null;
  br: null;
  button: null;
  canvas: null;
  caption: null;
  cite: null;
  code: null;
  col: null;
  colgroup: null;
  data: null;
  datalist: null;
  dd: null;
  del: null;
  details: null;
  dfn: null;
  dialog: null;
  div: null;
  dl: null;
  dt: null;
  em: null;
  embed: null;
  fieldset: null;
  figcaption: null;
  figure: null;
  footer: null;
  form: null;
  h1: null;
  h2: null;
  h3: null;
  h4: null;
  h5: null;
  h6: null;
  head: null;
  header: null;
  hgroup: null;
  hr: null;
  html: null;
  i: null;
  iframe: null;
  img: null;
  input: null;
  ins: null;
  kbd: null;
  keygen: null;
  label: null;
  legend: null;
  li: null;
  link: null;
  main: null;
  map: null;
  mark: null;
  menu: null;
  menuitem: null;
  meta: null;
  meter: null;
  nav: null;
  noindex: null;
  noscript: null;
  object: null;
  ol: null;
  optgroup: null;
  option: null;
  output: null;
  p: null;
  param: null;
  picture: null;
  pre: null;
  progress: null;
  q: null;
  rp: null;
  rt: null;
  ruby: null;
  s: null;
  samp: null;
  slot: null;
  script: null;
  section: null;
  select: null;
  small: null;
  source: null;
  span: null;
  strong: null;
  style: null;
  sub: null;
  summary: null;
  sup: null;
  table: null;
  template: null;
  tbody: null;
  td: null;
  textarea: null;
  tfoot: null;
  th: null;
  thead: null;
  time: null;
  title: null;
  tr: null;
  track: null;
  u: null;
  ul: null;
  var: null;
  video: null;
  wbr: null;
  webview: null;

  // SVG
  svg: null;

  animate: null;
  animateMotion: null;
  animateTransform: null;
  circle: null;
  clipPath: null;
  defs: null;
  desc: null;
  ellipse: null;
  feBlend: null;
  feColorMatrix: null;
  feComponentTransfer: null;
  feComposite: null;
  feConvolveMatrix: null;
  feDiffuseLighting: null;
  feDisplacementMap: null;
  feDistantLight: null;
  feDropShadow: null;
  feFlood: null;
  feFuncA: null;
  feFuncB: null;
  feFuncG: null;
  feFuncR: null;
  feGaussianBlur: null;
  feImage: null;
  feMerge: null;
  feMergeNode: null;
  feMorphology: null;
  feOffset: null;
  fePointLight: null;
  feSpecularLighting: null;
  feSpotLight: null;
  feTile: null;
  feTurbulence: null;
  filter: null;
  foreignObject: null;
  g: null;
  image: null;
  line: null;
  linearGradient: null;
  marker: null;
  mask: null;
  metadata: null;
  mpath: null;
  path: null;
  pattern: null;
  polygon: null;
  polyline: null;
  radialGradient: null;
  rect: null;
  stop: null;
  switch: null;
  symbol: null;
  text: null;
  textPath: null;
  tspan: null;
  use: null;
  view: null;
};

export interface Atoms extends Sprinkles {
  reset?: keyof $IntrinsicElements;
}

export const atoms = ({ reset, ...rest }: Atoms) => {
  if (!reset) {
    return sprinkles(rest);
  }

  const elementReset =
    resetStyles.element[reset as keyof typeof resetStyles.element];

  const sprinklesClasses = sprinkles(rest);

  return `${resetStyles.base}${elementReset ? ` ${elementReset}` : ''}${
    sprinklesClasses ? ` ${sprinklesClasses}` : ''
  }`;
};
