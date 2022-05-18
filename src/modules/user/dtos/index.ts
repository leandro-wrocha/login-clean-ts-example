interface IUserDTO {
  username: string;
  password: string;
}

interface IUserRequest {
  username: string;
  password: string;
}

interface IUserAlreadyExistsRequest {
  username: string;
}

export { IUserDTO, IUserRequest, IUserAlreadyExistsRequest };
