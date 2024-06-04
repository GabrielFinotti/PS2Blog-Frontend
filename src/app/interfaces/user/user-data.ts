export interface UserData {
  username: string;
  email: string;
  password: string;
  bio?: string;
  image?: string;
  favorites?: {
    name: string;
  }[];
}
