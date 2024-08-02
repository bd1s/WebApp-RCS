import { ComplexBase } from '@syncfusion/ej2-react-base';
import { ToolbarItemModel } from '@syncfusion/ej2-schedule';
export interface ToolbarItemDirTypecast {
    template?: string | Function | any;
}
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
export declare class ToolbarItemDirective extends ComplexBase<ToolbarItemModel | ToolbarItemDirTypecast & {
    children?: React.ReactNode;
}, ToolbarItemModel | ToolbarItemDirTypecast> {
    static moduleName: string;
}
export declare class ToolbarItemsDirective extends ComplexBase<{}, {}> {
    static propertyName: string;
    static moduleName: string;
}
