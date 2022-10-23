import React, { Component } from 'react';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    componentDidCatch(error, info) {
        this.state({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="tc f-1">
                    <h1>Oooops. That is not good</h1>;
                </div>
            );
        }
        return this.props.children;
    }
}

export default ErrorBoundary;
