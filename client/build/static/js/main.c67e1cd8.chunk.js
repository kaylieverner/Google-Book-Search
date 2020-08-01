(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{102:function(e,t,a){},105:function(e,t,a){},108:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(9),l=a.n(o),c=a(66),s=a(11),i=a(35),m=a(39),u=a.n(m),d={getBooks:function(e){return u.a.get("https://www.googleapis.com/books/v1/volumes?q="+e)},saveBook:function(e){return u.a.post("/api/books",e)},getSavedBooks:function(){return u.a.get("/api/books")},deleteBook:function(e){return u.a.delete("/api/books/"+e)}},f=a(141),E=a(142),v=a(147),b=a(146),h=a(65),g=a.n(h),p=a(144);function k(e){var t=e.children;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,"Search"),t))}function y(e){var t=e.children;return r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"card-body"},r.a.createElement("h3",null,"Books"),r.a.createElement("div",{className:"results"},t)))}var N=a(139),S=a(137),B=(a(98),Object(S.a)(function(e){return{button:{margin:e.spacing(1)}}}));function x(e){var t=B();function a(){console.log("saved"),document.getElementById("savedMsg").style.display="block",setTimeout(function(){document.getElementById("savedMsg").style.display="none"},1e3),d.saveBook({src:e.results[e.id].volumeInfo.imageLinks.thumbnail,href:e.results[e.id].accessInfo.webReaderLink,title:e.results[e.id].volumeInfo.title,author:e.results[e.id].volumeInfo.authors.toString(),summary:e.results[e.id].volumeInfo.description}).catch(function(e){return console.log(e)})}return console.log(e),r.a.createElement("div",{className:"card mb-2",id:e.id},r.a.createElement("div",{className:"card-body"},r.a.createElement("div",{className:"media"},r.a.createElement("img",{className:"mr-3",src:e.src,alt:"Cover Art"}),r.a.createElement("div",{className:"media-body"},r.a.createElement("h5",{className:"mt-0",id:"bookTitle"},e.title),r.a.createElement("p",{id:"tagline"},e.tagline),r.a.createElement("p",{id:"author"},e.author),r.a.createElement("p",{id:"summary"},e.summary),r.a.createElement(N.a,{className:t.button,variant:"contained",color:"primary"},e.LbtnText),r.a.createElement(N.a,{onClick:function(t){var n;t.preventDefault(),"Save"===e.RbtnText?a():(n=e.id,console.log("delete"),d.deleteBook(n).then(function(t){return e.loadSavedBooks()}).catch(function(e){return console.log(e)}))},className:t.button,variant:"contained",color:"primary"},e.RbtnText)))))}a(102);function w(){return r.a.createElement("div",{className:"alert alert-success hidden",role:"alert",id:"savedMsg"},"Book Saved Successfully!")}a(59);var j=Object(S.a)(function(e){return{box:{margin:e.spacing(2)},button:{margin:e.spacing(1)}}});var I=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)([]),c=Object(i.a)(l,2),s=c[0],m=c[1],u=Object(n.useState)([]),h=Object(i.a)(u,2),N=(h[0],h[1]),S=j();return r.a.createElement(f.a,null,r.a.createElement(w,null),r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,sm:4},r.a.createElement(v.a,{className:S.box},r.a.createElement(k,null,r.a.createElement("form",{className:"form",noValidate:!0,autoComplete:"off",onSubmit:function(e){e.preventDefault(),d.getBooks(a).then(function(e){if("error"===e.data.items)throw new Error(e.data.items);N(""),m(e.data.items)}).then(console.log(s)).catch(function(e){return N({error:e.message})})}},r.a.createElement(b.a,{id:"outlined-basic",label:"search",onChange:function(e){o(e.target.value)}}),r.a.createElement(p.a,{color:"primary","aria-label":"upload picture",component:"span",onClick:function(e){e.preventDefault(),d.getBooks(a).then(function(e){if("error"===e.data.items)throw new Error(e.data.items);N(""),m(e.data.items)}).then(console.log(s)).catch(function(e){return N({error:e.message})})}},r.a.createElement(g.a,null)))))),r.a.createElement(E.a,{item:!0,xs:12,sm:8},r.a.createElement(v.a,{className:S.box},r.a.createElement(y,{results:s},s.length>0?s.map(function(e,t){return r.a.createElement(x,{results:s,id:t,src:e.volumeInfo.imageLinks.thumbnail,title:e.volumeInfo.title,author:e.volumeInfo.authors,summary:e.volumeInfo.description,LbtnText:r.a.createElement("a",{target:"_blank",href:e.accessInfo.webReaderLink,rel:"noopener noreferrer"},"View"),RbtnText:"Save"})}):r.a.createElement("h2",null,"No Results to Show"))))))},O=Object(S.a)(function(e){return{box:{margin:e.spacing(2)}}});var T=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1];function l(){d.getSavedBooks().then(function(e){o(e.data),console.log(a)}).catch(function(e){return console.log(e)})}Object(n.useEffect)(function(){l()},[]),Object(n.useEffect)(function(){console.log(a)},[a]);var c=O();return r.a.createElement(f.a,null,r.a.createElement(E.a,{container:!0,spacing:2},r.a.createElement(E.a,{item:!0,xs:12,sm:12},r.a.createElement(v.a,{className:c.box},r.a.createElement(y,{loadSavedBooks:l},a.length>0?(console.log(a),a.map(function(e){return r.a.createElement(x,{key:e._id,loadSavedBooks:l,savedBooks:a,id:e._id,src:e.src,title:e.title,author:e.authors,summary:e.summary,LbtnText:r.a.createElement("a",{target:"_blank",href:e.href,rel:"noopener noreferrer"},"View"),RbtnText:"Delete"})})):r.a.createElement("h2",null,"No Results to Show"))))))};var R=function(){return r.a.createElement("div",null)},C=a(143),L=a(148),D=a(145);var _=function(){return r.a.createElement(C.a,null,r.a.createElement(L.a,{indicatorColor:"primary",textColor:"primary","aria-label":"tabs"},r.a.createElement(D.a,{label:"Google Books Search",href:"/"}),r.a.createElement(D.a,{label:"Search",href:"/search"}),r.a.createElement(D.a,{label:"Saved",href:"/saved"})))};a(105);function M(){return r.a.createElement("div",{className:"jumbotron jumbotron-fluid text-center"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",{className:"display-4 jumbotronHeader"},"Google Book Search"),r.a.createElement("p",{className:"tagline"},"Search and Save Books of Interest")))}var V=function(){return r.a.createElement(c.a,null,r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(M,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:["/","/search"]},r.a.createElement(I,null)),r.a.createElement(s.a,{exact:!0,path:"/saved"},r.a.createElement(T,null)),r.a.createElement(s.a,null,r.a.createElement(R,null)))))};l.a.render(r.a.createElement(V,null),document.getElementById("root"))},59:function(e,t,a){},75:function(e,t,a){e.exports=a(108)},98:function(e,t,a){}},[[75,1,2]]]);
//# sourceMappingURL=main.c67e1cd8.chunk.js.map