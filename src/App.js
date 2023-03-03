import React from "react";
import Deck from "./components/Deck";
import Footer from "./components/Footer";
import Header from "./components/Header";
import cards from "./components/cards";
import Welcome from "./components/Welcome";

export default function App() {
  const [finished, setFinished] = React.useState("0");
  const maxQuestions = cards.length;
  const [images, setImages] = React.useState([]);

  return (
    <>
      <Welcome />
      <Header />
      <Deck setFinished={setFinished} finished={finished} images={images} setImages={setImages} />
      <Footer finished={finished} maxQuestions={maxQuestions} images={images} />
    </>
  );
}

