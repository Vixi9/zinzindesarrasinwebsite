import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface News {
  id: number,
  title: string,
  body: string,
  date: Date,
}

@Injectable({
  providedIn: 'root'
})
export class NewsService {

configURL = 'https://localhost:8000/api/news?page=1';

  constructor(private http: HttpClient) { }

  getNews() {
    return this.http.get<Array<News>>(this.configURL, {headers: {'accept':'application.json'}, observe: 'body'})
      .pipe(
      )
  }

}
