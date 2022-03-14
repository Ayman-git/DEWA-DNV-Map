import * as tslib_1 from "tslib";
import { CoreModule, HOOK_COMPONENTS } from "@c8y/ngx-components";
import { WidgetConfigDemo } from "./demo-widget-config.component";
import { WidgetDemo } from "./demo-widget.component";
import { NgModule } from "@angular/core";
// This will import css from the styles folder (Note: will be applied globally, not scoped to the module/components)
import '../../styles/index.css';
var ɵ0 = {
    id: 'acme.ddm.widget',
    label: 'Drill Down Map',
    description: 'Displays a Drill Down View',
    component: WidgetDemo,
    configComponent: WidgetConfigDemo,
    previewImage: require("../../styles/previewImage.png"),
};
// You can also import css from a module
// import 'some-module/styles.css'
var DemoWidgetModule = /** @class */ (function () {
    function DemoWidgetModule() {
    }
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
    return DemoWidgetModule;
}());
export { DemoWidgetModule };
export { ɵ0 };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVtby13aWRnZXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vZGRtLXdpZGdldC8iLCJzb3VyY2VzIjpbImRlbW8td2lkZ2V0L2RlbW8td2lkZ2V0Lm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFVBQVUsRUFBRSxlQUFlLEVBQUMsTUFBTSxxQkFBcUIsQ0FBQztBQUNoRSxPQUFPLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxnQ0FBZ0MsQ0FBQztBQUNoRSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFFBQVEsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUV2QyxvSEFBb0g7QUFDcEgsT0FBTyxtQkFBbUIsQ0FBQztTQWdCTDtJQUNOLEVBQUUsRUFBRSxpQkFBaUI7SUFDckIsS0FBSyxFQUFFLGdCQUFnQjtJQUN2QixXQUFXLEVBQUUsNEJBQTRCO0lBQ3pDLFNBQVMsRUFBRSxVQUFVO0lBQ3JCLGVBQWUsRUFBRSxnQkFBZ0I7SUFDakMsWUFBWSxFQUFFLE9BQU8sQ0FBQywwQkFBMEIsQ0FBQztDQU1wRDtBQTFCYix3Q0FBd0M7QUFDeEMsa0NBQWtDO0FBNkJsQztJQUFBO0lBQStCLENBQUM7SUFBbkIsZ0JBQWdCO1FBM0I1QixRQUFRLENBQUM7WUFDTixPQUFPLEVBQUU7Z0JBQ0wsVUFBVTthQUNiO1lBQ0QsWUFBWSxFQUFFLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDO1lBQzVDLGVBQWUsRUFBRSxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQztZQUMvQyxTQUFTLEVBQUU7Z0JBQ1AsMEVBQTBFO2dCQUMxRTtvQkFDSSxPQUFPLEVBQUUsZUFBZTtvQkFDeEIsS0FBSyxFQUFFLElBQUk7b0JBQ1gsUUFBUSxJQVlQO2lCQUNKO2FBQ0o7U0FDSixDQUFDO09BQ1csZ0JBQWdCLENBQUc7SUFBRCx1QkFBQztDQUFBLEFBQWhDLElBQWdDO1NBQW5CLGdCQUFnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29yZU1vZHVsZSwgSE9PS19DT01QT05FTlRTfSBmcm9tIFwiQGM4eS9uZ3gtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge1dpZGdldENvbmZpZ0RlbW99IGZyb20gXCIuL2RlbW8td2lkZ2V0LWNvbmZpZy5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtXaWRnZXREZW1vfSBmcm9tIFwiLi9kZW1vLXdpZGdldC5jb21wb25lbnRcIjtcclxuaW1wb3J0IHtOZ01vZHVsZX0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcclxuXHJcbi8vIFRoaXMgd2lsbCBpbXBvcnQgY3NzIGZyb20gdGhlIHN0eWxlcyBmb2xkZXIgKE5vdGU6IHdpbGwgYmUgYXBwbGllZCBnbG9iYWxseSwgbm90IHNjb3BlZCB0byB0aGUgbW9kdWxlL2NvbXBvbmVudHMpXHJcbmltcG9ydCAnfnN0eWxlcy9pbmRleC5jc3MnO1xyXG5cclxuLy8gWW91IGNhbiBhbHNvIGltcG9ydCBjc3MgZnJvbSBhIG1vZHVsZVxyXG4vLyBpbXBvcnQgJ3NvbWUtbW9kdWxlL3N0eWxlcy5jc3MnXHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgaW1wb3J0czogW1xyXG4gICAgICAgIENvcmVNb2R1bGVcclxuICAgIF0sXHJcbiAgICBkZWNsYXJhdGlvbnM6IFtXaWRnZXREZW1vLCBXaWRnZXRDb25maWdEZW1vXSxcclxuICAgIGVudHJ5Q29tcG9uZW50czogW1dpZGdldERlbW8sIFdpZGdldENvbmZpZ0RlbW9dLFxyXG4gICAgcHJvdmlkZXJzOiBbXHJcbiAgICAgICAgLy8gQ29ubmVjdCB0aGUgd2lkZ2V0IHRvIEN1bXVsb2NpdHkgdmlhIHRoZSBIT09LX0NPTVBPTkVOVCBpbmplY3Rpb24gdG9rZW5cclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHByb3ZpZGU6IEhPT0tfQ09NUE9ORU5UUyxcclxuICAgICAgICAgICAgbXVsdGk6IHRydWUsXHJcbiAgICAgICAgICAgIHVzZVZhbHVlOiB7XHJcbiAgICAgICAgICAgICAgICBpZDogJ2FjbWUuZGRtLndpZGdldCcsXHJcbiAgICAgICAgICAgICAgICBsYWJlbDogJ0RyaWxsIERvd24gTWFwJyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnRGlzcGxheXMgYSBEcmlsbCBEb3duIFZpZXcnLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBXaWRnZXREZW1vLFxyXG4gICAgICAgICAgICAgICAgY29uZmlnQ29tcG9uZW50OiBXaWRnZXRDb25maWdEZW1vLFxyXG4gICAgICAgICAgICAgICAgcHJldmlld0ltYWdlOiByZXF1aXJlKFwifnN0eWxlcy9wcmV2aWV3SW1hZ2UucG5nXCIpLFxyXG4gICAgICAgICAgICAgICAgLy8gZGF0YToge1xyXG4gICAgICAgICAgICAgICAgLy8gICAgIHNldHRpbmdzOiB7XHJcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIG5vRGV2aWNlVGFyZ2V0OiB0cnVlXHJcbiAgICAgICAgICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgXSxcclxufSlcclxuZXhwb3J0IGNsYXNzIERlbW9XaWRnZXRNb2R1bGUge31cclxuIl19