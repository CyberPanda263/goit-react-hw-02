import Notification from '../Notification/Notification'


const FeedBack = ({FeedBacks, totalFeedbackPercent}) => {
    return (
        <>
                <div>
                <p>good: {FeedBacks.good}</p>
                <p>neutral: {FeedBacks.neutral}</p>
                <p>bad: {FeedBacks.bad}</p>
                <p>Positiv: {totalFeedbackPercent}%</p>
                </div>
        </>
    )
}

export default FeedBack;