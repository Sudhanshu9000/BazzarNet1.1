import React from 'react';
import { motion } from 'framer-motion';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-[var(--bg)] text-[var(--text)]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center p-8 max-w-md mx-auto"
          >
            <h1 className="text-2xl font-bold mb-4 text-[var(--accent)]">Oops! Something went wrong</h1>
            <p className="text-lg mb-6">
              We're having trouble loading the application. This might be due to a network issue or server problem.
            </p>
            <div className="space-y-4">
              <button
                onClick={() => window.location.reload()}
                className="bg-[var(--accent)] text-white px-6 py-3 rounded-lg font-medium hover:bg-[var(--accent-dark)] transition-colors"
              >
                Refresh Page
              </button>
              <p className="text-sm opacity-70">
                If the problem persists, please check your internet connection or try again later.
              </p>
            </div>
          </motion.div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;