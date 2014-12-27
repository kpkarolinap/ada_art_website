/*!CK:3875858743!*//*1418579310,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["bKfZI"]); }

__d("Layout.react",["React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i){var j=g.createClass({displayName:"Layout",render:function(){var k,l,m=this.props.children;for(k=0;k<m.length;k++){l=m[k];if(l&&l.type===j.FillColumn.type){var n=m.slice(k+1).map(function(o){if(o)o.props.className=i(o.props.className,"_4bl8");return o;});n.reverse();m.splice(k,m.length);Array.prototype.push.apply(m,n);m.push(l);break;}}return (g.createElement("div",g.__spread({},this.props,{className:i(this.props.className,"clearfix")}),m));}});j.Column=g.createClass({displayName:"Column",render:function(){return (g.createElement("div",g.__spread({},this.props,{className:i(this.props.className,"_4bl7")})));}});j.FillColumn=g.createClass({displayName:"FillColumn",render:function(){return (g.createElement("div",g.__spread({},this.props,{className:i(this.props.className,"_4bl9")})));}});e.exports=j;},null);
__d("XAdPreferencesCategoryInfoControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/ads\/preferences\/category_info\/",{ad_id:{type:"Int",required:true},category_fbid:{type:"Int",required:true}});},null);
__d("AdsPreferencesInterestListItem.react",["AdPreferencesDesktopStrings","AsyncRequest","Image.react","Layout.react","xuiglyph","React","ReactLayeredComponentMixin","XAdPreferencesCategoryInfoControllerURIBuilder","XUIContextualDialog.react","XUIContextualDialogTitle.react","XUIContextualDialogBody.react","XUIText.react","cx","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var u=j.Column,v=j.FillColumn,w=l.createClass({displayName:"AdsPreferencesInterestListItem",mixins:[m],propTypes:{adID:l.PropTypes.number.isRequired,interest:l.PropTypes.object.isRequired,isListItem:l.PropTypes.bool.isRequired,onInterestClick:l.PropTypes.func.isRequired,removed:l.PropTypes.bool.isRequired,setDialog:l.PropTypes.func,setReportDialog:l.PropTypes.func},getInitialState:function(){return {xHover:false,iHover:false,interestHover:false,enterTimeout:-1,suggestions:{}};},_xHover:function(event){this.setState({xHover:!this.state.xHover});},_xOver:function(event){this.setState({xHover:true});},_iHover:function(event){this.setState({iHover:!this.state.iHover});},_interestHover:function(x){this.setState({interestHover:x});},_interestEnter:function(event,x,y){if(y){this._interestHover(true);}else{var z=setTimeout(this._interestEnter.bind(this,true,true,true),250);this.setState({enterTimeout:z});}},_interestLeave:function(event){this._interestHover(false);clearTimeout(this.state.enterTimeout);},_handleInterestClick:function(event){var x=this.refs['toggle_'+this.props.interest.id];this.props.onInterestClick(this.props.interest,this.props.removed,x);},_onInterestTextClick:function(event){if(this.state.suggestions>0&&this.props.setDialog){this.props.setDialog(this.props.interest,this.state.suggestions);}else{var x=new n().setInt('ad_id',this.props.adID).setInt('category_fbid',this.props.interest.id).getURI();new h(x).setHandler(function(y){var z=y.payload,aa=z.suggestions,ba=this.props.interest;if(!ba.description)ba.description="This is a preference you added.";this.setState({suggestions:aa});if(this.props.setDialog)this.props.setDialog(ba,z.suggestions);}.bind(this)).send();}},_onReportPreferenceClick:function(event){if(this.props.setReportDialog)this.props.setReportDialog(this.props.interest);},render:function(){var x=((this.state.iHover?"hidden_elem":'')),y=((!this.state.iHover?"hidden_elem":'')),z=((this.state.interestHover&&this.props.isListItem?"_2imp":'')+(!this.state.interestHover&&this.props.isListItem?' '+"_2imq":'')+(this.props.removed?' '+"hidden_elem":'')),aa=!this.props.isListItem?null:l.createElement("span",{className:z,ref:this.props.interest.name,onMouseEnter:this._iHover,onMouseLeave:this._iHover},l.createElement(i,{className:x,src:k({name:'info-solid',shade:'light',size:'medium'})}),l.createElement(i,{className:y,src:k({name:'info-solid',shade:'dark',size:'medium'})})),ba=l.createElement("span",{className:z,onMouseEnter:this._xHover,onMouseLeave:this._xHover,onMouseMove:this._xOver},l.createElement(i,{className:((this.state.xHover?"hidden_elem":'')),src:k({name:'cross',shade:'dark'})}),l.createElement(i,{className:((!this.state.xHover?"hidden_elem":'')),src:k({name:'cross',shade:'accent'})})),ca=l.createElement("div",{className:"_2imr"},l.createElement("a",{href:"#"},"Undo")),da=l.createElement(r,{className:((this.props.removed?"_2ims":'')),size:"small",weight:"bold","data-fbid":this.props.interest.id},this.props.interest.name),ea=(!this.props.isListItem||this.props.removed)?da:l.createElement("a",{onClick:this._onInterestTextClick},da),fa=(("_2imt")+(!this.props.isListItem?' '+"_2imu":'')),ga=l.createElement(v,null,l.createElement("a",{onClick:this._onReportPreferenceClick,className:z},l.createElement(r,{size:"small",weight:"bold"},"[FB-Only] Report"))),ha=(this.props.isListItem&&this.props.setReportDialog)?ga:null;return (l.createElement("li",{className:fa,onMouseEnter:this._interestEnter,onMouseLeave:this._interestLeave},l.createElement(j,null,l.createElement(v,null,ea,l.createElement("span",{className:"_2imv"},aa)),ha,l.createElement(u,{className:"mlm"},l.createElement("div",{onClick:this._handleInterestClick,className:"_2imw",ref:'toggle_'+this.props.interest.id},!this.props.removed?ba:ca)))));},renderLayers:function(){var x=this.props.interest.description?this.props.interest.description:"This is a preference you added.";return {contextualDialog:l.createElement(o,{contextRef:this.props.interest.name,shown:this.state.iHover,position:"above",focusContextOnHide:false,width:o.WIDTH.NORMAL},l.createElement(p,null,g.about_this_ads_preference),l.createElement(q,null,x))};}});e.exports=w;},null);
__d("XAdPreferencesInterestsWriteControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/ads\/preferences\/edit_interests\/",{ad_id:{type:"Int",required:true},action:{type:"Enum",required:true},type:{type:"Enum",required:true},fbids:{type:"IntVector",required:true}});},null);
__d("XAdPreferencesNUXControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/ads\/preferences\/nux\/",{type:{type:"String",required:true}});},null);
__d("XAdsPreferencesFeedbackControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/ads\/preferences\/feeedback\/",{ad_id:{type:"Int",required:true},favorite:{type:"Enum",required:true}});},null);
__d("AdsPrefs",["AsyncRequest","AdsPreferencesInterestListItem.react","CSS","DOM","React","Event","tidyEvent","cx","csx","XAdPreferencesInterestsWriteControllerURIBuilder","XAdPreferencesNUXControllerURIBuilder","XAdsPreferencesFeedbackControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){function s(w,x){i.toggleClass(w,"hidden_elem");var y=i.hasClass(w,"hidden_elem")?'ad_useful':'ad_neutral',z=new r().setInt('ad_id',x).setEnum('favorite',y).getURI(),aa=new g(z);aa.send();}function t(){var w=new q().setString('type','interest_nux_ts').getURI();new g(w).send();}function u(w,x,y){var z=x?'add':'del',aa=new p().setInt('ad_id',w.adID).setEnum('action',z).setEnum('type','interest').setIntVector('fbids',[w.id]).getURI();new g(aa).send();k.render(k.createElement(h,{className:"_589n",adID:w.adID,interest:w,isListItem:false,onInterestClick:u,removed:!x}),document.getElementById(w.rootID));if(w.dialog&&y!=null){t();w.dialog.setContext(y);w.dialog.show();}}var v={initRHCFeedback:function(w,x,y){m(l.listen(x,'click',function(z){s(y,w);z.kill();}));},createListElement:function(w,x,y,z,aa,ba){var ca={id:x,name:y,adID:w,rootID:z,dialog:ba};k.render(k.createElement(h,{className:"_589n",adID:w,interest:ca,isListItem:false,onInterestClick:u,removed:false}),document.getElementById(z));},initExpandable:function(w){m(l.listen(w,'click',function(x){var y=j.scry(w,"div._2fdq")[0],z=j.scry(w,"._4r43")[0],aa=j.scry(w,"._1uhj")[0];i.toggleClass(z,'hidden_elem');i.toggleClass(aa,'hidden_elem');i.toggleClass(y,'hidden_elem');}));},toggleFavorite:function(w){var x=j.find(w.getRoot(),'img');s(x,w.getLabel());}};e.exports=v;},null);
__d("EntstreamFeedObject",["CSS","Parent","cx"],function(a,b,c,d,e,f,g,h,i){var j={getRoot:function(k){return h.byClass(k,"_5jmm");},getHscrollOuterRootIfAvailable:function(k){var l=k;if(g.hasClass(l,"_170y"))l=j.getRoot(l.parentNode);return l;}};e.exports=j;},null);
__d("EntstreamFeedObjectFollowup",["CSS","DOM","EntstreamFeedObject","Event","csx","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){var n={getFollowup:function(o){var p=h.scry(o,"._5lum");if(!p.length)p=h.scry(o.parentNode,"._5lum");return p?p[0]:null;},initCloseButton:function(o){var p=h.find(o,"._5xsl"),q=j.listen(p,'click',function(){q.remove();h.remove(o);});o.listener=q;},stopListenCloseButton:function(o){if(o.listener)o.listener.remove();},addFollowup:function(o,p,q){var r=g.hasClass(o,"_5pat"),s=h.create('div',{className:"_5lum"});if(r){g.addClass(s,"_5pau");}else g.addClass(s,"_1f84");if(q)g.addClass(s,q);if(p){h.appendContent(s,p);this.initCloseButton(s);h.insertBefore(o,s);}else{var t=n.getFollowup(o);if(t)this.removeFollowup(t);h.prependContent(o,s);}return s;},removeFollowup:function(o){var p=n.getFollowup(o);this.stopListenCloseButton(p);h.remove(p);},appendToFollowup:function(o,p){var q=i.getRoot(m(o)),r=n.getFollowup(q);h.appendContent(r,p);},getFollowupMessage:function(o){var p=h.find(o,"._1f86");return p;},replaceFollowupMessage:function(o,p){this.stopListenCloseButton(o);var q=n.getFollowupMessage(o);h.replace(q,p);this.initCloseButton(o);}};e.exports=n;},null);
__d("EntstreamFeedObjectDigest",["DOM","EntstreamFeedObject","EntstreamFeedObjectFollowup","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k){var l={toggleDigest:function(m,n,o){var p=m.getValue()==='digest_on'?o.digest_off:o.digest_on,q=h.getRoot(k(n)),r=i.getFollowup(q);if(r){var s=i.getFollowupMessage(r);g.replace(s,p);}else i.addFollowup(q,p,"_521o");}};e.exports=l;},null);
__d("EntstreamFeedObjectFollow",["EntstreamFeedObject","EntstreamFeedObjectFollowup","Event","Parent","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={toggleFollow:function(n,o,p){var q=n.getValue()=='follow_post'?p.follow_post:p.unfollow_post,r=g.getRoot(l(o)),s=h.getFollowup(r);if(s){h.replaceFollowupMessage(s,q);}else{s=h.addFollowup(r,q,"_521o")||h.getFollowup(r);i.listen(s,'click',function(event){var t=event.getTarget(),u="_1f89";if(j.byClass(t,u)){m.toggleFollow(n,o,p);n.toggleMenuItem();}});}}};e.exports=m;},null);
__d("EntstreamFeedObjectHide",["Event","CSS","EntstreamFeedObject","EntstreamFeedObjectFollowup","Focus","TabbableElements","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o={hide:function(p,q){var r=i.getRoot(n(p));r=i.getHscrollOuterRootIfAvailable(r);j.addFollowup(r,q);h.addClass(r,"_i6m");o.setFocus(r);},registerUnhide:function(p,q){g.listen(p,'click',function(){if(q)q.send();var r=i.getRoot(p);r=i.getHscrollOuterRootIfAvailable(r);o.unhide(r);});},setFocus:function(p){var q=l.find(p);if(q&&q[0])k.setWithoutOutline(q[0]);},unhide:function(p){j.removeFollowup(p);h.removeClass(p,"_i6m");o.setFocus(p);}};e.exports=o;},null);
__d("YouTube",["CSS","DOM","DOMQuery","Event","Keys","LitestandStoryInsertionStatus","SubscriptionsHandler","UserAgent_DEPRECATED","Focus","copyProperties","cx"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){function r(s,t,u){"use strict";var v=new m();v.addSubscriptions(j.listen(s,'load',this.listening.bind(this)),l.registerBlocker(function(){return this.playerState===r.STATE_PLAYING;}.bind(this)));p(this,{iframe:s,autofocus:t,autoplay:u,playerState:r.STATE_UNSTARTED,muted:false,volume:100,currentTime:0,timer:null,handler:v});if(t)o.set(s);}r.prototype.id=function(){"use strict";return this.iframe.id;};r.prototype.post=function(s){"use strict";s.id=this.id();this.iframe.contentWindow.postMessage(JSON.stringify(s),'*');};r.prototype.listening=function(){"use strict";this.post({event:'listening'});clearTimeout(this.timer);this.timer=setTimeout(this.listening.bind(this),100);};r.prototype.update=function(s){"use strict";if(s.event=='initialDelivery'){clearTimeout(this.timer);if((n.webkit()||n.firefox())&&s.info&&s.info.debugText.match(/flashVersion/)){this.addAccessibleButtons();if(n.firefox())this.iframe.tabIndex=-1;}}if(s.info)['playerState','muted','volume','currentTime'].forEach(function(t){if(s.info.hasOwnProperty(t))this[t]=s.info[t];}.bind(this));};r.prototype.togglePlay=function(){"use strict";this.post({event:'command',func:(this.playerState==r.STATE_PLAYING)?'pauseVideo':'playVideo'});};r.prototype.toggleMute=function(){"use strict";this.post({event:'command',func:this.muted?'unMute':'mute'});};r.prototype.addAccessibleButtons=function(){"use strict";this.addAccessibleButton('Mute',"_505m",this.toggleMute.bind(this));this.addAccessibleButton('Play',"_505n",this.togglePlay.bind(this));};r.prototype.addAccessibleButton=function(s,t,u){"use strict";var v=h.create('button',{'class':t,tabindex:0},s);h.insertAfter(this.iframe,v);this.handler.addSubscriptions(j.listen(v,'click',u),j.listen(v,'mouseover',g.hide.bind(null,v)),j.listen(this.iframe,'mouseout',g.show.bind(null,v)),j.listen(v,'focus',function(){if(!this.autoplay&&this.playerState==r.STATE_UNSTARTED){this.post({event:'command',func:'playVideo'});this.post({event:'command',func:'pauseVideo'});}}.bind(this)),j.listen(v,'keydown',function(w){switch(w.keyCode){case k.UP:case k.DOWN:this.post({event:'command',func:'setVolume',args:[this.volume+((w.keyCode==k.UP)?10:-10)]});w.prevent();break;case k.RIGHT:case k.LEFT:this.post({event:'command',func:'seekTo',args:[this.currentTime+((w.keyCode==k.RIGHT)?10:-10)]});w.prevent();break;}}.bind(this)));return v;};r.prototype.destroy=function(){"use strict";this.handler.release();delete r.instances[this.id()];if(!Object.keys(r.instances).length)r.handler.remove();};r.register=function(s,t,u){"use strict";if(!window.postMessage)return;if(!Object.keys(r.instances).length)r.handler=j.listen(window,'message',function(w){try{var x=JSON.parse(w.data);if(r.instances[x.id])r.instances[x.id].update(x);}catch(w){}});var v=new r(i.find(s,'iframe'),t,u);r.instances[v.id()]=v;};p(r,{STATE_UNSTARTED:-1,STATE_PLAYING:1,instances:{},handler:null});e.exports=r;},null);
__d("EntstreamHomeFeedObjectHide",["AsyncRequest","CSS","DOM","EntstreamFeedObject","EntstreamFeedObjectHide","Event","TrackingNodes","YouTube","csx","cx","ge","fbt","$"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){var t={stopVideo:function(u){var v=s(u),w=i.find(v,"^._5jmm"),x=i.scry(w,'iframe');for(var y=0;y<x.length;y++){var z=n.instances[i.getID(x[y])];if(z&&(z.playerState===n.STATE_PLAYING))z.togglePlay();}var aa=i.scry(w,'video');for(var ba=0;ba<aa.length;ba++)if(('paused' in aa[ba])&&!aa[ba].paused)if(typeof aa[ba].pause==='function')aa[ba].pause();},hide:function(u,v,w,x){t.stopVideo(u);var y=j.getRoot(q(u)),z=h.hasClass(y,"_5pat"),aa;if(z&&w=='afrostart'){aa='';}else{var ba=w=='hide'||w=='afrostart'?"This story is now hidden from your News Feed.":"This story has been marked as spam.",ca=w=='hide'||w=='afrostart'?"Unhide":"Undo",da=m.getTrackingInfo(m.types.UNHIDE_LINK),ea=i.create('a',{href:'#','data-ft':da},ca),fa={};if(v)fa.token=v;if(x)fa.hideable_token=x;var ga=new g().setURI('/ajax/entstream/home/story/unhide').setMethod('POST').setData(fa).setRelativeTo(ea);k.registerUnhide(ea,ga);aa=i.create('div',{'class':"_1f86"},[ba,' ',ea]);}k.hide(u,aa);},registerHide:function(u,v,w,x){l.listen(u,'click',function(){t.hide(u.getAttribute('id'),v,w,x);});}};e.exports=t;},null);
__d("MenuTogglingItem",["DOM","MenuItem"],function(a,b,c,d,e,f,g,h){for(var i in h)if(h.hasOwnProperty(i))k[i]=h[i];var j=h===null?null:h.prototype;k.prototype=Object.create(j);k.prototype.constructor=k;k.__superConstructor__=h;function k(){"use strict";if(h!==null)h.apply(this,arguments);}k.prototype.handleClick=function(){"use strict";this.toggleMenuItem();return j.handleClick.call(this);};k.prototype.toggleMenuItem=function(){"use strict";this._swap('ajaxify','toggleAjaxify');this._swap('value','toggleValue');this._toggleItemText();};k.prototype.setValue=function(l){"use strict";this._data.value=l;};k.prototype._toggleItemText=function(){"use strict";var l=this._anchor;this._swap('markup','toggleMarkup');g.replace(l,this._renderItemContent());};k.prototype._swap=function(l,m){"use strict";var n=this._data[l];this._data[l]=this._data[m];this._data[m]=n;};e.exports=k;},null);
__d("EntstreamHomeFeedObjectOptionsMenu",["AdsPrefs","BanzaiLogger","CSS","DOM","EntstreamFeedObject","EntstreamFeedObjectDigest","EntstreamFeedObjectFollow","EntstreamHomeFeedObjectHide","MenuTogglingItem","UFICentralUpdates","UFIConstants","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){function t(u,v,w,x,y,z,aa,ba,ca,da){u.subscribe('itemclick',function(ea,fa){var ga=fa.item.getRoot(),ha=ga.getAttribute('data-feed-option-name'),ia=i.hasClass(ga,"_50o2")||i.hasClass(ga,"_50o0");if(ha)h.log('FeedStoryOptionMenuLoggerConfig',{option_name:ha,is_secondary:ia?1:0,event_type:'clk',feed_location:aa,session_id:ba,is_sponsored:ca,is_self_story:da});if(typeof fa.item.getValue!=='function')return;switch(fa.item.getValue()){case 'hide':case 'markspam':case 'afrostart':n.hide(v,w,fa.item.getValue(),y);break;case 'afro_direct_action':var ja=k.getRoot(s(v));ja=k.getHscrollOuterRootIfAvailable(ja);var ka=fa.item.getRoot().getAttribute('data-optimistic-hide');if(ka){var la=j.create('div',{className:"_5lum"});j.appendContent(la,fa.item.getRoot().getAttribute('data-action-in-progress-string'));j.insertBefore(ja.firstChild,la);i.addClass(ja,"_i6m");}break;case 'follow_post':case 'unfollow_post':m.toggleFollow(fa.item,v,x);break;case 'ad_useful':case 'ad_neutral':g.toggleFavorite(fa.item);ea.kill();break;case 'digest_on':case 'digest_off':l.toggleDigest(fa.item,v,x);break;}}.bind(this));u.subscribe('show',function(){h.log('FeedStoryOptionMenuLoggerConfig',{option_name:'root',event_type:'clk',feed_location:aa,session_id:ba,is_sponsored:ca,is_self_story:da});var ea=i.hasClass(u.getRoot(),"_50o1"),fa=i.hasClass(u.getRoot(),"_50n_");u.forEachItem(function(ga){var ha=ga.getRoot(),ia=ha.getAttribute('data-feed-option-name'),ja=i.hasClass(ha,"_50o2"),ka=i.hasClass(ha,"_50o0"),la=i.hasClass(ha,"_50nd"),ma=i.hasClass(ha,"_50ne"),na=(ea&&ja)||(fa&&ka)||(!ea&&la)||(!fa&&ma),oa=ja||ka;if(ia&&!na)h.log('FeedStoryOptionMenuLoggerConfig',{option_name:ia,is_secondary:oa?1:0,event_type:'imp',feed_location:aa,session_id:ba,is_sponsored:ca,is_self_story:da});ga.onShow();});});p.subscribe('update-actions',function(ea,fa){if(fa.payloadsource===q.UFIPayloadSourceType.USER_ACTION){var ga=fa.actions||[];for(var ha=0;ha<ga.length;ha++)if(ga[ha].actiontype===q.UFIActionType.ADD_COMMENT_ACTION){if(ga[ha].feedbackfbid!=z)return;u.getRoot();u.forEachItem(function(ia){if(ia instanceof o&&ia.getValue()==='unfollow_post')ia.handleClick();});}}});}e.exports=t;},null);
__d("CurationCaretNux",["csx","cx","ge","tidyEvent","AsyncRequest","DataStore","DOM","Event","Parent","Rect"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){var q="div._1zpr",r="_5jmm",s='CurationCaretNux_instance',t='CurationCaretNux_caretMenuLoaded',u=100,v="caret_nux",w="save_option_nux",x="seen",y="dismissed",z="focus",aa="click",ba="scroll",ca=false;function da(ea,fa,ga,ha){"use strict";var ia=i(ha);if(ia){this.container=ia;this.caret=ga;this.caretNux=ea.instance;this.caretNuxData=ea;this.saveOptionNux=fa.instance;this.saveOptionNuxData=fa;this.popoverTriggered=false;var ja=o.byClass(ia,r);l.set(ja,s,this);this.$CurationCaretNux0();}}da.prototype.$CurationCaretNux0=function(){"use strict";var ea=m.scry(this.container,q);if(ea.length>0)j([n.listen(ea[0],'click',function(){if(ca)return;this.caretNux.subscribe('show',function(){this.$CurationCaretNux1();}.bind(this));this.caretNux.subscribe('hide',function(){this.$CurationCaretNux2();if(ca){this.$CurationCaretNux3(v,x);this.$CurationCaretNux3(v,y);}}.bind(this));this.$CurationCaretNux4();this.feedInteractionDetected=false;setTimeout(function(){if(!this.feedInteractionDetected){ca=true;this.caretNux.show();}}.bind(this),this.caretNuxData.min_consume_duration);setTimeout(function(){if(!this.feedInteractionDetected){ca=false;this.caretNux.hide();}}.bind(this),this.caretNuxData.max_consume_duration);setTimeout(function(){this.$CurationCaretNux5(function(){this.feedInteractionDetected=true;}.bind(this));}.bind(this),0);}.bind(this))]);};da.prototype.$CurationCaretNux1=function(){"use strict";this.caretClickListener=n.listen(this.caret,'click',function(){this.caretNux.hide();if(this.saveOptionNux){this.popoverTriggered=true;this.$CurationCaretNux6();}}.bind(this));var ea=false;this.$CurationCaretNux5(function(fa){if(ea||fa===aa||!this.caretNux.isShown())return;var ga=p.getViewportWithoutScrollbarsBounds(),ha=p.getElementBounds(this.caretNux.getContentRoot());ha=ha.sub(0,u);if(ga.contains(ha)){this.$CurationCaretNux3(v,x);ea=true;}}.bind(this));};da.prototype.$CurationCaretNux2=function(){"use strict";this.caretClickListener.remove();this.$CurationCaretNux7();};da.prototype.$CurationCaretNux6=function(){"use strict";if(this.$CurationCaretNux8()&&this.popoverTriggered)setTimeout(function(){this.saveOptionNux.show();this.$CurationCaretNux3(w,x);var ea=l.get(this.caret,'Popover');ea&&ea.subscribeOnce('hide',function(){this.saveOptionNux.hide();}.bind(this));}.bind(this),0);};da.prototype.$CurationCaretNux3=function(ea,fa){"use strict";var ga;if(ea===v){ga=this.caretNuxData;}else if(ea===w){ga=this.saveOptionNuxData;}else throw "Invalid nux type";var ha;if(fa===x){ha=ga.seen_uri;ga.seen_uri=null;}else if(fa===y){ha=ga.dismiss_uri;ga.dismiss_uri=null;}else throw "Invalid impression type";if(ha)new k(ha).send();};da.prototype.$CurationCaretNux5=function(ea){"use strict";this.$CurationCaretNux9.push(ea);};da.prototype.$CurationCaretNuxa=function(ea){"use strict";this.$CurationCaretNux9.forEach(function(fa){fa.call(this,ea);},this);};da.prototype.$CurationCaretNux4=function(){"use strict";if(!this.$CurationCaretNuxb){this.$CurationCaretNux9=[];this.$CurationCaretNuxb=[n.listen(window,'click',this.$CurationCaretNuxa.bind(this,aa)),n.listen(window,'focus',this.$CurationCaretNuxa.bind(this,z)),n.listen(window,'scroll',this.$CurationCaretNuxa.bind(this,ba))];}};da.prototype.$CurationCaretNux7=function(ea){"use strict";if(this.$CurationCaretNuxb){while(this.$CurationCaretNuxb.length)this.$CurationCaretNuxb.pop().remove();this.$CurationCaretNuxb=null;this.$CurationCaretNux9=null;}};da.prototype.$CurationCaretNux8=function(){"use strict";var ea=o.byClass(this.container,r);return l.get(ea,t)===true;};da.saveOptionLoaded=function(ea){"use strict";var fa=i(ea);if(fa){var ga=o.byClass(fa,r);l.set(ga,t,true);var ha=l.get(ga,s);ha&&ha.$CurationCaretNux6();}};e.exports=da;},null);
__d("SaveState",[],function(a,b,c,d,e,f){var g={SAVING:'saving',SAVED:'saved',UNSAVING:'unsaving',UNSAVED:'unsaved'};e.exports=g;},null);
__d("SaveStateHandler",["Run","SaveState"],function(a,b,c,d,e,f,g,h){var i=null;function j(){"use strict";this.$SaveStateHandler0={};this.$SaveStateHandler1={};g.onLeave(function(){i=null;});}j.prototype.addListener=function(k,l){"use strict";k.forEach(function(m){if(!this.$SaveStateHandler0[m])this.$SaveStateHandler0[m]=[];this.$SaveStateHandler0[m].push(l);},this);};j.prototype.setState=function(k,l){"use strict";k.forEach(function(m){this.$SaveStateHandler1[m]=l;if(!this.$SaveStateHandler0[m])return;var n=this.$SaveStateHandler0[m];n.forEach(function(o){try{o.call(window,l,m);}catch(p){}});},this);};j.prototype.getState=function(k){"use strict";var l={};k.forEach(function(m){l[m]=this.$SaveStateHandler1[m];},this);return l;};j.$SaveStateHandler2=function(){"use strict";if(!i)i=new j();return i;};j.listen=function(k,l){"use strict";this.$SaveStateHandler2().addListener(k,l);};j.getState=function(k){"use strict";this.$SaveStateHandler2().getState(k);};j.saving=function(k){"use strict";this.$SaveStateHandler2().setState(k,h.SAVING);};j.saved=function(k){"use strict";this.$SaveStateHandler2().setState(k,h.SAVED);};j.unsaving=function(k){"use strict";this.$SaveStateHandler2().setState(k,h.UNSAVING);};j.unsaved=function(k){"use strict";this.$SaveStateHandler2().setState(k,h.UNSAVED);};j.isSaveAction=function(k){"use strict";var l=this.$SaveStateHandler2().getState(k);for(var m in l){var n=l[m];if(n==h.UNSAVED||n==h.UNSAVING)return true;}return false;};e.exports=j;},null);
__d("SaveCaretMenuItem",["Banzai","CSS","DOM","EntstreamFeedObject","EntstreamFeedObjectFollowup","Event","MenuItem","SaveState","SaveStateHandler","cx","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r='saved_for_later:caret_action',s='click',t='imp';for(var u in m)if(m.hasOwnProperty(u))w[u]=m[u];var v=m===null?null:m.prototype;w.prototype=Object.create(v);w.prototype.constructor=w;w.__superConstructor__=m;function w(x){"use strict";m.call(this,x);this._updateData();this.getRoot();l.listen(this._anchor,'error',this.handleError.bind(this));o.listen(x.ogobjectids,function(y){this._updateData();this._doRender(y);}.bind(this));}w.prototype.handleClick=function(){"use strict";var x=v.handleClick.call(this),y=this._data.logdata;g.post(r,{action:s,collection_id:y.collection_id,surface:y.surface,story_id:y.story_id,is_save:this._data.isSaveAction,is_multi:y.is_multi});var z=j.getRoot(q(this._data.storydomid));if(this._data.isSaveAction){o.saving(this._data.ogobjectids);z&&k.addFollowup(z,this._data.savefollowupmarkup,"_521o");}else{o.unsaving(this._data.ogobjectids);var aa=k.getFollowup(z);aa&&k.removeFollowup(z);}return x;};w.prototype.handleError=function(){"use strict";if(this._data.isSaveAction){o.saved(this._data.ogobjectids);}else o.unsaved(this._data.ogobjectids);};w.prototype._updateData=function(){"use strict";this._data.isSaveAction=o.isSaveAction(this._data.ogobjectids);if(this._data.isSaveAction){this._data.markup=this._data.savemarkup;this._data.ajaxify=this._data.saveajaxify;this._data.title=this._data.savetitle;}else{this._data.markup=this._data.unsavemarkup;this._data.ajaxify=this._data.unsaveajaxify;this._data.title=this._data.unsavetitle;}};w.prototype._doRender=function(x){"use strict";if(!this._root)return;switch(x){case n.SAVING:case n.UNSAVING:h.addClass(this._root,"_5arm");setTimeout(this.disable.bind(this),10);break;case n.SAVED:case n.UNSAVED:h.removeClass(this._root,"_5arm");setTimeout(this.enable.bind(this),10);break;}i.replace(this._anchor,this._renderItemContent());l.listen(this._anchor,'error',this.handleError.bind(this));};w.prototype.onShow=function(){"use strict";var x=this._data.logdata;g.post(r,{action:t,collection_id:x.collection_id,surface:x.surface,story_id:x.story_id,is_save:this._data.isSaveAction,is_multi:x.is_multi});};e.exports=w;},null);
__d("FbFeedOptionsExpander",["BanzaiLogger","CSS","DOM","Event"],function(a,b,c,d,e,f,g,h,i,j){var k={expand:function(l){var m=l.expander,n=l.menu,o=l.foldedClass,p=l.unfoldedClass,q=l.foldedItemClass,r=l.data;j.listen(m,'click',function(){h.toggleClass(n.getRoot(),o);h.toggleClass(n.getRoot(),p);var s=i.scry(n.getRoot(),'li.'+q);s.forEach(function(t){var u=t.getAttribute('data-feed-option-name');if(u)g.log('FeedStoryOptionMenuLoggerConfig',{option_name:u,is_secondary:1,event_type:'imp',feed_location:r.location,session_id:r.session_id,is_sponsored:r.is_sponsored,is_self_story:r.is_self_story});},this);});}};e.exports=k;},null);