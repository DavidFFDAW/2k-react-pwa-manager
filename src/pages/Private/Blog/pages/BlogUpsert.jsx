import useBlogUpsert from './hooks/useBlogUpsert';
import BlogDatas, { BlogStatus } from './components/BlogDatas';
import { Boxed } from '~/components/Box/Boxed';
import { SimpleBlogCard } from './components/BlogCard';
import { ButtonCTA } from '~/components/Buttons/Buttons';
import Spinner from '~/components/Spinner/Spinner';
import { NullableLoading } from '~/components/Loading/LoadingComponent';

export default function BlogUpsert({ type }) {
    const { state, functions } = useBlogUpsert(type);
    if (state.post.loading) return <Spinner />;

    return (
        <>
            <form action="POST" className="flex center al-center column gap" onSubmit={functions.sendForm}>
                <h2 className="page-title">
                    Creacion de <strong>Post</strong>
                </h2>

                <SimpleBlogCard
                    title={state.post.title}
                    content={state.post.content}
                    creationDate={false}
                    image={state.post.image}
                    className="sticky blog-preview"
                />

                <Boxed title={'Datos'}>
                    <BlogDatas formState={state.post} setFormState={state.updater} />
                </Boxed>

                <Boxed title={'Estado'}>
                    <BlogStatus formState={state.post} setFormState={state.updater} />
                </Boxed>

                <NullableLoading condition={functions.areFieldsValid()}>
                    <div className="fixed-button">
                        <ButtonCTA type={'submit'} text={'Guardar cambios'} />
                    </div>
                </NullableLoading>
            </form>
        </>
    );
}
