(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{181:function(t,e,n){var content=n(187);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("772dae24",content,!0,{sourceMap:!1})},182:function(t,e,n){var content=n(189);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("498c4667",content,!0,{sourceMap:!1})},183:function(t,e,n){var content=n(191);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(48).default)("1a9cb10a",content,!0,{sourceMap:!1})},186:function(t,e,n){"use strict";var r=n(181);n.n(r).a},187:function(t,e,n){(e=n(47)(!1)).push([t.i,".post-item[data-v-3b0efbf9]{box-shadow:0 0 5px rgba(0,0,0,.3);border:1px solid transparent;border-radius:10px;margin:20px 0;padding:20px}.post-item[data-v-3b0efbf9]:first-child{background:#1e90ff;color:#fff}.post-item>h3[data-v-3b0efbf9]{margin-bottom:15px}",""]),t.exports=e},188:function(t,e,n){"use strict";var r=n(182);n.n(r).a},189:function(t,e,n){(e=n(47)(!1)).push([t.i,".container[data-v-09efa3d8]{display:flex;flex-direction:column;padding-top:40px;align-items:center}",""]),t.exports=e},190:function(t,e,n){"use strict";var r=n(183);n.n(r).a},191:function(t,e,n){(e=n(47)(!1)).push([t.i,".container[data-v-3035be44]{min-height:100vh}",""]),t.exports=e},192:function(t,e,n){"use strict";n.r(e);n(34);var r=n(5),o=n(44),c=n.n(o),f={props:{post:{type:Object,default:function(){}}}},l=(n(186),n(17)),d=Object(l.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"post-item"},[n("h3",[t._v("#"+t._s(t.post.id)+": "+t._s(t.post.title.rendered))]),t._v(" "),n("div",{staticClass:"the-excerpt",domProps:{innerHTML:t._s(t.post.excerpt.rendered)}})])}),[],!1,null,"3b0efbf9",null).exports,h=(n(188),{components:{Loader:Object(l.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",[this._v("\n    Fetching posts from WP REST API...\n  ")])])}],!1,null,"09efa3d8",null).exports,PostItem:d},data:function(){return{posts:[]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.a.get("https://demo.wp-api.org/wp-json/wp/v2/posts");case 2:n=e.sent,r=n.data,t.posts=r;case 5:case"end":return e.stop()}}),e)})))()}}),v=(n(190),Object(l.a)(h,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"container"},[e("div",[e("h1",{staticClass:"title"},[this._v("Posts")]),this._v(" "),this.$fetchState.pending?e("Loader"):e("div",this._l(this.posts,(function(t){return e("post-item",{key:t.id,attrs:{post:t}})})),1)],1)])}),[],!1,null,"3035be44",null));e.default=v.exports}}]);