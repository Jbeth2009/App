import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import AnimeGrid from "./components/AnimeGrid";
import VideoPlayer from "./components/VideoPlayer";
import EpisodeList from "./components/EpisodeList";
import { featuredAnime, seasonalAnime, allAnime } from "./data/mockAnime";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState(null);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleWatchAnime = (anime, episode = null) => {
    setCurrentVideo(anime);
    setCurrentEpisode(episode);
  };

  const handleCloseVideo = () => {
    setCurrentVideo(null);
    setCurrentEpisode(null);
  };

  const handleSearch = (query) => {
    if (!query.trim()) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    const results = allAnime.filter(anime =>
      anime.title.toLowerCase().includes(query.toLowerCase()) ||
      anime.description.toLowerCase().includes(query.toLowerCase()) ||
      anime.genres.some(genre => genre.toLowerCase().includes(query.toLowerCase()))
    );

    setSearchResults(results);
    setIsSearching(true);
  };

  const clearSearch = () => {
    setSearchResults([]);
    setIsSearching(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <Header 
        onSearch={handleSearch}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main className="pt-16">
        {isSearching ? (
          <div className="py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">
                  Search Results ({searchResults.length})
                </h2>
                <button
                  onClick={clearSearch}
                  className="text-orange-500 hover:text-orange-400 font-medium"
                >
                  Clear Search
                </button>
              </div>
              {searchResults.length > 0 ? (
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
                  {searchResults.map((anime) => (
                    <div key={anime.id}>
                      <AnimeGrid
                        anime={[anime]}
                        onPlayAnime={handleWatchAnime}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-12">
                  <div className="text-gray-400 text-xl mb-4">No results found</div>
                  <div className="text-gray-500">Try searching for different keywords</div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <>
            {/* Hero Carousel */}
            <HeroCarousel
              featuredAnime={featuredAnime}
              onWatchAnime={handleWatchAnime}
            />

            {/* Content Sections */}
            <div className="bg-black">
              <AnimeGrid
                title="Popular This Season"
                anime={seasonalAnime}
                onPlayAnime={handleWatchAnime}
              />

              <AnimeGrid
                title="Featured Anime"
                anime={featuredAnime}
                onPlayAnime={handleWatchAnime}
              />

              {/* Demon Slayer Special Section */}
              <section className="py-8 bg-gradient-to-r from-gray-900 to-black">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="bg-gradient-to-r from-orange-600/20 to-red-600/20 rounded-lg p-8 mb-8">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      🔥 Demon Slayer: Complete Series
                    </h2>
                    <p className="text-gray-300 text-lg mb-6">
                      Watch the complete Demon Slayer saga including all seasons and movies. 
                      Follow Tanjiro's journey to save his sister and defeat the demons.
                    </p>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => handleWatchAnime(featuredAnime[0])}
                        className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors flex items-center space-x-2"
                      >
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                        </svg>
                        <span>Start Watching</span>
                      </button>
                      <button className="border border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 rounded-lg transition-colors">
                        View Episodes
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              <AnimeGrid
                title="Action Anime"
                anime={allAnime.filter(anime => anime.genres.includes('Action'))}
                onPlayAnime={handleWatchAnime}
              />

              <AnimeGrid
                title="Recently Updated"
                anime={seasonalAnime}
                onPlayAnime={handleWatchAnime}
              />
            </div>
          </>
        )}
      </main>

      {/* Video Player Modal */}
      {currentVideo && (
        <VideoPlayer
          anime={currentVideo}
          episode={currentEpisode}
          onClose={handleCloseVideo}
        />
      )}

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-2xl font-bold text-orange-500">CR</div>
                <span className="text-white font-bold text-xl">Crunchyroll</span>
              </div>
              <p className="text-gray-400">
                The ultimate destination for anime and manga fans worldwide.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Browse</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Popular</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Simulcasts</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Release Calendar</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Music</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Help Center</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Connect</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Twitter</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white transition-colors">YouTube</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Crunchyroll Free. All rights reserved. This is a replica for demonstration purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;