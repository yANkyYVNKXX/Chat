(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,n){},108:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(39),i=n.n(s),a=(n(76),n(49),n(32)),o=n(5),u=n(43),l=n(61),j=n(19),d=n(60),b=n.n(d).a.create({withCredentials:!0,baseURL:"https://chat-onlineyanky.herokuapp.com/"}),h=function(e){return b.post("auth/me",e).then((function(e){return e.data}))},O={login:"",isAuth:!1,initApp:!1,error:"",success:""},p="IS-AUTH",f="INIT-APP",x="ERROR",g="SUCCESS";var m=function(e,t){return{type:p,login:e,isAuth:t}},v=function(e){return{type:f,isInit:e}},S=function(e){return{type:x,error:e}},w=function(e){return{type:g,success:e}},k=function(e){return function(t){var n;(n=e,b.post("auth/login",n).then((function(e){return e.data}))).then((function(e){0===e.responseCode?t(S(e.message)):localStorage.setItem("acTkn",e.acTkn),h(localStorage.getItem("acTkn")).then((function(e){1===e.responseCode&&t(m(e.login,!0))}))}))}},N=function(e){localStorage.setItem("acTkn",""),h(localStorage.getItem("acTkn")).then((function(t){return 0===t.responseCode&&e(m(t.login,!1))}))},y=function(e){return function(t){var n;(n=e,b.post("/auth/registration",n).then((function(e){return e.data}))).then((function(e){1===e.responseCode?t(w(e.message)):t(S(e.message))}))}},C=n(70),A={items:[]},I="GET-MESSAGES";var T,E=function(e){return{type:I,messages:e}},P=Object(u.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(j.a)(Object(j.a)({},e),{},{login:t.login,isAuth:t.isAuth,error:""});case f:return Object(j.a)(Object(j.a)({},e),{},{initApp:t.isInit});case x:return Object(j.a)(Object(j.a)({},e),{},{error:t.error,success:""});case g:return Object(j.a)(Object(j.a)({},e),{},{success:t.success,error:""});default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,t=arguments.length>1?arguments[1]:void 0;return t.type===I?Object(j.a)(Object(j.a)({},e),{},{items:Object(C.a)(t.messages)}):e}}),R=Object(u.c)(P,Object(u.a)(l.a)),_=(n(99),n(35)),U=n.n(_),V=function(e){return e.auth},G=function(e){return e.chat.items},J=n(1),L=function(){var e=Object(o.b)(),t=Object(o.c)(V);return Object(J.jsx)("header",{className:U()("header","clearfix"),children:t.isAuth?Object(J.jsxs)("div",{className:"logout",children:[Object(J.jsx)("div",{children:t.login}),Object(J.jsx)("div",{children:Object(J.jsx)("button",{onClick:function(){return e(N)},children:"Logout"})})]}):Object(J.jsxs)("div",{className:"autorization",children:[Object(J.jsx)(a.b,{onClick:function(){return e(S(""))},to:"login",children:Object(J.jsx)("span",{children:"Sign in"})}),Object(J.jsx)(a.b,{onClick:function(){return e(S(""))},to:"registration",children:Object(J.jsx)("span",{children:"Sign up"})})]})})},M=n(3),z=(n(102),n(71)),B=n(69),D=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(""),n=Object(z.a)(t,2),r=n[0],s=n[1],i=Object(o.b)(),a=Object(o.c)(G);Object(c.useEffect)((function(){(T=Object(B.a)("https://chat-onlineyanky.herokuapp.com/",{withCredentials:!0})).on("messages",(function(t){var n;console.log(t),i(E(t)),null===(n=e.current)||void 0===n||n.scrollIntoView()}))}),[]);var u=Object(o.c)(V);return Object(J.jsxs)("div",{className:"chat",children:[Object(J.jsx)("div",{className:"chat_title",children:"Online chat"}),Object(J.jsxs)("div",{className:"chat_messages",children:[a.map((function(e){return Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{className:U()("user",{me:u.login===e.user}),children:Object(J.jsx)("span",{children:e.user})}),Object(J.jsx)("div",{className:U()("message",{me:u.login===e.user}),children:Object(J.jsx)("span",{children:e.message})})]})})),Object(J.jsx)("div",{ref:e})]}),Object(J.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(J.jsxs)("div",{className:"chat_footer",children:[Object(J.jsx)("input",{value:r,placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",onChange:function(e){var t;(t=e.currentTarget.value).length<150&&s(t)}}),Object(J.jsx)("button",{onClick:function(){r&&r.length<150&&(T.emit("message",{message:r,acTkn:localStorage.getItem("acTkn")}),s(""))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})]})},F=n(22);function H(e){var t;return e.length>30&&(t="\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f 30 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),t}var q=function(){var e=Object(o.c)(V),t=Object(o.b)();return Object(J.jsxs)("div",{className:"auth",children:[Object(J.jsx)("div",{className:"auth_title",children:"Sign in"}),Object(J.jsx)(F.c,{initialValues:{login:"",password:""},onSubmit:function(e){!function(e){t(k(e))}(e)},children:Object(J.jsxs)(F.b,{children:[Object(J.jsx)(F.a,{id:"login",name:"login",placeholder:"login",validate:H}),Object(J.jsx)(F.a,{id:"password",name:"password",placeholder:"password",validate:H}),Object(J.jsx)("button",{type:"submit",children:"Submit"})]})}),Object(J.jsx)("div",{className:"error",children:e.error&&Object(J.jsx)("span",{children:e.error})})]})},K=n(48),Q=n.n(K),W=n(68),X=function(){var e=Object(o.b)(),t=Object(o.c)(V),n=function(){var t=Object(W.a)(Q.a.mark((function t(n){return Q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(y(n));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(J.jsxs)("div",{className:"auth",children:[Object(J.jsx)("div",{className:"auth_title",children:"Sign up"}),Object(J.jsx)(F.c,{initialValues:{login:"",password:"",repeatPassword:""},onSubmit:function(e,t){n(e).then((function(){return t.resetForm()}))},children:Object(J.jsxs)(F.b,{children:[Object(J.jsx)(F.a,{id:"login",name:"login",placeholder:"login",validate:H}),Object(J.jsx)(F.a,{id:"password",name:"password",placeholder:"password",validate:H}),Object(J.jsx)(F.a,{id:"repeatPassword",name:"repeatPassword",placeholder:"repeat password",validate:H}),Object(J.jsx)("button",{type:"submit",children:"Submit"})]})}),Object(J.jsx)("div",{className:"error",children:Object(J.jsx)("span",{children:t.error})})," ",Object(J.jsx)("div",{className:"success",children:Object(J.jsx)("span",{children:t.success})})]})},Y=function(){var e=Object(o.c)(V);return Object(J.jsx)("main",{children:e.isAuth?Object(J.jsx)(D,{}):Object(J.jsxs)(M.c,{children:[Object(J.jsx)(M.a,{path:"/login",children:Object(J.jsx)(q,{})}),Object(J.jsx)(M.a,{path:"/registration",children:Object(J.jsx)(X,{})})]})})};var Z=function(){var e=Object(o.b)();Object(c.useEffect)((function(){var t;e((t=localStorage.getItem("acTkn"),function(e){h(t).then((function(t){return 1===t.responseCode&&e(m(t.login,!0))})).finally((function(){return e(v(!0))}))}))}),[]);var t=Object(o.c)(V);return Object(J.jsx)("div",{children:t.initApp&&Object(J.jsxs)("div",{className:"App",children:[Object(J.jsx)(L,{}),Object(J.jsx)(Y,{})]})})};var $=function(){return Object(J.jsx)(a.a,{children:Object(J.jsx)(o.a,{store:R,children:Object(J.jsx)(Z,{})})})};i.a.render(Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)($,{})}),document.getElementById("root"))},49:function(e,t,n){},76:function(e,t,n){},99:function(e,t,n){}},[[108,1,2]]]);
//# sourceMappingURL=main.9e5dc120.chunk.js.map