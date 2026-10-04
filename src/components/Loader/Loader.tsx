import './Loader.css'

type LoaderProps = {
  text?: string
}

function Loader({ text = 'Cargando Productos...' }: LoaderProps) {
  return (
    <div className="stgo-loader" role="status">
      <span className="stgo-loader-spinner" aria-hidden="true"></span>
      <p>{text}</p>
    </div>
  )
}

export default Loader
