/**
* SFServerPO
*/
var com;
(function (com) {
    var ifalo;
    (function (ifalo) {
        var niuniu;
        (function (niuniu) {
            var model;
            (function (model) {
                var po;
                (function (po) {
                    var SFServerPO = /** @class */ (function () {
                        function SFServerPO() {
                            // ---- [Property] ----- + ---------- + ---------- + ----------
                            /** Smart Fox 連線參數設定 */
                            this.CONFIG = {
                                host: GameEntry.params.sfsHost,
                                port: GameEntry.params.port,
                                zone: GameEntry.params.zone,
                                useSSL: false,
                                debug: false
                            };
                            /** Smart Fox Server 是否連線成功 */
                            this.isConnectSucs = false;
                            /** Smart Fox Server 對玩家的登入成功 */
                            this.isLoginSucs = false;
                        }
                        Object.defineProperty(SFServerPO, "instance", {
                            get: function () {
                                return SFServerPO._instance || (SFServerPO._instance = new SFServerPO());
                            },
                            enumerable: true,
                            configurable: true
                        });
                        SFServerPO.prototype.dispose = function () {
                            SFServerPO._instance = null;
                        };
                        // ---- [Public Method] ----- + ---------- + ---------- + ----------
                        SFServerPO.prototype.init = function () {
                            this.isConnectSucs = false;
                            this.isLoginSucs = false;
                            this.loginAccount = null;
                            this.loginPassword = null;
                            this.smartFox = null;
                        };
                        SFServerPO.prototype.sendRequest = function (request, params, room) {
                            if (this.smartFox != null) {
                                var sfsReq = request.toServer(params, room);
                                this.smartFox.send(sfsReq);
                                this.log(" ", sfsReq);
                            }
                            else
                                this.log("smartFox == null ", request);
                        };
                        // ---- [Player Info] ----- + ---------- + ---------- + ----------
                        /** 記憶帳號密碼，空字串表示不記憶 */
                        SFServerPO.prototype.setPlayerInfo = function (account, password) {
                            Laya.LocalStorage.setItem("account", account);
                            Laya.LocalStorage.setItem("password", password);
                        };
                        /** 取得已記憶的帳號密碼，空字串表示未記憶 */
                        SFServerPO.prototype.getPlayerInfo = function () {
                            var account = Laya.LocalStorage.getItem("account");
                            var password = Laya.LocalStorage.getItem("password");
                            return { account: account ? account : "", password: password ? password : "" };
                        };
                        /** 清除已記憶的密碼 */
                        SFServerPO.prototype.clearPlayerInfo = function () {
                            Laya.LocalStorage.removeItem("password");
                        };
                        // ---- [Short Cut Method] ----- + ---------- + ---------- + ----------
                        /** [Short Cut] 判斷若啟用 SF Server，將資料傳送至 Server */
                        SFServerPO.sendRequest = function (request) {
                            if (this.instance.smartFox != null) {
                                SFServerPO.instance.log(" ", request);
                                this.instance.smartFox.send(request);
                            }
                            else
                                SFServerPO.instance.log("smartFox == null ", request);
                        };
                        /** [Short Cut] log*/
                        SFServerPO.prototype.log = function (message) {
                            var optionalParams = [];
                            for (var _i = 1; _i < arguments.length; _i++) {
                                optionalParams[_i - 1] = arguments[_i];
                            }
                            var stackId = 1;
                            if (!niuniu.Startup.ENABLE_LOG)
                                return;
                            var stack = new Error().stack;
                            var fileStacks = stack.match(/\(.*\b/g);
                            var isStackFail = false;
                            try {
                                message = "[" + stack.match(/\b[A-Z]\w*\.[\w\.]{3,}\b/g)[stackId] + "] " + message;
                                if (niuniu.Startup.ENABLE_LOG_STACK)
                                    message += "\n\t>> " + fileStacks[stackId] + ")" + "\n\t>> " + fileStacks[stackId + 1] + ")" + "\n";
                            }
                            catch (err) {
                                isStackFail = true;
                            }
                            if (!niuniu.Startup.ENABLE_LOG_STACK || isStackFail)
                                message += (optionalParams.length > 0 ? " | " : "");
                            console.log.apply(this, [message].concat(optionalParams));
                        };
                        Object.defineProperty(SFServerPO.prototype, "hasUsrVars", {
                            // ---- [Accessor] ----- + ---------- + ---------- + ----------
                            /** 是否已初始化玩家變數 */
                            get: function () { return this.smartFox.mySelf.getVariables().length > 0; },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(SFServerPO.prototype, "userId", {
                            /** 編號 */
                            get: function () { return this.smartFox.mySelf.getVariable("user_id").value; },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(SFServerPO.prototype, "name", {
                            /** 暱稱 */
                            get: function () { return this.smartFox.mySelf.getVariable("name").value; },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(SFServerPO.prototype, "balance", {
                            /** 遊戲餘額 */
                            get: function () { return this.smartFox.mySelf.getVariable("balance").value; },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(SFServerPO.prototype, "chips", {
                            /** 遊戲餘額 */
                            get: function () { return this.smartFox.mySelf.getVariable("chips").value; },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(SFServerPO.prototype, "registerTime", {
                            /** 註冊日期與時間 */
                            get: function () { return this.smartFox.mySelf.getVariable("register_time").value; },
                            enumerable: true,
                            configurable: true
                        });
                        Object.defineProperty(SFServerPO.prototype, "loginTime", {
                            /** 最後登入日期與時間 */
                            get: function () { return this.smartFox.mySelf.getVariable("login_time").value; },
                            enumerable: true,
                            configurable: true
                        });
                        return SFServerPO;
                    }());
                    po.SFServerPO = SFServerPO;
                })(po = model.po || (model.po = {}));
            })(model = niuniu.model || (niuniu.model = {}));
        })(niuniu = ifalo.niuniu || (ifalo.niuniu = {}));
    })(ifalo = com.ifalo || (com.ifalo = {}));
})(com || (com = {}));
//# sourceMappingURL=SFServerPO.js.map