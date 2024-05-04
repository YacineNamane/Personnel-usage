import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Bonjour !",
          "je suis Anna ",
          "Docteur en pharmacie",
          "Naturopathe",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 80,
      }}
    />
  );
}
export default Type;
