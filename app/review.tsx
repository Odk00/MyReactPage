
import { Star } from "./components/star.tsx";

export const Review = ({ name, starcount, avatar, text }) => {
  const array = [1, 2, 3, 4, 10];

  return (
    <div>
      <div
        style={{
          width: "374px",
          height: "366px",
          backgroundColor: "white",
          display: "flex",
          gap: "10px",
        }}
      >
        {new Array(starcount || 0).fill(1).map(() => {
          return <Star />;
        })}
      </div>

    </div>
  );
};
