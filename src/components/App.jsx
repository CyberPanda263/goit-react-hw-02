import { useState, useEffect } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import FeedBack from './FeedBack/FeedBack';



const App = () => {
  const [FeedBacks, setFeedBacks] = useState(() => {
    const saveFeedBack = JSON.parse(window.localStorage.getItem('Feedback'));
    if(saveFeedBack) {
      return saveFeedBack;
    }
    return {
      good: 0,
      neutral: 0,
      bad: 0
    }
  }
);

  const updateFeedback = feedbackType => {
    setFeedBacks(FeedBacks => ({...FeedBacks, [feedbackType]: FeedBacks[feedbackType] + 1}))
    }
  const resetFeedback = () => {
    setFeedBacks({
      good: FeedBacks.good = 0,
      neutral: FeedBacks.neutral = 0,
      bad: FeedBacks.bad = 0,
    });
    }
  
  useEffect(() => {
    window.localStorage.setItem('Feedback',JSON.stringify(FeedBacks))
  }, [FeedBacks]);

  return (
    <>
      <Description />
      <Options 
      resetFeedback={resetFeedback}
      updateFeedback={updateFeedback}
      />
      <FeedBack FeedBacks={FeedBacks} />
    </>
  )
}

export default App;
