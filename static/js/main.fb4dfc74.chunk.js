(this.webpackJsonpomok=this.webpackJsonpomok||[]).push([[0],{153:function(e,t,a){},159:function(e,t,a){},160:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(74),i=a.n(r),c=(a(89),a(40)),o=a(7),l=a(6),d=a(11),u=a(175),b=a(177),h=a(58),j=(a(90),a(153),a(1)),_=function(){var e=Object(o.e)(),t=Object(n.useState)(JSON.parse(sessionStorage.getItem("game"))),a=Object(d.a)(t,2),s=a[0],r=a[1],i=Object(n.useState)({}),c=Object(d.a)(i,2);c[0],c[1];Object(n.useEffect)((function(){return document.querySelector("title").innerHTML="Omok",null!=s?"start"===s.state&&(r(Object(l.a)(Object(l.a)({},s),{},{state:"progress",gameCondition:"\uac8c\uc784 \uc2dc\uc791 \ub300\uae30\uc911",gridView:!0,status:new h.a(s.boardWidth,s.boardHeight)})),localStorage.setItem("cellSize","32px")):(alert("\uc62c\ubc14\ub974\uc9c0 \uc54a\uc740 \uc811\uadfc\uc73c\ub85c \uc778\ud574 \uccab \ud654\uba74\uc73c\ub85c \uc774\ub3d9\ub429\ub2c8\ub2e4."),e.push("/")),function(){null!=s&&sessionStorage.setItem("game",JSON.stringify(s))}}),[s,r,e]),null!=s&&s.hasOwnProperty("status")?s.status.hasOwnProperty("place")||r(Object(l.a)(Object(l.a)({},s),{},{status:h.a.loadData(s.status)})):console.log("err");var _=function(e,t,a){"none"===s.status.getColor(t,a)&&(r(Object(l.a)(Object(l.a)({},s),{},{run:s.status.place(t,a,"black")})),r(Object(l.a)(Object(l.a)({},s),{},{run:null})))};function m(e){var t=e.board,a=e.place,n=void 0===a?function(e,t,a){alert(t+" / "+a)}:a,r=null!=localStorage.getItem("cellSize")?localStorage.getItem("cellSize"):"32px",i=parseInt(r);return null!=t&&typeof t.board==typeof Function?Object(j.jsx)("div",{className:"board",children:t.board().map((function(e,t){return Object(j.jsxs)("div",{className:"line",children:[e.map((function(a,c){return Object(j.jsxs)("svg",{alt:"cell",onClick:function(e){n(e,c,t),console.log(c+" / "+t)},width:r,height:r,children:[Object(j.jsx)("rect",{width:r,height:r,fill:"sandybrown"}),s.gridView?Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("line",{x1:i/2,y1:0,x2:i/2,y2:i,stroke:"black",strokeWidth:i/10}),Object(j.jsx)("line",{x1:0,y1:i/2,x2:i,y2:i/2,stroke:"black",strokeWidth:i/10})]}):"",Object(j.jsx)("circle",{cx:i/2,cy:i/2,r:i/3,fill:a}),0===c||c===e.length-1?Object(j.jsx)("line",{x1:0===c?0:i,y1:0,x2:0===c?0:i,y2:i,stroke:"black",strokeWidth:i/10}):"",0===t||t===e.length-1?Object(j.jsx)("line",{x1:0,y1:0===t?0:i,x2:i,y2:0===t?0:i,stroke:"black",strokeWidth:i/10}):""]},t*e.length+c)})),Object(j.jsx)("br",{})]},t)}))}):Object(j.jsx)("div",{children:"loading..."})}function p(e){e.props;return Object(j.jsx)("div",{className:"speclist"})}function O(e){e.second,e.runner,e.pause;return Object(j.jsx)(j.Fragment,{children:"\uac1c\ubc1c \uc608\uc815"})}return null!==s?Object(j.jsxs)("div",{className:"gameboard",children:[null!=s?Object(j.jsx)(m,{board:s.status,place:_}):null,Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"information",children:[Object(j.jsx)("h2",{className:"title",children:" \uc0c1\ud0dc\ucc3d "}),"\uac8c\uc784 \uc9c4\ud589 \uc0c1\ud0dc : ",s.gameCondition," ",Object(j.jsx)("br",{}),"\ud0c0\uc774\uba38 : ",Object(j.jsx)(O,{})," ",Object(j.jsx)("br",{}),"\uadf8\ub9ac\ub4dc on/off ",Object(j.jsx)(u.a,{defaultChecked:!0,onChange:function(e){r(Object(l.a)(Object(l.a)({},s),{},{gridView:e.target.checked}))},children:" a"}),Object(j.jsx)(b.a,{children:"\ud56d\ubcf5"}),Object(j.jsx)(p,{})," ",Object(j.jsx)("br",{})]}),Object(j.jsx)("div",{className:"circle fab",children:Object(j.jsx)("svg",{children:Object(j.jsx)("path",{stroke:"black",strokeWidth:"10%",d:"m12.5,0 l0,25"})})})]}):""},m=(a(159),function(){var e=Object(o.e)(),t=Object(n.useState)({joinMode:"create",startText:"\ubc29 \ub9cc\ub4e4\uae30",disableSizeInput:!1,disablePassword:!0}),a=Object(d.a)(t,2),r=a[0],i=a[1],c=s.a.createRef(),u=s.a.createRef(),b=s.a.createRef(),h=s.a.createRef(),_=s.a.createRef(),m=s.a.createRef();Object(n.useEffect)((function(){return document.querySelector("title").innerHTML="Omok",function(){}}),[]);var p=function(e){switch(i(Object(l.a)(Object(l.a)({},r),{},{joinMode:e.target.id})),e.target.id){case"create":return void i(Object(l.a)(Object(l.a)({},r),{},{disableSizeInput:!1,startText:"\ubc29 \ub9cc\ub4e4\uae30"}));case"join":return void i(Object(l.a)(Object(l.a)({},r),{},{disableSizeInput:!0,startText:"\uac8c\uc784 \ucc38\uc5ec"}));case"spectate":return void i(Object(l.a)(Object(l.a)({},r),{},{disableSizeInput:!0,startText:"\uad00\uc804\ud558\uae30"}));case"replay":return void i(Object(l.a)(Object(l.a)({},r),{},{disableSizeInput:!0,startText:"\uac8c\uc784 \ub2e4\uc2dc\ubcf4\uae30"}));default:return}};return Object(j.jsx)("div",{className:"joinform",children:Object(j.jsxs)("form",{className:"inputform",ref:c,onSubmit:function(t){var a={boardWidth:_.current.valueAsNumber,boardHeight:m.current.valueAsNumber,name:u.current.value,state:"start",password:""};r.disablePassword?delete a.password:a.password=b.current.value,sessionStorage.setItem("game",JSON.stringify(a)),e.push("/board")},children:[Object(j.jsx)("input",{className:"roomName full",name:"roomName",ref:u,type:"text",placeholder:"\ubc29 \uc774\ub984",required:!0,minLength:3}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"password",children:[Object(j.jsx)("input",{className:"passwordable",name:"passwordable",ref:h,onChange:function(){i(Object(l.a)(Object(l.a)({},r),{},{disablePassword:!h.current.checked}))},type:"checkbox"}),Object(j.jsx)("input",{className:"password",name:"password",ref:b,disabled:r.disablePassword,type:"password",placeholder:"\ubc29 \uc811\uc18d \uc554\ud638",required:!0,minLength:4})]}),Object(j.jsxs)("div",{className:"size",children:[Object(j.jsx)("input",{name:"boardWidth",ref:_,disabled:r.disableSizeInput,type:"number",placeholder:"\uac00\ub85c",required:!0,min:15,max:100}),Object(j.jsx)("input",{name:"boardHeight",ref:m,disabled:r.disableSizeInput,type:"number",placeholder:"\uc138\ub85c",required:!0,min:15,max:100})]}),Object(j.jsx)("br",{}),Object(j.jsxs)("div",{className:"joinMode",children:[Object(j.jsx)("input",{name:"joinMode",id:"create",onChange:p,type:"radio",value:"create",defaultChecked:!0}),"\ubc29 \ub9cc\ub4e4\uae30 \xa0",Object(j.jsx)("input",{name:"joinMode",id:"join",onChange:p,type:"radio",value:"join"}),"\ucc38\uc5ec \xa0",Object(j.jsx)("input",{name:"joinMode",id:"spectate",onChange:p,type:"radio",value:"spectate"}),"\uad00\uc804 \xa0",Object(j.jsx)("input",{name:"joinMode",id:"replay",onChange:p,type:"radio",value:"replay"}),"\ub9ac\ud50c\ub808\uc774"]}),Object(j.jsx)("br",{}),Object(j.jsx)("input",{className:"start",type:"submit",value:r.startText})]})})});var p=function(){return Object(j.jsxs)(c.a,{basename:"/Omok",children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:m}),Object(j.jsx)(o.a,{path:"/board",component:_})]})},O=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,178)).then((function(t){var a=t.getCLS,n=t.getFID,s=t.getFCP,r=t.getLCP,i=t.getTTFB;a(e),n(e),s(e),r(e),i(e)}))};i.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(p,{})}),document.getElementById("root")),O()},58:function(module,__webpack_exports__,__webpack_require__){"use strict";var D_workspace_React_omok_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(77),D_workspace_React_omok_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(78),Omok=function(){function Omok(){var _this=this,width=arguments.length>0&&void 0!==arguments[0]?arguments[0]:15,height=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15,winCount=arguments.length>2&&void 0!==arguments[2]?arguments[2]:5;Object(D_workspace_React_omok_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Omok),this.map=[],this.width=void 0,this.height=void 0,this.winCount=void 0,this.winEvents=[],this.board=function(){for(var e=[],t=0;t<_this.height;t++){for(var a=[],n=0;n<_this.width;n++)a.push(_this.map[n+t*_this.width]);e.push(a)}return e},this.getColor=function(e,t){return e+t*_this.width<_this.map.length?_this.map[e+t*_this.width]:"none"},this.place=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"black";null!=e&&null!=t&&null!=a&&(_this.map[e+t*_this.width]=a,_this.winCheck(e,t,a))},this.winCheck=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"black";e=0,t=0;for(var n=[1,1,1,1],s=!1,r=[[-1,1],[0,1],[1,1],[1,0]],i=0;i<r.length;i++)for(var c=-1;c<2;c+=2)for(var o=[e,t],l=r[i][0]*c,d=r[i][1]*c;_this.getColor(o[0]+l,o[1]+l)===a;)n[i]++,o[0]+=l,o[1]+=d;return n.forEach((function(e){e>=_this.winCount&&(s=!0)})),s&&_this.win(),s},this.win=function(){_this.winEvents.forEach((function(handler){eval(handler)}))},this.map.length=width*height,this.width=width,this.height=height,this.winCount=winCount;for(var i=0;i<this.map.length;i++)this.map[i]="none"}return Object(D_workspace_React_omok_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Omok,null,[{key:"loadData",value:function(e){var t=new Omok;return t.map=e.map,t.width=e.width,t.height=e.height,t.winCount=e.winCount,t.winEvents=e.winEvents,t}}]),Omok}();__webpack_exports__.a=Omok},89:function(e,t,a){}},[[160,1,2]]]);
//# sourceMappingURL=main.fb4dfc74.chunk.js.map