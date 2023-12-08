import Image from "next/image";
export default function Home() {
  return (
    <div
      style={{
        height: "440px",
        width: "363px",
        backgroundColor: "white",
        borderRadius: "30px",
        overflow: "hidden",
      }}
    >
      <Image src="/image1.png" width={370} height={147} alt="profileImage" />
      <div
        style={{
          paddingLeft: "24px",
          paddingBottom: "19px",
          paddingTop: "10px",
        }}
      >
        <h1>The Emotional Toll of Being in UX</h1>
        <p style={{ paddingTop: "25px", paddingBottom: "57px" }}>
          There are times when our work impacts us deeply — sometimes in ways we
          neither acknowledge nor understand
        </p>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <Image
            src="/avatar1.png"
            width={45}
            height={45}
            alt="profileImage"
            style={{ borderRadius: "50%" }}
          />
          <p>Wade Warren</p>
          <p>|</p>
          <p>2nd January,2022</p>
        </div>
      </div>
    </div>
  );
}
