export interface GameList {
  gameList: {
    games: {
      gameName: string;
      href: string;
      size: string;
    }[];
    prevPage: string;
    nextPage: string;
    totalPages: number;
    totalDocs: number;
  };
}
