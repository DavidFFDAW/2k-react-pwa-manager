import { useAuth } from '~/hooks/useAuth';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { validateForm } from './validators/form.validator';
import { enqueueSnackbar } from 'notistack';
import { PageBackground } from '~/components/Background/Background';
import { PrivateRoutes, PublicRoutes } from '~/constants/routes';
import './custom.css';

export default function Login() {
    const [state, setState] = useState({ email: '', password: '', valid: false });
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();
    const auth = useAuth();

    const submitForm = event => {
        event.preventDefault();

        if (!state.valid) return enqueueSnackbar('Formulario inválido');

        auth.tryLogInUser({ email: state.email, password: state.password }).then(response => {
            navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
        });
    };

    return (
        <>
            <PageBackground>
                <div className="login_container">
                    <div className="login flex between a-center column">
                        <h1>
                            <img src="/icons/icon-96x96.png" alt="" />
                        </h1>
                        <form action="" onSubmit={ev => submitForm(ev)} method="POST">
                            <div className="flex center gap column al-start" style={{ height: '205px' }}>
                                <input
                                    type="text"
                                    label="Email"
                                    placeholder="example@email.com"
                                    autoComplete="email"
                                    aria-autocomplete="list"
                                    className="w1 app-custom-input"
                                    value={state.email}
                                    onChange={e => setState({ ...state, email: e.target.value, valid: validateForm(state) })}
                                    required
                                    variant="filled"
                                />

                                <div className="w1 flex between">
                                    <input
                                        label="Contraseña"
                                        type={showPassword ? 'text' : 'password'}
                                        placeholder="Password"
                                        className="w1 app-custom-input nradius"
                                        autoComplete="current-password"
                                        aria-autocomplete="list"
                                        variant="filled"
                                        value={state.password}
                                        onChange={e => setState({ ...state, password: e.target.value, valid: validateForm(state) })}
                                        required
                                    />
                                    <button className="nradius" type="button" role="button" onClick={e => setShowPassword(previous => !previous)}>
                                        {showPassword ? 'Ocultar' : 'Mostrar'}
                                    </button>
                                </div>
                            </div>

                            <div className="w1 flex between row">
                                <Link to={PublicRoutes.REGISTER}>
                                    <button type="button" role="button" variant="contained" className="w1">
                                        Registrar
                                    </button>
                                </Link>
                                <button disabled={!state.valid} className="cta" type="submit" variant="contained">
                                    Enviar
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </PageBackground>
        </>
    );
}
