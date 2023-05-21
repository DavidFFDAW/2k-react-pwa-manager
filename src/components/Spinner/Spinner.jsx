import './spinner.css';

export default function Spinner() {
    const scss = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
    };

    return (
        <div className="w1 flex center" style={scss}>
            <div className="spinner"></div>
        </div>
    );
}

export function ComponentSpinner({ className }) {
    const css = className ? `w1 flex center ${className}` : 'w1 flex center';

    return (
        <div className={css}>
            <div className="spinner small"></div>
        </div>
    );
}
