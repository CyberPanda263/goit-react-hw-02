import css from "./Options.module.css";

const Options = ({resetFeedback, updateFeedback, FeedBacksStatus}) => {
    return (
        <div>
            <button onClick={() => updateFeedback("good")}>Good</button>
            <button className={css.button} onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button className={css.button} onClick={() => updateFeedback("bad")}>Bad</button>
            {FeedBacksStatus === true && (
                <button className={css.button} onClick={() => resetFeedback()}>Reset</button>
                )}
        </div>
    )
}

export default Options;