import Link from "next/link";
import React from "react";

export const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
};

const PostPage = async () => {
  const posts = await getPost();
  console.log(posts);
  return (
    <div className="grid grid-cols-4 gap-8">
      {posts.map((singlepost) => {
        return (
          <div key={singlepost.id}>
            <p>{singlepost.title}</p>
            <p>{singlepost.body}</p>
            <Link href={`/post/${singlepost.id}`}>View All </Link>
          </div>
        );
      })}
    </div>
  );
};

export default PostPage;
