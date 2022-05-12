interface IUser {
  id: String;
  username: String;
  password: String;
}

namespace Express {
  interface Request {
    user: IUser;
  }
}
