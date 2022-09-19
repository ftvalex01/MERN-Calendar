

export const NavBar = () => {
  return (
    <div className="navbar navbar-dark bg-dark mb-4 px-4">
        <span className="navbar-brand">
        <i className="fas fa-calendar-alt"/>
        &nbsp;
            Alex
        </span>
        <button className="btn btn-outline-danger">
            <i className="fas fa-sing-out-alt"/>
            <span>Salir</span>
        </button>
    </div>
  )
}
