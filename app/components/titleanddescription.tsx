export const TitleAndDescription = ({ h2label, h1label }) => {
    return (
      <div>
        <h1 style={H1style}>{h1label}</h1>
        <h2 style={H2style}>{h2label}</h2>
      </div>
    );
  };
  const H1style = {
    height: "120px",
    width: "514px",
    weight: "400",
    size: "48px",
    color: "white",
    marginTop:"220px"
  };
  const H2style = {
    height: "58px",
    width: "323.85px",
    size: "18px",
    weight: "700",
    color: "white",
  };
  