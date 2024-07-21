import { useState, useEffect } from 'react';
import Description from './Description/Description';
import Options from './Options/Options';
import FeedBack from './FeedBack/FeedBack';
import Notification from './Notification/Notification';  // Assuming you have a Notification component

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
  });

  useEffect(() => {
    window.localStorage.setItem('Feedback', JSON.stringify(FeedBacks));
  }, [FeedBacks]);

  const totalFeedback = FeedBacks.good + FeedBacks.neutral + FeedBacks.bad;
  const totalFeedbackPercent = Math.round((FeedBacks.good / totalFeedback) * 100);

  const handleUpdateFeedback = feedbackType => {
    setFeedBacks(prevFeedBacks => ({
      ...prevFeedBacks,
      [feedbackType]: prevFeedBacks[feedbackType] + 1
    }));
  };

  const handleResetFeedback = () => {
    setFeedBacks({
      good: 0,
      neutral: 0,
      bad: 0
    });
  };

  return (
    <>
      <Description />
      <Options 
        resetFeedback={handleResetFeedback}
        updateFeedback={handleUpdateFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback !== 0 ? (
        <FeedBack
          FeedBacks={FeedBacks}
          totalFeedbackPercent={totalFeedbackPercent}
          totalFeedback={totalFeedback}
        />
      ) : (
        <Notification message="No FeedBack yet" />
      )}
    </>
  );
};

export default App;
