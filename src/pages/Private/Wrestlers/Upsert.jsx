import { useParams } from 'react-router-dom';
import useUpsert from './hooks/useUpsert';
import UpsertDatas, { UpsertDatasState, UpsertImages, UpsertTwitter } from './components/UpsertLayout';

export default function Upsert({ type }) {
    const { id } = useParams();
    const { formState, setFormState, sendForm, deleteWrestler } = useUpsert(type, id);
    console.log(formState.loading);

    return (
        <>
            <form action="POST" className="flex center al-center column gap wrestler-upsert-form" onSubmit={sendForm}>
                <div className="w90 boxed">
                    <h2 className="space-down">Datos Generales</h2>
                    <UpsertDatas formState={formState} setFormState={setFormState} />
                </div>

                <div className="w90 boxed">
                    <h2 className="space-down">Datos de Estado</h2>
                    <UpsertDatasState formState={formState} setFormState={setFormState} />
                </div>

                <div className="w90 boxed">
                    <h2 className="space-down">Datos de Twitter</h2>
                    <UpsertTwitter formState={formState} setFormState={setFormState} />
                </div>

                <div className="w90 boxed">
                    <h2 className="space-down">Imágenes</h2>
                    <UpsertImages formState={formState} setFormState={setFormState} />
                </div>

                <div className="w90 space-down">
                    <div className="w1 flex between al-center gap">
                        {formState.id && (
                            <button type="button" className="btn danger" onClick={deleteWrestler}>
                                Borrar
                            </button>
                        )}
                        <button type="submit" className="cta">
                            Guardar cambios
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
}
