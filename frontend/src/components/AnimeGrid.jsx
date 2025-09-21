import React from 'react';
import { Play, Star, Clock, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Card, CardContent } from './ui/card';

const AnimeCard = ({ anime, onPlay }) => {
  return (
    <Card className="group bg-gray-900 border-gray-800 overflow-hidden hover:border-orange-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-orange-500/20">
      <div className="relative overflow-hidden">
        <img
          src={anime.image}
          alt={anime.title}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        
        {/* Play Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <Button
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white rounded-full w-16 h-16"
            onClick={() => onPlay(anime)}
          >
            <Play className="h-6 w-6 fill-current" />
          </Button>
        </div>

        {/* Status Badge */}
        <div className="absolute top-2 left-2">
          <Badge 
            variant={anime.status === 'ongoing' ? 'default' : 'secondary'}
            className={anime.status === 'ongoing' 
              ? 'bg-green-500 text-white' 
              : 'bg-gray-500 text-white'
            }
          >
            {anime.status === 'ongoing' ? 'Ongoing' : 'Completed'}
          </Badge>
        </div>

        {/* Rating */}
        <div className="absolute top-2 right-2">
          <div className="flex items-center space-x-1 bg-black/75 rounded px-2 py-1">
            <Star className="h-3 w-3 text-yellow-400 fill-current" />
            <span className="text-white text-xs font-medium">{anime.rating}</span>
          </div>
        </div>
      </div>

      <CardContent className="p-4">
        <h3 className="text-white font-semibold text-lg mb-2 line-clamp-2 group-hover:text-orange-500 transition-colors">
          {anime.title}
        </h3>
        
        <p className="text-gray-400 text-sm mb-3 line-clamp-2">
          {anime.description}
        </p>

        <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <Calendar className="h-3 w-3" />
            <span>{anime.year}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-3 w-3" />
            <span>{anime.episodes} eps</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-1">
          {anime.genres?.slice(0, 2).map((genre, index) => (
            <Badge 
              key={index} 
              variant="outline" 
              className="text-xs border-gray-600 text-gray-400 hover:border-orange-500 hover:text-orange-500"
            >
              {genre}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

const AnimeGrid = ({ title, anime, onPlayAnime, className = "" }) => {
  if (!anime || anime.length === 0) {
    return (
      <section className={`py-8 ${className}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
          <div className="text-gray-400 text-center py-12">
            No anime available
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className={`py-8 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold text-white mb-6">{title}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {anime.map((animeItem) => (
            <AnimeCard
              key={animeItem.id}
              anime={animeItem}
              onPlay={onPlayAnime}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimeGrid;