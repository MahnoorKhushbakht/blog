import { db } from './db';
console.log({ slug, user, message, type });
export async function createComment({ slug, user, message, type }) {
  try {
    const comment = await db.comment.create({
      data: {
        slug,
        user,
        message,
        type,
        postedAt: new Date(), // Only if needed; PostgreSQL can handle timestamps automatically if set as a default.
      },
    });
    return comment;
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error; // Rethrow the error for error handling in higher-level code
  }
}

export async function getComments(slug) {
  try {
    const comments = await db.comment.findMany({
      where: { slug },
      orderBy: { postedAt: 'desc' }, // Ensure `postedAt` exists in your schema
    });
    return comments || [];  
  } catch (error) {
    console.error("Error fetching comments:", error);
    return []; // Returns an empty array in case of an error
  }
}
