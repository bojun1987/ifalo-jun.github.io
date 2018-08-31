!function(t,e){"use strict";var i={},s=t.document,n=t.GreenSockGlobals=t.GreenSockGlobals||t;if(!n.TweenLite){var r,a,o,l,h,_=function(t){var e,i=t.split("."),s=n;for(e=0;e<i.length;e++)s[i[e]]=s=s[i[e]]||{};return s},u=_("com.greensock"),f=function(t){var e,i=[],s=t.length;for(e=0;e!==s;i.push(t[e++]));return i},c=function(){},p=function(){var t=Object.prototype.toString,e=t.call([]);return function(i){return null!=i&&(i instanceof Array||"object"==typeof i&&!!i.push&&t.call(i)===e)}}(),m={},d=function(e,s,r,a){this.sc=m[e]?m[e].sc:[],m[e]=this,this.gsClass=null,this.func=r;var o=[];this.check=function(l){for(var h,u,f,c,p=s.length,v=p;--p>-1;)(h=m[s[p]]||new d(s[p],[])).gsClass?(o[p]=h.gsClass,v--):l&&h.sc.push(this);if(0===v&&r){if(u=("com.greensock."+e).split("."),f=u.pop(),c=_(u.join("."))[f]=this.gsClass=r.apply(r,o),a)if(n[f]=i[f]=c,"undefined"!=typeof module&&module.exports)if("TweenLite"===e){module.exports=i.TweenLite=c;for(p in i)c[p]=i[p]}else i.TweenLite&&(i.TweenLite[f]=c);else"function"==typeof define&&define.amd&&define((t.GreenSockAMDPath?t.GreenSockAMDPath+"/":"")+e.split(".").pop(),[],function(){return c});for(p=0;p<this.sc.length;p++)this.sc[p].check()}},this.check(!0)},v=t._gsDefine=function(t,e,i,s){return new d(t,e,i,s)},g=u._class=function(t,e,i){return e=e||function(){},v(t,[],function(){return e},i),e};v.globals=n;var T=[0,0,1,1],y=g("easing.Ease",function(t,e,i,s){this._func=t,this._type=i||0,this._power=s||0,this._params=e?T.concat(e):T},!0),w=y.map={},P=y.register=function(t,e,i,s){for(var n,r,a,o,l=e.split(","),h=l.length,_=(i||"easeIn,easeOut,easeInOut").split(",");--h>-1;)for(r=l[h],n=s?g("easing."+r,null,!0):u.easing[r]||{},a=_.length;--a>-1;)o=_[a],w[r+"."+o]=w[o+r]=n[o]=t.getRatio?t:t[o]||new t};for((o=y.prototype)._calcEnd=!1,o.getRatio=function(t){if(this._func)return this._params[0]=t,this._func.apply(null,this._params);var e=this._type,i=this._power,s=1===e?1-t:2===e?t:t<.5?2*t:2*(1-t);return 1===i?s*=s:2===i?s*=s*s:3===i?s*=s*s*s:4===i&&(s*=s*s*s*s),1===e?1-s:2===e?s:t<.5?s/2:1-s/2},a=(r=["Linear","Quad","Cubic","Quart","Quint,Strong"]).length;--a>-1;)o=r[a]+",Power"+a,P(new y(null,null,1,a),o,"easeOut",!0),P(new y(null,null,2,a),o,"easeIn"+(0===a?",easeNone":"")),P(new y(null,null,3,a),o,"easeInOut");w.linear=u.easing.Linear.easeIn,w.swing=u.easing.Quad.easeInOut;var b=g("events.EventDispatcher",function(t){this._listeners={},this._eventTarget=t||this});(o=b.prototype).addEventListener=function(t,e,i,s,n){n=n||0;var r,a,o=this._listeners[t],_=0;for(this!==l||h||l.wake(),null==o&&(this._listeners[t]=o=[]),a=o.length;--a>-1;)(r=o[a]).c===e&&r.s===i?o.splice(a,1):0===_&&r.pr<n&&(_=a+1);o.splice(_,0,{c:e,s:i,up:s,pr:n})},o.removeEventListener=function(t,e){var i,s=this._listeners[t];if(s)for(i=s.length;--i>-1;)if(s[i].c===e)return void s.splice(i,1)},o.dispatchEvent=function(t){var e,i,s,n=this._listeners[t];if(n)for((e=n.length)>1&&(n=n.slice(0)),i=this._eventTarget;--e>-1;)(s=n[e])&&(s.up?s.c.call(s.s||i,{type:t,target:i}):s.c.call(s.s||i))};var k=t.requestAnimationFrame,S=t.cancelAnimationFrame,A=Date.now||function(){return(new Date).getTime()},x=A();for(a=(r=["ms","moz","webkit","o"]).length;--a>-1&&!k;)k=t[r[a]+"RequestAnimationFrame"],S=t[r[a]+"CancelAnimationFrame"]||t[r[a]+"CancelRequestAnimationFrame"];g("Ticker",function(t,e){var i,n,r,a,o,_=this,u=A(),f=!(!1===e||!k)&&"auto",p=500,m=33,d=function(t){var e,s,l=A()-x;l>p&&(u+=l-m),x+=l,_.time=(x-u)/1e3,e=_.time-o,(!i||e>0||!0===t)&&(_.frame++,o+=e+(e>=a?.004:a-e),s=!0),!0!==t&&(r=n(d)),s&&_.dispatchEvent("tick")};b.call(_),_.time=_.frame=0,_.tick=function(){d(!0)},_.lagSmoothing=function(t,e){if(!arguments.length)return p<1e10;p=t||1e10,m=Math.min(e,p,0)},_.sleep=function(){null!=r&&(f&&S?S(r):clearTimeout(r),n=c,r=null,_===l&&(h=!1))},_.wake=function(t){null!==r?_.sleep():t?u+=-x+(x=A()):_.frame>10&&(x=A()-p+5),n=0===i?c:f&&k?k:function(t){return setTimeout(t,1e3*(o-_.time)+1|0)},_===l&&(h=!0),d(2)},_.fps=function(t){if(!arguments.length)return i;a=1/((i=t)||60),o=this.time+a,_.wake()},_.useRAF=function(t){if(!arguments.length)return f;_.sleep(),f=t,_.fps(i)},_.fps(t),setTimeout(function(){"auto"===f&&_.frame<5&&"hidden"!==s.visibilityState&&_.useRAF(!1)},1500)}),(o=u.Ticker.prototype=new u.events.EventDispatcher).constructor=u.Ticker;var R=g("core.Animation",function(t,e){if(this.vars=e=e||{},this._duration=this._totalDuration=t||0,this._delay=Number(e.delay)||0,this._timeScale=1,this._active=!0===e.immediateRender,this.data=e.data,this._reversed=!0===e.reversed,H){h||l.wake();var i=this.vars.useFrames?K:H;i.add(this,i._time),this.vars.paused&&this.paused(!0)}});l=R.ticker=new u.Ticker,(o=R.prototype)._dirty=o._gc=o._initted=o._paused=!1,o._totalTime=o._time=0,o._rawPrevTime=-1,o._next=o._last=o._onUpdate=o._timeline=o.timeline=null,o._paused=!1;var C=function(){h&&A()-x>2e3&&("hidden"!==s.visibilityState||!l.lagSmoothing())&&l.wake();var t=setTimeout(C,2e3);t.unref&&t.unref()};C(),o.play=function(t,e){return null!=t&&this.seek(t,e),this.reversed(!1).paused(!1)},o.pause=function(t,e){return null!=t&&this.seek(t,e),this.paused(!0)},o.resume=function(t,e){return null!=t&&this.seek(t,e),this.paused(!1)},o.seek=function(t,e){return this.totalTime(Number(t),!1!==e)},o.restart=function(t,e){return this.reversed(!1).paused(!1).totalTime(t?-this._delay:0,!1!==e,!0)},o.reverse=function(t,e){return null!=t&&this.seek(t||this.totalDuration(),e),this.reversed(!0).paused(!1)},o.render=function(t,e,i){},o.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,!this._gc&&this.timeline||this._enabled(!0),this},o.isActive=function(){var t,e=this._timeline,i=this._startTime;return!e||!this._gc&&!this._paused&&e.isActive()&&(t=e.rawTime(!0))>=i&&t<i+this.totalDuration()/this._timeScale-1e-7},o._enabled=function(t,e){return h||l.wake(),this._gc=!t,this._active=this.isActive(),!0!==e&&(t&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!t&&this.timeline&&this._timeline._remove(this,!0)),!1},o._kill=function(t,e){return this._enabled(!1,!1)},o.kill=function(t,e){return this._kill(t,e),this},o._uncache=function(t){for(var e=t?this:this.timeline;e;)e._dirty=!0,e=e.timeline;return this},o._swapSelfInParams=function(t){for(var e=t.length,i=t.concat();--e>-1;)"{self}"===t[e]&&(i[e]=this);return i},o._callback=function(t){var e=this.vars,i=e[t],s=e[t+"Params"],n=e[t+"Scope"]||e.callbackScope||this;switch(s?s.length:0){case 0:i.call(n);break;case 1:i.call(n,s[0]);break;case 2:i.call(n,s[0],s[1]);break;default:i.apply(n,s)}},o.eventCallback=function(t,e,i,s){if("on"===(t||"").substr(0,2)){var n=this.vars;if(1===arguments.length)return n[t];null==e?delete n[t]:(n[t]=e,n[t+"Params"]=p(i)&&-1!==i.join("").indexOf("{self}")?this._swapSelfInParams(i):i,n[t+"Scope"]=s),"onUpdate"===t&&(this._onUpdate=e)}return this},o.delay=function(t){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+t-this._delay),this._delay=t,this):this._delay},o.duration=function(t){return arguments.length?(this._duration=this._totalDuration=t,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==t&&this.totalTime(this._totalTime*(t/this._duration),!0),this):(this._dirty=!1,this._duration)},o.totalDuration=function(t){return this._dirty=!1,arguments.length?this.duration(t):this._totalDuration},o.time=function(t,e){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(t>this._duration?this._duration:t,e)):this._time},o.totalTime=function(t,e,i){if(h||l.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(t<0&&!i&&(t+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var s=this._totalDuration,n=this._timeline;if(t>s&&!i&&(t=s),this._startTime=(this._paused?this._pauseTime:n._time)-(this._reversed?s-t:t)/this._timeScale,n._dirty||this._uncache(!1),n._timeline)for(;n._timeline;)n._timeline._time!==(n._startTime+n._totalTime)/n._timeScale&&n.totalTime(n._totalTime,!0),n=n._timeline}this._gc&&this._enabled(!0,!1),this._totalTime===t&&0!==this._duration||(O.length&&V(),this.render(t,e,!1),O.length&&V())}return this},o.progress=o.totalProgress=function(t,e){var i=this.duration();return arguments.length?this.totalTime(i*t,e):i?this._time/i:this.ratio},o.startTime=function(t){return arguments.length?(t!==this._startTime&&(this._startTime=t,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,t-this._delay)),this):this._startTime},o.endTime=function(t){return this._startTime+(0!=t?this.totalDuration():this.duration())/this._timeScale},o.timeScale=function(t){if(!arguments.length)return this._timeScale;var e,i;for(t=t||1e-10,this._timeline&&this._timeline.smoothChildTiming&&(i=(e=this._pauseTime)||0===e?e:this._timeline.totalTime(),this._startTime=i-(i-this._startTime)*this._timeScale/t),this._timeScale=t,i=this.timeline;i&&i.timeline;)i._dirty=!0,i.totalDuration(),i=i.timeline;return this},o.reversed=function(t){return arguments.length?(t!=this._reversed&&(this._reversed=t,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},o.paused=function(t){if(!arguments.length)return this._paused;var e,i,s=this._timeline;return t!=this._paused&&s&&(h||t||l.wake(),i=(e=s.rawTime())-this._pauseTime,!t&&s.smoothChildTiming&&(this._startTime+=i,this._uncache(!1)),this._pauseTime=t?e:null,this._paused=t,this._active=this.isActive(),!t&&0!==i&&this._initted&&this.duration()&&(e=s.smoothChildTiming?this._totalTime:(e-this._startTime)/this._timeScale,this.render(e,e===this._totalTime,!0))),this._gc&&!t&&this._enabled(!0,!1),this};var D=g("core.SimpleTimeline",function(t){R.call(this,0,t),this.autoRemoveChildren=this.smoothChildTiming=!0});(o=D.prototype=new R).constructor=D,o.kill()._gc=!1,o._first=o._last=o._recent=null,o._sortChildren=!1,o.add=o.insert=function(t,e,i,s){var n,r;if(t._startTime=Number(e||0)+t._delay,t._paused&&this!==t._timeline&&(t._pauseTime=t._startTime+(this.rawTime()-t._startTime)/t._timeScale),t.timeline&&t.timeline._remove(t,!0),t.timeline=t._timeline=this,t._gc&&t._enabled(!0,!0),n=this._last,this._sortChildren)for(r=t._startTime;n&&n._startTime>r;)n=n._prev;return n?(t._next=n._next,n._next=t):(t._next=this._first,this._first=t),t._next?t._next._prev=t:this._last=t,t._prev=n,this._recent=t,this._timeline&&this._uncache(!0),this},o._remove=function(t,e){return t.timeline===this&&(e||t._enabled(!1,!0),t._prev?t._prev._next=t._next:this._first===t&&(this._first=t._next),t._next?t._next._prev=t._prev:this._last===t&&(this._last=t._prev),t._next=t._prev=t.timeline=null,t===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},o.render=function(t,e,i){var s,n=this._first;for(this._totalTime=this._time=this._rawPrevTime=t;n;)s=n._next,(n._active||t>=n._startTime&&!n._paused&&!n._gc)&&(n._reversed?n.render((n._dirty?n.totalDuration():n._totalDuration)-(t-n._startTime)*n._timeScale,e,i):n.render((t-n._startTime)*n._timeScale,e,i)),n=s},o.rawTime=function(){return h||l.wake(),this._totalTime};var I=g("TweenLite",function(e,i,s){if(R.call(this,i,s),this.render=I.prototype.render,null==e)throw"Cannot tween a null target.";this.target=e="string"!=typeof e?e:I.selector(e)||e;var n,r,a,o=e.jquery||e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType),l=this.vars.overwrite;if(this._overwrite=l=null==l?$[I.defaultOverwrite]:"number"==typeof l?l>>0:$[l],(o||e instanceof Array||e.push&&p(e))&&"number"!=typeof e[0])for(this._targets=a=f(e),this._propLookup=[],this._siblings=[],n=0;n<a.length;n++)(r=a[n])?"string"!=typeof r?r.length&&r!==t&&r[0]&&(r[0]===t||r[0].nodeType&&r[0].style&&!r.nodeType)?(a.splice(n--,1),this._targets=a=a.concat(f(r))):(this._siblings[n]=W(r,this,!1),1===l&&this._siblings[n].length>1&&Y(r,this,null,1,this._siblings[n])):"string"==typeof(r=a[n--]=I.selector(r))&&a.splice(n+1,1):a.splice(n--,1);else this._propLookup={},this._siblings=W(e,this,!1),1===l&&this._siblings.length>1&&Y(e,this,null,1,this._siblings);(this.vars.immediateRender||0===i&&0===this._delay&&!1!==this.vars.immediateRender)&&(this._time=-1e-10,this.render(Math.min(0,-this._delay)))},!0),E=function(e){return e&&e.length&&e!==t&&e[0]&&(e[0]===t||e[0].nodeType&&e[0].style&&!e.nodeType)};(o=I.prototype=new R).constructor=I,o.kill()._gc=!1,o.ratio=0,o._firstPT=o._targets=o._overwrittenProps=o._startAt=null,o._notifyPluginsOfEnabled=o._lazy=!1,I.version="1.20.3",I.defaultEase=o._ease=new y(null,null,1,1),I.defaultOverwrite="auto",I.ticker=l,I.autoSleep=120,I.lagSmoothing=function(t,e){l.lagSmoothing(t,e)},I.selector=t.$||t.jQuery||function(e){var i=t.$||t.jQuery;return i?(I.selector=i,i(e)):void 0===s?e:s.querySelectorAll?s.querySelectorAll(e):s.getElementById("#"===e.charAt(0)?e.substr(1):e)};var O=[],z={},F=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,L=/[\+-]=-?[\.\d]/,U=function(t){for(var e,i=this._firstPT;i;)e=i.blob?1===t&&null!=this.end?this.end:t?this.join(""):this.start:i.c*t+i.s,i.m?e=i.m(e,this._target||i.t):e<1e-6&&e>-1e-6&&!i.blob&&(e=0),i.f?i.fp?i.t[i.p](i.fp,e):i.t[i.p](e):i.t[i.p]=e,i=i._next},N=function(t,e,i,s){var n,r,a,o,l,h,_,u=[],f=0,c="",p=0;for(u.start=t,u.end=e,t=u[0]=t+"",e=u[1]=e+"",i&&(i(u),t=u[0],e=u[1]),u.length=0,n=t.match(F)||[],r=e.match(F)||[],s&&(s._next=null,s.blob=1,u._firstPT=u._applyPT=s),l=r.length,o=0;o<l;o++)_=r[o],c+=(h=e.substr(f,e.indexOf(_,f)-f))||!o?h:",",f+=h.length,p?p=(p+1)%5:"rgba("===h.substr(-5)&&(p=1),_===n[o]||n.length<=o?c+=_:(c&&(u.push(c),c=""),a=parseFloat(n[o]),u.push(a),u._firstPT={_next:u._firstPT,t:u,p:u.length-1,s:a,c:("="===_.charAt(1)?parseInt(_.charAt(0)+"1",10)*parseFloat(_.substr(2)):parseFloat(_)-a)||0,f:0,m:p&&p<4?Math.round:0}),f+=_.length;return(c+=e.substr(f))&&u.push(c),u.setRatio=U,L.test(e)&&(u.end=null),u},j=function(t,e,i,s,n,r,a,o,l){"function"==typeof s&&(s=s(l||0,t));var h=typeof t[e],_="function"!==h?"":e.indexOf("set")||"function"!=typeof t["get"+e.substr(3)]?e:"get"+e.substr(3),u="get"!==i?i:_?a?t[_](a):t[_]():t[e],f="string"==typeof s&&"="===s.charAt(1),c={t:t,p:e,s:u,f:"function"===h,pg:0,n:n||e,m:r?"function"==typeof r?r:Math.round:0,pr:0,c:f?parseInt(s.charAt(0)+"1",10)*parseFloat(s.substr(2)):parseFloat(s)-u||0};if(("number"!=typeof u||"number"!=typeof s&&!f)&&(a||isNaN(u)||!f&&isNaN(s)||"boolean"==typeof u||"boolean"==typeof s?(c.fp=a,c={t:N(u,f?parseFloat(c.s)+c.c:s,o||I.defaultStringFilter,c),p:"setRatio",s:0,c:1,f:2,pg:0,n:n||e,pr:0,m:0}):(c.s=parseFloat(u),f||(c.c=parseFloat(s)-c.s||0))),c.c)return(c._next=this._firstPT)&&(c._next._prev=c),this._firstPT=c,c},G=I._internals={isArray:p,isSelector:E,lazyTweens:O,blobDif:N},M=I._plugins={},Q=G.tweenLookup={},q=0,B=G.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1,yoyoEase:1},$={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,true:1,false:0},K=R._rootFramesTimeline=new D,H=R._rootTimeline=new D,J=30,V=G.lazyRender=function(){var t,e=O.length;for(z={};--e>-1;)(t=O[e])&&!1!==t._lazy&&(t.render(t._lazy[0],t._lazy[1],!0),t._lazy=!1);O.length=0};H._startTime=l.time,K._startTime=l.frame,H._active=K._active=!0,setTimeout(V,1),R._updateRoot=I.render=function(){var t,e,i;if(O.length&&V(),H.render((l.time-H._startTime)*H._timeScale,!1,!1),K.render((l.frame-K._startTime)*K._timeScale,!1,!1),O.length&&V(),l.frame>=J){J=l.frame+(parseInt(I.autoSleep,10)||120);for(i in Q){for(t=(e=Q[i].tweens).length;--t>-1;)e[t]._gc&&e.splice(t,1);0===e.length&&delete Q[i]}if((!(i=H._first)||i._paused)&&I.autoSleep&&!K._first&&1===l._listeners.tick.length){for(;i&&i._paused;)i=i._next;i||l.sleep()}}},l.addEventListener("tick",R._updateRoot);var W=function(t,e,i){var s,n,r=t._gsTweenID;if(Q[r||(t._gsTweenID=r="t"+q++)]||(Q[r]={target:t,tweens:[]}),e&&(s=Q[r].tweens,s[n=s.length]=e,i))for(;--n>-1;)s[n]===e&&s.splice(n,1);return Q[r].tweens},X=function(t,e,i,s){var n,r,a=t.vars.onOverwrite;return a&&(n=a(t,e,i,s)),(a=I.onOverwrite)&&(r=a(t,e,i,s)),!1!==n&&!1!==r},Y=function(t,e,i,s,n){var r,a,o,l;if(1===s||s>=4){for(l=n.length,r=0;r<l;r++)if((o=n[r])!==e)o._gc||o._kill(null,t,e)&&(a=!0);else if(5===s)break;return a}var h,_=e._startTime+1e-10,u=[],f=0,c=0===e._duration;for(r=n.length;--r>-1;)(o=n[r])===e||o._gc||o._paused||(o._timeline!==e._timeline?(h=h||Z(e,0,c),0===Z(o,h,c)&&(u[f++]=o)):o._startTime<=_&&o._startTime+o.totalDuration()/o._timeScale>_&&((c||!o._initted)&&_-o._startTime<=2e-10||(u[f++]=o)));for(r=f;--r>-1;)if(o=u[r],2===s&&o._kill(i,t,e)&&(a=!0),2!==s||!o._firstPT&&o._initted){if(2!==s&&!X(o,e))continue;o._enabled(!1,!1)&&(a=!0)}return a},Z=function(t,e,i){for(var s=t._timeline,n=s._timeScale,r=t._startTime;s._timeline;){if(r+=s._startTime,n*=s._timeScale,s._paused)return-100;s=s._timeline}return(r/=n)>e?r-e:i&&r===e||!t._initted&&r-e<2e-10?1e-10:(r+=t.totalDuration()/t._timeScale/n)>e+1e-10?0:r-e-1e-10};o._init=function(){var t,e,i,s,n,r,a=this.vars,o=this._overwrittenProps,l=this._duration,h=!!a.immediateRender,_=a.ease;if(a.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),n={};for(s in a.startAt)n[s]=a.startAt[s];if(n.data="isStart",n.overwrite=!1,n.immediateRender=!0,n.lazy=h&&!1!==a.lazy,n.startAt=n.delay=null,n.onUpdate=a.onUpdate,n.onUpdateParams=a.onUpdateParams,n.onUpdateScope=a.onUpdateScope||a.callbackScope||this,this._startAt=I.to(this.target,0,n),h)if(this._time>0)this._startAt=null;else if(0!==l)return}else if(a.runBackwards&&0!==l)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(h=!1),i={};for(s in a)B[s]&&"autoCSS"!==s||(i[s]=a[s]);if(i.overwrite=0,i.data="isFromStart",i.lazy=h&&!1!==a.lazy,i.immediateRender=h,this._startAt=I.to(this.target,0,i),h){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=_=_?_ instanceof y?_:"function"==typeof _?new y(_,a.easeParams):w[_]||I.defaultEase:I.defaultEase,a.easeParams instanceof Array&&_.config&&(this._ease=_.config.apply(_,a.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(r=this._targets.length,t=0;t<r;t++)this._initProps(this._targets[t],this._propLookup[t]={},this._siblings[t],o?o[t]:null,t)&&(e=!0);else e=this._initProps(this.target,this._propLookup,this._siblings,o,0);if(e&&I._onPluginEvent("_onInitAllProps",this),o&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),a.runBackwards)for(i=this._firstPT;i;)i.s+=i.c,i.c=-i.c,i=i._next;this._onUpdate=a.onUpdate,this._initted=!0},o._initProps=function(e,i,s,n,r){var a,o,l,h,_,u;if(null==e)return!1;z[e._gsTweenID]&&V(),this.vars.css||e.style&&e!==t&&e.nodeType&&M.css&&!1!==this.vars.autoCSS&&function(t,e){var i,s={};for(i in t)B[i]||i in e&&"transform"!==i&&"x"!==i&&"y"!==i&&"width"!==i&&"height"!==i&&"className"!==i&&"border"!==i||!(!M[i]||M[i]&&M[i]._autoCSS)||(s[i]=t[i],delete t[i]);t.css=s}(this.vars,e);for(a in this.vars)if(u=this.vars[a],B[a])u&&(u instanceof Array||u.push&&p(u))&&-1!==u.join("").indexOf("{self}")&&(this.vars[a]=u=this._swapSelfInParams(u,this));else if(M[a]&&(h=new M[a])._onInitTween(e,this.vars[a],this,r)){for(this._firstPT=_={_next:this._firstPT,t:h,p:"setRatio",s:0,c:1,f:1,n:a,pg:1,pr:h._priority,m:0},o=h._overwriteProps.length;--o>-1;)i[h._overwriteProps[o]]=this._firstPT;(h._priority||h._onInitAllProps)&&(l=!0),(h._onDisable||h._onEnable)&&(this._notifyPluginsOfEnabled=!0),_._next&&(_._next._prev=_)}else i[a]=j.call(this,e,a,"get",u,a,0,null,this.vars.stringFilter,r);return n&&this._kill(n,e)?this._initProps(e,i,s,n,r):this._overwrite>1&&this._firstPT&&s.length>1&&Y(e,this,i,this._overwrite,s)?(this._kill(i,e),this._initProps(e,i,s,n,r)):(this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration)&&(z[e._gsTweenID]=!0),l)},o.render=function(t,e,i){var s,n,r,a,o=this._time,l=this._duration,h=this._rawPrevTime;if(t>=l-1e-7&&t>=0)this._totalTime=this._time=l,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(s=!0,n="onComplete",i=i||this._timeline.autoRemoveChildren),0===l&&(this._initted||!this.vars.lazy||i)&&(this._startTime===this._timeline._duration&&(t=0),(h<0||t<=0&&t>=-1e-7||1e-10===h&&"isPause"!==this.data)&&h!==t&&(i=!0,h>1e-10&&(n="onReverseComplete")),this._rawPrevTime=a=!e||t||h===t?t:1e-10);else if(t<1e-7)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==o||0===l&&h>0)&&(n="onReverseComplete",s=this._reversed),t<0&&(this._active=!1,0===l&&(this._initted||!this.vars.lazy||i)&&(h>=0&&(1e-10!==h||"isPause"!==this.data)&&(i=!0),this._rawPrevTime=a=!e||t||h===t?t:1e-10)),(!this._initted||this._startAt&&this._startAt.progress())&&(i=!0);else if(this._totalTime=this._time=t,this._easeType){var _=t/l,u=this._easeType,f=this._easePower;(1===u||3===u&&_>=.5)&&(_=1-_),3===u&&(_*=2),1===f?_*=_:2===f?_*=_*_:3===f?_*=_*_*_:4===f&&(_*=_*_*_*_),this.ratio=1===u?1-_:2===u?_:t/l<.5?_/2:1-_/2}else this.ratio=this._ease.getRatio(t/l);if(this._time!==o||i){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!i&&this._firstPT&&(!1!==this.vars.lazy&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=o,this._rawPrevTime=h,O.push(this),void(this._lazy=[t,e]);this._time&&!s?this.ratio=this._ease.getRatio(this._time/l):s&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(!1!==this._lazy&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&t>=0&&(this._active=!0),0===o&&(this._startAt&&(t>=0?this._startAt.render(t,!0,i):n||(n="_dummyGS")),this.vars.onStart&&(0===this._time&&0!==l||e||this._callback("onStart"))),r=this._firstPT;r;)r.f?r.t[r.p](r.c*this.ratio+r.s):r.t[r.p]=r.c*this.ratio+r.s,r=r._next;this._onUpdate&&(t<0&&this._startAt&&-1e-4!==t&&this._startAt.render(t,!0,i),e||(this._time!==o||s||i)&&this._callback("onUpdate")),n&&(this._gc&&!i||(t<0&&this._startAt&&!this._onUpdate&&-1e-4!==t&&this._startAt.render(t,!0,i),s&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!e&&this.vars[n]&&this._callback(n),0===l&&1e-10===this._rawPrevTime&&1e-10!==a&&(this._rawPrevTime=0)))}},o._kill=function(t,e,i){if("all"===t&&(t=null),null==t&&(null==e||e===this.target))return this._lazy=!1,this._enabled(!1,!1);e="string"!=typeof e?e||this._targets||this.target:I.selector(e)||e;var s,n,r,a,o,l,h,_,u,f=i&&this._time&&i._startTime===this._startTime&&this._timeline===i._timeline;if((p(e)||E(e))&&"number"!=typeof e[0])for(s=e.length;--s>-1;)this._kill(t,e[s],i)&&(l=!0);else{if(this._targets){for(s=this._targets.length;--s>-1;)if(e===this._targets[s]){o=this._propLookup[s]||{},this._overwrittenProps=this._overwrittenProps||[],n=this._overwrittenProps[s]=t?this._overwrittenProps[s]||{}:"all";break}}else{if(e!==this.target)return!1;o=this._propLookup,n=this._overwrittenProps=t?this._overwrittenProps||{}:"all"}if(o){if(h=t||o,_=t!==n&&"all"!==n&&t!==o&&("object"!=typeof t||!t._tempKill),i&&(I.onOverwrite||this.vars.onOverwrite)){for(r in h)o[r]&&(u||(u=[]),u.push(r));if((u||!t)&&!X(this,i,e,u))return!1}for(r in h)(a=o[r])&&(f&&(a.f?a.t[a.p](a.s):a.t[a.p]=a.s,l=!0),a.pg&&a.t._kill(h)&&(l=!0),a.pg&&0!==a.t._overwriteProps.length||(a._prev?a._prev._next=a._next:a===this._firstPT&&(this._firstPT=a._next),a._next&&(a._next._prev=a._prev),a._next=a._prev=null),delete o[r]),_&&(n[r]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return l},o.invalidate=function(){return this._notifyPluginsOfEnabled&&I._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],R.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-1e-10,this.render(Math.min(0,-this._delay))),this},o._enabled=function(t,e){if(h||l.wake(),t&&this._gc){var i,s=this._targets;if(s)for(i=s.length;--i>-1;)this._siblings[i]=W(s[i],this,!0);else this._siblings=W(this.target,this,!0)}return R.prototype._enabled.call(this,t,e),!(!this._notifyPluginsOfEnabled||!this._firstPT)&&I._onPluginEvent(t?"_onEnable":"_onDisable",this)},I.to=function(t,e,i){return new I(t,e,i)},I.from=function(t,e,i){return i.runBackwards=!0,i.immediateRender=0!=i.immediateRender,new I(t,e,i)},I.fromTo=function(t,e,i,s){return s.startAt=i,s.immediateRender=0!=s.immediateRender&&0!=i.immediateRender,new I(t,e,s)},I.delayedCall=function(t,e,i,s,n){return new I(e,0,{delay:t,onComplete:e,onCompleteParams:i,callbackScope:s,onReverseComplete:e,onReverseCompleteParams:i,immediateRender:!1,lazy:!1,useFrames:n,overwrite:0})},I.set=function(t,e){return new I(t,0,e)},I.getTweensOf=function(t,e){if(null==t)return[];t="string"!=typeof t?t:I.selector(t)||t;var i,s,n,r;if((p(t)||E(t))&&"number"!=typeof t[0]){for(i=t.length,s=[];--i>-1;)s=s.concat(I.getTweensOf(t[i],e));for(i=s.length;--i>-1;)for(r=s[i],n=i;--n>-1;)r===s[n]&&s.splice(i,1)}else if(t._gsTweenID)for(i=(s=W(t).concat()).length;--i>-1;)(s[i]._gc||e&&!s[i].isActive())&&s.splice(i,1);return s||[]},I.killTweensOf=I.killDelayedCallsTo=function(t,e,i){"object"==typeof e&&(i=e,e=!1);for(var s=I.getTweensOf(t,e),n=s.length;--n>-1;)s[n]._kill(i,t)};var tt=g("plugins.TweenPlugin",function(t,e){this._overwriteProps=(t||"").split(","),this._propName=this._overwriteProps[0],this._priority=e||0,this._super=tt.prototype},!0);if(o=tt.prototype,tt.version="1.19.0",tt.API=2,o._firstPT=null,o._addTween=j,o.setRatio=U,o._kill=function(t){var e,i=this._overwriteProps,s=this._firstPT;if(null!=t[this._propName])this._overwriteProps=[];else for(e=i.length;--e>-1;)null!=t[i[e]]&&i.splice(e,1);for(;s;)null!=t[s.n]&&(s._next&&(s._next._prev=s._prev),s._prev?(s._prev._next=s._next,s._prev=null):this._firstPT===s&&(this._firstPT=s._next)),s=s._next;return!1},o._mod=o._roundProps=function(t){for(var e,i=this._firstPT;i;)(e=t[this._propName]||null!=i.n&&t[i.n.split(this._propName+"_").join("")])&&"function"==typeof e&&(2===i.f?i.t._applyPT.m=e:i.m=e),i=i._next},I._onPluginEvent=function(t,e){var i,s,n,r,a,o=e._firstPT;if("_onInitAllProps"===t){for(;o;){for(a=o._next,s=n;s&&s.pr>o.pr;)s=s._next;(o._prev=s?s._prev:r)?o._prev._next=o:n=o,(o._next=s)?s._prev=o:r=o,o=a}o=e._firstPT=n}for(;o;)o.pg&&"function"==typeof o.t[t]&&o.t[t]()&&(i=!0),o=o._next;return i},tt.activate=function(t){for(var e=t.length;--e>-1;)t[e].API===tt.API&&(M[(new t[e])._propName]=t[e]);return!0},v.plugin=function(t){if(!(t&&t.propName&&t.init&&t.API))throw"illegal plugin definition.";var e,i=t.propName,s=t.priority||0,n=t.overwriteProps,r={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},a=g("plugins."+i.charAt(0).toUpperCase()+i.substr(1)+"Plugin",function(){tt.call(this,i,s),this._overwriteProps=n||[]},!0===t.global),o=a.prototype=new tt(i);o.constructor=a,a.API=t.API;for(e in r)"function"==typeof t[e]&&(o[r[e]]=t[e]);return a.version=t.version,tt.activate([a]),a},r=t._gsQueue){for(a=0;a<r.length;a++)r[a]();for(o in m)m[o].func||t.console.log("GSAP encountered missing dependency: "+o)}h=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window);