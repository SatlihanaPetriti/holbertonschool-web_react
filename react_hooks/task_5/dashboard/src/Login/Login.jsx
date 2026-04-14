import onLogin from "../hooks/useLogin";
import "./Login.css";

function Login(props) {

    return (
        <div className="App-body">
            <p>Login to access the full dashboard</p>

            <form onSubmit={onLogin.handleLoginSubmit}>
                <label htmlFor="email">Email</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={onLogin.formData.email}
                    onChange={onLogin.handleChangeEmail}
                />

                <label htmlFor="password">Password</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={onLogin.formData.password}
                    onChange={onLogin.handleChangePassword}
                />
                <input type="submit" value="OK" disabled={!onLogin.enableSubmit} />
            </form>
        </div>
    );
}

export default Login;
