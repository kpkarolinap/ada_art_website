/*!CK:3255369369!*//*1414989419,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["RfjOd"]); }

__d("legacy:dom-form",["Form"],function(a,b,c,d){a.Form=b('Form');},3);
__d("LitestandLinkHider",["DataStore","DOM","Event","Parent","UserAgent_DEPRECATED"],function(a,b,c,d,e,f,g,h,i,j,k){function l(event){var n=event.getTarget(),o=j.byTag(n,'a');if(!o)return;if(event.type==='mouseover'){g.set(o,'href',o.href);o.removeAttribute('href');}else{o.href=g.get(o,'href')||o.href;if(event.type==='mouseout')g.remove(o,'href');}}var m={hideLinks:function(n){if(k.chrome()||9<=k.ie()||k.opera())i.listen(n,{mouseover:l,mouseout:l,mousedown:l});},removeAllHrefs:function(n){var o=h.scry(n,'a');o.forEach(function(p){p.removeAttribute('href');p.removeAttribute('ajaxify');p.removeAttribute('rel');p.setAttribute('tabindex',0);});}};e.exports=m;},null);
__d("ComposerXComponents",[],function(a,b,c,d,e,f){function g(h){"use strict";this.$ComposerXComponents0=h;}g.prototype.getComponents=function(){"use strict";return this.$ComposerXComponents0;};e.exports=g;},null);
__d("HideInlineHelp",["DynamicIconSelector","SelectorDeprecated"],function(a,b,c,d,e,f,g,h){var i=[],j={registerMenu:function(k,l,m){i[k]=l.setValue.bind(l,m);},registerLegacyMenu:function(k,l,m){i[k]=function(){h.setSelected(l,m);g.swapIcon(l);};},registerAsyncPopoverMenu:function(k,l,m){i[k]=function(){var n=l.getMenu();n.setValue(m);};},triggerUndo:function(k){i[k]();}};e.exports=j;},null);
__d("Sharer",["CSS","Event","ShareModeConst","URI"],function(a,b,c,d,e,f,g,h,i,j){function k(l){"use strict";this.$Sharer0=l;}k.prototype.getSharerFrame=function(){"use strict";return this.$Sharer0;};k.prototype.getComponents=function(){"use strict";return this.$Sharer0.getComponents();};k.initPrivacyWarning=function(l,m){"use strict";l.subscribe('selector-change',function(n,o){g.conditionShow(m,o===i.GROUP||o===i.MESSAGE||o===i.FRIEND||o===i.SELF_POST);});};k.close=function(l){"use strict";if(typeof(l)=='string'&&l){window.location.href=l;}else{var m=function(){window.close();window.location.href=j().setPath('/').setQueryData().toString();};history.back();setTimeout(m,100);}return false;};k.listenForCancel=function(l){"use strict";h.listen(l,'click',this.close);};k.reloadIfPostLogin=function(){"use strict";var l=new j(document.referrer);if(l.getPath()=='/login.php')window.opener.require('Plugin').reloadOtherPlugins();};e.exports=k;},null);
__d("SharerFrame",["ArbiterMixin","ComposerXMarauderLogger","ComposerXSessionIDs","DOM","Parent","cx","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=m(g);for(var o in n)if(n.hasOwnProperty(o))q[o]=n[o];var p=n===null?null:n.prototype;q.prototype=Object.create(p);q.prototype.constructor=q;q.__superConstructor__=n;function q(r,s,t,u){"use strict";this.$SharerFrame0=t;this.$SharerFrame1=r;this.$SharerFrame2=this.$SharerFrame0.id;i.resetSessionID(this.$SharerFrame2);j.prependContent(this.$SharerFrame0,i.createSessionIDInput(i.getSessionID(this.$SharerFrame2)));if(u){h.registerComposer(this.$SharerFrame0,'feed','share');h.listenForPostEvents(this.$SharerFrame2,k.byClass(this.$SharerFrame0,"_59s7"));h.logEntry(this.$SharerFrame2,'share_dialog');}this.$SharerFrame1.subscribe('change',function(v,w){this.inform('selector-change',w);if(u)h.setShareMode(this.$SharerFrame2,w);}.bind(this));this.$SharerFrame4=s;}q.focusInput=function(r){"use strict";r.focus();};q.focusSelector=function(r){"use strict";var s=j.find(r,'.selectedMode input[type="text"]');if(s)s.focus();};q.prototype.getSelector=function(){"use strict";return this.$SharerFrame1;};q.prototype.getSelectedMode=function(){"use strict";return this.$SharerFrame1.getSelectedMode();};q.prototype.getComponents=function(){"use strict";return this.$SharerFrame4.getComponents();};e.exports=q;},null);
__d("XSharePrivacyAsyncControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/share\/mode\/group\/privacy\/",{current_group_id:{type:"Int",required:true},target_group_id:{type:"Int",required:true}});},null);
__d("SharerSelector",["ArbiterMixin","AsyncRequest","CSS","Event","Input","XSharePrivacyAsyncControllerURIBuilder","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=m(g);for(var o in n)if(n.hasOwnProperty(o))q[o]=n[o];var p=n===null?null:n.prototype;q.prototype=Object.create(p);q.prototype.constructor=q;q.__superConstructor__=n;function q(r){"use strict";this.$SharerSelector0=r.attachments;this.$SharerSelector1=r.icons;this.$SharerSelector2=r.modeInput;this.$SharerSelector3=r.selector;this.$SharerSelector4=r.selectorGroup;this.$SharerSelector5=r.selectedMode;if(this.$SharerSelector3)this.$SharerSelector3.subscribe('change',this.$SharerSelector6.bind(this));if(this.$SharerSelector0&&this.$SharerSelector5&&this.$SharerSelector0[this.$SharerSelector5])this.$SharerSelector0[this.$SharerSelector5].showContent();}q.prototype.updateMode=function(r){"use strict";this.$SharerSelector3.setValue(r);};q.prototype.getSelectedMode=function(){"use strict";return this.$SharerSelector5;};q.prototype.hideModeSelector=function(){"use strict";i.hide(this.$SharerSelector4);};q.prototype.showModeSelector=function(){"use strict";i.show(this.$SharerSelector4);};q.prototype.$SharerSelector6=function(r,s){"use strict";var t=s.value;this.$SharerSelector2&&k.setValue(this.$SharerSelector2,t);this.$SharerSelector0[this.$SharerSelector5].hideContent();this.$SharerSelector1&&i.hide(this.$SharerSelector1[this.$SharerSelector5]);this.$SharerSelector0[t].showContent();this.$SharerSelector1&&i.show(this.$SharerSelector1[t]);this.$SharerSelector5=t;if(this.$SharerSelector5==='group')this.$SharerSelector8(this.$SharerSelector0[this.$SharerSelector5]);this.inform('change',this.$SharerSelector5);};q.prototype.$SharerSelector8=function(r){"use strict";if(r.getTypeahead()){var s=r.getTypeahead();j.listen(s,'keyup',function(){if(r.getTargetGroupID()){var t=r.getCurrentGroupID(),u=r.getTargetGroupID();if(r.isCurrentGroupOpenPrivacy()){var v=new l().setInt('current_group_id',t).setInt('target_group_id',u).getURI();new h(v).setMethod('GET').setReadOnly(true).send();}}});}};e.exports=q;},null);
__d("ShareMode",["CSS","Parent","copyProperties","cx","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k){function l(m){this._content=m;}i(l.prototype,{showContent:function(){this._content&&g.show(this._content);this.show();},hideContent:function(){this._content&&g.hide(this._content);this.hide();},_getSharerRoot:function(){var m=h.byClass(this._content,"_b-z");if(!m)m=h.byClass(this._content,"_57xr");return m;},hideMentionsInput:function(){g.addClass(this._getSharerRoot(),"_c7f");},showMentionsInput:function(){g.removeClass(this._getSharerRoot(),"_c7f");},show:k,hide:k});e.exports=l;},null);
__d("ShareModeFriendTimeline",["Focus","ShareMode"],function(a,b,c,d,e,f,g,h){for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(l,m){"use strict";h.call(this,l);this._typeaheadInput=m;}k.prototype.show=function(){"use strict";g.set(this._typeaheadInput);};e.exports=k;},null);
__d("ShareModeGroup",["Focus","ShareMode"],function(a,b,c,d,e,f,g,h){for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(l,m,n,o,p){"use strict";h.call(this,l);this._typeaheadInput=m;this._hiddenInput=n;this._currentGroupID=o;this._isCurrentGroupOpenPrivacy=p;}k.prototype.show=function(){"use strict";g.set(this._typeaheadInput);};k.prototype.getTypeahead=function(){"use strict";return this._typeaheadInput;};k.prototype.getCurrentGroupID=function(){"use strict";return this._currentGroupID;};k.prototype.getTargetGroupID=function(){"use strict";if(this._hiddenInput&&this._hiddenInput.value)return this._hiddenInput.value;};k.prototype.isCurrentGroupOpenPrivacy=function(){"use strict";return this._isCurrentGroupOpenPrivacy;};e.exports=k;},null);
__d("ShareModeMessage",["Focus","ShareMode"],function(a,b,c,d,e,f,g,h){for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(l,m){"use strict";h.call(this,l);this._typeaheadInput=m;}k.prototype.show=function(){"use strict";g.set(this._typeaheadInput);};e.exports=k;},null);
__d("ShareModeOwnTimeline",["CSS","ShareMode"],function(a,b,c,d,e,f,g,h){for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(l){"use strict";h.call(this);this._privacyWidget=l;}k.prototype.show=function(){"use strict";g.show(this._privacyWidget);};k.prototype.hide=function(){"use strict";g.hide(this._privacyWidget);};e.exports=k;},null);
__d("Selector",["ArbiterMixin","BehaviorsMixin","Button","DOM","DOMQuery","csx","mixin"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n=m(g,h);for(var o in n)if(n.hasOwnProperty(o))q[o]=n[o];var p=n===null?null:n.prototype;q.prototype=Object.create(p);q.prototype.constructor=q;q.__superConstructor__=n;function q(r,s,t,u,v){"use strict";this._popoverMenu=r;this._button=s;this._menu=t;this._input=u;this.init();v.behaviors&&this.enableBehaviors(v.behaviors);}q.prototype.init=function(){"use strict";this._menu.subscribe('change',function(r,s){this._setLabelContent(s.label);this._input.value=s.value;this.inform('change',s);}.bind(this));this._popoverMenu.getPopover().subscribe(['hide','show'],function(r){this.inform(r);}.bind(this));};q.prototype._getLabel=function(){"use strict";return k.find(this._button,"span._55pe");};q.prototype._setLabelContent=function(r){"use strict";var s=this._getLabel();j.setContent(s,r);};q.prototype.getLabelContent=function(){"use strict";var r=this._getLabel();return r.firstChild;};q.prototype.setValue=function(r){"use strict";this._menu.setValue(r);};q.prototype.getValue=function(){"use strict";return this._input.value;};q.prototype.getName=function(){"use strict";return this._input.name;};q.prototype.getButton=function(){"use strict";return this._button;};q.prototype.getMenu=function(){"use strict";return this._menu;};q.prototype.enable=function(){"use strict";i.setEnabled(this._button,true);this._popoverMenu.enable();};q.prototype.disable=function(){"use strict";i.setEnabled(this._button,false);this._popoverMenu.disable();};e.exports=q;},null);
__d("SelectorSubmitOnChange",["Parent","copyProperties","submitForm"],function(a,b,c,d,e,f,g,h,i){function j(k){"use strict";this._selector=k;}j.prototype.enable=function(){"use strict";this._subscription=this._selector.subscribe('change',this._onChange.bind(this));};j.prototype.disable=function(){"use strict";this._subscription.unsubscribe();this._subscription=null;};j.prototype._onChange=function(){"use strict";var k=g.byTag(this._selector.getButton(),'form');k&&i(k);};h(j.prototype,{_subscription:null});e.exports=j;},null);