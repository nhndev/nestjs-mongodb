import { Category } from '../schemas/product.schemas';

export class CreateProductDto {
  name: string;

  description: string;

  price: number;

  discount: number;

  category: Category;
}
