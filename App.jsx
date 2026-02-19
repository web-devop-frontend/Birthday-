import React, { useState } from "react";
import { motion } from "framer-motion";
import { Gift, Heart, PartyPopper } from "lucide-react";

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      background: "linear-gradient(135deg, #fbc2eb, #fda085)",
      padding: "20px",
      fontFamily: "Arial, sans-serif"
    }}>
      {!open ? (
        <div style={{ textAlign: "center", background: "white", padding: "40px", borderRadius: "20px" }}>
          <div style={{ fontSize: "60px" }}>🧸</div>
          <h1>Welcome Ifra 💖</h1>
          <p>I have a little birthday surprise for you!</p>
          <button onClick={() => setOpen(true)} style={{ padding: "10px 20px", margin: "10px" }}>
            🎁 Open Wish
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center", background: "white", padding: "40px", borderRadius: "20px" }}>
          <div style={{ fontSize: "40px" }}>🎈🎉🎊</div>
          <h2>Happy Birthday Ifra! 🎂</h2>
          <p>
            May your day be filled with happiness, laughter, and unforgettable memories.
            May Allah bless you with success, good health, and endless joy.
          </p>
          <p>Keep shining and keep smiling always! 💕</p>
          <button onClick={() => setOpen(false)} style={{ padding: "10px 20px", marginTop: "20px" }}>
            ⬅ Back
          </button>
        </div>
      )}
    </div>
  );
}
