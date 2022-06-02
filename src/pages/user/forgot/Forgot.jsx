import "./forgot.css";

const Forgot = () => {
  return (
    <div>
      <main>

        <div className="side-form">
          <div className="form-box">
            <h3>Esqueceu Senha</h3>
            <div className="form-control">
              <label className="lsOptionText" for="email">Email </label>
              <input type="email" min={0} className="input" placeholder="Email" id="email" />
            </div>
            <button type="submit" className="form-button">Recuperar</button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Forgot