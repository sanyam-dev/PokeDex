(this.webpackJsonppokemon=this.webpackJsonppokemon||[]).push([[0],{14:function(e,t,n){e.exports={bar:"Navbar_bar__Yezsv",type:"Navbar_type__2AuuL",button:"Navbar_button__yzVaY"}},18:function(e,t,n){e.exports={btn:"page_btn__mAMQG",bts:"page_bts__2X8tQ"}},23:function(e,t,n){e.exports={img:"Pokemon_img__iUnxn",card:"Pokemon_card__3nOLh"}},24:function(e,t,n){e.exports={pokemonGrid:"PokeList_pokemonGrid__3UM_C",element:"PokeList_element__UiL_d"}},25:function(e,t,n){e.exports={container:"App_container__2BJWu",normal:"App_normal__1uGmf"}},45:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),s=n(10),r=n.n(s),i=(n(45),n(21)),j=n.n(i),o=n(35),b=n(5),u=n(11),l=n.n(u),d=n(23),O=n.n(d),m=n(1);var h=function(e){var t=e.data;return Object(m.jsx)("div",{children:t.map((function(e){return Object(m.jsxs)("p",{children:[e.name,": ",e.value]},e.id)}))})};var x=function(e){var t=e.pokemon,n=Object(a.useState)(""),c=Object(b.a)(n,2),s=c[0],r=c[1],i=Object(a.useState)([]),j=Object(b.a)(i,2),o=j[0],u=j[1],d=Object(a.useState)([]),x=Object(b.a)(d,2),p=x[0],f=x[1],v=Object(a.useState)(!1),g=Object(b.a)(v,2),_=g[0],k=g[1];Object(a.useEffect)((function(){l.a.get(t.url).then((function(e){return r(e.data.sprites.front_default),e.data})).then((function(e){u(e.stats),f(e.types.map((function(e){return e.type.name})))}))}),[]);var N=o.map((function(e,t){return{id:t,name:e.stat.name,value:e.base_stat}})),S=p.join(", "),y=t.name[0].toUpperCase()+t.name.substring(1);return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:O.a.card,id:"card",onClick:function(e){k(!_),console.log(e.target)},children:[Object(m.jsx)("h2",{children:y}),Object(m.jsx)("br",{}),Object(m.jsx)("img",{className:O.a.img,src:s,alt:t.name}),Object(m.jsx)("div",{className:"stat",id:"statID",children:_?Object(m.jsx)(h,{data:N}):Object(m.jsx)("div",{})}),Object(m.jsxs)("p",{id:"type",children:[Object(m.jsx)("strong",{children:" type "}),": ",S]})]})})},p=n(24),f=n.n(p);var v=function(e){var t=e.pokemons;return Object(m.jsx)("div",{className:f.a.pokemonGrid,children:t.map((function(e){return Object(m.jsx)("div",{className:f.a.element,children:Object(m.jsx)(x,{pokemon:e})},e.name)}))})},g=n(18),_=n.n(g),k=n(72);var N=function(e){var t=e.prev,n=e.next,a=e.handleNext,c=e.handlePrev;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:_.a.btn,children:[null!==t?Object(m.jsx)(k.a,{className:_.a.bts,variant:"primary",onClick:function(){return c()},children:" PREV "}):Object(m.jsx)(m.Fragment,{}),null!==n?Object(m.jsx)(k.a,{className:_.a.bts,variant:"primary",onClick:function(){return a()},children:" NEXT "}):Object(m.jsx)(m.Fragment,{})]})})},S=n(25),y=n.n(S),P=n(14),w=n.n(P);var B=function(e){var t=e.getPokemon,n=e.setSearching;return Object(m.jsx)("div",{className:w.a.bar,children:Object(m.jsxs)("form",{className:w.a.search,children:[Object(m.jsx)("input",{className:w.a.type,id:"search"}),Object(m.jsx)("button",{className:w.a.button,onClick:function(e){e.preventDefault();var a=document.getElementById("search").value;a.length>0&&(n(!0),t(a.toLowerCase()))},children:"Search"})]})})},C=n(73),E=n(74),L=n(75),F=n(77),A=n(78),G=n(76);var I=function(e){var t=e.name,n=e.img,a=e.abilities,c=e.stats,s=e.type,r=e.weight,i=e.height;console.log(t,n,a,c,s,r,i);var j=t.toUpperCase(),o=(j=j.substr(0,1))+t.substring(1);return Object(m.jsx)("div",{children:n.length>0?Object(m.jsx)(C.a,{className:"mt-6",children:Object(m.jsxs)(E.a,{className:"mt-10",children:[Object(m.jsx)(L.a,{xs:12,md:6,children:Object(m.jsxs)(F.a,{children:[Object(m.jsxs)(F.a.Header,{children:[Object(m.jsx)("img",{src:n,alt:t}),Object(m.jsx)("h1",{children:o})]}),Object(m.jsxs)(F.a.Body,{children:[Object(m.jsx)("h5",{children:"Abilities"}),a.map((function(e,t){return Object(m.jsx)("div",{children:e},t)}))]}),Object(m.jsxs)(F.a.Body,{children:[Object(m.jsx)("strong",{children:"weight"})," :   ",Math.round(100*(.1*r+Number.EPSILON))/100," kg",Object(m.jsx)("br",{}),Object(m.jsx)("strong",{children:"height"})," :   ",Math.round(100*(.1*i+Number.EPSILON))/100," m"]}),Object(m.jsxs)(F.a.Body,{children:[Object(m.jsx)("h5",{children:"Types"}),Object(m.jsx)("span",{children:s})]})]})}),Object(m.jsx)(L.a,{xs:12,md:6,children:Object(m.jsxs)(F.a,{children:[Object(m.jsxs)(F.a.Body,{children:[Object(m.jsx)("h3",{children:"Stats:"}),c.map((function(e,t){return Object(m.jsxs)("div",{children:[Object(m.jsx)("strong",{children:e.name}),":",Object(m.jsx)(A.a,{now:e.base_stat,max:255,label:e.base_stat})]},t)}))]}),Object(m.jsx)(F.a.Body,{})]})})]})}):Object(m.jsx)(G.a,{variant:"danger",sm:6,children:"No Such Pokemon Found!"})})};var M=function(){var e=Object(a.useState)([]),t=Object(b.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)("true"),r=Object(b.a)(s,2),i=r[0],u=r[1],d=Object(a.useState)(null),O=Object(b.a)(d,2),h=O[0],x=O[1],p=Object(a.useState)(null),f=Object(b.a)(p,2),g=f[0],_=f[1],k=Object(a.useState)("https://pokeapi.co/api/v2/pokemon?limit=12&offset=0"),S=Object(b.a)(k,2),P=S[0],w=S[1],C=Object(a.useState)(!1),E=Object(b.a)(C,2),L=E[0],F=E[1],A=Object(a.useState)(""),G=Object(b.a)(A,2),M=G[0],U=G[1],J=Object(a.useState)(""),z=Object(b.a)(J,2),D=z[0],Q=z[1],T=Object(a.useState)([]),V=Object(b.a)(T,2),X=V[0],Y=V[1],H=Object(a.useState)([]),R=Object(b.a)(H,2),W=R[0],q=R[1],K=Object(a.useState)(""),Z=Object(b.a)(K,2),$=Z[0],ee=Z[1],te=Object(a.useState)(""),ne=Object(b.a)(te,2),ae=ne[0],ce=ne[1],se=Object(a.useState)(""),re=Object(b.a)(se,2),ie=re[0],je=re[1],oe=function(){var e=Object(o.a)(j.a.mark((function e(){var t;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(L){e.next=8;break}return e.next=3,l.a.get(P).then((function(e){return e.data}));case 3:t=e.sent,c(t.results.map((function(e){return e}))),x(t.next),_(t.previous),u(!1);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(a.useEffect)((function(){return oe()}),[P]),Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{className:L?y.a.container:y.a.normal,children:[Object(m.jsx)(B,{getPokemon:function(e){var t="https://pokeapi.co/api/v2/pokemon/".concat(e);l.a.get(t).then((function(e){return e.data})).then((function(e){U(e.name),Q(e.sprites.front_default),q(e.abilities.map((function(e){return e.ability.name}))),Y(e.stats.map((function(e){return{base_stat:e.base_stat,name:e.stat.name}}))),ce(e.weight);var t=e.types.map((function(e){return e.type.name}));ee(t.join(", ")),je(e.height)}))},setSearching:F}),L?Object(m.jsx)(I,{name:M,img:D,height:ie,abilities:W,stats:X,weight:ae,type:$}):i?Object(m.jsx)("div",{children:"loading...."}):Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(v,{pokemons:n}),Object(m.jsx)(N,{prev:g,next:h,handleNext:function(){null!==h&&w(h)},handlePrev:function(){null!==g&&w(g)}})]})]})})};n(69);r.a.render(Object(m.jsx)(c.a.StrictMode,{children:Object(m.jsx)(M,{})}),document.getElementById("root"))}},[[70,1,2]]]);
//# sourceMappingURL=main.a934674b.chunk.js.map