


const FeedBack = ({FeedBacks}) => {
   const totalFeedback = FeedBacks.good + FeedBacks.neutral + FeedBacks.bad
    const FeedBacksStatus = () => {
        if(FeedBacks.good != 0 || FeedBacks.neutral != 0 || FeedBacks.bad != 0) {
            return(
                <div>
                    <p>good: {FeedBacks.good}</p>
                    <p>neutral: {FeedBacks.neutral}</p>
                    <p>bad: {FeedBacks.bad}</p>
                    <p>Positiv: {Math.round((FeedBacks.good / totalFeedback) * 100)}%</p>
            </div>
            )
        }else {
            return(
                <p>No FeedBack yet</p>
            )
        }
    }
    return (
        <FeedBacksStatus />
    )
}

export default FeedBack;