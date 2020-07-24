export class Pet {
    id: number;
    category: Category;
    name: string;
    photoUrls: Array<string>;
    tags: Array<Tags>;
    status: string;
    length: number;
}

export class Tags {
    id: number;
    name: string;
}

export class Category {
    id: number;
    name: string;
}

export enum Status {
    available = 'available',
    pending = 'pending',
    sold = 'sold'
}

export class Columns {
    name: string;
  }