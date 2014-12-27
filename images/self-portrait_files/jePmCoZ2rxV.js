/*!CK:1028019161!*//*1413773232,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["\/gm6q"]); }

__d("XAYMTMultiTipAsyncClickControllerURIBuilder",["XControllerURIBuilder"],function(a,b,c,d,e,f){e.exports=b("XControllerURIBuilder").create("\/ads\/growth\/aymt\/multi_async_click\/",{tip_id:{type:"String",required:true},channel_id:{type:"String",required:true},target:{type:"String",required:true}});},null);
__d("AYMTMultiTipLogger",["Event","AsyncRequest","XAYMTMultiTipAsyncClickControllerURIBuilder","$","LoadingIndicator.react","React"],function(a,b,c,d,e,f,g,h,i,j,k,l){var m={init:function(n,o,p,q,r){g.listen(n,'click',function(event){if(r!==null)l.render(l.createElement(k,{size:"large",color:"white"}),j(r));var s=new i().setString('tip_id',o).setString('channel_id',p).setString('target',q).getURI();new h(s).send();});}};e.exports=m;},null);