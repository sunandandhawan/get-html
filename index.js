(()=>{"use strict";var n={587:function(n,e){var t=this&&this.__awaiter||function(n,e,t,r){return new(t||(t=Promise))((function(a,s){function o(n){try{l(r.next(n))}catch(n){s(n)}}function i(n){try{l(r.throw(n))}catch(n){s(n)}}function l(n){var e;n.done?a(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(o,i)}l((r=r.apply(n,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Solver=void 0,e.Solver=class{constructor(){this._notPresentLetters=[],this._presentLetters=[],this._words=[],this._lastWordGuessed="",this._crctLtrArr=new Array(5).fill("_")}setSource(n){return t(this,void 0,void 0,(function*(){this._words=yield n.getWords()}))}provideWord(){let n="audio";if(""!==this._lastWordGuessed){let e=this._words;e=this.filterByCorrectPoisitionLetters(e),e=this.filterByIncorrectPositionLetters(e),e=this.filterByNotPresentLetters(e),n=e[0]}return this._lastWordGuessed=n,console.log("result",n),n}filterByCorrectPoisitionLetters(n){return n.filter((n=>n.split("").every(((n,e)=>"_"==this._crctLtrArr[e]||this._crctLtrArr[e]==n))))}filterByIncorrectPositionLetters(n){return n.filter((n=>this._presentLetters.every((e=>n.includes(e)))))}filterByNotPresentLetters(n){return n.filter((n=>n.split("").every((n=>!this._notPresentLetters.includes(n)))))}saveInfo(n){if(""!=this._lastWordGuessed)for(let e=0;e<n.length;e++)0!=n[e]||this._presentLetters.includes(this._lastWordGuessed[e])?1==n[e]?this._presentLetters.push(this._lastWordGuessed[e]):2==n[e]&&(this._crctLtrArr[e]=this._lastWordGuessed[e]):this._notPresentLetters.push(this._lastWordGuessed[e])}isAnyInfoSaved(){return this._notPresentLetters.length>0||this._presentLetters.length>0||this._crctLtrArr.some((n=>"_"!=n))}}},593:(n,e)=>{Object.defineProperty(e,"__esModule",{value:!0}),e.Source=void 0,e.Source=class{constructor(){this._words="abuse\n  adult\n  agent\n  anger\n  apple\n  award\n  basis\n  beach\n  birth\n  block\n  blood\n  board\n  brain\n  bread\n  break\n  brown\n  buyer\n  cause\n  chain\n  chair\n  chest\n  chief\n  child\n  china\n  claim\n  class\n  clock\n  coach\n  coast\n  court\n  cover\n  cream\n  crime\n  cross\n  crowd\n  crown\n  cycle\n  dance\n  death\n  depth\n  doubt\n  draft\n  drama\n  dream\n  dress\n  drink\n  drive\n  earth\n  enemy\n  entry\n  error\n  event\n  faith\n  fault\n  field\n  fight\n  final\n  floor\n  focus\n  force\n  frame\n  frank\n  front\n  fruit\n  glass\n  grant\n  grass\n  green\n  group\n  guide\n  heart\n  henry\n  horse\n  hotel\n  house\n  image\n  index\n  input\n  issue\n  japan\n  jones\n  judge\n  knife\n  laura\n  layer\n  level\n  lewis\n  light\n  limit\n  lunch\n  major\n  march\n  match\n  metal\n  model\n  money\n  month\n  motor\n  mouth\n  music\n  night\n  noise\n  north\n  novel\n  nurse\n  offer\n  order\n  other\n  owner\n  panel\n  paper\n  party\n  peace\n  peter\n  phase\n  phone\n  piece\n  pilot\n  pitch\n  place\n  plane\n  plant\n  plate\n  point\n  pound\n  power\n  press\n  price\n  pride\n  prize\n  proof\n  queen\n  radio\n  range\n  ratio\n  reply\n  right\n  river\n  round\n  route\n  rugby\n  scale\n  scene\n  scope\n  score\n  sense\n  shape\n  share\n  sheep\n  sheet\n  shift\n  shirt\n  shock\n  sight\n  simon\n  skill\n  sleep\n  smile\n  smith\n  smoke\n  sound\n  south\n  space\n  speed\n  spite\n  sport\n  squad\n  staff\n  stage\n  start\n  state\n  steam\n  steel\n  stock\n  stone\n  store\n  study\n  stuff\n  style\n  sugar\n  table\n  taste\n  terry\n  theme\n  thing\n  title\n  total\n  touch\n  tower\n  track\n  trade\n  train\n  trend\n  trial\n  trust\n  truth\n  uncle\n  union\n  unity\n  value\n  video\n  visit\n  voice\n  waste\n  watch\n  water\n  while\n  white\n  whole\n  woman\n  world\n  youth\n  alcon\n  audio\n  aught\n  hella\n  ought\n  thame\n  there\n  thine\n  thine\n  where\n  which\n  whose\n  whoso\n  yours\n  yours\n  admit\n  adopt\n  agree\n  allow\n  alter\n  apply\n  argue\n  arise\n  avoid\n  begin\n  blame\n  break\n  bring\n  build\n  burst\n  carry\n  catch\n  cause\n  check\n  claim\n  clean\n  clear\n  climb\n  close\n  count\n  cover\n  cross\n  dance\n  doubt\n  drink\n  drive\n  enjoy\n  enter\n  exist\n  fight\n  focus\n  force\n  guess\n  imply\n  issue\n  judge\n  laugh\n  learn\n  leave\n  limit\n  marry\n  match\n  occur\n  offer\n  order\n  phone\n  place\n  point\n  press\n  prove\n  raise\n  reach\n  refer\n  relax\n  serve\n  shall\n  share\n  shift\n  shoot\n  sleep\n  solve\n  sound\n  speak\n  spend\n  split\n  stand\n  start\n  state\n  stick\n  study\n  teach\n  thank\n  think\n  throw\n  touch\n  train\n  treat\n  trust\n  visit\n  voice\n  waste\n  watch\n  worry\n  would\n  write\n  above\n  acute\n  alive\n  alone\n  angry\n  aware\n  awful\n  basic\n  black\n  blind\n  brave\n  brief\n  broad\n  brown\n  cheap\n  chief\n  civil\n  clean\n  clear\n  close\n  crazy\n  daily\n  dirty\n  early\n  empty\n  equal\n  exact\n  extra\n  faint\n  false\n  fifth\n  final\n  first\n  fresh\n  front\n  funny\n  giant\n  grand\n  great\n  green\n  gross\n  happy\n  harsh\n  heavy\n  human\n  ideal\n  inner\n  joint\n  large\n  legal\n  level\n  light\n  local\n  loose\n  lucky\n  magic\n  major\n  minor\n  moral\n  naked\n  nasty\n  naval\n  other\n  outer\n  plain\n  prime\n  prior\n  proud\n  quick\n  quiet\n  rapid\n  ready\n  right\n  roman\n  rough\n  round\n  royal\n  rural\n  sharp\n  sheer\n  short\n  silly\n  sixth\n  small\n  smart\n  solid\n  sorry\n  spare\n  steep\n  still\n  super\n  sweet\n  thick\n  third\n  tight\n  total\n  tough\n  upper\n  upset\n  urban\n  usual\n  vague\n  valid\n  vital\n  white\n  whole\n  wrong\n  young\n  afore\n  after\n  bothe\n  other\n  since\n  slash\n  until\n  where\n  while\n  aback\n  abaft\n  aboon\n  about\n  above\n  accel\n  adown\n  afoot\n  afore\n  afoul\n  after\n  again\n  agape\n  agogo\n  agone\n  ahead\n  ahull\n  alife\n  alike\n  aline\n  aloft\n  alone\n  along\n  aloof\n  aloud\n  amiss\n  amply\n  amuck\n  apace\n  apart\n  aptly\n  arear\n  aside\n  askew\n  awful\n  badly\n  bally\n  below\n  canny\n  cheap\n  clean\n  clear\n  coyly\n  daily\n  dimly\n  dirty\n  ditto\n  drily\n  dryly\n  dully\n  early\n  extra\n  false\n  fatly\n  feyly\n  first\n  fitly\n  forte\n  forth\n  fresh\n  fully\n  funny\n  gaily\n  gayly\n  godly\n  great\n  haply\n  heavy\n  hella\n  hence\n  hotly\n  icily\n  infra\n  jildi\n  jolly\n  laxly\n  lento\n  light\n  lowly\n  madly\n  maybe\n  never\n  newly\n  nobly\n  oddly\n  often\n  other\n  ought\n  party\n  piano\n  plain\n  plonk\n  plumb\n  prior\n  queer\n  quick\n  quite\n  ramen\n  rapid\n  redly\n  right\n  rough\n  round\n  sadly\n  secus\n  selly\n  sharp\n  sheer\n  shily\n  short\n  shyly\n  silly\n  since\n  sleek\n  slyly\n  small\n  so-so\n  sound\n  spang\n  srsly\n  stark\n  still\n  stone\n  stour\n  super\n  tally\n  tanto\n  there\n  thick\n  tight\n  today\n  tomoz\n  truly\n  twice\n  under\n  utter\n  verry\n  wanly\n  wetly\n  where\n  wrong\n  wryly\n  abaft\n  aboon\n  about\n  above\n  adown\n  afore\n  after\n  along\n  aloof\n  among\n  below\n  circa\n  cross\n  furth\n  minus\n  neath\n  round\n  since\n  spite\n  under\n  until\n  aargh\n  adieu\n  adios\n  alack\n  aloha\n  avast\n  bakaw\n  basta\n  begad\n  bless\n  blige\n  brava\n  bravo\n  bring\n  chook\n  damme\n  dildo\n  ditto\n  frick\n  fudge\n  golly\n  gratz\n  hallo\n  hasta\n  havoc\n  hella\n  hello\n  howay\n  howdy\n  hullo\n  huzza\n  jesus\n  kapow\n  loose\n  lordy\n  marry\n  mercy\n  night\n  plonk\n  psych\n  quite\n  salve\n  skoal\n  sniff\n  sooey\n  there\n  thiam\n  thwap\n  tough\n  twirp\n  viola\n  vivat\n  wacko\n  wahey\n  whist\n  wilma\n  wirra\n  woops\n  wowie\n  yecch\n  yeeha\n  yeesh\n  yowch\n  zowie"}getWords(){return Promise.resolve(this._words.split("\n").map((n=>n.trim())))}}},434:function(n,e){var t=this&&this.__awaiter||function(n,e,t,r){return new(t||(t=Promise))((function(a,s){function o(n){try{l(r.next(n))}catch(n){s(n)}}function i(n){try{l(r.throw(n))}catch(n){s(n)}}function l(n){var e;n.done?a(n.value):(e=n.value,e instanceof t?e:new t((function(n){n(e)}))).then(o,i)}l((r=r.apply(n,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0}),e.Wordle=void 0,e.Wordle=class{constructor(n=500){this._words=[],this._word="",this._isGameOver=!1,this.MAX_CHANCES=5,this._chancesPlayed=0,this.MAX_CHANCES=n}setSource(n){return t(this,void 0,void 0,(function*(){this._words=yield n.getWords(),this._word=this._words[Math.floor(Math.random()*this._words.length)],console.log(this._word)}))}isReadyWithFiveLetterWord(){return 5==this._word.length}verifyWord(n){if(5!==n.length||!this._words.includes(n))throw new Error("Invalid input");this._chancesPlayed++;let e=[],t=this._word;for(let r=0;r<n.length;r++){let a=t.indexOf(n[r]);n[r]===t[r]?(t=this.markCharMatched(t,r),e.push(2)):-1!==a?(t=this.markCharMatched(t,a),e.push(1)):e.push(0)}return this.checkGameStatus(e),e}markCharMatched(n,e){if(-1!==e){let t=n.split("");t.splice(e,1,"_"),n=t.join("")}return n}checkGameStatus(n){this._isGameOver=n.every((n=>2===n))||this._chancesPlayed>=this.MAX_CHANCES}isGameOver(){return this._isGameOver}}}},e={};function t(r){var a=e[r];if(void 0!==a)return a.exports;var s=e[r]={exports:{}};return n[r].call(s.exports,s,s.exports,t),s.exports}(()=>{const n=t(587),e=t(593),r=t(434);!function(){const t=document.getElementById("usrinp"),a=document.getElementById("slvbtn"),s=document.getElementById("otpt");if(t&&a&&s){const o=new r.Wordle;o.setSource(new e.Source).then((()=>{t.addEventListener("keyup",(function(n){13==n.keyCode&&l()})),t.focus()}));const i=new n.Solver;function l(){const n=o.verifyWord(t.value);var e;i.saveInfo(n),s&&(s.innerHTML=(e=t.value,n.map(((n,t)=>`<span style="color:${0==n?"grey":1==n?"yellow":"green"}">${e[t]}</span>`)).join("")+"<br>"+s.innerHTML)),o.isGameOver()?(t.disabled=!0,a.disabled=!0):t.value=""}i.setSource(new e.Source).then((()=>{a.addEventListener("click",(function n(){t&&(t.value=i.provideWord()),l(),o.isGameOver()||n()}))}))}}()})()})();
