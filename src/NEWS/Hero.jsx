import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Hero.css";

function Hero() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchNews = async () => {
      try {
        // Direct GET request without credentials for Render cross-origin
        const res = await axios.get("https://news-app-backend-6w9b.onrender.com/api/newslist");

        if (Array.isArray(res.data) && res.data.length > 0) {
          setNews(res.data);
        } else {
          setError("No news articles available at the moment.");
        }
      } catch (err) {
        console.error("News API Error:", err);
        setError("Failed to connect to news server.");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) return <div className="loading-container"><h2>Loading Latest News...</h2></div>;
  if (error) return <div className="error-container"><h2>{error}</h2></div>;

  return (
    <div className="hero-container">
      {/* Top Row */}
      <div className="hero-left">
        <img
          src={news[0]?.imageUrl || "https://via.placeholder.com/600x337"}
          alt="main news"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/600x337";
          }}
        />
        <h2>{news[0]?.title || "Title Unavailable"}</h2>
      </div>

      <div className="hero-middle">
        <img
          src={news[1]?.imageUrl || "https://via.placeholder.com/338x190"}
          alt="middle news"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/338x190";
          }}
        />
        <p>{news[1]?.title}</p>
        <p>{news[2]?.title}</p>
        <p>{news[3]?.title}</p>
      </div>

      <div className="hero-right">
        <img
          src={news[4]?.imageUrl || "https://via.placeholder.com/338x190"}
          alt="right news"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/338x190";
          }}
        />
        <p>{news[4]?.title}</p>
        <p>{news[5]?.title}</p>
        <p>{news[6]?.title}</p>
      </div>

      {/* Bottom Row */}
      <div className="hero-left">
        <img
          src={news[7]?.imageUrl || "https://via.placeholder.com/600x337"}
          alt="main news 2"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/600x337";
          }}
        />
        <h2>{news[7]?.title}</h2>
      </div>

      <div className="hero-middle">
        <img
          src={news[8]?.imageUrl || "https://via.placeholder.com/338x190"}
          alt="middle news 2"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/338x190";
          }}
        />
        <p>{news[8]?.title}</p>
        <p>{news[9]?.title}</p>
        <p>{news[10]?.title}</p>
      </div>

      <div className="hero-right">
        <img
          src={news[11]?.imageUrl || "https://via.placeholder.com/338x190"}
          alt="right news 2"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/338x190";
          }}
        />
        <p>{news[11]?.title}</p>
        <p>{news[12]?.title}</p>
        <p>{news[13]?.title}</p>
      </div>
    </div>
  );
}

export default Hero;