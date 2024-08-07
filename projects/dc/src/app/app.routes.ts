import { Route } from '@angular/router';
import { StoryblokPocComponent } from '@ctk/press/components/storyblok';
import { AppComponent } from './app.component';

export const appRoutes: Route[] = [
  {
    path: '',
    pathMatch: 'prefix',
    component: AppComponent,
    children: [
      {
        path: 'poc',
        component: StoryblokPocComponent,
      },
    ],
  },
];
