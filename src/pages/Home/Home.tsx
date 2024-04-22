import PostCard from "../../components/PostCard";
import Post from "../../types/Post";
import User from "../../types/User";

interface HomeProps {
  posts: Post[];
  currentUser: User | null;
  setPosts: (posts: Post[]) => void;
}

const Home: React.FC<HomeProps> = ({ posts, setPosts, currentUser }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {posts.map((post, index) => (
        <PostCard
          key={index}
          post={post}
          currentUser={currentUser}
          onLike={(id: string) => {
            const newPosts = posts.map((post) => {
              if (post.id == id) post.isLiked = !post.isLiked;

              return post;
            });
            setPosts(newPosts);
          }}
          onComment={(id: string, comment: string) => {
            const newPosts = posts.map((post) => {
              if (post.id == id) {
                post.comments!.push({
                  username: currentUser!.username,
                  avatar: currentUser!.avatar,
                  content: comment,
                });
              }

              return post;
            });

            setPosts(newPosts);
          }}
        />
      ))}
    </div>
  );
};

export default Home;
