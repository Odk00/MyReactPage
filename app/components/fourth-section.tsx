import Image from "next/image";
import { Review } from "../review";
import { Container } from "./container";

export const FourthSection = ({}) => {
  return (
    <div
      style={{
        backgroundColor: "#F5F7FA",
        paddingLeft: "140px",
        paddingRight: "140px",
        paddingTop: "160px",
        paddingBottom: "160px",
        display: "flex",
        flexDirection: "column",
        gap: "120px",
        maxWidth: "100vw",
      }}
    >
      <Container>
        <div
          style={{
            height: "60px",
            fontSize: "48px",
            fontWeight: "800",
            display: "flex",
            justifyContent: "center",
          }}
        >
          What people say about us
        </div>
      </Container>
      <div style={{ display: "flex", gap: "30px", overflow: "scroll" }}>
        <div
          style={{
            width: "294px",
            height: "286px",
            backgroundColor: "white",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Review starcount={3} />
            <p>
              Give everyone you work with—inside and outside your emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Image src="/avatar1.png" alt="avatar1" width={56} height={56} />
            <h2>Amy Klassen</h2>
          </div>
        </div>
        <div
          style={{
            width: "294px",
            height: "286px",
            backgroundColor: "white",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Review starcount={4} />
            <p>
              Give everyone you work with—inside and outside your emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Image src="/avatar1.png" alt="avatar1" width={56} height={56} />
            <h2>Amy Klassen</h2>
          </div>
        </div>
        <div
          style={{
            width: "294px",
            height: "286px",
            backgroundColor: "white",
            padding: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "20px" }}
          >
            <Review starcount={5} />
            <p>
              Give everyone you work with—inside and outside your emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Image src="/avatar1.png" alt="avatar1" width={56} height={56} />
            <h2>Amy Klassen</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
