"use strict";require(["config"],function(){require(["jquery","header","footer","template","url","search","add","cookie"],function(c,t,i,r,l,p,h){t.init(),i.init(),c(function(){var o=window.location.pathname;o=(o=(o=o.split("/"))[2].split("."))[0],console.log(o);var s,a,i=1;function n(){c.get(l.url+"selectpro.php",{type:o,pageCount:8,index:i},function(t){var i=t.data;console.log(i),a=t.allNum,s=Math.ceil(a/8);var n=r("list",{data:i});c("#list-pro").html(n),document.getElementById("pagination").innerHTML='<li>\n\t\t\t\t\t\t      <a href="#"  class="prev">\n\t\t\t\t\t\t        <span  class="prev">&laquo;</span>\n\t\t\t\t\t\t      </a>\n\t\t\t\t\t\t    </li>\n\t\t\t\t\t\t    <li id="lastLi">\n\t\t\t\t\t\t      <a href="#"  class="next">\n\t\t\t\t\t\t        <span class="next">&raquo;</span>\n\t\t\t\t\t\t      </a>\n\t\t\t\t\t\t    </li>';for(var l=1;l<=s;l++){c("<li><a href='#'>"+l+"</a></li>").insertBefore(c("#lastLi"))}e(),c(".pro").on("click",function(){var t=c(this).children("h3").html();c.cookie("pro",t,{path:"/"}),window.location.href="/html/product.html?kind="+o})},"json")}function e(){c(".list-box").on("click",".pro-list-addcart",function(){c(this).siblings(".spec-detail").slideDown("slow")}),c(".list-box .spec-info").on("click","a",function(){c(this).addClass("ac").siblings().removeClass(),c(this).parent().siblings(".spec-title").children().eq(c(this).index()).addClass("ac").siblings().removeClass()}),c(".list-box").on("click","#add",function(){c(this).parent().parent().slideUp("slow")}),c(".list-box").on("click",".exit",function(){c(this).parent().slideUp("slow")})}n(),c("#pagination").on("click","a",function(t){isNaN(Number(c(this).html()))?"prev"==c(this).attr("class")?--i<1&&(i=1):"next"===c(this).attr("class")&&s<++i&&(i=s):i=c(this).html(),n()}),p.init(".type-list"),c(".tag-list").on("click","a",function(){c(".page").html("");var t=c(this).prop("className");console.log(t),c.get(l.url+"selectpro.php",{flag:"1",type:t},function(t){c("#list-pro").html(""),console.log(t);var i=r("list",{data:t});c("#list-pro").html(i),e(),c(".pro").on("click",function(){var t=c(this).children("h3").html();c.cookie("pro",t,{path:"/"}),window.location.href="/html/product.html?kind="+o})},"json")}),h.init("#cake")})})});