import ImagePreview from '~/components/Forms/ImagePreview';
import UpsertInput, { UpsertSelect } from '~/components/Forms/UpsertInput';

export default function UpsertDatas({ formState, setFormState }) {
    return (
        <div className="w1 flex column al-start gap-small">
            <UpsertInput type="text" label="Nombre" property="name" formState={formState} setFormState={setFormState} />
            <UpsertInput type="text" label="Alias" property="alias" formState={formState} setFormState={setFormState} />
            <UpsertInput type="text" label="Finisher" property="finisher" formState={formState} setFormState={setFormState} />
            <UpsertInput type="number" label="Media" property="overall" formState={formState} setFormState={setFormState} />
            <UpsertSelect label="Sexo" property="sex" formState={formState} setFormState={setFormState}>
                <option>--</option>
                <option value="M">Hombre</option>
                <option value="F">Mujer</option>
            </UpsertSelect>
        </div>
    );
}

export function UpsertDatasState({ formState, setFormState }) {
    return (
        <div className="w1 flex column al-start gap-small">
            <UpsertSelect label="Tipo de competición" defaultVal={0} property="is_tag" formState={formState} setFormState={setFormState}>
                <option>--</option>
                <option value="0">Individual</option>
                <option value="1">Tag Team</option>
            </UpsertSelect>
            <UpsertSelect label="Kayfabe Status" property="kayfabe" formState={formState} setFormState={setFormState}>
                <option>--</option>
                <option value="face">Face</option>
                <option value="heel">Heel</option>
            </UpsertSelect>
            <UpsertSelect label="Estado" property="status" formState={formState} setFormState={setFormState}>
                <option>--</option>
                <option value="released">Despedido</option>
                <option value="not-active">No activo</option>
                <option value="manager">Manager</option>
                <option value="semi-active">Semi-activo</option>
                <option value="active">En activo</option>
            </UpsertSelect>
            <UpsertSelect label="Marca" property="brand" formState={formState} setFormState={setFormState}>
                <option>--</option>
                <option value="RAW">RAW</option>
                <option value="SD">SmackDown Live</option>
                <option value="NXT">NXT 2.0</option>
                <option value="205">205 Live</option>
                <option value="AWD">All Womens Division (AWD)</option>
            </UpsertSelect>
        </div>
    );
}

export function UpsertImages({ formState, setFormState }) {
    return (
        <div className="w1 flex column al-start gap-small">
            <div className="w1 flex start al-center gap-small">
                <ImagePreview image={formState.image} name={formState.name} />
                <UpsertInput max={255} type="text" label="Imagen de App" property="image" formState={formState} setFormState={setFormState} />
            </div>
            <div className="w1 flex start al-center gap-small">
                <UpsertInput
                    max={255}
                    type="text"
                    label="Imagen de Twitter"
                    property="twitter_image"
                    formState={formState}
                    setFormState={setFormState}
                />
                <ImagePreview image={formState.twitter_image} name={formState.name} />
            </div>
        </div>
    );
}

export function UpsertTwitter({ formState, setFormState }) {
    return (
        <div className="w1 flex column al-start gap-small">
            <UpsertInput type="text" label="Nombre Twitter" property="twitter_name" formState={formState} setFormState={setFormState} />
            <UpsertInput type="text" label="@ Cuenta de Twitter" property="twitter_account" formState={formState} setFormState={setFormState} />
        </div>
    );
}
