'use client';

import { createCommentAction } from "./action";
import { useState } from "react";

export default function CommentForm({ slug, title, type }) {
  const [state, setState] = useState({ error: null, loading: false });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setState({ error: null, loading: true });
    const form = event.currentTarget;
    const formData = new FormData(form);
    const result = await createCommentAction(formData);
    console.log('result:', result);

    if (result?.isError) {
      setState({ error: result, loading: false });
    } else {
      setState({ error: null, loading: false });
      form.reset();
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="bg-red-200 rounded-md shadow-md w-full md:w-3/4">
        <h1 className="text-xl text-red-500 p-3 font-bold">
          What Did You Think of <span className="font-bold uppercase text-red-600">{title}</span>? Share Your Insights Below!
        </h1>

        <div className="flex flex-col md:flex-row md:space-x-1 p-2">
         
          <div className="mb-4 w-3/6 md:w-auto"> 
            <input type="hidden" name="slug" value={slug} />
            <input type="hidden" name="type" value={type} />
            <label className="block text-red-400 text-sm font-bold mb-2" htmlFor="username">
              Name
            </label>
            <input
              required
              maxLength={50}
              type="text"
              id="Name"
              name="user"
              placeholder="Enter your name"
              className="border border-red-400 text-white bg-red-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white placeholder-white transition duration-300 ease-in-out transform hover:scale-105 w-3/4"
            />
          </div>

          
          <div className="mb-4 w-5/6 md:w-2/3"> 
            <label className="block text-red-400 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              required
              maxLength={500}
              id="message"
              rows="2"
              name="message"
              placeholder="Enter your message"
              className="border border-red-400 text-white bg-red-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white placeholder-white transition duration-300 ease-in-out transform hover:scale-105 w-2/4"
            ></textarea>
          </div>
        </div>

       
        {Boolean(state.error) && (
          <p className="text-white p-3">{state.error.message}</p>
        )}

       
        <button
          disabled={state.loading}
          className="m-3 bg-white text-red-500 font-bold p-2 rounded-md hover:bg-red-400 hover:text-white transition duration-300 ease-in-out disabled:bg-slate-500 disabled:cursor-not-allowed"
        >
          Submit
        </button>
      </div>
    </form>
  );
}
