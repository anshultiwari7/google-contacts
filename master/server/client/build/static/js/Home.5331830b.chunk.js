(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[1],{262:function(e,t,n){"use strict";n.r(t);var a=n(97),r=n.n(a),c=n(98),l=n(131),o=n(0),i=n.n(o),s=n(3),u=n(101),m=n.n(u),p=n(247),f=n(249),d=n(56),h=n(250),b=n(246),v=n(151),E=n.n(v),k=Object(b.a)((function(e){return{details:{fontSize:15},toolbar:{justifyContent:"space-between"},left:{flex:1},right:{flex:1,display:"flex",justifyContent:"flex-end"}}})),g=function(e){var t=e.contacts,n=e.handleLogout,a=k();return i.a.createElement(p.a,{position:"sticky"},i.a.createElement(f.a,null,i.a.createElement("div",{className:a.left},i.a.createElement(d.a,{variant:"h6",className:a.details},t.name," ",i.a.createElement("br",null),t.email)),i.a.createElement("div",{className:a.right},i.a.createElement(h.a,{color:"inherit",onClick:n},i.a.createElement(E.a,null)))))},x=n(241),j=n(154),y=n.n(j),w=n(248),O=n(251),N=n(252),C=n(253),F=n(254),T=n(255),A=n(256),P=n(257),W=n(264),I=Object(b.a)({root:{width:"100%"},container:{maxHeight:500},footer:{flex:1,display:"flex",justifyContent:"flex-end"}}),R=[{id:"name",label:"Name",minWidth:170},{id:"phone",label:"Phone Number",minWidth:170},{id:"email",label:"Email",minWidth:170}],S=function(e){var t=e.contacts,n=e.handleFetchRows,a=I(),r=Object(o.useState)([]),c=Object(l.a)(r,2),s=c[0],u=c[1];Object(o.useEffect)((function(){t.connections&&u(Object(x.a)(y()(t.connections,(function(e){var t=e.names&&e.names[0].displayName?e.names[0].displayName:"-",n=e.phoneNumbers&&e.phoneNumbers[0].canonicalForm?e.phoneNumbers[0].canonicalForm:"-",a=e.emailAddresses&&e.emailAddresses[0].value?e.emailAddresses[0].value:"-";return m(t,n,a)}))))}),[t]);var m=function(e,t,n){return{name:e,phone:t,email:n}};return i.a.createElement(i.a.Fragment,null,i.a.createElement(w.a,{className:a.root},i.a.createElement(O.a,{className:a.container},i.a.createElement(N.a,{stickyHeader:!0,"aria-label":"sticky table"},i.a.createElement(C.a,null,i.a.createElement(F.a,null,R.map((function(e){return i.a.createElement(T.a,{key:e.id,align:e.align,style:{minWidth:e.minWidth}},e.label)})))),i.a.createElement(A.a,null,s.map((function(e){return i.a.createElement(F.a,{hover:!0,role:"checkbox",tabIndex:-1,key:e.code},R.map((function(t){var n=e[t.id];return i.a.createElement(T.a,{key:t.id,align:t.align},n)})))}))),i.a.createElement(P.a,null))),i.a.createElement("div",{className:a.footer},i.a.createElement(h.a,{onClick:function(e){n(t.nextPageToken)},disabled:!t.nextPageToken,"aria-label":"next page"},i.a.createElement(W.a,null)))))},H="https://knolscape-assignment-nodejs.herokuapp.com",J=function(){var e=Object(c.a)(r.a.mark((function e(t,n){var a,c,l;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=H.concat("/users/list"),t&&(a=a.concat("?pageToken=".concat(t))),e.prev=2,e.next=5,m.a.get(a,{withCredentials:!0,cancelToken:n});case 5:return c=e.sent,l=c.data,e.abrupt("return",l);case 10:return e.prev=10,e.t0=e.catch(2),e.abrupt("return",e.t0);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(t,n){return e.apply(this,arguments)}}(),L=function(){var e=Object(c.a)(r.a.mark((function e(t){var n,a,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=H.concat("/auth/logout"),e.prev=1,e.next=4,m.a.get(n,{withCredentials:!0,cancelToken:t});case 4:return a=e.sent,c=a.data,e.abrupt("return",c);case 9:return e.prev=9,e.t0=e.catch(1),e.abrupt("return",e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(s.g)(),t=m.a.CancelToken.source(),n=Object(o.useState)(""),a=Object(l.a)(n,2),u=a[0],p=a[1],f=function(){var e=Object(c.a)(r.a.mark((function e(){var n,a,c=arguments;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.length>0&&void 0!==c[0]?c[0]:null,e.prev=1,e.next=4,J(n,t.token);case 4:a=e.sent,p(a),console.log({response:a}),a.email||d(),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(1),console.log("API Error",e.t0);case 13:case"end":return e.stop()}}),e,null,[[1,10]])})));return function(){return e.apply(this,arguments)}}();Object(o.useEffect)((function(){return f(),function(){t.cancel("Request Cancelled")}}),[]);var d=function(){var n=Object(c.a)(r.a.mark((function n(){return r.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,L(t.token);case 3:p(""),e.push("/login"),n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log("API Error",n.t0);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})));return function(){return n.apply(this,arguments)}}();return i.a.createElement(i.a.Fragment,null,i.a.createElement(g,{contacts:u,handleLogout:d}),i.a.createElement(S,{contacts:u,handleFetchRows:f}))};t.default=q}}]);
//# sourceMappingURL=Home.5331830b.chunk.js.map