import React, { useState } from "react";

function Shortener() {
  const [longUrl, setLongUrl] = useState("");
  const [shortUrl, setShortUrl] = useState("");
  const [customSlug, setCustomSlug] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleShortenClick = () => {
    // TODO: Call Cloudflare Workers API to generate short URL
  };

  const handleCustomSlugChange = (event) => {
    setCustomSlug(event.target.value);
  };

  const handleLoginClick = () => {
    // TODO: Implement login functionality
  };

  const handleLogoutClick = () => {
    // TODO: Implement logout functionality
  };

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <h2>Logged in as user@example.com</h2>
          <button onClick={handleLogoutClick}>Logout</button>
          <h3>Shorten a URL</h3>
          <form onSubmit={handleShortenClick}>
            <label>
              Long URL:
              <input type="text" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} />
            </label>
            <br />
            <label>
              Custom slug (optional):
              <input type="text" value={customSlug} onChange={handleCustomSlugChange} />
            </label>
            <br />
            <button type="submit">Shorten</button>
          </form>
        </div>
      ) : (
        <div>
          <h2>Unregistered user</h2>
          <button onClick={handleLoginClick}>Login</button>
          <h3>Shorten a URL</h3>
          <form onSubmit={handleShortenClick}>
            <label>
              Long URL:
              <input type="text" value={longUrl} onChange={(e) => setLongUrl(e.target.value)} />
            </label>
            <br />
            <button type="submit">Shorten</button>
          </form>
        </div>
      )}
      {shortUrl && (
        <div>
          <h3>Short URL:</h3>
          <a href={shortUrl}>{shortUrl}</a>
        </div>
      )}
    </div>
  );
}

export default Shortener;
