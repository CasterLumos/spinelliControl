import { LoginWrapper } from "../login/Styles/LoginWrapper";
import { Formik } from "formik";

export default function Login() {
    return (
        <div>
            <Formik
                initialValues={{ email: "", password: "", button: "" }}
                validate={(values) => {
                    const errors = {};
                    if (!values.password) {
                        errors.password = "Insira uma senha";
                    }
                    if (!values.email) {
                        errors.email = "Insira um Email";
                    } else if (
                        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(
                            values.email
                        )
                    ) {
                        errors.email = "Insira um Email Válido";
                    }
                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        setSubmitting(false);
                        fetch(`${process.env.URL_API}/api/signin`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify(values),
                        }).then((res) => {
                            if (res.ok) {
                                res.json().then((res) => {
                                    const token = res.token;
                                    console.log("toked:", token);
                                    localStorage.userToken = token;
                                    window.location.href = `${process.env.URL_APP}/dashboard/`;
                                });
                            } else {
                                alert(
                                    "Autenticação Falhou. Email ou Senha inválidos."
                                );
                            }
                        });
                    }, 400);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <LoginWrapper>
                        <div className="container">
                            <div className="screen">
                                <div className="screen__content">
                                    <form
                                        className="login"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="login__field">
                                            <i className="login__icon fas fa-user"></i>
                                            <input
                                                id="email"
                                                type="email"
                                                className="login__input"
                                                placeholder="Email"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.email}
                                            />
                                            <div className="error">
                                                {errors.email &&
                                                    touched.email &&
                                                    errors.email}
                                            </div>
                                        </div>
                                        <div className="login__field">
                                            <i className="login__icon fas fa-lock"></i>
                                            <input
                                                id="password"
                                                type="password"
                                                className="login__input"
                                                placeholder="Senha"
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.password}
                                            />
                                            <div className="error">
                                                {errors.password &&
                                                    touched.password &&
                                                    errors.password}
                                            </div>
                                        </div>
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="button login__submit"
                                        >
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
                )}
            </Formik>
        </div>
    );
}
