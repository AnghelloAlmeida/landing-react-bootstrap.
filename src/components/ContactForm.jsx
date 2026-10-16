import { useState } from 'react'

const initialValues = { nombre: '', email: '', telefono: '', asunto: '', mensaje: '', terminos: false }

// Reglas de validación (se mantienen las de un formulario típico de la Guía 1)
function validateField(name, value) {
  switch (name) {
    case 'nombre':
      if (!value.trim()) return 'El nombre es obligatorio.'
      if (value.trim().length < 3) return 'El nombre debe tener al menos 3 caracteres.'
      if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñÜü\s]+$/.test(value)) return 'El nombre solo puede contener letras.'
      return ''
    case 'email':
      if (!value.trim()) return 'El correo es obligatorio.'
      if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) return 'Ingrese un correo válido (ej. nombre@dominio.com).'
      return ''
    case 'telefono':
      if (!value.trim()) return 'El teléfono es obligatorio.'
      if (!/^\d{10}$/.test(value)) return 'El teléfono debe tener exactamente 10 dígitos.'
      return ''
    case 'asunto':
      return value ? '' : 'Seleccione un asunto.'
    case 'mensaje':
      if (!value.trim()) return 'El mensaje es obligatorio.'
      if (value.trim().length < 10) return 'El mensaje debe tener al menos 10 caracteres.'
      return ''
    case 'terminos':
      return value ? '' : 'Debe aceptar los términos y condiciones.'
    default:
      return ''
  }
}

function validateAll(values) {
  const errors = {}
  Object.keys(values).forEach((k) => {
    const msg = validateField(k, values[k])
    if (msg) errors[k] = msg
  })
  return errors
}

export default function ContactForm() {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [status, setStatus] = useState(null) // null | 'success' | 'error'

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target
    const val = type === 'checkbox' ? checked : value
    setValues((prev) => ({ ...prev, [name]: val }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, val) }))
    setStatus(null)
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched((prev) => ({ ...prev, [name]: true }))
    setErrors((prev) => ({ ...prev, [name]: validateField(name, values[name]) }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newErrors = validateAll(values)
    setErrors(newErrors)
    setTouched(Object.fromEntries(Object.keys(values).map((k) => [k, true])))
    if (Object.keys(newErrors).length > 0) {
      setStatus('error')
      return
    }
    setStatus('success')
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  const handleReset = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
    setStatus(null)
  }

  const cls = (name) =>
    'form-control' + (touched[name] ? (errors[name] ? ' is-invalid' : ' is-valid') : '')

  const feedback = (name) =>
    errors[name] ? <div className="invalid-feedback">{errors[name]}</div> : null

  return (
    <section id="contacto" className="py-5">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-7">
            <h2 className="text-center fw-bold mb-2">Contáctanos</h2>
            <p className="text-center text-muted mb-4">Completa el formulario y te responderemos pronto.</p>

            {status === 'success' && (
              <div className="alert alert-success" role="alert">
                ✅ ¡Mensaje enviado correctamente! Gracias por contactarnos.
              </div>
            )}
            {status === 'error' && (
              <div className="alert alert-danger" role="alert">
                ⚠️ Corrige los campos marcados antes de enviar el formulario.
              </div>
            )}

            <form onSubmit={handleSubmit} noValidate className="card card-body shadow-sm p-4">
              <div className="row g-3">
                <div className="col-12 col-md-6">
                  <label htmlFor="nombre" className="form-label">Nombre completo</label>
                  <input id="nombre" name="nombre" type="text" className={cls('nombre')}
                    value={values.nombre} onChange={handleChange} onBlur={handleBlur} />
                  {feedback("nombre")}
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="email" className="form-label">Correo electrónico</label>
                  <input id="email" name="email" type="email" className={cls('email')}
                    value={values.email} onChange={handleChange} onBlur={handleBlur} />
                  {feedback("email")}
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="telefono" className="form-label">Teléfono</label>
                  <input id="telefono" name="telefono" type="tel" inputMode="numeric" maxLength={10}
                    className={cls('telefono')} value={values.telefono}
                    onChange={handleChange} onBlur={handleBlur} />
                  {feedback("telefono")}
                </div>
                <div className="col-12 col-md-6">
                  <label htmlFor="asunto" className="form-label">Asunto</label>
                  <select id="asunto" name="asunto"
                    className={cls('asunto').replace('form-control', 'form-select')}
                    value={values.asunto} onChange={handleChange} onBlur={handleBlur}>
                    <option value="">Seleccione...</option>
                    <option>Cotización</option>
                    <option>Soporte</option>
                    <option>Información general</option>
                  </select>
                  {feedback("asunto")}
                </div>
                <div className="col-12">
                  <label htmlFor="mensaje" className="form-label">Mensaje</label>
                  <textarea id="mensaje" name="mensaje" rows="4" className={cls('mensaje')}
                    value={values.mensaje} onChange={handleChange} onBlur={handleBlur} />
                  {feedback("mensaje")}
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input id="terminos" name="terminos" type="checkbox"
                      className={cls('terminos').replace('form-control', 'form-check-input')}
                      checked={values.terminos} onChange={handleChange} onBlur={handleBlur} />
                    <label htmlFor="terminos" className="form-check-label">Acepto los términos y condiciones</label>
                    {feedback("terminos")}
                  </div>
                </div>
                <div className="col-12 d-grid d-sm-flex gap-2 justify-content-sm-end">
                  <button type="button" className="btn btn-outline-secondary" onClick={handleReset}>Limpiar</button>
                  <button type="submit" className="btn btn-primary px-4">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
