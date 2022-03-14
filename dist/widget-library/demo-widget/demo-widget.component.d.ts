import { OnInit } from '@angular/core';
import { InventoryService } from '@c8y/ngx-components/api';
import { EventService, OperationService } from '@c8y/ngx-components/api';
import { AlertService } from '@c8y/ngx-components';
import * as L from 'leaflet';
import { IManagedObject } from "@c8y/client/lib/src/inventory/IManagedObject";
export declare class WidgetDemo implements OnInit {
    private eventService;
    private operationService;
    private alert;
    private inventoryService;
    config: any;
    mymap: L.map;
    popupstring: string;
    device_markers: {};
    devices: IManagedObject[];
    green_icon: L.icon;
    red_icon: L.icon;
    myIcon: L.icon;
    constructor(eventService: EventService, operationService: OperationService, alert: AlertService, inventoryService: InventoryService);
    ngOnInit(): void;
}
