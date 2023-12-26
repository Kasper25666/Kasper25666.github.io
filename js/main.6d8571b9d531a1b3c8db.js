(()=>{"use strict";var e,t={3004:(e,t,n)=>{n.r(t)},9299:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const r=n(5893),o=(i(n(7294)),n(745)),s=n(2976);(0,o.createRoot)(document.getElementById("root")).render((0,r.jsx)(s.App,{}))},3373:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(r,o){function s(e){try{u(i.next(e))}catch(e){o(e)}}function a(e){try{u(i.throw(e))}catch(e){o(e)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(s,a)}u((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0});const r=n(1227);n(5996);const o=n(3509);t.default=class{constructor(e){this._canvas=e,this._engine=new r.Engine(this._canvas,!0,{limitDeviceRatio:2},!0),this._engine.displayLoadingUI(),window.addEventListener("resize",(()=>{this._engine.resize()})),this.createScene()}createScene(){return i(this,void 0,void 0,(function*(){this._scene=new o.MainScene(this._engine),yield this._scene.run(),yield this.startGame()}))}startGame(){return i(this,void 0,void 0,(function*(){this._engine.runRenderLoop((()=>this._scene.render())),this._engine.hideLoadingUI(),window.onbeforeunload=()=>!0,this._engine.hideLoadingUI()}))}}},3509:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MainScene=void 0;const i=n(1227);class r extends i.Scene{constructor(e){super(e),this._canvas=e.getRenderingCanvas(),this.skipFrustumClipping=!0,this.useRightHandedSystem=!0}run(){i.SceneLoader.Append("assets/","Babylon_glb_allOff.glb",this),this.createDefaultCameraOrLight(!0,!0,!0)}}t.MainScene=r},2976:function(e,t,n){var i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const r=n(5893),o=(i(n(7294)),i(n(7606)));t.App=function(){return(0,r.jsxs)("main",{children:[(0,r.jsx)(o.default,{}),(0,r.jsxs)("div",Object.assign({id:"stats"},{children:[(0,r.jsx)("div",Object.assign({id:"fps"},{children:"0"})),(0,r.jsx)("div",Object.assign({id:"drawCalls"},{children:"0"}))]}))]})}},7606:function(e,t,n){var i=this&&this.__createBinding||(Object.create?function(e,t,n,i){void 0===i&&(i=n);var r=Object.getOwnPropertyDescriptor(t,n);r&&!("get"in r?!t.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,i,r)}:function(e,t,n,i){void 0===i&&(i=n),e[i]=t[n]}),r=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.prototype.hasOwnProperty.call(e,n)&&i(t,e,n);return r(t,e),t},s=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});const a=n(5893),u=o(n(7294)),c=s(n(3373));n(3004),t.default=function(){const e=(0,u.useRef)(null);return(0,u.useEffect)((()=>{const{current:t}=e;t&&new c.default(t)}),[]),(0,a.jsx)("canvas",{ref:e})}}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var o=n[e]={exports:{}};return t[e].call(o.exports,o,o.exports,i),o.exports}i.m=t,e=[],i.O=(t,n,r,o)=>{if(!n){var s=1/0;for(l=0;l<e.length;l++){for(var[n,r,o]=e[l],a=!0,u=0;u<n.length;u++)(!1&o||s>=o)&&Object.keys(i.O).every((e=>i.O[e](n[u])))?n.splice(u--,1):(a=!1,o<s&&(s=o));if(a){e.splice(l--,1);var c=r();void 0!==c&&(t=c)}}return t}o=o||0;for(var l=e.length;l>0&&e[l-1][2]>o;l--)e[l]=e[l-1];e[l]=[n,r,o]},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var r,o,[s,a,u]=n,c=0;if(s.some((t=>0!==e[t]))){for(r in a)i.o(a,r)&&(i.m[r]=a[r]);if(u)var l=u(i)}for(t&&t(n);c<s.length;c++)o=s[c],i.o(e,o)&&e[o]&&e[o][0](),e[o]=0;return i.O(l)},n=self.webpackChunkmusic_store=self.webpackChunkmusic_store||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=i.O(void 0,[216],(()=>i(9299)));r=i.O(r)})();