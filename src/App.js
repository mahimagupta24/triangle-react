import React from "react";
import Hypoteneus from "./hypoteneus";
import IsTriangle from "./isTriangle";
import Quiz from "./quiz";
import Route from "./Route";
import Header from "./Header";


function App() {
  return <div>
    <Header />
    <Route path = '/'>
      <IsTriangle />
    </Route>

    <Route path = '/hypoteneus'>
      <Hypoteneus />
    </Route>

    <Route path = '/quiz'>
      <Quiz />
    </Route>
  </div>
}

// function getHypoteneus(){
//   if(window.location.pathname==='/hypoteneus'){
//     return <Hypoteneus />
//   }
// }

// function playQuiz(){
//   if(window.location.pathname==='/quiz'){
//     return < Quiz />
//   }
// }
//   function showIsTriangle(){
//     if(window.location.pathname==='/'){
//       return <IsTriangle />
//     }
//   }
  

export default App;
