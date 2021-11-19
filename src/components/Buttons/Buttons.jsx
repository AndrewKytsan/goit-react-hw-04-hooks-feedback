import PropTypes from 'prop-types';
import s from './Buttons.module.scss';

export default function Buttons({ btnName, onLeaveFeedback }) {
    return (
        <button
            className={s.button}
            onClick={() => onLeaveFeedback(btnName)}
            type="button"
        >
            {btnName}
        </button>
    );
}

Buttons.propTypes = {
    nameBtn: PropTypes.string.isRequired,
    onLeaveFeedback: PropTypes.func.isRequired,
};
