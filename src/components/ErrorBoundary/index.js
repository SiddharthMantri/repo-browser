import React from 'react';


class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, errorMessage: '' };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI.
        return { hasError: true, errorMessage: error };
    }


    render() {
        if (this.state.hasError) {
            return <h4>{this.state.errorMessage}</h4>
        }
        return this.props.children;
    }
}
export default ErrorBoundary