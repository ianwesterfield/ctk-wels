import { Route } from '@angular/router';
import { StoryblokPocComponent } from './poc/poc.component';

export const appRoutes: Route[] = [
  {
    path: 'poc',
    pathMatch: 'prefix',
    component: StoryblokPocComponent,
  },
];
