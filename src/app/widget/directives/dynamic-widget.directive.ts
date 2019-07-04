import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
  selector: "[widget-host]"
})
export class DynamicWidgetDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
