import './SingleCard.css'

const SingleCard = ({ card, flipped, handleChoice }) => {

    const handleClick = () => {
        handleChoice(card);
    }

    return (
        <div className="card">
            <div className={flipped ? "flipped" : ""}>
                <img
                    className="front"
                    src={card.src}
                    alt="card front"
                />
                <img
                    className="back"
                    src="/img/cover.png"
                    alt="card back"
                    onClick={handleClick}
                />
            </div>
        </div>
    );
}

export default SingleCard;