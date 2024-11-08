import { getComments } from "@/lib/comments";
import React from "react";

const CommentList = async ({ slug }) => {
  const comments = await getComments(slug)
  return (
    <div className="mt-10 p-5 bg-red-200 rounded-md shadow-md w-full md:w-3/4 ">
      <h2 className="text-xl font-bold text-red-500 mb-4">Comments</h2>
      {comments && comments.length > 0 ? (
        comments.map((comment, index) => (
          <div
            key={index}
            className="border-b border-red-300 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0"
          >
            <p className="text-white font-semibold mb-1">{comment.user}</p>
            <p className="text-white">{comment.message}</p>
          </div>
        ))
      ) : (
        <p className="text-red-500">No comments yet. Be the first to leave a review!</p>
      )}
    </div>
  );
};

export default CommentList;
