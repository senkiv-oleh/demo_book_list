(this["webpackJsonpreact-test-task"]=this["webpackJsonpreact-test-task"]||[]).push([[0],{34:function(t,e,n){},35:function(t,e,n){},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){"use strict";n.r(e);var o=n(1),c=n(21),a=n.n(c),r=n(8),s=n(2),i=n(0),l=function(){return Object(i.jsxs)("nav",{className:"navbar",children:[Object(i.jsx)(r.c,{to:"/",exact:!0,className:"navbar-item is-tab",children:"Dashboard"}),Object(i.jsx)(r.c,{to:"/addbook",className:"navbar-item is-tab",children:"Add a Book"})]})},u=n(5),b=(n(11),n(34),function(t){var e=t.book,n=t.onBookDeleted;return Object(i.jsxs)("tr",{className:"Book",children:[Object(i.jsx)("td",{children:e.title}),Object(i.jsx)("td",{children:e.author}),Object(i.jsx)("td",{children:e.category}),Object(i.jsx)("td",{children:e.isbn}),Object(i.jsxs)("td",{children:[Object(i.jsx)(r.b,{className:"Book__button button button--edit",to:{pathname:"/editbook/:book.id",state:{book:e,isEditing:!0}},children:"EDIT"}),Object(i.jsx)("button",{type:"button",className:"Book__button button button--delete",onClick:function(){n(e.id)},children:"DELETE"})]})]},e.id)}),j="https://books-data-base.herokuapp.com",d=function(t,e){return fetch("".concat(j).concat(t),e).then((function(t){return t.json()}))};console.log(fetch("".concat(j,"/books")));var h=function(){return d("/books")},O=function(t){return e="/books/".concat(t),d(e,{method:"DELETE"});var e};function m(t){return function(t,e){return d(t,{method:"POST",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify(e)})}("/books",t)}var f=function(t){var e=t.id,n=t.title,o=t.author,c=t.category,a=t.isbn;return function(t,e){var n=e.title,o=e.author,c=e.category,a=e.isbn;return d(t,{method:"PUT",headers:{"Content-type":"application/json; charset=UTF-8"},body:JSON.stringify({title:n,author:o,category:c,isbn:a})})}("/books/".concat(e),{title:n,author:o,category:c,isbn:a})},p=(n(35),function(){var t=Object(o.useState)([]),e=Object(u.a)(t,2),n=e[0],c=e[1];Object(o.useEffect)((function(){h().then((function(t){return c(t)}))}),[n]);var a=function(t){O(t).then((function(){c((function(e){return e.filter((function(e){return e.id!==t}))}))}))};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("table",{className:"BooksTable table  is-striped is-narrow is-hoverable",children:[Object(i.jsxs)("thead",{children:[Object(i.jsx)("th",{className:"BooksTable__title",children:"Title"}),Object(i.jsx)("th",{className:"BooksTable__title",children:"Author"}),Object(i.jsx)("th",{className:"BooksTable__title",children:"Category"}),Object(i.jsx)("th",{className:"BooksTable__title",children:"ISBN"}),Object(i.jsx)("th",{className:"BooksTable__title",children:"Action"})]}),Object(i.jsx)("tbody",{children:n.map((function(t){return Object(i.jsx)(b,{book:t,books:n,onBookDeleted:a})}))})]})})}),x=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)("h1",{className:"title",children:"Books List"}),Object(i.jsx)(p,{})]})},k=n(15),g=n(9),N=(n(36),function(){return d("/categories")}),v=(n(37),function(t){var e=t.errors;return Object(i.jsxs)("div",{className:"ErrorsPlace",children:[Object(i.jsx)("p",{children:e.emptyTitle}),Object(i.jsx)("p",{children:e.emptyAuthor}),Object(i.jsx)("p",{children:e.numberInAuthor}),Object(i.jsx)("p",{children:e.noCategory}),Object(i.jsx)("p",{children:e.emptyISBN}),Object(i.jsx)("p",{children:e.lettersInISBN}),Object(i.jsx)("p",{children:e.lengthISBN})]})}),y=function(){var t=Object(o.useState)([]),e=Object(u.a)(t,2),n=e[0],c=e[1],a=Object(o.useState)(!1),r=Object(u.a)(a,2),l=r[0],b=r[1],j=Object(o.useState)({title:"",author:"",category:"",ISBN:""}),h=Object(u.a)(j,2),O=h[0],f=h[1],p=Object(s.g)();Object(o.useEffect)((function(){N().then((function(t){return c(t)}))}),[]);var x=function(t){0!==t&&function(t){return d("/categories/".concat(t))}(t).then((function(t){return f(Object(g.a)(Object(g.a)({},O),{},{category:t.name}))}))},y=Object(o.useMemo)((function(){var t={emptyTitle:"",emptyAuthor:"",numberInAuthor:"",noCategory:"",emptyISBN:"",lettersInISBN:"",lengthISBN:""};for(var e in O)switch(e){case"title":t.emptyTitle=""===O[e]?"The book title field cannot be blank":"";break;case"author":t.emptyAuthor=""===O[e]?"The book author field cannot be blank":"",t.numberInAuthor=O[e].match(/\d+/g)?"The book author cannot contain numbers":"";break;case"category":t.noCategory=""===O[e]?"Select book category":"";break;case"ISBN":t.emptyISBN=""===O[e]?"The book ISBN field cannot be blank":"",t.lettersInISBN=O[e].match(/[a-zA-Z]/g)?"The book ISBN cannot contain letters":"",t.lengthISBN=13===O[e].length?"":"The book ISBN field must contain 13 digits"}return t}),[O]),B=function(t){t.preventDefault();var e=t.target,n=e.name,o=e.value;f((function(t){return Object(g.a)(Object(g.a)({},t),{},Object(k.a)({},n,o))}))},S=function(){var t=0;for(var e in y)y[e].length>0&&t++;return t},I=function(t){m({title:t.title,author:t.author,category:t.category,isbn:t.ISBN}),_()},_=function(){return p.replace("/")};return Object(i.jsxs)("div",{className:"AddBook",children:[Object(i.jsxs)("form",{className:"AddBook__form ",onSubmit:function(t){t.preventDefault(),b(!0),0===S()&&I(Object(g.a)({},O))},children:[Object(i.jsx)("input",{className:"input is-small field is-grouped-centered",name:"title",type:"text",placeholder:"Title of book",value:O.title,onChange:B}),Object(i.jsx)("input",{className:"input is-small field",name:"author",type:"text",placeholder:"Author of book",value:O.author,onChange:B}),Object(i.jsxs)("select",{name:"category",id:"category",className:"AddBook__select select is-small field",onChange:function(t){return x(+t.target.value)},children:[Object(i.jsx)("option",{value:"0",hidden:!0,selected:!0,children:"Select category of book"}),n.map((function(t){return Object(i.jsx)("option",{value:t.id,children:t.name},t.id)}))]}),Object(i.jsx)("input",{className:"input is-small field",name:"ISBN",type:"text",placeholder:"ISBN of book",value:O.ISBN,onChange:B}),Object(i.jsx)("button",{type:"submit",className:"AddBook__button button",children:"Add book"})]}),Object(i.jsx)("div",{className:"AddBook__errors errors",children:l&&Object(i.jsx)(v,{errors:y})})]})},B=n(23),S=(n(38),function(){var t=Object(s.h)();console.log(t.state);var e=t.state.book,n=Object(o.useState)([]),c=Object(u.a)(n,2),a=c[0],r=c[1],l=Object(o.useState)(e?e.title:""),b=Object(u.a)(l,2),j=b[0],d=b[1],O=Object(o.useState)(e?e.author:""),m=Object(u.a)(O,2),p=m[0],x=m[1],k=Object(o.useState)(e?e.category:""),v=Object(u.a)(k,2),y=v[0],S=v[1],I=Object(o.useState)(e?e.isbn:""),_=Object(u.a)(I,2),T=_[0],A=_[1],C=Object(o.useState)([]),E=Object(u.a)(C,2),D=E[0],F=E[1];Object(o.useEffect)((function(){N().then((function(t){return r(t)})),h().then((function(t){return F(t)}))}),[]);var w=Object(s.g)(),q=function(t){!function(t){var e=Object(B.a)(D),n=D.findIndex((function(e){return e.id===t.id}));e.splice(n,1,t),F(e),f(t)}(Object(g.a)(Object(g.a)({},e),t))},J=function(){return w.push("/")};return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("form",{className:"AddBook__form",onSubmit:function(t){t.preventDefault(),q({title:j,author:p,category:y,isbn:T}),J()},children:[Object(i.jsx)("input",{className:"input is-small",name:"title",type:"text",placeholder:"Title of book",value:j,onChange:function(t){return d(t.target.value)},required:!0}),Object(i.jsx)("input",{className:"input is-small",type:"text",placeholder:"Author of book",value:p,onChange:function(t){return x(t.target.value)},required:!0}),Object(i.jsxs)("select",{name:"category",id:"category",className:" select is-small",onChange:function(t){return S(t.target.value)},value:y,required:!0,children:[Object(i.jsx)("option",{value:"0",children:"Select category of book"}),a.map((function(t){return Object(i.jsx)("option",{value:t.name,children:t.name},t.id)}))]}),Object(i.jsx)("input",{className:"input is-small",name:"isbn",type:"text",placeholder:"ISBN of book",value:T,onChange:function(t){return A(t.target.value)},required:!0}),Object(i.jsx)("button",{type:"submit",className:"NewCommentForm__submit-button button",children:"Save"})]})})}),I=(n(39),function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(l,{}),Object(i.jsx)("div",{className:"App",children:Object(i.jsxs)(s.d,{children:[Object(i.jsx)(s.b,{exact:!0,path:"/",children:Object(i.jsx)(x,{})}),Object(i.jsx)(s.b,{path:"/addbook",component:y}),Object(i.jsx)(s.b,{path:"/editbook",component:S}),Object(i.jsx)(s.a,{path:"/home",to:"/"})]})})]})});a.a.render(Object(i.jsx)(r.a,{children:Object(i.jsx)(I,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.77d8f2ba.chunk.js.map