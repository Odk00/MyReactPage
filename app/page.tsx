import { FirstSection } from "./components/first-section";
import { SecondSection } from "./components/second-section";
import { ThirdSection } from "./components/third-section";
import { FourthSection } from "./components/fourth-section";
import { Logo } from "./logo";
export default function Home() {
  const array = [1, 2, 3, 4];
  return (
    <div>
      <FirstSection />
      <SecondSection />
      <ThirdSection />
      <FourthSection />

      <footer
        style={{ width: "100vw", height: "336px", backgroundColor: "#252B3B" }}
      >
      
        <div style={{display:"flex"}}>
          <Logo />

          <div>
            <h5>instagram</h5>
            <h5>Facebook</h5>
            <h5>Twitter</h5>
            <h5>instagram</h5>
            <h5>Facebook</h5>
            <h5>Twitter</h5>
          </div>
          <h3>Use Cases</h3>
          <div>
            <h5>UI Design</h5>
            <h5>UX Design</h5>
            <h5>Prototyping</h5>
            <h5>UI Design</h5>
            <h5>UX Design</h5>
            <h5>Prototyping</h5>
          </div>
        </div>
      </footer>
    </div>
  );
}
