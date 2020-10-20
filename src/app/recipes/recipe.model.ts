import { Review } from '../shared/review.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public reviews: Review[];

  constructor(name: string, desc: string, imagePath: string, reviews: Review[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.reviews = reviews;
  }
}
