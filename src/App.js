
import './App.css';
import React from 'react'
import { Stars } from './Stars';
import { BadReview } from './BadReview';
import { GoodReview } from './GoodReview';

function App() {
  const [review,setReview] = React.useState(0);
  let reviewText;
  if (review === 0) {
    reviewText = <Stars setReview={setReview}/>;
  } else if (review === 1 || review === 2 || review === 3) {
    reviewText = <BadReview />;
  } else if (review === 4 || review === 5) {
    reviewText = <GoodReview />;
  }
  
  return (
    <div className="App">
     <header>
      <h1>Company Name</h1>
     </header>
     <main>
    

      <div>{reviewText}</div>
     </main>
    </div>
  );
}

export default App;
