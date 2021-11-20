(this["webpackJsonpgoit-react-hw-07-phonebook-async"]=this["webpackJsonpgoit-react-hw-07-phonebook-async"]||[]).push([[0],{11:function(t,e,n){t.exports={formWrapper:"ContactForm_formWrapper__3TLmm",form:"ContactForm_form__3mChn",input:"ContactForm_input__2w9hC",label:"ContactForm_label__1c649",btnSubmit:"ContactForm_btnSubmit__2yoIt",errorMessage:"ContactForm_errorMessage__3L5xw"}},14:function(t,e,n){t.exports={contacts_list:"ContactList_contacts_list__OCStE",list_item:"ContactList_list_item__3giG7",link_to_call:"ContactList_link_to_call__1oO-Y",btnItem:"ContactList_btnItem__1b8O8"}},20:function(t,e,n){t.exports={filter_overlay:"Filter_filter_overlay__1FYX0",filter_label:"Filter_filter_label__2YlhV",filter_input:"Filter_filter_input__3AYuJ"}},33:function(t,e,n){t.exports={container:"Container_container__3WcwV"}},34:function(t,e,n){t.exports={hero_title:"Title_hero_title__Q28PL"}},35:function(t,e,n){t.exports={section_title:"SectionTitle_section_title__1KzyU"}},37:function(t,e,n){t.exports={message_notification:"Notification_message_notification__CdDob"}},44:function(t,e,n){},45:function(t,e,n){},90:function(t,e,n){"use strict";n.r(e);var r=n(0),c=n.n(r),a=n(12),s=n.n(a),o=(n(44),n(45),n(16)),i=n(33),u=n.n(i),l=n(1);function b(t){var e=t.children;return Object(l.jsx)("div",{className:u.a.container,children:e})}var m=n(34),d=n.n(m);function j(t){var e=t.title;return Object(l.jsx)("h1",{className:d.a.hero_title,children:e})}j.defaultProps={title:"Phonebook"};var f=n(35),O=n.n(f);function _(t){var e=t.sectionTitle;return Object(l.jsx)("h2",{className:O.a.section_title,children:e})}_.defaultProps={title:"Contacts"};var p=n(22),h=n(11),x=n.n(h),g=(n(47),n(39)),v=n(7),I=function(t){return t.contacts.items},F=function(t){return t.contacts.filter},C=function(t){return t.contacts.loadingForList},y=function(t){return t.contacts.loadingForForm},N=function(t){return t.contacts.loadingForDelete},S=function(t){var e=I(t),n=F(t);if(n){var r=n.toLowerCase();return e.filter((function(t){return t.name.toLowerCase().includes(r)}))}return e},L=n(2),q=n.n(L),w=n(8),k=n(17),E=n.n(k),R=n(6),A={getItemsRequest:Object(R.b)("contacts/getItemsRequest"),getItemsSuccess:Object(R.b)("contacts/getItemsSuccess"),getItemsError:Object(R.b)("contacts/getItemsError"),addItemRequest:Object(R.b)("contacts/addItemRequest"),addItemSuccess:Object(R.b)("contacts/addItemSuccess"),addItemError:Object(R.b)("contacts/addItemError"),deleteItemRequest:Object(R.b)("contacts/deleteItemRequest"),deleteItemSuccess:Object(R.b)("contacts/deleteItemSuccess"),deleteItemError:Object(R.b)("contacts/deleteItemError"),changeFilter:Object(R.b)("contacts/changeFilter")},T=A.getItemsRequest,M=A.getItemsSuccess,P=A.getItemsError,z=A.addItemRequest,B=A.addItemSuccess,J=A.addItemError,W=A.deleteItemRequest,Y=A.deleteItemSuccess,D=A.deleteItemError;E.a.defaults.baseURL="https://6195170f74c1bd00176c6b65.mockapi.io/api/v1";var Z=function(){var t,e,n=Object(v.c)(y),r=Object(v.c)(I),c=Object(v.b)(),a=Object(g.a)(),s=a.register,i=a.handleSubmit,u=a.formState.errors,b=a.resetField,m=function(){b("name"),b("number")};return Object(l.jsx)("div",{className:x.a.formWrapper,children:Object(l.jsxs)("form",{onSubmit:i((function(t){var e,n=t.name,a=t.number,s=n.toLowerCase(),i=r.find((function(t){return t.name.toLowerCase()===s})),u=r.find((function(t){return t.number===a}));return i?o.b.error("".concat(n," is already in contacts list")):u?o.b.error("".concat(a," is already in contacts list")):(c((e=t,function(){var t=Object(w.a)(q.a.mark((function t(n){return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n(z()),t.next=3,E.a.post("/items",e).then((function(t){var e=t.data;return n(B(e))})).catch((function(t){return n(J(t))}));case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}())),void m())})),className:x.a.form,children:[Object(l.jsxs)("label",{htmlFor:"nameInput",className:x.a.label,children:["Name:","required"===(null===(t=u.name)||void 0===t?void 0:t.type)&&Object(l.jsx)("span",{className:x.a.errorMessage,children:" is required*"}),Object(l.jsx)("input",Object(p.a)({type:"text",className:x.a.input,id:"nameInput"},s("name",{required:!0,maxLength:80,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f."})))]}),Object(l.jsxs)("label",{htmlFor:"telInput",className:x.a.label,children:["Number:","required"===(null===(e=u.number)||void 0===e?void 0:e.type)&&Object(l.jsx)("span",{className:x.a.errorMessage,children:" is required *"}),Object(l.jsx)("input",Object(p.a)({type:"tel",className:x.a.input,id:"telInput"},s("number",{required:!0,maxLength:12,pattern:"/+?d{1,4}?[-.s]?(?d{1,3}?)?[-.s]?d{1,4}[-.s]?d{1,4}[-.s]?d{1,9}/i"})))]}),Object(l.jsx)("br",{}),Object(l.jsx)("button",{type:"submit",className:x.a.btnSubmit,children:n?"Adding...":"Add contact"})]})})},U=n(5),V=n(14),G=n.n(V),K=n(3),Q=n.n(K),X=n(37),$=n.n(X);function H(t){var e=t.message;return Object(l.jsx)("p",{className:$.a.message_notification,children:e})}H.defaultProps={message:"No contacts "},H.propType={message:Q.a.string.isRequired};var tt=n(24);function et(t){var e=t.id,n=t.name,r=t.number,c=t.isLoadingForBtn,a=Object(v.b)();return Object(l.jsxs)("li",{className:G.a.list_item,children:[Object(l.jsx)("p",{children:n}),Object(l.jsxs)("a",{href:"tel:{number}",className:G.a.link_to_call,children:[Object(l.jsx)(tt.a,{}),r]}),Object(l.jsx)("button",{type:"button",className:G.a.btnItem,onClick:function(){return a(function(t){return function(e){e(W()),E.a.delete("/items/".concat(t)).then((function(){return e(Y(t))})).catch((function(t){return e(D(t))}))}}(e))},children:c?"...":Object(l.jsx)(tt.b,{})})]},e)}et.propType={id:Q.a.string,name:Q.a.string,number:Q.a.string};var nt=n(38),rt=n.n(nt),ct={position:"absolute"};function at(){return Object(l.jsx)("div",{style:ct,children:Object(l.jsx)(rt.a,{type:"Circles",color:"#00BFFF",height:30,width:30,timeout:3e3})})}function st(){var t=Object(v.b)(),e=Object(v.c)(C),n=Object(v.c)(N);Object(r.useEffect)((function(){t(function(){var t=Object(w.a)(q.a.mark((function t(e){var n,r;return q.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(T()),t.prev=1,t.next=4,E.a.get("/items");case 4:n=t.sent,r=n.data,e(M(r)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),e(P(t.t0));case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}())}),[t]);var c=Object(U.a)(Object(v.c)(S)).sort((function(t,e){return t.name.toLowerCase()>e.name.toLowerCase()?1:-1}));return console.log("contactItems",c),Object(l.jsxs)(l.Fragment,{children:[e&&Object(l.jsx)(at,{}),c&&0===c.length&&Object(l.jsx)(H,{}),c?Object(l.jsx)("ul",{className:G.a.contacts_list,children:c.map((function(t){var e=t.id,r=t.name,c=t.number;return Object(l.jsx)(et,{id:e,name:r,number:c,isLoadingForBtn:n},e)}))}):null]})}var ot=n(20),it=n.n(ot),ut=A.changeFilter;function lt(){var t=Object(v.b)(),e=Object(v.c)(F);return Object(l.jsx)("div",{className:it.a.filter_overlay,children:Object(l.jsxs)("label",{className:it.a.filter_label,children:["Find contacts by name:",Object(l.jsx)("input",{type:"text",value:e,onChange:function(e){var n=e.target;return t(ut(n.value.trim()))},className:it.a.filter_input})]})})}var bt,mt,dt,jt,ft=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)(b,{children:[Object(l.jsx)(j,{title:"Phonebook"}),Object(l.jsx)(Z,{}),Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(_,{sectionTitle:"Contacts"}),Object(l.jsx)(lt,{}),Object(l.jsx)(st,{})]})]}),Object(l.jsx)(o.a,{theme:"dark",autoClose:3e3})]})},Ot=n(4),_t=n(10),pt=A.getItemsRequest,ht=A.getItemsSuccess,xt=A.getItemsError,gt=A.addItemRequest,vt=A.addItemSuccess,It=A.addItemError,Ft=A.deleteItemRequest,Ct=A.deleteItemSuccess,yt=A.deleteItemError,Nt=A.changeFilter,St=Object(R.c)([],(bt={},Object(Ot.a)(bt,ht,(function(t,e){return e.payload})),Object(Ot.a)(bt,vt,(function(t,e){var n=e.payload;return[].concat(Object(U.a)(t),[n])})),Object(Ot.a)(bt,Ct,(function(t,e){var n=e.payload;return t.filter((function(t){return t.id!==n}))})),bt)),Lt=Object(R.c)("",Object(Ot.a)({},Nt,(function(t,e){return e.payload}))),qt=Object(R.c)(!1,(mt={},Object(Ot.a)(mt,pt,(function(){return!0})),Object(Ot.a)(mt,ht,(function(){return!1})),Object(Ot.a)(mt,xt,(function(){return!1})),mt)),wt=Object(R.c)(!1,(dt={},Object(Ot.a)(dt,gt,(function(){return!0})),Object(Ot.a)(dt,vt,(function(){return!1})),Object(Ot.a)(dt,It,(function(){return!1})),dt)),kt=Object(R.c)(!1,(jt={},Object(Ot.a)(jt,Ft,(function(){return!0})),Object(Ot.a)(jt,Ct,(function(){return!1})),Object(Ot.a)(jt,yt,(function(){return!1})),jt)),Et=Object(R.c)(null,{}),Rt=Object(_t.b)({items:St,filter:Lt,loadingForList:qt,loadingForForm:wt,loadingForDelete:kt,error:Et}),At=Object(R.a)({reducer:{contacts:Rt},devTools:!1,middleware:function(t){return Object(U.a)(t())}});s.a.render(Object(l.jsx)(c.a.StrictMode,{children:Object(l.jsx)(v.a,{store:At,children:Object(l.jsx)(ft,{})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.8a1388d9.chunk.js.map