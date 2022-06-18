import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent implements OnInit {
  @Input() characters: any = [];
  @Input() episodes: any = [];
  @Input() locations: any = [];
  constructor() {}
  ngOnInit(): void {}
}
