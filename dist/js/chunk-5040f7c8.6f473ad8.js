(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5040f7c8"],{"888c":function(t,s,a){t.exports=a.p+"img/fancrux-logo.c47cf40f.png"},"9cff":function(t,s,a){},a55b:function(t,s,a){"use strict";a.r(s);var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container"},[e("div",{staticClass:"screen"},[e("div",{staticClass:"screen__content"},[e("img",{attrs:{src:a("888c"),alt:"",height:"100",width:"100"}}),e("div",{staticClass:"login"},[e("div",{staticClass:"login__field"},[e("i",{staticClass:"login__icon fas fa-user"}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.username,expression:"form.username"}],staticClass:"login__input",attrs:{type:"text",placeholder:"Username"},domProps:{value:t.form.username},on:{input:function(s){s.target.composing||t.$set(t.form,"username",s.target.value)}}})]),e("div",{staticClass:"login__field"},[e("i",{staticClass:"login__icon fas fa-lock"}),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.password,expression:"form.password"}],staticClass:"login__input",attrs:{type:"password",placeholder:"Password"},domProps:{value:t.form.password},on:{input:function(s){s.target.composing||t.$set(t.form,"password",s.target.value)}}})]),e("button",{staticClass:"button login__submit",on:{click:t.Login}},[e("span",{staticClass:"button__text"},[t._v("Login")]),e("i",{staticClass:"button__icon fas fa-chevron-right"})])]),e("div",{staticClass:"social-login"},[e("div",[e("p",[t._v("Don't have an account...? "),e("router-link",{attrs:{to:"/register"}},[t._v("Sign Up")])],1)]),e("h3",[t._v("log in via")]),t._m(0)])]),t._m(1)])])},n=[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"social-icons"},[a("a",{staticClass:"social-login__icon fab fa-instagram",attrs:{href:"#"}}),a("a",{staticClass:"social-login__icon fab fa-facebook",attrs:{href:"#"}}),a("a",{staticClass:"social-login__icon fab fa-twitter",attrs:{href:"#"}})])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"screen__background"},[a("span",{staticClass:"screen__background__shape screen__background__shape4"}),a("span",{staticClass:"screen__background__shape screen__background__shape3"}),a("span",{staticClass:"screen__background__shape screen__background__shape2"}),a("span",{staticClass:"screen__background__shape screen__background__shape1"})])}],o=a("1da1"),i=a("5530"),r=(a("96cf"),a("2f62")),c=Object(r["a"])("auth"),l=c.mapActions,u={name:"register",components:{},data:function(){return{form:{username:"",password:""},toast:function(){}}},mounted:function(){this.toast=this.$swal.mixin({toast:!0,position:"top-end",showConfirmButton:!1,timer:1e4})},methods:Object(i["a"])(Object(i["a"])({},l(["login"])),{},{Login:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function s(){var a;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:return s.next=2,t.login(t.form);case 2:a=s.sent,console.log(a),a.user?(t.toast({type:"success",title:"Login Successfull!"}),t.$router.push("/dashboard")):t.toast({type:"error",title:"".concat(a.data.message)});case 5:case"end":return s.stop()}}),s)})))()}})},_=u,f=(a("de00"),a("2877")),p=Object(f["a"])(_,e,n,!1,null,"06578000",null);s["default"]=p.exports},de00:function(t,s,a){"use strict";a("9cff")}}]);
//# sourceMappingURL=chunk-5040f7c8.6f473ad8.js.map