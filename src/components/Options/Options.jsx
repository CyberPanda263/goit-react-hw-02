import css from "./Options.module.css";

const Options = ({resetFeedback, updateFeedback, totalFeedback}) => {
    return (
        <div>
            <button onClick={() => updateFeedback("good")}>Good</button>
            <button className={css.button} onClick={() => updateFeedback("neutral")}>Neutral</button>
            <button className={css.button} onClick={() => updateFeedback("bad")}>Bad</button>
            {totalFeedback != 0 && (
                <button className={css.button} onClick={() => resetFeedback()}>Reset</button>
                )}
        </div>
    )
}

export default Options;