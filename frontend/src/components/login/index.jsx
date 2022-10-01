import { LoginWrapper } from "../login/Styles/LoginWrapper";

export default function Login() {
    return (
        <>
            <LoginWrapper>
                <div className="container">
                    <div className="screen">
                        <div className="screen__content">
                            <form className="login">
                                <div className="login__field">
                                    <i className="login__icon fas fa-user"></i>
                                    <input
                                        type="email"
                                        className="login__input"
                                        placeholder="Email"
                                    />
                                </div>
                                <div className="login__field">
                                    <i className="login__icon fas fa-lock"></i>
                                    <input
                                        type="password"
                                        className="login__input"
                                        placeholder="Senha"
                                    />
                                </div>
                                <button className="button login__submit">
                                    <span className="button__text">
                                        Acessar Sistema
                                    </span>
                                    <i className="button__icon fas fa-chevron-right"></i>
                                </button>
                            </form>
                            <div className="social-login">
                                <h3>Spinelli Controll</h3>
                            </div>
                        </div>
                        <div className="screen__background">
                            <span className="screen__background__shape screen__background__shape4"></span>
                            <span className="screen__background__shape screen__background__shape3"></span>
                            <span className="screen__background__shape screen__background__shape2"></span>
                            <span className="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>
            </LoginWrapper>
        </>
    );
}
