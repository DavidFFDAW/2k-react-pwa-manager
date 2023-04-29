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

export function ComponentSpinner() {
    return (
        <div className="w1 flex center">
            <div className="spinner small"></div>
        </div>
    );
}
