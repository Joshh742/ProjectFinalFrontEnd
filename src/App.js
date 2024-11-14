const App = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Movies Website</title>
      <link rel="stylesheet" href="style.css" />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/swiper@9/swiper-bundle.min.css"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css"
        integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />
      <section>
        <nav>
          <div className="logo">
            <h1>
              Movies<span>Hub</span>
            </h1>
          </div>
          <div className="right">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">TV Show</a>
              </li>
              <li>
                <a href="#">Newsletter</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="swiper mySwiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="image">
                <div className="black">
                  <h1>Death on the Nile</h1>
                  <div className="star">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                    <i className="fa-regular fa-star" />
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur distinctio quis, ea commodi repellendus fugiat
                    aspernatur perspiciatis optio pariatur quod est, nihil enim
                    nemo saepe possimus sequi consequuntur, neque eius.
                  </p>
                  <div className="genre">
                    <a href="#" className="category">
                      Action
                    </a>
                    <a href="#" className="category">
                      Drama
                    </a>
                    <a href="#" className="category">
                      <span>4K</span>
                    </a>
                  </div>
                  <div className="watch">
                    <i className="fa-solid fa-play" />
                    <p>watch the trailer</p>
                  </div>
                </div>
                <img src="image/background.jpg" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="image">
                <div className="black">
                  <h1>The Maze Runer</h1>
                  <div className="star">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                    <i className="fa-regular fa-star" />
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur distinctio quis, ea commodi repellendus fugiat
                    aspernatur perspiciatis optio pariatur quod est, nihil enim
                    nemo saepe possimus sequi consequuntur, neque eius.
                  </p>
                  <div className="genre">
                    <a href="#" className="category">
                      Action
                    </a>
                    <a href="#" className="category">
                      Drama
                    </a>
                    <a href="#" className="category">
                      <span>4K</span>
                    </a>
                  </div>
                  <div className="watch">
                    <i className="fa-solid fa-play" />
                    <p>watch the trailer</p>
                  </div>
                </div>
                <img src="image/background_1.jpg" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="image">
                <div className="black">
                  <h1>The Avengers</h1>
                  <div className="star">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                    <i className="fa-regular fa-star" />
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur distinctio quis, ea commodi repellendus fugiat
                    aspernatur perspiciatis optio pariatur quod est, nihil enim
                    nemo saepe possimus sequi consequuntur, neque eius.
                  </p>
                  <div className="genre">
                    <a href="#" className="category">
                      Action
                    </a>
                    <a href="#" className="category">
                      Drama
                    </a>
                    <a href="#" className="category">
                      <span>4K</span>
                    </a>
                  </div>
                  <div className="watch">
                    <i className="fa-solid fa-play" />
                    <p>watch the trailer</p>
                  </div>
                </div>
                <img src="image/background_2.jpg" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="image">
                <div className="black">
                  <h1>Fullmetal Alchemist: Final Transmutation</h1>
                  <div className="star">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                    <i className="fa-regular fa-star" />
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur distinctio quis, ea commodi repellendus fugiat
                    aspernatur perspiciatis optio pariatur quod est, nihil enim
                    nemo saepe possimus sequi consequuntur, neque eius.
                  </p>
                  <div className="genre">
                    <a href="#" className="category">
                      Action
                    </a>
                    <a href="#" className="category">
                      Drama
                    </a>
                    <a href="#" className="category">
                      <span>4K</span>
                    </a>
                  </div>
                  <div className="watch">
                    <i className="fa-solid fa-play" />
                    <p>watch the trailer</p>
                  </div>
                </div>
                <img src="image/background_4.jpg" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="image">
                <div className="black">
                  <h1>Apocalypto</h1>
                  <div className="star">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star-half-stroke" />
                    <i className="fa-regular fa-star" />
                  </div>
                  <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Consectetur distinctio quis, ea commodi repellendus fugiat
                    aspernatur perspiciatis optio pariatur quod est, nihil enim
                    nemo saepe possimus sequi consequuntur, neque eius.
                  </p>
                  <div className="genre">
                    <a href="#" className="category">
                      Action
                    </a>
                    <a href="#" className="category">
                      Drama
                    </a>
                    <a href="#" className="category">
                      <span>4K</span>
                    </a>
                  </div>
                  <div className="watch">
                    <i className="fa-solid fa-play" />
                    <p>watch the trailer</p>
                  </div>
                </div>
                <img src="image/background_5.jpg" />
              </div>
            </div>
          </div>
          <div className="swiper-button-next" />
          <div className="swiper-button-prev" />
          <div className="swiper-pagination" />
        </div>
      </section>
      <div className="second">
        <div className="latest">
          <h1>Popular Movies</h1>
          <div className="box">
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Gajaman</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2023</p>
                  </div>
                  <p className="category">Animation/Comedy</p>
                  <div className="info">
                    <div className="rate">
                      <i className="fa-solid fa-star" />
                      <p>9.2</p>
                    </div>
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/gajaman.jpg" />
            </div>
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Black Panther: Wakanda Forever</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2022</p>
                  </div>
                  <p className="category">Action/Adventure</p>
                  <div className="info">
                    <div className="rate">
                      <i className="fa-solid fa-star" />
                      <p>7.1</p>
                    </div>
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/Black_Panther.webp" />
            </div>
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Interceptor</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2022</p>
                  </div>
                  <p className="category">Action/Adventure</p>
                  <div className="info">
                    <div className="rate">
                      <i className="fa-solid fa-star" />
                      <p>4.6</p>
                    </div>
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/Interceptor.jpg" />
            </div>
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Thor: Love and Thunder</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2022</p>
                  </div>
                  <p className="category">Action/Adventure</p>
                  <div className="info">
                    <div className="rate">
                      <i className="fa-solid fa-star" />
                      <p>6.3</p>
                    </div>
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/Thor.jpg" />
            </div>
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Black Adam</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2022</p>
                  </div>
                  <p className="category">Action/Adventure</p>
                  <div className="info">
                    <div className="rate">
                      <i className="fa-solid fa-star" />
                      <p>6.4</p>
                    </div>
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/Black_Adam.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="upcoming">
        <div className="movies_box">
          <h1>Upcoming Movies</h1>
          <div className="box">
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Plane</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2023</p>
                  </div>
                  <p className="category">Action/Thriller</p>
                  <div className="info">
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/plane.jpg" />
            </div>
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">John Wick: Chapter 4</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2023</p>
                  </div>
                  <p className="category">Action/Neo-noir</p>
                  <div className="info">
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/john_wick.jfif" />
            </div>
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Meg 2: The Trench</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2023</p>
                  </div>
                  <p className="category">Adventure</p>
                  <div className="info">
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/meg.jpg" />
            </div>
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Aquaman and the Lost Kingdom</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2023</p>
                  </div>
                  <p className="category">Action/Fantasy</p>
                  <div className="info">
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/aquaman.jpg" />
            </div>
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Ant-Man and the Wasp: Quantumania</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2023</p>
                  </div>
                  <p className="category">Action/Adventure</p>
                  <div className="info">
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/ant_man.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="show">
        <div className="tv_show">
          <h1>World Best TV Show</h1>
          <div className="box">
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Money Heist</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2017</p>
                  </div>
                  <p className="category">Thriller</p>
                  <div className="info">
                    <div className="rate">
                      <i className="fa-solid fa-star" />
                      <p>8.2</p>
                    </div>
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/money_heist.jpg" />
            </div>
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Wednseday</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2022</p>
                  </div>
                  <p className="category">Comedy</p>
                  <div className="info">
                    <div className="rate">
                      <i className="fa-solid fa-star" />
                      <p>8.2</p>
                    </div>
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/wednesday.jpg" />
            </div>
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">1899</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2022</p>
                  </div>
                  <p className="category">Mystery</p>
                  <div className="info">
                    <div className="rate">
                      <i className="fa-solid fa-star" />
                      <p>7.4</p>
                    </div>
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/1899.jpg" />
            </div>
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Game of Thrones</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2011</p>
                  </div>
                  <p className="category">Drama</p>
                  <div className="info">
                    <div className="rate">
                      <i className="fa-solid fa-star" />
                      <p>9.2</p>
                    </div>
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/game_of_thrones.jpg" />
            </div>
            <div className="card">
              <div className="details">
                <div className="left">
                  <p className="name">Arrow</p>
                  <div className="date_quality">
                    <p className="quality">HD</p>
                    <p className="date">2012</p>
                  </div>
                  <p className="category">Drama</p>
                  <div className="info">
                    <div className="rate">
                      <i className="fa-solid fa-star" />
                      <p>7.5</p>
                    </div>
                    <div className="time">
                      <i className="fa-regular fa-clock" />
                      <p>120min</p>
                    </div>
                  </div>
                </div>
                <div className="right">
                  <i className="fa-solid fa-play" />
                </div>
              </div>
              <img src="image/arrow.jpg" />
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter">
        <h1>Newsletter</h1>
        <div className="news_card">
          <input type="email" name id placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
      <p className="end">
        Design By
        <span>
          <i className="fa-solid fa-face-grin" />
          WT Master Code
        </span>
      </p>
      {/* Initialize Swiper */}
    </div>
  );
};

export default App;
