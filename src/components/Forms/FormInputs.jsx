export default function UpsertInput({ type, max, label, property, formState, setFormState, onChangeCallback, required = false }) {
    const value = formState[`${property}`] || '';
    const defaultChange = ev => setFormState({ ...formState, [property]: ev.target.value });
    const change = !setFormState && Boolean(onChangeCallback) ? onChangeCallback : defaultChange;

    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>
            <input
                className="w1"
                maxLength={max || 100}
                type={type || 'text'}
                name={property}
                required={required}
                value={value}
                onChange={change}
            />
        </div>
    );
}

export function UpsertSelect({ children, label, property, formState, setFormState, defaultVal = '', required = false }) {
    const value = formState[`${property}`] || defaultVal;

    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>
            <select
                className="w1 custom"
                name={property}
                value={value}
                required={required}
                onChange={ev => setFormState({ ...formState, [property]: ev.target.value })}
            >
                {children}
            </select>
        </div>
    );
}

export function UpsertTextArea({ label, property, formState, setFormState, required = false, rows = 5 }) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>
            <textarea
                className="w1 custom input"
                name={property}
                value={formState[`${property}`]}
                rows={rows}
                required={required}
                onChange={ev => setFormState({ ...formState, [property]: ev.target.value })}
            />
        </div>
    );
}
