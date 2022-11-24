import React from 'react';

class Badge extends React.Component {
    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState) {

    }

    componentWillUnmount() {

    }

    render() {
        return (
            <div className="Badge">
                <div className="Badge__header">
                    <img
                        // src={conflogo}
                        src=""
                        alt=""
                    />
                </div>

                <div className="Badge__section-name">
                    <img
                        className="Badge__avatar"
                        src={this.props.avatarUrl}
                        alt="Avatar"
                    />
                    <h1>
                        {this.props.firstName}<br />
                        {this.props.lastName}
                    </h1>
                </div>

                <div className="Badge__section-info">
                    <h3>{this.props.jobTitle}</h3>
                    <div>@{this.props.twitter}</div>
                </div>

                <div className="Badge__footer">
                    #PlatziConf
                </div>
            </div>
        );
    }
}

export default Badge;
