const services = [
  { icon: '🎨', title: 'Diseño responsivo', text: 'Interfaces que se adaptan a móviles, tablets y escritorio con el sistema de rejilla de Bootstrap.' },
  { icon: '⚛️', title: 'Componentes React', text: 'Aplicaciones modulares y reutilizables, con estado gestionado mediante hooks.' },
  { icon: '✅', title: 'Formularios validados', text: 'Validación en tiempo real y mensajes claros de error y éxito para el usuario.' },
]

export default function Services() {
  return (
    <section id="servicios" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-2">Nuestros servicios</h2>
        <p className="text-center text-muted mb-5">Todo lo necesario para tu presencia web.</p>
        <div className="row g-4">
          {services.map((s) => (
            <div className="col-12 col-md-6 col-lg-4" key={s.title}>
              <div className="card service-card h-100 border-0 shadow-sm text-center p-3">
                <div className="card-body">
                  <div className="icon-circle mb-3">{s.icon}</div>
                  <h3 className="h5 card-title">{s.title}</h3>
                  <p className="card-text text-muted">{s.text}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
