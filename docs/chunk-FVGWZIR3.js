import{c as i}from"./chunk-HWCR5HWZ.js";import{b as a,f as r,g as s,j as n}from"./chunk-ICJQ63PU.js";import"./chunk-RW4GY4BD.js";var e=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",c=e,p=":host{left:0;right:0;top:0;bottom:0;display:block;position:absolute;-webkit-transform:translateZ(0);transform:translateZ(0);contain:strict;cursor:pointer;opacity:0.01;-ms-touch-action:none;touch-action:none;z-index:2}:host(.backdrop-hide){background:transparent}:host(.backdrop-no-tappable){cursor:auto}:host{background-color:var(--ion-backdrop-color, #000)}",d=p,l=(()=>{let t=class{constructor(o){a(this,o),this.ionBackdropTap=n(this,"ionBackdropTap",7),this.visible=!0,this.tappable=!0,this.stopPropagation=!0}onMouseDown(o){this.emitTap(o)}emitTap(o){this.stopPropagation&&(o.preventDefault(),o.stopPropagation()),this.tappable&&this.ionBackdropTap.emit()}render(){let o=i(this);return r(s,{key:"7abaf2c310aa399607451b14063265e8a5846938","aria-hidden":"true",class:{[o]:!0,"backdrop-hide":!this.visible,"backdrop-no-tappable":!this.tappable}})}};return t.style={ios:c,md:d},t})();export{l as ion_backdrop};
