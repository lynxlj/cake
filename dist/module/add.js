"use strict";define(function(){function e(){}return e.prototype.init=function(o){$(o).on("click","#add",function(){if("#cake"==o)var e=$(this).parent().parent().parent().children().eq(0).children("h3").html(),i=$(this).parent().siblings(".spec-info").children(".ac").html().slice(0,4),t=$(this).parent().siblings(".spec-title").children(".ac").html().slice(1,-5),n=$(this).parent().parent().siblings().eq(0).children().attr("src"),r="cake";else if(".content"==o)e=$(this).parent().parent().parent().children().eq(1).children().html(),i=$(this).parent().siblings(".spec-info").children(".ac").html().slice(0,4),t=$(this).parent().siblings(".spec-title").children(".ac").html().slice(1,-5),n=$(this).parent().parent().siblings().eq(0).children().attr("src"),r="cake";else if("#outer-box"==o)e=$(".pro-details-title").html(),i=$(this).parent().siblings(".details-img-box").children(".ac").children("p").html().slice(-4),t=$(this).parent().siblings(".details-img-box").children(".ac").children("p").children("span").html(),n=$(this).parent().parent().parent().parent().parent().siblings(".details-banner").children(".left-img-box").children(".video-box").children(".ac").attr("src");else e=$(this).parent().parent().parent().children().eq(0).children("h3").html(),i="一 份",t=$(this).parent().parent().parent().children().eq(0).children("span").html().slice(1,-2),n=$(this).parent().parent().parent().children().eq(0).children("img").attr("src");r=r||"";var a=$.cookie("cart");if(null==a||""==a){a=[];var l={name:e,size:i,price:t,num:1,src:n,type:r},c=JSON.stringify(l);a.push(c),$.cookie("cart",a.join("$"),{path:"/"}),alert("加入成功！！！")}else{for(var s=(a=a.split("$")).length,h=0;h<s;h++){var p=JSON.parse(a[h]);if(p.name==e&&p.price==t){var d=p.num;return d++,p.num=d,a[h]=JSON.stringify(p),$.cookie("cart",a.join("$"),{path:"/"}),void alert("加入成功！！！")}}l={name:e,size:i,price:t,num:1,src:n,type:r},c=JSON.stringify(l);a.push(c),$.cookie("cart",a.join("$"),{path:"/"}),alert("加入成功！！！")}})},new e});