"use strict";require(["config"],function(){require(["jquery","header","footer","tab","url","template","add","cookie"],function(n,t,o,r,i,l,e){t.init(),o.init();var a=window.location.href;a=(a=a.split("="))[1];var s=n.cookie("pro");console.log(a),console.log(s),n.get(i.url+"selectpro.php",{name:s,kind:a},function(t){console.log(t),n(".pro-details-title").html(t[0].name),t[0].link?n(".link").html(t[0].link+"&gt;"):n(".link").remove(),n(".group").html(t[0].group);var o=l("bannerList",{data:t});n(".details-banner").html(o);var i=l("list",{data:t});n("#outer-box").html(i),r.init(".outer-box",".img-box"),r.init(".details-banner",".otherImg");var e=l("pics",{data:t});n(".details-introduction").html(e)},"json"),e.init("#outer-box")})});