(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{QfjS:function(t,e,r){"use strict";r.r(e);var n=r("o0o1"),c=r.n(n),a=r("HaE+"),o=r("q1tI"),u=r.n(o),s=r("qYya"),i=r("nOHt"),p=r.n(i),l=u.a.createElement,f=function(t){var e=t.ticket,r=Object(s.a)({url:"/api/orders",method:"post",body:{ticketId:e.id},onSuccess:function(t){return p.a.push("/orders/[orderId]","/orders/".concat(t.id))}}),n=r.doRequest,c=r.errors;return l("div",null,l("h1",null,e.title),l("h4",null,"Price: ",e.price),c,l("button",{onClick:function(){return n()},className:"btn btn-primary"},"Purchase"))};f.getInitialProps=function(){var t=Object(a.a)(c.a.mark((function t(e,r){var n,a,o;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.query.ticketId,t.next=3,r.get("/api/tickets/".concat(n));case 3:return a=t.sent,o=a.data,t.abrupt("return",{ticket:o});case 6:case"end":return t.stop()}}),t)})));return function(e,r){return t.apply(this,arguments)}}(),e.default=f},qYya:function(t,e,r){"use strict";var n=r("o0o1"),c=r.n(n),a=r("rePB"),o=r("HaE+"),u=r("q1tI"),s=r.n(u),i=r("vDqi"),p=r.n(i),l=s.a.createElement;function f(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function d(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?f(Object(r),!0).forEach((function(e){Object(a.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):f(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.url,r=t.method,n=t.body,a=t.onSuccess,s=Object(u.useState)(null),i=s[0],f=s[1];return{doRequest:function(){var t=Object(o.a)(c.a.mark((function t(){var o,u,s=arguments;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return o=s.length>0&&void 0!==s[0]?s[0]:{},t.prev=1,f(null),t.next=5,p.a[r](e,d(d({},n),o));case 5:return u=t.sent,a&&a(u.data),t.abrupt("return",u.data);case 10:t.prev=10,t.t0=t.catch(1),f(l("div",{className:"alert alert-danger"},l("h4",null,"Ooops..."),l("ul",{className:"my-0"},t.t0.response.data.errors.map((function(t){return l("li",{key:t.message},t.message)})))));case 13:case"end":return t.stop()}}),t,null,[[1,10]])})));return function(){return t.apply(this,arguments)}}(),errors:i}}},rbQU:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/tickets/[ticketId]",function(){return r("QfjS")}])}},[["rbQU",0,2,1,3,4]]]);