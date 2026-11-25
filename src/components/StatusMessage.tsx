
interface StatusMessageProps {
  status: 'initial' | 'loading' | 'success' | 'empty' | 'error'
  errorMessage: string
  resultCount: number
  onRetry: () => void
}

function StatusMessage({
  status,
  errorMessage,
  resultCount,
  onRetry,
}: StatusMessageProps) {
  if (status === 'initial') {
    return null
  }

  if (status === 'loading') {
    return (
      <div className="status-message status-loading" role="status">
        <p>Consultando cotizaciones...</p>
      </div>
    )
  }

  if (status === 'error') {
    return (
      <div className="status-message status-error" role="alert">
        <p>{errorMessage}</p>
        <button
          type="button"
          className="secondary-button"
          onClick={onRetry}
        >
          Reintentar
        </button>
      </div>
    )
  }

  if (status === 'empty') {
    return (
      <div className="status-message status-empty" role="status">
        <p>No hay criptomonedas disponibles.</p>
      </div>
    )
  }

  if (status === 'success' && resultCount === 0) {
    return (
      <div className="status-message status-empty" role="status">
        <p>No se encontraron criptomonedas con esos filtros.</p>
      </div>
    )
  }

  return null
}

export default StatusMessage
