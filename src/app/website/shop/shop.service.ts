import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retry } from 'rxjs/operators';

export interface Article {
  idArticle: number;
  nomArticle: string;
  descriptionArticle: string;
  prixArticle: number;
}

@Injectable({
  providedIn: 'root'
})
export class ShopService {

  configUrl = 'https://localhost:8000/api/articles?page=1';

  constructor(private http: HttpClient) { }

  getArticles() {
    return this.http.get<Array<Article>>(this.configUrl, {headers: {'accept':'application/json'}, observe: 'body'})
      .pipe(
        retry(3)
      )
  }

}
