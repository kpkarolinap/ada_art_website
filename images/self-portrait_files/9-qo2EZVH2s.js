/*!CK:4290831538!*//*1418636225,*/

if (self.CavalryLogger) { CavalryLogger.start_js(["4wzen"]); }

__d("FBDate",["formatDate","invariant","parseISODate"],function(a,b,c,d,e,f,g,h,i){'use strict';var j=0,k=1,l={};l[j]=[{offset:0,ts:0}];var m={};m[k]=-7;n.setupTimezone=function(p,q){h(q.length>0);if(!(l.hasOwnProperty(p)))l[p]=q;};n.setupTimezoneFallback=function(p,q){m[p]=q;};n.createFromISOString=function(p,q){var r=i(p);return new n(r,q);};n.now=function(p){return new n(new Date(),p);};function n(p,q){this.$FBDate0=new Date(p);this.$FBDate0.setUTCMilliseconds(0);this.$FBDate1=q;this.$FBDate2();}n.prototype.getTimezoneID=function(){return this.$FBDate1;};n.prototype.update=function(p,q,r,s,t,u){h(p>=-10000&&p<=10000);h(q>=1&&q<=12);h(r>=1&&r<=31);h(s==null||s>=0&&s<=23);h(t==null||t>=0&&t<=59);h(u==null||u>=0&&u<=59);return this.$FBDate3(p,q,r,s,t,u);};n.prototype.setYear=function(p){return this.update(p,this.getMonth(),this.getDayOfMonth());};n.prototype.setMonth=function(p){return this.update(this.getYear(),p,this.getDayOfMonth());};n.prototype.setDayOfMonth=function(p){return this.update(this.getYear(),this.getMonth(),p);};n.prototype.setDayOfWeek=function(p){h(p>=0&&p<=6);return this.addDays(p-this.getDayOfWeek());};n.prototype.setHours=function(p){return this.update(this.getYear(),this.getMonth(),this.getDayOfMonth(),p);};n.prototype.setMinutes=function(p){return this.update(this.getYear(),this.getMonth(),this.getDayOfMonth(),this.getHours(),p);};n.prototype.setSeconds=function(p){return this.update(this.getYear(),this.getMonth(),this.getDayOfMonth(),this.getHours(),this.getMinutes(),p);};n.prototype.addYears=function(p){return this.$FBDate3(this.getYear()+p,this.getMonth(),this.getDayOfMonth());};n.prototype.addMonths=function(p){return this.$FBDate3(this.getYear(),this.getMonth()+p,this.getDayOfMonth());};n.prototype.addDays=function(p){return this.$FBDate3(this.getYear(),this.getMonth(),this.getDayOfMonth()+p);};n.prototype.startOfYear=function(){return this.update(this.getYear(),1,1,0,0,0);};n.prototype.startOfMonth=function(){return this.update(this.getYear(),this.getMonth(),1,0,0,0);};n.prototype.startOfDay=function(){return this.update(this.getYear(),this.getMonth(),this.getDayOfMonth(),0,0,0);};n.prototype.setTimezoneID=function(p){return new n(this.valueOf(),p);};n.prototype.getDayOfMonth=function(){return this.$FBDate2().getUTCDate();};n.prototype.getDayOfWeek=function(){return this.$FBDate2().getUTCDay();};n.prototype.getYear=function(){return this.$FBDate2().getUTCFullYear();};n.prototype.getHours=function(){return this.$FBDate2().getUTCHours();};n.prototype.getMinutes=function(){return this.$FBDate2().getUTCMinutes();};n.prototype.getMonth=function(){return this.$FBDate2().getUTCMonth()+1;};n.prototype.getSeconds=function(){return this.$FBDate2().getUTCSeconds();};n.prototype.getEquivalentInTimezone=function(p){var q=new n(this.valueOf(),p);return q.update(this.getYear(),this.getMonth(),this.getDayOfMonth(),this.getHours(),this.getMinutes(),this.getSeconds());};n.prototype.getEquivalentInUTC=function(){return this.getEquivalentInTimezone(0);};n.prototype.format=function(p,q){q=q||{};q.utc=true;return g(this.$FBDate2(),p,q);};n.prototype.toString=function(){var p='Y-m-dTH:i:s',q={skipPatternLocalization:true,utc:true},r=g(this.$FBDate2(),p,q);return r+this.$FBDate4();};n.prototype.toISOString=function(){return this.toString();};n.prototype.toJSON=function(){return this.toString();};n.prototype.addHours=function(p){var q=new Date(this.$FBDate0);q.setUTCHours(q.getUTCHours()+p);return new n(q,this.$FBDate1);};n.prototype.addMinutes=function(p){var q=new Date(this.$FBDate0);q.setUTCMinutes(q.getUTCMinutes()+p);return new n(q,this.$FBDate1);};n.prototype.addSeconds=function(p){var q=new Date(this.$FBDate0);q.setUTCSeconds(q.getUTCSeconds()+p);return new n(q,this.$FBDate1);};n.prototype.valueOf=function(){return this.$FBDate0.valueOf();};n.prototype.getUnixTimestamp=function(){return this.valueOf();};n.prototype.toDate=function(){return new Date(this.getUnixTimestamp());};n.prototype.getUnixTimestampSeconds=function(){return Math.floor(this.getUnixTimestamp()/1000);};n.prototype.isEqual=function(p){return this.getUnixTimestamp()===p.getUnixTimestamp();};n.prototype.secondsUntil=function(p){return p.getUnixTimestampSeconds()-this.getUnixTimestampSeconds();};n.prototype.$FBDate5=function(p){p/=1000;var q=l[this.$FBDate1],r=0,s=q.length-1;h(p>=q[r].ts);if(p>=q[s].ts)return s;while(r<s-1){var t=Math.floor((r+s)/2);if(p>=q[t].ts){r=t;}else s=t;}return r;};n.prototype.$FBDate6=function(p){var q=l[this.$FBDate1];if(!q){var r=m[this.$FBDate1]||0;return new Date(p.getTime()-r*60*60*1000);}var s=p.getTime()-24*3600*1000,t=this.$FBDate5(s),u=p.getTime()/1000;for(;t<q.length-1;++t)if(u+q[t].offset*60<q[t+1].ts){return new Date(p.getTime()+q[t].offset*60*1000);}else if(u+q[t+1].offset*60<q[t+1].ts)return new Date(q[t+1].ts*1000);return new Date(p.getTime()+q[q.length-1].offset*60*1000);};n.prototype.$FBDate7=function(p){if(p==null)p=this.getUnixTimestamp();var q=l[this.$FBDate1];if(!q){var r=m[this.$FBDate1]||0;return -r*60;}var s=this.$FBDate5(p);return q[s].offset;};n.prototype.$FBDate2=function(){if(this.$FBDate8)return this.$FBDate8;var p=new Date(this.$FBDate0.getTime());p.setUTCMinutes(p.getUTCMinutes()-this.$FBDate7());this.$FBDate8=p;return p;};n.prototype.$FBDate3=function(p,q,r,s,t,u){var v=new Date(this.$FBDate2());v.setUTCFullYear(p,q-1,r);s!=null&&v.setUTCHours(s);t!=null&&v.setUTCMinutes(t);u!=null&&v.setUTCSeconds(u);var w=this.$FBDate6(v);return new n(w,this.$FBDate1);};n.prototype.$FBDate4=function(){var p=this.$FBDate7(),q=p>0;p=p>=0?p:-p;var r=Math.floor(p/60),s=p%60;return (q?'-':'+')+o(r)+':'+o(s);};function o(p){return ('0'+p).substr(-2);}e.exports=n;},null);