(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('../styles/previewImage.png'), require('@c8y/ngx-components'), require('@angular/core'), require('@c8y/ngx-components/api'), require('leaflet'), require('../styles/index.css')) :
    typeof define === 'function' && define.amd ? define('ddm-widget', ['exports', '../styles/previewImage.png', '@c8y/ngx-components', '@angular/core', '@c8y/ngx-components/api', 'leaflet', '../styles/index.css'], factory) :
    (global = global || self, factory(global['ddm-widget'] = {}, global.previewImage, global['@c8y/ngx-components'], global.ng.core, global.api, global.leaflet));
}(this, (function (exports, previewImage, ngxComponents, core, api, leaflet) { 'use strict';

    previewImage = previewImage && Object.prototype.hasOwnProperty.call(previewImage, 'default') ? previewImage['default'] : previewImage;

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m) return m.call(o);
        if (o && typeof o.length === "number") return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to get private field on non-instance");
        }
        return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
        if (!privateMap.has(receiver)) {
            throw new TypeError("attempted to set private field on non-instance");
        }
        privateMap.set(receiver, value);
        return value;
    }

    var WidgetConfigDemo = /** @class */ (function () {
        function WidgetConfigDemo() {
            this.config = {};
        }
        __decorate([
            core.Input()
        ], WidgetConfigDemo.prototype, "config", void 0);
        WidgetConfigDemo = __decorate([
            core.Component({
                template: ""
            })
        ], WidgetConfigDemo);
        return WidgetConfigDemo;
    }());

    var WidgetDemo = /** @class */ (function () {
        function WidgetDemo(eventService, operationService, alert, inventoryService) {
            this.eventService = eventService;
            this.operationService = operationService;
            this.alert = alert;
            this.inventoryService = inventoryService;
            this.mymap = null;
            this.popupstring = "<div class=\"card\" style=\"width: 200px; background-color: white;\"><img src=\"https://img.icons8.com/ios/50/000000/substation.png\" class=\"card-img-top\"style=\"width: 200px; height:100px\"><div class=\"card-body\"><br><h4 class=\"card-title\"></h4><hr style = \"margin-top: 2px; margin-bottom: 2px;\"><dl><dt>LM</dt><dd >8400</dd><hr style = \"margin-top: 2px; margin-bottom: 2px;\"><dt >Installation date</dt><dd class=>15 Jan 2020</dd><hr style = \"margin-top: 2px; margin-bottom: 2px;\"><dt>Running hours</dt><dd>482</dd><hr style = \"margin-top: 2px; margin-bottom: 2px;\"><dt translate=\"\">Status</dt><dd><span class = \"text-success\"> Active </span></dd><hr style = \"margin-top: 2px; margin-bottom: 2px;\"><a href = \"#\" class=\"card-link\">Request Maintenance</a></dl></div></div>";
            this.device_markers = {};
            this.devices = [];
            this.green_icon = leaflet.icon({
                iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAMAAAA1b9QjAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMlQTFRFAAAAAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhD0AtUWgAAAEN0Uk5TABCEJwYLReR/HAECKqf+00wNF2jq//maLAM9uOBiFnP1Okm36HgSk/O8ZdL98KH00Wl827FBw/redgmVvjTZ64668gpU0PkAAACSSURBVHicTc7XFoIwFETRGwE7MaJXxYqKghrF3vv/f5SGZEHO417zMAAykjFM0LOyuXyhqEGpbNMKq2ri1OrYaLZScNsditjtkUT6Aw//2UNXgTkaC0B/MlViBGEsdMaUzBc8FlwGjpysIgnI1xvxydruqBKM9uLB4XjCpPPlCuTmp4De/QHsyTXB1xs+oQ7Ivz9BtRFuDMkS8QAAAABJRU5ErkJggg==',
            });
            this.red_icon = leaflet.icon({
                iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAMAAAA1b9QjAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAN5QTFRFAAAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA9PpplAAAAEp0Uk5TAAMYBy6lNAkCH4LsiiIOT9L/11QQLJX6/JwwX9rfZBI4ovupPRN66u6BSbj9vlAejugjBFvGzGMFJ+3vLQZz3OB8CBy5R5mqmk5Ohx5FAAAAlUlEQVR4nFXMaReBUBSF4XMzRcIhucYklCFknufx//8hpVr3ej8+a68N4EcEAn9ForF4ggcxmZLSsshJJpvDfEHhJkW1hLRcYVdKtYaI9YYWAmnqLVeo0Q5Hna6JXlZPCKQ/oD8Z2iMfxhMH/SR16sFsvqCB0OVq7cpG32LYztgDHI4nZJ0vV7jdHYtl2jI8ni++9+cL8zcUfiF5cpMAAAAASUVORK5CYII=',
            });
            this.myIcon = null;
        }
        WidgetDemo.prototype.ngOnInit = function () {
            this.mymap = leaflet.map('mapid').setView([24.760698, 55.366582], 15);
            console.log('I am here');
            leaflet.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
                attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
                maxZoom: 18,
                id: 'mapbox/streets-v11',
                tileSize: 512,
                zoomOffset: -1,
                accessToken: 'sk.eyJ1IjoiY2V3OTc2NSIsImEiOiJja3N1aGpvZHIwMjloMm9wdDh2ZnNkbWtiIn0.kmUh2ED3rl3LQAygquxr3w'
            }).addTo(this.mymap);
            var i = 0;
            var substation_locations = [
                [24.758008, 55.362967],
                [24.759733, 55.361875],
                [24.767669, 55.369639],
                [24.761822, 55.363267],
                [24.761786, 55.363214]
            ];
            var location_names = [
                "PK11939A",
                "PK15326A",
                "PK15018A",
                "PK15292A",
                "PK15324A"
            ];
            var alarms = [
                "",
                "critical",
                "",
                "",
                ""
            ];
            var alarms_num = [
                0,
                2,
                0,
                0,
                0
            ];
            var feeders_num = [
                5,
                5,
                5,
                6,
                7
            ];
            var url = [
                "https://dewa.eu-latest.cumulocity.com/apps/app-builder/index.html#/application/57646/dashboard/405287/device/21250",
                "https://dewa.eu-latest.cumulocity.com/apps/app-builder/index.html#/application/57646/dashboard/822600",
                "https://dewa.eu-latest.cumulocity.com/apps/app-builder/index.html#/application/57646/dashboard/823524",
                "https://dewa.eu-latest.cumulocity.com/apps/app-builder/index.html#/application/57646/dashboard/821765",
                "https://dewa.eu-latest.cumulocity.com/apps/app-builder/index.html#/application/57646/dashboard/822603"
            ];
            for (i = 0; i < substation_locations.length; i++) {
                if (alarms[i] == "") {
                    this.myIcon = this.green_icon;
                }
                else if (alarms[i] == "critical") {
                    this.myIcon = this.red_icon;
                }
                this.myIcon.options.iconSize = ["10px", "10px"];
                var marker$1 = leaflet.marker([substation_locations[i][0], substation_locations[i][1]], { icon: this.myIcon });
                var ppstring = "<div class=\"card\" style=\"width: 150px; background-color: white; color: black;\">             \n            <div class=\"card-body\"><br><h4 class=\"card-title\"></h4> \n                <hr style = \"margin-top: 2px; margin-bottom: 2px;\"> \n                <dl>\n                    <dt>Name</dt>\n                    <dd> " + location_names[i] + " </dd>\n                    <hr style = \"margin-top: 2px; margin-bottom: 2px;\">                                                             \n                    <hr style = \"margin-top: 2px; margin-bottom: 2px;\">\n                    <dt translate=\"\">Active Alarms</dt>\n                    <dd><span class = \"text-warning\">" + alarms_num[i] + "</span></dd>\n                    <dt translate=\"\">Number of feeders</dt>\n                    <dd><span class = \"text-warning\">" + feeders_num[i] + "</span></dd>\n                    <hr style = \"margin-top: 2px; margin-bottom: 2px;\">\n                    <a href = \"" + url[i] + "\" class=\"card-link\">Access Dashboard</a>\n                </dl></div></div>";
                marker$1.addTo(this.mymap);
                marker$1.bindPopup(ppstring);
            }
        };
        ;
        WidgetDemo.ctorParameters = function () { return [
            { type: api.EventService },
            { type: api.OperationService },
            { type: ngxComponents.AlertService },
            { type: api.InventoryService }
        ]; };
        __decorate([
            core.Input()
        ], WidgetDemo.prototype, "config", void 0);
        WidgetDemo = __decorate([
            core.Component({
                template: "<p class=''>{{config.devices}} </p>\r\n<div id=\"mapid\"></div>\r\n\r\n",
                styles: ["../styles/index.css"]
            })
        ], WidgetDemo);
        return WidgetDemo;
    }());

    var ɵ0 = {
        id: 'acme.ddm.widget',
        label: 'Drill Down Map',
        description: 'Displays a Drill Down View',
        component: WidgetDemo,
        configComponent: WidgetConfigDemo,
        previewImage: previewImage,
    };
    // You can also import css from a module
    // import 'some-module/styles.css'
    var DemoWidgetModule = /** @class */ (function () {
        function DemoWidgetModule() {
        }
        DemoWidgetModule = __decorate([
            core.NgModule({
                imports: [
                    ngxComponents.CoreModule
                ],
                declarations: [WidgetDemo, WidgetConfigDemo],
                entryComponents: [WidgetDemo, WidgetConfigDemo],
                providers: [
                    // Connect the widget to Cumulocity via the HOOK_COMPONENT injection token
                    {
                        provide: ngxComponents.HOOK_COMPONENTS,
                        multi: true,
                        useValue: ɵ0
                    }
                ],
            })
        ], DemoWidgetModule);
        return DemoWidgetModule;
    }());

    exports.DemoWidgetModule = DemoWidgetModule;
    exports.ɵa = WidgetDemo;
    exports.ɵb = WidgetConfigDemo;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=custom-widget.umd.js.map
