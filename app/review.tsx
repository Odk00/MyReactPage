import { Star } from "./components/star";

export const Review = ({ starcount }: { starcount: number }) => {
  return (
    <div>
      {new Array(starcount || 0).fill(1).map((index) => {
        return <Star key={index} />;
      })}
    </div>
  );
};
