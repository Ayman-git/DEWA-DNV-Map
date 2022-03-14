import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { InventoryService } from '@c8y/ngx-components/api';
import { EventService, OperationService } from '@c8y/ngx-components/api';
import { AlertService } from '@c8y/ngx-components';
import * as L from 'leaflet';
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
        this.green_icon = L.icon({
            iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAMAAAA1b9QjAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAMlQTFRFAAAAAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhDAHhD0AtUWgAAAEN0Uk5TABCEJwYLReR/HAECKqf+00wNF2jq//maLAM9uOBiFnP1Okm36HgSk/O8ZdL98KH00Wl827FBw/redgmVvjTZ64668gpU0PkAAACSSURBVHicTc7XFoIwFETRGwE7MaJXxYqKghrF3vv/f5SGZEHO417zMAAykjFM0LOyuXyhqEGpbNMKq2ri1OrYaLZScNsditjtkUT6Aw//2UNXgTkaC0B/MlViBGEsdMaUzBc8FlwGjpysIgnI1xvxydruqBKM9uLB4XjCpPPlCuTmp4De/QHsyTXB1xs+oQ7Ivz9BtRFuDMkS8QAAAABJRU5ErkJggg==',
        });
        this.red_icon = L.icon({
            iconUrl: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAPCAMAAAA1b9QjAAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAN5QTFRFAAAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA/wAA9PpplAAAAEp0Uk5TAAMYBy6lNAkCH4LsiiIOT9L/11QQLJX6/JwwX9rfZBI4ovupPRN66u6BSbj9vlAejugjBFvGzGMFJ+3vLQZz3OB8CBy5R5mqmk5Ohx5FAAAAlUlEQVR4nFXMaReBUBSF4XMzRcIhucYklCFknufx//8hpVr3ej8+a68N4EcEAn9ForF4ggcxmZLSsshJJpvDfEHhJkW1hLRcYVdKtYaI9YYWAmnqLVeo0Q5Hna6JXlZPCKQ/oD8Z2iMfxhMH/SR16sFsvqCB0OVq7cpG32LYztgDHI4nZJ0vV7jdHYtl2jI8ni++9+cL8zcUfiF5cpMAAAAASUVORK5CYII=',
        });
        this.myIcon = null;
    }
    WidgetDemo.prototype.ngOnInit = function () {
        this.mymap = L.map('mapid').setView([24.760698, 55.366582], 15);
        console.log('I am here');
        L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
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
            var marker = L.marker([substation_locations[i][0], substation_locations[i][1]], { icon: this.myIcon });
            var ppstring = "<div class=\"card\" style=\"width: 150px; background-color: white; color: black;\">             \n            <div class=\"card-body\"><br><h4 class=\"card-title\"></h4> \n                <hr style = \"margin-top: 2px; margin-bottom: 2px;\"> \n                <dl>\n                    <dt>Name</dt>\n                    <dd> " + location_names[i] + " </dd>\n                    <hr style = \"margin-top: 2px; margin-bottom: 2px;\">                                                             \n                    <hr style = \"margin-top: 2px; margin-bottom: 2px;\">\n                    <dt translate=\"\">Active Alarms</dt>\n                    <dd><span class = \"text-warning\">" + alarms_num[i] + "</span></dd>\n                    <dt translate=\"\">Number of feeders</dt>\n                    <dd><span class = \"text-warning\">" + feeders_num[i] + "</span></dd>\n                    <hr style = \"margin-top: 2px; margin-bottom: 2px;\">\n                    <a href = \"" + url[i] + "\" class=\"card-link\">Access Dashboard</a>\n                </dl></div></div>";
            marker.addTo(this.mymap);
            marker.bindPopup(ppstring);
        }
    };
    ;
    WidgetDemo.ctorParameters = function () { return [
        { type: EventService },
        { type: OperationService },
        { type: AlertService },
        { type: InventoryService }
    ]; };
    tslib_1.__decorate([
        Input()
    ], WidgetDemo.prototype, "config", void 0);
    WidgetDemo = tslib_1.__decorate([
        Component({
            template: "<p class=''>{{config.devices}} </p>\r\n<div id=\"mapid\"></div>\r\n\r\n",
            styles: ["../styles/index.css"]
        })
    ], WidgetDemo);
    return WidgetDemo;
}());
export { WidgetDemo };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby13aWRnZXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGRtLXdpZGdldC8iLCJzb3VyY2VzIjpbImRlbW8td2lkZ2V0L2RlbW8td2lkZ2V0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxLQUFLLEVBQVUsTUFBTSxlQUFlLENBQUM7QUFDekQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFDM0QsT0FBTyxFQUFDLFlBQVksRUFBRSxnQkFBZ0IsRUFBQyxNQUFNLHlCQUF5QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQztBQUNuRCxPQUFPLEtBQUssQ0FBQyxNQUFNLFNBQVMsQ0FBQztBQU83QjtJQTBCSSxvQkFFWSxZQUEwQixFQUMxQixnQkFBa0MsRUFDbEMsS0FBbUIsRUFDbkIsZ0JBQWtDO1FBSGxDLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBQzFCLHFCQUFnQixHQUFoQixnQkFBZ0IsQ0FBa0I7UUFDbEMsVUFBSyxHQUFMLEtBQUssQ0FBYztRQUNuQixxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQWtCO1FBMUJ2QyxVQUFLLEdBQVUsSUFBSSxDQUFDO1FBQ3BCLGdCQUFXLEdBQUksNnhCQUE2eEIsQ0FBQztRQUM1eUIsbUJBQWMsR0FBRyxFQUFFLENBQUE7UUFDcEIsWUFBTyxHQUFxQixFQUFFLENBQUE7UUFJOUIsZUFBVSxHQUFXLENBQUMsQ0FBQyxJQUFJLENBQUM7WUFDL0IsT0FBTyxFQUFFLDR0QkFBNHRCO1NBRXh1QixDQUFDLENBQUE7UUFFSyxhQUFRLEdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQztZQUNqQyxPQUFPLEVBQUUsb3dCQUFvd0I7U0FFaHhCLENBQUMsQ0FBQTtRQUtTLFdBQU0sR0FBVyxJQUFJLENBQUM7SUFRdEIsQ0FBQztJQUVSLDZCQUFRLEdBQVI7UUFJSSxJQUFJLENBQUMsS0FB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QzlCO0lBR0wsQ0FBQztJQUFBLENBQUM7O2dCQTNId0IsWUFBWTtnQkFDUixnQkFBZ0I7Z0JBQzNCLFlBQVk7Z0JBQ0QsZ0JBQWdCOztJQTVCckM7UUFBUixLQUFLLEVBQUU7OENBQVE7SUFIUCxVQUFVO1FBSnRCLFNBQVMsQ0FBQztZQUNQLG1GQUEyQztxQkFDakMscUJBQXFCO1NBQ2xDLENBQUM7T0FDVyxVQUFVLENBd0p0QjtJQUFELGlCQUFDO0NBQUEsQUF4SkQsSUF3SkM7U0F4SlksVUFBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBJbnZlbnRvcnlTZXJ2aWNlIH0gZnJvbSAnQGM4eS9uZ3gtY29tcG9uZW50cy9hcGknO1xyXG5pbXBvcnQge0V2ZW50U2VydmljZSwgT3BlcmF0aW9uU2VydmljZX0gZnJvbSAnQGM4eS9uZ3gtY29tcG9uZW50cy9hcGknO1xyXG5pbXBvcnQgeyBBbGVydFNlcnZpY2UgfSBmcm9tICdAYzh5L25neC1jb21wb25lbnRzJztcclxuaW1wb3J0ICogYXMgTCBmcm9tICdsZWFmbGV0JztcclxuaW1wb3J0IHtJTWFuYWdlZE9iamVjdH0gZnJvbSBcIkBjOHkvY2xpZW50L2xpYi9zcmMvaW52ZW50b3J5L0lNYW5hZ2VkT2JqZWN0XCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHRlbXBsYXRlVXJsOiAnLi9kZW1vLXdpZGdldC5jb21wb25lbnQuaHRtbCcsXHJcbiAgICBzdHlsZXM6IFsgYC4uL3N0eWxlcy9pbmRleC5jc3NgIF1cclxufSlcclxuZXhwb3J0IGNsYXNzIFdpZGdldERlbW8gaW1wbGVtZW50cyBPbkluaXR7XHJcblxyXG5cclxuICAgIEBJbnB1dCgpIGNvbmZpZztcclxuXHJcbiAgICBwdWJsaWMgbXltYXA6IEwubWFwID0gbnVsbDtcclxuICAgIHB1YmxpYyBwb3B1cHN0cmluZyA9ICBcIjxkaXYgY2xhc3M9XFxcImNhcmRcXFwiIHN0eWxlPVxcXCJ3aWR0aDogMjAwcHg7IGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcXCI+PGltZyBzcmM9XFxcImh0dHBzOi8vaW1nLmljb25zOC5jb20vaW9zLzUwLzAwMDAwMC9zdWJzdGF0aW9uLnBuZ1xcXCIgY2xhc3M9XFxcImNhcmQtaW1nLXRvcFxcXCJzdHlsZT1cXFwid2lkdGg6IDIwMHB4OyBoZWlnaHQ6MTAwcHhcXFwiPjxkaXYgY2xhc3M9XFxcImNhcmQtYm9keVxcXCI+PGJyPjxoNCBjbGFzcz1cXFwiY2FyZC10aXRsZVxcXCI+PC9oND48aHIgc3R5bGUgPSBcXFwibWFyZ2luLXRvcDogMnB4OyBtYXJnaW4tYm90dG9tOiAycHg7XFxcIj48ZGw+PGR0PkxNPC9kdD48ZGQgPjg0MDA8L2RkPjxociBzdHlsZSA9IFxcXCJtYXJnaW4tdG9wOiAycHg7IG1hcmdpbi1ib3R0b206IDJweDtcXFwiPjxkdCA+SW5zdGFsbGF0aW9uIGRhdGU8L2R0PjxkZCBjbGFzcz0+MTUgSmFuIDIwMjA8L2RkPjxociBzdHlsZSA9IFxcXCJtYXJnaW4tdG9wOiAycHg7IG1hcmdpbi1ib3R0b206IDJweDtcXFwiPjxkdD5SdW5uaW5nIGhvdXJzPC9kdD48ZGQ+NDgyPC9kZD48aHIgc3R5bGUgPSBcXFwibWFyZ2luLXRvcDogMnB4OyBtYXJnaW4tYm90dG9tOiAycHg7XFxcIj48ZHQgdHJhbnNsYXRlPVxcXCJcXFwiPlN0YXR1czwvZHQ+PGRkPjxzcGFuIGNsYXNzID0gXFxcInRleHQtc3VjY2Vzc1xcXCI+IEFjdGl2ZSA8L3NwYW4+PC9kZD48aHIgc3R5bGUgPSBcXFwibWFyZ2luLXRvcDogMnB4OyBtYXJnaW4tYm90dG9tOiAycHg7XFxcIj48YSBocmVmID0gXFxcIiNcXFwiIGNsYXNzPVxcXCJjYXJkLWxpbmtcXFwiPlJlcXVlc3QgTWFpbnRlbmFuY2U8L2E+PC9kbD48L2Rpdj48L2Rpdj5cIjtcclxuICAgIHB1YmxpYyAgZGV2aWNlX21hcmtlcnMgPSB7fVxyXG4gICAgcHVibGljIGRldmljZXM6IElNYW5hZ2VkT2JqZWN0W10gPSBbXVxyXG4gICAgXHJcbiAgICBcclxuXHJcbiAgICBwdWJsaWMgZ3JlZW5faWNvbjogTC5pY29uID0gTC5pY29uKHtcclxuICAgICAgICBpY29uVXJsOiAnZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCRUFBQUFQQ0FNQUFBQTFiOVFqQUFBQUFYTlNSMElCMmNrc2Z3QUFBQWx3U0ZsekFBQUxFd0FBQ3hNQkFKcWNHQUFBQU1sUVRGUkZBQUFBQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEQUhoREFIaERBSGhEMEF0VVdnQUFBRU4wVWs1VEFCQ0VKd1lMUmVSL0hBRUNLcWYrMDB3TkYyanEvL21hTEFNOXVPQmlGblAxT2ttMzZIZ1NrL084WmRMOThLSDAwV2w4MjdGQncvcmVkZ21WdmpUWjY0NjY4Z3BVMFBrQUFBQ1NTVVJCVkhpY1RjN1hGb0l3RkVUUkd3RTdNYUpYeFlxS2dockYzdnYvZjVTR1pFSE80MTd6TUFBeWtqRk0wTE95dVh5aHFFR3BiTk1LcTJyaTFPcllhTFpTY05zZGl0anRrVVQ2QXcvLzJVTlhnVGthQzBCL01sVmlCR0VzZE1hVXpCYzhGbHdHanB5c0lnbkkxeHZ4eWRydXFCS005dUxCNFhqQ3BQUGxDdVRtcDREZS9RSHN5VFhCMXhzK29RN0l2ejlCdFJGdURNa1M4UUFBQUFCSlJVNUVya0pnZ2c9PScsXHJcbiAgICAgICAgXHJcbiAgICB9KVxyXG5cclxuICAgIHB1YmxpYyByZWRfaWNvbjogTC5pY29uID0gTC5pY29uKHtcclxuICAgIGljb25Vcmw6ICdkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJFQUFBQVBDQU1BQUFBMWI5UWpBQUFBQVhOU1IwSUIyY2tzZndBQUFBbHdTRmx6QUFBTEV3QUFDeE1CQUpxY0dBQUFBTjVRVEZSRkFBQUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBL3dBQS93QUEvd0FBOVBwcGxBQUFBRXAwVWs1VEFBTVlCeTZsTkFrQ0g0THNpaUlPVDlMLzExUVFMSlg2L0p3d1g5cmZaQkk0b3Z1cFBSTjY2dTZCU2JqOXZsQWVqdWdqQkZ2R3pHTUZKKzN2TFFaejNPQjhDQnk1UjVtcW1rNU9oeDVGQUFBQWxVbEVRVlI0bkZYTWFSZUJVQlNGNFhNelJjSWh1Y1lrbENGa251ZngvLzhocFZyM2VqOCthNjhONEVjRUFuOUZvckY0Z2djeG1aTFNzc2hKSnB2RGZFSGhKa1cxaExSY1lWZEt0WWFJOVlZV0FtbnFMVmVvMFE1SG5hNkpYbFpQQ0tRL29EOFoyaU1meGhNSC9TUjE2c0ZzdnFDQjBPVnE3Y3BHMzJMWXp0Z0RISTRuWkowdlY3amRIWXRsMmpJOG5pKys5K2NMOHpjVWZpRjVjcE1BQUFBQVNVVk9SSzVDWUlJPScsXHJcbiAgICBcclxufSlcclxuXHJcblxyXG5cclxuXHJcbiAgICBwdWJsaWMgbXlJY29uOiBMLmljb24gPSBudWxsO1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgIFxyXG4gICAgICAgIHByaXZhdGUgZXZlbnRTZXJ2aWNlOiBFdmVudFNlcnZpY2UsXHJcbiAgICAgICAgcHJpdmF0ZSBvcGVyYXRpb25TZXJ2aWNlOiBPcGVyYXRpb25TZXJ2aWNlLFxyXG4gICAgICAgIHByaXZhdGUgYWxlcnQ6IEFsZXJ0U2VydmljZSxcclxuICAgICAgICBwcml2YXRlIGludmVudG9yeVNlcnZpY2U6IEludmVudG9yeVNlcnZpY2VcclxuXHJcbiAgICAgICAgKSB7fVxyXG5cclxuICAgIG5nT25Jbml0KCk6IHZvaWQge1xyXG4gICAgXHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgIHRoaXMubXltYXAgPSBMLm1hcCgnbWFwaWQnKS5zZXRWaWV3KFsyNC43NjA2OTgsIDU1LjM2NjU4Ml0sIDE1KTtcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2coJ0kgYW0gaGVyZScpXHJcblxyXG4gICAgICAgIEwudGlsZUxheWVyKCdodHRwczovL2FwaS5tYXBib3guY29tL3N0eWxlcy92MS97aWR9L3RpbGVzL3t6fS97eH0ve3l9P2FjY2Vzc190b2tlbj17YWNjZXNzVG9rZW59Jywge1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGlvbjogJ01hcCBkYXRhICZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzLCBJbWFnZXJ5IMKpIDxhIGhyZWY9XCJodHRwczovL3d3dy5tYXBib3guY29tL1wiPk1hcGJveDwvYT4nLFxyXG4gICAgICAgICAgICBtYXhab29tOiAxOCxcclxuICAgICAgICAgICAgaWQ6ICdtYXBib3gvc3RyZWV0cy12MTEnLFxyXG4gICAgICAgICAgICB0aWxlU2l6ZTogNTEyLFxyXG4gICAgICAgICAgICB6b29tT2Zmc2V0OiAtMSxcclxuICAgICAgICAgICAgYWNjZXNzVG9rZW46ICdzay5leUoxSWpvaVkyVjNPVGMyTlNJc0ltRWlPaUpqYTNOMWFHcHZaSEl3TWpsb01tOXdkRGgyWm5Oa2JXdGlJbjAua21VaDJFRDNybDNMUUF5Z3F1eHIzdydcclxuICAgICAgICB9KS5hZGRUbyh0aGlzLm15bWFwKTtcclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgIGxldCBpID0gMDtcclxuICAgICAgICBsZXQgc3Vic3RhdGlvbl9sb2NhdGlvbnM6IG51bWJlcltdW10gPSBbXHJcbiAgICAgICAgICAgIFsyNC43NTgwMDgsNTUuMzYyOTY3XSxcclxuICAgICAgICAgICAgWzI0Ljc1OTczMywgNTUuMzYxODc1XSxcclxuICAgICAgICAgICAgWzI0Ljc2NzY2OSwgNTUuMzY5NjM5XSxcclxuICAgICAgICAgICAgWzI0Ljc2MTgyMiwgNTUuMzYzMjY3XSxcclxuICAgICAgICAgICAgWzI0Ljc2MTc4NiwgNTUuMzYzMjE0XVxyXG4gICAgICAgIF1cclxuICAgICAgICBcclxuICAgICAgICBsZXQgbG9jYXRpb25fbmFtZXM6IHN0cmluZ1tdID0gW1xyXG4gICAgICAgICAgICBcIlBLMTE5MzlBXCIsXHJcbiAgICAgICAgICAgIFwiUEsxNTMyNkFcIixcclxuICAgICAgICAgICAgXCJQSzE1MDE4QVwiLFxyXG4gICAgICAgICAgICBcIlBLMTUyOTJBXCIsXHJcbiAgICAgICAgICAgIFwiUEsxNTMyNEFcIlxyXG4gICAgICAgICAgICBcclxuICAgICAgICBdXHJcbiAgICAgICAgbGV0IGFsYXJtczogc3RyaW5nW10gPSBbXHJcbiAgICAgICAgICAgIFwiXCIsXHJcbiAgICAgICAgICAgIFwiY3JpdGljYWxcIixcclxuICAgICAgICAgICAgXCJcIixcclxuICAgICAgICAgICAgXCJcIixcclxuICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgIF1cclxuICAgICAgICBsZXQgYWxhcm1zX251bTogbnVtYmVyW10gPSBbXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDIsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDAsXHJcbiAgICAgICAgICAgIDBcclxuICAgICAgICBdXHJcbiAgICAgICAgbGV0IGZlZWRlcnNfbnVtOiBudW1iZXJbXSA9W1xyXG4gICAgICAgICAgICA1LFxyXG4gICAgICAgICAgICA1LFxyXG4gICAgICAgICAgICA1LFxyXG4gICAgICAgICAgICA2LFxyXG4gICAgICAgICAgICA3XHJcbiAgICAgICAgXVxyXG5cclxuICAgICAgIFxyXG4gICAgICAgIGxldCB1cmw6IHN0cmluZ1tdID1bXHJcbiAgICAgICAgICAgIGBodHRwczovL2Rld2EuZXUtbGF0ZXN0LmN1bXVsb2NpdHkuY29tL2FwcHMvYXBwLWJ1aWxkZXIvaW5kZXguaHRtbCMvYXBwbGljYXRpb24vNTc2NDYvZGFzaGJvYXJkLzQwNTI4Ny9kZXZpY2UvMjEyNTBgLFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9kZXdhLmV1LWxhdGVzdC5jdW11bG9jaXR5LmNvbS9hcHBzL2FwcC1idWlsZGVyL2luZGV4Lmh0bWwjL2FwcGxpY2F0aW9uLzU3NjQ2L2Rhc2hib2FyZC84MjI2MDBgLFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9kZXdhLmV1LWxhdGVzdC5jdW11bG9jaXR5LmNvbS9hcHBzL2FwcC1idWlsZGVyL2luZGV4Lmh0bWwjL2FwcGxpY2F0aW9uLzU3NjQ2L2Rhc2hib2FyZC84MjM1MjRgLFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9kZXdhLmV1LWxhdGVzdC5jdW11bG9jaXR5LmNvbS9hcHBzL2FwcC1idWlsZGVyL2luZGV4Lmh0bWwjL2FwcGxpY2F0aW9uLzU3NjQ2L2Rhc2hib2FyZC84MjE3NjVgLFxyXG4gICAgICAgICAgICBgaHR0cHM6Ly9kZXdhLmV1LWxhdGVzdC5jdW11bG9jaXR5LmNvbS9hcHBzL2FwcC1idWlsZGVyL2luZGV4Lmh0bWwjL2FwcGxpY2F0aW9uLzU3NjQ2L2Rhc2hib2FyZC84MjI2MDNgXHJcblxyXG4gICAgICAgICAgIF1cclxuXHJcbiAgICAgICAgZm9yIChpPTA7IGk8c3Vic3RhdGlvbl9sb2NhdGlvbnMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcblxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYoYWxhcm1zW2ldID09IFwiXCIpe1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB0aGlzLm15SWNvbiA9IHRoaXMuZ3JlZW5faWNvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGVsc2UgaWYoYWxhcm1zW2ldID09IFwiY3JpdGljYWxcIil7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHRoaXMubXlJY29uID0gdGhpcy5yZWRfaWNvbjtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuXHJcblxyXG4gICAgICAgICAgICB0aGlzLm15SWNvbi5vcHRpb25zLmljb25TaXplID0gW1wiMTBweFwiLCBcIjEwcHhcIl07XHJcbiAgICAgICAgICAgICBcclxuIFxyXG4gICAgICAgICAgICBsZXQgbWFya2VyID0gTC5tYXJrZXIoW3N1YnN0YXRpb25fbG9jYXRpb25zW2ldWzBdLCBzdWJzdGF0aW9uX2xvY2F0aW9uc1tpXVsxXV0sICB7aWNvbjogdGhpcy5teUljb259KVxyXG4gICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgbGV0IHBwc3RyaW5nID0gIGA8ZGl2IGNsYXNzPVxcXCJjYXJkXFxcIiBzdHlsZT1cXFwid2lkdGg6IDE1MHB4OyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgY29sb3I6IGJsYWNrO1xcXCI+ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVxcXCJjYXJkLWJvZHlcXFwiPjxicj48aDQgY2xhc3M9XFxcImNhcmQtdGl0bGVcXFwiPjwvaDQ+IFxyXG4gICAgICAgICAgICAgICAgPGhyIHN0eWxlID0gXFxcIm1hcmdpbi10b3A6IDJweDsgbWFyZ2luLWJvdHRvbTogMnB4O1xcXCI+IFxyXG4gICAgICAgICAgICAgICAgPGRsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkdD5OYW1lPC9kdD5cclxuICAgICAgICAgICAgICAgICAgICA8ZGQ+IGArbG9jYXRpb25fbmFtZXNbaV0rYCA8L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxociBzdHlsZSA9IFxcXCJtYXJnaW4tdG9wOiAycHg7IG1hcmdpbi1ib3R0b206IDJweDtcXFwiPiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICA8aHIgc3R5bGUgPSBcXFwibWFyZ2luLXRvcDogMnB4OyBtYXJnaW4tYm90dG9tOiAycHg7XFxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZHQgdHJhbnNsYXRlPVxcXCJcXFwiPkFjdGl2ZSBBbGFybXM8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZD48c3BhbiBjbGFzcyA9IFxcXCJ0ZXh0LXdhcm5pbmdcXFwiPmAgKyBhbGFybXNfbnVtW2ldICsgYDwvc3Bhbj48L2RkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkdCB0cmFuc2xhdGU9XFxcIlxcXCI+TnVtYmVyIG9mIGZlZWRlcnM8L2R0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkZD48c3BhbiBjbGFzcyA9IFxcXCJ0ZXh0LXdhcm5pbmdcXFwiPmAgKyBmZWVkZXJzX251bVtpXSArIGA8L3NwYW4+PC9kZD5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgc3R5bGUgPSBcXFwibWFyZ2luLXRvcDogMnB4OyBtYXJnaW4tYm90dG9tOiAycHg7XFxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmID0gXFxcImArIHVybFtpXSArYFxcXCIgY2xhc3M9XFxcImNhcmQtbGlua1xcXCI+QWNjZXNzIERhc2hib2FyZDwvYT5cclxuICAgICAgICAgICAgICAgIDwvZGw+PC9kaXY+PC9kaXY+YDtcclxuXHJcbiAgICAgICAgICAgIG1hcmtlci5hZGRUbyh0aGlzLm15bWFwKTtcclxuXHJcbiAgICAgICAgICAgIG1hcmtlci5iaW5kUG9wdXAocHBzdHJpbmcpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgIFxyXG4gICAgfTtcclxufVxyXG5cclxuXHJcbiJdfQ==