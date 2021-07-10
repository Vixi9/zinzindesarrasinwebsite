import { Component, Input, OnInit } from '@angular/core';
import { NewsEvent } from '../news-event';

@Component({
  selector: 'app-news-event',
  templateUrl: './news-event.component.html',
  styleUrls: ['./news-event.component.scss']
})
export class NewsEventComponent implements OnInit {
  
  @Input() newsEvent: NewsEvent = {
    id: 1,
    title: 'Lorem Ipsum',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque et lorem non purus venenatis venenatis in eu diam. Vestibulum in nunc ligula. Curabitur volutpat sem et diam facilisis porttitor. Donec sem nisl, auctor at aliquet et, fermentum ut dolor. Phasellus a porttitor orci. Sed malesuada dolor vitae ante bibendum, et. ',
    author: 'Patrick',
    date: new Date(Date.now()),
  }
  
  constructor( ) { }

  ngOnInit(): void {
  }

}
