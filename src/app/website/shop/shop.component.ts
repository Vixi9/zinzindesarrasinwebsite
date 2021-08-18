import { Component, OnInit } from '@angular/core';
import { Article, ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {

  error: any;
  articles: Array<Article> = [
    {idArticle: 1, nomArticle: 'Galette à l\'unité', descriptionArticle: 'Une galette', prixArticle: 0.75},
  ];

  constructor(private shopService: ShopService) { }

  ngOnInit(): void {
  }

  getArticles() {
    this.shopService.getArticles()
      .subscribe(
        (data: Array<any>) => {
          data.forEach(element => {
            this.articles.push({idArticle: element.idArticle, nomArticle: element.nomArticle, descriptionArticle: element.descriptionArticle, prixArticle: element.prixArticle});
          });
        },
        (error: any) => {

        }
      )
  }

}
