interface IUserService {
  login?: (email: string, password: string) => Promise<any>;
  register?: (email: string, password: string) => Promise<any>;
  getUser: () => Promise<any>;
  updateUser: (label: string) => Promise<any>;
}

export type { IUserService };
