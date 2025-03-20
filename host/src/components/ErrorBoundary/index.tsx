/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
import { Component, ErrorInfo, ReactNode } from 'react';

interface ErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught in error boundary:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError)
      return this.props.fallback || <h1>Something went wrong.</h1>;

    return this.props.children;
  }
}

export default ErrorBoundary;
