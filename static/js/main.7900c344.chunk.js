(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{108:function(e,t,n){},168:function(e,t,n){},190:function(e,t,n){},193:function(e,t,n){},338:function(e,t,n){"use strict";n.r(t);var c=n(0),s=n.n(c),r=n(14),i=n.n(r),a=(n(168),n(108),n(64)),o=n(13),l=n(91),j=n(144),u=n(38),d=n(143),b=n.n(d).a.create({baseURL:"https://chat-onlineyanky.herokuapp.com/"}),h=function(e){return b.post("auth/me",e).then((function(e){return e.data}))},O={login:"",isAuth:!1,initApp:!1,error:"",success:""},p="IS-AUTH",g="INIT-APP",f="ERROR",x="SUCCESS";var m=function(e,t){return{type:p,login:e,isAuth:t}},v=function(e){return{type:g,isInit:e}},S=function(e){return{type:f,error:e}},w=function(e){return{type:x,success:e}},k=function(e){h({acTkn:localStorage.getItem("acTkn")}).then((function(t){return 1===t.responseCode&&e(m(t.login,!0))})).finally((function(){return e(v(!0))}))},N=function(e){return function(t){var n;(n=e,b.post("auth/login",n).then((function(e){return e.data}))).then((function(e){0===e.responseCode?t(S(e.message)):localStorage.setItem("acTkn",e.acTkn),h({acTkn:localStorage.getItem("acTkn")}).then((function(e){1===e.responseCode&&t(m(e.login,!0))}))}))}},y=function(e){localStorage.setItem("acTkn",""),h({acTkn:localStorage.getItem("acTkn")}).then((function(t){return 0===t.responseCode&&e(m(t.login,!1))}))},T=function(e,t){return function(n){var c;(c=e,b.post("/auth/registration",c).then((function(e){return e.data}))).then((function(e){1===e.responseCode?(n(w(e.message)),t.resetForm()):n(S(e.message))}))}},A=n(162),I={items:[]},C="GET-MESSAGES";var E,P=function(e){return{type:C,messages:e}},R=Object(l.b)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return Object(u.a)(Object(u.a)({},e),{},{login:t.login,isAuth:t.isAuth,error:""});case g:return Object(u.a)(Object(u.a)({},e),{},{initApp:t.isInit});case f:return Object(u.a)(Object(u.a)({},e),{},{error:t.error,success:""});case x:return Object(u.a)(Object(u.a)({},e),{},{success:t.success,error:""});default:return e}},chat:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:I,t=arguments.length>1?arguments[1]:void 0;return t.type===C?Object(u.a)(Object(u.a)({},e),{},{items:Object(A.a)(t.messages)}):e}}),V=Object(l.c)(R,Object(l.a)(j.a)),_=(n(190),n(7)),U=n.n(_),G=function(e){return e.auth},J=function(e){return e.chat.items},L=n(3),M=function(){var e=Object(o.b)(),t=Object(o.c)(G);return Object(L.jsx)("header",{className:U()("header","clearfix"),children:t.isAuth?Object(L.jsxs)("div",{className:"logout",children:[Object(L.jsx)("div",{children:t.login}),Object(L.jsx)("div",{children:Object(L.jsx)("button",{onClick:function(){return e(y)},children:"Logout"})})]}):Object(L.jsxs)("div",{className:"autorization",children:[Object(L.jsx)(a.b,{onClick:function(){return e(S(""))},to:"login",children:Object(L.jsx)("span",{children:"Sign in"})}),Object(L.jsx)(a.b,{onClick:function(){return e(S(""))},to:"registration",children:Object(L.jsx)("span",{children:"Sign up"})})]})})},z=n(10),B=(n(193),n(163)),D=n(160),F=function(){var e=Object(c.useRef)(null),t=Object(c.useState)(""),n=Object(B.a)(t,2),s=n[0],r=n[1],i=Object(o.b)(),a=Object(o.c)(J);Object(c.useEffect)((function(){(E=Object(D.a)("https://chat-onlineyanky.herokuapp.com")).on("messages",(function(t){var n;console.log(t),i(P(t)),null===(n=e.current)||void 0===n||n.scrollIntoView()}))}),[]);var l=Object(o.c)(G);return Object(L.jsxs)("div",{className:"chat",children:[Object(L.jsx)("div",{className:"chat_title",children:"Online chat"}),Object(L.jsxs)("div",{className:"chat_messages",children:[a.map((function(e){return Object(L.jsxs)("div",{children:[Object(L.jsx)("div",{className:U()("user",{me:l.login===e.user}),children:Object(L.jsx)("span",{children:e.user})}),Object(L.jsx)("div",{className:U()("message",{me:l.login===e.user}),children:Object(L.jsx)("span",{children:e.message})})]})})),Object(L.jsx)("div",{ref:e})]}),Object(L.jsx)("form",{onSubmit:function(e){return e.preventDefault()},children:Object(L.jsxs)("div",{className:"chat_footer",children:[Object(L.jsx)("input",{value:s,placeholder:"\u0422\u0435\u043a\u0441\u0442 \u0441\u043e\u043e\u0431\u0449\u0435\u043d\u0438\u044f",onChange:function(e){var t;(t=e.currentTarget.value).length<150&&r(t)}}),Object(L.jsx)("button",{onClick:function(){s&&s.length<150&&(E.emit("message",{message:s,acTkn:localStorage.getItem("acTkn")}),r(""))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})]})},H=n(106),q=n.n(H),K=n(42);function Q(e){var t;return e.length>40&&(t="\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),e&&e.length<10&&(t="\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),t}function W(e){var t;return e.length>40&&(t="\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f 40 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),e&&e.length<10&&(t="\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0434\u043b\u0438\u043d\u0430 \u043f\u043e\u043b\u044f 10 \u0441\u0438\u043c\u0432\u043e\u043b\u043e\u0432"),t}n(118);var X=function(){var e=Object(o.c)(G),t=Object(o.b)();return Object(L.jsxs)("div",{className:"auth",children:[Object(L.jsx)("div",{className:"auth_title",children:"Sign in"}),Object(L.jsx)(K.c,{initialValues:{login:"",password:""},onSubmit:function(e){!function(e){t(N(e))}(e)},children:function(e){var t=e.errors,n=e.touched;e.isValidating;return Object(L.jsxs)(K.b,{children:[Object(L.jsx)(q.a,{visible:!(!t.login||!n.login),placement:"right",title:Object(L.jsx)("span",{children:t.login}),children:Object(L.jsx)(K.a,{id:"login",name:"login",placeholder:"login",validate:Q})}),Object(L.jsx)(q.a,{visible:!(!t.password||!n.password),placement:"left",title:Object(L.jsx)("span",{children:t.password}),children:Object(L.jsx)(K.a,{id:"password",name:"password",placeholder:"password",validate:W})}),Object(L.jsx)("button",{type:"submit",children:"Submit"})]})}}),Object(L.jsx)("div",{className:"error",children:e.error&&Object(L.jsx)("span",{children:e.error})})]})},Y=n(342),Z=function(){var e=Object(o.b)(),t=Object(o.c)(G);return Object(L.jsxs)("div",{className:"auth",children:[Object(L.jsx)("div",{className:"auth_title",children:"Sign up"}),Object(L.jsx)(K.c,{initialValues:{login:"",password:"",repeatPassword:""},onSubmit:function(t,n){!function(t,n){e(T(t,n))}(t,n)},children:function(e){var t=e.errors,n=e.touched;e.isValidating;return Object(L.jsxs)(K.b,{children:[Object(L.jsx)(Y.a,{visible:!(!t.login||!n.login),placement:"right",title:Object(L.jsx)("span",{children:t.login}),children:Object(L.jsx)(K.a,{id:"login",name:"login",placeholder:"login",validate:Q})}),Object(L.jsx)(Y.a,{visible:!(!t.password||!n.password),placement:"left",title:Object(L.jsx)("span",{children:t.password}),children:Object(L.jsx)(K.a,{id:"password",name:"password",placeholder:"password",validate:W})}),Object(L.jsx)(K.a,{id:"repeatPassword",name:"repeatPassword",placeholder:"repeat password"}),Object(L.jsx)("button",{type:"submit",children:"Submit"})]})}}),Object(L.jsx)("div",{className:"error",children:Object(L.jsx)("span",{children:t.error})})," ",Object(L.jsx)("div",{className:"success",children:Object(L.jsx)("span",{children:t.success})})]})},$=function(){var e=Object(o.c)(G);return Object(L.jsx)("main",{children:e.isAuth?Object(L.jsx)(F,{}):Object(L.jsxs)(z.c,{children:[Object(L.jsx)(z.a,{path:"/login",children:Object(L.jsx)(X,{})}),Object(L.jsx)(z.a,{path:"/registration",children:Object(L.jsx)(Z,{})})]})})};var ee=function(){var e=Object(o.b)();Object(c.useEffect)((function(){e(k)}),[]);var t=Object(o.c)(G);return Object(L.jsx)("div",{children:t.initApp&&Object(L.jsxs)("div",{className:"App",children:[Object(L.jsx)(M,{}),Object(L.jsx)($,{})]})})};var te=function(){return Object(L.jsx)(a.a,{children:Object(L.jsx)(o.a,{store:V,children:Object(L.jsx)(ee,{})})})};i.a.render(Object(L.jsx)(s.a.StrictMode,{children:Object(L.jsx)(te,{})}),document.getElementById("root"))}},[[338,1,2]]]);
//# sourceMappingURL=main.7900c344.chunk.js.map