import { Button } from "@mui/material";
import BackgroundPicture from "../public/background.jpg";
import { Review } from "./review";
import { NavigationItem } from "./components/navigation-item";
import { Logo } from "./components/logo";
import { TitleAndDescription } from "./components/titleanddescription";
import { EmailInput } from "./components/EmailInput";


export default function Home() {
  const array = [1, 2, 3, 4];
  return (
    <div>
      <div
        style={{
          height: "100vh",
          width: "100vw",
          backgroundImage: `url(${BackgroundPicture.src})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "space-between",
            paddingLeft: "50px",
            paddingRight: "50px",
            paddingTop: "20px",
          }}
        >
          <Logo />
          <main style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            <NavigationItem href="/products">Products</NavigationItem>
            <NavigationItem href="/products">Services</NavigationItem>
            <NavigationItem href="/products">Contact</NavigationItem>
            <NavigationItem href="/products">Log In</NavigationItem>
            <Button
              style={{
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "19px",
                paddingRight: "19px",
                border: "1px solid #000000",
                borderRadius: "4px",
                fontSize: "16px",
                fontWeight: "700px",
                textAlign: "center",
                color: " #FFFFFF",
                opacity: "52%",
              }}
            >
              Get access
            </Button>
          </main>
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            paddingLeft: "50px",
            justifyContent: "flex-start",
            alignItems: "baseline",
          }}
        >
          <TitleAndDescription
            h1label="Instant collaborations for remote teams"
            h2label=" All in one for your remote team chats, collaboration and track projects"
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "20px",
            padding: "50px",
            marginTop: "50px",
          }}
        >
          <EmailInput />
          <Button
            style={{
              // paddingTop: "5px",
              // paddingBottom: "5px",
              paddingLeft: "19px",
              paddingRight: "19px",
              border: "1px solid #000000",
              borderRadius: "4px",
              fontSize: "16px",
              fontWeight: "700px",
              textAlign: "center",
              color: " #FFFFFF",
              background: "#0BBEF2",
            }}
          >
            Get early access
          </Button>
        </div>
      </div>
      <div>
      <div style={{ backgroundColor: "black" }}>
        <TitleAndDescription
          h1label="Your Hub for teamwork"
          h2label="Give everyone you work with—inside and outside your company—a more productive way to stay in sync. Respond faster with emoji, keep conversations focused in channels, and simplify all your communication into one place."
        />
      </div>
      
      </div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Review starcount={1} />
        <Review starcount={5} />
        <Review starcount={10} />
      </div>
    </div>
  );
}
