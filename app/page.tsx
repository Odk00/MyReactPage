import { FirstSection } from "./components/first-section";
import { SecondSection } from "./components/second-section";
import { ThirdSection } from "./components/third-section";
import { FourthSection } from "./components/fourth-section";
import { FifthSection } from "./components/fifth-section";
import { Footer } from "./components/footer";

export default function Home() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FifthSection />
      <FourthSection />
      <Footer />
    </div>
  );
}
