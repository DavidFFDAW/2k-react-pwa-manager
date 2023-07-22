import UpsertInput, { UpsertDate, UpsertImage, UpsertTextArea, UpsertToggle } from '~/components/Forms/FormInputs';
import { NullableLoading } from '~/components/Loading/LoadingComponent';

export default function BlogDatas({ formState, setFormState }) {
    return (
        <div className="w1 flex column al-start gap-small">
            <UpsertInput
                type="text"
                label="Título"
                property="title"
                formState={formState}
                setFormState={setFormState}
                required={true}
                placeholder="Titulo de la noticia"
            />

            <UpsertImage
                placeholder="Imagen de la noticia"
                formState={formState}
                setFormState={setFormState}
                property="image"
            />

            <UpsertTextArea
                type="text"
                label={'Contenido'}
                property={'content'}
                formState={formState}
                setFormState={setFormState}
                required={true}
                rows={10}
            />
        </div>
    );
}

export function BlogStatus({ formState, setFormState }) {
    return (
        <div className="w1 flex column al-start gap-small">
            <div className="w1 flex evenly al-center gap">
                <UpsertToggle
                    label="Publicado"
                    property="published"
                    formState={formState}
                    setFormState={setFormState}
                />
                <UpsertToggle
                    label="¿Se puede borrar?"
                    property="is_deletable"
                    formState={formState}
                    setFormState={setFormState}
                />
            </div>

            <NullableLoading condition={!formState.published}>
                <UpsertDate
                    type="datetime"
                    label={'Fecha de publicacion'}
                    property={'date_publication'}
                    formState={formState}
                    setFormState={setFormState}
                    required={true}
                />
            </NullableLoading>
        </div>
    );
}
