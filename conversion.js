!function(){function x(e){return null!=e?escape(e.toString()):""}function L(e){return null!=e?e.toString().substring(0,512):""}function z(e,o){var n=x(o);if(""!=n){var r=x(e);if(""!=r)return"&".concat(r,"=",n)}return""}function A(e){var o=typeof e;return null==e||"object"==o||"function"==o?null:String(e).replace(/,/g,"\\,").replace(/;/g,"\\;").replace(/=/g,"\\=")}function B(e){var o;if((e=e.google_custom_params)&&"object"==typeof e&&"function"!=typeof e.join){var n=[];for(o in e)if(Object.prototype.hasOwnProperty.call(e,o)){var r=e[o];if(r&&"function"==typeof r.join){for(var t=[],i=0;i<r.length;++i){var a=A(r[i]);null!=a&&t.push(a)}r=0==t.length?null:t.join(",")}else r=A(r);(t=A(o))&&null!=r&&n.push(t+"="+r)}o=n.join(";")}else o="";return""==o?"":"&".concat("data=",encodeURIComponent(o))}function N(e){return"number"!=typeof e&&"string"!=typeof e?"":x(e.toString())}function P(e){if(!e)return"";if(e=e.google_conversion_items,!e)return"";for(var o=[],n=0,r=e.length;r>n;n++){var t=e[n],i=[];t&&(i.push(N(t.value)),i.push(N(t.quantity)),i.push(N(t.item_id)),i.push(N(t.adwords_grouping)),i.push(N(t.sku)),o.push("("+i.join("*")+")"))}return 0<o.length?"&item="+o.join(""):""}function C(e,o,n){var r=[];if(e){var t=e.screen;t&&(r.push(z("u_h",t.height)),r.push(z("u_w",t.width)),r.push(z("u_ah",t.availHeight)),r.push(z("u_aw",t.availWidth)),r.push(z("u_cd",t.colorDepth))),e.history&&r.push(z("u_his",e.history.length))}return n&&"function"==typeof n.getTimezoneOffset&&r.push(z("u_tz",-n.getTimezoneOffset())),o&&("function"==typeof o.javaEnabled&&r.push(z("u_java",o.javaEnabled())),o.plugins&&r.push(z("u_nplug",o.plugins.length)),o.mimeTypes&&r.push(z("u_nmime",o.mimeTypes.length))),r.join("")}function U(e,o,r){var t="";if(o){var i;if(e.top==e)i=0;else{var a=e.location.ancestorOrigins;if(a)i=a[a.length-1]==e.location.origin?1:2;else{a=e.top;try{var g;if(g=!!a&&null!=a.location.href)e:{try{n(a.foo),g=!0;break e}catch(l){}g=!1}i=g}catch(s){i=!1}i=i?1:2}}g="",g=r?r:1==i?e.top.location.href:e.location.href,t+=z("frm",i),t+=z("url",L(g)),t+=z("ref",L(o.referrer))}return t}function R(e){return"42631044"==(M?S(2):"")||e&&e.location&&e.location.protocol&&"https:"==e.location.protocol.toString().toLowerCase()?"https:":"http:"}function V(e){return e.google_remarketing_only?"googleads.g.doubleclick.net":e.google_conversion_domain||"www.googleadservices.com"}function W(e,o,n,r){var t="/?";"landing"==r.google_conversion_type&&(t="/extclk?");var g,t=R(e)+"//"+V(r)+"/pagead/"+[r.google_remarketing_only?"viewthroughconversion/":"conversion/",x(r.google_conversion_id),t,"random=",x(r.google_conversion_time)].join(""),i=n?a(n):"0";e:{if(g=r.google_conversion_language,null!=g){if(g=g.toString(),2==g.length){g=z("hl",g);break e}if(5==g.length){g=z("hl",g.substring(0,2))+z("gl",g.substring(3,5));break e}}g=""}return e=[z("cv",r.google_conversion_js_version),z("fst",r.google_conversion_first_time),z("num",r.google_conversion_snippets),z("fmt",r.google_conversion_format),z("value",r.google_conversion_value),z("currency_code",r.google_conversion_currency),z("label",r.google_conversion_label),z("oid",r.google_conversion_order_id),z("bg",r.google_conversion_color),g,z("guid","ON"),z("disvt",r.google_disable_viewthrough),z("is_call",r.google_is_call),z("eid",O().join()),P(r),C(e,o,r.google_conversion_date),B(r),U(e,n,r.google_conversion_page_url),r.google_remarketing_for_search&&!r.google_conversion_domain?"&srr=n":"",z("vis",i)].join(""),t+e}function $(e){return{ar:1,bg:1,cs:1,da:1,de:1,el:1,en_AU:1,en_US:1,en_GB:1,es:1,et:1,fi:1,fr:1,hi:1,hr:1,hu:1,id:1,is:1,it:1,iw:1,ja:1,ko:1,lt:1,nl:1,no:1,pl:1,pt_BR:1,pt_PT:1,ro:1,ru:1,sk:1,sl:1,sr:1,sv:1,th:1,tl:1,tr:1,vi:1,zh_CN:1,zh_TW:1}[e]?e+".html":"en_US.html"}function G(e,o,n,r){3!=r.google_conversion_format||r.google_remarketing_only||r.google_conversion_domain||M&&k("317150500 317150501 317150502 317150503 317150504 317150505".split(" "),_,1);var t=M?S(1):"";return o=W(e,o,n,r),n=function(e,o,n){return'<img height="'+n+'" width="'+o+'" border="0" alt="" src="'+e+'" />'},0==r.google_conversion_format&&null==r.google_conversion_domain?'<a href="'+(R(e)+"//services.google.com/sitestats/"+$(r.google_conversion_language)+"?cid="+x(r.google_conversion_id))+'" target="_blank">'+n(o,135,27)+"</a>":1<r.google_conversion_snippets||3==r.google_conversion_format?"317150501"==t||"317150502"==t||"317150503"==t||"317150504"==t||"317150505"==t?n(o,1,1)+('<script src="'+o.replace(/(&|\?)fmt=3(&|$)/,"$1fmt=4&adtest=on$2")+'"></script>'):n(o,1,1):'<iframe name="google_conversion_frame" title="Google conversion frame" width="'+(2==r.google_conversion_format?200:300)+'" height="'+(2==r.google_conversion_format?26:13)+'" src="'+o+'" frameborder="0" marginwidth="0" marginheight="0" vspace="0" hspace="0" allowtransparency="true" scrolling="no">'+n(o.replace(/\?random=/,"?frame=0&random="),1,1)+"</iframe>"}function D(){return new Image}function H(e,o){var n=D;"function"==typeof e.opt_image_generator&&(n=e.opt_image_generator),n=n(),o+=z("async","1"),n.src=o,n.onload=function(){}}function q(e,o,n){var r;r=R(e)+"//www.google.com/ads/user-lists/"+[x(n.google_conversion_id),"/?random=",Math.floor(1e9*Math.random())].join(""),r+=[z("label",n.google_conversion_label),z("fmt","3"),U(e,o,n.google_conversion_page_url)].join(""),H(n,r)}function K(e){return"landing"==e.google_conversion_type||!e.google_conversion_id||e.google_remarketing_only&&e.google_disable_viewthrough?!1:(e.google_conversion_date=new Date,e.google_conversion_time=e.google_conversion_date.getTime(),e.google_conversion_snippets="number"==typeof e.google_conversion_snippets&&0<e.google_conversion_snippets?e.google_conversion_snippets+1:1,"number"!=typeof e.google_conversion_first_time&&(e.google_conversion_first_time=e.google_conversion_time),e.google_conversion_js_version="7",0!=e.google_conversion_format&&1!=e.google_conversion_format&&2!=e.google_conversion_format&&3!=e.google_conversion_format&&(e.google_conversion_format=1),M=new E(1,2,3),"https:"==R(t)||v||F.test(navigator.userAgent)||M&&k(["42631043","42631044"],u,2),!0)}function J(e){for(var o=0;o<T.length;o++)e[T[o]]=null}function Q(e){for(var o={},n=0;n<T.length;n++)o[T[n]]=e[T[n]];for(n=0;n<I.length;n++)o[I[n]]=e[I[n]];return o}function X(e){var o=document.getElementsByTagName("head")[0];o||(o=document.createElement("head"),document.getElementsByTagName("html")[0].insertBefore(o,document.getElementsByTagName("body")[0]));var n=document.createElement("script");n.src=R(window)+"//"+V(e)+"/pagead/conversion_debug_overlay.js",o.appendChild(n)}var e=this,o=function(e){var o=typeof e;if("object"==o){if(!e)return"null";if(e instanceof Array)return"array";if(e instanceof Object)return o;var n=Object.prototype.toString.call(e);if("[object Window]"==n)return"object";if("[object Array]"==n||"number"==typeof e.length&&"undefined"!=typeof e.splice&&"undefined"!=typeof e.propertyIsEnumerable&&!e.propertyIsEnumerable("splice"))return"array";if("[object Function]"==n||"undefined"!=typeof e.call&&"undefined"!=typeof e.propertyIsEnumerable&&!e.propertyIsEnumerable("call"))return"function"}else if("function"==o&&"undefined"==typeof e.call)return"object";return o},n=function(e){return n[" "](e),e};n[" "]=function(){};var f,r=function(e,o){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&o.call(void 0,e[n],n,e)},t=window,i=function(e,o,n){e.addEventListener?e.addEventListener(o,n,!1):e.attachEvent&&e.attachEvent("on"+o,n)},a=function(e){return{visible:1,hidden:2,prerender:3,preview:4}[e.webkitVisibilityState||e.mozVisibilityState||e.visibilityState||""]||0},g=function(e){var o;return e.mozVisibilityState?o="mozvisibilitychange":e.webkitVisibilityState?o="webkitvisibilitychange":e.visibilityState&&(o="visibilitychange"),o},l=function(e,o){return 3==a(o)?!1:(e(),!0)},s=function(e,o){if(!l(e,o)){var n=!1,r=g(o),t=function(){if(!n&&l(e,o)){n=!0;var i=t;o.removeEventListener?o.removeEventListener(r,i,!1):o.detachEvent&&o.detachEvent("on"+r,i)}};r&&i(o,r,t)}},c=function(e){return e=parseFloat(e),isNaN(e)||e>1||0>e?0:e},_=c("0.06"),u=c("0.01"),v=/^true$/.test("false")?!0:!1;e:{var p=e.navigator;if(p){var d=p.userAgent;if(d){f=d;break e}}f=""}var m=function(e){return-1!=f.indexOf(e)},h=m("Opera")||m("OPR"),y=m("Edge")||m("Trident")||m("MSIE"),b=!(!m("Gecko")||-1!=f.toLowerCase().indexOf("webkit")&&!m("Edge")||m("Trident")||m("MSIE")||m("Edge")),w=-1!=f.toLowerCase().indexOf("webkit")&&!m("Edge"),j=function(){var e=f;return b?/rv\:([^\);]+)(\)|;)/.exec(e):y&&m("Edge")?/Edge\/([\d\.]+)/.exec(e):y?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):w?/WebKit\/(\S+)/.exec(e):void 0};!function(){if(h&&e.opera){var n=e.opera.version;return"function"==o(n)?n():n}var n="",r=j();return r&&(n=r?r[1]:""),y&&!m("Edge")&&(r=(r=e.document)?r.documentMode:void 0,r>parseFloat(n))?String(r):n}();var M,E=function(){this.b=[],this.a={};for(var o=0,n=arguments.length;n>o;++o)this.a[arguments[o]]=""},k=function(e,o,n){var r=M;if(n?r.a.hasOwnProperty(n)&&""==r.a[n]:1){e:{if(!(1e-4>Math.random())){var t=Math.random();if(o>t){try{var i=new Uint16Array(1);window.crypto.getRandomValues(i),t=i[0]/65536}catch(a){t=Math.random()}e=e[Math.floor(t*e.length)];break e}}e=null}e&&""!=e&&(n?r.a.hasOwnProperty(n)&&(r.a[n]=e):r.b.push(e))}},S=function(e){var o=M;return o.a.hasOwnProperty(e)?o.a[e]:""},O=function(){var e=M,o=e.b.concat([]);return r(e.a,function(e){""!=e&&o.push(e)}),o},T="google_conversion_id google_conversion_format google_conversion_type google_conversion_order_id google_conversion_language google_conversion_value google_conversion_currency google_conversion_domain google_conversion_label google_conversion_color google_disable_viewthrough google_remarketing_only google_remarketing_for_search google_conversion_items google_custom_params google_conversion_date google_conversion_time google_conversion_js_version onload_callback opt_image_generator google_is_call google_conversion_page_url".split(" "),I=["google_conversion_first_time","google_conversion_snippets"],F=/Android ([01]\.|2\.[01])/i;!function(e,o,n){if(e)if(null!=/[\?&;]google_debug/.exec(document.URL))X(e);else{try{if(K(e))if(3==a(n)){var r=Q(e),t="google_conversion_"+Math.floor(1e9*Math.random());n.write('<span id="'+t+'"></span>'),s(function(){try{var i=n.getElementById(t);i&&(i.innerHTML=G(e,o,n,r),r.google_remarketing_for_search&&!r.google_conversion_domain&&q(e,n,r))}catch(a){}},n)}else n.write(G(e,o,n,e)),e.google_remarketing_for_search&&!e.google_conversion_domain&&q(e,n,e)}catch(i){}J(e)}}(window,navigator,document)}();