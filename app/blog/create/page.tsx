"use client";
import { Button } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { getFirestore } from "firebase/firestore";
import { getDownloadURL, getStorage, ref, uploadBytes } from "firebase/storage";
import { firebaseApp } from "@/app/firebase";

const Page = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
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
    await addDoc(collection(db, "blog"), {
      name: name,
      description: description,
      title: title,
      date: date,
      image: URL,
      avatar: avatarURL,
    })
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
          type="file"
          onChange={(e) => {
            setImage(e.target.files[0]);
          }}
        />
        <input
          placeholder={"title"}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          placeholder={"description"}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
        />
        <input
          placeholder={"date"}
          onChange={(e) => {
            setDate(e.target.value);
          }}
        />
        <input
          placeholder={"name"}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <input
          type="file"
          onChange={(e) => {
            setAvatar(e.target.files[0]);
          }}
        />

        <Button onClick={handleSaveImageFunction}>Save</Button>
      </div>
    </main>
  );
};

export default Page;
