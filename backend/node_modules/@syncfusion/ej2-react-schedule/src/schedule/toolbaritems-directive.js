var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { ComplexBase } from '@syncfusion/ej2-react-base';
/**
 * `ToolbarItemsDirective` represent a custom toolbar items of the react Schedule.
 * It must be contained in a Schedule component(`SchduleComponent`).
 * ```tsx
 * <ScheduleComponent>
 *  <ToolbarItemsDirective>
 *   <ToolbarItemDirective name= 'Today'></ToolbarItemDirective>
 *   <ToolbarItemDirective name= 'DateRangeText'></ToolbarItemDirective>
 *   <ToolbarItemDirective prefixIcon='e-icons e-cut' text='Cut'></ToolbarItemDirective>
 *  <ToolbarItemsDirective>
 * </ScheduleComponent>
 * ```
 */
var ToolbarItemDirective = /** @class */ (function (_super) {
    __extends(ToolbarItemDirective, _super);
    function ToolbarItemDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolbarItemDirective.moduleName = 'toolbarItem';
    return ToolbarItemDirective;
}(ComplexBase));
export { ToolbarItemDirective };
var ToolbarItemsDirective = /** @class */ (function (_super) {
    __extends(ToolbarItemsDirective, _super);
    function ToolbarItemsDirective() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolbarItemsDirective.propertyName = 'toolbarItems';
    ToolbarItemsDirective.moduleName = 'toolbarItems';
    return ToolbarItemsDirective;
}(ComplexBase));
export { ToolbarItemsDirective };
