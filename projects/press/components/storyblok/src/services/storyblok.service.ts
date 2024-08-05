import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import Client, { ISbStoryParams } from 'storyblok-js-client';

@Injectable({
  providedIn: 'root'
})
export class StoryblokService {
  private sbClient = new Client({
    endpoint: 'https://api-us.storyblok.com/v2', // Add your endpoint here
    accessToken: 'WvYJCVdNjia9wSgpzIXQzQtt', // Add your token here
    oauthToken: 'T4HrtB1kJurT84kmHgBQowtt-253421-ey7wLor3NTXSKoxSNyYr',
  });

  constructor() { }

  getStory(slug: string, params?: ISbStoryParams): Observable<any> {
    return of(this.sbClient.getStory(slug, params).then(res => res.data));
  }

  getStories(params?: ISbStoryParams): Observable<any> {
    return of(this.sbClient.getStories(params).then(res => res.data));
  }
}
