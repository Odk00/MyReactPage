import Image from "next/image";
import { LearnMore } from "./learn-more";
import { Container } from "./container";

export const SecondSection = () => {
  return (
    <div style={{ backgroundColor: "#F5F7FA" }}>
      <Container>
        <div
          style={{
            display: "flex",
            backgroundColor: " #F5F7FA",
            justifyContent: "space-between",
            paddingLeft: "139px",
            paddingTop: "342px",
          }}
        >
          <div
            style={{ display: "flex", flexDirection: "column", gap: "100px" }}
          >
            <div>
              <h1
                style={{ width: " 398px", height: "120px", fontSize: "48px" }}
              >
                Your Hub for teamwork
              </h1>
              <h2 style={{ width: "465px", height: "145px", fontSize: "18px" }}>
                Give everyone you work with—inside and outside your company—a
                more productive way to stay in sync. Respond faster with emoji,
                keep conversations focused in channels, and simplify all your
                communication into one place.
              </h2>
            </div>
            <div>
              <LearnMore />
            </div>
          </div>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <Image
              src="/meeting.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
