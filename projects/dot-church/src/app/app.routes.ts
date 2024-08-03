import { Route } from '@angular/router';
import { PocComponent } from '@ctk/press/poc';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'poc',
        component: PocComponent
      }
    ]
  }
];
