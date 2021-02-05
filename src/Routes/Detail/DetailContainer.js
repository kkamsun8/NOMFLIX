import React, { useState } from 'react'
import DetailPresenter from './DetailPresenter';

function DetailContainer() {
    const [result, setresult] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    return (
        <DetailPresenter
            result={result}
            error={error}
            loading={loading}
        />
    )
}


export default DetailContainer
