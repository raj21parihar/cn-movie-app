function MovieCard(props) {
    const { movie, addStars, removeStars, toggleCart, toggleFev } = props;
    const { Plot, Price, Poster, Title, Rating, Stars, Fev, Cart } = movie;
    return (
        <div className="main">
            <div className="movie-card">
                <div className="left">
                    <img alt="Poster" src={Poster} />
                </div>
                <div className="right">
                    <div className="title">{Title}</div>
                    <div className="plot">{Plot}</div>
                    <div className="price">₹ {Price}</div>
                    <div className="footer">
                        <div className="rating">{Rating}</div>
                        <div className="star-dis">
                            <img
                                alt="star-rating"
                                src="https://cdn-icons-png.flaticon.com/128/10308/10308996.png"
                                className="star-btn"
                                onClick={() => removeStars(movie)}
                            />
                            <img
                                alt="star-rating"
                                src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
                                className="stars"
                            />
                            <img
                                alt="star-rating"
                                src="https://cdn-icons-png.flaticon.com/128/4315/4315609.png"
                                className="star-btn"
                                onClick={() => addStars(movie)}
                            />
                            <span className="starCount">{Stars}</span>
                        </div>

                        <button
                            onClick={() => toggleFev(movie)}
                            className={
                                Fev ? 'favourite-btn' : 'unfavourite-btn'
                            }>
                            {Fev ? 'Remove ' : 'Add'} Favourite
                        </button>
                        <button
                            onClick={() => toggleCart(movie)}
                            className={Cart ? 'remove-cart-btn' : 'cart-btn'}>
                            {Cart ? 'Remove from' : 'Add to'} Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
