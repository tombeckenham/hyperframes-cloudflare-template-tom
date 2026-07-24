"use strict";var HyperframesPlayer=(()=>{var C=Object.defineProperty;var B=Object.getOwnPropertyDescriptor;var G=Object.getOwnPropertyNames;var Y=Object.prototype.hasOwnProperty;var X=(a,e)=>{for(var t in e)C(a,t,{get:e[t],enumerable:!0})},Q=(a,e,t,r)=>{if(e&&typeof e=="object"||typeof e=="function")for(let i of G(e))!Y.call(a,i)&&i!==t&&C(a,i,{get:()=>e[i],enumerable:!(r=B(e,i))||r.enumerable});return a};var J=a=>Q(C({},"__esModule",{value:!0}),a);var ae={};X(ae,{HyperframesPlayer:()=>T,SPEED_PRESETS:()=>P,formatSpeed:()=>L,formatTime:()=>x});var A=`
  :host {
    display: block;
    position: relative;
    overflow: hidden;
    background: #000;
    contain: layout style;
  }

  .hfp-container {
    position: absolute;
    inset: 0;
    overflow: hidden;
    pointer-events: none;
  }


  .hfp-iframe {
    position: absolute;
    top: 50%;
    left: 50%;
    border: none;
    pointer-events: none;
  }

  .hfp-poster {
    position: absolute;
    inset: 0;
    object-fit: contain;
    z-index: 1;
    pointer-events: none;
  }

  .hfp-shader-loader {
    position: absolute;
    inset: 0;
    z-index: 20;
    display: grid;
    place-items: center;
    visibility: hidden;
    opacity: 0;
    pointer-events: none;
    background: #030504;
    color: #f4f7fb;
    cursor: default;
    user-select: none;
    -webkit-user-select: none;
    transition: opacity 420ms ease-out, visibility 420ms ease-out;
  }

  .hfp-shader-loader.hfp-visible,
  .hfp-shader-loader.hfp-hiding {
    visibility: visible;
  }

  .hfp-shader-loader.hfp-visible {
    opacity: 1;
    pointer-events: auto;
  }

  .hfp-shader-loader.hfp-hiding {
    opacity: 0;
    pointer-events: none;
  }

  .hfp-shader-loader-panel {
    display: grid;
    grid-template-rows: 86px 40px 26px 12px 44px;
    justify-items: center;
    align-items: center;
    gap: 8px;
    width: min(620px, 82%);
    text-align: center;
    font-family: Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  }

  .hfp-shader-loader-mark {
    width: 86px;
    height: 86px;
    display: grid;
    place-items: center;
    overflow: visible;
  }

  .hfp-shader-loader-mark svg {
    display: block;
    overflow: visible;
    filter: drop-shadow(0 0 5px rgba(79, 219, 94, 0.16));
    pointer-events: none;
  }

  .hfp-shader-loader-title {
    width: 100%;
    height: 40px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    font-size: 26px;
    line-height: 40px;
    font-weight: 700;
    letter-spacing: 0;
  }

  .hfp-shader-loader-title-text {
    color: transparent;
    background: linear-gradient(
      90deg,
      rgba(244, 247, 251, 0.84) 0%,
      #ffffff 42%,
      #80efe4 52%,
      #ffffff 62%,
      rgba(244, 247, 251, 0.84) 100%
    );
    background-size: 220% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    animation: hfp-shader-loader-sheen 1.9s linear infinite;
  }

  .hfp-shader-loader-detail {
    width: 100%;
    height: 26px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: rgba(244, 247, 251, 0.62);
    font-size: 15px;
    line-height: 26px;
    font-weight: 500;
  }

  .hfp-shader-loader-track {
    width: min(360px, 100%);
    height: 8px;
    overflow: hidden;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.1);
  }

  .hfp-shader-loader-fill {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background: linear-gradient(90deg, #06e3fa, #4fdb5e);
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 160ms ease;
  }

  .hfp-shader-loader-progress {
    width: min(420px, 100%);
    height: 44px;
    display: grid;
    grid-template-rows: repeat(2, 22px);
    color: rgba(244, 247, 251, 0.48);
    font: 600 13px/22px "IBM Plex Mono", "SF Mono", "Fira Code", "Courier New", monospace;
    font-variant-numeric: tabular-nums;
  }

  .hfp-shader-loader-row {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 74px;
    align-items: center;
    column-gap: 20px;
    width: 100%;
    white-space: nowrap;
  }

  .hfp-shader-loader-label {
    min-width: 0;
    overflow: hidden;
    text-align: left;
    text-overflow: ellipsis;
  }

  .hfp-shader-loader-value {
    text-align: right;
  }

  @keyframes hfp-shader-loader-sheen {
    from {
      background-position: 140% 0;
    }
    to {
      background-position: -140% 0;
    }
  }

  /* \u2500\u2500 Theming via CSS custom properties \u2500\u2500
   *
   * Override from outside the shadow DOM:
   *   hyperframes-player {
   *     --hfp-controls-bg: linear-gradient(transparent, rgba(0,0,0,0.9));
   *     --hfp-accent: #ff6b6b;
   *     --hfp-font: "Inter", sans-serif;
   *   }
   */

  .hfp-controls {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    align-items: center;
    gap: var(--hfp-controls-gap, 12px);
    padding: var(--hfp-controls-padding, 8px 16px);
    background: var(--hfp-controls-bg, linear-gradient(transparent, rgba(0, 0, 0, 0.7)));
    color: var(--hfp-color, #fff);
    font-family: var(--hfp-font, system-ui, -apple-system, sans-serif);
    font-size: var(--hfp-font-size, 13px);
    z-index: 10;
    pointer-events: auto;
    opacity: 1;
    transition: opacity 0.3s ease;
    user-select: none;
  }

  .hfp-controls.hfp-hidden {
    opacity: 0;
    pointer-events: none;
  }

  .hfp-play-btn {
    background: none;
    border: none;
    color: var(--hfp-color, #fff);
    cursor: pointer;
    padding: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    z-index: 10;
  }

  .hfp-play-btn:hover {
    opacity: 0.8;
  }

  .hfp-play-btn svg,
  .hfp-play-btn svg * {
    pointer-events: none;
  }

  .hfp-scrubber {
    flex: 1;
    height: var(--hfp-scrubber-height, 4px);
    background: var(--hfp-scrubber-bg, rgba(255, 255, 255, 0.3));
    border-radius: var(--hfp-scrubber-radius, 2px);
    cursor: pointer;
    position: relative;
  }

  .hfp-scrubber:hover {
    height: var(--hfp-scrubber-height-hover, 6px);
  }

  .hfp-progress {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    background: var(--hfp-accent, #fff);
    border-radius: var(--hfp-scrubber-radius, 2px);
    pointer-events: none;
  }

  .hfp-time {
    flex-shrink: 0;
    font-variant-numeric: tabular-nums;
    opacity: 0.9;
  }

  .hfp-speed-wrap {
    position: relative;
    flex-shrink: 0;
  }

  .hfp-speed-btn {
    background: var(--hfp-speed-btn-bg, rgba(255, 255, 255, 0.15));
    border: none;
    border-radius: var(--hfp-speed-btn-radius, 4px);
    color: var(--hfp-color, #fff);
    cursor: pointer;
    font-family: var(--hfp-font, system-ui, -apple-system, sans-serif);
    font-size: 12px;
    font-variant-numeric: tabular-nums;
    font-weight: 600;
    padding: 4px 8px;
    min-width: 40px;
    text-align: center;
    transition: background 0.15s ease;
  }

  .hfp-speed-btn:hover {
    background: var(--hfp-speed-btn-bg-hover, rgba(255, 255, 255, 0.3));
  }

  .hfp-speed-menu {
    position: absolute;
    bottom: calc(100% + 8px);
    right: 0;
    background: var(--hfp-menu-bg, rgba(20, 20, 20, 0.95));
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid var(--hfp-menu-border, rgba(255, 255, 255, 0.1));
    border-radius: var(--hfp-menu-radius, 8px);
    padding: 4px;
    display: flex;
    flex-direction: column;
    gap: 2px;
    min-width: 80px;
    opacity: 0;
    visibility: hidden;
    transform: translateY(4px);
    transition: opacity 0.15s ease, transform 0.15s ease, visibility 0.15s;
    box-shadow: var(--hfp-menu-shadow, 0 8px 24px rgba(0, 0, 0, 0.4));
  }

  .hfp-speed-menu.hfp-open {
    opacity: 1;
    visibility: visible;
    transform: translateY(0);
  }

  .hfp-speed-option {
    background: none;
    border: none;
    border-radius: 4px;
    color: var(--hfp-menu-color, rgba(255, 255, 255, 0.7));
    cursor: pointer;
    font-family: var(--hfp-font, system-ui, -apple-system, sans-serif);
    font-size: 13px;
    font-variant-numeric: tabular-nums;
    padding: 6px 12px;
    text-align: left;
    transition: background 0.1s ease, color 0.1s ease;
    white-space: nowrap;
  }

  .hfp-speed-option:hover {
    background: var(--hfp-menu-hover-bg, rgba(255, 255, 255, 0.1));
    color: var(--hfp-color, #fff);
  }

  .hfp-speed-option.hfp-active {
    color: var(--hfp-accent, #fff);
    font-weight: 600;
  }
`,k='<svg width="24" height="24" viewBox="0 0 18 18" fill="currentColor"><polygon points="4,2 16,9 4,16"/></svg>',$='<svg width="24" height="24" viewBox="0 0 18 18" fill="currentColor"><rect x="3" y="2" width="4" height="14"/><rect x="11" y="2" width="4" height="14"/></svg>';var P=[.25,.5,1,1.5,2,4];function L(a){return Number.isInteger(a)?`${a}x`:`${a}x`}function x(a){if(!Number.isFinite(a)||a<0)return"0:00";let e=Math.floor(a),t=Math.floor(e/60),r=e%60;return`${t}:${r.toString().padStart(2,"0")}`}function z(a,e,t={}){let r=t.speedPresets??P,i=document.createElement("div");i.className="hfp-controls",i.addEventListener("click",o=>{o.stopPropagation()});let n=document.createElement("button");n.className="hfp-play-btn",n.type="button",n.innerHTML=k,n.setAttribute("aria-label","Play");let s=document.createElement("div");s.className="hfp-scrubber";let d=document.createElement("div");d.className="hfp-progress",d.style.width="0%",s.appendChild(d);let c=document.createElement("span");c.className="hfp-time",c.textContent="0:00 / 0:00";let p=document.createElement("div");p.className="hfp-speed-wrap";let h=document.createElement("button");h.className="hfp-speed-btn",h.type="button",h.textContent="1x",h.setAttribute("aria-label","Playback speed");let u=document.createElement("div");u.className="hfp-speed-menu",u.setAttribute("role","menu");for(let o of r){let l=document.createElement("button");l.className="hfp-speed-option",l.type="button",l.setAttribute("role","menuitem"),l.dataset.speed=String(o),l.textContent=L(o),o===1&&l.classList.add("hfp-active"),u.appendChild(l)}p.appendChild(u),p.appendChild(h),i.appendChild(n),i.appendChild(s),i.appendChild(c),i.appendChild(p),a.appendChild(i);let m=!1,b=null,f=r.indexOf(1);f===-1&&(f=0),n.addEventListener("click",o=>{o.stopPropagation(),m?e.onPause():e.onPlay()});let g=o=>{for(let l of u.querySelectorAll(".hfp-speed-option"))l.classList.toggle("hfp-active",l.dataset.speed===String(o))};h.addEventListener("click",o=>{o.stopPropagation();let l=u.classList.toggle("hfp-open");h.setAttribute("aria-expanded",String(l))}),u.addEventListener("click",o=>{o.stopPropagation();let l=o.target.closest(".hfp-speed-option");if(!l)return;let _=parseFloat(l.dataset.speed);f=r.indexOf(_),h.textContent=L(_),g(_),u.classList.remove("hfp-open"),h.setAttribute("aria-expanded","false"),e.onSpeedChange(_)});let y=()=>{u.classList.remove("hfp-open"),h.setAttribute("aria-expanded","false")};document.addEventListener("click",y);let v=o=>{let l=s.getBoundingClientRect(),_=Math.max(0,Math.min(1,(o-l.left)/l.width));e.onSeek(_)},S=!1;s.addEventListener("mousedown",o=>{o.stopPropagation(),S=!0,v(o.clientX)});let H=o=>{S&&v(o.clientX)},O=()=>{S=!1};document.addEventListener("mousemove",H),document.addEventListener("mouseup",O),s.addEventListener("touchstart",o=>{S=!0;let l=o.touches[0];l&&v(l.clientX)},{passive:!0});let D=o=>{if(S){let l=o.touches[0];l&&v(l.clientX)}},N=()=>{S=!1};document.addEventListener("touchmove",D,{passive:!0}),document.addEventListener("touchend",N);let F=()=>{b&&clearTimeout(b),b=setTimeout(()=>{m&&i.classList.add("hfp-hidden")},3e3)},U=a instanceof ShadowRoot?a.host:a;return U.addEventListener("mousemove",()=>{i.classList.remove("hfp-hidden"),F()}),U.addEventListener("mouseleave",()=>{m&&i.classList.add("hfp-hidden")}),{updateTime(o,l){let _=l>0?o/l*100:0;d.style.width=`${_}%`,c.textContent=`${x(o)} / ${x(l)}`},updatePlaying(o){m=o,n.innerHTML=o?$:k,n.setAttribute("aria-label",o?"Pause":"Play"),o?F():i.classList.remove("hfp-hidden")},updateSpeed(o){let l=r.indexOf(o);l!==-1&&(f=l),h.textContent=L(o),g(o)},show(){i.style.display=""},hide(){i.style.display="none"},destroy(){document.removeEventListener("mousemove",H),document.removeEventListener("mouseup",O),document.removeEventListener("touchmove",D),document.removeEventListener("touchend",N),document.removeEventListener("click",y),b&&clearTimeout(b)}}}function j(a){return a.hasRuntime||a.runtimeInjected?!1:!!(a.hasNestedCompositions||a.hasTimelines&&a.attempts>=5)}var R=null;function Z(){if(R)return R;if(typeof CSSStyleSheet>"u")return null;try{let a=new CSSStyleSheet;return a.replaceSync(A),R=a,a}catch{return null}}var I=30,K="https://cdn.jsdelivr.net/npm/@hyperframes/core/dist/hyperframe.runtime.iife.js",w="shader-capture-scale",E="shader-loading",ee="__hf_shader_capture_scale",te="__hf_shader_loading",M=["Preparing scene transitions","Sampling outgoing scene motion","Sampling incoming scene motion","Caching transition frames","Finalizing transition preview"];function V(a){if(a===null)return null;let e=Number(a);return!Number.isFinite(e)||e<=0?null:String(Math.min(1,Math.max(.25,e)))}function q(a){if(a===null||a.trim()==="")return"composition";let e=a.trim().toLowerCase();return e==="none"||e==="false"||e==="0"||e==="off"?"none":e==="player"||e==="true"||e==="1"||e==="on"?"player":"composition"}function W(a,e,t){t===null?a.delete(e):a.set(e,t)}function re(a,e,t){let r=a.indexOf("#"),i=r>=0?a.slice(0,r):a,n=r>=0?a.slice(r):"",s=i.indexOf("?"),d=s>=0?i.slice(0,s):i,c=s>=0?i.slice(s+1):"",p=new URLSearchParams(c);W(p,ee,e),W(p,te,t==="composition"?null:t);let h=p.toString();return`${d}${h?`?${h}`:""}${n}`}function ie(a,e,t){if(e===null&&t==="composition")return a;let r=[];e!==null&&r.push(`window.__HF_SHADER_CAPTURE_SCALE=${JSON.stringify(e)};`),t!=="composition"&&r.push(`window.__HF_SHADER_LOADING=${JSON.stringify(t)};`);let i=`<script data-hyperframes-player-shader-options>${r.join("")}</script>`;return/<head\b[^>]*>/i.test(a)?a.replace(/<head\b[^>]*>/i,n=>`${n}${i}`):/<html\b[^>]*>/i.test(a)?a.replace(/<html\b[^>]*>/i,n=>`${n}${i}`):`${i}${a}`}var T=class a extends HTMLElement{static get observedAttributes(){return["src","srcdoc","width","height","controls","muted","poster","playback-rate","audio-src",w,E]}shadow;container;iframe;posterEl=null;controlsApi=null;resizeObserver;shaderLoaderEl;shaderLoaderFillEl;shaderLoaderTitleEl;shaderLoaderDetailEl;shaderLoaderTransitionValueEl;shaderLoaderFrameLabelEl;shaderLoaderFrameValueEl;shaderLoaderFrameRowEl;shaderLoaderHideTimeout=null;_ready=!1;_duration=0;_currentTime=0;_paused=!0;_compositionWidth=1920;_compositionHeight=1080;_probeInterval=null;_lastUpdateMs=0;_parentMedia=[];_audioOwner="runtime";_mediaObserver;_playbackErrorPosted=!1;constructor(){super(),this.shadow=this.attachShadow({mode:"open"});let e=Z();if(e)this.shadow.adoptedStyleSheets=[e];else{let r=document.createElement("style");r.textContent=A,this.shadow.appendChild(r)}this.container=document.createElement("div"),this.container.className="hfp-container",this.iframe=document.createElement("iframe"),this.iframe.className="hfp-iframe",this.iframe.sandbox.add("allow-scripts","allow-same-origin"),this.iframe.allow="autoplay; fullscreen",this.iframe.referrerPolicy="no-referrer",this.iframe.title="HyperFrames Composition",this.container.appendChild(this.iframe),this.shadow.appendChild(this.container);let t=this._createShaderLoader();this.shaderLoaderEl=t.root,this.shaderLoaderFillEl=t.fill,this.shaderLoaderTitleEl=t.title,this.shaderLoaderDetailEl=t.detail,this.shaderLoaderTransitionValueEl=t.transitionValue,this.shaderLoaderFrameLabelEl=t.frameLabel,this.shaderLoaderFrameValueEl=t.frameValue,this.shaderLoaderFrameRowEl=t.frameRow,this.shadow.appendChild(this.shaderLoaderEl),this.addEventListener("click",r=>{this._isControlsClick(r)||(this._paused?this.play():this.pause())}),this.resizeObserver=new ResizeObserver(()=>this._updateScale()),this._onMessage=this._onMessage.bind(this),this._onIframeLoad=this._onIframeLoad.bind(this)}connectedCallback(){this.resizeObserver.observe(this),window.addEventListener("message",this._onMessage),this.iframe.addEventListener("load",this._onIframeLoad),this.hasAttribute("controls")&&this._setupControls(),this.hasAttribute("poster")&&this._setupPoster(),this.hasAttribute("audio-src")&&this._setupParentAudioFromUrl(this.getAttribute("audio-src")),this.hasAttribute("srcdoc")&&(this.iframe.srcdoc=this._prepareSrcdoc(this.getAttribute("srcdoc"))),this.hasAttribute("src")&&(this.iframe.src=this._prepareSrc(this.getAttribute("src")))}disconnectedCallback(){this.resizeObserver.disconnect(),window.removeEventListener("message",this._onMessage),this.iframe.removeEventListener("load",this._onIframeLoad),this._probeInterval&&clearInterval(this._probeInterval),this.shaderLoaderHideTimeout&&clearTimeout(this.shaderLoaderHideTimeout),this.shaderLoaderHideTimeout=null,this._teardownMediaObserver(),this.controlsApi?.destroy();for(let e of this._parentMedia)e.el.pause(),e.el.src="";this._parentMedia=[]}attributeChangedCallback(e,t,r){switch(e){case"src":r&&(this._ready=!1,this.iframe.src=this._prepareSrc(r));break;case"srcdoc":this._ready=!1,r!==null?this.iframe.srcdoc=this._prepareSrcdoc(r):this.iframe.removeAttribute("srcdoc");break;case"width":this._compositionWidth=parseInt(r||"1920",10),this._updateScale();break;case"height":this._compositionHeight=parseInt(r||"1080",10),this._updateScale();break;case"controls":r!==null?this._setupControls():(this.controlsApi?.destroy(),this.controlsApi=null);break;case"poster":this._setupPoster();break;case"playback-rate":{let i=parseFloat(r||"1");for(let n of this._parentMedia)n.el.playbackRate=i;this._sendControl("set-playback-rate",{playbackRate:i}),this.controlsApi?.updateSpeed(i),this.dispatchEvent(new Event("ratechange"));break}case"muted":for(let i of this._parentMedia)i.el.muted=r!==null;this._sendControl("set-muted",{muted:r!==null});break;case"audio-src":r&&this._setupParentAudioFromUrl(r);break;case w:case E:this._reloadShaderOptions();break}}get iframeElement(){return this.iframe}play(){this._hidePoster(),this._duration>0&&this._currentTime>=this._duration&&this.seek(0),this._sendControl("play"),this._audioOwner==="parent"&&this._playParentMedia(),this._paused=!1,this.controlsApi?.updatePlaying(!0),this.dispatchEvent(new Event("play"))}pause(){this._sendControl("pause"),this._audioOwner==="parent"&&this._pauseParentMedia(),this._paused=!0,this.controlsApi?.updatePlaying(!1),this.dispatchEvent(new Event("pause"))}seek(e){if(!this._trySyncSeek(e)){let t=Math.round(e*I);this._sendControl("seek",{frame:t})}if(this._currentTime=e,this._audioOwner==="parent")for(let t of this._parentMedia){let r=e-t.start;r>=0&&r<t.duration&&(t.el.currentTime=r)}this._paused=!0,this.controlsApi?.updatePlaying(!1),this.controlsApi?.updateTime(this._currentTime,this._duration)}get currentTime(){return this._currentTime}set currentTime(e){this.seek(e)}get duration(){return this._duration}get paused(){return this._paused}get ready(){return this._ready}get playbackRate(){return parseFloat(this.getAttribute("playback-rate")||"1")}set playbackRate(e){this.setAttribute("playback-rate",String(e))}get shaderCaptureScale(){return Number(V(this.getAttribute(w))??"1")}set shaderCaptureScale(e){this.setAttribute(w,String(e))}get shaderLoading(){return q(this.getAttribute(E))}set shaderLoading(e){e==="composition"?this.removeAttribute(E):this.setAttribute(E,e)}get muted(){return this.hasAttribute("muted")}set muted(e){e?this.setAttribute("muted",""):this.removeAttribute("muted")}get loop(){return this.hasAttribute("loop")}set loop(e){e?this.setAttribute("loop",""):this.removeAttribute("loop")}_sendControl(e,t={}){try{this.iframe.contentWindow?.postMessage({source:"hf-parent",type:"control",action:e,...t},"*")}catch{}}_shaderCaptureScaleParam(){return V(this.getAttribute(w))}_shaderLoadingMode(){return q(this.getAttribute(E))}_prepareSrc(e){return re(e,this._shaderCaptureScaleParam(),this._shaderLoadingMode())}_prepareSrcdoc(e){return ie(e,this._shaderCaptureScaleParam(),this._shaderLoadingMode())}_reloadShaderOptions(){if(this._shaderLoadingMode()!=="player"&&this._resetShaderLoader(),this.hasAttribute("srcdoc")){this.iframe.srcdoc=this._prepareSrcdoc(this.getAttribute("srcdoc")||"");return}this.hasAttribute("src")&&(this.iframe.src=this._prepareSrc(this.getAttribute("src")||""))}_createShaderLoader(){let e=document.createElement("div");e.className="hfp-shader-loader",e.setAttribute("role","status"),e.setAttribute("aria-live","polite"),e.setAttribute("aria-label","Preparing scene transitions"),e.setAttribute("data-hyperframes-ignore",""),e.draggable=!1;let t=f=>{f.preventDefault(),f.stopPropagation()};for(let f of["selectstart","dragstart","pointerdown","mousedown","click","dblclick","contextmenu","touchstart"])e.addEventListener(f,t,{capture:!0});let r=document.createElement("div");r.className="hfp-shader-loader-panel",r.draggable=!1;let i=document.createElement("div");i.className="hfp-shader-loader-mark",i.draggable=!1,i.innerHTML=['<svg width="78" height="78" viewBox="0 0 100 100" fill="none" aria-hidden="true" draggable="false">','<path d="M10.1851 57.8021L33.1145 73.8313C36.2202 75.9978 41.5173 73.5433 42.4816 69.4984L51.7611 30.4271C52.7253 26.3822 48.5802 23.9277 44.4602 26.0942L13.917 42.1235C6.96677 45.7676 4.97564 54.1579 10.1851 57.8021Z" fill="url(#hfp-shader-loader-grad-left)"/>','<path d="M87.5129 57.5141L56.9696 73.5433C52.8371 75.7098 48.7046 73.2553 49.6688 69.2104L58.9483 30.1391C59.9125 26.0942 65.2097 23.6397 68.3154 25.8062L91.2447 41.8354C96.4668 45.4796 94.4631 53.8699 87.5129 57.5141Z" fill="url(#hfp-shader-loader-grad-right)"/>',"<defs>",'<linearGradient id="hfp-shader-loader-grad-left" x1="48.5676" y1="25" x2="44.7804" y2="71.9384" gradientUnits="userSpaceOnUse">','<stop stop-color="#06E3FA"/>','<stop offset="1" stop-color="#4FDB5E"/>',"</linearGradient>",'<linearGradient id="hfp-shader-loader-grad-right" x1="54.8282" y1="73.8392" x2="72.0989" y2="32.8932" gradientUnits="userSpaceOnUse">','<stop stop-color="#06E3FA"/>','<stop offset="1" stop-color="#4FDB5E"/>',"</linearGradient>","</defs>","</svg>"].join("");let n=document.createElement("div");n.className="hfp-shader-loader-title";let s=document.createElement("span");s.className="hfp-shader-loader-title-text",s.textContent=M[0]||"Preparing scene transitions",n.appendChild(s);let d=document.createElement("div");d.className="hfp-shader-loader-detail",d.textContent="Rendering animated scene samples for shader transitions.";let c=document.createElement("div");c.className="hfp-shader-loader-track",c.setAttribute("aria-hidden","true");let p=document.createElement("div");p.className="hfp-shader-loader-fill",c.appendChild(p);let h=document.createElement("div");h.className="hfp-shader-loader-progress";let u=f=>{let g=document.createElement("div");g.className="hfp-shader-loader-row";let y=document.createElement("span");y.className="hfp-shader-loader-label",y.textContent=f;let v=document.createElement("span");return v.className="hfp-shader-loader-value",g.appendChild(y),g.appendChild(v),h.appendChild(g),{row:g,label:y,value:v}},m=u("transition"),b=u("transition frame");return r.appendChild(i),r.appendChild(n),r.appendChild(d),r.appendChild(c),r.appendChild(h),e.appendChild(r),{root:e,fill:p,title:s,detail:d,transitionValue:m.value,frameLabel:b.label,frameValue:b.value,frameRow:b.row}}_showShaderLoader(){this.shaderLoaderHideTimeout&&(clearTimeout(this.shaderLoaderHideTimeout),this.shaderLoaderHideTimeout=null),this.shaderLoaderEl.classList.remove("hfp-hiding"),this.shaderLoaderEl.classList.add("hfp-visible")}_hideShaderLoader(){if(this.shaderLoaderEl.classList.contains("hfp-hiding")){this.shaderLoaderHideTimeout||this._scheduleShaderLoaderHideCleanup();return}this.shaderLoaderEl.classList.contains("hfp-visible")&&(this.shaderLoaderEl.classList.add("hfp-hiding"),this.shaderLoaderEl.classList.remove("hfp-visible"),this._scheduleShaderLoaderHideCleanup())}_scheduleShaderLoaderHideCleanup(){this.shaderLoaderHideTimeout&&clearTimeout(this.shaderLoaderHideTimeout),this.shaderLoaderHideTimeout=setTimeout(()=>{this.shaderLoaderEl.classList.remove("hfp-hiding"),this.shaderLoaderHideTimeout=null},420)}_resetShaderLoader(){this.shaderLoaderHideTimeout&&(clearTimeout(this.shaderLoaderHideTimeout),this.shaderLoaderHideTimeout=null),this.shaderLoaderEl.classList.remove("hfp-visible","hfp-hiding"),this.shaderLoaderFillEl.style.transform="scaleX(0)",this.shaderLoaderTransitionValueEl.textContent="",this.shaderLoaderFrameValueEl.textContent="",this.shaderLoaderFrameRowEl.style.visibility="hidden"}_updateShaderLoader(e){if(this._shaderLoadingMode()!=="player"){this._resetShaderLoader();return}if(e.ready||!e.loading){this._hideShaderLoader();return}let t=typeof e.progress=="number"&&Number.isFinite(e.progress)?e.progress:0,r=typeof e.total=="number"&&Number.isFinite(e.total)?e.total:0,i=r>0?Math.min(1,Math.max(0,t/r)):0,n=Math.min(M.length-1,Math.floor(i*M.length));this.shaderLoaderTitleEl.textContent=M[n]||"Preparing scene transitions",this.shaderLoaderDetailEl.textContent=e.phase==="cached"?"Loading cached transition frames before playback.":e.phase==="finalizing"?"Uploading transition textures for smooth playback.":"Rendering animated scene samples for shader transitions.",this.shaderLoaderFillEl.style.transform=`scaleX(${i})`,this.shaderLoaderTransitionValueEl.textContent=e.currentTransition!==void 0&&e.transitionTotal!==void 0?`${e.currentTransition}/${e.transitionTotal}`:r>0?`${t}/${r}`:"";let s=e.transitionFrame!==void 0&&e.transitionFrames!==void 0?`${e.transitionFrame}/${e.transitionFrames}`:"";this.shaderLoaderFrameLabelEl.textContent=e.phase==="cached"?"cached transition frames":e.phase==="finalizing"?"finalizing transition frames":"rendering transition frames",this.shaderLoaderFrameValueEl.textContent=s,this.shaderLoaderFrameRowEl.style.visibility=s?"visible":"hidden",this.shaderLoaderEl.setAttribute("aria-valuenow",String(Math.round(i*100))),this._showShaderLoader()}_trySyncSeek(e){try{let r=this.iframe.contentWindow?.__player,i=r?.seek;return typeof i!="function"?!1:(i.call(r,e),!0)}catch{return!1}}_isControlsClick(e){return e.composedPath().some(t=>t instanceof HTMLElement&&t.classList.contains("hfp-controls"))}_onMessage(e){if(e.source!==this.iframe.contentWindow)return;let t=e.data;if(!(!t||t.source!=="hf-preview")){if(t.type==="shader-transition-state"){let r=t.state&&typeof t.state=="object"?t.state:{};this._updateShaderLoader(r),this.dispatchEvent(new CustomEvent("shadertransitionstate",{detail:{compositionId:t.compositionId,state:r}}));return}if(t.type==="state"){this._currentTime=(t.frame??0)/I;let r=!this._paused,i=!t.isPlaying,n=this._duration>0&&this._currentTime>=this._duration&&(r||t.isPlaying);if(n&&this.loop){this._audioOwner==="parent"&&this._pauseParentMedia(),this._paused=i,this.seek(0),this.play();return}this._paused=i,this._audioOwner==="parent"&&(r&&this._paused?this._pauseParentMedia():!r&&!this._paused&&this._playParentMedia(),this._mirrorParentMediaTime(this._currentTime));let s=performance.now();(s-this._lastUpdateMs>100||this._paused!==r)&&(this._lastUpdateMs=s,this.controlsApi?.updateTime(this._currentTime,this._duration),this.controlsApi?.updatePlaying(!this._paused),this.dispatchEvent(new CustomEvent("timeupdate",{detail:{currentTime:this._currentTime}}))),n&&(this._audioOwner==="parent"&&this._pauseParentMedia(),this._paused=!0,this.controlsApi?.updatePlaying(!1),this.dispatchEvent(new Event("ended")))}t.type==="media-autoplay-blocked"&&this._promoteToParentProxy(),t.type==="timeline"&&t.durationInFrames>0&&Number.isFinite(t.durationInFrames)&&(this._duration=t.durationInFrames/I,this.controlsApi?.updateTime(this._currentTime,this._duration)),t.type==="stage-size"&&t.width>0&&t.height>0&&(this._compositionWidth=t.width,this._compositionHeight=t.height,this._updateScale())}}_runtimeInjected=!1;_onIframeLoad(){let e=0;this._runtimeInjected=!1,this._resetShaderLoader();let t=this._audioOwner==="parent";this._audioOwner="runtime",this._playbackErrorPosted=!1,this._pauseParentMedia(),this._teardownMediaObserver(),t&&this.dispatchEvent(new CustomEvent("audioownershipchange",{detail:{owner:"runtime",reason:"iframe-reload"}})),this._probeInterval&&clearInterval(this._probeInterval),this._probeInterval=setInterval(()=>{e++;try{let r=this.iframe.contentWindow;if(!r)return;let i=!!(r.__hf||r.__player),n=!!(r.__timelines&&Object.keys(r.__timelines).length>0),s=!!this.iframe.contentDocument?.querySelector("[data-composition-src]");if(j({hasRuntime:i,hasTimelines:n,hasNestedCompositions:s,runtimeInjected:this._runtimeInjected,attempts:e})){this._injectRuntime();return}if(this._runtimeInjected&&!i)return;let c=(()=>{if(r.__player&&typeof r.__player.getDuration=="function")return r.__player;if(r.__timelines){let p=Object.keys(r.__timelines);if(p.length>0){let h=this.iframe.contentDocument?.querySelector("[data-composition-id]")?.getAttribute("data-composition-id"),u=h&&h in r.__timelines?h:p[p.length-1],m=r.__timelines[u];return{getDuration:()=>m.duration()}}}return null})();if(c&&c.getDuration()>0){clearInterval(this._probeInterval),this._duration=c.getDuration(),this._ready=!0,this.controlsApi?.updateTime(0,this._duration),this.dispatchEvent(new CustomEvent("ready",{detail:{duration:this._duration}}));let h=this.iframe.contentDocument?.querySelector("[data-composition-id]");if(h){let u=parseInt(h.getAttribute("data-width")||"0",10),m=parseInt(h.getAttribute("data-height")||"0",10);u>0&&m>0&&(this._compositionWidth=u,this._compositionHeight=m,this._updateScale())}this._setupParentMedia(),this.hasAttribute("autoplay")&&this.play();return}}catch{}e>=40&&(clearInterval(this._probeInterval),this.dispatchEvent(new CustomEvent("error",{detail:{message:"Composition timeline not found after 8s"}})))},200)}_injectRuntime(){this._runtimeInjected=!0;try{let e=this.iframe.contentDocument;if(!e)return;let t=e.createElement("script");t.src=K,t.onload=()=>{},t.onerror=()=>{},(e.head||e.documentElement).appendChild(t)}catch{}}_updateScale(){let e=this.getBoundingClientRect();if(e.width===0||e.height===0)return;let t=Math.min(e.width/this._compositionWidth,e.height/this._compositionHeight);this.iframe.style.width=`${this._compositionWidth}px`,this.iframe.style.height=`${this._compositionHeight}px`,this.iframe.style.transform=`translate(-50%, -50%) scale(${t})`}_setupControls(){if(this.controlsApi)return;let e={onPlay:()=>this.play(),onPause:()=>this.pause(),onSeek:i=>this.seek(i*this._duration),onSpeedChange:i=>{this.playbackRate=i}},t=this.getAttribute("speed-presets"),r=t?t.split(",").map(Number).filter(i=>!isNaN(i)&&i>0):void 0;this.controlsApi=z(this.shadow,e,{speedPresets:r})}_setupPoster(){let e=this.getAttribute("poster");if(!e){this.posterEl?.remove(),this.posterEl=null;return}this.posterEl||(this.posterEl=document.createElement("img"),this.posterEl.className="hfp-poster",this.shadow.appendChild(this.posterEl)),this.posterEl.src=e}_playParentMedia(){for(let e of this._parentMedia)e.el.src&&e.el.play().catch(t=>this._reportPlaybackError(t))}_reportPlaybackError(e){this._playbackErrorPosted||(this._playbackErrorPosted=!0,this.dispatchEvent(new CustomEvent("playbackerror",{detail:{source:"parent-proxy",error:e}})))}_pauseParentMedia(){for(let e of this._parentMedia)e.el.pause()}static MIRROR_DRIFT_THRESHOLD_SECONDS=.05;static MIRROR_REQUIRED_CONSECUTIVE_DRIFT_SAMPLES=2;_mirrorParentMediaTime(e,t){let r=t?.force===!0,i=a.MIRROR_REQUIRED_CONSECUTIVE_DRIFT_SAMPLES,n=a.MIRROR_DRIFT_THRESHOLD_SECONDS;for(let s of this._parentMedia){let d=e-s.start;if(d<0||d>=s.duration){s.driftSamples=0;continue}Math.abs(s.el.currentTime-d)>n?(s.driftSamples+=1,(r||s.driftSamples>=i)&&(s.el.currentTime=d,s.driftSamples=0)):s.driftSamples=0}}_promoteToParentProxy(){this._audioOwner!=="parent"&&(this._audioOwner="parent",this._sendControl("set-media-output-muted",{muted:!0}),this._mirrorParentMediaTime(this._currentTime,{force:!0}),this._paused||this._playParentMedia(),this.dispatchEvent(new CustomEvent("audioownershipchange",{detail:{owner:"parent",reason:"autoplay-blocked"}})))}_createParentMedia(e,t,r,i){if(this._parentMedia.some(d=>d.el.src===e))return null;let n=t==="video"?document.createElement("video"):new Audio;n.preload="auto",n.src=e,n.load(),n.muted=this.muted,this.playbackRate!==1&&(n.playbackRate=this.playbackRate);let s={el:n,start:r,duration:i,driftSamples:0};return this._parentMedia.push(s),s}_setupParentAudioFromUrl(e){this._createParentMedia(e,"audio",0,1/0)}_setupParentMedia(){try{let e=this.iframe.contentDocument;if(!e)return;let t=e.querySelectorAll("audio[data-start], video[data-start]");for(let r of t)this._adoptIframeMedia(r);this._observeDynamicMedia(e)}catch{}}_adoptIframeMedia(e){let t=e.getAttribute("src")||e.querySelector("source")?.getAttribute("src");if(!t)return;let r=new URL(t,e.ownerDocument.baseURI).href,i=parseFloat(e.getAttribute("data-start")||"0"),n=parseFloat(e.getAttribute("data-duration")||"Infinity"),s=e.tagName==="VIDEO"?"video":"audio",d=this._createParentMedia(r,s,i,n);d&&this._audioOwner==="parent"&&(this._mirrorParentMediaTime(this._currentTime,{force:!0}),!this._paused&&d.el.src&&d.el.play().catch(c=>this._reportPlaybackError(c)))}_observeDynamicMedia(e){if(this._teardownMediaObserver(),typeof MutationObserver>"u"||!e.body)return;let t=new MutationObserver(i=>{for(let n of i){for(let s of n.addedNodes){if(!(s instanceof Element))continue;let d=[];s.matches?.("audio[data-start], video[data-start]")&&d.push(s);let c=s.querySelectorAll?.("audio[data-start], video[data-start]");if(c)for(let p of c)d.push(p);for(let p of d)this._adoptIframeMedia(p)}for(let s of n.removedNodes){if(!(s instanceof Element))continue;let d=[];s.matches?.("audio[data-start], video[data-start]")&&d.push(s);let c=s.querySelectorAll?.("audio[data-start], video[data-start]");if(c)for(let p of c)d.push(p);for(let p of d)this._detachIframeMedia(p)}}}),r=e.querySelectorAll("[data-composition-id]");if(r.length>0)for(let i of r)t.observe(i,{childList:!0,subtree:!0});else t.observe(e.body,{childList:!0,subtree:!0});this._mediaObserver=t}_teardownMediaObserver(){this._mediaObserver?.disconnect(),this._mediaObserver=void 0}_detachIframeMedia(e){let t=e.getAttribute("src")||e.querySelector("source")?.getAttribute("src");if(!t)return;let r=new URL(t,e.ownerDocument.baseURI).href,i=this._parentMedia.findIndex(s=>s.el.src===r);if(i===-1)return;let n=this._parentMedia[i];n.el.pause(),n.el.src="",this._parentMedia.splice(i,1)}_hidePoster(){this.posterEl?.remove(),this.posterEl=null}};customElements.get("hyperframes-player")||customElements.define("hyperframes-player",T);return J(ae);})();
//# sourceMappingURL=hyperframes-player.global.js.map