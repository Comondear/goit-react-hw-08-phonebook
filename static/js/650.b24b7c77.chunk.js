"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[650],{9926:function(e,n,a){a.d(n,{t:function(){return m}});var r=a(1413),t=a(5705),u=a(2797),i=a(5237),l=a(6355),s=a(6203),o=a(5737),d=a.n(o),c=(a(8404),a(3329)),m=function(e){var n=e.handleSubmit,a=e.initialValues,o=e.isLoading,m=e.update,h=void 0!==m&&m,f=u.Ry((0,r.Z)((0,r.Z)({},i.cx),{},{name:u.Z_().required()}));return(0,c.jsx)(t.J9,{initialValues:a,validationSchema:f,onSubmit:n,children:function(e){var n=e.values,a=e.handleChange,r=e.handleBlur;return(0,c.jsxs)(s.Gq,{children:[(0,c.jsxs)(s.__,{htmlFor:"name",children:[(0,c.jsx)(l.Bj$,{}),"Name"]}),(0,c.jsx)(s.yt,{type:"text",name:"name"}),(0,c.jsx)(s.Xq,{name:"name"}),(0,c.jsxs)(s.__,{htmlFor:"number",children:[(0,c.jsx)(l.DNl,{}),"Number"]}),(0,c.jsx)(d(),{inputProps:{name:"number"},country:"ua",placeholder:"",onChange:function(e,n,r){a(r)},onBlur:r,value:n.number}),(0,c.jsx)(s.Xq,{name:"number"}),h?(0,c.jsx)(s.KM,{type:"submit",disabled:o,"aria-label":"update contact button",children:"Update contact"}):(0,c.jsx)(s.C9,{disabled:o,type:"submit",children:"Add contact"})]})}})}},8650:function(e,n,a){a.r(n);var r=a(1413),t=a(9439),u=a(2791),i=a(7689),l=a(9926),s=a(6203),o=a(9126),d=a(5633),c=a(3329);n.default=function(){var e,n=(0,i.s0)(),a=(0,i.TH)(),m=(0,i.UO)().id,h=(0,u.useState)(a.state.from),f=(0,t.Z)(h,2),v=f[0],x=f[1],b=(0,d.wv)(),p=(0,t.Z)(b,2),j=p[0],Z=p[1].isLoading,_=(0,d.wY)().data,w=_.findIndex((function(e){return m===e.id})),k=(0,u.useState)(null),q=(0,t.Z)(k,2),y=q[0],C=q[1];(0,u.useEffect)((function(){var e,n;null===y&&C(null!==(e=null===a||void 0===a||null===(n=a.state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/")}),[y,null===a||void 0===a||null===(e=a.state)||void 0===e?void 0:e.from]);var S={name:_[w].name,number:_[w].number};return(0,c.jsx)(s.uL,{children:(0,c.jsxs)(s.An,{children:[(0,c.jsx)(s.kq,{onClick:function(){return n(y)},children:(0,c.jsx)(o.aEb,{})}),(0,c.jsx)(l.t,{handleSubmit:function(e,a){var t=a.resetForm;j((0,r.Z)({id:m},e)),x(null),n(v),t()},initialValues:S,isLoading:Z,update:!0})]})})}},5237:function(e,n,a){a.d(n,{TN:function(){return i},oe:function(){return u},cx:function(){return t}});var r=a(2797),t={number:r.Z_().required().min(5).max(30)},u={password:r.Z_().required("Please, enter your password").matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,24}$/,"Must contain 8 or more characters: uppercase, lowercase letters, a number and a special case character")},i={email:r.Z_().email("Invalid email address format").required("Please, enter your email")}}}]);
//# sourceMappingURL=650.b24b7c77.chunk.js.map