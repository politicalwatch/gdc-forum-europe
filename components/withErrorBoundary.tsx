import React from 'react';

interface State {
  hasError: boolean;
}

export default function withErrorBoundary(WrappedComponent: React.ComponentType<any>) {
  return class extends React.Component<{}, State> {
    state: State = {
      hasError: false
    };

    static getDerivedStateFromError() {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
      // You can also log the error to an error reporting service
      console.error('Uncaught error:', error, errorInfo);
    }

    render() {
      if (this.state.hasError) {
        return <h1>Sorry, something went wrong.</h1>;
      }

      return <WrappedComponent {...this.props} />;
    }
  };
}
