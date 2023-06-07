import React, { useEffect, useState } from 'react';

export default function User() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {

        setTimeout(() => {
            setLoading(false)
        }, 3000)

    }, []);

    return (
        <div>
            <h1>User pages {loading ? 'loading...' : 'done'}</h1>
        </div>
    );
}
