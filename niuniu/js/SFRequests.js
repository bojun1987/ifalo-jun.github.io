/**
* SFRequests
*/
var com;
(function (com) {
    var ifalo;
    (function (ifalo) {
        var niuniu;
        (function (niuniu) {
            var model;
            (function (model) {
                var lists;
                (function (lists) {
                    var SFRequests = /** @class */ (function () {
                        function SFRequests(cmd) {
                            this._cmd = cmd;
                        }
                        SFRequests.prototype.toServer = function (params, room) {
                            return new SFS2X.ExtensionRequest("niuniu." + this._cmd, params, room);
                        };
                        Object.defineProperty(SFRequests.prototype, "name", {
                            get: function () {
                                return this._cmd;
                            },
                            enumerable: true,
                            configurable: true
                        });
                        SFRequests.toClient = function (cmd) {
                            return "UPDATE_" + cmd;
                        };
                        /** 取得對戰區資料 */
                        SFRequests.SCOPE_INFO = new SFRequests("SCOPE_INFO");
                        SFRequests.CHIPS_EXCHANGE = new SFRequests("CHIPS_EXCHANGE");
                        SFRequests.JOIN_ROOM = new SFRequests("JOIN_ROOM");
                        SFRequests.BANKER_CONFIRM = new SFRequests("BANKER_CONFIRM");
                        /** 接收伺服器資料 */
                        SFRequests.SERVER_INFO = new SFRequests("SERVER_INFO");
                        return SFRequests;
                    }());
                    lists.SFRequests = SFRequests;
                })(lists = model.lists || (model.lists = {}));
            })(model = niuniu.model || (niuniu.model = {}));
        })(niuniu = ifalo.niuniu || (ifalo.niuniu = {}));
    })(ifalo = com.ifalo || (com.ifalo = {}));
})(com || (com = {}));
//# sourceMappingURL=SFRequests.js.map