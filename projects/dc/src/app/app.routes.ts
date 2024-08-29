import { StoryblokPocComponent } from '@ctk/dc/src/app/poc/poc.component';

import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'poc',
    pathMatch: 'prefix',
    component: StoryblokPocComponent,
  },
];
