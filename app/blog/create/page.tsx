"use client";
import { Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { getFirestore } from "firebase/firestore";
import { firebaseApp } from "@/app/firebase";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";

const Page = () => {
  const [name, setName] = useState("");
  const [hometown, setHometown] = useState("");
  const [hobby, setHobby] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");
  const db = getFirestore(firebaseApp);
  const storage = getStorage(firebaseApp);
  const [image, setImage] = useState<File>();
  const [avatar, setAvatar] = useState<File>();
  const handleSaveImageFunction = async () => {
    const storageRef = ref(storage, image?.name);
    const avatarRef = ref(storage, avatar?.name);
    await uploadBytes(storageRef, image as Blob);
    await uploadBytes(avatarRef, avatar as Blob);
    const URL = await getDownloadURL(storageRef);
    const avatarURL = await getDownloadURL(avatarRef);
    console.log(URL, avatarURL);
  };
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
        <input
          placeholder={"name"}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          placeholder={"hometown"}
          onChange={(e) => {
            setHometown(e.target.value);
          }}
        />
        <input
          placeholder={"hobby"}
          onChange={(e) => {
            setHobby(e.target.value);
          }}
        />
        <input
          placeholder={"color"}
          onChange={(e) => {
            setFavoriteColor(e.target.value);
          }}
        />
        <input
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <input
          type="file"
          onChange={(e) => {
            setAvatar(e.target.files[0]);
          }}
        />
        <Button onClick={handleSaveImageFunction}>Save Image</Button>
        <Button
          onClick={async () => {
            await addDoc(collection(db, "blog"), {
              name: name,
              hometown: hometown,
              hobby: hobby,
              favoriteColor: favoriteColor,
            });
          }}
        >
          Save
        </Button>
      </div>
    </main>
  );
};

export default Page;
