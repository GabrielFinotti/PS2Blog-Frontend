export interface UserData {
  username: string;
  email: string;
  bio?: string;
  image?: string;
  favorites?: {
    name: string;
  }[];
}
