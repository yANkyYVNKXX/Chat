(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{102:function(e,t,n){},156:function(e,t,n){},178:function(e,t,n){},181:function(e,t,n){},327:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n.n(c),s=n(14),i=n.n(s),a=(n(156),n(102),n(62)),o=n(13),l=n(86),u=n(138),j=n(37),d=n(137),b=n.n(d).a.create({baseURL:"https://chat-onlineyanky.herokuapp.com/"}),h=function(e){return b.post("auth/me",e).then((function(e){return e.data}))},O={login:"",isAuth:!1,initApp:!1,error:"",success:""},p="IS-AUTH",f="INIT-APP",g="ERROR",x="SUCCESS";var m=function(e,t){return{type:p,login:e,isAuth:t}},v=function(e){return{type:f,isInit:e}},S=function(e){return{type:g,error:e}},k=function(e){return{type:x,success:e}},w=function(e){h({acTkn:localStorage.getItem("acTkn")}).then((function(t){return 1===t.responseCode&&e(m(t.login,!0))})).finally((function(){return e(v(!0))}))},N=function(e){return function(t){var n;(n=e,b.post("auth/login",n).then((function(e){return e.data}))).then((function(e){0===e.responseCode?t(S(e.message)):localStorage.setItem("acTkn",e.acTkn),h({acTkn:localStorage.getItem("acTkn")}).then((function(e){1===e.responseCode&&t(m(e.login,!0))}))}))}},y=function(e){localStorage.setItem("acTkn",""),h({acTkn:localStorage.getItem("acTkn")}).then((function(t){return 0===t.responseCode&&e(m(t.login,!1))}))},T=function(e){return function(t){var n;(n=e,b.post("/auth/registration",n).then((function(e){return e.data}))).then((function(e){1===e.responseCode?t(k(e.message)):t(S(e.message))}))}},A=n(150),I={items:[]},C="GET-MESSAGES";var E,P=function(e){return{type:C,messages:e}},R=Object(l.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(j.a)(Object(j.a)({},e),{},{login:t.login,isAuth:t.isAuth,error:""});case f:return Object(j.a)(Object(j.a)({},e),{},{initApp:t.isInit});case g:return Object(j.a)(Object(j.a)({},e),{},{error:t.error,success:""});case x:return Object(j.a)(Object(j.a)({},e),{},{success:t.success,error:""});default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type===C?Object(j.a)(Object(j.a)({},e),{},{items:Object(A.a)(t.messages)}):e}}),_=Object(l.c)(R,Object(l.a)(u.a)),V=(n(178),n(7)),L=n.n(V),U=function(e){return e.auth},G=function(e){return e.chat.items},J=n(2),M=function(){var e=Object(o.b)(),t=Object(o.c)(U);return Object(J.jsx)("header",{className:L()("header","clearfix"),children:t.isAuth?Object(J.jsxs)("div",{className:"logout",children:[Object(J.jsx)("div",{children:t.login}),Object(J.jsx)("div",{children:Object(J.jsx)("button",{onClick:function(){return e(y)},children:"Logout"})})]}):Object(J.jsxs)("div",{className:"autorization",children:[Object(J.jsx)(a.b,{onClick:function(){return e(S(""))},to:"login",children:Object(J.jsx)("span",{children:"Sign in"})}),Object(J.jsx)(a.b,{onClick:function(){return e(S(""))},to:"registration",children:Object(J.jsx)("span",{children:"Sign up"})})]})})},z=n(10),B=(n(181),n(151)),D=n(149),F=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(""),n=Object(B.a)(t,2),r=n[0],s=n[1],i=Object(o.b)(),a=Object(o.c)(G);Object(c.useEffect)((function(){(E=Object(D.a)("https://chat-onlineyanky.herokuapp.com")).on("messages",(function(t){var n;console.log(t),i(P(t)),null===(n=e.current)||void 0===n||n.scrollIntoView()}))}),[]);var l=Object(o.c)(U);return Object(J.jsxs)("div",{className:"chat",children:[Object(J.jsx)("div",{className:"chat_title",children:"Online chat"}),Object(J.jsxs)("div",{className:"chat_messages",children:[a.map((function(e){return Object(J.jsxs)("div",{children:[Object(J.jsx)("div",{className:L()("user",{me:l.login===e.user}),children:Object(J.jsx)("span",{children:e.user})}),Object(J.jsx)("div",{className:L()("message",{me:l.login===e.user}),children:Object(J.jsx)("span",{children:e.message})})]})})),Object(J.jsx)("div",{ref:e})]}),Object(J.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(J.jsxs)("div",{className:"chat_footer",children:[Object(J.jsx)("input",{value:r,placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",onChange:function(e){var t;(t=e.currentTarget.value).length<150&&s(t)}}),Object(J.jsx)("button",{onClick:function(){r&&r.length<150&&(E.emit("message",{message:r,acTkn:localStorage.getItem("acTkn")}),s(""))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})]})},H=n(100),q=n.n(H),K=n(41);function Q(e){var t;return e.length>40&&(t="\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),e&&e.length<10&&(t="\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),t}function W(e){var t;return e.length>40&&(t="\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),e&&e.length<10&&(t="\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),t}n(186);var X=function(){var e=Object(o.c)(U),t=Object(o.b)();return Object(J.jsxs)("div",{className:"auth",children:[Object(J.jsx)("div",{className:"auth_title",children:"Sign in"}),Object(J.jsx)(K.c,{initialValues:{login:"",password:""},onSubmit:function(e){!function(e){t(N(e))}(e)},children:function(e){var t=e.errors,n=e.touched;e.isValidating;return Object(J.jsxs)(K.b,{children:[Object(J.jsx)(q.a,{visible:!(!t.login||!n.login),placement:"right",title:Object(J.jsx)("span",{children:t.login}),children:Object(J.jsx)(K.a,{id:"login",name:"login",placeholder:"login",validate:Q})}),Object(J.jsx)(q.a,{visible:!(!t.password||!n.password),placement:"left",title:Object(J.jsx)("span",{children:t.password}),children:Object(J.jsx)(K.a,{id:"password",name:"password",placeholder:"password",validate:W})}),Object(J.jsx)("button",{type:"submit",children:"Submit"})]})}}),Object(J.jsx)("div",{className:"error",children:e.error&&Object(J.jsx)("span",{children:e.error})})]})},Y=n(101),Z=n.n(Y),$=n(148),ee=function(){var e=Object(o.b)(),t=Object(o.c)(U),n=function(){var t=Object($.a)(Z.a.mark((function t(n){return Z.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e(T(n));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}();return Object(J.jsxs)("div",{className:"auth",children:[Object(J.jsx)("div",{className:"auth_title",children:"Sign up"}),Object(J.jsx)(K.c,{initialValues:{login:"",password:"",repeatPassword:""},onSubmit:function(e,c){n(e).then((function(){return t.success&&c.resetForm()}))},children:Object(J.jsxs)(K.b,{children:[Object(J.jsx)(K.a,{id:"login",name:"login",placeholder:"login",validation:Q}),Object(J.jsx)(K.a,{id:"password",name:"password",placeholder:"password",validationPasswordLoginPage:W}),Object(J.jsx)(K.a,{id:"repeatPassword",name:"repeatPassword",placeholder:"repeat password"}),Object(J.jsx)("button",{type:"submit",children:"Submit"})]})}),Object(J.jsx)("div",{className:"error",children:Object(J.jsx)("span",{children:t.error})})," ",Object(J.jsx)("div",{className:"success",children:Object(J.jsx)("span",{children:t.success})})]})},te=function(){var e=Object(o.c)(U);return Object(J.jsx)("main",{children:e.isAuth?Object(J.jsx)(F,{}):Object(J.jsxs)(z.c,{children:[Object(J.jsx)(z.a,{path:"/login",children:Object(J.jsx)(X,{})}),Object(J.jsx)(z.a,{path:"/registration",children:Object(J.jsx)(ee,{})})]})})};var ne=function(){var e=Object(o.b)();Object(c.useEffect)((function(){e(w)}),[]);var t=Object(o.c)(U);return Object(J.jsx)("div",{children:t.initApp&&Object(J.jsxs)("div",{className:"App",children:[Object(J.jsx)(M,{}),Object(J.jsx)(te,{})]})})};var ce=function(){return Object(J.jsx)(a.a,{children:Object(J.jsx)(o.a,{store:_,children:Object(J.jsx)(ne,{})})})};i.a.render(Object(J.jsx)(r.a.StrictMode,{children:Object(J.jsx)(ce,{})}),document.getElementById("root"))}},[[327,1,2]]]);
//# sourceMappingURL=main.5923942b.chunk.js.map