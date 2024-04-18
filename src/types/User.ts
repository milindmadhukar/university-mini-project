export default interface User {
  id: string;
  username: string;
  avatar: string;
  bio?: string;
  linkedIn?: string;
  twitter?: string;
  github?: string;
  followers: string[];
  following: string[];
}
