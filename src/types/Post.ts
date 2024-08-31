import User from "./User";

export default interface Post {
  id: string;
  user: User
  caption: string;
  imageUrl: string;
  comments:
    | {
        user: User;
        content: string;
      }[]
    | null;
  isLiked?: boolean;
}
