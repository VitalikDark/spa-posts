(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7e7e0852"],{"49ef":function(t,e,n){"use strict";var r=n("66f0"),s=n.n(r);s.a},"66f0":function(t,e,n){},b0c0:function(t,e,n){var r=n("83ab"),s=n("9bf2").f,i=Function.prototype,o=i.toString,u=/^\s*function ([^ (]*)/,a="name";r&&!(a in i)&&s(i,a,{configurable:!0,get:function(){try{return o.call(this).match(u)[1]}catch(t){return""}}})},ed81:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"user"}},[n("div",{staticClass:"wrapper"},[n("div",{on:{click:t.sortByName}},[t._v("User name ^")]),n("div",{on:{click:t.sortByEmail}},[t._v("Email ^")])]),t._l(t.users,(function(e){return n("div",{key:e.id,staticClass:"user"},[n("h2",[t._v(t._s(e.username))]),n("p",[t._v(t._s(e.email))]),n("router-link",{attrs:{tag:"button",to:"/user/"+e.id}},[t._v(" Info ")])],1)}))],2)},s=[],i=(n("b0c0"),{computed:{users:function(){return this.$store.state.users}},methods:{sortByName:function(){this.users.sort((function(t,e){return t.name.localeCompare(e.name)}))},sortByEmail:function(){this.users.sort((function(t,e){return t.email.localeCompare(e.email)}))}}}),o=i,u=(n("49ef"),n("2877")),a=Object(u["a"])(o,r,s,!1,null,null,null);e["default"]=a.exports}}]);
//# sourceMappingURL=chunk-7e7e0852.3688fdd4.js.map