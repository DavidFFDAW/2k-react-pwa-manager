import UpsertInput, { UpsertSelect, UpsertTextArea } from '~/components/Forms/FormInputs';
import { ComponentSpinner } from '~/components/Spinner/Spinner';
import WrestlerCustomSelect from '~/components/CustomSelect/CustomSelect';
import useGlobalWrestlers from '~/hooks/useGlobalWrestlers';
import useTwitterFormState from './hooks/useTwitterFormState';

export default function Upsert({ type, reply = false }) {
    const { wrestlers } = useGlobalWrestlers('all');
    const { formState, setFormState, getIdCallback, handleSubmitForm, handleDeleteTweet } = useTwitterFormState(type, reply);
    const buttonLayout = formState.id ? 'flex between' : 'flex end';

    return (
        <form action="POST" className="flex center al-center column gap wrestler-upsert-form" onSubmit={handleSubmitForm}>
            <div className="w90 boxed">
                <h2 className="space-down">Autor</h2>
                <div className="w1 relative flex column al-start gap-small">
                    {wrestlers.length > 0 ? (
                        <WrestlerCustomSelect
                            list={wrestlers}
                            nameProp={'name'}
                            imageProp={'image'}
                            getIdCallback={getIdCallback}
                            value={formState.author_id}
                        />
                    ) : (
                        <ComponentSpinner />
                    )}

                    <UpsertSelect
                        label="Dispositivo"
                        property="device"
                        defaultVal={formState.device}
                        formState={formState}
                        setFormState={setFormState}
                    >
                        <option>--</option>
                        <option value="Android">Android</option>
                        <option value="iOS">iOS</option>
                        <option value="Web">Web</option>
                    </UpsertSelect>
                </div>
            </div>

            <div className="w90 boxed">
                <h2 className="space-down">Tweet</h2>
                <div className="w1 flex column al-start gap-small">
                    <UpsertTextArea
                        label="Contenido"
                        property="message"
                        formState={formState}
                        setFormState={setFormState}
                        required
                    />
                </div>
            </div>

            <div className="w90 boxed">
                <h2 className="space-down">Opcionales</h2>
                <div className="w1 flex column al-start gap-small">
                    <UpsertInput
                        type="number"
                        label="Likes"
                        property="likes"
                        formState={formState}
                        setFormState={setFormState}
                    />
                    <UpsertInput
                        type="number"
                        label="Comentarios"
                        property="comments"
                        formState={formState}
                        setFormState={setFormState}
                    />
                    <UpsertInput
                        type="number"
                        label="Retweets"
                        property="retweets"
                        formState={formState}
                        setFormState={setFormState}
                    />
                </div>
            </div>

            <div className="w90 space-down">
                <div className={`w1 ${buttonLayout} al-center gap`}>
                    {formState.id && (
                        <button type="button" className="btn danger" onClick={handleDeleteTweet}>
                            Borrar
                        </button>
                    )}
                    <button type="submit" className="cta">
                        Guardar cambios
                    </button>
                </div>
            </div>
        </form>
    );
}
