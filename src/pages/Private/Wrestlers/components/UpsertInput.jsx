export default function UpsertInput({ type, label, property, formState, setFormState }) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>
            <input
                className="w1"
                type={type}
                name={property}
                id={property}
                value={formState[`${property}`]}
                onChange={ev => setFormState({ ...formState, [property]: ev.target.value })}
            />
        </div>
    );
}

export function UpsertSelect({ children, label, property, formState, setFormState }) {
    return (
        <div className="w1 flex column gap-5">
            <label className="label">{label}</label>
            <select
                className="w1 custom"
                name="sex"
                id="sex"
                value={formState[`${property}`]}
                onChange={ev => setFormState({ ...formState, [property]: ev.target.value })}
            >
                {children}
            </select>
        </div>
    );
}
