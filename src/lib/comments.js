import { db } from './db';

export async function createComment({ slug, user, message,type }) {
    return await db.comment.create({
      data: { slug, user, message,type },
    });
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
  