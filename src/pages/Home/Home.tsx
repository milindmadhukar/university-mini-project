// A home component that renders the post feed

import PostCard from "../../components/PostCard";
import Post from "../../types/Post";

interface HomeProps {
  posts: Post[];
  setPosts: (posts: Post[]) => void;
}

const Home: React.FC<HomeProps> = ({ posts, setPosts }) => {
  return (
    <div className="grid grid-cols-3 gap-4 p-4">
      {posts.map((post, index) => (
        <PostCard
          key={index}
          post={post}
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
                post.comments = post.comments
                  ? [
                      ...post.comments,
                      {
                        username: "milind",
                        content: comment,
                        avatar: "https://i.ibb.co/7jpf15G/Website-Logo.png",
                      },
                    ]
                  : [
                      {
                        username: "milind",
                        content: comment,
                        avatar: "https://i.ibb.co/7jpf15G/Website-Logo.png",
                      },
                    ];
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
