/*!CK:2044135084!*//*1418580014,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["pK6Fg"]); }

__d("OGCollectionAddCuration",["AsyncRequest","DataStore","DOM","copyProperties","tidyEvent"],function(a,b,c,d,e,f,g,h,i,j,k){var l='OGCollectionAddCuration';function m(n,o,p,q,r,s){this._container=n;this._control=o;this._itemID=p;this._surface=r;this._display=s.display;if(o)k([o.subscribe('reload',this.reloadControl.bind(this))]);if(q)h.set(String(q),l,this);if(p)h.set(String(p),l,this);}j(m,{handleDeleteAction:function(n){var o=h.get(String(n),l);if(o)o.reloadControl();},handleAddItemSuccess:function(n,o,p){var q=h.get(String(n),l);h.set(String(o),l,q);q.insertMenuIntoDialog(p);},hideControl:function(n){var o=h.get(String(n),l);o.hideControl();},insertControl:function(n,o){var p=h.get(String(n),l);p.replaceControl(o);},reloadControl:function(n){var o=h.get(String(n),l);if(o)o.reloadControl();}});j(m.prototype,{hideControl:function(){this._control.hide();},reloadControl:function(){var n=new g('/ajax/collections/add_curation').setData({itemid:this._itemID,surface:this._surface,forceedit:true,display:this._display}).setHandler(this._handleAddCurationResponse.bind(this));n.send();},insertMenuIntoDialog:function(n){this._control.insertMenuIntoDialog(n);},replaceControl:function(n){i.replace(this._container,n);},getMenuControl:function(){return this._control;},_handleAddCurationResponse:function(n){this._control.destroy();i.replace(this._container,n.payload);}});e.exports=m;},null);
__d("OGCollectionAddObject",["AsyncRequest","CSS","DOM","DOMQuery","Form","JSLogger","Parent","TidyArbiterMixin","TimelineSection","copyProperties","csx","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t=l.create('og_collection_add_object'),u=p({ADD_PLACEHOLDER:'OGCollectionAddObject/addPlaceholder',NEW_ITEM:'OGCollectionAddObject/newItem',PLACEHOLDER:'OGCollectionAddObject/placeholder',REMOVE_PLACEHOLDER:'OGCollectionAddObject/removePlaceholder',init:function(v,w,x,y,z){o.callWithSection(z,function(aa){this.initImpl(v,w,x,y,aa.getNode(),z,aa.id);}.bind(this));},initInReport:function(v,w,x,y){var z=m.byClass(y,"_w8_");this.initImpl(v,w,x,y,z,null,null);},initImpl:function(v,w,x,y,z,aa,ba){var ca=j.scry(z,"._620")[0];if(!ca){t.error('grid_not_found',{collection_id:aa,section:ba,csx:'.public/fbTimelineCollectionGrid/root'});return;}w.subscribe('select',function(da,ea){if(!ea.selected.uid||ea.selected.type.indexOf('disabled')!=-1)return;u.inform(u.ADD_PLACEHOLDER,aa);var fa=ca.nextSibling,ga=null;if(fa&&h.hasClass(fa,"_3t3")){h.hide(ca.lastChild);ga=ca.lastChild;}var ha=i.prependContent(ca,x.cloneNode(true))[0];u.inform(u.PLACEHOLDER,{grid:ca});var ia=p({action:'add',mechanism:'typeahead'},k.serialize(y));ha.setAttribute('data-item',ia.item_id);new g().setURI(v).setData(ia).setRelativeTo(ca).setErrorHandler(function(ja){i.remove(ha);u.inform(u.REMOVE_PLACEHOLDER,aa);ga&&h.show(ga);}).setHandler(function(ja){ga&&i.remove(ga);}).setFinallyHandler(function(ja){u.inform(u.PLACEHOLDER,{grid:ca});}).send();});},replaceItem:function(v,w,x){var y=i.scry(v,'div[data-obj="'+w+'"]')[0];if(y){var z=m.byClass(y,"_30f");if(z)u.inform(u.REMOVE_PLACEHOLDER,z.id);i.remove(y.parentNode);}var aa=i.find(v,'[data-item="'+w+'"]'+"._2804");i.replace(aa,x);this.inform(u.NEW_ITEM,{grid:v,newItem:x});},prependItem:function(v,w){var x=j.scry(s(v),"._620")[0];i.prependContent(x,w);this.inform(u.NEW_ITEM,{grid:x,newItem:w});}},n);e.exports=u;},null);
__d("OGCollectionBatchAddCuration",["AsyncRequest","Event","OGCollectionAddCuration","Parent","Run"],function(a,b,c,d,e,f,g,h,i,j,k){var l={},m;function n(p){for(var q=0;q<l[p].listeners.length;q++)l[p].listeners[q].remove();l[p]=null;}var o={loadControls:function(p,q,r){if(!q||!Array.isArray(q))return;l[r]=l[r]||{tokens:[],listeners:[]};l[r].tokens=l[r].tokens.concat(q);var s=j.byClass(p,'fbTimelineUnit');l[r].listeners.push(h.listen(s,'mouseenter',function(){new g('/ajax/collections/batch_add_curation').setData({collectionitemtokens:l[r].tokens.join(),surface:r}).send();n(r);}));if(!m){m=true;k.onLeave(function(){for(var t in l)l[t]&&n(t);l={};m=null;});}},attachControls:function(p,q){for(var r=0;r<p.length;r++)i.insertControl(p[r],q[r]);}};e.exports=o;},null);
__d("ProfileInfoRequestSuggestion",["CSS","Event","tidyEvent"],function(a,b,c,d,e,f,g,h,i){var j={listenThinker:function(k,l,m){m=m||'hidden_elem';i(h.listen(k,'click',g.removeClass.bind(g,l,m)));}};e.exports=j;},null);
__d("TimelineOGCollectionReportGrid",["CSS","OGCollectionAddObject"],function(a,b,c,d,e,f,g,h){var i={init:function(j,k){h.subscribe([h.NEW_ITEM,h.PLACEHOLDER],i.hideOverflowNodes.bind(null,j,k));},hideOverflowNodes:function(j,k,l,m){if(m.grid!=j)return;for(var n=0;n<j.childNodes.length;n++)g.conditionShow(j.childNodes[n],n<k);}};e.exports=i;},null);
__d("OnlyMeUI",["AudienceSelectorTags","Arbiter","CSS","DOM","Parent","PrivacySelectorBase","PrivacyConst","SelectorDeprecated","$","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){function q(){return [j.create('div',{className:'onlyMeBorder'}),j.create('div',{className:'onlyMeBorder onlyMeBorderBottom'})];}function r(){return j.create('img',{alt:' ',className:'onlyMePrivacyCorner',height:34,src:'/images/profile/timeline/privacy_corner.png',width:34});}function s(z){var aa=j.scry(z,'.photoUnit a.photo');return aa.filter(function(ba){return !j.scry(ba,'.onlyMePrivacyCorner').length;});}function t(z,aa){if(aa instanceof l){if(aa.getTags().length>1)return;}else if(g.hasTags(w(aa)))return;if(i.hasClass(z,'storyContent'))if(!k.byClass(z,'onlyMeWrap')){var ba=j.create('div',{className:'onlyMeWrap'});j.appendContent(k.byClass(z,'uiStreamStory'),ba);j.appendContent(ba,z);z=ba;}else z=k.byClass(z,'onlyMeWrap');i.addClass(z,'storyOnlyMe');if(!(aa instanceof l)&&!i.hasClass(z,'timelineRecentActivityStory'))j.setContent(j.find(aa,'span.uiButtonText'),"Only Me");if(!i.hasClass(z,'storyContent')){var ca=s(z);for(var da=0,ea=ca.length;da<ea;++da)j.appendContent(ca[da],r());}if(!j.scry(z,'div.onlyMeBorder').length){var fa=q();j.prependContent(z,fa[0]);j.appendContent(z,fa[1]);}}function u(z){if(!z)return;var aa=k.byClass(z,'storyContent')||k.byClass(z,'timelineRecentActivityStory')||k.byClass(z,'timelineUnitContainer')||k.byClass(z,'fbTimelineTwoColumn');if(!aa){aa=j.scry(z,'^.permalink_stream .storyContent');aa=aa.length&&aa[0];}else if(i.hasClass(aa,'fbTimelineComposerUnit'))return null;return aa;}function v(z){z=i.hasClass(z,'storyContent')?k.byClass(z,'onlyMeWrap'):z;z&&i.removeClass(z,'storyOnlyMe');}function w(z){var aa=j.scry(z,'*[data-oid]');if(aa.length===0)return '';return aa[0].getAttribute('data-oid');}var x=false,y={listenAdamaTimelineSelector:function(z){var aa=z.getInstance();aa.subscribe('changed',function(event,ba){var ca=aa.getTriggerButtonElement(),da=u(ca);if(!da)return;if(ba.post_param==m.PostParam.ONLY_ME){t(da,aa);}else v(da);});},init:function(){if(x)return;x=true;h.subscribe('AudienceSelector/changed',function(z,aa){if(aa.selector&&i.hasClass(aa.selector,'blacklistOnlyMeUI'))return;var ba=u(aa.selector)||u(aa.clone);if(!ba)return;if(n.getOptionValue(aa.option)==m.BaseValue.SELF){t(ba,aa.selector);}else v(ba);});},setOnlyMe:function(z){if(x)return;y.init();z=j.find(k.byClass(o(z),'uiSelector'),'a.uiSelectorButton');var aa=u(z);aa&&t(aa,z);}};e.exports=y;},null);