export interface IUser {
  email: string;
  password: string;
  username: string;
  generateJWT(): string;
  comparePassword(password: string): Promise<boolean>;
}

declare global {
  namespace Express {
    interface Request {
      user?: IUser | any;
    }
  }
}
