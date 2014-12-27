/*!CK:2950315152!*//*1418633414,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["BeAJy"]); }

__d("XPaymentsCreditCardMutationType",[],function(a,b,c,d,e,f){e.exports={CREATE:"create",UPDATE:"update"};},null);
__d("AdsReachEstimateBar.react",["AdsHelpLink.react","LeftRight.react","React","cx","fbt","ads-lib-formatters"],function(a,b,c,d,e,f,g,h,i,j,k,l){"use strict";var m=l.createLimitedSigFigNumberFormatter(0,2),n=100,o=i.createClass({displayName:"AdsReachEstimateBar",propTypes:{estimateDAU:i.PropTypes.number.isRequired,reachBounds:i.PropTypes.object.isRequired},render:function(){return (i.createElement("div",null,i.createElement("div",{className:"clearfix"},i.createElement("div",{className:"lfloat"},this.renderReachEstimate())),this.renderBar(),this.renderAudienceSize()));},renderBar:function(){return (i.createElement("div",{className:"_3o8h clearfix"},i.createElement("div",{className:"_3o8i",key:this.getCenterPercent(),style:this.getFillerStyle()})));},getFillerStyle:function(){return {marginLeft:this.getCenterPercent()+'%'};},getCenterPercent:function(){var p=(this.props.reachBounds.min+this.props.reachBounds.max)/2;if(p>0)p=Math.sqrt(p)*Math.log(p);var q=this.props.estimateDAU;if(q>0)q=Math.sqrt(q)*Math.log(q);var r=10,s=Math.min(p/q*100,98-r*.5);s-=r*.5;if(s<0)s=0;return Math.round(s);},getReachEstimateRangeString:function(p,q){return (k._("{min reach} - {max reach} people",[k.param("min reach",m(p)),k.param("max reach",m(q))]));},renderReachEstimate:function(){if(this.props.estimateDAU<n)return (i.createElement("span",{className:"_3o8j"},k._("Fewer than {a round number (currently 100)} people",[k.param("a round number (currently 100)",m(n))])));return (i.createElement("span",{className:"_3o8j"},this.getReachEstimateRangeString(this.props.reachBounds.min,this.props.reachBounds.max)));},renderAudienceSize:function(){return (i.createElement(h,null,i.createElement("span",{className:"_3o8k"},"0"),i.createElement("span",{className:"_3o8l"},k._("of {audience size}",[k.param("audience size",m(Math.max(this.props.estimateDAU,n)))]),i.createElement(g,{position:"left",width:300},"This is the total number of people in your selected audience who are active on Facebook each day."))));}});e.exports=o;},null);
__d("List.react",["ReactPropTypes","React","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){var k=h.createClass({displayName:"List",propTypes:{border:g.oneOf(['none','light','medium','dark']),spacing:g.oneOf(['none','small','medium','large']),direction:g.oneOf(['vertical','horizontal']),valign:g.oneOf(['baseline','top','middle','bottom']),edgepadding:g.bool},getDefaultProps:function(){return {border:'medium',spacing:'medium',direction:'vertical',valign:'top'};},render:function(){var l=this.props.border,m=this.props.direction,n=this.props.spacing,o=m==='horizontal'&&this.props.valign,p,q,r;p=((m==='vertical'?"_4kg":'')+(m==='horizontal'?' '+"_4ki":'')+(o==='top'?' '+"_509-":'')+(o==='middle'?' '+"_509_":'')+(o==='bottom'?' '+"_50a0":''));if(n!=='none'||l!=='none')q=((l==='none'?"_6-i":'')+(l==='light'?' '+"_4ks":'')+(l==='medium'?' '+"_4kt":'')+(l==='dark'?' '+"_4ku":''));if(n!=='none')r=((!this.props.edgepadding?"_6-h":'')+(n==='small'?' '+"_704":'')+(n==='medium'?' '+"_6-j":'')+(n==='large'?' '+"_703":''));var s=j("uiList",p,q,r);return (h.createElement("ul",h.__spread({},this.props,{className:j(this.props.className,s)}),this.props.children));}});e.exports=k;},null);
__d("XUIBlock",["ReactPropTypes","cx"],function(a,b,c,d,e,f,g,h){var i={propTypes:{background:g.oneOf(['base-wash','light-wash','white','highlight','transparent'])},getDefaultProps:function(){return {background:'transparent'};},getBackgroundClass:function(j){var k=((j.background==='base-wash'?"_4-u5":'')+(j.background==='light-wash'?' '+"_57d8":'')+(j.background==='white'?' '+"_4-u8":'')+(j.background==='highlight'?' '+"_4-u7":''));return k;}};e.exports=i;},null);
__d("XUICard.react",["React","XUIBlock","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){var k=g.createClass({displayName:"XUICard",propTypes:h.propTypes,getDefaultProps:h.getDefaultProps,render:function(){var l=j("_4-u2",h.getBackgroundClass(this.props));return (g.createElement("div",g.__spread({},this.props,{className:j(this.props.className,l)}),this.props.children));}});e.exports=k;},null);
__d("XUICardSection.react",["React","XUIBlock","cx","joinClasses"],function(a,b,c,d,e,f,g,h,i,j){var k=g.createClass({displayName:"XUICardSection",propTypes:h.propTypes,getDefaultProps:h.getDefaultProps,render:function(){var l=j("_4-u3",h.getBackgroundClass(this.props));return (g.createElement("div",g.__spread({},this.props,{className:j(this.props.className,l)}),this.props.children));}});e.exports=k;},null);
__d("XUIDialogCancelButton.react",["React","XUIDialogButton.react","fbt"],function(a,b,c,d,e,f,g,h,i){var j=g.createClass({displayName:"XUIDialogCancelButton",render:function(){return (g.createElement(h,g.__spread({},this.props,{action:"cancel",label:"Cancel"})));}});e.exports=j;},null);
__d("sliceChildren",["flattenChildren"],function(a,b,c,d,e,f,g){"use strict";function h(i,j,k){if(i==null)return i;var l={},m=g(i),n=0;for(var o in m){if(!m.hasOwnProperty(o))continue;var p=m[o];if(n>=j)l[o]=p;n++;if(k!=null&&n>=k)break;}return l;}e.exports=h;},null);
__d("XUIDialogTitle.react",["LeftRight.react","React","ReactPropTypes","XUICloseButton.react","cx","fbt","sliceChildren","joinClasses"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){var o=h.createClass({displayName:"XUIDialogTitle",propTypes:{closeButtonText:i.string,showCloseButton:i.bool},getDefaultProps:function(){return {closeButtonText:"Close",showCloseButton:true};},render:function(){var p=null;if(this.props.showCloseButton)p=h.createElement(j,{label:this.props.closeButtonText,className:"layerCancel _51-t"});return (h.createElement("div",h.__spread({},this.props,{className:n(this.props.className,"_4-i0")}),h.createElement(g,null,h.createElement("h3",{className:"_52c9"},m(this.props.children,0,1)),h.createElement("div",{className:"_51-u"},m(this.props.children,1),p))));}});e.exports=o;},null);
__d("Alignment",["DOMVector","Style","containsNode","copyProperties","invariant"],function(a,b,c,d,e,f,g,h,i,j,k){function l(n,o,p){"use strict";this.$Anchor0=o;this.$Anchor1=p;this.$Anchor2=n;}l.prototype.getElement=function(){"use strict";return this.$Anchor2;};l.prototype.getX=function(){"use strict";return this.$Anchor0;};l.prototype.getY=function(){"use strict";return this.$Anchor1;};l.prototype.isCorner=function(){"use strict";return ((this.$Anchor0===l.LEFT||this.$Anchor0===l.RIGHT)&&(this.$Anchor1===l.TOP||this.$Anchor1===l.BOTTOM));};l.prototype.getPosition=function(n){"use strict";return g.getElementPosition(this.$Anchor2,n).add(this.getX()*this.$Anchor2.offsetWidth,this.getY()*this.$Anchor2.offsetHeight);};j(l,{LEFT:0,CENTER:.5,RIGHT:1,TOP:0,MIDDLE:.5,BOTTOM:1});function m(n,o,p){"use strict";this.$Alignment0=n;this.$Alignment1=o;this.$Alignment2=p;k(i(n.getElement(),o.getElement()));k(n.isCorner());}m.prototype.align=function(){"use strict";m.$Alignment3(this.$Alignment0,function(){return m.measure(this.$Alignment1,this.$Alignment2);}.bind(this));};m.$Alignment3=function(n,o){"use strict";var p=n.getElement();h.apply(p,{left:n.getX()===l.LEFT?'0':'',right:n.getX()===l.RIGHT?'0':'',top:n.getY()===l.TOP?'0':'',bottom:n.getY()===l.BOTTOM?'0':''});var q=o();if(n.getX()===l.LEFT){h.set(p,'left',q.x+'px');}else if(n.getX()===l.RIGHT)h.set(p,'right',-q.x+'px');if(n.getY()===l.TOP){h.set(p,'top',q.y+'px');}else if(n.getY()===l.BOTTOM)h.set(p,'bottom',-q.y+'px');};m.position=function(n,o){"use strict";m.$Alignment3(n,function(){var p=g.getElementPosition(n.getElement());return o.convertTo('document').sub(p);});};m.measure=function(n,o){"use strict";var p=n.getPosition('document'),q=o.getPosition('document');return q.sub(p);};m.Anchor=l;e.exports=m;},null);
__d("ManagedError",[],function(a,b,c,d,e,f){function g(h,i){Error.prototype.constructor.call(this,h);this.message=h;this.innerError=i;}g.prototype=new Error();g.prototype.constructor=g;e.exports=g;},null);
__d("GiftCredits",["AsyncRequest","Dialog","URI"],function(a,b,c,d,e,f,g,h,i){var j={dialog:null,callback:null,purchaseLock:false,purchaseLockExpiryThreshold:5000,purchaseLockTimeoutId:null,getPurchaseCreditPrompt:function(k,l,m,n){j.main(k,null,null,null,m,null,null,null,'BuyCredits',{},n);},redeemGiftcard:function(k,l,m){var n=i(document.location).setPath('/giftcards').toString();j.main(k,null,null,n,null,null,null,null,l,{},m);},getPrompt:function(k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha){j.main(k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha);},main:function(k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha){if(j.isPurchaseLocked())return false;j.setPurchaseLock(true);var ia={_path:'pay',method:'pay',display:'async',app_id:k,receiver:l,api_key:q,credits_purchase:x,action:s,next:n,dev_purchase_params:JSON.stringify(t),additional_params:JSON.stringify(u),order_info:JSON.stringify(m),product:v,package_id:w,request_id:y,sdk:z,quantity:aa,quantity_min:ba,quantity_max:ca,test_currency:da,pricepoint_id:ea,user:fa,user_hash:ga,ingame_gift_data:ha},ja=new g().setURI('/fbml/ajax/dialog/').setData(ia).setMethod('GET').setReadOnly(true).setStatusElement('commerce_get_more_loading');j.callback=o;j.dialog=new h().setAsync(ja).setModal(true).setCloseHandler(function(ka){j.setPurchaseLock(false);o(ka);}).show();},isPurchaseLocked:function(){return j.purchaseLock;},setPurchaseLock:function(k){j.purchaseLock=k;if(k){j.purchaseLockTimeoutId=setTimeout(function(){j.setPurchaseLock(false);},j.purchaseLockExpiryThreshold);}else clearTimeout(j.purchaseLockTimeoutId);return true;}};e.exports=j;},null);
__d("legacy:giftcredits",["GiftCredits"],function(a,b,c,d){a.GiftCredits=b('GiftCredits');},3);
__d("CIWebmailValidator",["AsyncRequest","URI"],function(a,b,c,d,e,f,g,h){var i,j=false,k=false,l=[];function m(o){var p=o.tokens;delete o.tokens;for(var q in o){var r=o[q];for(var s in p){if(!p.hasOwnProperty(s))continue;var t=s.replace(/([.?*+\^$\[\]\\(){}\-])/g,"\\$1"),u=new RegExp(t,"g");r=r.replace(u,p[s]);}o[q]=r;}i=o;j=true;while(l.length>0)(l.shift())();}var n={flow:null,useCase:null,hasFullMapping:function(){return j;},init:function(o,p,q){if(!j&&!k)i=o;this.flow=p;this.useCase=q;},isValidEmail:function(o){var p=new RegExp("[A-Za-z0-9_!#$%&'*+/=?^`{|}~-]+(?:\\.[A-Za-z0-9_!#$%&'*+/=?^`{|}~-]+)*@(?:[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?\\.)+[A-Za-z0-9](?:[A-Za-z0-9-]*[A-Za-z0-9])?");return p.test(o);},getDomain:function(o){var p=o.split('@');return p[1];},getDomainImporterName:function(o){var p=['msft','yahoo','gmail','yahoo_jp','ezweb_jp','other'],q=o.split(/\./);for(var r=0;r<q.length-1;r++){var s=q.slice(r).join('.');s='|'+s.toLowerCase();for(var t=0;t<p.length;t++){var u=p[t];if(i[u].indexOf(s)!=-1)return u;}}return null;},getImporterName:function(o){return this.getDomainImporterName(this.getDomain(o));},isLiveDomain:function(o){return this.getImporterName(o)=='msft';},isGmailDomain:function(o){return this.getImporterName(o)=='gmail';},isYahooDomain:function(o){return this.getImporterName(o)=='yahoo';},isYahooJpDomain:function(o){return this.getImporterName(o)=='yahoo_jp';},isSupportedDomain:function(o){var p=this.getDomainImporterName(this.getDomain(o));return p!=null;},downloadDomainMapping:function(o){if(j)return;if(o)l.push(o);var p=h('/contact_importer/ajax/get_domains.php').addQueryData({flow:this.flow,use_case:this.useCase});if(!k){k=true;new g().setURI(p).setMethod('GET').setReadOnly(true).setHandler(function(q){var r=q.getPayload();m(r);}).send();}},setDomainMapping:function(o){m(o);}};e.exports=n;a.CIWebmailValidator=n;},null);
__d("AssertionError",["ManagedError"],function(a,b,c,d,e,f,g){function h(i){g.prototype.constructor.apply(this,arguments);}h.prototype=new g();h.prototype.constructor=h;e.exports=h;},null);
__d("Assert",["AssertionError","sprintf"],function(a,b,c,d,e,f,g,h){function i(n,o){if(typeof n!=='boolean'||!n)throw new g(o);return n;}function j(n,o,p){var q;if(o===(void 0)){q='undefined';}else if(o===null){q='null';}else{var r=Object.prototype.toString.call(o);q=/\s(\w*)/.exec(r)[1].toLowerCase();}i(n.indexOf(q)!==-1,p||h('Expression is of type %s, not %s',q,n));return o;}function k(n,o,p){i(o instanceof n,p||'Expression not instance of type');return o;}function l(n,o){m['is'+n]=o;m['maybe'+n]=function(p,q){if(p!=null)o(p,q);};}var m={isInstanceOf:k,isTrue:i,isTruthy:function(n,o){return i(!!n,o);},type:j,define:function(n,o){n=n.substring(0,1).toUpperCase()+n.substring(1).toLowerCase();l(n,function(p,q){i(o(p),q);});}};['Array','Boolean','Date','Function','Null','Number','Object','Regexp','String','Undefined'].forEach(function(n){l(n,j.bind(null,n.toLowerCase()));});e.exports=m;},null);
__d("SingleSelectorBase",["ArbiterMixin","Alignment","BehaviorsMixin","Button","CSS","DOM","DOMQuery","Event","Layer","ParameterizedPopover","PopoverMenu","SelectableMenuUtils","Style","csx","cx","getOverlayZIndex","invariant","merge","mixin","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z){var aa=h.Anchor,ba=16,ca=y(g,i);for(var da in ca)if(ca.hasOwnProperty(da))fa[da]=ca[da];var ea=ca===null?null:ca.prototype;fa.prototype=Object.create(ea);fa.prototype.constructor=fa;fa.__superConstructor__=ca;function fa(ga,ha,ia,ja){"use strict";this.$SingleSelectorBase0=ga;this.$SingleSelectorBase1=null;this.$SingleSelectorBase2=l.create('div',{});this.$SingleSelectorBase3=new o({classNames:["_5xew"]},this.$SingleSelectorBase2);this.$SingleSelectorBase4=new p(ga.parentNode,ga,[],x(ia,{layer:this.$SingleSelectorBase3}));this.$SingleSelectorBase4.subscribe('show',this.$SingleSelectorBase5.bind(this));this.$SingleSelectorBase4.subscribe('hide',this.$SingleSelectorBase6.bind(this));this.$SingleSelectorBase7=new q(this.$SingleSelectorBase4,ga,ha,[]);this.setMenu(ha);if(ja&&ja.behaviors)this.enableBehaviors(ja.behaviors);}fa.prototype.$SingleSelectorBase5=function(){"use strict";this.$SingleSelectorBase8();this.$SingleSelectorBase9();k.conditionClass(this.$SingleSelectorBase3.getRoot(),"_5xex",this.$SingleSelectorBasea());s.set(this.$SingleSelectorBase3.getRoot(),'min-width',(this.$SingleSelectorBase0.offsetWidth+ba)+'px');var ga=l.scry(this.$SingleSelectorBase2,'div.uiScrollableAreaWrap')[0];if(ga){var ha=h.measure(new aa(this.$SingleSelectorBaseb(),aa.LEFT,aa.MIDDLE),new aa(this.$SingleSelectorBase1.getRoot(),aa.LEFT,aa.MIDDLE));ga.scrollTop-=ha.y;}this.align();this.getSelectedItem().focus();if(!this.$SingleSelectorBasec)this.$SingleSelectorBasec=n.listen(window,'resize',z(this.align.bind(this)));this.inform('show');};fa.prototype.$SingleSelectorBase6=function(){"use strict";if(this.$SingleSelectorBasec){this.$SingleSelectorBasec.remove();this.$SingleSelectorBasec=null;}this.inform('hide');};fa.prototype.$SingleSelectorBased=function(ga,ha){"use strict";this.$SingleSelectorBasef=null;if(!this.$SingleSelectorBaseg)this.inform('change',ha);};fa.prototype.setValue=function(ga){"use strict";if(this.$SingleSelectorBase4.isShown()){this.$SingleSelectorBaseh(ga,false);}else{this.$SingleSelectorBasei=ga;this.$SingleSelectorBasej=false;}};fa.prototype.setValueWithoutChange=function(ga){"use strict";if(this.$SingleSelectorBase4.isShown()){this.$SingleSelectorBaseh(ga,true);}else{this.$SingleSelectorBasei=ga;this.$SingleSelectorBasej=true;}};fa.prototype.$SingleSelectorBase9=function(){"use strict";if(this.$SingleSelectorBasei){this.$SingleSelectorBaseh(this.$SingleSelectorBasei,this.$SingleSelectorBasej);this.$SingleSelectorBasei=null;}};fa.prototype.$SingleSelectorBaseh=function(ga,ha){"use strict";this.$SingleSelectorBaseg=ha;this.$SingleSelectorBase1.setValue(ga);this.$SingleSelectorBaseg=null;};fa.prototype.getValue=function(){"use strict";return this.getSelectedItem().getValue();};fa.prototype.getLayer=function(){"use strict";return this.$SingleSelectorBase3;};fa.prototype.getButton=function(){"use strict";return this.$SingleSelectorBase0;};fa.prototype.setMenu=function(ga){"use strict";if(this.$SingleSelectorBase4.isShown()){this.$SingleSelectorBasek(ga);}else this.$SingleSelectorBasel=ga;};fa.prototype.$SingleSelectorBase8=function(){"use strict";if(this.$SingleSelectorBasel){this.$SingleSelectorBasek(this.$SingleSelectorBasel);this.$SingleSelectorBasel=null;}};fa.prototype.$SingleSelectorBasek=function(ga){"use strict";if(ga!==this.$SingleSelectorBase1){this.$SingleSelectorBase1=ga;if(this.$SingleSelectorBasem)this.$SingleSelectorBasem.unsubscribe();this.$SingleSelectorBasem=this.$SingleSelectorBase1.subscribe('change',this.$SingleSelectorBased.bind(this));l.setContent(this.$SingleSelectorBase2,ga.getRoot());this.$SingleSelectorBase7.setMenu(ga);this.$SingleSelectorBasef=null;}};fa.prototype.getMenu=function(){"use strict";return this.$SingleSelectorBasel||this.$SingleSelectorBase1;};fa.prototype.enable=function(){"use strict";j.setEnabled(this.$SingleSelectorBase0,true);this.$SingleSelectorBase4.enable();};fa.prototype.disable=function(){"use strict";j.setEnabled(this.$SingleSelectorBase0,false);this.$SingleSelectorBase4.disable();};fa.prototype.$SingleSelectorBasea=function(){"use strict";return (s.isFixed(this.$SingleSelectorBase0)&&!s.isFixed(this.$SingleSelectorBase3.getRoot().parentNode));};fa.prototype.align=function(){"use strict";if(!this.$SingleSelectorBasef)this.$SingleSelectorBasef=this.getAlignment();this.$SingleSelectorBasef.align();var ga=v(this.$SingleSelectorBase0,this.$SingleSelectorBase3.getInsertParent());s.set(this.$SingleSelectorBase3.getRoot(),'z-index',ga>200?ga:'');};fa.prototype.getAlignment=function(){"use strict";return new h(new aa(this.$SingleSelectorBase3.getRoot(),aa.TOP,aa.LEFT),new aa(this.$SingleSelectorBaseb(),aa.LEFT,aa.MIDDLE),new aa(this.$SingleSelectorBasen(),aa.LEFT,aa.MIDDLE));};fa.prototype.$SingleSelectorBasen=function(){"use strict";return m.find(this.$SingleSelectorBase0,"._55pe");};fa.prototype.getSelectedItem=function(){"use strict";var ga=null;this.getMenu().forEachItem(function(ha){if(r.isSelected(ha)){w(ga===null);ga=ha;}});w(ga!==null);return ga;};fa.prototype.$SingleSelectorBaseb=function(){"use strict";return m.find(this.getSelectedItem().getRoot(),"._54nh");};fa.prototype.destroy=function(){"use strict";this.$SingleSelectorBase1&&this.$SingleSelectorBase1.destroy();this.$SingleSelectorBase4.destroy();this.$SingleSelectorBase3.destroy();};e.exports=fa;},null);
__d("SingleSelector",["DOM","DOMQuery","SingleSelectorBase","csx"],function(a,b,c,d,e,f,g,h,i,j){for(var k in i)if(i.hasOwnProperty(k))m[k]=i[k];var l=i===null?null:i.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=i;function m(n,o,p,q,r){"use strict";this.$SingleSelector0=p;this.subscribe('change',this.$SingleSelector1.bind(this));i.call(this,n,o,q,r);}m.prototype.$SingleSelector1=function(n,o){"use strict";this.$SingleSelector3(o.label);this.$SingleSelector0.value=o.value;};m.prototype.$SingleSelector3=function(n){"use strict";g.setContent(this.$SingleSelector4(),n);};m.prototype.$SingleSelector4=function(){"use strict";return h.find(this.getButton(),"._55pe");};e.exports=m;},null);