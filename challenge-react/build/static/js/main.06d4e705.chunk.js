(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{21:function(e,a,t){e.exports=t.p+"static/media/logo.5d5d9eef.svg"},39:function(e,a,t){e.exports=t(75)},44:function(e,a,t){},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){},48:function(e,a,t){},69:function(e){e.exports={}},75:function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),o=t(35),l=t.n(o),i=(t(44),t(21)),s=t.n(i),m=(t(45),t(46),t(47),t(48),t(8)),u=t(14),p=t(12),d=t.n(p),f=t(17),h=t(22),g=t(36),v=(t(51),t(16)),E=t.n(v),b="https://newsapi.org/v2/top-headlines?country=id&apiKey=485a6bc08eca4546a902aa3f87808b0c",w={full_name:"",url_to_image:"",is_login:!1,username:"",password:"",main_list:[],main_loading:!0,now_time:new Date,search:"",is_query:!1},y=Object(g.a)(w),N=function(e){return{handleChange:function(e,a){return Object(h.a)({},a.target.name,a.target.value)},handleInput:function(e,a){return console.warn(a),Object(h.a)({},a.key,a.value)},reload:function(){var e=Object(f.a)(d.a.mark(function e(a){var t,n,r,c=arguments;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=c.length<=1?void 0:c[1],console.log(t),n=1==(c.length<=1?0:c.length-1)?b+"&category="+t:b+"&q="+(c.length<=2?void 0:c[2]),e.next=5,E.a.get(n+"&pageSize=10").then(function(e){r=e.data}).catch();case 5:return e.abrupt("return",{main_list:r.articles,main_loading:!1,now_time:new Date});case 6:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}()}},k=t(4),O=t(5),j=t(6),x=t(9),_=t(7),C=t(10),A=(t(69),function(e){function a(){return Object(O.a)(this,a),Object(x.a)(this,Object(_.a)(a).apply(this,arguments))}return Object(C.a)(a,e),Object(j.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"list-article-wrapper"},this.props.listArt.map(function(a){return c.a.createElement("div",{className:"list-article-item"},c.a.createElement("div",{className:"article-item--image"},c.a.createElement("img",{src:a.urlToImage,alt:"",width:"100%"})),c.a.createElement("h3",{className:"article-item-title"},a.title),c.a.createElement("div",{className:"article-item-text"},a.description),function(e,a){var t=Number(e.getTime()-a.getTime());n=t<6e4?"just now":t<36e5?" "+Math.floor(t/6e4)+" minutes ago":t<864e5?" "+Math.floor(t/36e5)+" hours ago":t<6048e5?" "+Math.floor(t/864e5)+" days ago":" "+t/6048e5+" weeks ago"}(e.props.nowTime,new Date(a.publishedAt)),c.a.createElement("div",{className:"article-item-updated"},"Published ",n),c.a.createElement("div",{className:"icon-listing row d-fle"},c.a.createElement("div",{className:"col-md-4 text-center"},c.a.createElement("i",{className:"fa fa-heart-o"})),c.a.createElement("div",{className:"col-md-4 text-center"},c.a.createElement("i",{className:"fa fa-share-alt"})),c.a.createElement("div",{className:"col-md-4 text-center"},c.a.createElement("i",{className:"fa fa-thumbs-o-down"}))))}))}}]),a}(r.Component)),I=function(e){function a(){return Object(O.a)(this,a),Object(x.a)(this,Object(_.a)(a).apply(this,arguments))}return Object(C.a)(a,e),Object(j.a)(a,[{key:"signOut",value:function(){this.props.handleInput({key:"is_login",value:!1}),this.props.history.push("/")}},{key:"render",value:function(){var e=this;return console.log(this.props),c.a.createElement("div",{className:"header-lama container-fluid"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-md-5 d-flex align-items-center"},c.a.createElement("div",{className:"header-logo-2 text-center"},c.a.createElement("img",{src:s.a,alt:""})),c.a.createElement("div",{className:"header-logo--text"},"KabarKabar")),c.a.createElement("div",{className:"col-md-7 outer-nav d-flex align-items-center"},c.a.createElement("ul",{className:"nav--list d-flex align-items-center list-unstyled"},c.a.createElement("li",null,c.a.createElement(m.b,{to:"/"},"Beranda")),c.a.createElement("li",null,c.a.createElement(m.b,{to:"/profile"},"Profil")),!0===this.props.is_query?c.a.createElement("li",{onClick:function(){return e.props.int("technology")}},"Teknologi"):c.a.createElement("li",null,c.a.createElement(m.b,{to:"/category/technology"},"Teknologi")),!0===this.props.is_query?c.a.createElement("li",{onClick:function(){return e.props.int("sports")}},"Olahraga"):c.a.createElement("li",null,c.a.createElement(m.b,{to:"/category/sports"},"Olahraga")))))),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("div",{className:"row align-items-center"},c.a.createElement("div",{className:"col-md-6 align-items-center"},c.a.createElement("input",{className:"form-control",type:"text",name:"search",placeholder:"search",onChange:this.props.lakukanPencarian,value:this.props.sementara})),c.a.createElement("div",{className:"col-md-6"},c.a.createElement("ul",{className:"nav--list d-flex align-self-center list-unstyled"},this.props.is_login?c.a.createElement("li",{onClick:function(){return e.signOut()}},"Keluar"):c.a.createElement("li",null,c.a.createElement(m.b,{to:"/signin"},"Masuk")),c.a.createElement("li",null,"Daftar")))))))}}]),a}(r.Component),T=Object(k.connect)("is_login,is_query",N)(Object(u.g)(I)),P=function(e){function a(){var e,t;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(x.a)(this,(e=Object(_.a)(a)).call.apply(e,[this].concat(r)))).componentDidMount=function(){t.props.reload("general")},t}return Object(C.a)(a,e),Object(j.a)(a,[{key:"render",value:function(){return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"body-kabar"},c.a.createElement(T,null),c.a.createElement("div",{className:"container bodynew d-flex"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"load-icon--home fa-3x text-center"},c.a.createElement("i",{className:"fa fa-cog fa-spin"}))),c.a.createElement("div",{className:"col-md-8"},c.a.createElement(A,{listArt:this.props.main_list,loading:this.props.main_loading,nowTime:this.props.now_time})))))}}]),a}(r.Component),S=Object(k.connect)("main_list,main_loading,now_time",N)(Object(u.g)(P)),D=t(19),W=function(e){function a(){var e,t;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(x.a)(this,(e=Object(_.a)(a)).call.apply(e,[this].concat(r)))).goSign=function(){var e={username:t.props.username,password:t.props.password},a=Object(D.a)(Object(D.a)(t));E.a.post("https://reactroutingmock.free.beeceptor.com/signin",e).then(function(e){console.log(e),a.props.handleInput({key:"full_name",value:e.data.nama_lengkap}),a.props.handleInput({key:"url_to_image",value:e.data.url_foto}),a.props.handleInput({key:"is_login",value:!0}),a.props.history.push("/profile")})},t}return Object(C.a)(a,e),Object(j.a)(a,[{key:"render",value:function(){var e=this;return console.log(this.props),!0===this.props.is_login?c.a.createElement(u.a,{to:{pathname:"/profile"}}):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"body-kabar"},c.a.createElement(T,null),c.a.createElement("div",{className:"container bodynew d-flex"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"load-icon--home fa-3x text-center"},c.a.createElement("i",{className:"fa fa-cog fa-spin"}))),c.a.createElement("div",{className:"col-md-8"},c.a.createElement("form",{className:"form-thingy--kotak",onSubmit:function(e){return e.preventDefault()}},c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"exampleInputEmail1"},"username"),c.a.createElement("input",{type:"text",className:"form-control",id:"exampleInputEmail1","aria-describedby":"emailHelp",placeholder:"nama random",name:"username",onChange:function(a){return e.props.handleChange(a)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("label",{for:"exampleInputPassword1"},"password"),c.a.createElement("input",{type:"password",className:"form-control",id:"exampleInputPassword1",placeholder:"Password",name:"password",onChange:function(a){return e.props.handleChange(a)}})),c.a.createElement("div",{className:"form-group"},c.a.createElement("button",{onClick:function(a){return e.goSign()},type:"submit",className:"btn btn-primary"},"Masuk")))))))}}]),a}(r.Component),M=Object(k.connect)("username, password, is_login",N)(Object(u.g)(W)),q=function(e){function a(){return Object(O.a)(this,a),Object(x.a)(this,Object(_.a)(a).apply(this,arguments))}return Object(C.a)(a,e),Object(j.a)(a,[{key:"render",value:function(){return!0!==this.props.is_login?c.a.createElement(u.a,{to:{pathname:"/signin"}}):c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"body-kabar"},c.a.createElement(T,this.props),c.a.createElement("div",{className:"container bodynew d-flex"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"load-icon--home fa-3x text-center"},c.a.createElement("i",{className:"fa fa-cog fa-spin"}))),c.a.createElement("div",{className:"col-md-8"},c.a.createElement("form",{className:"form-thingy--kotak"},c.a.createElement("div",{className:"form-group"},"Nama Lengkap: ",this.props.full_name),c.a.createElement("div",{className:"form-group text-center"},c.a.createElement("img",{src:this.props.url_to_image,alt:"mbak cantik",style:{maxHeight:"300px"}})))))))}}]),a}(r.Component),L=Object(k.connect)("is_login, full_name, url_to_image")(Object(u.g)(q)),R=function(e){function a(){var e,t;Object(O.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(x.a)(this,(e=Object(_.a)(a)).call.apply(e,[this].concat(r)))).handleChange=function(){var e=Object(f.a)(d.a.mark(function e(a){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.target.value,e.t0=t,e.t1=n,e.t2=t.state.mainList,e.next=6,new Date;case 6:e.t3=e.sent,e.t4={search:e.t1,mainList:e.t2,mainLoading:!1,nowTime:e.t3},e.t0.setState.call(e.t0,e.t4),t.state.search.length>2&&t.reload(t.state.search);case 10:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t.componentDidMount=Object(f.a)(d.a.mark(function e(){var a;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.props.match.params.cat,t.props.handleInput({key:"is_query",value:!0}),e.next=4,t.props.reload(a);case 4:case"end":return e.stop()}},e)})),t.internalRoute=function(){var e=Object(f.a)(d.a.mark(function e(a){var n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=a,t.props.history.replace("/category/"+n),e.next=4,t.props.reload(n);case 4:case"end":return e.stop()}},e)}));return function(a){return e.apply(this,arguments)}}(),t}return Object(C.a)(a,e),Object(j.a)(a,[{key:"render",value:function(){var e=this;return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"body-kabar"},c.a.createElement(T,{lakukanPencarian:function(a){return e.handleChange(a)},sementara:this.props.search,int:function(a){return e.internalRoute(a)}}),c.a.createElement("div",{className:"container bodynew d-flex"},c.a.createElement("div",{className:"col-md-4"},c.a.createElement("div",{className:"load-icon--home fa-3x text-center"},c.a.createElement("i",{className:"fa fa-cog fa-spin"}))),c.a.createElement("div",{className:"col-md-8"},c.a.createElement(A,{listArt:this.props.main_list,loading:this.props.main_loading,nowTime:this.props.now_time})))))}}]),a}(r.Component),F=Object(k.connect)("main_list,main_loading,now_time,search",N)(Object(u.g)(R)),K=function(){return c.a.createElement(k.Provider,{store:y},c.a.createElement(m.a,null,c.a.createElement(u.d,null,c.a.createElement(u.b,{exact:!0,path:"/",component:S}),c.a.createElement(u.b,{exact:!0,path:"/signin",component:M}),c.a.createElement(u.b,{exact:!0,path:"/profile",component:L}),c.a.createElement(u.b,{path:"/category/:cat",component:F}))))};var B=function(){return c.a.createElement("div",null,c.a.createElement(K,null))},U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,a){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),a&&a.onUpdate&&a.onUpdate(e)):(console.log("Content is cached for offline use."),a&&a.onSuccess&&a.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}l.a.render(c.a.createElement(B,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var a="".concat("","/service-worker.js");U?(function(e,a){fetch(e,{headers:{"Service-Worker":"script"}}).then(function(t){var n=t.headers.get("content-type");404===t.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):H(e,a)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(a,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")})):H(a,e)})}}()}},[[39,1,2]]]);
//# sourceMappingURL=main.06d4e705.chunk.js.map