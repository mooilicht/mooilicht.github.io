(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{275:function(e,t,n){var content=n(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(110).default)("be47691e",content,!0,{sourceMap:!1})},276:function(e,t,n){"use strict";n.r(t);n(15);var o={data:function(){return{category:[],isActive:!1}},props:{list:{type:Array,default:[]},slug:{type:String,default:""},toc:{type:Array,default:null}},created:function(){this.category=this.categoryBy(this.list,"category")},methods:{categoryBy:function(data,e){return data.reduce((function(t,n){var o=n[e];return void 0===t[o]&&(t[o]=[]),t[o].push(n),t}),{})},toggleNav:function(){this.isActive=!this.isActive},showDetail:function(link){this.isActive=!1,this.$emit("detail",link.id)}}},r=(n(277),n(48)),component=Object(r.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("aside",[n("header",[n("span",{staticClass:"material-symbols-outlined",on:{click:e.toggleNav}},[e._v(" menu ")]),e._v(" "),n("a",{attrs:{href:"/"}},[e._v("MOOI's TIL")])]),e._v(" "),n("nav",{class:{isActive:e.isActive}},[n("ul",e._l(e.category,(function(t,o){return n("li",{key:o},[n("p",[e._v(e._s(o))]),e._v(" "),n("ul",e._l(t,(function(t){return n("li",{key:t.slug},[n("NuxtLink",{attrs:{to:{name:"slug",params:{slug:t.slug}}}},[e._v("\n              "+e._s(t.title)+"\n            ")]),e._v(" "),e.slug===t.slug?n("ul",e._l(e.toc.filter((function(i){return 2===i.depth})),(function(link){return n("li",{key:link.id,on:{click:function(t){return e.showDetail(link)}}},[n("NuxtLink",{attrs:{to:"#"+link.id}},[e._v(e._s(link.text))])],1)})),0):e._e()],1)})),0)])})),0)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Nav:n(276).default})},277:function(e,t,n){"use strict";n(275)},278:function(e,t,n){var o=n(109)(!1);o.push([e.i,'*{box-sizing:border-box;text-decoration:none;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Open Sans","Helvetica Neue",sans-serif}body{margin:0}aside{background:#1e272e;width:300px;position:fixed;top:0;height:100%;overflow-y:auto;z-index:1}aside::-webkit-scrollbar{width:1px}@media screen and (max-width:900px){aside{width:100%;height:auto}}aside header{display:flex;padding:15px;font-size:1.2rem;align-items:center}aside header a{color:#ffc048;display:block;width:100%;text-align:center}@media screen and (max-width:900px){aside header a{text-align:left}}aside header span{cursor:pointer;color:#d2dae2;margin-right:10px}aside header span.material-symbols-outlined{display:none}@media screen and (max-width:900px){aside header span.material-symbols-outlined{display:block}}aside nav .nuxt-link-active{color:#d2dae2;display:block;border-right:5px solid #ffc048}@media screen and (max-width:900px){aside nav .nuxt-link-active{border:none}}aside nav ul{list-style:none;padding:0;margin:0 0 0 20px}@media screen and (max-width:900px){aside nav ul{margin:0}}aside nav ul li{line-height:2}@media screen and (max-width:900px){aside nav ul li li,aside nav ul li p{margin:10px}}aside nav ul li p{color:#d2dae2;margin:0;padding:0;font-weight:700}aside nav ul li a{color:#808e9b}@media screen and (max-width:900px){aside nav{display:none}aside nav.isActive{display:block;position:fixed;background:#1e272e;width:100%;height:100%;text-align:center;overflow-y:auto;padding-bottom:60px}aside nav.isActive::-webkit-scrollbar{width:1px}}main{padding-left:300px}main section{max-width:900px;margin:0 auto;padding:15px}main section .content-date{display:inline-block;border-bottom:3px solid #ffc048;padding:5px}main section h1{font-size:4rem;margin:15px 0;font-family:"Black Han Sans",sans-serif;font-weight:400}main section footer{display:flex;margin-top:40px;border-top:1px solid #808e9b}main section footer div{flex-grow:1;margin-top:20px}main section footer div a{display:inline-block;padding:3px;font-weight:700}main section footer div a:hover{border-bottom:3px solid #ffc048}main section footer div:last-child{text-align:right}@media screen and (max-width:900px){main{padding:30px 0 0}}',""]),e.exports=o},295:function(e,t,n){"use strict";n.r(t);var o=n(23),r=n(9),l=(n(46),{asyncData:function(e){return Object(r.a)(regeneratorRuntime.mark((function t(){var n,r,content,l,d,c,m,f;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=e.$content,r=e.params,t.next=3,n("TIL",r.slug).fetch();case 3:return content=t.sent,t.next=6,n("TIL").only("title","slug").sortBy("updatedAt","desc").surround(r.slug).fetch();case 6:return l=t.sent,d=Object(o.a)(l,2),c=d[0],m=d[1],t.next=12,n("TIL").only(["slug","title","category"]).sortBy("updatedAt","desc").fetch();case 12:return f=t.sent,t.abrupt("return",{content:content,prev:c,next:m,list:f});case 14:case"end":return t.stop()}}),t)})))()},methods:{detail:function(e){document.getElementById(e).scrollIntoView(!0)},formatDate:function(e){return new Date(e).toLocaleDateString("en",{year:"numeric",month:"long",day:"numeric"})}}}),d=n(48),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Nav",{attrs:{list:e.list,slug:e.content.slug,toc:e.content.toc},on:{detail:e.detail}}),e._v(" "),n("main",[n("section",[n("p",{staticClass:"content-date"},[e._v(e._s(e.formatDate(e.content.updatedAt)))]),e._v(" "),n("h1",[e._v(e._s(e.content.title))]),e._v(" "),n("nuxt-content",{attrs:{document:e.content}}),e._v(" "),n("footer",[n("div",[e.prev?n("NuxtLink",{attrs:{to:{name:"slug",params:{slug:e.prev.slug}}}},[e._v("\n            ← "+e._s(e.prev.title)+"\n          ")]):e._e()],1),e._v(" "),n("div",[e.next?n("NuxtLink",{attrs:{to:{name:"slug",params:{slug:e.next.slug}}}},[e._v("\n            "+e._s(e.next.title)+" →\n          ")]):e._e()],1)])],1)])],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{Nav:n(276).default})}}]);