"use strict";define(function(){function o(){}return o.prototype.init=function(o){$(o).on("click","a",function(){$(this).css("color","#D5BFA7").parent().siblings().children().css("color","#684029");var o=$(this).prop("className");"cake"==o?window.location.href="/html/cake.html":"ice"==o?window.location.href="/html/ice.html":"coffee"==o?window.location.href="/html/coffee.html":"norcake"==o?window.location.href="/html/norcake.html":"design"==o&&(window.location.href="/html/design.html")})},new o});