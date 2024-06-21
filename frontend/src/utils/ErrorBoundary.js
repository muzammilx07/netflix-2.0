import React, { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state to show fallback UI
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any fallback UI here
      return <p>Something went wrong.</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
