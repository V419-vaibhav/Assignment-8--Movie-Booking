import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useParams,
  useNavigate,
  useLocation,
} from "react-router-dom";

function Application() {
  const movies = [
    {
      id: 1,
      title: "Inception",
      image: "https://m.media-amazon.com/images/I/51NbVEuw1HL._AC_.jpg",
      description: "A mind-bending thriller by Christopher Nolan.",
    },
    {
      id: 2,
      title: "Interstellar",
      image: "http://orig12.deviantart.net/ba26/f/2014/213/3/b/interstellar__2014____poster___2_by_camw1n-d7t74io.png",
      description: "A space exploration masterpiece.",
    },
    {
      id: 3,
      title: "Avengers",
      image: "https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg",
      description: "Superhero action-packed movie.",
    },
    {
      id: 4,
      title: "Titanic",
      image: "https://i.pinimg.com/originals/31/49/84/3149846d8fc9888709746c123e460b27.jpg",
      description: "A romantic disaster film.",
    },
    {
      id: 5,
      title: "Joker",
      image: "https://i.pinimg.com/originals/0e/39/d5/0e39d5956e5370dcd7fca84dcb641a58.jpg",
      description: "Psychological thriller.",
    },
    {
      id: 6,
      title: "Avatar",
      image: "https://m.media-amazon.com/images/I/41kTVLeW1CL._AC_.jpg",
      description: "Epic science fiction film.",
    },
    {
      id: 7,
      title: "Matrix",
      image: "https://m.media-amazon.com/images/I/51EG732BV3L.jpg",
      description: "Virtual reality action film.",
    },
    {
      id: 8,
      title: "Gladiator",
      image: "https://c8.alamy.com/comp/2K8CMD6/russell-crowe-poster-film-gladiator-usauk-2000-characters-maximus-director-ridley-scott-01-may-2000-warning-this-photograph-is-for-editorial-use-only-and-is-the-copyright-of-dreamworks-andor-the-photographer-assigned-by-the-film-or-production-company-and-can-only-be-reproduced-by-publications-in-conjunction-with-the-promotion-of-the-above-film-a-mandatory-credit-to-dreamworks-is-required-the-photographer-should-also-be-credited-when-known-no-commercial-use-can-be-granted-without-written-authority-from-the-film-company-2K8CMD6.jpg",
      description: "Historical action drama.",
    },
    {
      id: 9,
      title: "Spider-Man",
      image: "https://m.media-amazon.com/images/M/MV5BMzNhNTE0NWQtN2E1Ny00NjcwLTg1YTctMGY1NmMwODJmY2NmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      description: "Marvel superhero film.",
    },
    {
      id: 10,
      title: "Iron Man",
      image: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2023/09/iron-man.jpg",
      description: "Tech genius hero.",
    },
    {
      id: 11,
      title: "Thor",
      image: "https://image.tmdb.org/t/p/original/4OdVKagw11zol0L6DmfatFMmTLv.jpg",
      description: "God of thunder.",
    },
    {
      id: 12,
      title: "Black Panther",
      image: "https://image.tmdb.org/t/p/original/y1HTO8sZNiTSsq1EFdSfsqQPshW.jpg",
      description: "Wakanda forever.",
    },
    {
      id: 13,
      title: "Doctor Strange",
      image: "https://images.squarespace-cdn.com/content/v1/58b5f5c3bebafb6097cc78ae/82f317e4-e8f8-4a64-a129-3becfe3b6ca3/drstrange.jpg",
      description: "Mystic superhero film.",
    },
    {
      id: 14,
      title: "Frozen",
      image: "https://static1.srcdn.com/wordpress/wp-content/uploads/2023/10/frozen-franchise-poster.jpg",
      description: "Animated musical fantasy.",
    },
    {
      id: 15,
      title: "Batman",
      image: "https://static1.colliderimages.com/wordpress/wp-content/uploads/sharedimages/2024/04/the-batman-poster.jpg",
      description: "Dark knight rises.",
    },
    {
      id: 16,
      title: "Hulk",
      image: "https://whats-after-the-movie-ti152.sevalla.storage/movies/the-incredible-hulk.jpg",
      description: "Green giant hero.",
    },
  ];


  function MovieList() {
    return (
      <div style={{ padding: "20px" }}>
        <h1 style={{ textAlign: "center" }}>Movie List</h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "20px",
          }}
        >
          {movies.map((movie) => (
            <div
              key={movie.id}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                textAlign: "center",
                borderRadius: "8px",
              }}
            >
              <img
                src={movie.image}
                alt={movie.title}
                style={{
                  width: "100%",
                  height: "300px",
                  objectFit: "cover",
                }}
              />
              <h3>{movie.title}</h3>

              <Link to={`/movie/${movie.id}`}>
                <button>View Details</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    );
  }


  function MovieDetails() {
    const { id } = useParams();
    const movie = movies.find((m) => m.id === parseInt(id));

    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>{movie.title}</h2>
        <img
          src={movie.image}
          alt={movie.title}
          style={{ width: "300px" }}
        />
        <p>{movie.description}</p>

        <Link to={`/book/${movie.id}`}>
          <button>Book Seat</button>
        </Link>
      </div>
    );
  }

  
  function BookingForm() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
      name: "",
      email: "",
      mobile: "",
    });

    const handleChange = (e) => {
      setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      navigate("/confirmation", { state: form });
    };

    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Book Your Seat</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            required
          />
          <br /><br />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
          />
          <br /><br />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile"
            onChange={handleChange}
            required
          />
          <br /><br />

          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }


  function Confirmation() {
    const location = useLocation();
    const { name, email, mobile } = location.state || {};
    const bookingId = Math.floor(Math.random() * 1000000);

    return (
      <div style={{ padding: "20px", textAlign: "center" }}>
        <h2>Seat Booked Successfully!</h2>
        <h3>Booking ID: {bookingId}</h3>

        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Mobile:</strong> {mobile}</p>
      </div>
    );
  }

  return (
    <Router>
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        <Route path="/book/:id" element={<BookingForm />} />
        <Route path="/confirmation" element={<Confirmation />} />
      </Routes>
    </Router>
  );
}

export default Application;