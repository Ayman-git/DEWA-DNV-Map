import previewImage from '~styles/previewImage.png';
import { __decorate } from 'tslib';
import { AlertService, CoreModule, HOOK_COMPONENTS } from '@c8y/ngx-components';
import { Input, Component, NgModule } from '@angular/core';
import { EventService, OperationService, InventoryService } from '@c8y/ngx-components/api';
import { icon, map, tileLayer, marker } from 'leaflet';
import '~styles/index.css';

var WidgetConfigDemo = /** @class */ (function () {
    function WidgetConfigDemo() {
        this.config = {};
    }
    __decorate([
        Input()
    ], WidgetConfigDemo.prototype, "config", void 0);
    WidgetConfigDemo = __decorate([
        Component({
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
        this.green_icon = icon({
            iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAMAAAA1b9QjAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMlQTFRFAAAAAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhD0AtUWgAAAEN0Uk5TABCEJwYLReR/HAECKqf+00wNF2jq//maLAM9uOBiFnP1Okm36HgSk/O8ZdL98KH00Wl827FBw/redgmVvjTZ64668gpU0PkAAACSSURBVHicTc7XFoIwFETRGwE7MaJXxYqKghrF3vv/f5SGZEHO417zMAAykjFM0LOyuXyhqEGpbNMKq2ri1OrYaLZScNsditjtkUT6Aw//2UNXgTkaC0B/MlViBGEsdMaUzBc8FlwGjpysIgnI1xvxydruqBKM9uLB4XjCpPPlCuTmp4De/QHsyTXB1xs+oQ7Ivz9BtRFuDMkS8QAAAABJRU5ErkJggg==',
        });
        this.red_icon = icon({
            iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAMAAAA1b9QjAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAN5QTFRFAAAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA9PpplAAAAEp0Uk5TAAMYBy6lNAkCH4LsiiIOT9L/11QQLJX6/JwwX9rfZBI4ovupPRN66u6BSbj9vlAejugjBFvGzGMFJ+3vLQZz3OB8CBy5R5mqmk5Ohx5FAAAAlUlEQVR4nFXMaReBUBSF4XMzRcIhucYklCFknufx//8hpVr3ej8+a68N4EcEAn9ForF4ggcxmZLSsshJJpvDfEHhJkW1hLRcYVdKtYaI9YYWAmnqLVeo0Q5Hna6JXlZPCKQ/oD8Z2iMfxhMH/SR16sFsvqCB0OVq7cpG32LYztgDHI4nZJ0vV7jdHYtl2jI8ni++9+cL8zcUfiF5cpMAAAAASUVORK5CYII=',
        });
        this.myIcon = null;
    }
    WidgetDemo.prototype.ngOnInit = function () {
        this.mymap = map('mapid').setView([24.760698, 55.366582], 15);
        console.log('I am here');
        tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
            var marker$1 = marker([substation_locations[i][0], substation_locations[i][1]], { icon: this.myIcon });
            var ppstring = "<div class=\"card\" style=\"width: 150px; background-color: white; color: black;\">             \n            <div class=\"card-body\"><br><h4 class=\"card-title\"></h4> \n                <hr style = \"margin-top: 2px; margin-bottom: 2px;\"> \n                <dl>\n                    <dt>Name</dt>\n                    <dd> " + location_names[i] + " </dd>\n                    <hr style = \"margin-top: 2px; margin-bottom: 2px;\">                                                             \n                    <hr style = \"margin-top: 2px; margin-bottom: 2px;\">\n                    <dt translate=\"\">Active Alarms</dt>\n                    <dd><span class = \"text-warning\">" + alarms_num[i] + "</span></dd>\n                    <dt translate=\"\">Number of feeders</dt>\n                    <dd><span class = \"text-warning\">" + feeders_num[i] + "</span></dd>\n                    <hr style = \"margin-top: 2px; margin-bottom: 2px;\">\n                    <a href = \"" + url[i] + "\" class=\"card-link\">Access Dashboard</a>\n                </dl></div></div>";
            marker$1.addTo(this.mymap);
            marker$1.bindPopup(ppstring);
        }
    };
    ;
    WidgetDemo.ctorParameters = function () { return [
        { type: EventService },
        { type: OperationService },
        { type: AlertService },
        { type: InventoryService }
    ]; };
    __decorate([
        Input()
    ], WidgetDemo.prototype, "config", void 0);
    WidgetDemo = __decorate([
        Component({
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
        NgModule({
            imports: [
                CoreModule
            ],
            declarations: [WidgetDemo, WidgetConfigDemo],
            entryComponents: [WidgetDemo, WidgetConfigDemo],
            providers: [
                // Connect the widget to Cumulocity via the HOOK_COMPONENT injection token
                {
                    provide: HOOK_COMPONENTS,
                    multi: true,
                    useValue: ɵ0
                }
            ],
        })
    ], DemoWidgetModule);
    return DemoWidgetModule;
}());

/* Add your widget's module(s) here */

/**
 * Generated bundle index. Do not edit.
 */

export { DemoWidgetModule, WidgetDemo as ɵa, WidgetConfigDemo as ɵb };
//# sourceMappingURL=custom-widget.js.map
