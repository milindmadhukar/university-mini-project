export default interface Post {
  id: string;
  username: string;
  avatar: string;
  caption: string;
  imageUrl: string;
  comments:
  | {
    username: string;
    content: string;
    avatar: string;
  }[]
  | null;
  isLiked?: boolean;
}
