import { useState } from "react"
import PropTypes from 'prop-types'

export const GifCard = ({ url, title }) => {

    const [isHidden, setIsHidden] = useState(false);


    return (
        <div className="card"
            onMouseEnter={() => setIsHidden(true)}
            onMouseLeave={() => setIsHidden(false)}
        >
            <img src={url} alt={title} />
            {isHidden && <p> {title} </p>}
        </div>
    )
}

GifCard.propTypes = {
    url: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}


