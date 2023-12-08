import Image from "next/image";

export const Box = ({ image, title, description, avatar, name, date }) => {
  return (
    <div
      style={{
        height: "440px",
        width: "363px",
        backgroundColor: "gray",
        borderRadius: "30px",
        overflow: "hidden",
      }}
    >
      <img src={image} width={370} height={147} alt="profileImage" />
      <div
        style={{
          paddingLeft: "24px",
          paddingBottom: "19px",
          paddingTop: "10px",
        }}
      >
        <h1>{title}</h1>
        <p style={{ paddingTop: "25px", paddingBottom: "57px" }}>
          {description}
        </p>
        <div
          style={{
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          <img
            src={avatar}
            width={45}
            height={45}
            alt="profileImage"
            style={{ borderRadius: "50%" }}
          />
          <p>{name}</p>
          <p>|</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};
