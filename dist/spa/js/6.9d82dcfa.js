(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"62ed":function(t,a,e){t.exports=e.p+"img/DoableData-white.1b8461d8.png"},"713b":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("q-layout",{attrs:{view:"hHh lpR fFf"}},[o("q-header",{staticClass:"bg-dark text-white",attrs:{bordered:"","height-hint":"98"}},[o("q-toolbar",[o("q-toolbar-title",[o("q-avatar",[o("img",{attrs:{src:e("62ed")}})]),t._v("\n        DoableData\n      ")],1),o("q-btn",{attrs:{to:"/dashboard/"+t.$route.params.uid,flat:"","icon-right":"home",label:"Home"}}),t.loggedIn?o("q-btn",{attrs:{flat:"","icon-right":"account_circle",label:"Logout"},on:{click:t.logout}}):o("q-btn",{attrs:{to:"/auth",flat:"","icon-right":"account_circle",label:"Login"}})],1)],1),o("q-page-container",[o("router-view")],1)],1)},n=[],r=e("ded3"),l=e.n(r),i=e("2f62"),c=e("a639"),s={name:"MainLayout",data(){return{}},computed:l()({},Object(i["d"])("auth",["loggedIn"])),methods:l()(l()({},Object(i["b"])("auth",["logoutUser"])),{},{logout(){c["a"].set("LoggedIn",!1),this.loggedIn=c["a"].getItem("LoggedIn"),this.logoutUser()}})},u=s,g=e("2877"),d=e("4d5a"),b=e("e359"),h=e("65c6"),p=e("6ac5"),f=e("cb32"),m=e("9c40"),w=e("09e3"),q=e("eebe"),v=e.n(q),Q=Object(g["a"])(u,o,n,!1,null,null,null);a["default"]=Q.exports;v()(Q,"components",{QLayout:d["a"],QHeader:b["a"],QToolbar:h["a"],QToolbarTitle:p["a"],QAvatar:f["a"],QBtn:m["a"],QPageContainer:w["a"]})}}]);