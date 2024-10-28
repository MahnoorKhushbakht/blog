export default function CommentForm(){
    return(
    <form>  
        <div className="bg-red-200 rounded-md shadow-md">
        <h1 className="text-xl  text-red-400 p-3 font-bold">Leave a Review</h1>
        <div className="flex md:flex-row flex-col space-x-2 p-3">
        <div class="mb-4">
  <label class="block text-red-400 text-sm font-bold mb-2" for="username">
    Name
  </label>
  <input
    type="text"
    id="Name"
    placeholder="Enter your name"
    class="border border-red-400 text-white bg-red-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white placeholder-white transition duration-300 ease-in-out transform hover:scale-105"
  />
</div>
<div class="mb-4">
  <label class="block text-red-400 text-sm font-bold mb-2" for="message">
    Message
  </label>
  <textarea
    id="message"
    rows="4"
    placeholder="Enter your message"
    class="border border-red-400 text-white bg-red-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-white placeholder-white transition duration-300 ease-in-out transform hover:scale-105"
  ></textarea>
</div>
</div>
<button className="m-3 bg-white text-red-500 font-bold p-2 rounded-md hover:bg-red-400 hover:text-white transition duration-300 ease-in-out">
          Submit
        </button>
        </div>
</form>
    )
}