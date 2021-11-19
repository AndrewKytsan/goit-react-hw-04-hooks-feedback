import Statistics from './components/Statistics/Statistics';
import Buttons from './components/Buttons/Buttons';
import Sections from './components/Section/Sections';
import { useState } from 'react';
export default function App() {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);
    const buttons = ['good', 'neutral', 'bad'];
    const countTotalFeedback = () => {
        return good + neutral + bad;
    };

    const countPositiveFeedbackPercentage = () => {
        return Math.round((good / countTotalFeedback()) * 100);
    };

    const onbtnClick = btnName => {
        switch (btnName) {
            case 'good':
                setGood(prevState => prevState + 1);
                break;
            case 'neutral':
                setNeutral(prevState => prevState + 1);
                break;
            case 'bad':
                setBad(prevState => prevState + 1);
                break;
            default:
                return;
        }
    };

    return (
        <Sections title="Please leave feedback">
            <div>
                {buttons.map(button => (
                    <Buttons btnName={button} onLeaveFeedback={onbtnClick} />
                ))}
            </div>

            <Statistics
                good={good}
                neutral={neutral}
                bad={bad}
                total={countTotalFeedback()}
                positivePercentage={countPositiveFeedbackPercentage()}
            />
        </Sections>
    );
}
