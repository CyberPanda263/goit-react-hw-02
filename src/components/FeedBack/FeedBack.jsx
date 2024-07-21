import Notification from '../Notification/Notification'


const FeedBack = ({FeedBacks, totalFeedbackPercent,totalFeedback}) => {
    return (
        <>
                <div>
                <p>Good: {FeedBacks.good}</p>
                <p>Neutral: {FeedBacks.neutral}</p>
                <p>Bad: {FeedBacks.bad}</p>
                <p>Total: {totalFeedback}</p>
                <p>Positiv: {totalFeedbackPercent}%</p>
                </div>
        </>
    )
}

export default FeedBack;