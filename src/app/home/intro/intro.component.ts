import { Component, Input, OnInit } from '@angular/core';

interface sliderImage {
  imageSrc: string;
  imageAlt: string;
  imageText: string;
}

@Component({
  selector: 'atlas-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.css']
})
export class IntroComponent implements OnInit{

  @Input() images: sliderImage[] = []
  @Input() indicators = true;
  @Input() controls = true;
  @Input() autoSlide = false;
  @Input() slideInterval = 2000;

  selectedIndex = 0;

  ngOnInit(): void {
    if(this.autoSlide) {
      this.autoSlideImages()
    }
  }

  autoSlideImages(): void {
    setInterval(() =>{
      this.onNextClick();
    }, this.slideInterval);
  }


  selectImage(index: number): void {
    this.selectedIndex = index;
  }

  onPrevClick(): void{
    if(this.selectedIndex === 0) {
      this.selectedIndex = this.images.length - 1;
    } else {
      this.selectedIndex--;
    }
  }

  onNextClick(): void {
    if(this.selectedIndex === this.images.length -1) {
      this.selectedIndex = 0;
    } else {
      this.selectedIndex++;
    }
  }
} 