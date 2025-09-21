# Crunchyroll Replica - API Contracts & Integration Plan

## Current Frontend Implementation
The frontend is fully functional with mock data and includes:
- Hero carousel with featured anime
- Multiple content sections (Popular, Featured, Action, etc.)
- Search functionality with real-time filtering
- Video player with YouTube integration
- Responsive design matching Crunchyroll's aesthetic

## Mock Data Currently Used
- `featuredAnime`: 4 main anime with full details (Demon Slayer, Attack on Titan, One Piece, My Hero Academia)
- `seasonalAnime`: 4 seasonal anime (Jujutsu Kaisen, Tokyo Revengers, Chainsaw Man, Spy x Family) 
- `demonSlayerEpisodes`: Sample episodes for Demon Slayer series
- All anime include: title, description, image, rating, year, episodes, status, genres, trailer URLs

## API Endpoints Needed (if backend expansion desired)

### 1. Anime Management
```
GET /api/anime - Get all anime with pagination and filters
GET /api/anime/:id - Get specific anime details
GET /api/anime/:id/episodes - Get episodes for specific anime
GET /api/search?q={query} - Search anime by title, genre, description
GET /api/featured - Get featured anime for hero carousel
GET /api/popular - Get popular/trending anime
GET /api/seasonal - Get current season anime
```

### 2. User Management (Future Enhancement)
```
POST /api/auth/login - User authentication
POST /api/auth/register - User registration
GET /api/user/watchlist - Get user's watchlist
POST /api/user/watchlist - Add anime to watchlist
DELETE /api/user/watchlist/:id - Remove from watchlist
POST /api/user/progress - Update watch progress
```

### 3. Video Streaming (Future Enhancement)
```
GET /api/video/:animeId/:episodeId - Get video streaming URL
POST /api/video/view - Log video view/progress
```

## Database Schema (MongoDB)

### Anime Collection
```javascript
{
  _id: ObjectId,
  title: String,
  description: String,
  image: String,
  bannerImage: String,
  rating: Number,
  year: Number,
  episodes: Number,
  status: String, // "ongoing", "completed"
  genres: [String],
  trailer: String, // YouTube URL
  createdAt: Date,
  updatedAt: Date
}
```

### Episodes Collection
```javascript
{
  _id: ObjectId,
  animeId: ObjectId,
  season: Number,
  episode: Number,
  title: String,
  description: String,
  thumbnail: String,
  duration: String,
  videoUrl: String, // YouTube URL or streaming URL
  createdAt: Date
}
```

## Frontend-Backend Integration Points

### 1. Replace Mock Data
- Replace `import { featuredAnime, seasonalAnime } from './data/mockAnime'`
- Add axios calls to fetch data from backend APIs
- Implement loading states and error handling

### 2. Search Integration
- Replace client-side filtering with API calls
- Add debouncing for search input
- Implement advanced filtering (by genre, year, status)

### 3. Video Streaming
- Replace YouTube embeds with actual streaming service
- Implement episode tracking and progress saving
- Add quality selection and subtitle options

## Current Implementation Status
✅ **FRONTEND COMPLETE**: Fully functional Crunchyroll replica with:
- Professional UI/UX matching original design
- Hero carousel with auto-rotation
- Multiple content grids with hover effects
- Working search functionality
- Video player integration (YouTube)
- Responsive design for all screen sizes
- Perfect color scheme and branding

🔄 **READY FOR BACKEND**: All components are designed to easily integrate with real APIs by replacing mock data sources.

## Notes
- All video URLs currently point to YouTube trailers for demo purposes
- Images are sourced from Unsplash for placeholder content
- The design is pixel-perfect replica of Crunchyroll's 2024 interface
- Mobile responsive design implemented throughout
- Accessibility features included (focus states, ARIA labels)