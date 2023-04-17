import { useParams } from 'react-router-dom';
import useUpsert from './hooks/useUpsert';
import UpsertDatas from './components/UpsertLayout';

export default function Upsert({ type }) {
    const { id } = useParams();
    const { formState, setFormState, sendForm } = useUpsert(type, id);

    return (
        <>
            <form action="POST" className="flex center al-center column gap wrestler-upsert-form" onSubmit={sendForm}>
                <div className="w90 boxed">
                    <h2 className="space-down">Datos</h2>
                    <UpsertDatas formState={formState} setFormState={setFormState} />
                </div>

                <div className="w90 boxed">
                    <h2 className="space-down">Atributos</h2>
                    <UpsertDatas formState={formState} setFormState={setFormState} />
                </div>

                <div className="w90 boxed">
                    <h2 className="space-down">Imágenes</h2>
                    <UpsertDatas formState={formState} setFormState={setFormState} />
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
