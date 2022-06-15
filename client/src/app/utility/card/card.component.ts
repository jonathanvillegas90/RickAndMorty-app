import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  characters = [
    {
      id: 1,
      name: 'Ricardo Sanchez',
      img: 'https://www.geekmi.news/__export/1626821131805/sites/debate/img/2021/07/20/rick4_2.jpg_976912859.jpg',
      type: 'Human',
      text: 'el mas poronga',
    },
    {
      id: 2,
      name: 'Ricardo Sanchez tierra 616',
      img: 'https://www.geekmi.news/__export/1626821131805/sites/debate/img/2021/07/20/rick4_2.jpg_976912859.jpg',
      type: 'Human',
    },
    {
      id: 3,
      name: 'Ricardo Sanchez tierra 90',
      img: 'https://www.geekmi.news/__export/1626821131805/sites/debate/img/2021/07/20/rick4_2.jpg_976912859.jpg',
      type: 'Human',
    },
    {
      id: 4,
      name: 'Morty Malvado',
      img: 'https://www.geekmi.news/__export/1626821131805/sites/debate/img/2021/07/20/rick4_2.jpg_976912859.jpg',
      type: 'Human',
    },
    {
      id: 4,
      name: 'Morty Bueno',
      img: 'https://www.geekmi.news/__export/1626821131805/sites/debate/img/2021/07/20/rick4_2.jpg_976912859.jpg',
      type: 'Human',
    },
    {
      id: 4,
      name: 'Morty ',
      img: 'https://www.geekmi.news/__export/1626821131805/sites/debate/img/2021/07/20/rick4_2.jpg_976912859.jpg',
      type: 'Human',
    },
  ];
}
