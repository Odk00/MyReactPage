import { Container } from "./container";
import { LearnMore } from "./learn-more";
import Image from "next/image";

export const ThirdSection = () => {
  return (
    <div style={{ backgroundColor: "#F5F7FA" }}>
      <Container>
        <div
          style={{
            color: "black",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "143px",
          }}
        >
          <Image
            src="/second-pic.svg"
            width={500}
            height={500}
            alt="Picture of the author"
          />
          <div
            style={{ display: "flex", flexDirection: "column", gap: "30px" }}
          >
            <h1 style={{ width: "398px", height: "120px", fontSize: "48px" }}>
              Simple task management
            </h1>
            <h2
              style={{
                width: "465px",
                height: "145px",
                fontSize: "18px",
                lineHeight: "163.15%",
              }}
            >
              Give everyone you work with—inside and outside your company—a more
              productive way to stay in sync. Respond faster with emoji, keep
              conversations focused in channels, and simplify all your
              communication into one place.
            </h2>

            <div>
              <LearnMore />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
