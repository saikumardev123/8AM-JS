function Home() {
    return (
        <>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://pbs.twimg.com/media/EGHYvttU4AAYKb7?format=jpg&name=large" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://pbs.twimg.com/media/EGHYvtkUcAAuc8T?format=jpg&name=large" className="d-block w-100" alt="..." />
                    </div>
                    <div className="carousel-item">
                        <img src="https://pbs.twimg.com/media/EGHYvtjU0AAO8w1?format=jpg&name=large" className="d-block w-100" alt="..." />
                    </div>

                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev" >
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next" >
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div >
        </>
    )
}
export default Home;





