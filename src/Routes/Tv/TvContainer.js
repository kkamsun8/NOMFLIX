import React, { Component } from 'react';
import { tvApi } from '../../api';
import TvPresenter from './TvPresenter';

class TvContainer extends Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null
    }

    async componentDidMount() {
        try {
            const {
                data: { results: topRated }
            } = await tvApi.topRated();
            const {
                data: { results: popular }
            } = await tvApi.popular();
            const {
                data: { results: airingToday }
            } = await tvApi.airingToday();
            this.setState({
                topRated,
                popular,
                airingToday
            })

        } catch (error) {
            this.setState({
                error: "Can't find TV information."
            })
        } finally {
            this.setState({ loading: false });
        }
    }

    render() {
        console.log(this.state);
        const { topRated, popular, airingToday, loading, error } = this.state;
        return (
            <TvPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
        );
    }
}

export default TvContainer;
