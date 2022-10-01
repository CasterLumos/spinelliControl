import { LoginWrapper } from "../login/Styles/LoginWrapper";

export default function Login() {
    return (
        <>
            <LoginWrapper>
                <div class="container">
                    <div class="screen">
                        <div class="screen__content">
                            <form class="login">
                                <div class="login__field">
                                    <i class="login__icon fas fa-user"></i>
                                    <input
                                        type="email"
                                        class="login__input"
                                        placeholder="Email"
                                    />
                                </div>
                                <div class="login__field">
                                    <i class="login__icon fas fa-lock"></i>
                                    <input
                                        type="password"
                                        class="login__input"
                                        placeholder="Senha"
                                    />
                                </div>
                                <button class="button login__submit">
                                    <span class="button__text">
                                        Acessar Sistema
                                    </span>
                                    <i class="button__icon fas fa-chevron-right"></i>
                                </button>
                            </form>
                            <div class="social-login">
                                <h3>Spinelli Controll</h3>
                            </div>
                        </div>
                        <div class="screen__background">
                            <span class="screen__background__shape screen__background__shape4"></span>
                            <span class="screen__background__shape screen__background__shape3"></span>
                            <span class="screen__background__shape screen__background__shape2"></span>
                            <span class="screen__background__shape screen__background__shape1"></span>
                        </div>
                    </div>
                </div>
            </LoginWrapper>
        </>
    );
}