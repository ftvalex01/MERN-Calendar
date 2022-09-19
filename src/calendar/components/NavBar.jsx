

export const NavBar = ({onChangeLenguage}) => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className="navbar-brand">
        <i className="fas fa-calendar-alt"/>
        &nbsp;
            Alex
        </span>
        <button 
        className="btn btn-outline-primary"
        onClick={onChangeLenguage}
        >
        <i className="fas fa-sign-out-alternative"></i>
          <span id="idioma">Change Lenguage</span>
        </button>
        <button className="btn btn-outline-danger">
            <i className="fas fa-sing-out-alt"/>
            <span>Salir</span>
        </button>
    </div>
  )
}
