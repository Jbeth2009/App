import React, { useState } from 'react';
import { Play, Clock, Calendar } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { demonSlayerEpisodes } from '../data/mockAnime';

const EpisodeCard = ({ episode, anime, onPlay }) => {
  return (
    <Card className="group bg-gray-900 border-gray-800 hover:border-orange-500 transition-all duration-300">
      <CardContent className="p-0">
        <div className="flex">
          {/* Episode Thumbnail */}
          <div className="relative w-48 flex-shrink-0">
            <img
              src={episode.thumbnail}
              alt={`Episode ${episode.episode}`}
              className="w-full h-28 object-cover"
            />
            
            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <Button
                size="sm"
                className="bg-orange-500 hover:bg-orange-600 text-white rounded-full"
                onClick={() => onPlay(anime, episode)}
              >
                <Play className="h-4 w-4 fill-current" />
              </Button>
            </div>

            {/* Episode Number Badge */}
            <div className="absolute bottom-2 left-2">
              <Badge variant="default" className="bg-black/75 text-white">
                {episode.episode}
              </Badge>
            </div>

            {/* Duration */}
            <div className="absolute bottom-2 right-2">
              <div className="bg-black/75 text-white text-xs px-2 py-1 rounded">
                {episode.duration}
              </div>
            </div>
          </div>

          {/* Episode Info */}
          <div className="flex-1 p-4">
            <div className="flex items-start justify-between mb-2">
              <h3 className="text-white font-semibold text-lg group-hover:text-orange-500 transition-colors">
                Episode {episode.episode}: {episode.title}
              </h3>
              <div className="flex items-center space-x-1 text-gray-400 text-sm">
                <Clock className="h-3 w-3" />
                <span>{episode.duration}</span>
              </div>
            </div>
            
            <p className="text-gray-400 text-sm mb-3 line-clamp-2">
              {episode.description}
            </p>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-xs text-gray-500">
                <span>Season {episode.season}</span>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Calendar className="h-3 w-3" />
                  <span>Episode {episode.episode}</span>
                </div>
              </div>
              
              <Button
                size="sm"
                variant="outline"
                className="border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-500"
                onClick={() => onPlay(anime, episode)}
              >
                Watch Now
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const EpisodeList = ({ anime, onPlayEpisode }) => {
  const [selectedSeason, setSelectedSeason] = useState(1);
  
  // For demo purposes, we'll use the mock episodes
  const episodes = demonSlayerEpisodes.filter(ep => ep.season === selectedSeason);
  
  const seasons = [...new Set(demonSlayerEpisodes.map(ep => ep.season))];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-4">
          {anime.title} - Episodes
        </h2>
        
        {/* Season Selector */}
        <div className="flex items-center space-x-2 mb-6">
          <span className="text-white font-medium">Season:</span>
          {seasons.map((season) => (
            <Button
              key={season}
              size="sm"
              variant={selectedSeason === season ? "default" : "outline"}
              className={selectedSeason === season 
                ? "bg-orange-500 hover:bg-orange-600 text-white" 
                : "border-gray-600 text-gray-300 hover:border-orange-500 hover:text-orange-500"
              }
              onClick={() => setSelectedSeason(season)}
            >
              Season {season}
            </Button>
          ))}
        </div>

        <div className="text-gray-400 text-sm">
          {episodes.length} episodes available
        </div>
      </div>

      {/* Episodes List */}
      <div className="space-y-4">
        {episodes.map((episode) => (
          <EpisodeCard
            key={episode.id}
            episode={episode}
            anime={anime}
            onPlay={onPlayEpisode}
          />
        ))}
      </div>

      {episodes.length === 0 && (
        <div className="text-center py-12">
          <div className="text-gray-400 text-xl mb-4">No episodes available</div>
          <div className="text-gray-500">Episodes for this season are coming soon!</div>
        </div>
      )}
    </div>
  );
};

export default EpisodeList;