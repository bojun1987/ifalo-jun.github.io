var com;!function(o){!function(o){!function(o){!function(o){var t=function(){function o(){this._scaleWhenDown=.95,this._cursor="pointer"}return o.prototype.onMouseDown=function(){this._ownerScale=[this._owner.scaleX,this._owner.scaleY],this._owner.scale(this._ownerScale[0]*this._scaleWhenDown,this._ownerScale[1]*this._scaleWhenDown),this._owner.on(Laya.Event.MOUSE_UP,this,this.onMouseUp),this._owner.on(Laya.Event.MOUSE_OUT,this,this.onMouseUp)},o.prototype.onMouseUp=function(){this._owner.scale(this._ownerScale[0],this._ownerScale[1]),this._owner.off(Laya.Event.MOUSE_UP,this,this.onMouseUp),this._owner.off(Laya.Event.MOUSE_OUT,this,this.onMouseUp)},o.prototype.onMouseOver=function(){Laya.Mouse.cursor=this._cursor,this._owner.on(Laya.Event.MOUSE_UP,this,this.onMouseOut),this._owner.on(Laya.Event.MOUSE_OUT,this,this.onMouseOut)},o.prototype.onMouseOut=function(){Laya.Mouse.cursor="auto",this._owner.off(Laya.Event.MOUSE_UP,this,this.onMouseOut),this._owner.off(Laya.Event.MOUSE_OUT,this,this.onMouseOut)},o.prototype.doMouseInteract=function(){this._owner&&(1==this._scaleWhenDown?this._owner.off(Laya.Event.MOUSE_DOWN,this,this.onMouseDown):this._owner.on(Laya.Event.MOUSE_DOWN,this,this.onMouseDown),""==this._cursor||"auto"==this._cursor?this._owner.off(Laya.Event.MOUSE_OVER,this,this.onMouseOver):this._owner.on(Laya.Event.MOUSE_OVER,this,this.onMouseOver))},Object.defineProperty(o.prototype,"owner",{set:function(o){this._owner=o,this.doMouseInteract()},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"scaleWhenDown",{get:function(){return this._scaleWhenDown},set:function(o){this._scaleWhenDown=o},enumerable:!0,configurable:!0}),Object.defineProperty(o.prototype,"cursor",{get:function(){return this._cursor},set:function(o){this._cursor=o},enumerable:!0,configurable:!0}),o}();o.ButtonAct=t}(o.scripts||(o.scripts={}))}(o.utils||(o.utils={}))}(o.ifalo||(o.ifalo={}))}(com||(com={}));