import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss', '../website.scss']
})
export class ArticlesComponent implements OnInit {

  articles: any[] = [
    { journal: 'Publicateur Libre', path: '../../../assets/img/articles/publicateur-libre-20-05-2021.jpg' },
    { journal: 'Ouest France', path: '../../../assets/img/articles/ouest-france-22-05-2021.jpg' },
    { journal: 'Ouest France', path: '../../../assets/img/articles/ouest-france-03-06-2021.jpg' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
