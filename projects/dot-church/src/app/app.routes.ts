import { Route } from '@angular/router';
import { StoryblokPocComponent } from '@ctk/press/components/storyblok';

export const appRoutes: Route[] = [
  {
    path: '',
    children: [
      {
        path: 'poc',
        component: StoryblokPocComponent
      }
    ]
  }
];
