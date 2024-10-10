import { getCategories } from '@/lib/blogs';
import CardFlip from './CardFlip';

export default async function CardInfo() {
const cardData = await getCategories()
  return (
    <div className="w-auto md:h-80 h-auto grid md:grid-cols-3 grid-cols-1 gap-5 mt-20">
      {cardData.map((item, index) => (
        <CardFlip
        key={index} 
        item={item} 
        index={index} 
        />
      ))}
    </div>
  );
}

