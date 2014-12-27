/*!CK:3377906843!*//*1418579263,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["L\/2vp"]); }

__d("FileUploadTarget",["AsyncUploadRequest","DragDropFileUpload","DragDropTarget","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j){function k(l,m){"use strict";var n=(function(o){var p=new g(m).setFiles({file:o}).setRelativeTo(l).setStatusElement(l).setAllowCrossOrigin(this.$FileUploadTarget0);p.subscribe('complete',function(q,r){this.onCompleteCallback(r);}.bind(this));p.send();}).bind(this);this.dragDropTarget=new i(l).setOnFilesDropCallback(function(o){o.length&&this.asyncProcess(o,function(p){p.length&&n(p);});}.bind(this));this.asyncProcess=function(o,p){p(o);};this.preprocess=function(o){return o;};this.onCompleteCallback=j;}k.prototype.setAllowCrossOrigin=function(l){"use strict";this.$FileUploadTarget0=l;return this;};k.prototype.setPreprocessor=function(l){"use strict";this.preprocess=l;return this;};k.prototype.setAsyncProcessor=function(l){"use strict";this.asyncProcess=l;return this;};k.prototype.onComplete=function(l){"use strict";this.onCompleteCallback=l;return this;};k.prototype.activate=function(){"use strict";if(!h.isSupported())return;this.dragDropTarget.setFileFilter(this.preprocess).enable();};e.exports=k;},null);
__d("ErrorDialog",["Dialog","emptyFunction"],function(a,b,c,d,e,f,g,h){var i={showAsyncError:function(j){try{return i.show(j.getErrorSummary(),j.getErrorDescription());}catch(k){alert(j);}},show:function(j,k,l,m){return (new g()).setTitle(j).setBody(k).setButtons([g.OK]).setStackable(true).setModal(true).setHandler(l||h).setButtonsMessage(m||'').show();}};e.exports=i;},null);
__d("SinglePictureUploadTarget",["Bootloader","Dialog","ErrorDialog","FileUploadTarget","emptyFunction","htmlSpecialChars","fbt"],function(a,b,c,d,e,f,g,h,i,j,k,l,m){function n(o,p){"use strict";this.fileUploadTarget=new j(o,p);this.preprocessCallback=k;this.asyncPreprocessCallback=function(q,r){r(q);};this.oncompleteCallback=k;this.afterSuccessCallback=k;this.maxWidth=null;this.maxHeight=null;}n.prototype.setAllowCrossOrigin=function(o){"use strict";this.fileUploadTarget.setAllowCrossOrigin(o);return this;};n.prototype.setPreprocessCallback=function(o){"use strict";this.preprocessCallback=o;return this;};n.prototype.setAsyncPreprocessCallback=function(o){"use strict";this.asyncPreprocessCallback=o;return this;};n.prototype.setOncompleteCallback=function(o){"use strict";this.oncompleteCallback=o;return this;};n.prototype.setAfterSuccessCallback=function(o){"use strict";this.afterSuccessCallback=o;return this;};n.prototype.setMaximumDimensions=function(o,p){"use strict";this.maxWidth=o;this.maxHeight=p;return this;};n.prototype.activate=function(){"use strict";var o=function(s){return l(s.name);},p=(function(s){if(s.length>1){i.show("Upload Error",m._("You can only select {max-photos} photos to upload to this album. Only the first {max-photos} photo you selected will be uploaded.",[m.param("max-photos",1),m.param("max-photos",1)]));s=[s[0]];}var t=s[0];if(!t.type.match(/^image\//)){i.show("Upload Error",m._("We could not understand the contents of {filename}. Make sure it is a jpg, gif, or png formatted image.",[m.param("filename",o(t))]));return [];}this.preprocessCallback(s);return s;}).bind(this),q=(function(s,t){var u=1024*1024*16,v=1024*1024*1,w=function(y){if(y.size>u){i.show("Upload Error",m._("{filename} is too large. Please resize your photo to under 8000x8000 pixels and try again.",[m.param("filename",o(s[0]))]));t([]);}else this.asyncPreprocessCallback([y],t);}.bind(this),x=s[0];if((x.size<v)||(!this.maxWidth&&!this.maxHeight)){w(x);}else g.loadModules(["ImageExif","ImageResizer"],function(y,z){if(!z.isSupported()){w(x);return;}var aa=new z(x,this.maxWidth,this.maxHeight);aa.subscribe('resized',function(ba,ca){if(ca.size>x.size){w(x);}else w(ca);}.bind(this));aa.subscribe('error',function(){w(x);}.bind(this));y.readFromFile(x,function(ba){ba&&aa.setOrientation(ba.Orientation);aa.resize();});});}).bind(this),r=(function(s){var t=s[0];this.oncompleteCallback(t);var u=t.getResponse().getPayload();if(t.isSuccess()){this.afterSuccessCallback(u);}else if(u&&u.__dialog){var v=new h();v.$SinglePictureUploadTarget1(u.__dialog);v.setButtons(h.OK).show();}else i.show(u.error.title,u.error.body);}).bind(this);return this.fileUploadTarget.onComplete(r).setPreprocessor(p).setAsyncProcessor(q).activate();};e.exports=n;},null);
__d("TimelineCoverPhotoChangePrivacyDialog",["Arbiter","Event"],function(a,b,c,d,e,f,g,h){var i={init:function(j,k,l){this._dialog=j;this._tooltipLink=l;this._closeButton=k;this._showDialog=false;this._tooltip=null;},registerDialogShow:function(){this._showDialog=true;g.subscribe('CoverPhotoEdit',function(j,k){if(!this._showDialog)return;if(k.state==="open"){this._dialog&&this._dialog.show();if(this._tooltipLink){this._tooltip=this._tooltipLink.getAttribute('data-hover');this._tooltipLink.setAttribute('data-hover',null);}}else if(k.state==="closed")this.hideDialog();}.bind(this));h.listen(this._closeButton,'click',this.hideDialog.bind(this));},hideDialog:function(){this._dialog&&this._dialog.hide();if(this._tooltipLink)this._tooltipLink.setAttribute('data-hover',this._tooltip);this._showDialog=false;}};e.exports=i;},null);
__d("XTimelineCoverPhotoGalleryControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/timeline\/cover\/gallery\/",{});},null);
__d("TimelineCoverPhotoNUX",["AsyncRequest","CSS","XTimelineCoverPhotoGalleryControllerURIBuilder","$","cx"],function(a,b,c,d,e,f,g,h,i,j,k){var l='fbProfileCover',m="_3y4k",n={init:function(o,p){var q=j(l),r=o.getPopover();r.subscribeOnce('show',function(){r.hideLayer();p.show();h.addClass(q,m);new g().setURI(new i().getURI()).send();});p.subscribe('cancel',function(){r.showLayer();h.removeClass(q,m);});}};e.exports=n;},null);
__d("TimelineProfilePic",["Arbiter","CSS","Dialog","DOM","HTML","TimelineProfilePicConfig","Run","$","ge"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p;q.init=function(r,s){"use strict";q.destroyInstance();p=new q(r||'fbProfileCover',s||'.profilePicThumb');};function q(r,s){"use strict";this.$TimelineProfilePic0=n(r);this.$TimelineProfilePic1=s;this.$TimelineProfilePic2=[g.subscribe(l.loading,this.startLoading.bind(this)),g.subscribe(l.success,this.onUploadSuccess.bind(this))];m.onBeforeUnload(this.onBeforeUnload.bind(this));m.onLeave(this.destroy.bind(this));}q.prototype.$TimelineProfilePic3=function(r){"use strict";this.$TimelineProfilePic4=r;h.conditionClass(this.$TimelineProfilePic0,'profilePicLoading',r);};q.prototype.destroy=function(){"use strict";this.$TimelineProfilePic2.forEach(function(r){r.unsubscribe();});this.$TimelineProfilePic2=[];p=null;};q.prototype.startLoading=function(r,s){"use strict";this.$TimelineProfilePic3(!!s.isLoading);};q.prototype.onUploadSuccess=function(r,s){"use strict";this.$TimelineProfilePic3(false);if(!s.newPic)return;var t=i.getCurrent();if(t)t.hide();var u=s.newPic;j.replace(j.find(this.$TimelineProfilePic0,this.$TimelineProfilePic1),typeof u==='string'?k(u):u);if(typeof(s.profileId)!==(void 0)&&typeof(s.headerPicURL)!==(void 0)){var v=o('profile_pic_header_'+s.profileId);if(v)v.src=s.headerPicURL;}var w=o('fbProfilePicSelector');if(w)h.removeClass(w,'fbTimelineNullProfilePicSelector');};q.prototype.onBeforeUnload=function(){"use strict";if(p===this&&this.$TimelineProfilePic4)return l.leavingMessage;};q.destroyInstance=function(){"use strict";p&&p.destroy();};e.exports=q;},null);
__d("timeline-cover-dragdrop-edit",["SinglePictureUploadTarget","TimelineCover"],function(a,b,c,d,e,f,g,h){var i=function(){var m=h.getInstance();m.hideLoadingIndicator();},j=function(m){var n=h.getInstance(),o=m.id,p=m.photo_node;n.updateCoverImage(o,p);},k=function(m){h.getInstance().showLoadingIndicator();},l=function(m,n,o,p){new g(m,n).setAllowCrossOrigin(true).setMaximumDimensions(o,p).setPreprocessCallback(k).setOncompleteCallback(i).setAfterSuccessCallback(j).activate();};f.initialize_timeline_cover_drop_target=l;},null);
__d("profile-pic-dragdrop-edit",["Arbiter","SinglePictureUploadTarget","TimelineProfilePic","TimelineProfilePicConfig"],function(a,b,c,d,e,f,g,h,i,j){f.initialize_profile_pic_drop_target=function(k,l,m){i.init();var n={files:null,callback:null};if(m){m.subscribe('confirm',function(){n.callback(n.files);g.inform(j.loading,{isLoading:1},g.BEHAVIOR_STATE);m.hide();});m.subscribe('cancel',function(){n.callback([]);m.hide();});}new h(k,l).setAllowCrossOrigin(true).setAsyncPreprocessCallback(function(o,p){if(!m){g.inform(j.loading,{isLoading:1},g.BEHAVIOR_STATE);p(o);}else{n={files:o,callback:p};m.show();}}).setOncompleteCallback(function(){g.inform(j.loading,{isLoading:0},g.BEHAVIOR_STATE);}).setAfterSuccessCallback(function(o){g.inform(j.success,{newPic:o.photo_node},g.BEHAVIOR_STATE);}).activate();};},null);