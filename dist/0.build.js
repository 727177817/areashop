webpackJsonp([0],{73:function(n,e,t){"use strict";function r(n){t(87)}Object.defineProperty(e,"__esModule",{value:!0});var a=t(77),o=t(89),i=t(15),s=r,d=i(a.a,o.a,!1,s,"data-v-61455391",null);e.default=d.exports},77:function(n,e,t){"use strict";t(16);e.a={name:"getCoupon",data:function(){return{headerData:{title:"获取优惠券"},list:[],coupon:{}}},title:function(){return"获取优惠券"},beforeCreate:function(){var n=this,e=this.$route.query.id,t=this.$route.query.token;Fetch({url:config.HOST_API+"coupon/wantMoney?id="+e,token:t,method:"GET"}).then(function(e){200===e.code?n.coupon=e:400===e.code&&(n.coupon=e)}).catch(function(n){console.log(n)}),Fetch({url:config.HOST_API+"coupon/wantMoneyUsers?id="+e,token:t,method:"GET"}).then(function(e){200===e.code?n.list=e.data:400===e.code&&console.log(e.massage||"你已领取过该红包")}).catch(function(n){console.log(n)})},computed:{},methods:{use:function(){wx.miniProgram.switchTab({url:"/pages/main/index"})}}}},87:function(n,e,t){var r=t(88);"string"==typeof r&&(r=[[n.i,r,""]]),r.locals&&(n.exports=r.locals);t(14)("00fc6804",r,!0,{})},88:function(n,e,t){e=n.exports=t(13)(!1),e.push([n.i,'\n@charset "UTF-8";\n/*\n *常用颜色和主色\n */\n/*\n *分割线\n */\n/*\n *主要和次要颜色\n */\n/*\n *成功，信息，警告，危险对应色值\n */\n/*\n *排版Typography\n */\n/*\n *Font, line-height, and color for body text, headings, and more.\n */\n/*\n *常用颜色和主色\n */\n/*\n *分割线\n */\n/*\n *主要和次要颜色\n */\n/*\n *成功，信息，警告，危险对应色值\n */\n/*\n *排版Typography\n */\n/*\n *Font, line-height, and color for body text, headings, and more.\n */\n/* 动画 */\n/* 边框圆角 */\n/* 弹性布局 */\n/* Box pack,横轴对其方式\n** start:左对齐\n** end: 右对齐\n** center:中间对齐\n** justify:两端对齐\n*/\n/* 项目排列方向\n** horizontal: 从左到右排列\n** vertical: 从上到下垂直排列\n** inline-axis: 沿着行内轴来排列子元素\n** block-axis: 沿着块轴来排列子元素\n** inherit: 从父级继承box-orient属性\n*/\n/* 关闭按钮 */\n/* 显示省略号（...） */\n/* 阴影（...） */\n/* 定位（...） */\n/* 清除浮动 */\n/* 定义高宽 */\n/* 盒子模型 */\n/* 过渡 */\n.container[data-v-61455391] {\n  padding: .15rem 0;\n  background: #f1492e;\n}\n\n/*.top{\n  background: rgba(255,255,255,.8);\n  border-radius: .06rem;\n  padding-left: .2rem;\n  display: -webkit-box;\n\t.logo{\n\t  width: .4rem;\n\t}\n\t.logo img{\n\t  display: block;\n\t  height: .4rem;\n\t}\n\t.text{\n\t  -webkit-box-flex: 1;\n\t  font-size: .14rem;\n\t  line-height: .4rem;\n\t  color: #515151;\n\t}\n}*/\n.coupon[data-v-61455391] {\n  margin: .2rem .15rem 0 .15rem;\n  position: relative;\n  border: .01rem solid #eee;\n  box-shadow: 0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);\n  border-radius: .06rem;\n  border-bottom: .01rem solid #fff;\n  display: -webkit-box;\n  -webkit-box-align: center;\n  background: rgba(255, 255, 255, 0.8);\n}\n.coupon .left[data-v-61455391] {\n    width: .8rem;\n    text-align: center;\n    color: #E9521A;\n    font-size: .3rem;\n}\n.coupon .left small[data-v-61455391], .coupon .left strong[data-v-61455391] {\n    line-height: 1;\n}\n.coupon .left small[data-v-61455391] {\n    font-size: .14rem;\n}\n.coupon .right[data-v-61455391] {\n    padding: .1rem;\n    border-left: .01rem dashed #eee;\n    -webkit-box-flex: 1;\n    flex-box: 1;\n}\n.coupon .right .name[data-v-61455391] {\n    font-size: .14rem;\n    color: #515151;\n    line-height: 1.4;\n}\n.coupon .right .time[data-v-61455391] {\n    margin-top: .06rem;\n    font-size: .12rem;\n    color: #818181;\n}\n.coupon .use[data-v-61455391] {\n    width: .6rem;\n    text-align: center;\n    height: .24rem;\n    line-height: .24rem;\n    margin-right: .1rem;\n    background: #E9521A;\n    font-size: .14rem;\n    color: #fff;\n    border-radius: .36rem;\n}\n.coupon-nothing[data-v-61455391] {\n  margin: .2rem .15rem 0 .15rem;\n  position: relative;\n  border: .01rem solid #eee;\n  box-shadow: 0 0.01rem 0.03rem 0 rgba(0, 0, 0, 0.15);\n  border-radius: .06rem;\n  border-bottom: .01rem solid #E9521A;\n  background: rgba(255, 255, 255, 0.8);\n  text-align: center;\n  padding: .1rem 0;\n  line-height: 1.6;\n}\n.coupon-nothing .nothing[data-v-61455391] {\n  font-size: .16rem;\n  color: #515151;\n}\n.coupon-nothing .note[data-v-61455391] {\n  font-size: .14rem;\n  color: #818181;\n}\n.user[data-v-61455391] {\n  margin: .2rem .15rem 0 .15rem;\n  background: rgba(255, 255, 255, 0.8);\n  border-radius: .06rem;\n}\n.user .title[data-v-61455391] {\n    line-height: .4rem;\n    color: #515151;\n    text-align: center;\n    font-size: .16rem;\n}\n.user .list[data-v-61455391] {\n    display: -webkit-box;\n    -webkit-box-align: center;\n    margin: 0 .1rem;\n    border-top: .01rem solid #eee;\n}\n.user .avatar[data-v-61455391] {\n    display: block;\n    width: .34rem;\n    height: .34rem;\n    border-radius: 34rem;\n}\n.user .info[data-v-61455391] {\n    font-size: .14rem;\n    -webkit-box-flex: 1;\n    margin: .1rem;\n}\n.user .name[data-v-61455391] {\n    color: #515151;\n}\n.user .time[data-v-61455391] {\n    color: #818181;\n}\n.user .price[data-v-61455391] {\n    width: .8rem;\n    font-size: .3rem;\n    color: #E9521A;\n    text-align: right;\n}\n.user .price small[data-v-61455391] {\n    font-size: .14rem;\n}\n.user img[data-v-61455391] {\n    display: block;\n    width: .4rem;\n    height: .4rem;\n    border-radius: 100%;\n}\n.rule[data-v-61455391] {\n  margin: .2rem .15rem 0 .15rem;\n  border-radius: .06rem;\n  padding: .1rem .2rem;\n  background: rgba(255, 255, 255, 0.8);\n}\n.rule .title[data-v-61455391] {\n    line-height: .4rem;\n    color: #515151;\n    font-size: .16rem;\n}\n.rule .content[data-v-61455391] {\n    line-height: .20rem;\n    color: #818181;\n    font-size: .14rem;\n}\n.home[data-v-61455391] {\n  position: fixed;\n  top: .3rem;\n  left: .2rem;\n  width: .4rem;\n  height: .4rem;\n  line-height: .4rem;\n  border-radius: .4rem;\n  background: rgba(255, 255, 255, 0.7);\n  text-align: center;\n}\n.home .icon[data-v-61455391] {\n    width: .26rem;\n    height: .26rem;\n    margin-top: .07rem;\n    /*vertical-align: -0.15em;*/\n    fill: currentColor;\n    overflow: hidden;\n    color: #515151;\n}\n',""])},89:function(n,e,t){"use strict";var r=function(){var n=this,e=n.$createElement,r=n._self._c||e;return r("div",{staticClass:"container"},[r("img",{attrs:{src:t(90),alt:""}}),n._v(" "),200==n.coupon.code?r("div",{staticClass:"coupon"},[r("div",{staticClass:"left"},[r("small",[n._v("￥")]),n._v(n._s(n.coupon.data.type_money)+"\n            ")]),n._v(" "),r("div",{staticClass:"right"},[r("div",{staticClass:"name"},[n._v(n._s(n.coupon.data.type_name))]),n._v(" "),r("div",{staticClass:"time"},[n._v(n._s(n._f("dateFormat")(n.coupon.data.use_start_date,"date"))+"至"+n._s(n._f("dateFormat")(n.coupon.data.use_end_date,"date")))])]),n._v(" "),r("div",{staticClass:"use",on:{click:n.use}},[n._v("去使用")])]):r("div",{staticClass:"coupon-nothing"},[r("div",{staticClass:"nothing"},[n._v(n._s(n.coupon.message))])]),n._v(" "),r("div",{staticClass:"user"},[r("div",{staticClass:"title"},[n._v("看邻居们手气如何")]),n._v(" "),n._l(n.list,function(e){return r("div",{key:e.id,staticClass:"list"},[r("img",{directives:[{name:"lazy",rawName:"v-lazy",value:e.avatarUrl,expression:"x.avatarUrl"}],attrs:{alt:e.user_name}}),n._v(" "),r("div",{staticClass:"info"},[r("div",{staticClass:"name"},[n._v(n._s(e.user_name))]),n._v(" "),r("div",{staticClass:"time"},[n._v(n._s(n._f("dateFormat")(e.use_start_date,"date"))+"至"+n._s(n._f("dateFormat")(e.use_end_date,"date")))])]),n._v(" "),r("div",{staticClass:"price"},[r("small",[n._v("￥")]),n._v(n._s(e.type_money))])])})],2),n._v(" "),n._m(0),n._v(" "),r("div",{staticClass:"home",on:{click:n.use}},[r("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[r("use",{attrs:{"xlink:href":"#icon-shouye"}})])])])},a=[function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"rule"},[t("div",{staticClass:"title"},[n._v("活动规则")]),n._v(" "),t("div",{staticClass:"content"},[n._v("\n        \t\t1.红包与其他优惠不可叠加使用; "),t("br"),n._v("\n        \t\t2.红包只限此微信号使用; "),t("br"),n._v("\n        \t\t3.红包可在个人中心->优惠券中查看; "),t("br"),n._v("\n        \t\t4.当满足使用条件时，下单时会出现在可用优惠券中，选择使用即可; "),t("br"),n._v("\n        \t\t2.其他未尽事宜，请咨询客服。\n        \t")])])}],o={render:r,staticRenderFns:a};e.a=o},90:function(n,e,t){n.exports=t.p+"getCoupon.jpg?f83c4e72ade3885cc5c80a80e4d369bf"}});