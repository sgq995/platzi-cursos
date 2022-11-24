import React from 'react';

import api from '../api';
import PageError from '../components/PageError';
import PageLoading from '../components/PageLoading';
import BadgeDetails from './BadgeDetails';

class BadgeDetailsContainer extends React.Component {
    state = {
        loading: true,
        error: null,
        data: undefined,
        modalIsOpen: false,
    }

    componentDidMount() {
        this.fetchData();
    }

    fetchData = async e => {
        this.setState({ loading: true, error: null });

        try {
            const data = await api.badges.read(
                this.props.match.params.badgeId
            );
            this.setState({ loading: false, data });
        } catch (err) {
            this.setState({ loading: false, error: err });
        }
    }

    handleOpenModal = e => {
        this.setState({ modalIsOpen: true });
    }

    handleCloseModal = e => {
        this.setState({ modalIsOpen: false });
    }

    handleDeleteBadge = async e => {
        this.setState({ loading: true, error: null });
        try {
            await api.badges.remove(
                this.props.match.params.badgeId
            );
            
            this.props.history.push('/badges');
        } catch (err) {
            this.setState({ loading: false, error: err });
        }
    }

    render() {
        if (this.state.loading) {
            return <PageLoading />
        }

        if (this.state.error) {
            return <PageError error={this.error} />
        }

        const badge = this.state.data;

        return (
            <BadgeDetails
                badge={this.state.data}
                onDeleteBadge={this.handleDeleteBadge}
                onCloseModal={this.handleCloseModal}
                onOpenModal={this.handleOpenModal}
                modalIsOpen={this.state.modalIsOpen}
            />
        );
    }
}

export default BadgeDetailsContainer;
