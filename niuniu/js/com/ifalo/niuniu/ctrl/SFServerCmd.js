var com,__extends=this&&this.__extends||function(){var n=function(t,o){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o])})(t,o)};return function(t,o){function e(){this.constructor=t}n(t,o),t.prototype=null===o?Object.create(o):(e.prototype=o.prototype,new e)}}();!function(n){!function(n){!function(n){!function(t){var o=n.model.po.SFServerPO,e=t.lists.CmdType,r=function(t){function r(){return null!==t&&t.apply(this,arguments)||this}return __extends(r,t),r.prototype.execute=function(r){t.prototype.execute.call(this,r);var c=this.facade().retrieveProxy(n.model.SFServerPxy.PXY_NAME);switch(r.getType()){case e.SERVER_LOGIN:var i=r.getBody();o.instance.loginAccount=i.account,o.instance.loginPassword=i.password,o.instance.setPlayerInfo(o.instance.loginAccount,i.autoLogin?o.instance.loginPassword:""),c.login(o.instance.loginAccount,o.instance.loginPassword);break;case e.SERVER_LOGOUT:c.logout()}},r}(t.BaseCmd);t.SFServerCmd=r}(n.ctrl||(n.ctrl={}))}(n.niuniu||(n.niuniu={}))}(n.ifalo||(n.ifalo={}))}(com||(com={}));