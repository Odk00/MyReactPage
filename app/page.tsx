import { FirstSection } from "./components/first-section";
import { Footer } from "./components/footer";
import { FourthSection } from "./components/fourth-section";
import { SecondSection } from "./components/second-section";
import { ThirdSection } from "./components/third-section";

export default function Home() {
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </div>
  );
}
