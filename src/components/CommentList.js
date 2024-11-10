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
            <div className="flex items-start space-x-2 mb-2">
             
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-6 h-6 text-red-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
              <p className="text-red-600 md:text-xl text-lg font-semibold">{comment.user}</p>
            </div>
            <p className="text-red-500 bg-red-100 p-3 rounded-md shadow-inner">
              {comment.message}
            </p>
          </div>
        ))
      ) : (
        <p className="text-red-500">No comments yet. Be the first to leave a review!</p>
      )}
    </div>
  );
};

export default CommentList;
