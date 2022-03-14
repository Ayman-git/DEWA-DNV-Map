import * as tslib_1 from "tslib";
import { CoreModule, HOOK_COMPONENTS } from "@c8y/ngx-components";
import { WidgetConfigDemo } from "./demo-widget-config.component";
import { WidgetDemo } from "./demo-widget.component";
import { NgModule } from "@angular/core";
// This will import css from the styles folder (Note: will be applied globally, not scoped to the module/components)
import '../../styles/index.css';
const ɵ0 = {
    id: 'acme.ddm.widget',
    label: 'Drill Down Map',
    description: 'Displays a Drill Down View',
    component: WidgetDemo,
    configComponent: WidgetConfigDemo,
    previewImage: require("../../styles/previewImage.png"),
};
// You can also import css from a module
// import 'some-module/styles.css'
let DemoWidgetModule = class DemoWidgetModule {
};
DemoWidgetModule = tslib_1.__decorate([
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
export { DemoWidgetModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby13aWRnZXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGRtLXdpZGdldC8iLCJzb3VyY2VzIjpbImRlbW8td2lkZ2V0L2RlbW8td2lkZ2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV2QyxvSEFBb0g7QUFDcEgsT0FBTyxtQkFBbUIsQ0FBQztXQWdCTDtJQUNOLEVBQUUsRUFBRSxpQkFBaUI7SUFDckIsS0FBSyxFQUFFLGdCQUFnQjtJQUN2QixXQUFXLEVBQUUsNEJBQTRCO0lBQ3pDLFNBQVMsRUFBRSxVQUFVO0lBQ3JCLGVBQWUsRUFBRSxnQkFBZ0I7SUFDakMsWUFBWSxFQUFFLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztDQU1wRDtBQTFCYix3Q0FBd0M7QUFDeEMsa0NBQWtDO0FBNkJsQyxJQUFhLGdCQUFnQixHQUE3QixNQUFhLGdCQUFnQjtDQUFHLENBQUE7QUFBbkIsZ0JBQWdCO0lBM0I1QixRQUFRLENBQUM7UUFDTixPQUFPLEVBQUU7WUFDTCxVQUFVO1NBQ2I7UUFDRCxZQUFZLEVBQUUsQ0FBQyxVQUFVLEVBQUUsZ0JBQWdCLENBQUM7UUFDNUMsZUFBZSxFQUFFLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDO1FBQy9DLFNBQVMsRUFBRTtZQUNQLDBFQUEwRTtZQUMxRTtnQkFDSSxPQUFPLEVBQUUsZUFBZTtnQkFDeEIsS0FBSyxFQUFFLElBQUk7Z0JBQ1gsUUFBUSxJQVlQO2FBQ0o7U0FDSjtLQUNKLENBQUM7R0FDVyxnQkFBZ0IsQ0FBRztTQUFuQixnQkFBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvcmVNb2R1bGUsIEhPT0tfQ09NUE9ORU5UU30gZnJvbSBcIkBjOHkvbmd4LWNvbXBvbmVudHNcIjtcclxuaW1wb3J0IHtXaWRnZXRDb25maWdEZW1vfSBmcm9tIFwiLi9kZW1vLXdpZGdldC1jb25maWcuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7V2lkZ2V0RGVtb30gZnJvbSBcIi4vZGVtby13aWRnZXQuY29tcG9uZW50XCI7XHJcbmltcG9ydCB7TmdNb2R1bGV9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG4vLyBUaGlzIHdpbGwgaW1wb3J0IGNzcyBmcm9tIHRoZSBzdHlsZXMgZm9sZGVyIChOb3RlOiB3aWxsIGJlIGFwcGxpZWQgZ2xvYmFsbHksIG5vdCBzY29wZWQgdG8gdGhlIG1vZHVsZS9jb21wb25lbnRzKVxyXG5pbXBvcnQgJ35zdHlsZXMvaW5kZXguY3NzJztcclxuXHJcbi8vIFlvdSBjYW4gYWxzbyBpbXBvcnQgY3NzIGZyb20gYSBtb2R1bGVcclxuLy8gaW1wb3J0ICdzb21lLW1vZHVsZS9zdHlsZXMuY3NzJ1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICAgIGltcG9ydHM6IFtcclxuICAgICAgICBDb3JlTW9kdWxlXHJcbiAgICBdLFxyXG4gICAgZGVjbGFyYXRpb25zOiBbV2lkZ2V0RGVtbywgV2lkZ2V0Q29uZmlnRGVtb10sXHJcbiAgICBlbnRyeUNvbXBvbmVudHM6IFtXaWRnZXREZW1vLCBXaWRnZXRDb25maWdEZW1vXSxcclxuICAgIHByb3ZpZGVyczogW1xyXG4gICAgICAgIC8vIENvbm5lY3QgdGhlIHdpZGdldCB0byBDdW11bG9jaXR5IHZpYSB0aGUgSE9PS19DT01QT05FTlQgaW5qZWN0aW9uIHRva2VuXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwcm92aWRlOiBIT09LX0NPTVBPTkVOVFMsXHJcbiAgICAgICAgICAgIG11bHRpOiB0cnVlLFxyXG4gICAgICAgICAgICB1c2VWYWx1ZToge1xyXG4gICAgICAgICAgICAgICAgaWQ6ICdhY21lLmRkbS53aWRnZXQnLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6ICdEcmlsbCBEb3duIE1hcCcsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0Rpc3BsYXlzIGEgRHJpbGwgRG93biBWaWV3JyxcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogV2lkZ2V0RGVtbyxcclxuICAgICAgICAgICAgICAgIGNvbmZpZ0NvbXBvbmVudDogV2lkZ2V0Q29uZmlnRGVtbyxcclxuICAgICAgICAgICAgICAgIHByZXZpZXdJbWFnZTogcmVxdWlyZShcIn5zdHlsZXMvcHJldmlld0ltYWdlLnBuZ1wiKSxcclxuICAgICAgICAgICAgICAgIC8vIGRhdGE6IHtcclxuICAgICAgICAgICAgICAgIC8vICAgICBzZXR0aW5nczoge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBub0RldmljZVRhcmdldDogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIF0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBEZW1vV2lkZ2V0TW9kdWxlIHt9XHJcbiJdfQ==