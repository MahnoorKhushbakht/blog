import { db } from './db';

export async function createComment({ slug, user, message, type }) {
  console.log({ slug, user, message, type });
  try {
    const comment = await db.comment.create({
      data: {
        slug,
        user,
        message,
        type,
        postedAt: new Date(), 
      },
    });
    return comment;
  } catch (error) {
    console.error("Error creating comment:", error);
    throw error; 
  }
}

export async function getComments(slug) {
  try {
    const comments = await db.comment.findMany({
      where: { slug },
      orderBy: { postedAt: 'desc' }, 
    });
    return comments || [];  
  } catch (error) {
    console.error("Error fetching comments:", error);
    return []; 
  }
}
