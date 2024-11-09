import { Directive, HostBinding } from "@angular/core";

@Directive({
  selector: "section[pressContentGrid]",
  standalone: true,
})
export class CardGridDirective {
  @HostBinding("style.display") display = "grid";
  @HostBinding("style.grid-gap") gap = "1rem";
  @HostBinding("style.grid-template-columns") columns =
    "repeat(auto-fill, minmax(300px, 1fr))";
  @HostBinding("style.grid-template-rows") rows = "repeat(12, 1fr)";
  @HostBinding("style.height") height = "calc(100% - .8rem)";
  @HostBinding("style.padding") padding = ".4rem .8rem";
  @HostBinding("style.width") width = "calc(100% - .8rem)";
}
