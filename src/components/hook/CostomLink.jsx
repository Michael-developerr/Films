import { Link, useMatch } from "react-router-dom";

import React from 'react'

const CostomLink = ({ children, to, ...props }) => {
    const match = useMatch(to)
    console.log(match)

    return (
        <Link
            to={to}
            style={{
                color: match ? 'var(--active-link)' : 'orange',
            }}
            {...props}
        >
            {children}
        </Link >
    )
}

export default CostomLink
