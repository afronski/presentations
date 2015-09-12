// Compiled by ClojureScript 0.0-3297 {}
goog.provide('elixir_plus_phoenix_at_kariera_it_ktw_2015.gist');
goog.require('cljs.core');
goog.require('goog.net.Jsonp');
goog.require('goog.Uri');
elixir_plus_phoenix_at_kariera_it_ktw_2015.gist.load = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$gist$load(url,success){
var jsonp = (new goog.net.Jsonp((new goog.Uri(url))));
return jsonp.send(null,((function (jsonp){
return (function (response){
var data = cljs.core.get.call(null,cljs.core.js__GT_clj.call(null,response),"data");
var files = cljs.core.get.call(null,data,"files");
var filename = cljs.core.first.call(null,cljs.core.first.call(null,files));
return success.call(null,cljs.core.get.call(null,cljs.core.get.call(null,files,filename),"content"));
});})(jsonp))
,((function (jsonp){
return (function (err){
return console.error(err);
});})(jsonp))
);
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.gist.highlight = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$gist$highlight(parent){
return (function (src){
var pre = document.createElement("pre");
var code = document.createElement("code");
var text = document.createTextNode(src);
var id = parent.id;
var lang = parent.getAttribute("data-language");
code.className = [cljs.core.str("language-"),cljs.core.str(lang)].join('');

pre.className = "line-numbers";

code.appendChild(text);

pre.appendChild(code);

parent.appendChild(pre);

return Prism.highlightElement(code,false,((function (pre,code,text,id,lang){
return (function (){
return console.info("Gist with",id,"highlighted!");
});})(pre,code,text,id,lang))
);
});
});
