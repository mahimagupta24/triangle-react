import React, { useState } from "react";

function Quiz() {
  const [score, setScore] = useState(0);
   const [formSubmitted, setFormSubmitted] = useState(false)
  const selectedAnswers ={}

  function clickHandler(e) {
    selectedAnswers[e.target.name] = e.target.value
  }
  const correctAnswers = {
    question1 : "90°", 
    question2 : "right angled"
  }
  function onFormSubmit(e) {
     e.preventDefault();
     if(!formSubmitted){
    let correct = 0;
    console.log(correctAnswers)
    console.log(selectedAnswers)
    for (let key in correctAnswers) {
      if (selectedAnswers[key]===correctAnswers[key]){
        correct++;
      }
    }
      setScore(correct);
      setFormSubmitted(true)
     }
  }

  return (
    <div>
      <h1>Triangle quiz</h1>
      <form onSubmit={onFormSubmit}>
        <div>
          <p>
            What is the third angle of a triangle where angle1=45°and
            angle2=45°?
          </p>
          <label>
            <input
              type="radio"
              name="question1"
              value="45°"
              onClick={clickHandler}
            />
            45°
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="60°"
              onClick={clickHandler}
            />
            60°
          </label>
          <label>
            <input
              type="radio"
              name="question1"
              value="90°"
              onClick={clickHandler}
            />
            90°
          </label>

          <p>
            <p>What is the name of the triangle which has an angle of 90°?</p>
            <label>
              <input
                type="radio"
                name="question2"
                value="acute"
                onClick={clickHandler}
              />
              acute
            </label>
            <label>
              <input
                type="radio"
                name="question2"
                value="obtused"
                onClick={clickHandler}
              />
              obtused
            </label>
            <label>
              <input
                type="radio"
                name="question2"
                value="right angled"
                onClick={clickHandler}
              />
              right angled
            </label>
          </p>
          <button type="submit">submit</button>
        </div>
      </form>
      <div>{score}</div>
    </div>
  );
}
export default Quiz;
