import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import Client, { ISbStories, ISbStory, ISbStoryParams } from 'storyblok-js-client';

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

  getStory(slug: string, params?: ISbStoryParams): Observable<ISbStory> {
    return from(this.sbClient.getStory(slug, params));
  }

  getStories(params?: ISbStoryParams): Observable<ISbStories> {
    return from(this.sbClient.getStories(params));
  }
}
