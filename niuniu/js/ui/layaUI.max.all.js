var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var View = laya.ui.View;
var Dialog = laya.ui.Dialog;
var ui;
(function (ui) {
    var MainSceneUI = /** @class */ (function (_super) {
        __extends(MainSceneUI, _super);
        function MainSceneUI() {
            return _super.call(this) || this;
        }
        MainSceneUI.prototype.createChildren = function () {
            _super.prototype.createChildren.call(this);
            this.createView(ui.MainSceneUI.uiView);
        };
        MainSceneUI.uiView = { "type": "View", "props": { "width": 1920, "name": "MainScene", "height": 1080 }, "child": [{ "type": "Button", "props": { "y": 0, "x": 0, "width": 236, "var": "btn_link", "skin": "comp/button.png", "labelSize": 36, "label": "連線", "height": 98 } }, { "type": "Button", "props": { "y": 0, "x": 417, "width": 236, "var": "btn_login", "skin": "comp/button.png", "labelSize": 36, "label": "登入", "height": 98 } }, { "type": "TextInput", "props": { "y": 55, "x": 267, "width": 125, "var": "input_account", "text": "User1", "skin": "comp/textinput.png", "height": 43, "fontSize": 24 } }, { "type": "Button", "props": { "y": 0, "x": 669, "width": 236, "var": "btn_logout", "skin": "comp/button.png", "labelSize": 36, "label": "登出", "height": 98 } }, { "type": "Button", "props": { "y": 0, "x": 939, "width": 236, "var": "btn_zone1", "skin": "comp/button.png", "labelSize": 36, "label": "房間1", "height": 98 } }, { "type": "Button", "props": { "y": 0, "x": 1175, "width": 236, "var": "btn_zone2", "skin": "comp/button.png", "labelSize": 36, "label": "房間2", "height": 98 } }, { "type": "Button", "props": { "y": 0, "x": 1411, "width": 236, "var": "btn_zone3", "skin": "comp/button.png", "labelSize": 36, "label": "房間3", "height": 98 } }, { "type": "Button", "props": { "y": 0, "x": 1647, "width": 236, "var": "btn_zone4", "skin": "comp/button.png", "labelSize": 36, "label": "房間4", "height": 98 } }] };
        return MainSceneUI;
    }(View));
    ui.MainSceneUI = MainSceneUI;
})(ui || (ui = {}));
//# sourceMappingURL=layaUI.max.all.js.map