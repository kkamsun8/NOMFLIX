import React, { useState } from 'react'
import TvPresenter from './TvPresenter';

function TvContainer() {
    const [topRated, setTopRated] = useState(null);
    const [popular, setPopular] = useState(null);
    const [airingToday, setAiringToday] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    return (
        <TvPresenter
            topRated={topRated}
            popular={popular}
            airingToday={airingToday}
            error={error}
            loading={loading}
        />
    )
}

export default TvContainer
