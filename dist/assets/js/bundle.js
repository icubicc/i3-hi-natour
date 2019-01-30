"use strict";function getParameterByName(e,t){t||(t=window.location.href),e=e.replace(/[\[\]]/g,"\\$&");var s=new RegExp("[?&]"+e+"(=([^&#]*)|&|#|$)"),i=s.exec(t);return i?i[2]?decodeURIComponent(i[2].replace(/\+/g," ")):"":null}function hasChild(e,t){for(var s=t.parentNode;null!==s;){if(s==e)return!0;s=s.parentNode}return!1}function mousePos(e){var t=0,s=0;return e||(e=window.event),e.pageX||e.pageY?(t=e.pageX,s=e.pageY):(e.clientX||e.clientY)&&(t=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft,s=e.clientY+document.body.scrollTop+document.documentElement.scrollTop),{x:t,y:s}}function equalheight(e){function t(e){document.querySelectorAll(e).forEach(function(e){if(s=e,s.style.minHeight=0,l=s.getBoundingClientRect().top,o!==l){for(n=0;n<a.length;n++)a[n].style.minHeight=i+"px";a.length=0,o=l,i=s.offsetHeight,a.push(s)}else a.push(s),i=i<s.offsetHeight?s.offsetHeight:i;for(n=0;n<a.length;n++)a[n].style.minHeight=i+"px"})}var s=void 0,i=0,o=0,n=void 0,a=[],l=0;t(e),window.addEventListener("resize",function(){i=0,t(e)})}jQuery(document).ready(function(e){e(".js-popup-link").magnificPopup({type:"inline",mainClass:"mfp-animation",removalDelay:200}),e(".site-header-nav .item a").hover(function(){var t="#"+e(".mega-menu-item.is-toggled").attr("id");if(e(this).hasClass("mega-menu-toggle")){var s=e(this).data("menu-target");s!=t&&(e(t).removeClass("is-toggled"),e(t).slideUp(200)),e(s).addClass("is-toggled"),e(s).slideDown(200)}else e(t).removeClass("is-toggled"),e(t).slideUp(200)}),e(".site-header-container").hover(function(){},function(){e(".mega-menu-item").removeClass("is-toggled"),e(".mega-menu-item").slideUp(200)}),e(".featured-hotel-slider").find(".slides").flickity({imagesLoaded:!0,wrapAround:!1,pageDots:!1}),e(".js-destination-slider").find(".slides").flickity({imagesLoaded:!0,wrapAround:!1}),e(".accommodation-detail-slider").find(".slides").flickity({imagesLoaded:!0,wrapAround:!1,pageDots:!1}),e(".reviews-list").flickity({imagesLoaded:!0,wrapAround:!1,groupCells:!0,contain:!0,pageDots:!1})}),function(){function e(e,t){var s=t.dataset.scrollTarget||t.hash||"",i=document.querySelector("[id='"+s.substring(1)+"']"),o=t.dataset.scrollDuration||.4,n=document.querySelector(t.dataset.scrollOffset)||"",a=n.offsetHeight||0;i&&(TweenMax.to(window,o,{scrollTo:{y:s,offsetY:a}}),e.preventDefault())}function t(){var e=document.getElementById("site-header");e.offsetHeight}var s=document.querySelector("body"),i=document.documentElement.clientWidth;svg4everybody(),imagesLoaded(document.querySelector("#site-container"),function(){document.body.classList.remove("is-loading")});for(var o=document.getElementsByClassName("js-sticky"),n=o.length-1;n>=0;n-=1)Stickyfill.add(o[n]);fluidvids.init({selector:[".js-fluidvids iframe"],players:["www.youtube.com"]});var a={fadeIn:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;TweenMax.to(e,t,{display:"block",autoAlpha:1,delay:s})},fadeOut:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;TweenMax.to(e,t,{display:"none",autoAlpha:0,delay:s})},slideDown:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;TweenMax.set(e,{display:"block",overflow:"visible",autoAlpha:1,height:"auto"}),TweenMax.from(e,t,{overflow:"hidden",autoAlpha:0,height:0,delay:s})},slideUp:function(e,t){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;TweenMax.to(e,t,{display:"none",overflow:"hidden",autoAlpha:0,height:0,delay:s})}},l=Object.create(a),r=(function(t){document.querySelectorAll(".js-scroll").forEach(function(t){return t.addEventListener("click",function(t){e(t,this)})})}(),new ScrollMagic.Controller);document.querySelectorAll(".js-scene").forEach(function(e){new ScrollMagic.Scene({triggerElement:e,reverse:!1}).setClassToggle(e,"in-viewport").addIndicators().addTo(r)});(function(){function t(t,s){var i=document.querySelector(s.hash);if(i){var o=document.querySelectorAll('[data-tab-group="'+i.dataset.tabGroup+'"]'),n=document.querySelectorAll('.js-tab-target[data-tab-group="'+i.dataset.tabGroup+'"]'),a=s.dataset.tabType||"tab",r=s.hash.substring(1),c=s.dataset.tabDuration||.2,d=s.dataset.scrollTarget;if(i.classList.contains("is-tabbed"))"collapse"===a&&(n.forEach(function(e){l.slideUp(e,c)}),s.classList.remove("is-tabbed"),i.classList.remove("is-tabbed"),window.history&&history.pushState&&history.replaceState("","","?"));else{var u=0;n.forEach(function(e){e.classList.contains("is-tabbed")&&(u=c/2)}),TweenMax.to(n,u,{display:"none",height:0,overflow:"hidden",autoAlpha:0,onComplete:function(){l.slideDown(i,c)}}),o.forEach(function(e){return e.classList.remove("is-tabbed")}),s.classList.add("is-tabbed"),i.classList.add("is-tabbed"),d&&setTimeout(function(){e(t,s)},u+c),window.history&&history.pushState&&history.replaceState("","","?tab="+r)}t.preventDefault()}}var s=document.querySelectorAll(".js-tab");!function(){var e=document.querySelectorAll(".js-tab-target"),t=document.querySelectorAll("[data-tab-group]:first-child"),s=document.querySelectorAll("[data-tab-group].js-tab-target:first-child"),i=getParameterByName("tab"),o=document.querySelector('a[href="#'+i+'"]'),n=o&&document.querySelector(o.hash);if(e.forEach(function(e){return e.style.display="none"}),s.forEach(function(e){return e.style.display="block"}),t.forEach(function(e){return e.classList.add("is-tabbed")}),i&&n){var a=document.querySelectorAll('[data-tab-group="'+n.dataset.tabGroup+'"]');document.querySelectorAll('[data-tab-group="'+n.dataset.tabGroup+'"].js-tab-target').forEach(function(e){return e.style.display="none"}),a.forEach(function(e){return e.classList.remove("is-tabbed")}),o.classList.add("is-tabbed"),n.style.display="block",n.classList.add("is-tabbed")}}(),s.forEach(function(e){return e.addEventListener("click",function(e){t(e,this)})})})(),function(){function t(e){var t=new MouseEvent("click"),s=new MouseEvent("mouseenter");"toggled"===e.dataset.toggleState&&(i(t,e),i(s,e))}function i(t,i){var n=i.dataset.toggleTrigger||"click",a=i.dataset.toggleTarget||i.hash,r=document.querySelector(a),c=document.querySelector(i.dataset.toggleArea)||i,d=document.querySelector(i.dataset.toggleFocus),u=i.dataset.toggleAnimation||"slide",g=i.dataset.toggleDuration||.2,f=i.dataset.toggleIteration||"infinite",m=i.dataset.scrollTarget,h=i.dataset.toggleKeyclose||!1,v=a.substring(1),p=!i.dataset.toggleTarget,y=!1;if(a===i.hash&&(y=!0),!r)return!1;if(!i.classList.contains("js-toggle"))return!1;if("mouseenter"===t.type||"touchstart"===t.type){if("hover"===n){var L=c.querySelectorAll(".js-toggle.is-toggled");"once"===f&&i.classList.remove("js-toggle"),L.forEach(function(e){e!==i&&e.classList.remove("is-toggled")});var b=c.querySelectorAll(".is-toggled"),w=[];b.forEach(function(e){e!==i&&e!==r&&w.push(e)}),"slide"===u&&w.forEach(function(e){l.slideUp(e,g/2)}),w.forEach(function(e){return e.classList.remove("is-toggled")}),!1===i.classList.contains("is-toggled")&&(i.classList.add("is-toggled"),r.classList.add("is-toggled"),"slide"===u&&l.slideDown(r,g,g/2)),c.addEventListener("mouseleave",function(e){o(e,i,n,r,c,u,g,v)}),s.addEventListener("click",function(e){o(e,i,n,r,c,u,g,v)}),s.addEventListener("touchend",function(e){o(e,i,n,r,c,u,g,v)})}}else if("click"===t.type)if("hover"===n&&!0===y)t.preventDefault();else if("click"===n){if("once"===f&&i.classList.replace("js-toggle","js-toggle-inactive"),i.classList.contains("is-toggled")||r.classList.contains("is-toggled")||"none"!==window.getComputedStyle(r).getPropertyValue("display")){if(!hasChild(i,c)){var E=document.querySelectorAll("."+v+"-toggler");E.forEach(function(e){e.classList.replace("js-toggle-inactive","js-toggle"),e.classList.remove("is-toggled"),e.classList.remove(v+"-toggler"),e.classList.add("is-untoggling")}),r.classList.remove("is-toggled"),r.classList.add("is-untoggling"),s.classList.add(v+"-is-untoggling"),setTimeout(function(){E.forEach(function(e){e.classList.remove("is-untoggling")}),r.classList.remove("is-untoggling"),s.classList.remove(v+"-is-toggled",v+"-is-untoggling")},g),"slide"===u&&l.slideUp(r,g/2)}}else i.classList.add("is-toggling"),r.classList.add("is-toggling"),s.classList.add(v+"-is-toggling"),setTimeout(function(){i.classList.remove("is-toggling"),i.classList.add("is-toggled"),i.classList.add(v+"-toggler"),r.classList.remove("is-toggling"),r.classList.add("is-toggled"),s.classList.remove(v+"-is-toggling"),s.classList.add(v+"-is-toggled"),d&&d.focus()},g),m&&e(t,i),"slide"===u&&l.slideDown(r,g),s.addEventListener("click",function(e){o(e,i,n,r,c,u,g,v)}),s.addEventListener("touchend",function(e){o(e,i,n,r,c,u,g,v)}),"true"===h&&document.addEventListener("keydown",function(e){27===e.keyCode&&o(e,i,n,r,c,u,g,v)});!0===p&&t.preventDefault()}}function o(e,t,i,o,n,a,r,c){(t.classList.contains("is-toggled")||o.classList.contains("is-toggled"))&&("hover"===i&&"click"!==e.type||"click"===i&&"keydown"===e.type?(t.classList.remove("is-toggled"),t.classList.add("is-untoggling"),o.classList.remove("is-toggled"),o.classList.add("is-untoggling"),setTimeout(function(){t.classList.remove("is-untoggling"),o.classList.remove("is-untoggling")},r),"slide"===a&&l.slideUp(o,r/2)):t===e.target||hasChild(t,e.target)||n===e.target||hasChild(n,e.target)||(t.classList.remove("is-toggled"),t.classList.add("is-untoggling"),o.classList.remove("is-toggled"),o.classList.add("is-untoggling"),s.classList.add(c+"-is-untoggling"),setTimeout(function(){t.classList.remove("is-untoggling"),o.classList.remove("is-untoggling"),s.classList.remove(c+"-is-toggled",c+"-is-untoggling")},r),"slide"===a&&l.slideUp(o,r/2)))}s.querySelectorAll(".js-toggle").forEach(function(e){t(e),e.addEventListener("click",function(e){i(e,this)}),e.addEventListener("mouseenter",function(e){i(e,this)}),e.addEventListener("touchstart",function(e){i(e,this)})})}(),function(){function e(e){var t=e;t.insertAdjacentHTML("beforebegin",'<div class="js-mover-source"></div>');var s=t.previousElementSibling,i=document.querySelector(t.dataset.moverTarget),o=t.dataset.moverBreakpoint,n=document.documentElement.clientWidth;n>=o&&i.appendChild(t),window.addEventListener("resize",function(){n=document.documentElement.clientWidth,n>=o?t.parentNode!==i&&i.appendChild(t):t.parentNode!==s&&s.parentNode.insertBefore(t,s.nextSibling)})}document.querySelectorAll(".js-mover").forEach(function(t){return e(t)})}(),function(e){function t(){i=document.documentElement.clientWidth,i>=1152?(o="calc(50% - "+i+"px/2)",s.forEach(function(e){e.style.marginLeft=o,e.style.marginRight=o})):s.forEach(function(e){e.style.marginLeft=null,e.style.marginRight=null})}var s=document.querySelectorAll(".js-unwrapper"),o="calc(50% - "+i+"px/2)";t(),window.addEventListener("resize",t)}(),function(){document.querySelectorAll(".js-form-file").forEach(function(e){function t(e,t){var i=e.files,o="",a=0,l=!0,r=!1,c=void 0;try{for(var d,u=i[Symbol.iterator]();!(l=(d=u.next()).done);l=!0)a+=d.value.size}catch(e){r=!0,c=e}finally{try{!l&&u.return&&u.return()}finally{if(r)throw c}}a=Math.round(a/1024/1024*100)/100,e.files&&e.files.length>1?o=(e.getAttribute("data-multiple-placeholder")||"").replace("{count}",e.files.length)+" ("+a+"MB)":t.target.value&&(o=t.target.value.split("\\").pop()+' <span class="filesize">('+a+"MB)</span>"),o?(n.querySelector(".placeholder").innerHTML=o,n.classList.add("has-placeholder")):s(t)}function s(e){o.value="",n.innerHTML=l,n.classList.remove("has-placeholder"),e.preventDefault()}var i=e.querySelector(".form-file-input"),o=i.querySelector(".input"),n=i.querySelector(".label"),a=i.querySelector(".remove"),l=n.innerHTML;o.addEventListener("change",function(e){t(this,e)}),a&&a.addEventListener("click",function(e){s(e)})})}();window.onload=t}();