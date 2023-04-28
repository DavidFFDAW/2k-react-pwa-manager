import UpsertInput, { UpsertTextArea } from '~/components/Forms/FormInputs';
import Spinner from '~/components/Spinner/Spinner';
import WrestlerCustomSelect from '~/components/Wrestler/CustomSelect/WrestlerCustomSelect';
import useGlobalWrestlers from '~/hooks/useGlobalWrestlers';
import useTwitterFormState from './hooks/useTwitterFormState';

export default function Upsert({ type }) {
    const { wrestlers } = useGlobalWrestlers('active');
    const { formState, setFormState, getIdCallback } = useTwitterFormState();

    return (
        <form action="POST" className="flex center al-center column gap wrestler-upsert-form">
            <div className="w90 boxed">
                <h2 className="space-down">Autor</h2>
                <div className="w1 flex column al-start gap-small">
                    {wrestlers.length > 0 ? (
                        <WrestlerCustomSelect list={wrestlers} nameProp={'name'} imageProp={'image'} getIdCallback={getIdCallback} />
                    ) : (
                        <Spinner />
                    )}
                </div>
            </div>

            <div className="w90 boxed">
                <h2 className="space-down">Datos del Tweet</h2>
                <div className="w1 flex column al-start gap-small">
                    <UpsertTextArea label="Contenido" property="message" formState={formState} setFormState={setFormState} />
                </div>
            </div>
        </form>
    );
}
