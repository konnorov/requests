(this.webpackJsonpreq=this.webpackJsonpreq||[]).push([[0],{126:function(e,t,n){},133:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n.n(r),i=n(27),a=n.n(i),o=n(20),l=n(37),j=n.n(l),d=n(18),u=n(42),b=n(12),h=n(4),x=n(19),O=n.n(x),p=(n(125),n(126),n(138)),f=n(146),m=n(143),v=n(147),g=n(148),y=n(149),k=n(150),C=n(151),S=n(22),N=function(e){var t=e.className,n=e.txtStyle,s=void 0===n?{}:n,i=e.style,a=void 0===i?{}:i,o=e.title,l=Object(S.a)(e,["className","txtStyle","style","title"]),j=Object(r.useState)(!1),u=Object(b.a)(j,2),x=u[0],O=u[1],p=Object(h.E)(),f=Object(r.useRef)(null),m=function(){var e=f.current||{style:{},scrollHeight:"0"};e.style.height="auto",e.style.overflow="hidden",e.style.height=e.scrollHeight+"px",e.style.overflow=""};return Object(r.useEffect)((function(){document.fonts.ready.then(m),window.addEventListener("resize",m)}),[]),Object(r.useEffect)(m),Object(c.jsxs)("div",{className:t,style:Object(d.a)({position:"relative"},a),children:[Object(c.jsx)("textarea",Object(d.a)({className:o?"withTitle":"",style:Object(d.a)({height:"auto"},s),ref:f,rows:1,onFocus:function(){return O(!0)},onBlur:function(){return O(!1)}},l)),Object(c.jsx)("div",{className:"border border--".concat(p),style:x?{border:"1px solid var(--accent)"}:{}}),Object(c.jsx)("div",{className:"txt-bg border--".concat(p)}),o&&Object(c.jsx)("div",{className:"txtTitle border--".concat(p),children:Object(c.jsx)("div",{children:o})})]})},w=function(e){var t=e.style,n=e.children,s=Object(S.a)(e,["style","children"]),i=Object(r.useState)(!0),a=Object(b.a)(i,2),o=a[0],l=a[1],j=Object(r.useRef)(),u=Object(r.useState)(0),x=Object(b.a)(u,2),O=x[0],p=x[1],f=function(){return j.current?(l(j.current.scrollWidth!==j.current.offsetWidth),-(j.current.scrollWidth-j.current.offsetWidth)):0};return Object(r.useEffect)((function(){f(),window.addEventListener("resize",(function(){j.current&&(f(),j.current.style.transition="transform 0.2s ease 0s",j.current.style.transform="translateX(0px)")}))}),[]),Object(c.jsx)(h.A,{style:Object(d.a)({overflowX:"hidden"},t),onMoveX:function(e){if(o){var t=O+e.shiftX;t=isNaN(t)?O:t,j.current.style.transition="",j.current.style.transform="translateX(".concat(t,"px)")}},onEnd:function(e){if(o){var t=O+e.shiftX,n=f();t>0?t=0:t<n&&(t=n),t=isNaN(t)?O:t,j.current.style.transition="transform 0.2s ease 0s",j.current.style.transform="translateX(".concat(t,"px)"),p(t)}},children:Object(c.jsx)("div",Object(d.a)(Object(d.a)({ref:j},s),{},{children:n}))})},T=function(e){var t=e.className,n=e.txtStyle,r=void 0===n?{}:n,s=e.style,i=void 0===s?{}:s,a=e.children,o=Object(S.a)(e,["className","txtStyle","style","children"]),l=Object(h.E)();return Object(c.jsxs)("div",{className:t,style:Object(d.a)({position:"relative"},i),children:[Object(c.jsx)("div",Object(d.a)(Object(d.a)({className:"input",style:r},o),{},{children:a||Object(c.jsx)("div",{className:"unselect",style:{opacity:.7},children:"\u041f\u0443\u0441\u0442\u043e."})})),Object(c.jsx)("div",{className:"border border--".concat(l)}),Object(c.jsx)("div",{className:"txt-bg border--".concat(l)})]})},A=function(e){var t=e.className,n=e.txtStyle,s=void 0===n?{}:n,i=e.style,a=void 0===i?{}:i,o=e.title,l=Object(S.a)(e,["className","txtStyle","style","title"]),j=Object(h.E)(),u=Object(r.useState)(!1),x=Object(b.a)(u,2),O=x[0],p=x[1];return Object(c.jsxs)("div",{className:t,style:Object(d.a)({position:"relative",width:"100%"},a),children:[Object(c.jsx)("input",Object(d.a)({className:o?"withTitle":"",style:s,onFocus:function(){return p(!0)},onBlur:function(){return p(!1)}},l)),Object(c.jsx)("div",{className:"border border--".concat(j),style:O?{border:"1px solid var(--accent)"}:{}}),Object(c.jsx)("div",{className:"txt-bg border--".concat(j)}),o&&Object(c.jsx)("div",{className:"inputTitle",children:o})]})},z=n(44),P=n.n(z),R=n(43),W=n.n(R),_=n(45),L=n.n(_),E=function(e){var t=e.id,s=Object(b.a)(e.method,2),i=s[0],a=s[1],o=Object(b.a)(e.url,2),l=o[0],j=o[1],d=e.send,u=e.loading,x=e.isDesktop,O=e.res,p=Object(b.a)(e.tabs,2),f=p[0],m=p[1],v=e.separatorGroup,g=Object(r.useState)(!0),y=Object(b.a)(g,2),k=y[0],C=y[1],S=Object(r.useState)(!1),z=Object(b.a)(S,2),R=z[0],_=z[1],E=Object(r.useState)(!1),D=Object(b.a)(E,2),I=D[0],H=D[1],B=Object(r.useState)(0),F=Object(b.a)(B,2)[1];return Object(c.jsx)(h.B,{id:t,activePanel:"home",children:Object(c.jsxs)(h.n,{id:"home",children:[Object(c.jsx)(h.o,{onClick:function(){F((function(e){return 3===++e&&Promise.all([n.e(4),n.e(3)]).then(n.bind(null,153)),e}))},children:"Requests"}),Object(c.jsxs)(h.i,{separator:v?"auto":"hide",children:[Object(c.jsx)(N,{className:"Div",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430",value:l,onKeyPress:function(e){"Enter"===e.code&&!u&&d()},txtStyle:{maxHeight:"133px"},onChange:function(e){return j(e.target.value.replace(/\n/g,""))}}),Object(c.jsxs)(w,{className:"methodList",children:[Object(c.jsx)(h.e,{stopPropagation:!1,size:"m",mode:0===i?"primary":"outline",onClick:function(){return a(0)},children:"GET"}),Object(c.jsx)(h.e,{stopPropagation:!1,size:"m",mode:1===i?"primary":"outline",onClick:function(){return a(1)},children:"POST"}),Object(c.jsx)(h.e,{stopPropagation:!1,size:"m",mode:2===i?"primary":"outline",onClick:function(){return a(2)},children:"PUT"}),Object(c.jsx)(h.e,{stopPropagation:!1,size:"m",mode:3===i?"primary":"outline",onClick:function(){return a(3)},children:"PATCH"}),Object(c.jsx)(h.e,{stopPropagation:!1,size:"m",mode:4===i?"primary":"outline",onClick:function(){return a(4)},children:"DELETE"}),Object(c.jsx)(h.e,{stopPropagation:!1,size:"m",mode:5===i?"primary":"outline",onClick:function(){return a(5)},children:"HEAD"}),Object(c.jsx)(h.e,{stopPropagation:!1,size:"m",mode:6===i?"primary":"outline",onClick:function(){return a(6)},style:{marginRight:0},children:"OPTIONS"})]}),Object(c.jsx)("div",{className:"Div",children:Object(c.jsx)(h.e,{size:"m",style:{width:"100%"},disabled:!!u,className:"send",onClick:d,before:!u&&(x?Object(c.jsx)(W.a,{width:20,height:20}):Object(c.jsx)(P.a,{width:22,height:22})),children:Object(c.jsx)("div",{style:{fontWeight:800,textTransform:"uppercase",verticalAlign:"-3px",display:"inline"},children:u||"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})})]}),!v&&Object(c.jsx)("div",{className:"sep",style:{margin:"0 12px"}}),Object(c.jsx)(h.i,{children:"object"===typeof O?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(w,{style:{marginTop:"12px",marginBottom:"12px"},children:Object(c.jsxs)(h.y,{mode:"buttons",style:{padding:0},children:[Object(c.jsx)(h.z,{selected:"res"===f,onClick:function(){return m("res")},children:"\u041e\u0442\u0432\u0435\u0442"}),Object(c.jsx)(h.z,{selected:"content"===f,onClick:function(){return m("content")},children:"\u041a\u043e\u043d\u0442\u0435\u043d\u0442"}),O.html&&Object(c.jsx)(h.z,{selected:"html"===f,onClick:function(){return m("html")},children:"HTML"}),O.json&&Object(c.jsx)(h.z,{selected:"json"===f,onClick:function(){return m("json")},children:"JSON"}),Object(c.jsx)(h.z,{selected:"raw"===f,onClick:function(){return m("raw")},children:"RAW"}),Object(c.jsx)("div",{style:{width:"12px",display:"inline"},children:"\xa0"})]})}),"res"===f?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("div",{className:"Div",style:{display:"flex"},children:[Object(c.jsxs)("div",{style:{flex:2,marginRight:"5px"},children:[Object(c.jsx)("div",{className:"title",children:"URL"}),Object(c.jsx)(A,{value:O.url,readOnly:!0})]}),Object(c.jsxs)("div",{style:{flex:1},children:[Object(c.jsx)("div",{className:"title",children:"\u0412\u0440\u0435\u043c\u044f"}),Object(c.jsx)(A,{value:O.time+"\u043c\u0441",readOnly:!0})]})]}),Object(c.jsxs)("div",{className:"Div",style:{display:"flex"},children:[Object(c.jsxs)("div",{style:{flex:2,marginRight:"5px"},children:[Object(c.jsx)("div",{className:"title",children:"\u041a\u043e\u0434"}),Object(c.jsx)(A,{value:O.code,readOnly:!0})]}),Object(c.jsxs)("div",{style:{flex:1},children:[Object(c.jsx)("div",{className:"title",children:"\u041c\u0435\u0442\u043e\u0434"}),Object(c.jsx)(A,{value:O.method,readOnly:!0})]})]}),Object(c.jsxs)("div",{className:"Div",children:[Object(c.jsx)("div",{className:"title",children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438"}),Object(c.jsx)(T,{children:Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:O.headers}})})]})]}):"content"===f?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.s,{disabled:!0,style:{paddingLeft:"12px",paddingRight:"12px"},after:Object(c.jsx)(h.v,{checked:k,onChange:function(){return C((function(e){return!e}))}}),children:"\u041f\u0435\u0440\u0435\u043d\u043e\u0441\u044b \u0441\u0442\u0440\u043e\u043a"}),Object(c.jsx)(T,{className:"Div",txtStyle:{fontSize:"11pt",whiteSpace:k?"pre-wrap":"pre",overflow:"auto"},style:{marginTop:0},children:O.content})]}):"html"===f?Object(c.jsx)("div",{className:"Div",children:Object(c.jsx)("iframe",{title:"HTML",sandbox:"allow-forms",srcDoc:O.html,style:{height:document.body.offsetHeight-125}})}):"json"===f?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.s,{disabled:!0,style:{paddingLeft:"12px",paddingRight:"12px"},after:Object(c.jsx)(h.v,{checked:R,onChange:function(){return _((function(e){return!e}))}}),children:"\u041f\u0435\u0440\u0435\u043d\u043e\u0441\u044b \u0441\u0442\u0440\u043e\u043a"}),Object(c.jsx)(T,{className:"Div",txtStyle:{fontSize:"10.3pt",fontFamily:"monospace",whiteSpace:R?"pre-wrap":"pre",overflow:"auto"},style:{marginTop:0},children:O.json})]}):"raw"===f?Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(h.s,{disabled:!0,style:{paddingLeft:"12px",paddingRight:"12px"},after:Object(c.jsx)(h.v,{checked:I,onChange:function(){return H((function(e){return!e}))}}),children:"\u041f\u0435\u0440\u0435\u043d\u043e\u0441\u044b \u0441\u0442\u0440\u043e\u043a"}),Object(c.jsx)(T,{className:"Div",txtStyle:{fontSize:"10.3pt",fontFamily:"monospace",whiteSpace:I?"pre-wrap":"pre",overflow:"auto"},style:{marginTop:0},children:O.raw})]}):null]}):Object(c.jsxs)("div",{className:"placeholder",align:"center",children:[Object(c.jsx)(L.a,{style:{marginBottom:"5px"}}),Object(c.jsxs)("div",{children:["\u0420\u0435\u0437\u0443\u043b\u044c\u0442\u0430\u0442 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043f\u043e\u044f\u0432\u0438\u0442\u0441\u044f",Object(c.jsx)("br",{}),"\u0437\u0434\u0435\u0441\u044c \u043f\u043e\u0441\u043b\u0435 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0438"]})]})})]})})},D=n(134),I=n(135),H=n(136),B=n(137),F=function(e){var t=e.id,n=Object(b.a)(e.headers,2),r=n[0],s=n[1],i=e.setPopout;return Object(c.jsx)(h.B,{id:t,activePanel:"headers",children:Object(c.jsxs)(h.n,{id:"headers",children:[Object(c.jsx)(h.o,{left:Object(c.jsx)(h.p,{onClick:function(){return i(Object(c.jsx)(h.b,{header:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0412\u0421\u0415 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438?",text:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.",onClose:function(){return i(null)},actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"},{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",mode:"destructive",action:function(){s([]),i(null)}}]}))},children:Object(c.jsx)(D.a,{})}),children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438"}),Object(c.jsxs)(h.i,{children:[Object(c.jsx)("div",{className:"Div",children:Object(c.jsx)(h.e,{before:Object(c.jsx)(I.a,{}),size:"m",stretched:!0,onClick:function(){return s((function(e){var t=Object(o.a)(e);return t.push(["header","value"]),t}))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})}),0===r.length?Object(c.jsxs)("div",{className:"placeholder",align:"center",children:[Object(c.jsx)(H.a,{}),Object(c.jsx)("div",{children:"\u0421\u043f\u0438\u0441\u043e\u043a \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432 \u043f\u0443\u0441\u0442"})]}):Object(c.jsx)("div",{children:r.map((function(e,t){return Object(c.jsxs)("div",{className:"Div",children:[0!==t&&Object(c.jsx)("div",{className:"sep",style:{margin:"12px 0"}}),Object(c.jsxs)("div",{style:{display:"flex",marginBottom:"5px",alignItems:"stretch"},children:[Object(c.jsx)(A,{className:e[2]?"errorInput":"",style:{flex:1},placeholder:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a",value:e[0],onChange:function(e){return s((function(n){var c=Object(o.a)(n);return c[t].splice(2,1),c[t][0]=e.target.value.toLowerCase().replace(/ /g,""),c[t][0]+c[t][1]===""&&c.splice(t,1),c}))}}),Object(c.jsx)(h.e,{onClick:function(){return i(Object(c.jsx)(h.b,{header:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a?",text:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.",onClose:function(){return i(null)},actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"},{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",mode:"destructive",action:function(){s((function(e){var n=Object(o.a)(e);return n.splice(t,1),n})),i(null)}}]}))},size:"m",mode:"destructive",style:{marginLeft:"5px"},children:Object(c.jsx)(B.a,{})})]}),Object(c.jsx)(N,{placeholder:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435",value:e[1],txtStyle:{maxHeight:"87px"},onChange:function(e){return s((function(n){var c=Object(o.a)(n);return c[t][1]=e.target.value.replace(/\n/g,""),c[t][0]+c[t][1]===""&&c.splice(t,1),c}))}})]},t)}))})]})]})})},K=[["application/json","JSON [application/json]"],["application/x-www-form-urlencoded","URL \u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b [application/x-www-form-urlencoded]"],["text/plain","\u0422\u0435\u043a\u0441\u0442 [text/plain]"],[void 0,"\u0414\u0440\u0443\u0433\u043e\u0435 [\u0438\u0437 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u043e\u0432]"]],V=function(e){var t=e.id,n=Object(b.a)(e.headers,2),r=n[0],s=n[1],i=Object(b.a)(e.body,2),a=i[0],l=i[1],j=e.setPopout;return Object(c.jsx)(h.B,{id:t,activePanel:"content",children:Object(c.jsxs)(h.n,{id:"content",children:[Object(c.jsx)(h.o,{left:Object(c.jsx)(h.p,{onClick:function(){return j(Object(c.jsx)(h.b,{header:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u0432\u0435\u0441\u044c \u043a\u043e\u043d\u0442\u0435\u043d\u0442?",text:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.",onClose:function(){return j(null)},actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"},{title:"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c",mode:"destructive",action:function(){l(""),j(null)}}]}))},children:Object(c.jsx)(D.a,{})}),children:"\u041a\u043e\u043d\u0442\u0435\u043d\u0442"}),Object(c.jsxs)(h.i,{children:[Object(c.jsxs)("div",{className:"Div",children:[Object(c.jsx)("div",{class:"title",children:"\u0442\u0438\u043f \u0434\u0430\u043d\u043d\u043d\u044b\u0445"}),Object(c.jsx)(h.m,{value:K.findIndex((function(e){return void 0===e[0]||e[0]===(r.find((function(e){return"content-type"===e[0]}))||[])[1]})),onChange:function(e){var t=e.target.value;return s((function(e){if(!K[t])return e;var n=Object(o.a)(e),c=n.findIndex((function(e){return"content-type"===e[0]}));if(3===Number(t)){if(-1===c)return e;n.splice(c,1)}else-1===c?n.push(["content-type",K[t][0]]):n[c]=["content-type",K[t][0]];return n}))},children:K.map((function(e,t){return Object(c.jsx)("option",{value:t,children:e[1]},t)}))})]}),Object(c.jsx)("div",{className:"Div",children:Object(c.jsx)(N,{rows:10,placeholder:"\u041f\u0443\u0441\u0442\u043e.",value:a,onChange:function(e){var t=e.target.value;return l(t)}})})]})]})})},U=n(46),M=function(e){var t=e.id,s=Object(b.a)(e.path,2),i=s[0],a=s[1],l=e.url,j=e.setPopout,d=n(41);return Object(r.useEffect)((function(){var e,t=l.match(/^(https?:\/\/)/i)||l.startsWith("/")?l:"http://"+l,n=(d.parse(t).query||"").split("&"),c=[],r=Object(U.a)(n);try{for(r.s();!(e=r.n()).done;){var s=e.value,i=s.substr(0,s.indexOf("=")),o=s.substr(s.indexOf("=")+1);""!==(i+o).trim()&&c.push([decodeURIComponent(i),decodeURIComponent(o)])}}catch(j){r.e(j)}finally{r.f()}a(c)}),[]),Object(c.jsx)(h.B,{id:t,activePanel:"params",children:Object(c.jsxs)(h.n,{id:"params",children:[Object(c.jsx)(h.o,{left:Object(c.jsx)(h.p,{onClick:function(){return j(Object(c.jsx)(h.b,{header:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0412\u0421\u0415 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b?",text:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.",onClose:function(){return j(null)},actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"},{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",mode:"destructive",action:function(){a([]),j(null)}}]}))},children:Object(c.jsx)(D.a,{})}),children:"URL-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),Object(c.jsx)(h.i,{children:i?Object(c.jsxs)("div",{children:[Object(c.jsx)("div",{className:"Div",children:Object(c.jsx)(h.e,{before:Object(c.jsx)(I.a,{}),size:"m",stretched:!0,onClick:function(){return a((function(e){var t=Object(o.a)(e);return t.push(["param","value"]),t}))},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"})}),0!==i.length?Object(c.jsx)("div",{children:i.map((function(e,t){return Object(c.jsxs)("div",{className:"Div",children:[0!==t&&Object(c.jsx)("div",{className:"sep",style:{margin:"12px 0"}}),Object(c.jsxs)("div",{style:{display:"flex",marginBottom:"5px",alignItems:"stretch"},children:[Object(c.jsx)(A,{style:{flex:1},placeholder:"\u041f\u0430\u0440\u0430\u043c\u0435\u0442\u0440",value:e[0],onChange:function(e){var n=e.target.value;return a((function(e){var c=Object(o.a)(e);return c[t].splice(2,1),c[t][0]=n,c[t][0]+c[t][1]===""&&c.splice(t,1),c}))}}),Object(c.jsx)(h.e,{size:"m",mode:"destructive",onClick:function(){return j(Object(c.jsx)(h.b,{header:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440?",text:"\u041f\u043e\u0434\u0442\u0432\u0435\u0440\u0434\u0438\u0442\u0435 \u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435.",onClose:function(){return j(null)},actions:[{title:"\u041e\u0442\u043c\u0435\u043d\u0430",autoclose:!0,mode:"cancel"},{title:"\u0423\u0434\u0430\u043b\u0438\u0442\u044c",mode:"destructive",action:function(){a((function(e){var n=Object(o.a)(e);return n.splice(t,1),n})),j(null)}}]}))},style:{marginLeft:"5px"},children:Object(c.jsx)(B.a,{})})]}),Object(c.jsx)(N,{placeholder:"\u0417\u043d\u0430\u0447\u0435\u043d\u0438\u0435",txtStyle:{maxHeight:"87px"},value:e[1],onChange:function(e){var n=e.target.value;return a((function(e){var c=Object(o.a)(e);return c[t].splice(2,1),c[t][1]=n,c[t][0]+c[t][1]===""&&c.splice(t,1),c}))}})]},t)}))}):Object(c.jsxs)("div",{className:"placeholder",align:"center",children:[Object(c.jsx)(p.a,{}),Object(c.jsx)("div",{children:"\u0421\u043f\u0438\u0441\u043e\u043a URL-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u043e\u0432 \u043f\u0443\u0441\u0442"}),Object(c.jsx)("code",{children:"/?v=5.141&message=hello%20world"})]})]}):Object(c.jsx)("div",{className:"placeholder",align:"center",children:"\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."})})]})})},q=n(139),X=n(140),J=n(141),G=n(142),Q=n(144),Y=n(145),Z=function(e){var t=e.id,n=Object(b.a)(e.redirect,2),s=n[0],i=n[1],a=e.isApp,o=e.homeIcon,l=e.theme,j=e.changeTheme,d=e.fav,u=Object(r.useState)(!1),x=Object(b.a)(u,2),p=x[0],f=x[1];return Object(c.jsx)(h.B,{id:t,activePanel:"other",children:Object(c.jsxs)(h.n,{id:"other",children:[Object(c.jsx)(h.o,{children:"\u0415\u0449\u0451"}),Object(c.jsx)(h.q,{opened:p,onClose:function(){return f(!1)},children:Object(c.jsxs)(h.j,{children:[Object(c.jsx)(h.s,{after:"light"===l&&Object(c.jsx)(q.a,{}),onClick:function(){return j("1")},children:"\u0421\u0432\u0435\u0442\u043b\u0430\u044f"}),Object(c.jsx)(h.s,{after:"dark"===l&&Object(c.jsx)(q.a,{}),onClick:function(){return j("2")},children:"\u0422\u0451\u043c\u043d\u0430\u044f"}),a&&Object(c.jsx)(h.s,{after:"app"===l&&Object(c.jsx)(q.a,{}),onClick:function(){return j("")},children:"\u041a\u0430\u043a \u0432 \u0412\u041a"})]})}),Object(c.jsxs)(h.i,{children:[Object(c.jsx)(h.s,{style:{padding:"0 12px"},before:Object(c.jsx)(X.a,{}),after:Object(c.jsx)(J.a,{style:{color:"var(--icon_secondary)"}}),onClick:function(){return f(!0)},children:"\u0412\u043d\u0435\u0448\u043d\u0438\u0439 \u0432\u0438\u0434"}),Object(c.jsx)(h.s,{disabled:!0,style:{padding:"0 12px"},before:Object(c.jsx)(G.a,{}),after:Object(c.jsx)(h.v,{checked:s,onChange:function(){return i((function(e){return!e}))}}),children:"\u041f\u0435\u0440\u0435\u0430\u0434\u0440\u0435\u0441\u0430\u0446\u0438\u0438"}),o&&Object(c.jsx)(h.s,{style:{padding:"0 12px"},before:Object(c.jsx)(m.a,{}),onClick:function(){return O.a.send("VKWebAppAddToHomeScreen")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u044b\u0439 \u044d\u043a\u0440\u0430\u043d"}),!d&&a&&Object(c.jsx)(h.s,{style:{padding:"0 12px"},before:Object(c.jsx)(Q.a,{}),onClick:function(){return O.a.send("VKWebAppAddToFavorites")},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u0441\u0435\u0440\u0432\u0438\u0441 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435"}),Object(c.jsx)(h.s,{style:{padding:"0 12px"},before:Object(c.jsx)(Y.a,{}),className:"a",target:"_blank",href:"https://vk.me/club192302489",children:"\u0421\u043e\u043e\u0431\u0449\u0438\u0442\u044c \u043e \u0431\u0430\u0433\u0435/\u043e\u0448\u0438\u0431\u043a\u0435"})]}),Object(c.jsx)("div",{style:{opacity:.6},align:"center",children:"\u0412\u0435\u0440\u0441\u0438\u044f 2.0.1"})]})})},$=Object(h.F)((function(e){var t=e.viewWidth,s=Object(r.useState)(),i=Object(b.a)(s,2),a=i[0],l=i[1],x=Object(r.useState)(""),S=Object(b.a)(x,2),N=S[0],w=S[1],T=Object(r.useState)(0),A=Object(r.useState)(""),z=Object(r.useState)(!0),P=Object(r.useState)([]),R=Object(b.a)(P,2),W=R[0],_=R[1],L=Object(r.useState)(),D=Object(b.a)(L,2),I=D[0],H=D[1],B=Object(r.useState)(),K=Object(b.a)(B,2),U=K[0],q=K[1],X=Object(r.useState)(null),J=Object(b.a)(X,2),G=J[0],Q=J[1],Y=Object(r.useState)("res"),$=Object(b.a)(Y,2),ee=$[0],te=$[1],ne=Object(r.useState)(null),ce=Object(b.a)(ne,2),re=ce[0],se=ce[1],ie=Object(r.useState)("home"),ae=Object(b.a)(ie,2),oe=ae[0],le=ae[1],je=n(41),de=Object(r.useState)(!1),ue=Object(r.useState)(!1),be=Object(b.a)(ue,2),he=be[0],xe=be[1],Oe=Object(r.useState)(),pe=Object(b.a)(Oe,2),fe=pe[0],me=pe[1],ve=Object(r.useState)("light"),ge=Object(b.a)(ve,2),ye=ge[0],ke=ge[1],Ce=["app","light","dark"],Se=Object(r.useState)(window.innerWidth>=920),Ne=Object(b.a)(Se,2),we=Ne[0],Te=Ne[1],Ae=!O.a.isStandalone(),ze=function(){se(null),O.a.send("VKWebAppStorageSet",{key:"onboarding",value:"ok"})},Pe=Object(c.jsxs)(h.l,{activeModal:re,onClose:function(){return se(null)},children:[Object(c.jsx)(h.k,{id:"onboarding1",header:"\u0414\u043e\u0431\u0440\u043e \u043f\u043e\u0436\u0430\u043b\u043e\u0432\u0430\u0442\u044c!",icon:Object(c.jsx)(h.d,{mode:"app",src:"/requests/icons/icon150.png",size:72}),onClose:ze,actions:Object(c.jsx)(h.e,{size:"m",onClick:function(){return se("onboarding2")},children:"\u0414\u0430\u043b\u044c\u0448\u0435"}),children:Object(c.jsx)("div",{style:{marginTop:"5px",opacity:.7,textAlign:"center"},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u043b\u044f\u0439\u0442\u0435 HTTP, REST \u0438 SOAP \u0437\u0430\u043f\u0440\u043e\u0441\u044b \u043b\u0435\u0433\u043a\u043e \u0438 \u043d\u0435 \u043e\u0442\u043a\u0440\u044b\u0432\u0430\u044f \u043a\u043e\u043d\u0441\u043e\u043b\u044c."})}),Object(c.jsx)(h.k,{id:"onboarding2",icon:Object(c.jsx)(p.a,{}),onClose:ze,actions:Object(c.jsx)(h.e,{size:"m",onClick:function(){return se("onboarding3")},children:"\u0414\u0430\u043b\u044c\u0448\u0435"}),header:"\u041c\u0435\u043d\u044f\u0439\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438, \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u0438 \u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b \u0437\u0430\u043f\u0440\u043e\u0441\u0430",children:Object(c.jsxs)("div",{style:{marginTop:"5px",opacity:.7,textAlign:"center"},children:["\u0412\u0441\u0451 \u043d\u0443\u0436\u043d\u043e\u0435 \u043d\u0430 \u043f\u0430\u043d\u0435\u043b\u0438 ",we?"\u0441\u043b\u0435\u0432\u0430":"\u0441\u043d\u0438\u0437\u0443","."]})}),Object(c.jsx)(h.k,{id:"onboarding3",icon:Object(c.jsx)(f.a,{}),onClose:ze,actions:[Object(c.jsx)(h.e,{size:"m",onClick:function(){O.a.send("VKWebAppAddToFavorites"),ze()},children:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c"}),Object(c.jsx)(h.e,{size:"m",mode:"secondary",onClick:ze,children:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c"})],header:"\u0414\u043e\u0431\u0430\u0432\u0438\u0442\u044c \u043f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0432 \u0438\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435?",children:Object(c.jsx)("div",{style:{marginTop:"5px",opacity:.7,textAlign:"center"},children:"\u0422\u0430\u043a \u0432\u044b \u0441\u043c\u043e\u0436\u0435\u0442\u0435 \u0432\u0441\u0435\u0433\u0434\u0430 \u043b\u0435\u0433\u043a\u043e \u0435\u0433\u043e \u043d\u0430\u0439\u0442\u0438."})})]});Object(r.useEffect)((function(){O.a.subscribe((function(e){var t=e.detail,n=t.type,c=t.data;switch(console.log(n,c),n){case"VKWebAppUpdateConfig":me(c.scheme);break;case"VKWebAppAddToFavoritesResult":de[1](c.result)}})),O.a.send("VKWebAppInit"),window.addEventListener("resize",(function(){return Te(window.innerWidth>=920)})),O.a.send("VKWebAppAddToHomeScreenInfo").then((function(e){return xe(e.is_feature_supported&&!e.is_added_to_home_screen)})),Ae?O.a.send("VKWebAppStorageGet",{keys:["theme","onboarding"]}).then((function(e){ke(Ce[e.keys[0].value]||"app"),"ok"!==e.keys[1].value&&se("onboarding1")})):ke(Ce[localStorage.theme]||"light"),console.log("- vk mini app?\n- ".concat(Ae?"yes":"no","!"))}),[]),Object(r.useEffect)((function(){var e=document.createAttribute("scheme");switch(ye){case"dark":e.value="space_gray";break;case"light":e.value="bright_light";break;default:e.value=fe||"bright_light"}console.log("theme:",e.value),document.body.attributes.setNamedItem(e)}),[fe,ye]);var Re=function(e){O.a.send("VKWebAppTapticNotificationOccurred",{type:"warning"}),Q(Object(c.jsx)(h.b,{header:"\u041f\u0440\u043e\u0438\u0437\u043e\u0448\u043b\u0430 \u043e\u0448\u0438\u0431\u043a\u0430",text:Object(c.jsx)("div",{style:{whiteSpace:"pre-line",wordBreak:"break-all"},children:e}),onClose:function(){return Q(null)},actions:[{title:"\u0417\u0430\u043a\u0440\u044b\u0442\u044c",autoclose:!0,mode:"cancel"}]}))},We=function(){var e=Object(u.a)(j.a.mark((function e(){var t,n;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(l(),te("res"),""!==N.trim()){e.next=6;break}return e.abrupt("return",Re("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0441\u044b\u043b\u043a\u0443."));case 6:if(5!==T[0]||!A[0]){e.next=8;break}return e.abrupt("return",Re("\u041d\u0435\u043b\u044c\u0437\u044f \u043f\u0440\u0438\u043a\u0440\u0435\u043f\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0435\u043d\u0442 \u043a HEAD-\u0437\u0430\u043f\u0440\u043e\u0441\u0443."));case 8:return q("\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430..."),Q(Object(c.jsx)(h.r,{})),e.prev=10,e.next=13,fetch("https://req.knnrv.ru/send",{method:"POST",body:JSON.stringify({url:N,method:T[0],redirect:z[0],headers:Object(d.a)({"user-agent":window.navigator.userAgent},W.reduce((function(e,t){return e[t[0]]=t[1],e}),{})),body:A[0]}),headers:{"content-type":"application/json","vk-auth":window.location.search}});case 13:t=e.sent,e.next=20;break;case 16:return e.prev=16,e.t0=e.catch(10),q(),e.abrupt("return",Re("\u041e\u0448\u0438\u0431\u043a\u0430 \u043f\u0440\u0438 \u043e\u0442\u043f\u0440\u0430\u0432\u043a\u0435 \u0437\u0430\u043f\u0440\u043e\u0441\u0430 \u043d\u0430 \u0441\u0435\u0440\u0432\u0435\u0440. \u041f\u043e\u043f\u0440\u043e\u0431\u0443\u0439\u0442\u0435 \u043f\u043e\u0437\u0436\u0435 \ud83d\ude33"));case 20:return e.next=22,t.json();case 22:(n=e.sent).error?Re(Object(c.jsx)("div",{dangerouslySetInnerHTML:{__html:n.error}})):(l(n),O.a.send("VKWebAppTapticNotificationOccurred",{type:"success"}),Q(null)),q();case 25:case"end":return e.stop()}}),e,null,[[10,16]])})));return function(){return e.apply(this,arguments)}}(),_e=function(e){switch(oe){case"headers":if("headers"===e)return;for(var t,n=Object(o.a)(W),r=function(e){var r=n[e][0];return n[e].splice(2,1),""===r?(n[e][2]=!0,_(n),{v:Re("\u0423\u0434\u0430\u043b\u0438\u0442\u0435 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u0443\u0439\u0442\u0435 \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438 \u0431\u0435\u0437 \u043d\u0430\u0437\u0432\u0430\u043d\u0438\u044f, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c.")}):-1!==(t=n.findIndex((function(t,n){return n!==e&&t[0]===r})))?(n[e][2]=!0,n[t][2]=!0,_(n),{v:Re(Object(c.jsxs)("div",{children:["\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043e\u043a ",Object(c.jsxs)("b",{children:['"',r,'"']})," \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u0435\u0442\u0441\u044f \u043d\u0435\u0441\u043a\u043e\u043b\u044c\u043a\u043e \u0440\u0430\u0437. \u0423\u0434\u0430\u043b\u0438\u0442\u0435 \u0438\u043b\u0438 \u043f\u0435\u0440\u0435\u0438\u043c\u0435\u043d\u0443\u0439\u0442\u0435 \u043f\u043e\u0432\u0442\u043e\u0440\u044f\u044e\u0449\u0438\u0435\u0441\u044f \u0437\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438, \u0447\u0442\u043e\u0431\u044b \u043f\u0440\u043e\u0434\u043e\u043b\u0436\u0438\u0442\u044c."]}))}):void _(n)},s=0;s<W.length;s++){var i=r(s);if("object"===typeof i)return i.v}break;case"params":if("params"===e)return;if(!N&&0===I.length){w("");break}var a=I.map((function(e){return e.map((function(e){return encodeURIComponent(e)})).join("=")})).join("&"),l=je.parse(""===N.trim()?"/":N.match(/^(https?:\/\/)/i)||N.startsWith("/")?N:"http://"+N);w("".concat(N.match(/^(https?:\/\/)/i)?l.protocol+"//":"").concat(l.hostname?l.hostname+(l.port?":"+l.port:""):"").concat(l.pathname||"").concat(""===a?"":"?"+a).concat(l.hash||""))}le(e)};return Object(c.jsx)(h.g,{children:Object(c.jsx)(h.c,{children:Object(c.jsxs)(h.u,{style:{justifyContent:"center"},header:we&&Object(c.jsx)(h.o,{separator:!1}),popout:G,modal:Pe,children:[we&&Object(c.jsx)(h.t,{fixed:!0,width:"280px",maxWidth:"280px",children:Object(c.jsxs)(h.n,{children:[Object(c.jsx)(h.o,{}),Object(c.jsxs)(h.i,{children:[Object(c.jsx)(h.f,{onClick:function(){return _e("home")},before:Object(c.jsx)(m.a,{}),style:"home"===oe?{background:"var(--button_secondary_background)",borderRadius:"8px"}:{},children:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f"}),Object(c.jsx)(h.f,{onClick:function(){return _e("headers")},before:Object(c.jsx)(v.a,{}),style:"headers"===oe?{background:"var(--button_secondary_background)",borderRadius:"8px"}:{},children:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438"}),Object(c.jsx)(h.f,{onClick:function(){return _e("params")},before:Object(c.jsx)(g.a,{}),style:"params"===oe?{background:"var(--button_secondary_background)",borderRadius:"8px"}:{},children:"URL-\u043f\u0430\u0440\u0430\u043c\u0435\u0442\u0440\u044b"}),Object(c.jsx)(h.f,{onClick:function(){return _e("content")},before:Object(c.jsx)(y.a,{}),style:"content"===oe?{background:"var(--button_secondary_background)",borderRadius:"8px"}:{},children:"\u041a\u043e\u043d\u0442\u0435\u043d\u0442"}),Object(c.jsx)(h.f,{onClick:function(){return _e("other")},before:Object(c.jsx)(k.a,{}),style:"other"===oe?{background:"var(--button_secondary_background)",borderRadius:"8px"}:{},children:"\u0415\u0449\u0435"})]})]})}),Object(c.jsx)(h.t,{width:we?"600px":"100%",maxWidth:we?"600px":"100%",animate:!we,style:we?{marginLeft:"16px"}:{},children:Object(c.jsxs)(h.h,{activeStory:oe,tabbar:!we&&Object(c.jsxs)(h.w,{children:[Object(c.jsx)(h.x,{onClick:function(){return _e("home")},selected:"home"===oe,text:"\u0413\u043b\u0430\u0432\u043d\u0430\u044f",children:Object(c.jsx)(m.a,{})}),Object(c.jsx)(h.x,{onClick:function(){return _e("headers")},selected:"headers"===oe,text:"\u0417\u0430\u0433\u043e\u043b\u043e\u0432\u043a\u0438",children:Object(c.jsx)(v.a,{})}),Object(c.jsx)(h.x,{onClick:function(){return _e("params")},selected:"params"===oe,text:"URL",children:Object(c.jsx)(C.a,{})}),Object(c.jsx)(h.x,{onClick:function(){return _e("content")},selected:"content"===oe,text:"\u041a\u043e\u043d\u0442\u0435\u043d\u0442",children:Object(c.jsx)(y.a,{})}),Object(c.jsx)(h.x,{onClick:function(){return _e("other")},selected:"other"===oe,text:"\u0415\u0449\u0435",children:Object(c.jsx)(k.a,{})})]}),children:[Object(c.jsx)(E,{id:"home",url:[N,w],res:a,send:We,method:T,loading:U,tabs:[ee,te],separatorGroup:t>=h.C.SMALL_TABLET,isDesktop:we}),Object(c.jsx)(F,{id:"headers",headers:[W,_],setPopout:Q}),Object(c.jsx)(V,{id:"content",headers:[W,_],body:A,setPopout:Q}),Object(c.jsx)(M,{id:"params",path:[I,H],url:N,setPopout:Q}),Object(c.jsx)(Z,{id:"other",redirect:z,isApp:Ae,theme:ye,changeTheme:function(e){ke(Ce[e]||"app"),Ae?O.a.send("VKWebAppStorageSet",{key:"theme",value:e}):localStorage.theme=e},homeIcon:he,fav:de[0]})]})})]})})})}),{viewWidth:!0}),ee=function(){return Object(c.jsx)(h.a,{children:Object(c.jsx)($,{})})};a.a.render(Object(c.jsx)(s.a.StrictMode,{children:Object(c.jsx)(ee,{})}),document.getElementById("root"))}},[[133,1,2]]]);