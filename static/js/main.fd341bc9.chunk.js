(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,n){},156:function(e,t,n){},178:function(e,t,n){},181:function(e,t,n){},327:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(14),i=n.n(s),a=(n(156),n(102),n(62)),o=n(13),l=n(86),u=n(139),j=n(99),d=n.n(j),b=n(137),h=n(37),O=n(138),p=n.n(O).a.create({baseURL:"https://chat-onlineyanky.herokuapp.com/"}),f=function(e){return p.post("auth/me",e).then((function(e){return e.data}))},g={login:"",isAuth:!1,initApp:!1,error:"",success:""},x="IS-AUTH",m="INIT-APP",v="ERROR",S="SUCCESS";var k=function(e,t){return{type:x,login:e,isAuth:t}},w=function(e){return{type:m,isInit:e}},N=function(e){return{type:v,error:e}},y=function(e){return{type:S,success:e}},T=function(e){f({acTkn:localStorage.getItem("acTkn")}).then((function(t){return 1===t.responseCode&&e(k(t.login,!0))})).finally((function(){return e(w(!0))}))},A=function(e){return function(t){var n;(n=e,p.post("auth/login",n).then((function(e){return e.data}))).then((function(e){0===e.responseCode?t(N(e.message)):localStorage.setItem("acTkn",e.acTkn),f({acTkn:localStorage.getItem("acTkn")}).then((function(e){1===e.responseCode&&t(k(e.login,!0))}))}))}},I=function(e){localStorage.setItem("acTkn",""),f({acTkn:localStorage.getItem("acTkn")}).then((function(t){return 0===t.responseCode&&e(k(t.login,!1))}))},C=function(){var e=Object(b.a)(d.a.mark((function e(t){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",(function(e){var n;(n=t,p.post("/auth/registration",n).then((function(e){return e.data}))).then((function(t){1===t.responseCode?e(y(t.message)):e(N(t.message))}))}));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),E=n(150),P={items:[]},R="GET-MESSAGES";var _,V=function(e){return{type:R,messages:e}},L=Object(l.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case x:return Object(h.a)(Object(h.a)({},e),{},{login:t.login,isAuth:t.isAuth,error:""});case m:return Object(h.a)(Object(h.a)({},e),{},{initApp:t.isInit});case v:return Object(h.a)(Object(h.a)({},e),{},{error:t.error,success:""});case S:return Object(h.a)(Object(h.a)({},e),{},{success:t.success,error:""});default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;return t.type===R?Object(h.a)(Object(h.a)({},e),{},{items:Object(E.a)(t.messages)}):e}}),U=Object(l.c)(L,Object(l.a)(u.a)),G=(n(178),n(7)),J=n.n(G),M=function(e){return e.auth},z=function(e){return e.chat.items},B=n(2),D=function(){var e=Object(o.b)(),t=Object(o.c)(M);return Object(B.jsx)("header",{className:J()("header","clearfix"),children:t.isAuth?Object(B.jsxs)("div",{className:"logout",children:[Object(B.jsx)("div",{children:t.login}),Object(B.jsx)("div",{children:Object(B.jsx)("button",{onClick:function(){return e(I)},children:"Logout"})})]}):Object(B.jsxs)("div",{className:"autorization",children:[Object(B.jsx)(a.b,{onClick:function(){return e(N(""))},to:"login",children:Object(B.jsx)("span",{children:"Sign in"})}),Object(B.jsx)(a.b,{onClick:function(){return e(N(""))},to:"registration",children:Object(B.jsx)("span",{children:"Sign up"})})]})})},F=n(10),H=(n(181),n(151)),q=n(149),K=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(""),n=Object(H.a)(t,2),r=n[0],s=n[1],i=Object(o.b)(),a=Object(o.c)(z);Object(c.useEffect)((function(){(_=Object(q.a)("https://chat-onlineyanky.herokuapp.com")).on("messages",(function(t){var n;console.log(t),i(V(t)),null===(n=e.current)||void 0===n||n.scrollIntoView()}))}),[]);var l=Object(o.c)(M);return Object(B.jsxs)("div",{className:"chat",children:[Object(B.jsx)("div",{className:"chat_title",children:"Online chat"}),Object(B.jsxs)("div",{className:"chat_messages",children:[a.map((function(e){return Object(B.jsxs)("div",{children:[Object(B.jsx)("div",{className:J()("user",{me:l.login===e.user}),children:Object(B.jsx)("span",{children:e.user})}),Object(B.jsx)("div",{className:J()("message",{me:l.login===e.user}),children:Object(B.jsx)("span",{children:e.message})})]})})),Object(B.jsx)("div",{ref:e})]}),Object(B.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(B.jsxs)("div",{className:"chat_footer",children:[Object(B.jsx)("input",{value:r,placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",onChange:function(e){var t;(t=e.currentTarget.value).length<150&&s(t)}}),Object(B.jsx)("button",{onClick:function(){r&&r.length<150&&(_.emit("message",{message:r,acTkn:localStorage.getItem("acTkn")}),s(""))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})]})},Q=n(101),W=n.n(Q),X=n(41);function Y(e){var t;return e.length>40&&(t="\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),e&&e.length<10&&(t="\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),t}function Z(e){var t;return e.length>40&&(t="\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),e&&e.length<10&&(t="\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),t}n(186);var $=function(){var e=Object(o.c)(M),t=Object(o.b)();return Object(B.jsxs)("div",{className:"auth",children:[Object(B.jsx)("div",{className:"auth_title",children:"Sign in"}),Object(B.jsx)(X.c,{initialValues:{login:"",password:""},onSubmit:function(e){!function(e){t(A(e))}(e)},children:function(e){var t=e.errors,n=e.touched;e.isValidating;return Object(B.jsxs)(X.b,{children:[Object(B.jsx)(W.a,{visible:!(!t.login||!n.login),placement:"right",title:Object(B.jsx)("span",{children:t.login}),children:Object(B.jsx)(X.a,{id:"login",name:"login",placeholder:"login",validate:Y})}),Object(B.jsx)(W.a,{visible:!(!t.password||!n.password),placement:"left",title:Object(B.jsx)("span",{children:t.password}),children:Object(B.jsx)(X.a,{id:"password",name:"password",placeholder:"password",validate:Z})}),Object(B.jsx)("button",{type:"submit",children:"Submit"})]})}}),Object(B.jsx)("div",{className:"error",children:e.error&&Object(B.jsx)("span",{children:e.error})})]})},ee=function(){var e=Object(o.b)(),t=Object(o.c)(M);return Object(B.jsxs)("div",{className:"auth",children:[Object(B.jsx)("div",{className:"auth_title",children:"Sign up"}),Object(B.jsx)(X.c,{initialValues:{login:"",password:"",repeatPassword:""},onSubmit:function(n,c){!function(n,c){e(C(n)).then((function(){return t.success&&c.resetForm()}))}(n,c)},children:Object(B.jsxs)(X.b,{children:[Object(B.jsx)(X.a,{id:"login",name:"login",placeholder:"login",validation:Y}),Object(B.jsx)(X.a,{id:"password",name:"password",placeholder:"password",validationPasswordLoginPage:Z}),Object(B.jsx)(X.a,{id:"repeatPassword",name:"repeatPassword",placeholder:"repeat password"}),Object(B.jsx)("button",{type:"submit",children:"Submit"})]})}),Object(B.jsx)("div",{className:"error",children:Object(B.jsx)("span",{children:t.error})})," ",Object(B.jsx)("div",{className:"success",children:Object(B.jsx)("span",{children:t.success})})]})},te=function(){var e=Object(o.c)(M);return Object(B.jsx)("main",{children:e.isAuth?Object(B.jsx)(K,{}):Object(B.jsxs)(F.c,{children:[Object(B.jsx)(F.a,{path:"/login",children:Object(B.jsx)($,{})}),Object(B.jsx)(F.a,{path:"/registration",children:Object(B.jsx)(ee,{})})]})})};var ne=function(){var e=Object(o.b)();Object(c.useEffect)((function(){e(T)}),[]);var t=Object(o.c)(M);return Object(B.jsx)("div",{children:t.initApp&&Object(B.jsxs)("div",{className:"App",children:[Object(B.jsx)(D,{}),Object(B.jsx)(te,{})]})})};var ce=function(){return Object(B.jsx)(a.a,{children:Object(B.jsx)(o.a,{store:U,children:Object(B.jsx)(ne,{})})})};i.a.render(Object(B.jsx)(r.a.StrictMode,{children:Object(B.jsx)(ce,{})}),document.getElementById("root"))}},[[327,1,2]]]);
//# sourceMappingURL=main.fd341bc9.chunk.js.map