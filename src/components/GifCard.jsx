import { useState } from "react"

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
