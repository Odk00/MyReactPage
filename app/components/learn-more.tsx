import * as React from "react";

export const LearnMore = ({}) => {
  return (
    <div style={{diplay: "flex", alignItems: "center"}}>
      {" "}
      Learn More {" "}
      <svg
        // style={{ diplay: "flex", alignItems: "center" }}
        xmlns="http://www.w3.org/2000/svg"
        width={24}
        height={24}
        fill="none"
      >
        <path
          fill="#4DA0FD"
          d="M16.119 11.004H5.109c-.55 0-1 .45-1 1s.45 1 1 1h11.01v1.79c0 .45.54.67.85.35l2.78-2.79c.19-.2.19-.51 0-.71l-2.78-2.79c-.31-.32-.85-.09-.85.35v1.8Z"
        />
      </svg>
    </div>
  )
}
