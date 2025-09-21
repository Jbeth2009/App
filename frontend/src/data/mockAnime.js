// Mock anime data for Crunchyroll replica
export const featuredAnime = [
  {
    id: 1,
    title: "Demon Slayer: Kimetsu no Yaiba",
    description: "A young boy becomes a demon slayer to save his sister and avenge his family.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&h=450&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=1920&h=800&fit=crop",
    rating: 4.9,
    year: 2019,
    episodes: 44,
    status: "ongoing",
    genres: ["Action", "Supernatural", "Drama"],
    trailer: "https://www.youtube.com/embed/VQGCKyvzIM4"
  },
  {
    id: 2,
    title: "Attack on Titan",
    description: "Humanity fights for survival against giant humanoid creatures.",
    image: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=800&h=450&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=1920&h=800&fit=crop",
    rating: 4.8,
    year: 2013,
    episodes: 75,
    status: "completed",
    genres: ["Action", "Drama", "Fantasy"],
    trailer: "https://www.youtube.com/embed/SGy8_MlLkqo"
  },
  {
    id: 3,
    title: "One Piece",
    description: "A young pirate searches for the ultimate treasure in the Grand Line.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=450&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&h=800&fit=crop",
    rating: 4.7,
    year: 1999,
    episodes: 1000,
    status: "ongoing",
    genres: ["Action", "Adventure", "Comedy"],
    trailer: "https://www.youtube.com/embed/MCb13lbVGE0"
  },
  {
    id: 4,
    title: "My Hero Academia",
    description: "In a world where everyone has superpowers, one boy dreams of becoming a hero.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&h=450&fit=crop",
    bannerImage: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1920&h=800&fit=crop",
    rating: 4.6,
    year: 2016,
    episodes: 158,
    status: "ongoing",
    genres: ["Action", "School", "Superhero"],
    trailer: "https://www.youtube.com/embed/D5fYOnwYkj4"
  }
];

export const seasonalAnime = [
  {
    id: 5,
    title: "Jujutsu Kaisen",
    description: "Students fight cursed spirits in modern-day Japan.",
    image: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=600&fit=crop",
    rating: 4.8,
    year: 2020,
    episodes: 24,
    status: "ongoing",
    genres: ["Action", "Supernatural", "School"]
  },
  {
    id: 6,
    title: "Tokyo Revengers",
    description: "A man travels back in time to save his girlfriend.",
    image: "https://images.unsplash.com/photo-1601850494422-3cf14624b0b3?w=400&h=600&fit=crop",
    rating: 4.5,
    year: 2021,
    episodes: 24,
    status: "ongoing",
    genres: ["Action", "Drama", "Time Travel"]
  },
  {
    id: 7,
    title: "Chainsaw Man",
    description: "A young man with the power of chainsaws fights devils.",
    image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=600&fit=crop",
    rating: 4.7,
    year: 2022,
    episodes: 12,
    status: "ongoing",
    genres: ["Action", "Supernatural", "Horror"]
  },
  {
    id: 8,
    title: "Spy x Family",
    description: "A spy, assassin, and telepath form an unlikely family.",
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=600&fit=crop",
    rating: 4.9,
    year: 2022,
    episodes: 25,
    status: "ongoing",
    genres: ["Comedy", "Action", "Family"]
  }
];

export const demonSlayerEpisodes = [
  {
    id: 1,
    season: 1,
    episode: 1,
    title: "Cruelty",
    description: "Tanjiro's family is attacked by demons, and his sister Nezuko is turned into one.",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop",
    duration: "23:40",
    videoUrl: "https://www.youtube.com/embed/VQGCKyvzIM4"
  },
  {
    id: 2,
    season: 1,
    episode: 2,
    title: "Trainer Sakonji Urokodaki",
    description: "Tanjiro meets Urokodaki, who agrees to train him to become a demon slayer.",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop",
    duration: "23:40",
    videoUrl: "https://www.youtube.com/embed/VQGCKyvzIM4"
  },
  {
    id: 3,
    season: 1,
    episode: 3,
    title: "Sabito and Makomo",
    description: "Tanjiro meets the spirits of Urokodaki's former students during his training.",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop",
    duration: "23:40",
    videoUrl: "https://www.youtube.com/embed/VQGCKyvzIM4"
  },
  {
    id: 4,
    season: 1,
    episode: 4,
    title: "Final Selection",
    description: "Tanjiro faces the final selection to become an official demon slayer.",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=225&fit=crop",
    duration: "23:40",
    videoUrl: "https://www.youtube.com/embed/VQGCKyvzIM4"
  }
];

export const allAnime = [...featuredAnime, ...seasonalAnime];

export const genres = [
  "Action", "Adventure", "Comedy", "Drama", "Fantasy", 
  "Horror", "Mystery", "Romance", "School", "Slice of Life", 
  "Sports", "Supernatural", "Thriller"
];