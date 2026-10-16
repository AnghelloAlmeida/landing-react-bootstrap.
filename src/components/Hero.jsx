export default function Hero() {
  return (
    <header id="inicio" className="hero d-flex align-items-center text-white text-center text-lg-start">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-7">
            <h1 className="display-4 fw-bold">Creamos experiencias web modernas</h1>
            <p className="lead my-4">
              Landing pages rápidas, responsivas y construidas con React y Bootstrap
              para impulsar tu proyecto.
            </p>
            <a href="#contacto" className="btn btn-light btn-lg me-2 mb-2">Contáctanos</a>
            <a href="#servicios" className="btn btn-outline-light btn-lg mb-2">Ver servicios</a>
          </div>
          <div className="col-lg-5 d-none d-lg-block text-center" aria-hidden="true">
            <div style={{ fontSize: '10rem' }}>💻</div>
          </div>
        </div>
      </div>
    </header>
  )
}
