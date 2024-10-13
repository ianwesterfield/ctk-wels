import { Directive, HostBinding } from '@angular/core';

@Directive({
  selector: 'section[pressContentGrid]',
  standalone: true,
})
export class CardGridDirective {
  @HostBinding('style.display') display = 'grid';
  @HostBinding('style.grid-template-columns') columns = 'repeat(auto-fill, minmax(300px, 1fr))';
  @HostBinding('style.grid-template-rows') rows = 'repeat(12, 1fr)';
  @HostBinding('style.height') height = 'calc(100%)';
  @HostBinding('style.grid-gap') gap = '1rem';
  @HostBinding('style.margin') margin = '.4rem';
}
