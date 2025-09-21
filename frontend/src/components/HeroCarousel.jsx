import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Play, Plus, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const HeroCarousel = ({ featuredAnime, onWatchAnime }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === featuredAnime.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? featuredAnime.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 8000);
    return () => clearInterval(timer);
  }, [featuredAnime.length]);

  if (!featuredAnime || featuredAnime.length === 0) return null;

  const currentAnime = featuredAnime[currentIndex];

  return (
    <div className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{ 
          backgroundImage: `url(${currentAnime.bannerImage})` 
        }}
      >
        {/* Overlay Gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <div className="flex items-center space-x-2 mb-4">
              <Badge variant="secondary" className="bg-orange-500/20 text-orange-500 border-orange-500">
                Featured
              </Badge>
              <div className="flex items-center space-x-1 text-yellow-400">
                <Star className="h-4 w-4 fill-current" />
                <span className="text-white font-medium">{currentAnime.rating}</span>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 leading-tight">
              {currentAnime.title}
            </h1>
            
            <div className="flex items-center space-x-4 mb-6 text-gray-300">
              <span>{currentAnime.year}</span>
              <span>•</span>
              <span>{currentAnime.episodes} Episodes</span>
              <span>•</span>
              <span className="capitalize">{currentAnime.status}</span>
            </div>
            
            <p className="text-lg text-gray-300 mb-8 leading-relaxed max-w-xl">
              {currentAnime.description}
            </p>
            
            <div className="flex items-center space-x-4 mb-8">
              {currentAnime.genres.map((genre, index) => (
                <Badge key={index} variant="outline" className="border-gray-600 text-gray-300">
                  {genre}
                </Badge>
              ))}
            </div>
            
            <div className="flex items-center space-x-4">
              <Button 
                size="lg" 
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 text-lg"
                onClick={() => onWatchAnime(currentAnime)}
              >
                <Play className="h-5 w-5 mr-2 fill-current" />
                Watch Now
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-black font-semibold px-8 py-3 text-lg"
              >
                <Plus className="h-5 w-5 mr-2" />
                My List
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="ghost"
        size="lg"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-black/50 z-20"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>
      
      <Button
        variant="ghost"
        size="lg"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-black/50 z-20"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {featuredAnime.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-orange-500 scale-110' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;