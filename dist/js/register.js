"use strict";require(["config"],function(){require(["jquery","header","footer","random","url","cookie","md5"],function(l,e,o,r,c){var n;e.init(),o.init(),l("#change-cont").on("click",function(){n=r.init()}),l(function(){var o,t=l("input"),e=l("#register-btn"),a=[!1,!1,!1,!1,!1];t[0].onblur=function(){var e=this.value;/^[1]\d{10}$/.test(e)?(a[0]=!0,l(".error").eq(0).removeClass("ac")):(a[0]=!1,l(".error").eq(0).addClass("ac"))},t[1].onblur=function(){var e=this.value;/^.{6,20}$/.test(e)?(a[1]=!0,o=e,console.log(o),l(".error").eq(1).removeClass("ac")):(a[1]=!1,l(".error").eq(1).addClass("ac"))},console.log(o),t[2].onblur=function(){this.value==o?(a[2]=!0,l(".error").eq(2).removeClass("ac")):(a[2]=!1,l(".error").eq(2).addClass("ac"))},t[3].onfocus=function(){n=r.init().toUpperCase(),console.log(n)},t[3].onblur=function(){this.value.toUpperCase()==n?(a[3]=!0,l(".error").eq(3).removeClass("ac")):(a[3]=!1,l(".error").eq(3).addClass("ac"))},t[5].checked?a[4]=!0:a[4]=!1,e.on("click",function(e){e.preventDefault(),console.log(a);var o=a.every(function(e){return e});if(console.log(o),o){var r=t.eq(0).val(),n=t.eq(1).val();n=hex_md5(n),l.get(c.url+"insert.php",{user:r,pwd:n},function(e){console.log(e),e.code?(alert("注册成功！"),window.location.href="/html/login.html"):alert("注册失败,请重新尝试！")},"json")}})})})});