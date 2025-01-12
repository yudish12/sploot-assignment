export interface ApiResponse {
  success: boolean;
  data?: any;
  err?: string;
  message?: string;
  count?: string | number;
  type?: string;
  field?: string;
}

export interface UserType {
  name: string;
  email: string;
}

export interface LoginFields {
  email: string;
  password: string;
}

export interface CategoryType {
  _id: string;
  name: string;
  icon: string;
}

export interface BlogType {
  _id: string;
  title: string;
  category: string | CategoryType;
  description: string;
  image: string;
  link: string;
  created_by: UserType;
  created_at: string;
}
