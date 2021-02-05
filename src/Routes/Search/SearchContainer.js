import React, { useState } from 'react'
import SearchPresenter from './SearchPresenter';

function SearchContainer() {
    const [movieResults, setMovieResults] = useState(null);
    const [tvResults, settvResults] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    return (
        <SearchPresenter
            movieResults={movieResults}
            tvResults={tvResults}
            searchTerm={searchTerm}
            error={error}
            loading={loading}
        />
    )
}

export default SearchContainer
