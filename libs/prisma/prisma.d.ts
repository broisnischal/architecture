export interface Post {
  id: string;
  title: string;
  content: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  email: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

declare global {
  export type TPost = Post;
  export type TUser = User;
}

