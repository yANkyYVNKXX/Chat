(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(39),i=n.n(s),a=(n(76),n(49),n(32)),o=n(5),u=n(43),j=n(61),l=n(19),d=n(60),b=n.n(d).a.create({withCredentials:!0,baseURL:"https://chat-onlineyanky.herokuapp.com/"}),h=function(){return b.get("auth/me").then((function(e){return e.data}))},O={login:"",isAuth:!1,initApp:!1,error:"",success:""},p="IS-AUTH",f="INIT-APP",x="ERROR",v="SUCCESS";var m=function(e,t){return{type:p,login:e,isAuth:t}},g=function(e){return{type:f,isInit:e}},w=function(e){return{type:x,error:e}},C=function(e){return{type:v,success:e}},N=function(e){h().then((function(t){return 1===t.responseCode&&e(m(t.login,!0))})).finally((function(){return e(g(!0))}))},S=function(e){return function(t){var n;(n=e,b.post("auth/login",n).then((function(e){return e.data}))).then((function(e){0===e.responseCode?t(w(e.message)):h().then((function(e){1===e.responseCode&&t(m(e.login,!0))}))}))}},y=function(e){b.delete("auth/logout").then((function(e){return e.data})).then((function(){h().then((function(t){return 0===t.responseCode&&e(m(t.login,!1))}))}))},A=function(e){return function(t){var n;(n=e,b.post("/auth/registration",n).then((function(e){return e.data}))).then((function(e){1===e.responseCode?t(C(e.message)):t(w(e.message))}))}},k=n(70),E={items:[]},I="GET-MESSAGES";var P,R=function(e){return{type:I,messages:e}},_=Object(u.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(l.a)(Object(l.a)({},e),{},{login:t.login,isAuth:t.isAuth,error:""});case f:return Object(l.a)(Object(l.a)({},e),{},{initApp:t.isInit});case x:return Object(l.a)(Object(l.a)({},e),{},{error:t.error,success:""});case v:return Object(l.a)(Object(l.a)({},e),{},{success:t.success,error:""});default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;return t.type===I?Object(l.a)(Object(l.a)({},e),{},{items:Object(k.a)(t.messages)}):e}}),T=Object(u.c)(_,Object(u.a)(j.a)),U=(n(99),n(35)),V=n.n(U),G=function(e){return e.auth},J=function(e){return e.chat.items},L=n(1),M=function(){var e=Object(o.b)(),t=Object(o.c)(G);return Object(L.jsx)("header",{className:V()("header","clearfix"),children:t.isAuth?Object(L.jsxs)("div",{className:"logout",children:[Object(L.jsx)("div",{children:t.login}),Object(L.jsx)("div",{children:Object(L.jsx)("button",{onClick:function(){return e(y)},children:"Logout"})})]}):Object(L.jsxs)("div",{className:"autorization",children:[Object(L.jsx)(a.b,{onClick:function(){return e(w(""))},to:"Chat/#/login",children:Object(L.jsx)("span",{children:"Sign in"})}),Object(L.jsx)(a.b,{onClick:function(){return e(w(""))},to:"Chat/#/registration",children:Object(L.jsx)("span",{children:"Sign up"})})]})})},z=n(3),B=(n(102),n(71)),D=n(69),F=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(""),n=Object(B.a)(t,2),r=n[0],s=n[1],i=Object(o.b)(),a=Object(o.c)(J);Object(c.useEffect)((function(){(P=Object(D.a)("https://chat-onlineyanky.herokuapp.com/",{withCredentials:!0})).on("messages",(function(t){var n;console.log(t),i(R(t)),null===(n=e.current)||void 0===n||n.scrollIntoView()}))}),[]);var u=Object(o.c)(G);return Object(L.jsxs)("div",{className:"chat",children:[Object(L.jsx)("div",{className:"chat_title",children:"Online chat"}),Object(L.jsxs)("div",{className:"chat_messages",children:[a.map((function(e){return Object(L.jsxs)("div",{children:[Object(L.jsx)("div",{className:V()("user",{me:u.login===e.user}),children:Object(L.jsx)("span",{children:e.user})}),Object(L.jsx)("div",{className:V()("message",{me:u.login===e.user}),children:Object(L.jsx)("span",{children:e.message})})]})})),Object(L.jsx)("div",{ref:e})]}),Object(L.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(L.jsxs)("div",{className:"chat_footer",children:[Object(L.jsx)("input",{value:r,placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",onChange:function(e){var t;(t=e.currentTarget.value).length<150&&s(t)}}),Object(L.jsx)("button",{onClick:function(){r&&r.length<150&&(P.emit("message",r),s(""))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})]})},H=n(22);function q(e){var t;return e.length>30&&(t="\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),t}var K=function(){var e=Object(o.c)(G),t=Object(o.b)();return Object(L.jsxs)("div",{className:"auth",children:[Object(L.jsx)("div",{className:"auth_title",children:"Sign in"}),Object(L.jsx)(H.c,{initialValues:{login:"",password:""},onSubmit:function(e){!function(e){t(S(e))}(e)},children:Object(L.jsxs)(H.b,{children:[Object(L.jsx)(H.a,{id:"login",name:"login",placeholder:"login",validate:q}),Object(L.jsx)(H.a,{id:"password",name:"password",placeholder:"password",validate:q}),Object(L.jsx)("button",{type:"submit",children:"Submit"})]})}),Object(L.jsx)("div",{className:"error",children:e.error&&Object(L.jsx)("span",{children:e.error})})]})},Q=n(48),W=n.n(Q),X=n(68),Y=function(){var e=Object(o.b)(),t=Object(o.c)(G),n=function(){var t=Object(X.a)(W.a.mark((function t(n){return W.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(A(n));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(L.jsxs)("div",{className:"auth",children:[Object(L.jsx)("div",{className:"auth_title",children:"Sign up"}),Object(L.jsx)(H.c,{initialValues:{login:"",password:"",repeatPassword:""},onSubmit:function(e,t){n(e).then((function(){return t.resetForm()}))},children:Object(L.jsxs)(H.b,{children:[Object(L.jsx)(H.a,{id:"login",name:"login",placeholder:"login",validate:q}),Object(L.jsx)(H.a,{id:"password",name:"password",placeholder:"password",validate:q}),Object(L.jsx)(H.a,{id:"repeatPassword",name:"repeatPassword",placeholder:"repeat password",validate:q}),Object(L.jsx)("button",{type:"submit",children:"Submit"})]})}),Object(L.jsx)("div",{className:"error",children:Object(L.jsx)("span",{children:t.error})})," ",Object(L.jsx)("div",{className:"success",children:Object(L.jsx)("span",{children:t.success})})]})},Z=function(){var e=Object(o.c)(G);return Object(L.jsx)("main",{children:e.isAuth?Object(L.jsx)(F,{}):Object(L.jsxs)(z.c,{children:[Object(L.jsx)(z.a,{path:"Chat/#/login",children:Object(L.jsx)(K,{})}),Object(L.jsx)(z.a,{path:"Chat/#/registration",children:Object(L.jsx)(Y,{})})]})})};var $=function(){var e=Object(o.b)();Object(c.useEffect)((function(){e(N)}),[]);var t=Object(o.c)(G);return Object(L.jsx)("div",{children:t.initApp&&Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)(M,{}),Object(L.jsx)(Z,{})]})})};var ee=function(){return Object(L.jsx)(a.a,{children:Object(L.jsx)(o.a,{store:T,children:Object(L.jsx)($,{})})})};i.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(ee,{})}),document.getElementById("root"))},49:function(e,t,n){},76:function(e,t,n){},99:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.96e11ea8.chunk.js.map