/*!CK:2961875703!*//*1418989857,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["v2iJQ"]); }

__d("AdsAPICMFilterFields",[],function(a,b,c,d,e,f){e.exports={DESCRIPTION:"description",ID:"id",LEVEL:"level",NAME:"name",SETTINGS_ID:"settings_id",TIME_CREATED:"time_created",TIME_UPDATED:"time_updated"};},null);
__d("AdsAPIColumnPresetFields",[],function(a,b,c,d,e,f){e.exports={COLUMNS:"columns",COLUMN_ID:"column_id",ID:"id",NAME:"name",TIME_CREATED:"time_created",TIME_UPDATED:"time_updated",WIDTH:"width"};},null);
__d("AdsCMLegacyPageValues",[],function(a,b,c,d,e,f){e.exports={CONVERSION_TRACKING:"CONVERSION_TRACKING",SETTINGS:"SETTINGS",POWER_EDITOR:"POWER_EDITOR"};},null);
__d("GraphAPIFieldUtils",[],function(a,b,c,d,e,f){'use strict';var g={getFieldWithSubfields:function(h,i){if(Array.isArray(i))i={fields:i};i=Object.keys(i).map(function(j){var k=i[j];if(k!=null){var l=typeof k==='string'?k:JSON.stringify(k);return ("."+j+"("+l+")");}});return (h+i.join(''));}};e.exports=g;},null);
__d("AdsCMPaymentsFields",["AdsAPIAdAccountFields","GraphAPIFieldUtils"],function(a,b,c,d,e,f,g,h){'use strict';var i=[g.BALANCE,g.EXTENDED_CREDIT_INFO,g.EXTENDED_CREDIT_STATUS,g.IS_BR_ENTITY_ACCOUNT,g.HAS_EXTENDED_CREDIT,g.MAX_BILLING_THRESHOLD,g.MIN_BILLING_THRESHOLD,h.getFieldWithSubfields(g.BUSINESS_ENTITY,['id','name','payment_account_id'])];e.exports=i;},null);
__d("AdsCMGraphSetup",["GraphAPI","AdsCMConnectConfig","AdsCMLoggerActions","WebApiApplication"],function(a,b,c,d,e,f,g,h,i,j){'use strict';var k=false,l={setupGraph:function(){if(k)return;j.init(h.access_token,h.client_id);g.setErrorHandler(function(m){i.logAPIError(m);});k=true;}};e.exports=l;},null);
__d("AdsCMAccountStoreDataLoader",["AdsAPIAdAccountFields","AdsAPICMFilterFields","AdsAPIColumnPresetFields","AdsCFAccountFields","AdsCMPaymentsFields","AdsCMActionTypes","AdsCMGraphSetup","AdsCMLoggerActions","GraphAPI","Promise","PublicPromise","adsCMGKCheck"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r){'use strict';var s='lifetimeSpent',t='savedFilters',u='todaySpent',v='weekSpent',w='columnPresets',x=new q(),y=new q();m.setupGraph();function z(){return r('ads_cm_graph_api_2_2')?o('2.2'):o('1.0');}var aa={bootstrap:function(ja){x.resolve(ja);ba(ja);},fetch:function(){return x.then(function(){return y;});},fetchCreationAccountInfo:function(ja){return z().account(ja).get({fields:j});},fetchPaymentsAccountInfo:function(ja){return z().account(ja).get({fields:k});},fetchPrepayAccountBalance:function(ja){return z().account(ja).get({fields:[g.PREPAY_ACCOUNT_BALANCE]});}};function ba(ja){ia(ja).then(function(ka){n.log(l.ACCOUNT_DATA_LOADED,{});ka.accountInfo[u]=ka.accountStatsToday;ka.accountInfo[v]=ka.accountStatsWeek;ka.accountInfo[s]=ka.accountStatsLifetime;ka.accountInfo[t]=ka.savedFilters;ka.accountInfo[w]=ka.columnPresets;y.resolve({accountID:ja.accountID,accountName:ja.accountName,accountInfo:ka.accountInfo,accountUsers:ka.accountUsers.data,viewerPermissions:ja.viewerPermissions});},function(ka){n.logFatal(ka);y.reject(ka);});}function ca(ja){return z().account(ja).edge('users').get();}function da(ja){if(!ja)return p.resolve({});return z().object('user_settings',ja).edge('filters').get({fields:[h.DESCRIPTION,h.ID,h.LEVEL,h.NAME,h.SETTINGS_ID,h.TIME_CREATED,h.TIME_UPDATED]});}function ea(ja){if(!ja)return p.resolve({});return z().object('user_settings',ja).edge('column_presets').get({fields:[i.COLUMNS,i.ID,i.NAME,i.TIME_CREATED,i.TIME_UPDATED]});}function fa(ja,ka){var la,ma=(new Date()).setUTCHours(0,0,0,0)/1000;la=ma-ka.timezone_offset_hours_utc*3600;return z().account(ja).edge('stats').get({start_time:la});}function ga(ja,ka){var la,ma=(new Date()).setUTCHours(0,0,0,0)/1000;la=ma-ka.timezone_offset_hours_utc*3600-7*24*60*60;return z().account(ja).edge('stats').get({start_time:la});}function ha(ja){return z().account(ja).edge('stats').get();}function ia(ja){var ka=ja.accountInfo,la=ja.accountID,ma=null;if(ka.user_settings)ma=ka.user_settings.id;return p.allObject({accountInfo:ka,accountStatsLifetime:ha(la),accountStatsToday:fa(la,ka),accountStatsWeek:ga(la,ka),accountUsers:ca(la),columnPresets:ea(ma),savedFilters:da(ma),settingsID:ma});}e.exports=aa;},null);
__d("AdsCMPaymentsAccountDataDispatcher",["AdsAPIAdAccountFields","AdsCMAccountStoreDataLoader","AdsCMActionTypes","AdsDispatcher"],function(a,b,c,d,e,f,g,h,i,j){'use strict';function k(n){h.fetchPaymentsAccountInfo(n).done(function(o){j.handleUpdateFromServerResponse({actionType:i.PAYMENTS_ACCOUNT_INITED,data:{paymentInfo:o}});});}function l(n){h.fetchPrepayAccountBalance(n).done(function(o){j.handleUpdateFromServerResponse({actionType:i.PREPAY_BALANCE_LOADED,data:{prepayBalance:o[g.PREPAY_ACCOUNT_BALANCE]}});},function(o){j.handleUpdateFromServerResponse({actionType:i.PREPAY_BALANCE_LOADING_ERROR,data:{error:o}});});}var m={fetchInitialPaymentsAccountInfo:k,fetchPrepayAccountBalance:l};e.exports=m;},null);
__d("AdsLoadState",["keyMirror"],function(a,b,c,d,e,f,g){'use strict';var h=g({ERROR:null,LOADED:null,LOADING:null,NOT_LOADED:null,PENDING_WRITE:null});e.exports=h;},null);
__d("AdsCMAccountStore",["AdsAccountCapabilities","AdsAccountUtils","AdsAPIAdAccountFields","AdsBaseStore","AdsCMActionTypes","AdsCMPaymentsAccountDataDispatcher","FBDate","AdsDispatcher","AdsLoadState","DateUtil","GraphAPI","GraphAPIPaging","adsCMGKCheck","arrayContains","invariant"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){'use strict';var v,w,x,y,z,aa=false,ba=false,ca={loadingStatus:o.NOT_LOADED},da={loadingStatus:o.NOT_LOADED},ea,fa='lifetimeSpent',ga='todaySpent',ha='weekSpent',ia=-7,ja=1,ka=0,la=new m(p.FACEBOOK_EPOCH*1000,ka).toISOString();function ma(){return s('ads_cm_graph_api_2_2')?q('2.2'):q('1.0');}for(var na in j)if(j.hasOwnProperty(na))pa[na]=j[na];var oa=j===null?null:j.prototype;pa.prototype=Object.create(oa);pa.prototype.constructor=pa;pa.__superConstructor__=j;function pa(){if(j!==null)j.apply(this,arguments);}pa.prototype.getStoreName=function(){return 'AdsCMAccountStore';};pa.prototype.setAccountID=function(ua){v=ua;};pa.prototype.getAccountID=function(){return v;};pa.prototype.getAccountList=function(){if(x)return x;return [{account_id:this.getAccountID(),name:this.getAccountName()}];};pa.prototype.getAccountName=function(){return y;};pa.prototype.getCapabilities=function(){return w?w[i.CAPABILITIES]:null;};pa.prototype.getCurrency=function(){return w?w.currency:null;};pa.prototype.getCountryCode=function(){return w?w[i.BUSINESS_COUNTRY_CODE]:null;};pa.prototype.getHasBusinessAccounts=function(){return aa;};pa.prototype.getBusinessID=function(){return w?w.business:null;};pa.prototype.getTodaySpend=function(){return w?w[ga].spent:0;};pa.prototype.getWeekSpend=function(){return w?w[ha].spent:0;};pa.prototype.getLifetimeSpend=function(){return w?w[fa].spent:0;};pa.prototype.getMinDailyBudget=function(){return w?w.min_daily_budget:0;};pa.prototype.getOutstandingBalance=function(){var ua=this.getPaymentInfo();return ua?ua[i.BALANCE]:null;};pa.prototype.getHasExtendedCredit=function(){var ua=this.getPaymentInfo();return ua?ua[i.HAS_EXTENDED_CREDIT]:null;};pa.prototype.getExtendedCreditInfo=function(){var ua=this.getPaymentInfo();return ua?ua[i.EXTENDED_CREDIT_INFO]:null;};pa.prototype.getExtendedCreditStatus=function(){var ua=this.getPaymentInfo();return ua?ua[i.EXTENDED_CREDIT_STATUS]:null;};pa.prototype.getIsPrepayAccount=function(){return w?w[i.IS_PREPAY_ACCOUNT]:null;};pa.prototype.getMaxBillingThreshold=function(){var ua=this.getPaymentInfo();return ua?ua[i.MAX_BILLING_THRESHOLD]:null;};pa.prototype.getMinBillingThreshold=function(){var ua=this.getPaymentInfo();return ua?ua[i.MIN_BILLING_THRESHOLD]:null;};pa.prototype.getPrepayAccountBalance=function(){if(this.getIsPrepayAccount()===true&&da.loadingStatus===o.NOT_LOADED){l.fetchPrepayAccountBalance(this.getAccountID());da.loadingStatus=o.LOADING;}return da;};pa.prototype.getOwningBrandInfo=function(){var ua=this.getPaymentInfo();return ua?ua[i.BUSINESS_ENTITY]:null;};pa.prototype.getOwningBrandAccountID=function(){var ua=this.getOwningBrandInfo();return ua?ua.id:null;};pa.prototype.getOwningBrandName=function(){var ua=this.getOwningBrandInfo();return ua?ua.name:null;};pa.prototype.getOwningBrandPaymentAccountID=function(){var ua=this.getOwningBrandInfo();return ua?ua.payment_account_id:null;};pa.prototype.getCreatedTime=function(){if(!w)return null;return w.created_time?w.created_time:la;};pa.prototype.getMooDefaultConversionBid=function(){var ua=w[i.MOO_DEFAULT_CONVERSION_BID];u(ua);return ua;};pa.prototype.getIsBREntityAccount=function(){var ua=this.getPaymentInfo();return ua?ua[i.IS_BR_ENTITY_ACCOUNT]:false;};pa.prototype.getTimezoneID=function(){return w?w.timezone_id:ja;};pa.prototype.$AdsCMAccountStoreClass0=function(){return w?w.timezone_offset_hours_utc:ia;};pa.prototype.getUserPermissions=function(ua){return z&&z[ua]?z[ua].permissions:[];};pa.prototype.getViewerHasPermission=function(ua){return t(ea,ua);};pa.prototype.getCurrentUserSettings=function(){return w?w.user_settings:{};};pa.prototype.toURLParams=function(){if(!v)return null;var ua={};ua.act=v;return ua;};pa.prototype.getPaymentInfo=function(){if(ca.loadingStatus===o.LOADED)return ca.paymentInfo;if(ca.loadingStatus===o.NOT_LOADED){l.fetchInitialPaymentsAccountInfo(this.getAccountID());ca.loadingStatus=o.LOADING;}return null;};pa.prototype.isNewAdvertiser=function(){var ua=h.hasCapability(w,g.CAN_UPDATE_CURRENCY);if(!ua)return false;return !ba;};pa.prototype.onDispatchToken=function(ua){var va=ua.action,wa=va.data,xa=false;switch(va.actionType){case k.ACCOUNT_INIT:v=wa.accountID;y=wa.accountName;w=wa.accountInfo;ea=wa.viewerPermissions||[];sa(wa);z={};wa.accountUsers.forEach(function(ya){z[ya.id]=ya;});qa();m.setupTimezoneFallback(this.getTimezoneID(),this.$AdsCMAccountStoreClass0());xa=true;break;case k.ACCOUNT_LIST_LOADED:x=wa;ra();xa=true;break;case k.PAYMENTS_ACCOUNT_INITED:ca={loadingStatus:o.LOADED,paymentInfo:wa.paymentInfo};xa=true;break;case k.NEW_OBJECTS_CREATED:ba=true;break;case k.PREPAY_BALANCE_LOADED:da={loadingStatus:o.LOADED,prepayBalance:wa.prepayBalance};xa=true;break;case k.PREPAY_BALANCE_LOADING_ERROR:da={loadingStatus:o.ERROR,error:wa.error};xa=true;break;}if(xa)ta.inform('change');};function qa(){aa=false;var ua=[i.BUSINESS,i.CURRENCY,i.ID,i.NAME];if(w.business){aa=true;ma().object('brand',w.business).edge('adaccounts').get({brandID:w.business,fields:ua}).then(r.allPages()).done(function(va){n.handleUpdateFromServerResponse({actionType:k.ACCOUNT_LIST_LOADED,data:va.data});});}else ma().me().edge('adaccounts').get({fields:ua}).then(r.allPages()).done(function(va){var wa=va.data.filter(function(xa){return !xa.hasOwnProperty('business');});if(wa.length!==va.data.length)aa=true;n.handleUpdateFromServerResponse({actionType:k.ACCOUNT_LIST_LOADED,data:wa});});}function ra(){var ua=x.some(function(va){return va.account_id===v;});if(!ua)x.unshift({account_id:v,name:y});}function sa(ua){if(ua.accountInfo.user_settings)return;ma().account(ua.accountID).edge('user_settings').post().done(function(va){ua.accountInfo.user_settings={id:va.id,draft_mode_enabled:false};});}var ta=new pa();e.exports=ta;},null);
__d("AdsCMURI",["AdsCMAccountStore","AdsCMStateConfig","AdsCMURIUtil","AdsCMURLParams","URI"],function(a,b,c,d,e,f,g,h,i,j,k){'use strict';for(var l in k)if(k.hasOwnProperty(l))n[l]=k[l];var m=k===null?null:k.prototype;n.prototype=Object.create(m);n.prototype.constructor=n;n.__superConstructor__=k;function n(o){k.call(this,i.BASE_PATH);this.$AdsCMURI0={};this.$AdsCMURI1(h.getKey('PAGE'),o);this.setAccountID(g.getAccountID());}n.prototype.setAccountID=function(o){this.$AdsCMURI1(h.getKey('ACCOUNT_ID'),o);return this;};n.prototype.setCurrentIDs=function(o){this.$AdsCMURI1(h.getKey('CURRENT_IDS'),o);return this;};n.prototype.setTab=function(o){this.$AdsCMURI1(h.getKey('TAB'),o);return this;};n.prototype.setTransactionDetails=function(o,p){this.$AdsCMURI1(h.getKey('TRANSACTION_ID'),o);this.$AdsCMURI1(h.getKey('TRANSACTION_TYPE'),p);return this;};n.prototype.getStateData=function(){return this.$AdsCMURI0;};n.prototype.$AdsCMURI1=function(o,p){this.$AdsCMURI0[o]=p;var q=h.getURLParamKey(o);if(!q)return;var r=p;if(q===j.CURRENT_IDS)r=p.join(',');var s=i.getParamsFromURI(this);s[q]=r;var t=g.getAccountID(),u=i.getURIFromQueryData(s,t);this.setPath(u.getPath());this.setQueryData(u.getQueryData());};e.exports=n;},null);
__d("AdsCMAudiencesURI",["AdsCMStateConfig","AdsCMURI"],function(a,b,c,d,e,f,g,h){var i=g.PAGE.values;for(var j in h)if(h.hasOwnProperty(j))l[j]=h[j];var k=h===null?null:h.prototype;l.prototype=Object.create(k);l.prototype.constructor=l;l.__superConstructor__=h;function l(){"use strict";h.call(this,i.AUDIENCES_PAGE);}e.exports=l;},null);
__d("AdsCMBillingURI",["AdsCMStateConfig","AdsCMURI"],function(a,b,c,d,e,f,g,h){var i=g.PAGE.values;for(var j in h)if(h.hasOwnProperty(j))l[j]=h[j];var k=h===null?null:h.prototype;l.prototype=Object.create(k);l.prototype.constructor=l;l.__superConstructor__=h;function l(){"use strict";h.call(this,i.BILLING_PAGE);}e.exports=l;},null);
__d("AdsCMDataSourceURI",["AdsCMStateConfig","AdsCMURI"],function(a,b,c,d,e,f,g,h){'use strict';var i=g.PAGE.values;for(var j in h)if(h.hasOwnProperty(j))l[j]=h[j];var k=h===null?null:h.prototype;l.prototype=Object.create(k);l.prototype.constructor=l;l.__superConstructor__=h;function l(){h.call(this,i.DATA_SOURCE_PAGE);}e.exports=l;},null);
__d("AdsCMHomeURI",["AdsCMURI","AdsCMStateConfig"],function(a,b,c,d,e,f,g,h){var i=h.PAGE.values;for(var j in g)if(g.hasOwnProperty(j))l[j]=g[j];var k=g===null?null:g.prototype;l.prototype=Object.create(k);l.prototype.constructor=l;l.__superConstructor__=g;function l(){"use strict";g.call(this,i.HOME_PAGE);}e.exports=l;},null);
__d("AdsCMObjectUtils",["AdsObjectTypes","AdsObjectUtils","AdsCMStateConfig","invariant"],function(a,b,c,d,e,f,g,h,i,j){'use strict';var k=i.PAGE.values,l=i.TAB.values,m={getObjectTypeFromTab:function(n){switch(n){case l.OVERVIEW_ACCOUNT_TAB:return g.ACCOUNT;case l.OVERVIEW_CAMPAIGN_GROUP_TAB:case l.CAMPAIGN_GROUP_TAB:return g.CAMPAIGN_GROUP;case l.OVERVIEW_CAMPAIGN_TAB:case l.CAMPAIGN_TAB:return g.CAMPAIGN;case l.OVERVIEW_ADGROUP_TAB:case l.ADGROUP_TAB:return g.ADGROUP;}return null;},getObjectTypeFromPage:function(n){switch(n){case k.CREATION_PAGE:case k.HOME_PAGE:return g.ACCOUNT;case k.CAMPAIGN_GROUP_PAGE:return g.CAMPAIGN_GROUP;case k.CAMPAIGN_PAGE:return g.CAMPAIGN;case k.ADGROUP_PAGE:return g.ADGROUP;}j(false);},getPageForObjectType:function(n){switch(n){case g.ACCOUNT:return k.HOME_PAGE;case g.CAMPAIGN_GROUP:return k.CAMPAIGN_GROUP_PAGE;case g.CAMPAIGN:return k.CAMPAIGN_PAGE;case g.ADGROUP:return k.ADGROUP_PAGE;}j(false);},getParentObjectType:function(n,o){switch(o){case l.CAMPAIGN_GROUP_TAB:case l.CAMPAIGN_TAB:case l.ADGROUP_TAB:return this.getObjectTypeFromPage(n);case l.OVERVIEW_CAMPAIGN_GROUP_TAB:return g.ACCOUNT;case l.OVERVIEW_CAMPAIGN_TAB:return g.CAMPAIGN_GROUP;case l.OVERVIEW_ADGROUP_TAB:return g.CAMPAIGN;case l.OVERVIEW_ACCOUNT_TAB:return g.BUSINESS_ACCOUNT;}j(false);},fromAPIFieldName:function(n){switch(n){case 'campaign_group_id':return g.CAMPAIGN_GROUP;case 'campaign_id':return g.CAMPAIGN;case 'adgroup_id':return g.ADGROUP;default:return null;}},toAPIFieldName:function(n){switch(n){case g.CAMPAIGN_GROUP:return 'campaign_group_id';case g.CAMPAIGN:return 'campaign_id';case g.ADGROUP:return 'adgroup_id';default:return null;}}};e.exports=Object.assign({},h,m);},null);
__d("adsCMGenerateHash",[],function(a,b,c,d,e,f){'use strict';function g(h){var i=JSON.stringify(h),j=0;if(i.length===0)return j;for(var k=0;k<i.length;k++){j=j*31+i.charCodeAt(k);j=j&j;}return j.toString(36);}e.exports=g;},null);
__d("adsCMGetBasePage",["AdsCMPageValues"],function(a,b,c,d,e,f,g){'use strict';function h(i){switch(i){case g.HOME_PAGE:case g.AUDIENCES_PAGE:case g.BILLING_PAGE:case g.DATA_SOURCE_PAGE:return null;case g.BILLING_DETAIL_PAGE:return g.BILLING_PAGE;}return g.HOME_PAGE;}e.exports=h;},null);
__d("adsCMIsBasePage",["adsCMGetBasePage"],function(a,b,c,d,e,f,g){'use strict';function h(i){return g(i)===null;}e.exports=h;},null);
__d("AdsCMPageStore",["AdsBaseStore","AdsCMAccountStore","AdsCMActionCategories","AdsCMActionTypes","AdsCMObjectUtils","AdsCMStateConfig","AdsCMTabValues","AdsCMURIUtil","AdsCMURLParams","ImmutableObject","URI","adsCMGenerateHash","adsCMGetBasePage","adsCMIsBasePage","createObjectFrom","invariant"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){'use strict';var w=l.getKey,x=l.PAGE.values,y=l.TAB.values,z='~',aa='p';for(var ba in g)if(g.hasOwnProperty(ba))da[ba]=g[ba];var ca=g===null?null:g.prototype;da.prototype=Object.create(ca);da.prototype.constructor=da;da.__superConstructor__=g;function da(){g.call(this);this.$AdsCMPageStoreClass0=0;this.$AdsCMPageStoreClass1={};this.$AdsCMPageStoreClass2={};this.$AdsCMPageStoreClass3=null;this.$AdsCMPageStoreClass4={};}da.prototype.getStoreName=function(){return 'AdsCMPageStore';};da.prototype.getPageURLParams=function(){return this.$AdsCMPageStoreClass4;};da.prototype.$AdsCMPageStoreClass5=function(fa,ga,ha,ia,ja,ka){if(fa===x.CREATION_PAGE)Object.keys(this.$AdsCMPageStoreClass1).some(function(va){var wa=this.$AdsCMPageStoreClass1[va];if(wa[w('PAGE')]===x.CREATION_PAGE){na=va;return true;}}.bind(this));if(ga&&ga.length===1){var la=ga[0],ma=this.$AdsCMPageStoreClass1[this.getCurrentPageID()];if(ma.PAGE===fa&&ma.CURRENT_IDS[0]===la&&ma.CURRENT_IDS.length===1)return ma.PAGE_ID;}var na=aa+(++this.$AdsCMPageStoreClass0),oa={};oa[w('PAGE_ID')]=na;oa[w('PAGE')]=fa;oa[w('CURRENT_IDS')]=ga;oa[w('CAMPAIGN_GROUP')]=ha;oa[w('CAMPAIGN')]=ia;oa[w('OBJECTIVE')]=ja;oa[w('TARGETING_SPEC')]=ka;var pa=this.$AdsCMPageStoreClass6(oa),qa={};for(var ra in m){var sa=m[ra],ta=pa+z+sa;qa[sa]=ta;var ua={};ua[w('TAB')]=sa;ua[w('PAGE_ID')]=na;this.$AdsCMPageStoreClass2[ta]=ua;}oa[w('TAB_HASHES')]=qa;this.$AdsCMPageStoreClass1[na]=new p(oa);return na;};da.prototype.$AdsCMPageStoreClass7=function(fa,ga){return (!fa||fa[w('PAGE')]!==ga[w('PAGE')]||fa[w('CURRENT_IDS')]!==ga[w('CURRENT_IDS')]);};da.prototype.$AdsCMPageStoreClass6=function(fa){var ga=[];ga.push(fa[w('PAGE_ID')]);ga.push(fa[w('PAGE')]);if(fa[w('CURRENT_IDS')])ga.push(r(fa[w('CURRENT_IDS')]));return ga.join(z);};da.prototype.getPageProp=function(fa,ga){return this.$AdsCMPageStoreClass1[ga][fa];};da.prototype.getCurrentIDs=function(fa){return this.getPageProp(w('CURRENT_IDS'),fa);};da.prototype.getPage=function(fa){return this.getPageProp(w('PAGE'),fa);};da.prototype.getCampaignGroup=function(fa){return this.getPageProp(w('CAMPAIGN_GROUP'),fa);};da.prototype.getCampaign=function(fa){return this.getPageProp(w('CAMPAIGN'),fa);};da.prototype.getObjective=function(fa){return this.getPageProp(w('OBJECTIVE'),fa);};da.prototype.getTargetingSpec=function(fa){return this.getPageProp(w('TARGETING_SPEC'),fa);};da.prototype.getHashForTab=function(fa,ga){return this.$AdsCMPageStoreClass1[fa][w('TAB_HASHES')][ga];};da.prototype.getAllTabHashesForPage=function(fa){var ga=this.$AdsCMPageStoreClass1[fa][w('TAB_HASHES')];return Object.keys(ga).map(function(ha){return ga[ha];});};da.prototype.getTabFromHash=function(fa){return this.$AdsCMPageStoreClass2[fa][w('TAB')];};da.prototype.getPageIDFromTabHash=function(fa){return this.$AdsCMPageStoreClass2[fa][w('PAGE_ID')];};da.prototype.getCurrentPageID=function(){return this.$AdsCMPageStoreClass8;};da.prototype.getHashForCampaignGroupTab=function(fa){return ea.getHashForTab(fa,y.CAMPAIGN_GROUP_TAB);};da.prototype.getHashForCampaignTab=function(fa){return ea.getHashForTab(fa,y.CAMPAIGN_TAB);};da.prototype.getHashForAdgroupTab=function(fa){return ea.getHashForTab(fa,y.ADGROUP_TAB);};da.prototype.isFirstPage=function(){return this.$AdsCMPageStoreClass3===this.getCurrentPageID();};da.prototype.toURLParams=function(fa){var ga={};ga[o.PAGE]=ea.getPage(fa);ga[o.PAGE_ID]=fa;var ha=ea.getCurrentIDs(fa);if(ha)ga[o.CURRENT_IDS]=ha.join(',');var ia=ea.getCampaignGroup(fa);if(ia)ga[o.CAMPAIGN]=ia;var ja=ea.getCampaign(fa);if(ja)ga[o.AD_SET]=ja;var ka=ea.getObjective(fa);if(ka)ga[o.OBJECTIVE]=ka;var la=ea.getTargetingSpec(fa);if(la)ga[o.TARGETING_SPEC]=la;return ga;};da.prototype.fromURLParams=function(fa){var ga={},ha=n.getParamsFromURI(fa);if(!ha[o.PAGE])return (void 0);ga[w('PAGE')]=ha[o.PAGE];ga[w('PAGE_ID')]=ha[o.PAGE_ID];var ia=ha[o.CURRENT_IDS];if(ia)if(typeof ia==='string'){ga[w('CURRENT_IDS')]=ia.split(',');}else v(false);var ja=ha[o.CAMPAIGN];if(ja)ga[w('CAMPAIGN_GROUP')]=ja;var ka=ha[o.AD_SET];if(ka)ga[w('CAMPAIGN')]=ka;var la=ha[o.OBJECTIVE];if(la)ga[w('OBJECTIVE')]=la;var ma=ha[o.TARGETING_SPEC];if(ma)ga[w('TARGETING_SPEC')]=ma;return ga;};da.prototype.getPageObjectType=function(fa){var ga=ea.getPage(fa);return k.getObjectTypeFromPage(ga);};da.prototype.getPageIDsFromCurrentIDs=function(fa){var ga=[],ha=u(fa);Object.keys(this.$AdsCMPageStoreClass1).forEach(function(ia){var ja=this.$AdsCMPageStoreClass1[ia].CURRENT_IDS||[];ja.some(function(ka){if(ha[ka]){ga.push(ia);return true;}});}.bind(this));return ga;};da.prototype.onDispatchToken=function(fa){var ga=fa.action,ha=ga.data||{},ia,ja;if(ga.category!==i.STATE_CHANGE)return;switch(ga.actionType){case j.INITIAL_PAGE_STATE:var ka;if(ha.pageType&&t(ha.pageType)){ia=this.$AdsCMPageStoreClass5(ha.pageType);}else if(h.isNewAdvertiser()){ka=x.CREATION_PAGE;var la=new q(window.location.href);ja=ea.fromURLParams(la)||{};ia=this.$AdsCMPageStoreClass5(x.CREATION_PAGE,ja[w('CURRENT_IDS')],ja[w('CAMPAIGN_GROUP')],ja[w('CAMPAIGN')],ja[w('OBJECTIVE')],ja[w('TARGETING_SPEC')]);}else{var ma=ha.pageType?s(ha.pageType):l[w('PAGE')].defaultValue;ia=this.$AdsCMPageStoreClass5(ma);}this.$AdsCMPageStoreClass3=ia;this.$AdsCMPageStoreClass4=n.getInitialLoadQueryData();break;case j.PAGE_CHANGE:ja=ha.state;ia=this.$AdsCMPageStoreClass5(ja[w('PAGE')],ja[w('CURRENT_IDS')],ja[w('CAMPAIGN_GROUP')],ja[w('CAMPAIGN')]);this.$AdsCMPageStoreClass4=n.getParamsForCurrentURI();break;case j.INIT_FROM_URL:ja=ea.fromURLParams(ha.uri);var na=this.$AdsCMPageStoreClass1[this.$AdsCMPageStoreClass8];if(ja&&this.$AdsCMPageStoreClass7(na,ja)){var oa=ha.current_ids?ha.current_ids:ja[w('CURRENT_IDS')];ia=this.$AdsCMPageStoreClass5(ja[w('PAGE')],oa,ja[w('CAMPAIGN_GROUP')],ja[w('CAMPAIGN')],ja[w('OBJECTIVE')],ja[w('TARGETING_SPEC')]);this.$AdsCMPageStoreClass3=ia;}break;case j.HISTORY_JUMP:case j.BACK_FORWARD_PRESSED:ia=ea.getPageIDFromTabHash(ha.tabHash);this.$AdsCMPageStoreClass3=null;break;}if(ia)this.$AdsCMPageStoreClass8=ia;};da.prototype.setPageID=function(fa){this.$AdsCMPageStoreClass8=fa;};da.prototype.debug=function(){return {$AdsCMPageStoreClass1:this.$AdsCMPageStoreClass1};};var ea=new da();e.exports=ea;},null);
__d("XAdsCMConversionTrackingControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/ads\/manager\/measurement\/conversion_tracking\/",{act:{type:"Int"},page:{type:"Int"}});},null);
__d("AdsCMChromeTopNav.react",["AdsCMAudiencesURI","AdsCMBillingURI","AdsCMDataSourceURI","AdsCMHomeURI","AdsCMLegacyPageValues","AdsCMNavigationBlocker","AdsCMPageStore","AdsCMPageValues","AdsCMStateActions","AdsCMURLParams","BusinessURI.brands","Image.react","React","ReactComponentWithPureRenderMixin","URI","XAdsCMAccountSettingsPageControllerURIBuilder","XAdsCMConversionTrackingControllerURIBuilder","XUIPageNavigation.react","cx","fbt","goURI","xuiglyph"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,aa,ba){'use strict';var ca=x.Group,da=x.Item,ea={},fa=s.createClass({displayName:"AdsCMChromeTopNav",mixins:[t],propTypes:{accountID:s.PropTypes.string,activeTabKey:s.PropTypes.string.isRequired,caretColor:s.PropTypes.oneOf(['white','gray']),pages:s.PropTypes.array.isRequired},onTabClick:function(ga,event){if(event.metaKey||event.ctrlKey||event.button===1)return;event.preventDefault();if(l.hasBlocker()){l.callBlocker(function(){return this._handleTabClick(ga);}.bind(this));}else this._handleTabClick(ga);},_handleTabClick:function(ga){if(ga===this.props.activeTabKey)return;var ha=this._getPageTypeData(ga).uri;if(ga in k||this.props.activeTabKey in k){aa(q(ha));}else{var ia=ha.getStateData();o.navigateToPage(ia,m.getPage(m.getCurrentPageID()));}},_getPageTypeData:function(ga){var ha=this.props.accountID;if(!ea[ha])ea[ha]={};var ia=ea[ha],ja,ka;if(!ia[ga]){switch(ga){case n.HOME_PAGE:ka=new j().setAccountID(ha);ja=s.createElement(da,{href:this._maybeAddRedirect(ka),key:n.HOME_PAGE},"Manage Ads");break;case n.AUDIENCES_PAGE:ka=new g().setAccountID(ha);ja=s.createElement(da,{href:this._maybeAddRedirect(ka),key:n.AUDIENCES_PAGE},"Audiences");break;case n.DATA_SOURCE_PAGE:ka=new i().setAccountID(ha);ja=s.createElement(da,{href:this._maybeAddRedirect(ka),key:n.DATA_SOURCE_PAGE},"Data Sources");break;case k.CONVERSION_TRACKING:ka=new w().setInt(p.ACCOUNT_ID,ha).getURI();ja=s.createElement(da,{href:this._maybeAddRedirect(ka),key:k.CONVERSION_TRACKING},"Measurement");break;case k.SETTINGS:ka=new v().setInt(p.ACCOUNT_ID,ha).getURI();ja=s.createElement(da,{href:this._maybeAddRedirect(ka),key:k.SETTINGS},"Account Settings");break;case n.BILLING_PAGE:ka=new h().setAccountID(ha);ja=s.createElement(da,{href:this._maybeAddRedirect(ka),key:n.BILLING_PAGE},"Billing");break;case k.POWER_EDITOR:ka=u('/ads/manage/powereditor/');ja=s.createElement(da,{href:this._maybeAddRedirect(ka),key:k.POWER_EDITOR},"Power Editor",s.createElement(r,{className:"_52s_",src:ba('leave')}));break;}ia[ga]={uri:ka,tab:ja};}return ia[ga];},_maybeAddRedirect:function(ga){var ha=u.getMostRecentURI().getQueryData()[p.NO_REDIRECT];if(ha)ga.addQueryData(p.NO_REDIRECT,true);return ga;},_getCaretColor:function(){switch(this.props.caretColor){case 'white':return 'white';case 'gray':return 'fbui-desktop-background-light';}return null;},render:function(){var ga=this._getCaretColor(),ha=(("_42tn")+(!!ga?' '+"_s_f":'')),ia=ga?x.Indicator.Caret:x.Indicator.BlueBar,ja=this.props.pages.map(function(ka){return this._getPageTypeData(ka).tab;}.bind(this));return (s.createElement("div",{className:ha},s.createElement(x,{activeTabKey:this.props.activeTabKey,onTabClick:this.onTabClick,caretColor:ga,selectedIndicator:ia,size:"medium"},s.createElement(ca,{maxTabsVisible:10},ja))));}});e.exports=fa;},null);