import './ErrorMessage.css'

type ErrorMessageProps = {
  message: string
}

function ErrorMessage({ message }: ErrorMessageProps) {
  return (
    <div className="stgo-error" role="alert">
      <p className="stgo-error-title">No pudimos cargar los productos</p>
      <p className="stgo-error-detail">{message}</p>
      <button type="button" className="stgo-error-retry" onClick={() => window.location.reload()}>
        Reintentar
      </button>
    </div>
  )
}

export default ErrorMessage
