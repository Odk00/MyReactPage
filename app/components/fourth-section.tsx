import { Review } from "../review";

export const FourthSection = ({}) => {
  return (
    <div>
      <div
        style={{
          width: "615px",
          height: "60px",
          fontSize: "48px",
          fontWeight: "800",
          display: "flex",
          justifyContent: "center",
        }}
      >
        What people say about us
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Review starcount={1} />
        <Review starcount={5} />
        <Review starcount={10} />
      </div>
    </div>
  );
};
