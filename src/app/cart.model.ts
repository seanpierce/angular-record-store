import { Album } from './album.model';

export class Cart {
  public items: Album[] = new Array<Album>();
  public itemsTotal: number = 0;

  public updateFrom(src: Cart) {
    this.items = src.items;
    this.itemsTotal = src.itemsTotal;
  }
}
