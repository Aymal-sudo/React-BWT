import { useEffect, useState } from 'react';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) throw new Error('Failed to fetch posts');
        
        const data: Post[] = await response.json();
        setPosts(data); 
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="text-white bg-slate-800 fp-6  mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog</h1>
      <div className="space-y-2 flex  justify-center flex-wrap ali">
        {posts.map((post) => (
            <div  key={post.id} className=" p-4 mx-3 w-2/10 my-3 rounded bg-slate-500 text-white ">
            <h2 className="font-semibold">{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
