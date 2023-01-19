"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[554],{6554:function(n,e,t){t.r(e),t.d(e,{ContactsView:function(){return V}});var r,i,a,o,c,s,d,u,l,m,h=t(9439),p=t(2791),x=t(5048),b=t(3634),f=t(6962),g=t(9759),j=t(168),Z=t(6444),w=Z.ZP.h2(r||(r=(0,j.Z)(["\n  margin-bottom: ",";\n"])),(function(n){return"".concat(n.theme.space[3],"px")})),y=t(4476),C=t(1413),v=t(887),S=t(5984),k=Z.ZP.form(i||(i=(0,j.Z)([""]))),P=Z.ZP.label(a||(a=(0,j.Z)(["\n  display: block;\n  width: 100%;\n  padding: ",";\n"])),(function(n){return"".concat(n.theme.space[1],"px")})),F=Z.ZP.input(o||(o=(0,j.Z)(["\n  width: 75%;\n  padding: ",";\n  &:not(:last-child) {\n    margin-bottom: ",";\n  }\n"])),(function(n){return"".concat(n.theme.space[1],"px")}),(function(n){return"".concat(n.theme.space[2],"px")})),A=t(8747),L=t(184),z=function(n){var e,t,r=n.onFormSubmit,i=n.isLoading,a=(0,S.x0)(),o=(0,S.x0)(),c=(0,v.cI)({defaultValues:{name:"",number:""}}),s=c.register,d=c.handleSubmit,u=c.reset,l=c.formState,m=c.formState,h=m.errors,x=m.isSubmitSuccessful;return(0,p.useEffect)((function(){l.isSubmitSuccessful&&u({name:"",number:""})}),[l,x,u]),(0,L.jsx)(y.x,{display:"block",p:2,mb:4,bg:"bgComponent",width:"95%",borderRadius:"normal",boxShadow:"basic",children:(0,L.jsxs)(k,{onSubmit:d((function(n){r(n)})),children:[(0,L.jsx)(P,{htmlFor:a,children:"Name"}),(0,L.jsx)(F,(0,C.Z)((0,C.Z)({id:a,type:"text",title:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"},s("name",{required:!0,pattern:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/i})),{},{"aria-invalid":h.name?"true":"false"})),"required"===(null===(e=h.name)||void 0===e?void 0:e.type)&&(0,L.jsx)("p",{role:"alert",children:"Name is required"}),(0,L.jsx)(P,{htmlFor:o,children:"Number"}),(0,L.jsx)(F,(0,C.Z)((0,C.Z)({id:o,type:"tel",title:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"},s("number",{required:"Phone number is required",pattern:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/i})),{},{"aria-invalid":h.number?"true":"false"})),h.number&&(0,L.jsx)("p",{role:"alert",children:null===(t=h.number)||void 0===t?void 0:t.message}),(0,L.jsx)(A.z,{type:"submit",disabled:i,children:"Add contact"})]})})},q=Z.ZP.label(c||(c=(0,j.Z)(["\n  display: block;\n  width: 100%;\n  padding: ",";\n"])),(function(n){return"".concat(n.theme.space[1],"px")})),I=Z.ZP.input(s||(s=(0,j.Z)(["\n  width: 75%;\n  padding: ",";\n  &:not(:last-child) {\n    margin-bottom: ",";\n  }\n"])),(function(n){return"".concat(n.theme.space[1],"px")}),(function(n){return"".concat(n.theme.space[2],"px")})),N=function(n){var e=n.onChange,t=(0,S.x0)(),r=(0,v.cI)(),i=r.register,a=r.watch;return e(a(["filter"])),(0,p.useEffect)((function(){var n=a((function(n,e){var t=e.name,r=e.type;return console.log(n,t,r)}));return function(){return n.unsubscribe()}}),[a]),(0,L.jsxs)(y.x,{display:"block",p:2,mb:3,bg:"bgComponent",width:"95%",borderRadius:"normal",boxShadow:"basic",children:[(0,L.jsx)(q,{htmlFor:t,children:"Find contacts by last name"}),(0,L.jsx)(I,(0,C.Z)({id:t,type:"text"},i("filter")))]})},_=Z.ZP.ul(d||(d=(0,j.Z)([""]))),E=Z.ZP.li(u||(u=(0,j.Z)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 0.5fr;\n  padding: ",";\n  align-items: center;\n  &:not(:last-child) {\n    margin-bottom: ",";\n  }\n"])),(function(n){return"".concat(n.theme.space[0],"px")}),(function(n){return"".concat(n.theme.space[1],"px")})),M=Z.ZP.p(l||(l=(0,j.Z)(["\n  margin-right: ",";\n"])),(function(n){return"".concat(n.theme.space[1],"px")})),R=Z.ZP.p(m||(m=(0,j.Z)([""]))),T=function(n){var e=n.id,t=n.name,r=n.number,i=(0,x.I0)();return(0,L.jsxs)(E,{children:[(0,L.jsx)(M,{children:t+":"}),(0,L.jsx)(R,{children:r}),(0,L.jsx)(A.z,{type:"button",onClick:function(){return i((0,b.GK)(e))},children:"Delete"})]})},K=function(n){var e=n.list,t=(0,g.g)().items;return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("h2",{children:"Contacts list"}),(0,L.jsx)("p",{children:t&&t.length>0&&"Total count ".concat(t.length)}),(0,L.jsx)(y.x,{display:"block",p:2,bg:"bgComponent",width:1,borderRadius:"normal",boxShadow:"basic",children:(0,L.jsx)(_,{children:e.map((function(n){return(0,L.jsx)(T,(0,C.Z)({},n),n.id)})).sort((function(n,e){return n.props.name.localeCompare(e.props.name)}))})})]})},V=function(){var n=(0,x.I0)(),e=(0,g.g)(),t=e.isLoading,r=e.items,i=e.filter,a=e.error;(0,p.useEffect)((function(){n((0,b.yF)())}),[n]);var o=(0,p.useMemo)((function(){return i?r.filter((function(n){return n.name.toLowerCase().trim().includes(i.toLowerCase().trim())})):r}),[i,r]);return(0,L.jsxs)(y.x,{width:1,p:4,as:"main",paddingTop:75,display:"grid",gridTemplateColumns:"1fr 1fr",children:[(0,L.jsxs)(y.x,{width:1,children:[a&&(0,L.jsx)("p",{children:a}),(0,L.jsx)(w,{children:"Add contact"}),(0,L.jsx)(z,{onFormSubmit:function(e){var t=e.name,i=e.number;r.some((function(n){return n.name.toLowerCase().trim()===t.toLowerCase().trim()}))?alert("".concat(t," is already in contacts")):n((0,b.uK)({name:t,number:i}))}}),(0,L.jsx)("h2",{children:"Find contact"}),(0,L.jsx)(N,{onChange:function(e){var t=(0,h.Z)(e,1)[0];n((0,f.M)(t))}})]}),(0,L.jsxs)(y.x,{width:1,children:[t&&(0,L.jsx)("p",{children:"Loading contacts..."}),r&&r.length>0&&(0,L.jsx)(K,{list:o})]})]})}}}]);
//# sourceMappingURL=554.1f618bb5.chunk.js.map