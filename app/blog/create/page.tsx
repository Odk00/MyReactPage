"use client";
import { Button, colors } from "@mui/material";
import { addDoc } from "firebase/firestore";
import { useState } from "react";

export default () => {
  const [name, setName] = useState("");
  const [hometown, setHometown] = useState("");
  const [hobby, setHobby] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");

  return (
    <main>
      <h1> 12/04/2023</h1>
      <div
        style={{
          display: " flex",
          flexDirection: "column",
          gap: "10px",
          paddingLeft: "10px",
        }}
      >
        {JSON.stringify({
          name: name,
          hometown: hometown,
          hobby: hobby,
          favoriteColor: favoriteColor,
        })}
        <input
          placeholder={"name"}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input placeholder={"hometown"}
    onChange={(e) => {
        setHometown(e.target.value)}} />
        <input placeholder={"hobby"} onChange={(e) => {
        setHobby(e.target.value)}}/>
        <input placeholder={"color"} onChange={(e) => {
        setFavoriteColor(e.target.value)}}/>
 <Button>Save</Button>
      </div>
    </main>
  );
};
