import Notification from '../Notification/Notification'


const FeedBack = ({FeedBacks, totalFeedbackPersent, FeedBacksStatus}) => {
    return (
        <>
            {FeedBacksStatus === true ? (
                <div>
                <p>good: {FeedBacks.good}</p>
                <p>neutral: {FeedBacks.neutral}</p>
                <p>bad: {FeedBacks.bad}</p>
                <p>Positiv: {totalFeedbackPersent}%</p>
                </div>
            ):(
                <Notification />
            )}
        </>
    )
}

export default FeedBack;