import './toggle.css';

export default function UpsertInput({
    type,
    max,
    label,
    property,
    literalValue,
    formState,
    setFormState,
    onChangeCallback,
    required = false,
}) {
    const value = literalValue || formState[`${property}`] || '';
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

export function UpsertToggle({ toggleCallback, label, checked }) {
    return (
        <div className="custom-toggle-switch">
            <label className="form-label block">{label}</label>
            <label className="switch block">
                <input type="checkbox" name="isCurrent" checked={checked || false} onChange={toggleCallback} />
                <span className="slider round"></span>
            </label>
        </div>
    );
}

export function UpsertDate({ min, max, label, property, formState, setFormState, required = false }) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>
            <input
                min={min}
                max={max}
                className="w1 date-input"
                type="date"
                name={property}
                required={required}
                value={formState[`${property}`] || ''}
                onChange={ev => setFormState({ ...formState, [property]: ev.target.value })}
            />
        </div>
    );
}
