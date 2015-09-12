// Compiled by ClojureScript 0.0-3297 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.walk');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__14657__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__14656 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var tag = cljs.core.nth.call(null,vec__14656,(0),null);
var body = cljs.core.nthnext.call(null,vec__14656,(1));
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__14657 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14658__i = 0, G__14658__a = new Array(arguments.length -  0);
while (G__14658__i < G__14658__a.length) {G__14658__a[G__14658__i] = arguments[G__14658__i + 0]; ++G__14658__i;}
  args = new cljs.core.IndexedSeq(G__14658__a,0);
} 
return G__14657__delegate.call(this,args);};
G__14657.cljs$lang$maxFixedArity = 0;
G__14657.cljs$lang$applyTo = (function (arglist__14659){
var args = cljs.core.seq(arglist__14659);
return G__14657__delegate(args);
});
G__14657.cljs$core$IFn$_invoke$arity$variadic = G__14657__delegate;
return G__14657;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__5079__auto__ = (function sablono$core$update_arglists_$_iter__14664(s__14665){
return (new cljs.core.LazySeq(null,(function (){
var s__14665__$1 = s__14665;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14665__$1);
if(temp__4425__auto__){
var s__14665__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14665__$2)){
var c__5077__auto__ = cljs.core.chunk_first.call(null,s__14665__$2);
var size__5078__auto__ = cljs.core.count.call(null,c__5077__auto__);
var b__14667 = cljs.core.chunk_buffer.call(null,size__5078__auto__);
if((function (){var i__14666 = (0);
while(true){
if((i__14666 < size__5078__auto__)){
var args = cljs.core._nth.call(null,c__5077__auto__,i__14666);
cljs.core.chunk_append.call(null,b__14667,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__14668 = (i__14666 + (1));
i__14666 = G__14668;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14667),sablono$core$update_arglists_$_iter__14664.call(null,cljs.core.chunk_rest.call(null,s__14665__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14667),null);
}
} else {
var args = cljs.core.first.call(null,s__14665__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__14664.call(null,cljs.core.rest.call(null,s__14665__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5079__auto__.call(null,arglists);
});
/**
 * Render `element` as HTML string.
 */
sablono.core.render = (function sablono$core$render(element){
if(cljs.core.truth_(element)){
return React.renderToString(element);
} else {
return null;
}
});
/**
 * Render `element` as HTML string, without React internal attributes.
 */
sablono.core.render_static = (function sablono$core$render_static(element){
if(cljs.core.truth_(element)){
return React.renderToStaticMarkup(element);
} else {
return null;
}
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(){
var argseq__5365__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__5365__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__5079__auto__ = (function sablono$core$iter__14670(s__14671){
return (new cljs.core.LazySeq(null,(function (){
var s__14671__$1 = s__14671;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14671__$1);
if(temp__4425__auto__){
var s__14671__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14671__$2)){
var c__5077__auto__ = cljs.core.chunk_first.call(null,s__14671__$2);
var size__5078__auto__ = cljs.core.count.call(null,c__5077__auto__);
var b__14673 = cljs.core.chunk_buffer.call(null,size__5078__auto__);
if((function (){var i__14672 = (0);
while(true){
if((i__14672 < size__5078__auto__)){
var style = cljs.core._nth.call(null,c__5077__auto__,i__14672);
cljs.core.chunk_append.call(null,b__14673,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__14674 = (i__14672 + (1));
i__14672 = G__14674;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14673),sablono$core$iter__14670.call(null,cljs.core.chunk_rest.call(null,s__14671__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14673),null);
}
} else {
var style = cljs.core.first.call(null,s__14671__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__14670.call(null,cljs.core.rest.call(null,s__14671__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5079__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq14669){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq14669));
});
/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",{"src": src}));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to14675 = (function sablono$core$link_to14675(){
var argseq__5365__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.link_to14675.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5365__auto__);
});

sablono.core.link_to14675.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to14675.cljs$lang$maxFixedArity = (1);

sablono.core.link_to14675.cljs$lang$applyTo = (function (seq14676){
var G__14677 = cljs.core.first.call(null,seq14676);
var seq14676__$1 = cljs.core.next.call(null,seq14676);
return sablono.core.link_to14675.cljs$core$IFn$_invoke$arity$variadic(G__14677,seq14676__$1);
});

sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to14675);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 * address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to14678 = (function sablono$core$mail_to14678(){
var argseq__5365__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.mail_to14678.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5365__auto__);
});

sablono.core.mail_to14678.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__14681){
var vec__14682 = p__14681;
var content = cljs.core.nth.call(null,vec__14682,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),[cljs.core.str("mailto:"),cljs.core.str(e_mail)].join('')], null),(function (){var or__4325__auto__ = content;
if(cljs.core.truth_(or__4325__auto__)){
return or__4325__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to14678.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to14678.cljs$lang$applyTo = (function (seq14679){
var G__14680 = cljs.core.first.call(null,seq14679);
var seq14679__$1 = cljs.core.next.call(null,seq14679);
return sablono.core.mail_to14678.cljs$core$IFn$_invoke$arity$variadic(G__14680,seq14679__$1);
});

sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to14678);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list14683 = (function sablono$core$unordered_list14683(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__5079__auto__ = (function sablono$core$unordered_list14683_$_iter__14688(s__14689){
return (new cljs.core.LazySeq(null,(function (){
var s__14689__$1 = s__14689;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14689__$1);
if(temp__4425__auto__){
var s__14689__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14689__$2)){
var c__5077__auto__ = cljs.core.chunk_first.call(null,s__14689__$2);
var size__5078__auto__ = cljs.core.count.call(null,c__5077__auto__);
var b__14691 = cljs.core.chunk_buffer.call(null,size__5078__auto__);
if((function (){var i__14690 = (0);
while(true){
if((i__14690 < size__5078__auto__)){
var x = cljs.core._nth.call(null,c__5077__auto__,i__14690);
cljs.core.chunk_append.call(null,b__14691,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__14692 = (i__14690 + (1));
i__14690 = G__14692;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14691),sablono$core$unordered_list14683_$_iter__14688.call(null,cljs.core.chunk_rest.call(null,s__14689__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14691),null);
}
} else {
var x = cljs.core.first.call(null,s__14689__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list14683_$_iter__14688.call(null,cljs.core.rest.call(null,s__14689__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5079__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list14683);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list14693 = (function sablono$core$ordered_list14693(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__5079__auto__ = (function sablono$core$ordered_list14693_$_iter__14698(s__14699){
return (new cljs.core.LazySeq(null,(function (){
var s__14699__$1 = s__14699;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14699__$1);
if(temp__4425__auto__){
var s__14699__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14699__$2)){
var c__5077__auto__ = cljs.core.chunk_first.call(null,s__14699__$2);
var size__5078__auto__ = cljs.core.count.call(null,c__5077__auto__);
var b__14701 = cljs.core.chunk_buffer.call(null,size__5078__auto__);
if((function (){var i__14700 = (0);
while(true){
if((i__14700 < size__5078__auto__)){
var x = cljs.core._nth.call(null,c__5077__auto__,i__14700);
cljs.core.chunk_append.call(null,b__14701,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__14702 = (i__14700 + (1));
i__14700 = G__14702;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14701),sablono$core$ordered_list14693_$_iter__14698.call(null,cljs.core.chunk_rest.call(null,s__14699__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14701),null);
}
} else {
var x = cljs.core.first.call(null,s__14699__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list14693_$_iter__14698.call(null,cljs.core.rest.call(null,s__14699__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5079__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list14693);
/**
 * Create an image element.
 */
sablono.core.image14703 = (function sablono$core$image14703(){
var G__14705 = arguments.length;
switch (G__14705) {
case 1:
return sablono.core.image14703.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image14703.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.image14703.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image14703.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image14703.cljs$lang$maxFixedArity = 2;

sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image14703);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__14707_SHARP_,p2__14708_SHARP_){
return [cljs.core.str(p1__14707_SHARP_),cljs.core.str("["),cljs.core.str(p2__14708_SHARP_),cljs.core.str("]")].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__14709_SHARP_,p2__14710_SHARP_){
return [cljs.core.str(p1__14709_SHARP_),cljs.core.str("-"),cljs.core.str(p2__14710_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field14711 = (function sablono$core$color_field14711(){
var G__14713 = arguments.length;
switch (G__14713) {
case 1:
return sablono.core.color_field14711.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field14711.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.color_field14711.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.color_field14711.call(null,name__6979__auto__,null);
});

sablono.core.color_field14711.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.color_field14711.cljs$lang$maxFixedArity = 2;

sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field14711);

/**
 * Creates a date input field.
 */
sablono.core.date_field14714 = (function sablono$core$date_field14714(){
var G__14716 = arguments.length;
switch (G__14716) {
case 1:
return sablono.core.date_field14714.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field14714.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.date_field14714.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.date_field14714.call(null,name__6979__auto__,null);
});

sablono.core.date_field14714.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.date_field14714.cljs$lang$maxFixedArity = 2;

sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field14714);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field14717 = (function sablono$core$datetime_field14717(){
var G__14719 = arguments.length;
switch (G__14719) {
case 1:
return sablono.core.datetime_field14717.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field14717.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_field14717.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.datetime_field14717.call(null,name__6979__auto__,null);
});

sablono.core.datetime_field14717.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.datetime_field14717.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field14717);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field14720 = (function sablono$core$datetime_local_field14720(){
var G__14722 = arguments.length;
switch (G__14722) {
case 1:
return sablono.core.datetime_local_field14720.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field14720.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field14720.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.datetime_local_field14720.call(null,name__6979__auto__,null);
});

sablono.core.datetime_local_field14720.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.datetime_local_field14720.cljs$lang$maxFixedArity = 2;

sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field14720);

/**
 * Creates a email input field.
 */
sablono.core.email_field14723 = (function sablono$core$email_field14723(){
var G__14725 = arguments.length;
switch (G__14725) {
case 1:
return sablono.core.email_field14723.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field14723.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.email_field14723.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.email_field14723.call(null,name__6979__auto__,null);
});

sablono.core.email_field14723.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.email_field14723.cljs$lang$maxFixedArity = 2;

sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field14723);

/**
 * Creates a file input field.
 */
sablono.core.file_field14726 = (function sablono$core$file_field14726(){
var G__14728 = arguments.length;
switch (G__14728) {
case 1:
return sablono.core.file_field14726.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field14726.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.file_field14726.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.file_field14726.call(null,name__6979__auto__,null);
});

sablono.core.file_field14726.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.file_field14726.cljs$lang$maxFixedArity = 2;

sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field14726);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field14729 = (function sablono$core$hidden_field14729(){
var G__14731 = arguments.length;
switch (G__14731) {
case 1:
return sablono.core.hidden_field14729.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field14729.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.hidden_field14729.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.hidden_field14729.call(null,name__6979__auto__,null);
});

sablono.core.hidden_field14729.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.hidden_field14729.cljs$lang$maxFixedArity = 2;

sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field14729);

/**
 * Creates a month input field.
 */
sablono.core.month_field14732 = (function sablono$core$month_field14732(){
var G__14734 = arguments.length;
switch (G__14734) {
case 1:
return sablono.core.month_field14732.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field14732.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.month_field14732.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.month_field14732.call(null,name__6979__auto__,null);
});

sablono.core.month_field14732.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.month_field14732.cljs$lang$maxFixedArity = 2;

sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field14732);

/**
 * Creates a number input field.
 */
sablono.core.number_field14735 = (function sablono$core$number_field14735(){
var G__14737 = arguments.length;
switch (G__14737) {
case 1:
return sablono.core.number_field14735.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field14735.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.number_field14735.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.number_field14735.call(null,name__6979__auto__,null);
});

sablono.core.number_field14735.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.number_field14735.cljs$lang$maxFixedArity = 2;

sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field14735);

/**
 * Creates a password input field.
 */
sablono.core.password_field14738 = (function sablono$core$password_field14738(){
var G__14740 = arguments.length;
switch (G__14740) {
case 1:
return sablono.core.password_field14738.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field14738.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.password_field14738.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.password_field14738.call(null,name__6979__auto__,null);
});

sablono.core.password_field14738.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.password_field14738.cljs$lang$maxFixedArity = 2;

sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field14738);

/**
 * Creates a range input field.
 */
sablono.core.range_field14741 = (function sablono$core$range_field14741(){
var G__14743 = arguments.length;
switch (G__14743) {
case 1:
return sablono.core.range_field14741.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field14741.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.range_field14741.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.range_field14741.call(null,name__6979__auto__,null);
});

sablono.core.range_field14741.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.range_field14741.cljs$lang$maxFixedArity = 2;

sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field14741);

/**
 * Creates a search input field.
 */
sablono.core.search_field14744 = (function sablono$core$search_field14744(){
var G__14746 = arguments.length;
switch (G__14746) {
case 1:
return sablono.core.search_field14744.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field14744.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.search_field14744.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.search_field14744.call(null,name__6979__auto__,null);
});

sablono.core.search_field14744.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.search_field14744.cljs$lang$maxFixedArity = 2;

sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field14744);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field14747 = (function sablono$core$tel_field14747(){
var G__14749 = arguments.length;
switch (G__14749) {
case 1:
return sablono.core.tel_field14747.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field14747.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.tel_field14747.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.tel_field14747.call(null,name__6979__auto__,null);
});

sablono.core.tel_field14747.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.tel_field14747.cljs$lang$maxFixedArity = 2;

sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field14747);

/**
 * Creates a text input field.
 */
sablono.core.text_field14750 = (function sablono$core$text_field14750(){
var G__14752 = arguments.length;
switch (G__14752) {
case 1:
return sablono.core.text_field14750.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field14750.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_field14750.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.text_field14750.call(null,name__6979__auto__,null);
});

sablono.core.text_field14750.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.text_field14750.cljs$lang$maxFixedArity = 2;

sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field14750);

/**
 * Creates a time input field.
 */
sablono.core.time_field14753 = (function sablono$core$time_field14753(){
var G__14755 = arguments.length;
switch (G__14755) {
case 1:
return sablono.core.time_field14753.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field14753.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.time_field14753.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.time_field14753.call(null,name__6979__auto__,null);
});

sablono.core.time_field14753.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.time_field14753.cljs$lang$maxFixedArity = 2;

sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field14753);

/**
 * Creates a url input field.
 */
sablono.core.url_field14756 = (function sablono$core$url_field14756(){
var G__14758 = arguments.length;
switch (G__14758) {
case 1:
return sablono.core.url_field14756.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field14756.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.url_field14756.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.url_field14756.call(null,name__6979__auto__,null);
});

sablono.core.url_field14756.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.url_field14756.cljs$lang$maxFixedArity = 2;

sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field14756);

/**
 * Creates a week input field.
 */
sablono.core.week_field14759 = (function sablono$core$week_field14759(){
var G__14761 = arguments.length;
switch (G__14761) {
case 1:
return sablono.core.week_field14759.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field14759.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.week_field14759.cljs$core$IFn$_invoke$arity$1 = (function (name__6979__auto__){
return sablono.core.week_field14759.call(null,name__6979__auto__,null);
});

sablono.core.week_field14759.cljs$core$IFn$_invoke$arity$2 = (function (name__6979__auto__,value__6980__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__6979__auto__,value__6980__auto__);
});

sablono.core.week_field14759.cljs$lang$maxFixedArity = 2;

sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field14759);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box14779 = (function sablono$core$check_box14779(){
var G__14781 = arguments.length;
switch (G__14781) {
case 1:
return sablono.core.check_box14779.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box14779.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box14779.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.check_box14779.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box14779.call(null,name,null);
});

sablono.core.check_box14779.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box14779.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box14779.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box14779.cljs$lang$maxFixedArity = 3;

sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box14779);
/**
 * Creates a radio button.
 */
sablono.core.radio_button14783 = (function sablono$core$radio_button14783(){
var G__14785 = arguments.length;
switch (G__14785) {
case 1:
return sablono.core.radio_button14783.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button14783.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button14783.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.radio_button14783.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button14783.call(null,group,null);
});

sablono.core.radio_button14783.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button14783.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button14783.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str(sablono.util.as_str.call(null,group)),cljs.core.str("-"),cljs.core.str(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button14783.cljs$lang$maxFixedArity = 3;

sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button14783);
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options14787 = (function sablono$core$select_options14787(){
var G__14789 = arguments.length;
switch (G__14789) {
case 1:
return sablono.core.select_options14787.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.select_options14787.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.select_options14787.cljs$core$IFn$_invoke$arity$1 = (function (coll){
return sablono.core.select_options14787.call(null,coll,null);
});

sablono.core.select_options14787.cljs$core$IFn$_invoke$arity$2 = (function (coll,selected){
var iter__5079__auto__ = (function sablono$core$iter__14790(s__14791){
return (new cljs.core.LazySeq(null,(function (){
var s__14791__$1 = s__14791;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__14791__$1);
if(temp__4425__auto__){
var s__14791__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__14791__$2)){
var c__5077__auto__ = cljs.core.chunk_first.call(null,s__14791__$2);
var size__5078__auto__ = cljs.core.count.call(null,c__5077__auto__);
var b__14793 = cljs.core.chunk_buffer.call(null,size__5078__auto__);
if((function (){var i__14792 = (0);
while(true){
if((i__14792 < size__5078__auto__)){
var x = cljs.core._nth.call(null,c__5077__auto__,i__14792);
cljs.core.chunk_append.call(null,b__14793,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14796 = x;
var text = cljs.core.nth.call(null,vec__14796,(0),null);
var val = cljs.core.nth.call(null,vec__14796,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14796,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options14787.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)));

var G__14799 = (i__14792 + (1));
i__14792 = G__14799;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14793),sablono$core$iter__14790.call(null,cljs.core.chunk_rest.call(null,s__14791__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__14793),null);
}
} else {
var x = cljs.core.first.call(null,s__14791__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__14797 = x;
var text = cljs.core.nth.call(null,vec__14797,(0),null);
var val = cljs.core.nth.call(null,vec__14797,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__14797,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options14787.call(null,val,selected)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),val,new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,val,selected),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core._EQ_.call(null,x,selected)], null),x], null)),sablono$core$iter__14790.call(null,cljs.core.rest.call(null,s__14791__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5079__auto__.call(null,coll);
});

sablono.core.select_options14787.cljs$lang$maxFixedArity = 2;

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options14787);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down14800 = (function sablono$core$drop_down14800(){
var G__14802 = arguments.length;
switch (G__14802) {
case 2:
return sablono.core.drop_down14800.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down14800.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.drop_down14800.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down14800.call(null,name,options,null);
});

sablono.core.drop_down14800.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down14800.cljs$lang$maxFixedArity = 3;

sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down14800);
/**
 * Creates a text area element.
 */
sablono.core.text_area14804 = (function sablono$core$text_area14804(){
var G__14806 = arguments.length;
switch (G__14806) {
case 1:
return sablono.core.text_area14804.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area14804.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

sablono.core.text_area14804.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area14804.call(null,name,null);
});

sablono.core.text_area14804.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),value], null)], null);
});

sablono.core.text_area14804.cljs$lang$maxFixedArity = 2;

sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area14804);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label14808 = (function sablono$core$label14808(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label14808);
/**
 * Creates a submit button.
 */
sablono.core.submit_button14809 = (function sablono$core$submit_button14809(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button14809);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button14810 = (function sablono$core$reset_button14810(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button14810);
/**
 * Create a form that points to a particular method and route.
 * e.g. (form-to [:put "/post"]
 * ...)
 */
sablono.core.form_to14811 = (function sablono$core$form_to14811(){
var argseq__5365__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return sablono.core.form_to14811.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5365__auto__);
});

sablono.core.form_to14811.cljs$core$IFn$_invoke$arity$variadic = (function (p__14814,body){
var vec__14815 = p__14814;
var method = cljs.core.nth.call(null,vec__14815,(0),null);
var action = cljs.core.nth.call(null,vec__14815,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,"_method",method_str)], null)),body));
});

sablono.core.form_to14811.cljs$lang$maxFixedArity = (1);

sablono.core.form_to14811.cljs$lang$applyTo = (function (seq14812){
var G__14813 = cljs.core.first.call(null,seq14812);
var seq14812__$1 = cljs.core.next.call(null,seq14812);
return sablono.core.form_to14811.cljs$core$IFn$_invoke$arity$variadic(G__14813,seq14812__$1);
});

sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to14811);
