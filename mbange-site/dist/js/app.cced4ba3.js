(function(t){function e(e){for(var s,o,i=e[0],c=e[1],l=e[2],d=0,b=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&b.push(r[o][0]),r[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(b.length)b.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,i=1;i<a.length;i++){var c=a[i];0!==r[c]&&(s=!1)}s&&(n.splice(e--,1),t=o(o.s=a[0]))}return t}var s={},r={app:0},n=[];function o(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=s,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(a,s,function(e){return t[e]}.bind(null,s));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"04df":function(t,e,a){},1:function(t,e){},10:function(t,e){},11:function(t,e){},12:function(t,e){},13:function(t,e){},14:function(t,e){},1402:function(t,e,a){t.exports=a.p+"img/hospedaria_capa.d8b2fa78.jpg"},15:function(t,e){},16:function(t,e){},17:function(t,e){},"18bb":function(t,e,a){"use strict";a("f9f1")},2:function(t,e){},"2a00":function(t,e,a){},3:function(t,e){},"3e11":function(t,e,a){},"3f9d":function(t,e,a){(function(t){a("a15b");var e=a("b97d"),s=a("a1fd"),r=a("df7c"),n=e();n.use("/",s(r.join(t,"/dist"))),n.get(/.*/,(function(e,a){a.sendFile(r.join(t,"/dist/index.html"))}));var o=Object({NODE_ENV:"production",BASE_URL:"/"}).PORT||8080;n.listen(o),console.log("app is listening on port: ".concat(o))}).call(this,"/")},4:function(t,e){},"40c6":function(t,e,a){"use strict";a("56fd")},5:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("b",[a("nav-bar-component")],1),a("b",[a("router-view")],1),a("b",[a("footer-component")],1)])},n=[],o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-navbar",{attrs:{toggleable:"lg",type:"dark",variant:"primary"}},[a("b-navbar-brand",{attrs:{to:"/"}},[a("h1",[a("a",{attrs:{to:"/"}},[t._v("Mbange")])])]),a("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[a("b-navbar-nav",[a("b-nav-item",{attrs:{to:"/"}},[t._v("Home")]),a("b-nav-item",{attrs:{to:"/shopping"}},[t._v("Shopping")]),a("b-nav-item",{attrs:{to:"/leisureSpace"}},[t._v("Guia Turístico")]),a("b-nav-item",{attrs:{to:"/plan"}},[t._v("Planos")]),a("b-nav-item",{attrs:{to:"/contact"}},[t._v("Contacto")])],1),a("b-navbar-nav",{staticClass:"ml-auto"},[a("b-nav-form",[a("b-form-input",{staticClass:"mr-sm-2",attrs:{size:"sm",placeholder:"Search"}}),a("b-button",{staticClass:"my-2 my-sm-0",attrs:{size:"sm",type:"submit"}},[t._v("Search")])],1),a("b-nav-item-dropdown",{attrs:{right:""},scopedSlots:t._u([{key:"button-content",fn:function(){return[a("em",[t._v("User")])]},proxy:!0}])},[a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Profile")]),a("b-dropdown-item",{attrs:{href:"#"}},[t._v("Sign Out")])],1)],1)],1)],1)],1)},i=[],c={name:"NavBarComponent"},l=c,u=(a("18bb"),a("2877")),d=Object(u["a"])(l,o,i,!1,null,"c75b5306",null),b=d.exports,m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"footer-master"}},[a("footer",[a("b-container",{staticClass:"bv-example-row"},[a("b-row",[a("b-col",{attrs:{col:"",sm:"3",id:"mbange"}},[a("h3",[t._v("Mbange")]),a("ul",[a("li",[a("a",{attrs:{href:"#"}},[t._v(" App Mbnage ")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v(" Shopping ")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v(" Futuro ")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v(" Whatsapp ")])])])]),a("b-col",{attrs:{col:"",sm:"3",id:"sobre-nos"}},[a("h3",[t._v("Sobre nós")]),a("p",[t._v(" The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. ")])]),a("b-col",{attrs:{col:"",sm:"3"}},[a("h3",[t._v("Conexões")]),a("b-row",[a("b-col",[a("i",{staticClass:"fab fa-facebook fa-2x"})]),a("b-col",[a("i",{staticClass:"fab fa-youtube fa-2x"})]),a("b-col",[a("i",{staticClass:"fab fa-instagram fa-2x"})]),a("b-col",[a("i",{staticClass:"fab fa-whatsapp fa-2x"})])],1)],1),a("b-col",{attrs:{col:"",sm:"3"}},[a("h3",[t._v("Newsletter")]),a("span",[t._v(" Fique atualizado com nossas últimas notícias ")])])],1),a("b-row",[a("b-col",{attrs:{col:"",sm:"12"}},[a("hr")])],1),a("b-row",{attrs:{id:"footer-mbange"}},[a("b-col",{attrs:{col:"",sm:"12"}},[t._v(" Conteúdo de largura variável ")]),a("p",[t._v(' Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat." ')])],1)],1)],1)])},p=[],f={name:"FooterComponent"},h=f,g=(a("40c6"),Object(u["a"])(h,m,p,!1,null,"41406140",null)),v=g.exports,_={name:"App",components:{NavBarComponent:b,FooterComponent:v}},x=_,w=(a("87a1"),Object(u["a"])(x,r,n,!1,null,"2e18ffa6",null)),y=w.exports,C=a("8c4f"),I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"home"}},[s("b-container",[s("b-row",[s("b-col",[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:4e3,controls:"",indicators:"",background:"#ababab","img-width":"100%","img-height":"180"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},[s("b-carousel-slide",{staticClass:"image-carrossel",attrs:{caption:"First slide",text:"Nulla vitae elit libero, a pharetra augue mollis interdum.",width:"100%",height:"200px","img-src":a("7529")}}),s("b-carousel-slide",{staticClass:"image-carrossel",attrs:{width:"100%",height:"200px","img-src":a("dd0a")}},[s("h1",[t._v("Hello world!")])]),s("b-carousel-slide",{staticClass:"image-carrossel",attrs:{width:"100%",height:"200px","img-src":a("1402")}}),s("b-carousel-slide",{scopedSlots:t._u([{key:"img",fn:function(){return[s("img",{staticClass:"d-block img-fluid w-100 image-carrossel",attrs:{width:"100%",height:"200px",src:a("dd0a"),alt:"image slot"}})]},proxy:!0}])}),s("b-carousel-slide",{staticClass:"image-carrossel",attrs:{width:"100%",height:"200px","img-src":a("1402")}},[s("p",[t._v(" Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque ut lacus vel interdum. ")])])],1)],1)],1),s("b-row",[s("b-col",[s("h3",[t._v(" Serviços ")])])],1),s("b-row",[s("b-col",[s("h4",[t._v("Shopping")]),s("i",{staticClass:"fas fa-shopping-cart fa-10x"}),s("p",[t._v(" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text Shopping. ")])]),s("b-col",[s("h4",[t._v("Guia Turístico")]),s("i",{staticClass:"fas fa-bus-alt fa-10x"}),s("p",[t._v(" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ")])]),s("b-col",[s("h4",[t._v("Paisagens")]),s("i",{staticClass:"fas fa-hotel fa-10x"}),s("p",[t._v(" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ")])]),s("b-col",[s("h4",[t._v("Hospedaria")]),s("i",{staticClass:"fas fa-umbrella-beach fa-10x"}),s("p",[t._v(" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ")])])],1)],1)],1)},L=[],S={data:function(){return{slide:0,sliding:null}},methods:{}},k=S,O=(a("99f2"),Object(u["a"])(k,I,L,!1,null,"4805de9d",null)),j=O.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"contact"}},[a("b-container",{staticClass:"bv-example-row"},[a("b-row",{staticClass:"mt-4"},[a("b-col",{attrs:{col:"",sm:"12"}},[a("iframe",{staticStyle:{border:"0"},attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31532.472609365024!2d13.173665169214686!3d-8.920517640147363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1a51f53b60545d67%3A0xed624daf9afdcf09!2sTalatona!5e0!3m2!1spt-PT!2sao!4v1612810202677!5m2!1spt-PT!2sao",width:"100%",height:"350",frameborder:"0",allowfullscreen:"","aria-hidden":"false",tabindex:"0"}})])],1),a("hr"),a("b-row",[a("b-col",{attrs:{id:"contacto-detalhes"}},[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-row",[a("b-col",{attrs:{cols:"1"}},[a("i",{staticClass:"fas fa-house-user fa-lg"})]),a("b-col",{attrs:{cols:"11"}},[a("span",[t._v("Luanda, Angola")]),t._v(" "),a("br"),a("span",[t._v("Mbange")])])],1)],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",{attrs:{cols:"12"}},[a("b-row",[a("b-col",{attrs:{cols:"1"}},[a("i",{staticClass:"fas fa-phone-volume fa-lg"})]),a("b-col",{attrs:{cols:"11"}},[a("span",[t._v("+ (244) 923923923")]),t._v(" "),a("br"),a("span",[t._v(" De segunda a sexta, das 9h às 18h ")])])],1)],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",{attrs:{cols:"12"}},[a("b-row",[a("b-col",{attrs:{cols:"1"}},[a("i",{staticClass:"fas fa-envelope fa-lg"})]),a("b-col",{staticClass:"contact-text",attrs:{cols:"11"}},[a("span",[t._v("mbange.support@mbange.com.ao")]),t._v(" "),a("br"),a("span",[t._v(" Envie-nos a sua consulta! ")])])],1)],1)],1)],1),a("b-col",[a("b-row",[a("b-col",{attrs:{cols:"12"}},[a("b-row",[a("b-form-input",{attrs:{id:"input-small",placeholder:"Nome"}})],1),a("b-row",{staticClass:"mt-3"},[a("b-form-input",{attrs:{id:"input-small",placeholder:"Email"}})],1),a("b-row",{staticClass:"mt-3"},[a("b-form-input",{attrs:{id:"input-small",placeholder:"Assunto"}})],1)],1)],1)],1),a("b-col",[a("b-row",{},[a("b-form-textarea",{attrs:{id:"textarea-small",size:"sm",rows:"6",placeholder:"Mensagem"}})],1)],1)],1),a("b-row",{staticClass:"mt-3"},[a("b-col",{attrs:{cols:"12"}},[a("b-button",{attrs:{id:"contact-button"}},[t._v(" Enviar ")])],1)],1),a("hr")],1)],1)},P=[],N={},T=N,M=(a("7468"),Object(u["a"])(T,E,P,!1,null,"de24900e",null)),$=M.exports,A=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",[a("b-row",[a("b-col",{attrs:{col:"",sm:"12"}},[a("p",[t._v(" Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ")])])],1),a("b-row",[a("b-col",{attrs:{col:"",sm:"12"}},[a("b-card-group",{attrs:{deck:""}},[a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"primary","text-variant":"white",header:"Primary"}},[a("b-card-text",[t._v(" All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. "),a("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("Comprar plano")])],1)],1),a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"secondary","text-variant":"white",header:"Secondary"}},[a("b-card-text",[t._v(" All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. "),a("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("Comprar plano")])],1)],1),a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"success","text-variant":"white",header:"Success"}},[a("b-card-text",[t._v(" All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. "),a("b-button",{attrs:{href:"#",variant:"primary"}},[t._v("Comprar plano")])],1)],1)],1)],1)],1)],1)],1)},q=[],F={},H=F,B=Object(u["a"])(H,A,q,!1,null,"25da1f31",null),R=B.exports,U=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"LeisureSpace"}},[s("b-container",{staticClass:"bv-example-row",attrs:{id:"LeisureSpace-internal"}},[s("b-row",{staticClass:"pt-2"},[s("b-col",[s("b-img",{attrs:{thumbnail:"",fluid:"",src:a("1402"),alt:"Image 3"}})],1),s("b-col",[s("b-img",{attrs:{thumbnail:"",fluid:"",src:a("dd0a"),alt:"Image 2"}})],1),s("b-col",[s("b-img",{attrs:{thumbnail:"",fluid:"",src:a("7529"),alt:"Image 3 alterar"}})],1),s("b-col",[s("b-img",{attrs:{thumbnail:"",fluid:"",src:a("1402"),alt:"Image 3"}})],1)],1),s("b-row",{staticClass:"mt-3"},[s("b-col",[s("h4",[t._v("Hotel")]),s("p",[t._v(" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ")])]),s("b-col",[s("h4",[t._v("Resourt")]),s("p",[t._v(" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ")])]),s("b-col",[s("h4",[t._v("Paisagens")]),s("p",[t._v(" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ")])]),s("b-col",[s("h4",[t._v("Hospedaria")]),s("p",[t._v(" If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. ")])])],1)],1)],1)},z=[],D={data:function(){return{imagem_hotel:"src/static/Resourt-188153847.jpg",alt:"Imagem do hotel."}}},G=D,J=(a("e493"),Object(u["a"])(G,U,z,!1,null,"9c0d2bde",null)),V=J.exports,W=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-container",[a("div",[a("b-card-group",{attrs:{deck:""}},[a("a",[a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"primary","text-variant":"white",header:"Luanda"}},[a("b-card-text",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])],1)],1),a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"secondary","text-variant":"white",header:"Benguela"}},[a("b-card-text",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])],1),a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"success","text-variant":"white",header:"Malanje"}},[a("b-card-text",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])],1)],1)],1),a("div",{staticClass:"mt-3"},[a("b-card-group",{attrs:{deck:""}},[a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"info","text-variant":"white",header:"Huíla"}},[a("b-card-text",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])],1),a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"warning","text-variant":"white",header:"Namibe"}},[a("b-card-text",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])],1),a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"danger","text-variant":"white",header:"Huambo"}},[a("b-card-text",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])],1)],1)],1),a("div",{staticClass:"mt-3"},[a("b-card-group",{attrs:{deck:""}},[a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"light",header:"Lunda-Norte"}},[a("b-card-text",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])],1),a("b-card",{staticClass:"text-center",attrs:{"bg-variant":"dark",header:"Lunda-Sul","text-variant":"white"}},[a("b-card-text",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])],1),a("b-card",{staticClass:"text-center",attrs:{header:"Bengo"}},[a("b-card-text",[t._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit.")])],1)],1)],1)])],1)},K=[],Q={},X=Q,Y=Object(u["a"])(X,W,K,!1,null,"b6805716",null),Z=Y.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:""}},[t._v(" teste ")])},et=[],at={},st=at,rt=Object(u["a"])(st,tt,et,!1,null,"4b550d38",null),nt=rt.exports;s["default"].use(C["a"]);var ot=[{path:"/",name:"index",component:j},{path:"/contact",name:"contact",component:$},{path:"/plan",name:"plan",component:R},{path:"/leisureSpace",name:"leisureSpace",component:V},{path:"/shopping",name:"shopping",component:Z},{path:"/shoppingCounty",name:"shoppingCounty",component:nt}],it=new C["a"]({mode:"history",base:"/",routes:ot}),ct=it,lt=(a("3f9d"),a("15f5"),a("7051"),a("5f5b")),ut=a("b1e0");a("f9e3"),a("2dd8");s["default"].use(lt["a"]),s["default"].use(ut["a"]),s["default"].config.productionTip=!1,new s["default"]({router:ct,render:function(t){return t(y)}}).$mount("#app")},"56fd":function(t,e,a){},6:function(t,e){},"6d7f":function(t,e,a){},7:function(t,e){},7468:function(t,e,a){"use strict";a("6d7f")},7529:function(t,e,a){t.exports=a.p+"img/paisagem_capa.274bd974.jpg"},"7fbc":function(t,e){function a(t){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}a.keys=function(){return[]},a.resolve=a,t.exports=a,a.id="7fbc"},8:function(t,e){},"87a1":function(t,e,a){"use strict";a("2a00")},9:function(t,e){},"99f2":function(t,e,a){"use strict";a("04df")},dd0a:function(t,e,a){t.exports=a.p+"img/Resourt-188153847.b1f5d024.jpg"},e493:function(t,e,a){"use strict";a("3e11")},f9f1:function(t,e,a){}});
//# sourceMappingURL=app.cced4ba3.js.map