import { Component } from '@angular/core';
@Component({
  selector: 'atlas-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  images = [
    {
      imageSrc: 'assets/shoe-rack.jpg',
      imageAlt: 'shoe-rack',
      imageText: 'Get quality footwears at affordable prices.',
    },
    {
      imageSrc: 'assets/customer-care.jpg',
      imageAlt: 'customer-care',
      imageText: 'Communicate with our customer support team.',
    },
    {
      imageSrc: 'assets/payment.jpg',
      imageAlt: 'payment',
      imageText: 'Pay for products through our payment services.',
    },
  ]
} 