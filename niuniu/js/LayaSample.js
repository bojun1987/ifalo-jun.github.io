var WebGL = Laya.WebGL;
var SFServerPO = com.ifalo.niuniu.model.po.SFServerPO;
var SFSEvent = SFS2X.SFSEvent;
var SFRequests = com.ifalo.niuniu.model.lists.SFRequests;
// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        var _this = this;
        Laya.init(1920, 1080, WebGL);
        // 設置布局
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        var url = [];
        url.push({ url: "res/atlas/Comp.atlas", type: Laya.Loader.ATLAS });
        Laya.loader.load(url, new Laya.Handler(this, function () {
            _this.init();
        }));
    }
    GameMain.prototype.init = function () {
        var _this = this;
        this._comp = new ui.MainSceneUI();
        Laya.stage.addChild(this._comp);
        var smartFox = this.smartFox = new SFS2X.SmartFox(SFServerPO.instance.CONFIG);
        SFServerPO.instance.smartFox = smartFox;
        window.smartFox = this.smartFox;
        smartFox.addEventListener(SFS2X.SFSEvent.CONNECTION, this.onConnect, this);
        smartFox.addEventListener(SFS2X.SFSEvent.CONNECTION_LOST, this.onConnect, this);
        smartFox.addEventListener(SFSEvent.LOGIN, this.onLogin, this);
        smartFox.addEventListener(SFSEvent.LOGIN_ERROR, this.onLoginError, this);
        smartFox.addEventListener(SFSEvent.LOGOUT, this.onLogout, this);
        smartFox.addEventListener(SFSEvent.ROOM_JOIN, this.onRoomJoin, this);
        smartFox.addEventListener(SFSEvent.ROOM_JOIN_ERROR, this.onRoomJoinError, this);
        smartFox.addEventListener(SFSEvent.USER_ENTER_ROOM, this.onUserEnterRoom, this);
        smartFox.addEventListener(SFSEvent.USER_EXIT_ROOM, this.onUserExitRoom, this);
        smartFox.addEventListener(SFSEvent.EXTENSION_RESPONSE, this.onExtensionResponse, this);
        // 事件監聽處理
        this._comp.on(Laya.Event.CLICK, this, this.onClick);
        this._comp.btn_link.disabled = false;
        this._comp.btn_login.disabled = true;
        this._comp.btn_logout.disabled = true;
        this._comp.btn_logout.label = "";
        this._comp.input_account.disabled = true;
        this._comp.input_account.on(Laya.Event.BLUR, this, function () {
            if (_this._comp.input_account.text == "") {
                _this._comp.input_account.text = "User1";
            }
        });
        this.disableZoneBtn();
    };
    GameMain.prototype.onClick = function (e) {
        if (e.target == this._comp.btn_link) {
            this.smartFox.connect();
        }
        if (e.target == this._comp.btn_login) {
            var isOtp = GameEntry.params && GameEntry.params.authType && GameEntry.params.authType.toUpperCase() == "OTP";
            var userName = this._comp.input_account.text;
            var sfsObj = new SFS2X.SFSObject();
            sfsObj.putUtfString("device", "LayaWeb");
            sfsObj.putUtfString("auth_type", isOtp ? "OTP" : "WEB");
            var req = new SFS2X.LoginRequest(userName, "", sfsObj, GameEntry.params.zone);
            this.smartFox.send(req);
        }
        if (e.target == this._comp.btn_logout) {
            this.smartFox.send(new SFS2X.LogoutRequest());
        }
        var obj = new SFS2X.SFSObject();
        if (e.target == this._comp.btn_zone1) {
            obj.putShort("scope_id", 1);
            SFServerPO.instance.sendRequest(SFRequests.JOIN_ROOM, obj);
        }
        if (e.target == this._comp.btn_zone2) {
            obj.putShort("scope_id", 2);
            SFServerPO.instance.sendRequest(SFRequests.JOIN_ROOM, obj);
        }
        if (e.target == this._comp.btn_zone3) {
            obj.putShort("scope_id", 3);
            SFServerPO.instance.sendRequest(SFRequests.JOIN_ROOM, obj);
        }
        if (e.target == this._comp.btn_zone4) {
            obj.putShort("scope_id", 4);
            SFServerPO.instance.sendRequest(SFRequests.JOIN_ROOM, obj);
        }
    };
    GameMain.prototype.enableZoneBtn = function () {
        this._comp.btn_zone1.disabled = false;
        this._comp.btn_zone2.disabled = false;
        this._comp.btn_zone3.disabled = false;
        this._comp.btn_zone4.disabled = false;
    };
    GameMain.prototype.disableZoneBtn = function () {
        this._comp.btn_zone1.disabled = true;
        this._comp.btn_zone2.disabled = true;
        this._comp.btn_zone3.disabled = true;
        this._comp.btn_zone4.disabled = true;
    };
    GameMain.prototype.onConnect = function (params) {
        var smartFox = this.smartFox;
        if (params.success) {
            this.log("連線成功 (SFS2X API 版本: " + smartFox.version + "，連線: " + GameEntry.params.sfsHost + ":" + GameEntry.params.port + " (zone: " + GameEntry.params.zone + ")", 1, params);
            SFServerPO.instance.isConnectSucs = true;
            this._comp.btn_link.label = "已連線";
            this._comp.btn_link.disabled = true;
            this._comp.btn_login.disabled = false;
            this._comp.input_account.disabled = false;
        }
        else {
            this.log(" 連線失敗，請重新連線 ", 1, params);
            this._comp.btn_link.label = "請重新連線";
            this._comp.btn_login.label = "請重新登入";
            this._comp.btn_logout.label = "";
            this._comp.btn_link.disabled = false;
            this._comp.btn_login.disabled = true;
            this._comp.btn_logout.disabled = true;
            this._comp.input_account.disabled = true;
            this.disableZoneBtn();
            this._comp.btn_zone1.label = "房間1";
            this._comp.btn_zone2.label = "房間2";
            this._comp.btn_zone3.label = "房間3";
            this._comp.btn_zone4.label = "房間4";
        }
    };
    /** 處理 Smart Fox Server 對玩家的登入成功 */
    GameMain.prototype.onLogin = function (params) {
        SFServerPO.instance.isLoginSucs = true;
        var user = params.user;
        this.log("登入成功 (玩家 ID: " + user.id + "，玩家暱稱: " + SFServerPO.instance.loginAccount + " (" + user.name + "))", 1, params);
        this._comp.btn_login.label = "已登入";
        this._comp.btn_logout.label = "登出";
        this._comp.btn_login.disabled = true;
        this._comp.btn_logout.disabled = false;
        this._comp.input_account.disabled = true;
        this.enableZoneBtn();
    };
    /** 處理 Smart Fox Server 對玩家的登入失敗 */
    GameMain.prototype.onLoginError = function (params) {
        SFServerPO.instance.isLoginSucs = false;
        this.log("登入失敗 (錯誤代號: " + params.errorCode + "，錯誤訊息: " + params.errorMessage + ")", 1, params);
        if (SFServerPO.instance.isConnectSucs) {
            this._comp.btn_login.label = "請重新登入";
            this._comp.btn_logout.label = "";
            this._comp.btn_login.disabled = false;
            this._comp.btn_logout.disabled = true;
            this._comp.input_account.disabled = false;
            this.disableZoneBtn();
        }
    };
    /** 處理 Smart Fox Server 對玩家的登出 */
    GameMain.prototype.onLogout = function (params) {
        SFServerPO.instance.isLoginSucs = false;
        this.log("登出完成");
        if (SFServerPO.instance.isConnectSucs) {
            this._comp.btn_login.label = "請重新登入";
            this._comp.btn_logout.label = "";
            this._comp.btn_login.disabled = false;
            this._comp.btn_logout.disabled = true;
            this._comp.input_account.disabled = false;
            this.disableZoneBtn();
            this._comp.btn_zone1.label = "房間1";
            this._comp.btn_zone2.label = "房間2";
            this._comp.btn_zone3.label = "房間3";
            this._comp.btn_zone4.label = "房間4";
        }
    };
    /** 處理房間進入成功 */
    GameMain.prototype.onRoomJoin = function (params) {
        var room = params.room;
        this.log("進入房間成功, name: " + room.name, 1, params);
        if (room.groupId == "1") {
            this._comp.btn_zone1.disabled = true;
            this._comp.btn_zone1.label = "房間1(In)";
        }
        else {
            this._comp.btn_zone1.disabled = false;
            this._comp.btn_zone1.label = "房間1";
        }
        if (room.groupId == "2") {
            this._comp.btn_zone2.disabled = true;
            this._comp.btn_zone2.label = "房間2(In)";
        }
        else {
            this._comp.btn_zone2.disabled = false;
            this._comp.btn_zone2.label = "房間2";
        }
        if (room.groupId == "3") {
            this._comp.btn_zone3.disabled = true;
            this._comp.btn_zone3.label = "房間3(In)";
        }
        else {
            this._comp.btn_zone3.disabled = false;
            this._comp.btn_zone3.label = "房間3";
        }
        if (room.groupId == "4") {
            this._comp.btn_zone4.disabled = true;
            this._comp.btn_zone4.label = "房間4(In)";
        }
        else {
            this._comp.btn_zone4.disabled = false;
            this._comp.btn_zone4.label = "房間4";
        }
    };
    /** 處理房間進入成功 */
    GameMain.prototype.onRoomJoinError = function (params) {
        this.log("進入房間 error ", params);
    };
    /** 處理房間有成員加入 */
    GameMain.prototype.onUserEnterRoom = function (params) {
        this.log("有新加入的成員 ", 1, params);
    };
    /** 處理房間有新成員 */
    GameMain.prototype.onUserExitRoom = function (params) {
        this.log("有已離開的成員 ", 1, params);
    };
    /** 處理擴充功能的回應 */
    GameMain.prototype.onExtensionResponse = function (params) {
        var cmd = params.cmd;
        var sfsObj = params.params;
        // 追蹤資訊
        this.log("SF Server 擴充功能: " + cmd + ((sfsObj && sfsObj.size() > 0) ? "，內容: " : ""), null, 1, (sfsObj && sfsObj.size() > 0) ? sfsObj.getDump(true) : null);
    };
    // ---- [protected Method] ----- + ---------- + ---------- + ----------
    GameMain.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        var stackId = 1;
        var stack = new Error().stack;
        var fileStacks = stack.match(/\(.*\b/g);
        var isStackFail = false;
        try {
            message = "[" + stack.match(/\b[A-Z]\w*\.[\w\.]{3,}\b/g)[stackId] + "] " + message;
        }
        catch (err) {
            isStackFail = true;
        }
        if (isStackFail)
            message += (optionalParams.length > 0 ? " | " : "");
        console.log.apply(this, [message].concat(optionalParams));
    };
    return GameMain;
}());
new GameMain();
var GameEntry = /** @class */ (function () {
    function GameEntry() {
    }
    Object.defineProperty(GameEntry, "params", {
        /** 從初始化傳入的資料 */
        get: function () { return GameEntry._params; },
        enumerable: true,
        configurable: true
    });
    // Laya 1.7.19 建構
    // 建構日期 2018年08月
    // PureMVC 框架 1.1
    // SmartFoxServer 1.7.6 
    // Green Sock
    /** 作為多例 PureMVC 的 key */
    GameEntry.APP_ID = "com.ifalo.niuniu";
    GameEntry.APP_VER = "Laya - 0.0.1";
    GameEntry._params = {
        sfsHost: "192.168.111.41",
        port: 8080,
        zone: "niuniu",
        lang: "zh-TW",
        authType: "WEB",
    };
    return GameEntry;
}());
//# sourceMappingURL=LayaSample.js.map