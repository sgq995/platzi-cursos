import React from 'react';

class RickAndMorty extends React.Component {
    state = {
        nextPage: 1,
        loading: true,
        error: null,
        data: {},
    }
    
    componentDidMount() {
        this.fetchCharacters();
    }

    fetchCharacters = async () => {
        this.setState({ 
            ...this.state,
            loading: true,
            error: null,
        });

        try {
            const response = await fetch('https://rickandmortyapi.com/api/character/');
            const data = await response.json();
            
            this.setState({
                data,
            });
        } catch (error) {
            this.setState({
                loading: false,
                error,
            })
        }
    }

    render() {
        return (
            <div className="container">
                <img src={''} alt="Rick and Morty" />

                <ul className="row">
                    {this.state.data.results?.map(({id}) => (
                        <li key={id} className="col-6 col-md-3">

                        </li>
                    ))}
                </ul>

                {this.state.loading && (
                    <div className="loader">

                    </div>
                )}

                {!this.state.loading && (
                    <button onClick={() => this.fetchCharacters()}>Load More</button>
                )}
            </div>
        );
    }
}

export default RickAndMorty;
