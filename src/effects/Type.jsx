import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <div className="background-home">
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
    </div>
  );
}
export default Type;
