import React from 'react';
import { Link } from 'react-router-dom';
import api from '../api';
import BadgeList from '../components/BadgesList';
import PageError from '../components/PageError';
import PageLoading from '../components/PageLoading';

class Badges extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
    };

    componentDidMount() {
        this.fetchData();

        this.intervalId = setInterval(this.fetchData, 5000);
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    fetchData = async () => {
        this.setState({
            ...this.state,
            loading: true,
            error: null,
        });

        try {
            const data = await api.badges.list();
            this.setState({
                ...this.state,
                loading: false,
                data,
            });
        } catch (error) {
            this.setState({
                ...this.state,
                loading: false,
                error,
            })
        }
    }

    render() {
        if (this.state.loading && !this.state.data) {
            return <PageLoading />;
        }

        if (this.state.error) {
            return <PageError error={this.state.error.message} />
        }

        return (
            <>
                <div className="Badges">
                    <div className="Badges__hero">
                        <div className="Badges__container">
                            <img
                                className="Badges__conf-logo"
                                // src={conflogo}
                                src={undefined}
                                alt="Conf Logo"
                            />
                        </div>
                    </div>
                </div>

                <div className="Badges__container">
                    <div className="Badges__buttons">
                        <Link to="/badges/new" className="btn btn-primary">
                            New Badge
                        </Link>
                    </div>

                    <BadgeList badges={this.state.data} />

                    {this.state.data && 'Loading...'}
                </div>
            </>
        );
    }
}

export default Badges;
