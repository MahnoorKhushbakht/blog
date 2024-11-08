import { db } from './db';

export async function createComment({ slug, user, message,type }) {
    return await db.comment.create({
      data: { slug, user, message,type },
    });
  }

  
export async function getComments(slug) {
  return await db.comment.findMany({
    where: { slug },
    orderBy: { postedAt: 'desc' },
  });
}