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
            <Review starcount={1} />
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
            <Review starcount={2} />
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Image src="/avatar5.png" alt="avatar5" width={56} height={56} />
            <h2>Jane Cooper</h2>
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
              Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Image src="/avatar3.png" alt="avatar3" width={56} height={56} />
            <h2>Eleanor Pena</h2>
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
            <Review starcount={3} />
            <p>
            Give everyone you work with—inside and outside your emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Image src="/avatar4.png" alt="avatar4" width={56} height={56} />
            <h2>Jenny Wilson</h2>
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
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Image src="/avatar7.png" alt="avatar7" width={56} height={56} />
            <h2>Jacob Jones</h2>
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
            Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis
              ullamco cillum dolor. Voluptate exercitation incididunt aliquip
              deserunt reprehenderit elit laborum.
            </p>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Image src="/avatar2.png" alt="avatar2" width={56} height={56} />
            <h2>Leslie Alexander</h2>
          </div>
        </div>
      </div>
    </div>
  );
};
