"use client";
import { Box } from "./box";

import { getFirestore, collection } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { initializeApp } from "firebase/app";
import { firebaseApp } from "../firebase";

export default function Home() {
  const [value, loading, error] = useCollection(
    collection(getFirestore(firebaseApp), "blog"),
    {
      snapshotListenOptions: { includeMetadataChanges: true },
    }
  );

  return (
    <div style={{ display: "flex", gap: "5px", flexWrap: "wrap" }}>
      {value &&
        value.docs.map((document) => {
          const object = document.data();
          return <Box {...object} key={document.id} />;
        })}
    </div>
  );
}
