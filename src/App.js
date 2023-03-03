import React from "react";
import Deck from "./components/Deck";
import Footer from "./components/Footer";
import Header from "./components/Header";
import cards from "./components/cards";

export default function App() {
  const [finished, setFinished] = React.useState("0");
  const maxQuestions = cards.length;

  return (
    <div>
      <Header />
      <Deck setFinished={setFinished} finished={finished} />
      <Footer finished={finished} maxQuestions={maxQuestions} />
    </div>
  );
}

