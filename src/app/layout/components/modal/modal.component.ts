import { Component, ViewEncapsulation } from "@angular/core";

@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.scss"],
  encapsulation: ViewEncapsulation.None
})
export class ModalComponent {
  open: boolean = false;

  onOpen() {
    this.open = true;
  }
}
