const year = new Date().getFullYear()

export default function Footer() {
  return (
    <footer className="bg-dark text-white-50 text-center py-4">
      <div className="container">
        <small>© {year} DevWeb.Studio · Desarrollo Web – UNEMI · Hecho con React y Bootstrap</small>
      </div>
    </footer>
  )
}
