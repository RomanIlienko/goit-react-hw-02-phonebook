(this["webpackJsonpgoit-react-hw-02-phonebook"]=this["webpackJsonpgoit-react-hw-02-phonebook"]||[]).push([[0],{10:function(t,e,n){t.exports={labelStyle:"Filter_labelStyle__d6aNb"}},2:function(t,e,n){t.exports={headStyle:"TodoContact_headStyle__85UD-",labelStyle:"TodoContact_labelStyle__2sHVN",inputStyle:"TodoContact_inputStyle__3Sl2P",button:"TodoContact_button__3ToIs",titleText:"TodoContact_titleText__L19_2"}},28:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(11),o=n.n(s),r=n(14),i=n(4),l=n(5),u=n(7),b=n(6),d=n(12),m=n(2),h=n.n(m),j=n(0),f=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(d.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state.name,t.state.number),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(j.jsxs)("div",{className:h.a.titleText,children:[Object(j.jsx)("h1",{children:"Phonebook"}),Object(j.jsxs)("form",{onSubmit:this.handleSubmit,className:h.a.headStyle,children:[Object(j.jsxs)("label",{className:h.a.labelStyle,children:["Name",Object(j.jsx)("input",{className:h.a.inputStyle,name:"name",value:this.state.name,onChange:this.handleChange})]}),Object(j.jsxs)("label",{className:h.a.labelStyle,children:["Number",Object(j.jsx)("input",{className:h.a.inputStyle,name:"number",value:this.state.number,onChange:this.handleChange})]}),Object(j.jsx)("button",{type:"submit",className:h.a.button,children:"Add contact"})]})]})}}]),n}(a.Component),p=f,C=n(8),O=n.n(C),x=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(j.jsx)("ul",{className:O.a.contacts,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(j.jsxs)("li",{className:O.a.listItem,children:[Object(j.jsxs)("p",{children:[a,": ",c]}),Object(j.jsx)("button",{type:"button",className:O.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},_=n(10),v=n.n(_),y=function(t){var e=t.value,n=t.onChange;return Object(j.jsxs)("div",{className:v.a.filterTitle,children:[Object(j.jsx)("h2",{children:"Contacts"}),Object(j.jsxs)("label",{className:v.a.labelStyle,children:["Find contacts by name",Object(j.jsx)("input",{type:"text",value:e,onChange:n})]})]})};y.defaultProps={filterValue:""};var S=y,g=n(13),N=n.n(g),T=function(t){Object(u.a)(n,t);var e=Object(b.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],filter:""},t.addContact=function(e,n){var a={id:N.a.generate(),name:e,number:n},c=t.state.contacts.find((function(t){return t.name===a.name}));c?alert("".concat(c.name," is already in contacts.")):t.setState((function(t){return{contacts:[a].concat(Object(r.a)(t.contacts))}}))},t.ChangeFilter=function(e){var n=e.currentTarget.value;t.setState({filter:n})},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"render",value:function(){var t=this.state.filter.toLowerCase(),e=this.state.contacts.filter((function(e){return e.name.toLowerCase().includes(t)}));return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(p,{onSubmit:this.addContact}),Object(j.jsx)(S,{value:this.state.filter,onChange:this.ChangeFilter}),Object(j.jsx)(x,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component),w=T;o.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(w,{})}),document.getElementById("root"))},8:function(t,e,n){t.exports={contacts:"ContactsList_contacts__w942y",listItem:"ContactsList_listItem__2nYCx",button:"ContactsList_button__2MA3c"}}},[[28,1,2]]]);
//# sourceMappingURL=main.05fda2c7.chunk.js.map