(this["webpackJsonpredux-form-test"]=this["webpackJsonpredux-form-test"]||[]).push([[0],{130:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(11),a=c.n(s),o=(c(42),c(43),c(9)),i={isLoading:!1,page:"form",email:"",errors:{},products:{selectedProducts:[{id:"1",name:"Product 1",keywords:"",link:""}],all:[{name:"1 product for 24.99 usd",price:"24.99",pcs:1,selected:!0},{name:"2 products for 44 usd / 22$ for each",price:"44",desc:"You safe 12% on each patent check",pcs:2,selected:!1},{name:"3 products for 60 usd / 20$ for each",price:"60",desc:"You safe 20% on each patent check",pcs:3,selected:!1},{name:"4 products for 72 usd / 18$ for each",price:"72",desc:"You safe 28% on each patent check",pcs:4,selected:!1},{name:"5 products for 80 usd / 16$ for each",price:"80",desc:"You safe 36% on each patent check",pcs:5,selected:!1}]}},d=c(3),l=c(6),u=function(e){var t=e;return/(http:\/\/|www\.|https:\/\/)/i.test(t)||/(http:\/\/|www\.|https:\/\/)/i.test(t)?t.trim():"https://"},A={all:[{name:"1 product for 24.99 usd",price:"24.99",pcs:1,selected:!1},{name:"2 products for 44 usd / 22$ for each",price:"44",desc:"You safe 12% on each patent check",pcs:2,selected:!1},{name:"3 products for 60 usd / 20$ for each",price:"60",desc:"You safe 20% on each patent check",pcs:3,selected:!1},{name:"4 products for 72 usd / 18$ for each",price:"72",desc:"You safe 28% on each patent check",pcs:4,selected:!1},{name:"5 products for 80 usd / 16$ for each",price:"80",desc:"You safe 36% on each patent check",pcs:5,selected:!0}],selectedProducts:[{id:"1",keyword:"",link:""}]};var b=Object(o.b)({products:function(){var e,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:A,c=arguments.length>1?arguments[1]:void 0,r=Object(l.a)(t.selectedProducts);switch(c.type){case"SELECT_PRODUCT":var n=Object(l.a)(t.all).map((function(e,t){return e.selected=t===c.selected,e}));return Object(d.a)(Object(d.a)({},t),{},{all:n});case"ADD_PRODUCT":var s=Object(d.a)({},t);return s.selectedProducts=Object(l.a)(c.product),s;case"EDIT_PRODUCT_KEYWORDS":return r[e=t.selectedProducts.findIndex((function(e){return e.id==c.id}))].keywords=c.keywords,Object(d.a)(Object(d.a)({},t),{},{selectedProducts:r});case"EDIT_PRODUCT_LINK":e=t.selectedProducts.findIndex((function(e){return e.id==c.id}));var a=u(c.link);return r[e].link=a,Object(d.a)(Object(d.a)({},t),{},{selectedProducts:r});case"DELETE_PRODUCT":return console.log(r),Object(d.a)(Object(d.a)({},t),{},{selectedProducts:r.filter((function(e){return e.id!=c.id}))});default:return t}},page:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"form",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SELECT_PAGE":return t.page;default:return e}},isLoading:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_LOADER":return t.isLoading;default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.errors,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_ERROR":return Object(d.a)(Object(d.a)({},e),{},{email:t.error});case"CLEAR_ERRORS":return{};default:return e}},email:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i.email,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"EDIT_EMAIL":return t.email;default:return e}}}),j=c(34),p=Object(o.c)(b,i,Object(o.a)(j.a)),O=Object(r.createContext)(null),f=c(5),h=c(18),m=c.n(h),g=c(36),x=c(13),k=c.p+"static/media/payment-error.8b3d8993.png",v=c.p+"static/media/icon-add.4c08b377.svg";var y={addProduct:function(e){return{type:"ADD_PRODUCT",product:e}},deleteProduct:function(e){return{type:"DELETE_PRODUCT",id:e}},selectPage:function(e){return{type:"SELECT_PAGE",page:e}},showLoader:function(e){return{type:"SHOW_LOADER",isLoading:e}},editProductKeywords:function(e){return{type:"EDIT_PRODUCT_KEYWORDS",id:e.id,keywords:e.keywords}},editProductLink:function(e){return{type:"EDIT_PRODUCT_LINK",id:e.id,link:e.link}},selectProduct:function(e){return{type:"SELECT_PRODUCT",selected:e}},editEmail:function(e){return{type:"EDIT_EMAIL",email:e}},addError:function(e){return{type:"ADD_ERROR",error:e}},clearErrors:function(){return{type:"CLEAR_ERRORS"}}},B="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKTSURBVHgBxVeBldowDJVlzJV38B7ZIDdBs0HDBMcGdITbALrBdYLCBG0nIN2ATgAbkNckDSQ4rhzKNQkJpAfk/oMXR44lWbalbwY1sV6rPufxkAv4oBKwlAKTMejrPmq71F5RcwGITrzh3w2DuXX0svOGQ7Ml+BM1RweDNTGNI/nJMDoreI0Desbibjem6T3B6+HGkXg4FY0WlBoPTdGO5qCYWTVwH3bl7tusXxGdfqu1sejpVOlhx8Z9S7TFV+oyj62CkyRyJgQ4nU4+tL7vWwlwC4GPSKt9+L7bbQ+gLvTM/WC79INI5f5+NPe80K6tJyQ95BD8L8qMe8F2Ak0gCOJxycw/QhPYh/6NZq7xy99Oi2sODYGl570dr7PCGOWD0TmdQK4F5GIzzEkYOE0ZTx2gn52TMJxCg0AE9j4nkclPaBCMNp1e/0Madbv3bQMaBGaMpw5Aw0BoGLrWeH60psgvw3A3anwJdLrPFLoVUsVaZfr7YahMuBHWfmQVqqyLCajcrpdyO4QbgYMsVsgFQpI4ORHiI9wIiMQV8gLnkIppXf6dBpXIQa/XceCK2LMsvszKiK4ZqPkasdxZtoNxPoYrQ9zxLwXR9IUrpgymUI6DML6aE2VcQ9vMfeR50XPxI31O4UJoHbW4ht4LZZTskkiUsixKQJUD9ktRQkp/R3O9iaAmPC+29Zgy48XQH9HylM2yClpOXCEt11QxiW4vsl06ge1U/EgKh5TcbDjGiojOoMg1Sm9G2kuR4LzUib+oeTE5abzSgQM8bzthyC46DeTo5929mBis/Hp2/nJK0eASJ8hY7ROho0OP2Y7L53P07qwDL44oup4Hmj+irVmUgsL1nMJM7wsp5Q/Ze/etasZF/AHLECWVM3Q5rAAAAABJRU5ErkJggg==",P=c(37),C=c.n(P),w=c(2),D=!0,E=function(e){return function(t){t(y.showLoader(!0)),setTimeout((function(){t(y.selectPage(e)),t(y.showLoader(!1))}),2e3)}};function Q(){var e=Object(f.b)(),t=Object(r.useCallback)((function(t){e(y.selectPage(t))}),[e]);return Object(w.jsxs)("div",{children:[Object(w.jsxs)("form",{children:[Object(w.jsx)("p",{className:"label-bold",children:"Successfull payment"}),Object(w.jsx)("p",{className:"label",children:"Your request has been accepted and will be processed within 24 working hours. We will send you a payment details and all information to your email."}),Object(w.jsx)("img",{src:"data:image/png;base64,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",alt:"success!"})]}),Object(w.jsx)("button",{className:"btn",onClick:function(){return t("form")},children:"Back"})]})}function Y(){var e=Object(f.b)(),t=Object(r.useCallback)((function(t){t.preventDefault(),e(E((D=!D)?"paymenterror":"paymentsuccess"))}),[e]),c=Object(f.c)((function(e){return e.isLoading}))?Object(w.jsx)("img",{className:"spinner",alt:"loading...",src:B}):"Try to pay again";return Object(w.jsxs)("div",{children:[Object(w.jsxs)("form",{children:[Object(w.jsx)("p",{className:"label-bold",children:"Your payment failed"}),Object(w.jsx)("p",{className:"label",children:"Sorry, but we\u2019ve having trouble processing your payment. You have been not charged for this transaction."}),Object(w.jsx)("img",{src:k,alt:"Error!"})]}),Object(w.jsx)("button",{className:"btn error",onClick:t,children:c})]})}function S(){var e=Object(r.useContext)(O).getState(),t=e.products,c=t.selectedProducts.length-1,n=t.all.reverse()[c].price,s=Object(f.c)((function(e){return e.isLoading})),a=Object(r.useState)(t.selectedProducts),o=Object(x.a)(a,2),i=o[0],d=o[1],u=Object(r.useState)(null),A=Object(x.a)(u,2),b=A[0],j=A[1],p=Object(f.b)();Object(r.useEffect)((function(){j(b),d(i)}),[t,e.errors,b]);var h=Object(r.useCallback)((function(e){e.preventDefault(),p(E((D=!D)?"paymenterror":"paymentsuccess"))}),[p]),m=t.selectedProducts.map((function(e){return Object(w.jsxs)("li",{children:[Object(w.jsxs)("p",{className:"label-bold",children:[e.name,t.selectedProducts.length>1?Object(w.jsx)("button",{className:"no-border",onClick:function(t){t.preventDefault(),p(y.deleteProduct(e.id));var c=Object(l.a)(i).filter((function(t){return t.id!=e.id}));d(c)},children:Object(w.jsx)("img",{src:v,className:"icon-add-45deg",alt:""})}):""]}),Object(w.jsxs)("label",{children:["Enter main keyword for the product",Object(w.jsx)("input",{type:"text",placeholder:"for example, sylicon wine cup",value:e.keywords,onChange:function(t){return function(e,t){e.preventDefault();var c=e.target.value,r=Object(l.a)(i),n=r.findIndex((function(e){return e.id==t}));r[n]=c,d(r),p(y.editProductKeywords({id:t,keywords:c}))}(t,e.id)}})]}),Object(w.jsxs)("label",{children:["Enter link to the similar product as a reference",Object(w.jsx)("input",{type:"text",placeholder:"https://...",value:e.link,onChange:function(t){return function(e,t){e.preventDefault();var c=e.target.value,r=Object(l.a)(i),n=r.findIndex((function(e){return e.id==t}));r[n]=c,d(r),p(y.editProductLink({id:t,link:c}))}(t,e.id)}})]})]},e.id)})),g=s?Object(w.jsx)("img",{className:"spinner",src:B,alt:"loading..."}):"Submit and Pay ".concat(n," USD");return Object(w.jsxs)("div",{children:[Object(w.jsxs)("form",{children:[Object(w.jsx)("h2",{children:"Info"}),Object(w.jsxs)("label",{children:["Enter your email address",Object(w.jsx)("input",{type:"email",placeholder:"team@checkforpatent.com",onChange:function(e){C.a.isEmail(e.target.value)?(j(null),p(y.editEmail(e.target.value)),p(y.clearErrors)):(j("Email is invalid"),p(y.addError("Email is invalid")))},className:b?"invalid":"valid"})]}),Object(w.jsx)("ul",{children:m}),Object(w.jsx)("label",{children:Object(w.jsxs)("button",{className:"href green",onClick:function(){return p(y.selectPage("add"))},children:["Add more products ",Object(w.jsx)("img",{src:v,className:"icon-add",alt:""})]})}),Object(w.jsx)("p",{className:"label-promo",children:"We offer discount up to 36% for multiple checks"})]}),Object(w.jsx)("button",{className:"btn",onClick:h,children:g}),Object(w.jsxs)("p",{className:"secured",children:[Object(w.jsx)("img",{className:"icon",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAPCAYAAAAyPTUwAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADaSURBVHgBzY/LCcJAEIZn8rinhGgDJhAEb56jCAs2YgWWkBLECiII8erNgwe1gRg78Bo32TG7mocKEm8O7O4M880//wL8RWCzCNf7ISAGReoAUZITzqYTb/UBh+HOBtM8F+m1OIkaUIRw2ah/lKlWyZrmQqoB11029lzgvKMGSQtKRGu4cAC1LWOuVAXGBokgWFYb3mBLkLjAS5C0ZJWVIa8oOmEq+MP75lD9Q2QZlH3f75FSTvMsVmsQ55DnojyqVv1bXNtAsuFbINo13DJ+go3nS+1hrnfbwHeOj0zPL3Uu6gAAAABJRU5ErkJggg==",alt:" "}),"Secure payment with Stripe"]})]})}function H(){var e=Object(r.useContext)(O).getState(),t=e.products,c=Object(f.b)(),n=Object(r.useState)(),s=Object(x.a)(n,2),a=s[0],o=void 0===a?"5":a,i=s[1];Object(r.useEffect)((function(){u(o),c(y.selectProduct(o-1))}),[o,t]);var d=Object(r.useCallback)((function(){c(y.selectPage("form"))}),[c]),u=Object(r.useCallback)(function(){var t=Object(g.a)(m.a.mark((function t(r){var n,s,a,o,d,l;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(n=[],s=0;s<r;s++)a=e.products.selectedProducts[s],o=a?a.keywords:"",d=a?a.link:"",l={id:"".concat(s+1),name:"Product ".concat(s+1),keywords:o,link:d},n.push(l);c(y.addProduct(n)),c(y.selectProduct(r-1)),i(r);case 6:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),[c]),A=Object(l.a)(t.all).reverse().map((function(e,t){return Object(w.jsxs)("li",{className:e.selected?"active":"",onClick:function(){return u(e.pcs)},children:[Object(w.jsx)("input",{type:"radio",checked:e.selected,onChange:function(){return u(e.pcs)}}),Object(w.jsx)("p",{className:"list-bold",children:e.name}),e.desc&&Object(w.jsx)("p",{className:"list-description ".concat(e.selected?" active":""),children:e.desc})]},e.pcs)}));return Object(w.jsxs)("div",{children:[Object(w.jsxs)("form",{children:[Object(w.jsx)("h2",{className:"label-bold",children:"Adding more products"}),Object(w.jsx)("p",{className:"label",children:"The more items you check, the better the price."}),Object(w.jsx)("ul",{className:"form-list",children:A})]}),Object(w.jsx)("button",{className:"btn",onClick:d,children:"Continue"})]})}function R(){switch(Object(f.c)((function(e){return e.page}))){case"form":return Object(w.jsx)(S,{});case"paymenterror":return Object(w.jsx)(Y,{});case"paymentsuccess":return Object(w.jsx)(Q,{});case"add":return Object(w.jsx)(H,{});default:return Object(w.jsx)(S,{})}}function L(){var e=Object(r.useContext)(O);e.getState();return Object(w.jsx)(O.Consumer,{children:function(){return Object(w.jsx)(f.a,{store:e,children:Object(w.jsx)(R,{})})}})}var I=function(){return Object(w.jsx)(O.Provider,{value:p,children:Object(w.jsx)("div",{className:"App",children:Object(w.jsx)("div",{className:"form-container",children:Object(w.jsx)(L,{})})})})},N=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,131)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),r(e),n(e),s(e),a(e)}))};a.a.render(Object(w.jsx)(n.a.StrictMode,{children:Object(w.jsx)(I,{})}),document.getElementById("root")),N()},42:function(e,t,c){},43:function(e,t,c){}},[[130,1,2]]]);
//# sourceMappingURL=main.1bd4e747.chunk.js.map