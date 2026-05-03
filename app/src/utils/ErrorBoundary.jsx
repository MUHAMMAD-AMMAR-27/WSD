import React from "react"

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
      showStack: false,
    }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ errorInfo })

    // Central place for logging
    console.group("🚨 React ErrorBoundary")
    console.error(error)
    console.error(errorInfo?.componentStack)
    console.groupEnd()

    // OPTIONAL: send to backend
    // logErrorToService(error, errorInfo)
  }

  handleRetry = () => {
    this.setState({
      hasError: false,
      error: null,
      errorInfo: null,
      showStack: false,
    })
  }

  render() {
    if (!this.state.hasError) return this.props.children

    const { error, errorInfo, showStack } = this.state

    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-zinc-950 to-zinc-900 text-zinc-100 p-6">
        <div className="max-w-3xl w-full rounded-2xl border border-red-500/30 bg-zinc-900/70 shadow-2xl backdrop-blur p-6 space-y-6">

          {/* Header */}
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-500/10 text-red-400 text-xl">
              ⚠
            </div>
            <div>
              <h1 className="text-xl font-semibold text-red-400">
                Application Error
              </h1>
              <p className="text-sm text-zinc-400">
                A runtime error occurred while rendering this page
              </p>
            </div>
          </div>

          {/* Error message */}
          <div className="rounded-lg bg-red-500/10 border border-red-500/20 p-4 text-red-300 font-mono text-sm">
            {error?.message || "Unknown error"}
          </div>

          {/* Metadata */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-zinc-400">
            <div>
              <span className="font-semibold text-zinc-300">Environment:</span>{" "}
              {import.meta.env?.MODE || "unknown"}
            </div>
            <div>
              <span className="font-semibold text-zinc-300">Timestamp:</span>{" "}
              {new Date().toLocaleString()}
            </div>
          </div>

          {/* Stack toggle */}
          {(errorInfo || error?.stack) && (
            <div className="space-y-2">
              <button
                onClick={() => this.setState({ showStack: !showStack })}
                className="text-xs text-red-400 hover:text-red-300 underline"
              >
                {showStack ? "Hide technical details" : "Show technical details"}
              </button>

              {showStack && (
                <pre className="max-h-64 overflow-auto rounded-lg bg-zinc-950 p-4 text-xs text-zinc-300 border border-zinc-800">
{errorInfo?.componentStack || error?.stack}
                </pre>
              )}
            </div>
          )}

          {/* Actions */}
          <div className="flex flex-wrap gap-3 pt-4">
            <button
              onClick={this.handleRetry}
              className="px-4 py-2 rounded-lg bg-red-500 hover:bg-red-600 text-white text-sm font-medium transition"
            >
              Retry
            </button>

            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-200 text-sm font-medium transition"
            >
              Reload Page
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ErrorBoundary
