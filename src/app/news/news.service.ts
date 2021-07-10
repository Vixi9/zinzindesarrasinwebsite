import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NewsEvent } from './news-event';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private newsUrl = 'api.zinzindusarrasin.web-edu.fr/news'

  constructor(private http: HttpClient) {}

  getNewsEvent() {
    return this.http.get<NewsEvent[]>(this.newsUrl);
  }

}
