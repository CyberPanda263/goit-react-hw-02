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

  useEffect(() => {
    window.localStorage.setItem('Feedback',JSON.stringify(FeedBacks))
  }, [FeedBacks]);

  const [FeedBacksStatus, setFeedBacksStatus] = useState(false);

  useEffect(() => {
    if(FeedBacks.good != 0 || FeedBacks.neutral != 0 || FeedBacks.bad != 0) {
      setFeedBacksStatus (true);
    }
  }, [FeedBacksStatus]);

  const totalFeedback = FeedBacks.good + FeedBacks.neutral + FeedBacks.bad;
  const totalFeedbackPersent = (Math.round((FeedBacks.good / totalFeedback) * 100));

  const handleUpdateFeedback = feedbackType => {
    setFeedBacks(FeedBacks => ({...FeedBacks, [feedbackType]: FeedBacks[feedbackType] + 1}),
    setFeedBacksStatus (true),
  )
    }

  const handleResetFeedback = () => {
    setFeedBacks ({
      good: 0,
      neutral: 0,
      bad: 0
    }),
    setFeedBacksStatus (false)
    }
  ;

  return (
    <>
      <Description />
      <Options 
      resetFeedback={handleResetFeedback}
      updateFeedback={handleUpdateFeedback}
      FeedBacksStatus={FeedBacksStatus}
      />
      <FeedBack
      FeedBacks={FeedBacks}
      totalFeedbackPersent={totalFeedbackPersent}
      FeedBacksStatus={FeedBacksStatus}
       />
    </>
  )
}

export default App;
