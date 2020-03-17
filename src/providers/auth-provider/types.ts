type User = {
  username: string;
};

export interface Auth {
  user?: User;
  loading?: boolean;
  error?: string;
  isAuth?: boolean;
  ready?: boolean;
}
