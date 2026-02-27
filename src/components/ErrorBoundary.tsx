import React, { Component, ErrorInfo, ReactNode } from 'react';
import { Button } from './ui/Button';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-light px-6">
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-3xl font-bold text-navy mb-4">Oops, something went wrong.</h2>
            <p className="text-gray-500 mb-8">We're sorry, but an unexpected error occurred. Please try refreshing the page.</p>
            <Button onClick={() => window.location.reload()} size="lg">
              Refresh Page
            </Button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
