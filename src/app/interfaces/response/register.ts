export interface Register {
  message: string;
  data: {
    username: string;
    email: string;
    token: string;
  };
}
