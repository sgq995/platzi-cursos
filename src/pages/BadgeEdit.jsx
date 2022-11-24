import React from 'react';
import Badge from '../components/Badge';
import BadgeForm from '../components/BadgeForm';

import PageLoading from '../components/PageLoading';

import api from '../api';

class BadgeEdit extends React.Component {
    state = {
        loading: true,
        error: null,
        form: {
            firstName: '',
            lastName: '',
            email: '',
            jobTitle: '',
            twitter: '',
            avatarUrl: '',
        },
    };

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );

            this.setState({ loading: false, form: data });
        } catch (err) {
            this.setState({ loading: false, error: err })
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value,
            },
        });
    };

    handleSubmit = async e => {
        e.preventDefault();
        this.setState({
            loading: true,
            error: null,
        });

        try {
            await api.badges.update(
                this.props.match.params.badgeId,
                this.state.form
            );
            this.setState({ loading: false });

            this.props.history.push('/badges');
        } catch (err) {
            this.setState({ loading: false, error: err });
        }
    };

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }

        return (
            <>
                <div className="BadgeNew__hero">
                    <img
                        // src={header}
                        src=""
                        alt="Logo"
                        className="img-fluid"
                    />
                </div>

                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <Badge
                                firstName={this.state.form.firstName}
                                lastName={this.state.form.lastName}
                                email={this.state.form.email}
                                jobTitle={this.state.form.jobTitle}
                                twitter={this.state.form.twitter}
                                avatarUrl={this.state.form.avatarUrl}
                            />
                        </div>

                        <div className="col-6">
                            <h1>Edit Attendant</h1>

                            <BadgeForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                formValues={this.state.form}
                                error={this.state.error}
                            />
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default BadgeEdit;
