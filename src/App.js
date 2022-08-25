import { useEffect, useState } from "react";
import "./style/App.css";

function App() {
  const Button = ({ number }) => {
    return <button className="rating_btn" onClick={()=>{setRating(number)}}>{number}</button>;
  };

  const [ isSubmitted, setIsSubmitted ] = useState(false);
  const [ rating, setRating ] = useState();
  const handleSubmit = () => {
    setIsSubmitted((prevState) => !prevState);
  };


  if (isSubmitted === false) {
    return (
      <div className="App">
        <div className="app_container">
          <div className="star_icon_wrap">
            <img src="/images/icon-star.svg" />
          </div>

          <h1>How did we do?</h1>
          <p className="text">
            please let us know how we did with your support request. All
            feedback id appreciated to let us improve our offering!
          </p>
          <div className="rating_buttons">
            <Button number={1} />
            <Button number={2} />
            <Button number={3} />
            <Button number={4} />
            <Button number={5} />
          </div>
          <button className="submit_btn" onClick={handleSubmit}>
            SUBMIT
          </button>
        </div>
      </div>
    );
  } else if (isSubmitted === true) {
    return (
      <div className="App">
        <div className="app_container_thank_you">
          <img src="/images/illustration-thank-you.svg" className="thank_you_img"/>
          <span className="thank_you_selection">You selected {rating} out of 5</span>
          <h1 className="thank_you_title">Thank you!</h1>
          <p className="thank_you_text">
            We appreciate you taking the time to give a rating. If you need more
            support don't hesitate to get in touch
          </p>
        </div>
      </div>
    );
  }
}

export default App;
