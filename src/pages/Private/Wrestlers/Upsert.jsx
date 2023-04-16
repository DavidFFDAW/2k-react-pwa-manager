import { useParams } from 'react-router-dom';
import useUpsert from './hooks/useUpsert';
import UpsertInput, { UpsertSelect } from './components/UpsertInput';

export default function Upsert({ type }) {
    const { id } = useParams();
    const { formState, setFormState, sendForm } = useUpsert(type, id);
    console.log(formState);

    return (
        <>
            <form action="POST" className="flex center al-center column gap wrestler-upsert-form" onSubmit={sendForm}>
                <div className="w90 boxed">
                    <h2 className="space-down">Datos</h2>
                    <div className="w1 flex column al-start gap-small">
                        <UpsertInput type="text" label="Nombre" property="name" formState={formState} setFormState={setFormState} />
                        <UpsertInput type="text" label="Alias" property="alias" formState={formState} setFormState={setFormState} />
                        <UpsertInput type="text" label="Finisher" property="finisher" formState={formState} setFormState={setFormState} />
                        <UpsertInput type="number" label="Media" property="overall" formState={formState} setFormState={setFormState} />
                        <UpsertSelect label="Sexo" property="sex" formState={formState} setFormState={setFormState}>
                            <option value="M">Hombre</option>
                            <option value="F">Mujer</option>
                        </UpsertSelect>
                    </div>
                </div>

                <div className="w90 boxed">
                    <h2 className="space-down">Atributos</h2>
                </div>

                <div className="w90 space-down">
                    <div className="w1 flex end">
                        <button type="submit" className="cta">
                            Guardar cambios
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
