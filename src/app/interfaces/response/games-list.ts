export interface GamesList {
  gameList: {
    name: string;
    size: string;
    href: string;
  }[];
  totalDocs: number;
  nextPage?: number;
  prevPage?: number;
}
