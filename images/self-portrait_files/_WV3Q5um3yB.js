/*!CK:303692458!*//*1418776804,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["A+cwG"]); }

__d("EntstreamStoryDeduper",["AsyncRequest","Arbiter","DOM","csx","CSS","CacheStorage"],function(a,b,c,d,e,f,g,h,i,j,k,l){function m(p,q){var r={};for(var s=0;s<p.length;s++){var t=p[s],u=t.getAttribute('data-dedupekey');if(r[u]){if(q){k.hide(t);h.inform('FbFeedUnreadPillNavigation/logDedupe',{story:t,action:'dedupe_story_hide'});}else{i.remove(t);h.inform('FbFeedUnreadPillNavigation/logDedupe',{story:t,action:'dedupe_story_remove'});}}else r[u]=1;}}function n(p,q){var r={},s=0,t=Date.now()/1000/3600,u=30;for(var v=0;v<u;++v){var w=new l('localstorage','vpv_local_log.'+parseInt(t-v,10)+'h'),x=w.keys();s+=x.length>0;for(var y=0;y<x.length;y++)r[x[y]]=1;}var z=0,aa=0,ba;for(var ca=0;ca<p.length;ca++){var da=p[ca],ea=da.getAttribute('data-dedupekey'),fa='checkedVPVLocalCache';if(k.hasClass(da,fa)){continue;}else k.addClass(da,fa);++z;if(r[ea]&&k.shown(da)){ba=ea;++aa;if(q){k.hide(da);}else i.remove(da);}}if(z>0)new g('/ajax/feed/feed_tracking/vpv_local_storage_log').setData({num_vpvs:Object.keys(r).length,num_hours:s,num_seen_stories:aa,num_unseen_stories:z,seen_story_key:ba}).send();}var o={dedupe:function(p,q){q=q||"._5jmm";var r=i.scry(p,q);r=r.filter(function(s){return s.getAttribute('data-dedupekey');});m(r,false);},dedupeHide:function(p,q,r){q=q||"._5jmm";var s=i.scry(p,q),t=s.filter(function(x){return x.getAttribute('data-dedupekey')&&k.shown(x);});m(t,true);if(r){var u=i.scry(p,".unread_session");for(var v=0;v<u.length;++v){var w=i.scry(u[v],q);w.length&&n(w,true);}}}};e.exports=o;},null);
__d("PageAdsAttachmentLinkShareConstants",[],function(a,b,c,d,e,f){var g={LINK_ATTACHMENT_CLICK:'link_attachment_click'};e.exports=g;},null);
__d("runAfterScrollingStops",["Arbiter","Event","Run","debounceAcrossTransitions","emptyFunction"],function(a,b,c,d,e,f,g,h,i,j,k){function l(w,x,y){if(x&&o[x])return;if(!n){g.subscribe('page_transition',v);n=true;}if(!m){w();return;}x&&(o[x]=1);p.push(w);if(!y){if(r){i.onLeave(v);r=false;}q.push(p.length-1);}}var m,n,o={},p=[],q=[],r=true,s=500,t=j(function(){m=false;var w=p;p=[];q=[];o={};for(var x=0,y=w.length;x<y;++x)w[x]();},s);function u(){m=true;t();}function v(){var w=q;q=[];r=true;for(var x=0,y=w.length;x<y;++x)p[w[x]]=k;}h.listen(window,'scroll',u);e.exports=l;},null);
__d("LitestandOffscreenController",["Arbiter","CSS","DOM","Event","NavigationMessage","Run","Style","SubscriptionsHandler","Vector","cx","csx","queryThenMutateDOM","runAfterScrollingStops","throttle"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t){var u=1,v=9,w=10,x={},y=false,z,aa,ba,ca,da=[];function ea(){z&&z.release();z=null;y=false;}function fa(){x={};da=[];}function ga(){if(h.hasClass(document.body,"_5vb_"))return w;return v;}function ha(){ca=ca||o.getViewportDimensions().y;aa=o.getScrollPosition().y;ba=aa+ca;if(u){aa-=ca*u;ba+=ca*u;}for(var qa in x){var ra=x[qa];ra.position=o.getElementPosition(ra.element).y;if(!ra.hidden)ra.height=ra.element.offsetHeight;}}function ia(){var qa=[];for(var ra in x){var sa=x[ra],ta=sa.position,ua=ta+sa.height<aa,va=ta>ba;if(!sa.hidden&&(ua||va)){ja(sa);}else if(!ua&&!va){sa.pendingHide=false;if(sa.hidden){if(sa.dirty&&ta<aa){qa.push(ra);h.addClass(ka(sa),"_49nu");}else m.apply(sa.element,{height:'',marginBottom:''});h.show(ka(sa));sa.dirty=false;sa.hidden=false;}}}if(!qa.length)return;var wa=0;r(function(){for(var xa=0,ya=qa.length;xa<ya;xa++){var za=x[qa[xa]];wa+=za.height-ka(za).offsetHeight+m.getFloat(za.element,'marginBottom');}},function(){for(var xa=0,ya=qa.length;xa<ya;xa++){var za=x[qa[xa]];h.removeClass(ka(za),"_49nu");m.apply(za.element,{height:'',marginBottom:''});}wa&&(document.body.scrollTop-=wa);});}function ja(qa){if(!qa.pendingHide){da.push(qa);qa.pendingHide=true;}}function ka(qa){if(qa.wrapperElement)return qa.wrapperElement;var ra=qa.element;if(ra.firstElementChild)return (qa.wrapperElement=ra.firstElementChild);for(var sa=0;sa<ra.childNodes.length;sa++)if(ra.childNodes[sa].tagName)return (qa.wrapperElement=ra.childNodes[sa]);}function la(){var qa=ga()+'px';for(var ra=0;ra<da.length;ra++){var sa=da[ra];if(i.scry(sa.element,"._52fb").length)sa.pendingHide=false;if(sa&&sa.element&&sa.pendingHide&&!sa.hidden){m.apply(sa.element,{height:sa.height+'px',marginBottom:qa});h.hide(ka(sa));sa.hidden=true;sa.pendingHide=false;}}da=[];}function ma(){s(la,'LitestandOffscreenController/hide');r(ha,ia,'LitestandOffscreenController');}function na(qa,ra){var sa=false;ra.forEach(function(ta){var ua=x[ta];if(ua&&ua.hidden){ua.dirty=true;sa=true;if(ua.position>=aa){ua.hidden=false;ua.pendingHide=false;m.apply(ua.element,{height:'',marginBottom:''});h.show(ka(ua));}}});sa&&ia();}function oa(){l.onLeave(ea);z=new n();z.addSubscriptions(g.subscribe(k.NAVIGATION_BEGIN,fa),g.subscribe('LitestandStream/SubstreamsUpdated',na),j.listen(window,'scroll',t(ma)),j.listen(window,'resize',t(function(){ca=null;ma();})));y=true;}var pa={attachSubstream:function(qa){y||oa();x[i.getID(qa)]={element:qa};}};e.exports=pa;},null);
__d("LitestandNewStoryController",["Animation","Arbiter","AsyncRequest","EntstreamStoryDeduper","LitestandMessages","LitestandStream","Style","$","queryThenMutateDOM"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o){var p=500,q=600,r,s;function t(){s&&clearTimeout(s);s=null;}function u(){s=setTimeout(function(){s=null;v();},p);}function v(){var y;o(function(){y=l.canInsertNewerStories();},function(){if(y){w();}else u();},'LitestandNewStoryController/tryShowingStories');}function w(){t();if(!r)return;j.dedupe(l.getStreamRoot(),l.getStoriesSelector());m.apply(r,{height:'',left:'',overflow:'',position:'',width:''});new g(r).from('opacity',0).to('opacity',1).duration(q).go();h.inform(k.STORIES_INSERTED);h.inform(k.NEWER_STORIES_INSERTED);setTimeout(function(){h.inform('reflow');},0);new i().setURI('/ajax/litestand/update_filter_viewtime').setData({section_id:l.getSectionID()}).send();r=null;}var x={waitForDisplay:function(y){if(!r)r=n(y);if(l.canInsertNewerStories()){w();}else u();},showStoriesFromPill:function(y){r=y;w();}};e.exports=x;},null);
__d("TrackingData",[],function(a,b,c,d,e,f){var g='mei',h='ei',i='cmf',j={hasAdToken:function(k){var l=k.getAttribute('data-ft')?JSON.parse(k.getAttribute('data-ft')):null;return l&&(l[g]||l[h]);},setContinueMainFeed:function(k){var l=k.getAttribute('data-ft')?JSON.parse(k.getAttribute('data-ft')):null;if(l){l[i]=1;k.setAttribute('data-ft',JSON.stringify(l));}}};e.exports=j;},null);
__d("LitestandStreamLoader",["Arbiter","AsyncRequest","CSS","csx","cx","DOM","DOMScroll","Event","FbFeedHighlight","JSXDOM","LitestandMessages","LitestandNewStoryController","LitestandOffscreenController","LitestandStream","NavigationMessage","OnVisible","Run","throttle","UIPagelet","UserActivity","EntstreamStoryDeduper","$","copyProperties","ge","getUnboundedScrollPosition","Vector","Parent","TrackingData"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa,ga,ha){var ia=false,ja={},ka,la,ma,na,oa,pa,qa=0,ra=false,sa,ta=null,ua,va=[],wa=false,xa=false,ya,za,ab=false,bb=true,cb,db=false,eb=false,fb=null,gb=false,hb=50,ib=0,jb,kb;function lb(){w.onLeave(nb);va=[g.subscribe(q.PILL_VISIBILITY_UPDATED,function(fc,gc){ra=gc.pill_visibility;}),g.subscribe(q.NEW_STORIES_PILL_CLICKED,function(){r.showStoriesFromPill(kb);}),g.subscribe(u.NAVIGATION_BEGIN,nb),g.subscribe(q.NEWER_STORIES_INSERTED,function(){kb=null;}),g.subscribe(q.UNREAD_ONLY_BEGIN,function(fc,gc){gb=true;var hc=mb(),ic=l.scry(ya,".unseenStoriesHeader")[0],jc=[];if(ic&&hc){wa=true;var kc=l.scry(pa,t.getStoriesSelector()).slice(gc+1),lc=kc.length,mc=kc.filter(function(wc){return i.hasClass(wc,"_50mx")&&!i.hasClass(wc,"_x72")&&!ha.hasAdToken(wc);}),nc=mc.length,oc=cb.min_stories_to_skip;if(kc.length-mc.length<oc)mc=mc.slice(0,kc.length-mc.length-oc);var pc=mc.length,qc=-1,rc={};if(cb.move_skipped_unseen){var sc=p.div({className:"moved_stories"});mc.forEach(function(wc){var xc=ga.byClass(wc,"_4ikz");rc[l.getID(xc)]=1;l.appendContent(sc,wc);});g.inform('LitestandStream/SubstreamsUpdated',Object.keys(rc));l.insertAfter(ic,sc);qc=l.scry(ya,".moved_stories ._5jmm").length;}jc=l.scry(ya,t.getStoriesSelector());l.insertBefore(hc,ya);i.show(ya);jc.forEach(function(wc){i.show(wc);o.highlight(wc);});aa.dedupeHide(t.getStreamRoot(),t.getStoriesSelector(),ab);g.inform(q.STORIES_INSERTED);setTimeout(function(){m.scrollTo(ic,800,false,false,10);},0);ob();var tc=jc[0],uc=JSON.parse(tc.getAttribute('data-ft')),vc=uc.qid;pb('load',{all_unseen_stories:jc.length,qid:vc,main_feed_stories_skip:lc,unseen_stories_skipped:nc,unseen_stories_eligible_to_move:pc,unseen_stories_moved:qc});}else{if(!ic)pb('missed_stories_header_unavailable');if(!jc[0])pb('missed_stories_unseen_stories_unavailable');if(!hc)pb('missed_stories_more_pager_unavailable');}})];ia=true;}function mb(){if(la.parentNode)return la.parentNode;if(!pa)return;var fc=pa.children.length-1;while(fc>=0){if(pa.children[fc].id.lastIndexOf('more_pager',0)===0)return pa.children[fc];fc--;}return;}function nb(){g.inform(q.LEAVE_HOME);ja={};ua=null;qa=0;va.forEach(g.unsubscribe);va=[];ka&&ka.remove();oa&&clearTimeout(oa);oa=null;na=null;kb=null;sa&&sa.remove();sa=null;ia=false;ib=0;ta&&ta.remove();ta=null;wa=false;xa=false;eb=false;ya=null;za=null;ab=false;bb=true;cb=null;db=false;gb=false;fb=null;}function ob(){ja={};}function pb(fc,gc){var hc=-1,ic=-1,jc=-1,kc=l.scry(pa,".unread_session"),lc=0,mc=0,nc=null;for(var oc=0;oc<kc.length;++oc){var pc=l.scry(kc[oc],t.getStoriesSelector());for(var qc=0;qc<pc.length;++qc){var rc=pc[qc];if(!rc.getAttribute('data-dedupekey'))continue;++mc;if(i.shown(rc)){++lc;nc=rc;}}}ic=lc-1;if(nc){var sc=JSON.parse(nc.getAttribute('data-ft'));hc=sc.qid;jc=sc.mf_story_key;}var tc={qid:hc,finish_pos:ic,storyid:jc,feed_stream_id:t.getFeedStreamID(),all_unseen_stories:mc,num_unseen_sessions:kc.length};gc=typeof gc!=='undefined'?gc:{};for(var uc in tc)if(typeof gc[uc]==='undefined')gc[uc]=tc[uc];gc.action=fc;new h('/ajax/feed/pill/').setData(gc).send();}function qb(){if(oa)return;oa=setTimeout(function(){oa=null;xb();},ua.pollIntervalMS);}function rb(){if(ua&&na&&ua.pollIntervalMS&&ua.pollIntervalMS>1000)qb();}function sb(){ka=new v(l.find(la,'a'),cc.bind(null),false,ua.bufferPixels);}function tb(){var fc=ea(window).y;return fc>ua.firstPagerScrollBuffer;}function ub(){if(tb()){sb();sa&&sa.remove();sa=null;}}function vb(){if(gb||!fb)return;var fc=l.scry(pa,t.getStoriesSelector()),gc=ba('leftCol'),hc=fa.getElementPosition(gc).y+fa.getElementDimensions(gc).y,ic=0;for(;ic<fc.length;ic++)if(!i.hasClass(fc[ic],"_2l4l")&&fc[ic].getAttribute('data-ft'))break;while(ic<fc.length&&fa.getElementPosition(fc[ic]).y<hc+hb)ic++;if(fc.length===ic)return;var jc=fc[ic],kc=fb.getElement();l.insertBefore(jc,kc);i.show(kc);fb.reflow();gb=true;}function wb(fc){vb();var gc=l.find(la,'a');n.listen(gc,'click',function(event){cc();sa&&sa.remove();sa=null;event.preventDefault();});var hc=t.getVisibleStoryCount(pa),ic=ua.maxStories;if(ic&&hc>=ic)return;if(fc&&!tb()){sa=n.listen(window,'scroll',x(ub));}else sb();}function xb(){if(!na)return;if(!z.isActive(ua.newStoryIdleTime)){z.subscribeOnce(xb);return;}if(!t.canInsertNewerStories()){qb();return;}if(!kb){var fc=t.getStreamRoot();kb=p.div({style:{height:0,width:fc.offsetWidth+'px',left:'-10000px',opacity:0,overflow:'hidden',position:'absolute'}});l.prependContent(fc,kb);}if(!ta)ta=n.listen(window,'scroll',function(){if(t.canInsertNewerStories()!=ra)g.inform(q.TOGGLE_PILL_VISIBILITY);});var gc=p.div(null);l.prependContent(kb,gc);var hc=ua.crossPage?{crossPage:true}:null;y.loadFromEndpoint('LitestandNewerStoriesPagelet',gc,ca(na,{cursor:jb,containerID:l.getID(kb)}),hc);g.inform(q.PILL_PAGELET_REQUEST_SENT);}function yb(){var fc=l.getID(la);i.addClass(la,'async_saving');var gc=ac();if(ja[gc])throw new Error('This cursor has been used before, stories will be '+'repeated. Cursor: '+gc);ja[gc]=gc;var hc={cursor:gc,preload_next_cursor:za,pager_config:ma,pager_id:fc,scroll_count:++qa,start_unread_session:wa,start_continue_top_news_feed:xa,feed_stream_id:t.getFeedStreamID(),snapshot_time:cb?cb.snapshot_time:null};wa=false;xa=false;y.loadFromEndpoint(ua.pagerController,l.getID(pa),hc,{append:true,automatic:true,usePipe:true,crossPage:ua.crossPage});}function zb(){return bc()[0].getAttribute('data-cursor');}function ac(){var fc=bc();fc=fc.filter(function(gc){return !gc.getAttribute('data-preload_unseen_story');});return fc[fc.length-1].getAttribute('data-cursor');}function bc(){var fc=l.scry(pa,t.getStoriesSelector());return fc.filter(function(gc){return gc.getAttribute('data-cursor');});}function cc(){g.inform('FbFeedUnreadPillNavigation/startLoading');yb();ka&&ka.remove();ka=null;}function dc(){if(!ya||!ia)return [];var fc=l.scry(pa,t.getStoriesSelector()),gc=fc.filter(function(jc){return jc.getAttribute('data-dedupekey')&&!i.hasClass(jc,"preloadUnseenStory");}),hc={};for(var ic=0;ic<gc.length;ic++)hc[gc[ic].getAttribute('data-dedupekey')]=1;return l.scry(ya,t.getStoriesSelector()).filter(function(jc){var kc=jc.getAttribute('data-dedupekey'),lc=kc&&!hc[kc];hc[kc]=1;return lc;});}var ec={register:function(fc,gc,hc,ic,jc){ia||lb();ua=t.getStreamConfig(gc);wa=false;xa=false;eb=false;ya=null;za=null;ab=false;bb=true;cb=null;db=false;ma=hc;pa=ba(fc);jb=zb();fb=jc;gb=false;la=ic;wb(true);rb();},replacePagerConfig:function(fc){ma=fc;},continueTopNewsFeed:function(){xa=true;eb=true;ob();pb('finish');},removeOldPager:function(fc,gc){if(fc)l.remove(ba(fc));i.show(ba(gc));},removeLoadingIndicator:function(fc,gc){var hc=da(fc);if(hc)l.remove(hc);i.show(gc);},moreStoriesInserted:function(fc){g.inform(q.STORIES_INSERTED,{substream_id:fc});var gc=ba(fc);if(eb)l.scry(gc,t.getStoriesSelector()).forEach(ha.setContinueMainFeed);if(t.hideOffscreenSubstreams())s.attachSubstream(gc);},attachNewPager:function(fc){!db&&aa.dedupeHide(t.getStreamRoot(),t.getStoriesSelector(),ab);this.loadMoreUnseenStoriesIfNeeded();la=fc;la&&wb(false);},setPollerData:function(fc){if(fc){na=fc;rb();}},headLoadCompleted:function(fc){jb=fc.newCursor;rb();var gc=fc.stories;if(gc&&gc.length>0){for(var hc=gc.length-1;hc>=0;hc--)gc[hc].setAttribute('data-insertion-position',--ib);g.inform('Stream/totalHeadLoadedStories',-ib);}},registerPreloadUnseenStories:function(fc,gc,hc,ic){ya=fc;za=gc;ab=hc;cb=ic;if(ic)db=ic.disable_deduper;ec.loadMoreUnseenStoriesIfNeeded();},morePreloadUnseenStories:function(fc,gc,hc){za=hc;if(fc>0){l.appendContent(ya,gc);this.loadMoreUnseenStoriesIfNeeded();}else{g.inform('FbFeedUnreadPillLoader/removeLoadingPill');g.inform('FbFeedUnreadPillNavigation/removePill');bb=true;pb('not_enough_remove',{all_unseen_stories:fc});}},setStopRecursiveUnseenLoad:function(fc){bb=fc;},loadMoreUnseenStoriesIfNeeded:function(){if(!cb||bb)return;var fc=dc();if(fc.length<cb.min_num){if(!ya||cb.disable_recursive){g.inform('FbFeedUnreadPillNavigation/removePill');bb=true;return;}y.loadFromEndpoint('LitestandUnseenStreamPagelet',ya,{unread_pill_config:cb,next_cursor:za,mode:1},{append:true,automatic:true,usePipe:true,crossPage:ua.crossPage});}else{g.inform('FbFeedUnreadPillNavigation/enoughLoaded');if(cb.disable_recursive)bb=true;}},forceNewFetch:xb};e.exports=ec;},null);
__d("collectSubtreeData",[],function(a,b,c,d,e,f){function g(i,j,k,l,m){if(i.offsetWidth===0&&i.offsetHeight===0)return m;var n={};if(i.getAttribute)for(r=0;r<j.length;r++){t=j[r];var o=i.getAttribute(k[t]);if(o){n[t]={};var p=JSON.parse(o);for(var q in l)if(p[q]!==(void 0)){n[t][q]=true;if(m[t]===(void 0))m[t]={};if(m[t][q]===(void 0))m[t][q]=[];if(l[q].length>0)m[t][q].push(l[q]);m[t][q].push('('+p[q]);}}}for(var r=0;r<i.childNodes.length;r++){var s=i.childNodes[r];g(s,j,k,l,m);}for(var t in n)for(var u in n[t]){var v=m[t][u][m[t][u].length-1];if(v.length>0&&v.charAt(0)=='('){m[t][u][m[t][u].length-1]=v.substr(1);}else m[t][u].push(')');}return m;}function h(i,j){var k={};for(var l=0;l<j.length;++l)k[j[l]]='data-'+j[l];var m={tn:"","tn-debug":","},n={};g(i,j,k,m,n);for(var o in n)for(var p in n[o])n[o][p]=n[o][p].join('');return n;}e.exports=h;},null);
__d("recordTNTreeData",["collectSubtreeData"],function(a,b,c,d,e,f,g){function h(i,j){var k={},l=g(i,['ft']);for(var m in l.ft){k[m+'_tree']=l.ft[m];if(m==='tn-debug')i.setAttribute('tn-debug_subtree',l.ft[m]);}k.evt_value=i.offsetHeight;if(j)k.offset=Math.max(0,i.offsetTop-j.offsetTop);return k;}e.exports=h;},null);
__d("MetaComposerEdDialog",["ARIA","Animation","Arbiter","AsyncRequest","DOM","Ease","Parent","SelectorDeprecated","Vector","copyProperties","getElementText"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){var r=null;function s(t){this._dialog=t.dialog;this.config=t;this._init();}s.init=function(t){if(r){r.config.show_audience=t.show_audience;t.dialog.destroy();return;}r=new s(t);};p(s.prototype,{_init:function(){i.subscribe('ComposerXStatusAttachment/ready',function(){if(this.config.show_audience){this._sendEducationRequest({},'/ajax/composer/audience/education',this._handlerCustomDuration.bind(this,6000));this.config.show_audience=false;}}.bind(this));if(this.config.show_sticky)i.subscribe('composer/mutate',function(t,u){this._sendEducationRequest({sticky_num:this.config.n_sticky_shown},'/ajax/composer/audience/sticky_education');}.bind(this));if(this.config.show_tags)i.subscribe('SelectedPrivacyOption/changed',function(t,u){this._sendEducationRequest({ids:u.tags,from:'WithTagger',hasEvent:u.hasEvent,type:u.privacy,tag_num:this.config.n_tag_shown},'/ajax/composer/audience/tag_education',this._handler.bind(this));}.bind(this));n.subscribe('open',this._killAnim.bind(this));},_sendEducationRequest:function(t,u,v){if(!this._updateDialogContext())return;this._async&&this._async.abort();this._async=new j(u);this._async.setData(t).setHandler(v).send();},_updateDialogContext:function(){var t=k.scry(document.body,'div.composerAudienceWrapper'),u,v;for(var w=0;w<t.length;w++){u=t[w];v=o.getElementPosition(u);if(u&&v.x>0&&v.y>0){this._dialog.setContext(u);return true;}}return false;},_handler:function(t){this._handlerCustomDuration(1500,t);},_handlerCustomDuration:function(t,u){var v=u.payload;if(!v||!this._updateDialogContext())return;var w=this._dialog.getContent().firstChild;k.setContent(w,v);g.announce(q(w));this._dialog.show();var x=m.byClass(w,'metaComposerUserEd');if(this._anim){this._anim.stop();this._anim=new h(x);}else this._anim=new h(x).from('opacity',0);this._anim.to('opacity',1).ease(l.sineOut).checkpoint().duration(t).checkpoint().to('opacity',0).ease(l.sineOut).checkpoint().ondone(this._killAnim.bind(this)).go();},_killAnim:function(t,u){if(this._anim){this._dialog.hide();this._anim.stop();this._anim=null;}}});e.exports=s;},null);
__d("StoryTopicMap",[],function(a,b,c,d,e,f){var g={},h={registerTopics:function(i,j){g[i]=j;},getTopicsForFTID:function(i){return g[i]||[];}};e.exports=h;},null);
__d("XFeedAdsChainingControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/feed\/ads_chaining\/",{actor_id:{type:"String",required:true},ft_id:{type:"String"},origin:{type:"String",required:true},ei:{type:"String",required:true},data_ownerid:{type:"String",required:true}});},null);
__d("XPubcontentFeedChainingControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/pubcontent\/feed_chaining\/",{actor_id:{type:"String",required:true},content_id:{type:"String"},ft_id:{type:"String"},origin:{type:"String",required:true}});},null);
__d("XPubcontentRelatedShareChainingControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/pubcontent\/related_share\/",{attachment_div_id:{type:"String",required:true},global_share_id:{type:"Int",required:true},video_div_id:{type:"String"},link_url:{type:"String"},qid:{type:"String"},mf_story_key:{type:"String"},share_id:{type:"String"},is_auto_expand:{type:"Bool"}});},null);
__d("XPubcontentRelatedVideoChainingControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/pubcontent\/related_video\/",{attachment_div_id:{type:"String",required:true},fbvideo_id:{type:"Int",required:true},qid:{type:"String"},mf_story_key:{type:"String"}});},null);
__d("XPubcontentTopicChainingControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/pubcontent\/topic_chaining\/",{pivotal_topic_ids:{type:"IntVector"}});},null);
__d("XPubcontentInlineStoryPivotChainingControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/pubcontent\/inline_story_pivot_chaining\/",{origin:{type:"String",required:true},storyid:{type:"String"},ftid:{type:"String"}});},null);
__d("XRelatedGamesChainingControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/games\/async\/related_games\/",{attachment_div_id:{type:"String",required:true},app_id:{type:"Int",required:true}});},null);
__d("PubcontentFeedChainingController",["AggregatedLinkComposerConfig","Arbiter","AsyncRequest","AttachmentRelatedShareConstants","CSS","csx","cx","DOM","DOMQuery","FeedAdsChainingConfig","PageAdsAttachmentLinkShareConstants","PageLikeButton","PubcontentFeedChainingConfig","PubcontentRelatedShareChainingConfig","PubcontentTopicChainingConfig","StoryInlinePivotChainingConfig","StoryTopicMap","UFIFeedbackTargets","UFIUIEvents","XFeedAdsChainingControllerURIBuilder","XPubcontentFeedChainingControllerURIBuilder","XPubcontentRelatedShareChainingControllerURIBuilder","XPubcontentRelatedVideoChainingControllerURIBuilder","XPubcontentTopicChainingControllerURIBuilder","XPubcontentInlineStoryPivotChainingControllerURIBuilder","XRelatedGamesChainingControllerURIBuilder"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba,ca,da,ea,fa){var ga='ei',ha='ad_fan_page_action',ia='ad_like_page_post_action',ja='ad_share_attachment_click_action',ka='page_story_like_action',la='related_share_article_click',ma='related_share_video_click',na='page_share_like_action',oa='topic_story_like_action',pa='story_click_for_pivot_action',qa='story_like_pivot_action';function ra(){"use strict";this.$PubcontentFeedChainingController0=s;this.$PubcontentFeedChainingController1=p;this.$PubcontentFeedChainingController2=t;this.$PubcontentFeedChainingController3=u;this.$PubcontentFeedChainingController4=v;this.$PubcontentFeedChainingController5={};h.subscribe(r.LIKED,this.$PubcontentFeedChainingController6.bind(this));h.subscribe(y.UFIActionLinkLike,this.$PubcontentFeedChainingController7.bind(this));h.subscribe(j.ARTICLE_CLICK,this.$PubcontentFeedChainingController8.bind(this));h.subscribe(j.VIDEO_CLICK,this.$PubcontentFeedChainingController9.bind(this));h.subscribe(j.FBVIDEO_CLICK,this.$PubcontentFeedChainingControllera.bind(this));h.subscribe(j.GAME_CLICK,this.$PubcontentFeedChainingControllerb.bind(this));h.subscribe(q.LINK_ATTACHMENT_CLICK,this.$PubcontentFeedChainingControllerc.bind(this));h.subscribe(j.PHOTO_CLICK,this.$PubcontentFeedChainingControllerd.bind(this));ra.instance=this;}ra.getAdClientTokenIndex=function(){"use strict";return ga;};ra.prototype.$PubcontentFeedChainingController6=function(sa,ta){"use strict";var ua=this.findAdClientToken(ta.target);if(ua){this.$PubcontentFeedChainingControllere(ta.target,{origin:ha,actor_id:ta.profile_id,client_token:ua});}else this.$PubcontentFeedChainingControllerf(ta.target,{origin:ta.origin,actor_id:ta.profile_id});};ra.prototype.$PubcontentFeedChainingController7=function(sa,ta){"use strict";if(!ta.ft_id)return;if(!this.$PubcontentFeedChainingControllerg(this.findStory(ta.target)))return;x.getFeedbackTarget(ta.ft_id,function(ua,va){var wa=this.findAdClientToken(ua);if(wa&&va.isshare){this.$PubcontentFeedChainingControllere(ua,{actor_id:va.actorid,origin:ia,ft_id:va.entidentifier,client_token:wa});}else if(va.isownerpage){this.$PubcontentFeedChainingControllerf(ua,{actor_id:va.actorid,content_id:va.entidentifier,origin:ka});}else if(va.isshare){this.$PubcontentFeedChainingControllerf(ua,{actor_id:va.actorid,content_id:va.entidentifier,ft_id:va.entidentifier,origin:na});}else{var xa=w.getTopicsForFTID(va.entidentifier);if(xa&&xa.length>0){this.$PubcontentFeedChainingControllerh(ua,{ft_id:va.entidentifier,origin:oa,pivotal_topic_ids:xa});}else this.$PubcontentFeedChainingControlleri(ua,{origin:qa,ft_id:va.entidentifier});}}.bind(this,ta.target));};ra.prototype.$PubcontentFeedChainingControlleri=function(sa,ta){"use strict";var ua=this.$PubcontentFeedChainingControllerj(sa,ta);if(!ua)return false;var va=(new ea()).setString('origin',ta.origin);if(ta.story_id)va.setString('storyid',String(ta.story_id));if(ta.ft_id)va.setString('ftid',String(ta.ft_id));new i().setErrorHandler(this.$PubcontentFeedChainingControllerk.bind(this,ua.story.id)).setRelativeTo(ua.chainingWrapper).setURI(va.getURI()).setAllowCrossPageTransition(true).send();return true;};ra.prototype.$PubcontentFeedChainingControllerd=function(sa,ta){"use strict";var ua=this;ua.$PubcontentFeedChainingControlleri(ta.attachment,{origin:pa,story_id:ta.storyid});};ra.prototype.$PubcontentFeedChainingController8=function(sa,ta){"use strict";if(g.no_chained_related_stories==='true')return;ta.origin=la;var ua=this,va=this.findStory(ta.attachment),wa=o.scry(o.getRootElement(),'#initial_browse_result').length>0;if(wa)return;var xa;if(ta.is_right_click){xa=0;}else xa=j.EVENT_DELAY;setTimeout(function(){if(va){var ya=ua.findAttachment(va);if(ya)ta.attachment=ya;}ua.$PubcontentFeedChainingControllerl(ta.attachment,ta);},xa);};ra.prototype.$PubcontentFeedChainingController9=function(sa,ta){"use strict";ta.origin=ma;var ua=this,va=this.findStory(ta.attachment);setTimeout(function(){if(va){var wa=ua.findAttachment(va);if(wa)ta.attachment=wa;}ua.$PubcontentFeedChainingControllerl(ta.attachment,ta);},j.EVENT_DELAY);};ra.prototype.$PubcontentFeedChainingControllera=function(sa,ta){"use strict";ta.origin=ma;var ua=this,va=this.findStory(ta.attachment);setTimeout(function(){if(va){var wa=ua.findAttachment(va);if(wa)ta.attachment=wa;}ua.$PubcontentFeedChainingControllerl(ta.attachment,ta);},j.EVENT_DELAY);};ra.prototype.$PubcontentFeedChainingControllerb=function(sa,ta){"use strict";var ua=this,va=this.findStory(ta.attachment);setTimeout(function(){if(va)var wa=ua.findContainer(va);ua.$PubcontentFeedChainingControllerm(va,ta.global_share_id,n.getID(wa));},j.EVENT_DELAY);};ra.prototype.$PubcontentFeedChainingControllerc=function(sa,ta){"use strict";var ua=this.findAdClientToken(ta.attachment);if(ua){ta.origin=ja;ta.client_token=ua;this.$PubcontentFeedChainingControllere(ta.attachment,ta);}};ra.prototype.$PubcontentFeedChainingControllern=function(sa){"use strict";return !!(sa&&sa.id&&!k.hasClass(sa,"_sf6")&&!(sa.id in this.$PubcontentFeedChainingController5));};ra.prototype.$PubcontentFeedChainingControllero=function(sa){"use strict";if(!sa)return false;if(sa.origin in this.$PubcontentFeedChainingController0||sa.origin in this.$PubcontentFeedChainingController2||sa.origin in this.$PubcontentFeedChainingController1||sa.origin in this.$PubcontentFeedChainingController4){return true;}else{var ta=this.$PubcontentFeedChainingController3[sa.origin];if(!ta||!ta.rate)return false;var ua=Math.random();if(ua>ta.rate)return false;return true;}};ra.prototype.$PubcontentFeedChainingControllerp=function(sa){"use strict";this.$PubcontentFeedChainingController5[sa]=true;};ra.prototype.$PubcontentFeedChainingControllerk=function(sa){"use strict";delete this.$PubcontentFeedChainingController5[sa];};ra.prototype.$PubcontentFeedChainingControllerg=function(sa){"use strict";if(!sa)return false;var ta="_2bex",ua=sa.nextSibling,va=true;if(ua&&ua.firstChild){var wa=ua.firstChild;va=!(wa.hasChildNodes()&&k.hasClass(wa,ta));}if(!va)return false;var xa=sa.children[0],ya=sa.children[1],za="_4_ck";if((xa&&k.hasClass(xa,za))||(ya&&k.hasClass(ya,za)))return false;return true;};ra.prototype.$PubcontentFeedChainingControllerj=function(sa,ta){"use strict";var ua=this.findStory(sa);if(!this.$PubcontentFeedChainingControllern(ua))return null;if(!this.$PubcontentFeedChainingControllero(ta))return null;this.$PubcontentFeedChainingControllerp(ua.id);if(this.isSponsoredStory(ua))return null;var va;if(!ta.continued_chaining){va=this.findContainer(ua);if(!va)return null;var wa=n.create('div'),xa=n.appendContent(va,wa);if(xa.length!==1)return null;}else{va=ua;wa=n.create('div');xa=n.insertAfter(va,wa);n.remove(va);if(xa.length!==1)return null;}if(ta.is_auto_expand){return {chainingWrapper:xa[0],story:ua,is_auto_expand:ta.is_auto_expand};}else return {chainingWrapper:xa[0],story:ua};};ra.prototype.$PubcontentFeedChainingControllere=function(sa,ta){"use strict";var ua=this.$PubcontentFeedChainingControllerj(sa,ta);if(!ua)return false;var va=this.findStreamRoot(ua.story);if(!va)return false;var wa=va.getAttribute('id'),xa=(new z()).setString('actor_id',ta.actor_id).setString('origin',ta.origin).setString('ei',ta.client_token).setString('data_ownerid',wa);if(ta.ft_id)xa.setString('ft_id',ta.ft_id);new i().setErrorHandler(this.$PubcontentFeedChainingControllerk.bind(this,ua.story.id)).setRelativeTo(ua.chainingWrapper).setURI(xa.getURI()).send();return true;};ra.prototype.$PubcontentFeedChainingControllerl=function(sa,ta){"use strict";if(!this.$PubcontentFeedChainingControllerg(this.findStory(sa)))return false;var ua=this.$PubcontentFeedChainingControllerj(sa,ta);if(!ua)return false;k.addClass(ua.chainingWrapper,"_2bex");var va=o.scry(sa,"^._5ss6");if(va.length>0)k.addClass(ua.chainingWrapper,"_33mi");var wa=null;if(ta.fbvideo_id){wa=new ca();wa.setInt('fbvideo_id',ta.fbvideo_id);}else{wa=new ba();wa.setInt('global_share_id',ta.global_share_id);}wa.setString('attachment_div_id',n.getID(ta.attachment));if(ta.link_url)wa.setString('link_url',ta.link_url);if(ta.video_div_id)wa.setString('video_div_id',ta.video_div_id);if(ta.share_id)wa.setString('share_id',ta.share_id);var xa=JSON.parse(ua.story.getAttribute('data-ft'))||{};if('qid' in xa&&'mf_story_key' in xa){wa.setString('qid',xa.qid);wa.setString('mf_story_key',xa.mf_story_key);}if(ta.is_auto_expand){this.$PubcontentFeedChainingControllerk(ua.story.id);wa.setBool('is_auto_expand',ta.is_auto_expand);}var ya=new i().setErrorHandler(this.$PubcontentFeedChainingControllerk.bind(this,ua.story.id)).setRelativeTo(ua.chainingWrapper).setURI(wa.getURI());xa&&ya.setData(xa);ya.send();return true;};ra.prototype.$PubcontentFeedChainingControllerm=function(sa,ta,ua){"use strict";if(!this.$PubcontentFeedChainingControllern(sa))return;this.$PubcontentFeedChainingControllerp(sa.id);var va=(new fa()).setInt('app_id',ta).setString('attachment_div_id',ua);new i().setErrorHandler(this.$PubcontentFeedChainingControllerk.bind(this,sa.id)).setURI(va.getURI()).send();return true;};ra.prototype.$PubcontentFeedChainingControllerf=function(sa,ta){"use strict";var ua=this.$PubcontentFeedChainingControllerj(sa,ta);if(!ua)return false;var va=(new aa()).setString('actor_id',ta.actor_id).setString('origin',ta.origin);if(ta.ft_id)va.setString('ft_id',ta.ft_id);if(ta.content_id)va.setString('content_id',ta.content_id);new i().setErrorHandler(this.$PubcontentFeedChainingControllerk.bind(this,ua.story.id)).setRelativeTo(ua.chainingWrapper).setURI(va.getURI()).send();return true;};ra.prototype.$PubcontentFeedChainingControllerh=function(sa,ta){"use strict";var ua=this.$PubcontentFeedChainingControllerj(sa,ta);if(!ua)return false;var va=(new da()).setIntVector('pivotal_topic_ids',ta.pivotal_topic_ids).getURI();new i().setErrorHandler(this.$PubcontentFeedChainingControllerk.bind(this,ua.story.id)).setRelativeTo(ua.chainingWrapper).setURI(va).send();return true;};e.exports=ra;},null);
__d("PubcontentLitestandClassicChainingController",["ContextualThing","DOM","PubcontentFeedChainingController","csx"],function(a,b,c,d,e,f,g,h,i,j){for(var k in i)if(i.hasOwnProperty(k))m[k]=i[k];var l=i===null?null:i.prototype;m.prototype=Object.create(l);m.prototype.constructor=m;m.__superConstructor__=i;function m(){"use strict";if(i!==null)i.apply(this,arguments);}m.prototype.findStory=function(n){"use strict";var o="^div._4-u2",p=h.scry(n,o);return p.length===1?p[0]:null;};m.prototype.isSponsoredStory=function(n){"use strict";var o="._5paw";return h.scry(n,o).length>0;};m.prototype.findAttachment=function(n){"use strict";var o="div._6m2",p="div.iframeEmbed",q=h.scry(n,o)[0]||h.scry(n,p)[0];return q;};m.prototype.findContainer=function(n){"use strict";var o=h.create('div'),p=h.insertAfter(n,o);g.register(o,n);return p.length>=1?p[0]:null;};m.prototype.findStreamRoot=function(n){"use strict";var o="^div._4ikz";return h.scry(n,o)[0];};m.prototype.findAdClientToken=function(n){"use strict";var o=this.findStory(n);if(!o)return null;var p=o.getAttribute('data-ft');if(!p)return null;var q=JSON.parse(p);return q[i.getAdClientTokenIndex()];};e.exports=m;new m();},null);
__d("StoryPositionTracking",["DOM","LitestandStream","csx","ge"],function(a,b,c,d,e,f,g,h,i,j){var k=0;function l(o,p){var q=JSON.parse(o.getAttribute('data-ft'));if(q){q.insertion_position=p;o.setAttribute('data-ft',JSON.stringify(q));}}function m(o){return g.scry(o,"._5jmm");}var n={registerNewStories:function(o){if(o=='substream_0')k=0;var p=m(j(o)),q=p.length;for(var r=0;r<q;r++)l(p[r],k++);},updateAllStories:function(){var o=m(h.getStreamRoot()),p=o.length;k=0;for(var q=0;q<p;q++)l(o[q],k++);}};e.exports=n;},null);
__d("StreamViewportTracking",["DOM","DOMDimensions","ViewportTracking","ge","recordTNTreeData"],function(a,b,c,d,e,f,g,h,i,j,k){var l=51;for(var m in i)if(i.hasOwnProperty(m))o[m]=i[m];var n=i===null?null:i.prototype;o.prototype=Object.create(n);o.prototype.constructor=o;o.__superConstructor__=i;function o(){"use strict";if(i!==null)i.apply(this,arguments);}o.prototype.init=function(p,q){"use strict";if(q)this.$StreamViewportTracking0=q;n.init.call(this,p);this.initSubscriptions();};o.prototype.initSubscriptions=function(){"use strict";};o.prototype.getDataFromConfig=function(p){"use strict";this.isTimetrackingEnabled=1;this.timeout=p.record_delay;};o.prototype.getTimeout=function(){"use strict";return this.timeout;};o.prototype.getStorySelector=function(){"use strict";return '.uiStreamStory';};o.prototype.getAllStories=function(){"use strict";var p=g.scry(this.getStream(),this.getStorySelector());return p.filter(function(q){return q.getAttribute('data-ft');});};o.prototype.getStoryID=function(p){"use strict";var q=JSON.parse(p.getAttribute('data-ft'));return q.mf_story_key;};o.prototype.getQueryID=function(p){"use strict";var q=JSON.parse(p.getAttribute('data-ft'));return q.qid;};o.prototype.getFBFeedLocations=function(p){"use strict";var q=JSON.parse(p.getAttribute('data-ft'));return q.fbfeed_location;};o.prototype.getFBFeedInsertionPosition=function(p){"use strict";var q=JSON.parse(p.getAttribute('data-ft'));return q.insertion_position;};o.prototype.getDataToLog=function(p){"use strict";var q={},r=this.getStream();q=k(p,r);var s=p.getAttribute('data-insertion-position');if(s!==null)q.inspos=s;q.evt=l;q.vpv_time=Math.round(Date.now()/1000);var t=g.scry(p,".fbStoryAttachmentImage")[0];if(t){var u=h.getElementDimensions(t);q.story_image_height=u.height;q.story_image_width=u.width;}return {ft:q};};o.prototype.getStream=function(){"use strict";if(this.$StreamViewportTracking0)return this.$StreamViewportTracking0;return j('home_stream');};o.prototype.heartBeatIsEnabled=function(){"use strict";return true;};o.init=function(p,q){"use strict";o.instance=new o();o.instance.init(p,q);};o.getInstance=function(){"use strict";return o.instance;};e.exports=o;},null);
__d("FbFeedAttachmentRelatedShare",["Arbiter","AttachmentRelatedShareConstants","DOM","Event","tidyEvent","csx"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={loadRelatedAttachment:function(n,o){k(j.listen(n,'click',function(){g.inform(h.ARTICLE_CLICK,{attachment:n,global_share_id:o});}));},loadRelatedVideoAttachment:function(n,o){k(j.listen(n,'click',function(){g.inform(h.VIDEO_CLICK,{attachment:n,global_share_id:o});}));},loadRelatedGameAttachment:function(n,o){k(j.listen(n,'click',function(){g.inform(h.GAME_CLICK,{attachment:n,global_share_id:o});}));},loadRelatedAttachmentForStream:function(n){var o=function(event,p){var q=event.getTarget();if(q.getAttribute('target')!=='_blank')return;var r="^div._5pbx",s="^div._5pc9",t=i.scry(q,r)[0]||i.scry(q,s)[0];if(!t)return;g.inform(h.ARTICLE_CLICK,{attachment:t,global_share_id:0,link_url:q.getAttribute('href'),is_right_click:p});};k(j.listen(n,'click',function(event){o(event,false);}));k(j.listen(n,'mousedown',function(event){if(event.which==3||event.button==2)o(event,true);}));},closeButton:function(n,o){k(j.listen(n,'click',function(){i.remove(o);}));}};e.exports=m;},null);
__d("FbFeedViewportTracking",["Arbiter","LitestandMessages","LitestandStream","StreamViewportTracking","csx"],function(a,b,c,d,e,f,g,h,i,j,k){for(var l in j)if(j.hasOwnProperty(l))n[l]=j[l];var m=j===null?null:j.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=j;function n(){"use strict";if(j!==null)j.apply(this,arguments);}n.prototype.initSubscriptions=function(){"use strict";this.subscriptions.addSubscriptions(g.subscribe([h.STORIES_INSERTED],this.invalidateAllStoriesCache.bind(this)),g.subscribe(h.LEAVE_HOME,this.updateTimeTrackingData.bind(this,true)));};n.prototype.getStorySelector=function(){"use strict";return "._5jmm";};n.prototype.getStream=function(){"use strict";return i.getStreamRoot();};n.prototype.getSessionID=function(){"use strict";return i.getFeedStreamID();};n.init=function(o){"use strict";new n().init(o);};e.exports=n;},null);