import { useState } from "react";
import { messages } from "./messages";

function App() {
  console.log(messages.length);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextMessage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === messages.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevMessage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? messages.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div className="steps">
        <div className="numbers">
          {messages.map((_, index) => (
            <div key={index} className={index === currentIndex ? "active" : ""}>
              {index + 1}
            </div>
          ))}
        </div>

        <p className="message">{messages[currentIndex]}</p>
        <div className="buttons">
          <button
            onClick={prevMessage}
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Previous
          </button>
          <button
            onClick={nextMessage}
            style={{ backgroundColor: "#7950f2", color: "#fff" }}
          >
            Next
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
