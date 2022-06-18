import React from "react";
import MemesData from "./Memesdata.js";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");
  /**
   * Challenge: Save the random meme URL in state
   * - Below the div.form, add an <img /> and set the
   *   src to the new `memeImage` state you created
   */

  function getMemeImage() {
    const MemesArray = MemesData.data.memes;
    const randomNumber = Math.floor(Math.random() * MemesArray.length);
    setMemeImage(MemesArray[randomNumber].url);
  }

  return (
    <main>
      <div className="form">
        <input type="text" placeholder="Top text" className="form--input" />
        <input type="text" placeholder="Bottom text" className="form--input" />
        <button className="form--button" onClick={getMemeImage}>
          Get a new meme image 🖼
        </button>
      </div>
      <img src={memeImage} className="meme--image" />
    </main>
  );
}
