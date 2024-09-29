export enum Genre {
  Fiction = "Fiction",
  NonFiction = "Non-Fiction",
  Science = "Science",
  History = "History",
}

export interface Books {
  id: number;
  title: string;
  author: string;
  genre: Genre;
  publishedYear: number;
  available: boolean;
}
