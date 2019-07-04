import { DOCUMENT } from "@angular/common";
import { Inject, Injectable } from "@angular/core";

@Injectable()
export class ThemeService {
  linkRef: HTMLLinkElement;

  darkTheme: Record<string, string> = {
    name: "Dark",
    href: "assets/themes/clarity-ui-dark.min.css"
  };

  constructor(@Inject(DOCUMENT) private document: Document) {}

  setTheme(themeName: string) {
    const headElement: HTMLHeadElement = this.document.querySelector("head");

    if (this.darkTheme.name === themeName) {
      this.linkRef = this.document.createElement("link");
      this.linkRef.rel = "stylesheet";
      this.linkRef.href = this.darkTheme.href;
      headElement.appendChild(this.linkRef);
    } else {
      let link = headElement.querySelectorAll(
        `link[href='${this.darkTheme.href}']`
      )[0];
      link.parentNode.removeChild(link);
    }
  }
}
