// Compiled by ClojureScript 0.0-3297 {}
goog.provide('elixir_plus_phoenix_at_kariera_it_ktw_2015.framework');
goog.require('cljs.core');
goog.require('om.core');
goog.require('sablono.core');
NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (array){
var array__$1 = this;
return cljs.core.array_seq.call(null,array__$1,(0));
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.color_log = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$color_log(message,color){
return console.log([cljs.core.str("%c"),cljs.core.str(message)].join(''),[cljs.core.str("color:"),cljs.core.str(color),cljs.core.str(";font-weight:bold;")].join(''));
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.print_notes = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$print_notes(slide_number){
var n = (slide_number + (1));
var selector = [cljs.core.str(".slide:nth-child("),cljs.core.str(n),cljs.core.str(") .notes li")].join('');
console.clear();

var seq__8425 = cljs.core.seq.call(null,document.querySelectorAll(selector));
var chunk__8426 = null;
var count__8427 = (0);
var i__8428 = (0);
while(true){
if((i__8428 < count__8427)){
var li = cljs.core._nth.call(null,chunk__8426,i__8428);
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.color_log.call(null,li.innerText,"green");

var G__8429 = seq__8425;
var G__8430 = chunk__8426;
var G__8431 = count__8427;
var G__8432 = (i__8428 + (1));
seq__8425 = G__8429;
chunk__8426 = G__8430;
count__8427 = G__8431;
i__8428 = G__8432;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8425);
if(temp__4425__auto__){
var seq__8425__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8425__$1)){
var c__5110__auto__ = cljs.core.chunk_first.call(null,seq__8425__$1);
var G__8433 = cljs.core.chunk_rest.call(null,seq__8425__$1);
var G__8434 = c__5110__auto__;
var G__8435 = cljs.core.count.call(null,c__5110__auto__);
var G__8436 = (0);
seq__8425 = G__8433;
chunk__8426 = G__8434;
count__8427 = G__8435;
i__8428 = G__8436;
continue;
} else {
var li = cljs.core.first.call(null,seq__8425__$1);
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.color_log.call(null,li.innerText,"green");

var G__8437 = cljs.core.next.call(null,seq__8425__$1);
var G__8438 = null;
var G__8439 = (0);
var G__8440 = (0);
seq__8425 = G__8437;
chunk__8426 = G__8438;
count__8427 = G__8439;
i__8428 = G__8440;
continue;
}
} else {
return null;
}
}
break;
}
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.for_all_nodes = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$for_all_nodes(selector,handler){
var seq__8445 = cljs.core.seq.call(null,cljs.core.seq.call(null,document.querySelectorAll(selector)));
var chunk__8446 = null;
var count__8447 = (0);
var i__8448 = (0);
while(true){
if((i__8448 < count__8447)){
var parent = cljs.core._nth.call(null,chunk__8446,i__8448);
var id_8449 = parent.id;
handler.call(null,id_8449,parent);

var G__8450 = seq__8445;
var G__8451 = chunk__8446;
var G__8452 = count__8447;
var G__8453 = (i__8448 + (1));
seq__8445 = G__8450;
chunk__8446 = G__8451;
count__8447 = G__8452;
i__8448 = G__8453;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__8445);
if(temp__4425__auto__){
var seq__8445__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8445__$1)){
var c__5110__auto__ = cljs.core.chunk_first.call(null,seq__8445__$1);
var G__8454 = cljs.core.chunk_rest.call(null,seq__8445__$1);
var G__8455 = c__5110__auto__;
var G__8456 = cljs.core.count.call(null,c__5110__auto__);
var G__8457 = (0);
seq__8445 = G__8454;
chunk__8446 = G__8455;
count__8447 = G__8456;
i__8448 = G__8457;
continue;
} else {
var parent = cljs.core.first.call(null,seq__8445__$1);
var id_8458 = parent.id;
handler.call(null,id_8458,parent);

var G__8459 = cljs.core.next.call(null,seq__8445__$1);
var G__8460 = null;
var G__8461 = (0);
var G__8462 = (0);
seq__8445 = G__8459;
chunk__8446 = G__8460;
count__8447 = G__8461;
i__8448 = G__8462;
continue;
}
} else {
return null;
}
}
break;
}
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.tick = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$tick(minute,max){
return (function (){
if((minute > max)){
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.color_log.call(null,[cljs.core.str("Overdue: "),cljs.core.str(minute),cljs.core.str("/"),cljs.core.str(max)].join(''),"red");
} else {
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.color_log.call(null,[cljs.core.str("Time: "),cljs.core.str(minute),cljs.core.str("/"),cljs.core.str(max)].join(''),"blue");
}

return setTimeout(elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$tick.call(null,(minute + (1)),max),(60000));
});
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.start_timer = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$start_timer(time_in_minutes){
return setTimeout(elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.tick.call(null,(0),time_in_minutes),(5000));
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.go_to_slide = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$go_to_slide(n,slides_list,app_state){
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.print_notes.call(null,n);

return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"counter","counter",804008177),n,new cljs.core.Keyword(null,"internal-counter","internal-counter",-420246391),(0),new cljs.core.Keyword(null,"max-counter","max-counter",-1406603766),cljs.core.count.call(null,slides_list));
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.go_to_hash = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$go_to_hash(app_state,slides_list){
var slide = (cljs.core.subs.call(null,document.location.hash,(1)) | (0));
return elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.go_to_slide.call(null,slide,slides_list,app_state);
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.set_hash = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$set_hash(n){
return document.location.hash = n;
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.refresh_current_slide = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$refresh_current_slide(app_state,slides_list){
var n = new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.go_to_slide.call(null,n,slides_list,app_state);

return elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.set_hash.call(null,n);
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.restore_slides_from_hash = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$restore_slides_from_hash(app_state,slides_list){
if(!(cljs.core.empty_QMARK_.call(null,document.location.hash))){
return elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.go_to_hash.call(null,app_state,slides_list);
} else {
return elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.refresh_current_slide.call(null,app_state,slides_list);
}
});
if(typeof elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.slide !== 'undefined'){
} else {
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.slide = (function (){var method_table__5220__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5221__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5223__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5224__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"elixir-plus-phoenix-at-kariera-it-ktw-2015.framework","slide"),((function (method_table__5220__auto__,prefer_table__5221__auto__,method_cache__5222__auto__,cached_hierarchy__5223__auto__,hierarchy__5224__auto__){
return (function (a){
return a;
});})(method_table__5220__auto__,prefer_table__5221__auto__,method_cache__5222__auto__,cached_hierarchy__5223__auto__,hierarchy__5224__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5224__auto__,method_table__5220__auto__,prefer_table__5221__auto__,method_cache__5222__auto__,cached_hierarchy__5223__auto__));
})();
}
cljs.core._add_method.call(null,elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.slide,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return React.createElement("div",null,"empty");
}));
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.section = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$section(slide_name,state,position,content){
return React.createElement("section",{"style": {"transform": [cljs.core.str("translateX("),cljs.core.str(((960) * position)),cljs.core.str("px)")].join('')}, "key": slide_name, "className": "slide bg-color"},sablono.interpreter.interpret.call(null,content));
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.translate = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$translate(data){
return [cljs.core.str(" translateX("),cljs.core.str(((-960) * new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(data))),cljs.core.str("px)")].join('');
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.slider = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$slider(data,slides_list){
return React.createElement("article",{"className": "slides"},React.createElement("div",{"style": {"transformOrigin": [cljs.core.str(((960) * new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(data))),cljs.core.str("px 300px")].join(''), "transform": elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.translate.call(null,data)}, "className": "slide-world"},sablono.interpreter.interpret.call(null,cljs.core.map_indexed.call(null,(function (p1__8466_SHARP_,p2__8465_SHARP_){
return elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.slide.call(null,p2__8465_SHARP_,data,p1__8466_SHARP_);
}),slides_list))));
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.on = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$on(num,state,content){
if((new cljs.core.Keyword(null,"internal-counter","internal-counter",-420246391).cljs$core$IFn$_invoke$arity$1(state) >= num)){
return content;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
}
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.only = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$only(num,state,content){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"internal-counter","internal-counter",-420246391).cljs$core$IFn$_invoke$arity$1(state),num)){
return content;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991)], null);
}
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.dispatch_map = new cljs.core.PersistentArrayMap(null, 5, [(32),new cljs.core.Keyword(null,"advance","advance",1621005601),(39),new cljs.core.Keyword(null,"advance","advance",1621005601),(40),new cljs.core.Keyword(null,"internal-advance","internal-advance",-436058812),(38),new cljs.core.Keyword(null,"internal-back","internal-back",1562380361),(37),new cljs.core.Keyword(null,"back","back",-417520012)], null);
if(typeof elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.dispatch !== 'undefined'){
} else {
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.dispatch = (function (){var method_table__5220__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5221__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5222__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5223__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5224__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"elixir-plus-phoenix-at-kariera-it-ktw-2015.framework","dispatch"),cljs.core.identity,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5224__auto__,method_table__5220__auto__,prefer_table__5221__auto__,method_cache__5222__auto__,cached_hierarchy__5223__auto__));
})();
}
cljs.core._add_method.call(null,elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.dispatch,new cljs.core.Keyword(null,"advance","advance",1621005601),(function (_,data){
return om.core.transact_BANG_.call(null,data,cljs.core.PersistentVector.EMPTY,(function (state){
var x = new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(state);
var mx = (new cljs.core.Keyword(null,"max-counter","max-counter",-1406603766).cljs$core$IFn$_invoke$arity$1(state) - (1));
var value = ((cljs.core._EQ_.call(null,x,mx))?x:(x + (1)));
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.print_notes.call(null,value);

elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.set_hash.call(null,value);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"internal-counter","internal-counter",-420246391),(0),new cljs.core.Keyword(null,"counter","counter",804008177),value);
}));
}));
cljs.core._add_method.call(null,elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.dispatch,new cljs.core.Keyword(null,"internal-advance","internal-advance",-436058812),(function (_,data){
return om.core.transact_BANG_.call(null,data,cljs.core.PersistentVector.EMPTY,(function (state){
var x = new cljs.core.Keyword(null,"internal-counter","internal-counter",-420246391).cljs$core$IFn$_invoke$arity$1(state);
var mx = (new cljs.core.Keyword(null,"max-internal-counter","max-internal-counter",-609913359).cljs$core$IFn$_invoke$arity$1(state) - (1));
var value = ((cljs.core._EQ_.call(null,x,mx))?x:(x + (1)));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"internal-counter","internal-counter",-420246391),value);
}));
}));
cljs.core._add_method.call(null,elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.dispatch,new cljs.core.Keyword(null,"internal-back","internal-back",1562380361),(function (_,data){
return om.core.transact_BANG_.call(null,data,cljs.core.PersistentVector.EMPTY,(function (state){
var x = new cljs.core.Keyword(null,"internal-counter","internal-counter",-420246391).cljs$core$IFn$_invoke$arity$1(state);
var value = (((x === (0)))?(0):(x - (1)));
return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"internal-counter","internal-counter",-420246391),value);
}));
}));
cljs.core._add_method.call(null,elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.dispatch,new cljs.core.Keyword(null,"back","back",-417520012),(function (_,data){
return om.core.transact_BANG_.call(null,data,cljs.core.PersistentVector.EMPTY,(function (state){
var x = new cljs.core.Keyword(null,"counter","counter",804008177).cljs$core$IFn$_invoke$arity$1(state);
var value = (((x === (0)))?(0):(x - (1)));
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.print_notes.call(null,value);

elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.set_hash.call(null,value);

return cljs.core.assoc.call(null,state,new cljs.core.Keyword(null,"counter","counter",804008177),value);
}));
}));
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.dispatch_BANG_ = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$dispatch_BANG_(state,action){
return elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.dispatch.call(null,action,om.core.root_cursor.call(null,state));
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.key_handler = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$key_handler(state,event){
var temp__4425__auto__ = cljs.core.get.call(null,elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.dispatch_map,event.keyCode);
if(cljs.core.truth_(temp__4425__auto__)){
var action = temp__4425__auto__;
return elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.dispatch_BANG_.call(null,state,action);
} else {
return null;
}
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.presentation_root = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$presentation_root(slides_list){
return (function (data,owner){
if(typeof elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.t8470 !== 'undefined'){
} else {

/**
* @constructor
*/
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.t8470 = (function (presentation_root,slides_list,data,owner,meta8471){
this.presentation_root = presentation_root;
this.slides_list = slides_list;
this.data = data;
this.owner = owner;
this.meta8471 = meta8471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.t8470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_8472,meta8471__$1){
var self__ = this;
var _8472__$1 = this;
return (new elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.t8470(self__.presentation_root,self__.slides_list,self__.data,self__.owner,meta8471__$1));
});

elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.t8470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_8472){
var self__ = this;
var _8472__$1 = this;
return self__.meta8471;
});

elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.t8470.prototype.om$core$IRender$ = true;

elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.t8470.prototype.om$core$IRender$render$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return React.createElement("main",{"className": "bg-color"},sablono.interpreter.interpret.call(null,elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.slider.call(null,self__.data,self__.slides_list)));
});

elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.t8470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"presentation-root","presentation-root",1105324703,null),new cljs.core.Symbol(null,"slides-list","slides-list",1193549465,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"owner","owner",1247919588,null),new cljs.core.Symbol(null,"meta8471","meta8471",1198633755,null)], null);
});

elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.t8470.cljs$lang$type = true;

elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.t8470.cljs$lang$ctorStr = "elixir-plus-phoenix-at-kariera-it-ktw-2015.framework/t8470";

elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.t8470.cljs$lang$ctorPrWriter = (function (this__4904__auto__,writer__4905__auto__,opt__4906__auto__){
return cljs.core._write.call(null,writer__4905__auto__,"elixir-plus-phoenix-at-kariera-it-ktw-2015.framework/t8470");
});

elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.__GT_t8470 = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$presentation_root_$___GT_t8470(presentation_root__$1,slides_list__$1,data__$1,owner__$1,meta8471){
return (new elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.t8470(presentation_root__$1,slides_list__$1,data__$1,owner__$1,meta8471));
});

}

return (new elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.t8470(elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$presentation_root,slides_list,data,owner,cljs.core.PersistentArrayMap.EMPTY));
});
});
elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.presentation_init = (function elixir_plus_phoenix_at_kariera_it_ktw_2015$framework$presentation_init(state){
return document.body.addEventListener("keyup",(function (event){
return elixir_plus_phoenix_at_kariera_it_ktw_2015.framework.key_handler.call(null,state,event);
}));
});
