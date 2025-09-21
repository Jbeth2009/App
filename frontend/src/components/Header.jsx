import React, { useState } from 'react';
import { Search, Menu, User, Crown, Bell } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

const Header = ({ onSearch, isMenuOpen, setIsMenuOpen }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e) => {
    e.preventDefault();
    onSearch(searchQuery);
  };

  return (
    <header className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <Button 
              variant="ghost" 
              size="sm"
              className="md:hidden text-white hover:bg-gray-800"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-orange-500">CR</div>
              <span className="text-white font-bold text-xl hidden sm:block">Crunchyroll</span>
            </div>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-white hover:text-orange-500 transition-colors font-medium">Browse</a>
            <a href="#" className="text-white hover:text-orange-500 transition-colors font-medium">Popular</a>
            <a href="#" className="text-white hover:text-orange-500 transition-colors font-medium">Simulcasts</a>
            <a href="#" className="text-white hover:text-orange-500 transition-colors font-medium">My List</a>
            <a href="#" className="text-white hover:text-orange-500 transition-colors font-medium">Manga</a>
          </nav>

          {/* Search and User Actions */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <form onSubmit={handleSearch} className="hidden sm:flex">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search anime..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64 bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                />
                <Button 
                  type="submit" 
                  size="sm" 
                  variant="ghost"
                  className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                >
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </form>

            {/* Mobile Search */}
            <Button 
              variant="ghost" 
              size="sm"
              className="sm:hidden text-white hover:bg-gray-800"
            >
              <Search className="h-5 w-5" />
            </Button>

            {/* Notifications */}
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-gray-800 relative"
            >
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-orange-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </Button>

            {/* Premium Button */}
            <Button className="bg-orange-500 hover:bg-orange-600 text-white font-semibold">
              <Crown className="h-4 w-4 mr-2" />
              <span className="hidden sm:inline">Try Premium</span>
            </Button>

            {/* User Profile */}
            <Button 
              variant="ghost" 
              size="sm"
              className="text-white hover:bg-gray-800"
            >
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black border-t border-gray-800">
          <div className="px-4 py-4 space-y-4">
            <div className="sm:hidden">
              <form onSubmit={handleSearch} className="flex">
                <div className="relative w-full">
                  <Input
                    type="text"
                    placeholder="Search anime..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-gray-900 border-gray-700 text-white placeholder-gray-400 focus:border-orange-500"
                  />
                  <Button 
                    type="submit" 
                    size="sm" 
                    variant="ghost"
                    className="absolute right-0 top-0 h-full px-3 text-gray-400 hover:text-white"
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </form>
            </div>
            <nav className="flex flex-col space-y-3">
              <a href="#" className="text-white hover:text-orange-500 transition-colors font-medium py-2">Browse</a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors font-medium py-2">Popular</a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors font-medium py-2">Simulcasts</a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors font-medium py-2">My List</a>
              <a href="#" className="text-white hover:text-orange-500 transition-colors font-medium py-2">Manga</a>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;