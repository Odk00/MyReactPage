export const Button = ({ text, type }) => {
  if (type == "first") {
    return (
      <div>
        <button style={ButtonStyle1}>Get access</button>
      </div>
    );
  }
  

  return (
    <div>
      <button style={ButtonStyle}>Get early access</button>
    </div>
  );
};
const ButtonStyle1 = {
    paddingTop: "16px",
    paddingBottom: "16px",
    paddingLeft: "19px",
    paddingRight: "19px",
    border: "1px solid #000000",
    borderRadius: "4px",
    size: "16px",
    weight: "700px",
    fontFamily: "Mulish",
    align: "center",
    color: " #FFFFFF",
    opacity: "52%",
  };
const ButtonStyle = {
  paddingTop: "22px",
  paddingBottom: "22px",
  paddingLeft: "19px",
  paddingRight: "19px",
  border: "1px solid #000000",
  borderRadius: "4px",
  size: "16px",
  weight: "700px",
  fontFamily: "Mulish",
  align: "center",
  color: " #FFFFFF",

  background: "#0BBEF2",
};
