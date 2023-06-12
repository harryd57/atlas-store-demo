import { Component } from '@angular/core';

interface progressData {
  rating: number;
  percent: string;
}

@Component({
  selector: 'atlas-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent {
  data : progressData[] = [
    {
      rating: 5,
      percent: '50%'
    },
    {
      rating: 4,
      percent: '10%'
    },
    {
      rating: 3,
      percent: '15%'
    },
    {
      rating: 2,
      percent: '15%'
    },
    {
      rating: 1,
      percent: '10%'
    },
  ]
}
