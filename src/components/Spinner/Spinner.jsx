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
    const css = className
        ? `w1 flex center al-center component-spinner-ch4478asdw ${className}`
        : 'w1 flex center al-center component-spinner-ch4478asdw';

    return (
        <div className={css}>
            <div className="spinner small"></div>
        </div>
    );
}

export function DarkSpinner({ className }) {
    return (
        <div className={`w1 flex center al-center component-spinner-ch4478asdw ${className}`}>
            <div className="dark spinner small"></div>
        </div>
    );
}
