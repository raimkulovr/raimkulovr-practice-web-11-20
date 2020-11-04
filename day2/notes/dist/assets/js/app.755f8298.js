(function(e){function t(t){for(var o,i,a=t[0],c=t[1],l=t[2],d=0,p=[];d<a.length;d++)i=a[d],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&p.push(r[i][0]),r[i]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(e[o]=c[o]);u&&u(t);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,a=1;a<n.length;a++){var c=n[a];0!==r[c]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={app:0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],c=a.push.bind(a);a.push=t,a=a.slice();for(var l=0;l<a.length;l++)t(a[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0f21":function(e,t,n){},"10b1":function(e,t,n){"use strict";n("0f21")},"28c1":function(e,t,n){},"546f":function(e,t,n){"use strict";n("a28c")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var o=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"wrapper"},[n("div",{staticClass:"wrapper-content"},[n("section",[n("div",{staticClass:"container"},[n("h1",[e._v(e._s(e.title))]),e.message?n("message",{attrs:{message:e.message}}):e._e(),n("newNote",{attrs:{note:e.note},on:{addNote:e.addNote}}),n("notes",{attrs:{notes:e.notes},on:{remove:e.removeNote}})],1)])])])},s=[],i=(n("a434"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"message"},[n("p",[e._v(e._s(e.message))])])}),a=[],c={props:{message:{type:String,required:!0}}},l=c,u=(n("666e"),n("2877")),d=Object(u["a"])(l,i,a,!1,null,"117e464e",null),p=d.exports,f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"new-note"},[n("label",[e._v("Title")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.note.title,expression:"note.title"}],attrs:{type:"text"},domProps:{value:e.note.title},on:{input:function(t){t.target.composing||e.$set(e.note,"title",t.target.value)}}}),n("label",[e._v("Description")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:e.note.descr,expression:"note.descr"}],domProps:{value:e.note.descr},on:{input:function(t){t.target.composing||e.$set(e.note,"descr",t.target.value)}}}),n("button",{staticClass:"btn btnPrimary newNoteButton",on:{click:e.addNote}},[e._v("New note")])])},v=[],m={props:{note:{type:Object,required:!0}},methods:{addNote:function(){this.$emit("addNote",this.note)}}},h=m,g=(n("546f"),Object(u["a"])(h,f,v,!1,null,null,null)),b=g.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"notes"},e._l(e.notes,(function(t,o){return n("div",{key:o,staticClass:"note"},[n("div",{staticClass:"note-header"},[n("p",[e._v(e._s(t.title))]),n("p",{staticStyle:{cursor:"pointer"},on:{click:function(t){return e.removeNote(o)}}},[e._v("x")])]),n("div",{staticClass:"note-body"},[n("p",[e._v(e._s(t.descr))]),n("span",[e._v(e._s(t.date))])])])})),0)},w=[],y={props:{notes:{type:Array,required:!0}},methods:{removeNote:function(e){console.log("Note id - ".concat(e," removed")),this.$emit("remove",e)}}},N=y,O=(n("10b1"),Object(u["a"])(N,_,w,!1,null,null,null)),x=O.exports,j={components:{message:p,newNote:b,notes:x},data:function(){return{title:"Notes App",message:null,note:{title:"",descr:""},notes:[{title:"1st Note",descr:"Description for 1st note",date:new Date(Date.now()).toLocaleString()},{title:"2nd Note",descr:"Description for 2nd note",date:new Date(Date.now()).toLocaleString()},{title:"3rd Note",descr:"Description for 3rd note",date:new Date(Date.now()).toLocaleString()}]}},methods:{addNote:function(){console.log(this.note);var e=this.note,t=e.title,n=e.descr;if(""===t)return this.message="title can`t be empty!",!1;this.notes.push({title:t,descr:n,date:new Date(Date.now()).toLocaleString()}),this.message=null,this.note.title="",this.note.descr=""},removeNote:function(e){this.notes.splice(e,1)}}},D=j,S=Object(u["a"])(D,r,s,!1,null,null,null),C=S.exports;n("c1c3");o["a"].config.productionTip=!1,new o["a"]({render:function(e){return e(C)}}).$mount("#app")},"666e":function(e,t,n){"use strict";n("28c1")},a28c:function(e,t,n){},c1c3:function(e,t,n){}});