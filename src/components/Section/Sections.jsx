import PropTypes from 'prop-types';
import s from './Sections.module.scss';

export default function Sections({ title, children }) {
    return (
        <div className={s.section}>
            <h1 className={s.mainTitle}>{title}</h1>
            {children}
        </div>
    );
}

Sections.propTypes = {
    title: PropTypes.string.isRequired,
};
