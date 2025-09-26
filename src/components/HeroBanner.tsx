import { NetflixButton } from "./ui/netflix-button"
import { useState, useEffect } from "react"
import heroStrangerThings from "@/assets/hero-stranger-things.jpg"
import heroFantasy from "@/assets/hero-fantasy.jpg"
import heroCyberpunk from "@/assets/hero-cyberpunk.jpg"

// Banner content variations - simulating different shows/movies
const bannerContent = [
  {
    id: 1,
    image: heroStrangerThings,
    title: "STRANGER THINGS",
    description: "When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
    rating: "TV-14",
    year: "2016",
    seasons: "4 Seasons"
  },
  {
    id: 2,
    image: heroFantasy,
    title: "KINGDOM OF DRAGONS",
    description: "In a land where dragons rule the skies and kingdoms wage eternal war, a young warrior must unite the realms to face an ancient evil awakening from the shadows.",
    rating: "TV-MA",
    year: "2024",
    seasons: "2 Seasons"
  },
  {
    id: 3,
    image: heroCyberpunk,
    title: "NEON NIGHTS",
    description: "In 2099, a detective with cybernetic enhancements hunts down rogue AI in the neon-lit streets of Neo Tokyo, where the line between human and machine has blurred.",
    rating: "TV-MA",
    year: "2023",
    seasons: "1 Season"
  }
]

const HeroBanner = () => {
  // State for current banner (simulating random selection)
  const [currentBanner, setCurrentBanner] = useState(0)
  
  // Rotate banners every 10 seconds (optional feature)
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prev) => (prev + 1) % bannerContent.length)
    }, 10000)
    
    return () => clearInterval(interval)
  }, [])
  
  const banner = bannerContent[currentBanner]

  return (
    <div className="relative h-[80vh] md:h-screen w-full overflow-hidden">
      {/* Background Image with smooth transition */}
      <div className="absolute inset-0">
        {bannerContent.map((content, index) => (
          <div
            key={content.id}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentBanner ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={content.image}
              alt={content.title}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
      
      {/* Multiple Gradient Overlays for better readability */}
      {/* Bottom fade to background */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
      
      {/* Left side gradient for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/20 to-transparent" />
      
      {/* Top fade for navbar blend */}
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-background/70 to-transparent" />
      
      {/* Content Container */}
      <div className="relative h-full flex items-center px-4 md:px-12">
        <div className="max-w-xl lg:max-w-2xl space-y-4 md:space-y-6 text-center md:text-left animate-fade-in">
          
          {/* Metadata tags */}
          <div className="flex items-center gap-3 text-sm text-foreground/80 justify-center md:justify-start">
            <span className="font-semibold text-primary">N</span>
            <span className="uppercase tracking-wider">Series</span>
            <span className="border-l border-muted-foreground/50 pl-3">{banner.rating}</span>
            <span className="border-l border-muted-foreground/50 pl-3">{banner.year}</span>
            <span className="border-l border-muted-foreground/50 pl-3">{banner.seasons}</span>
          </div>
          
          {/* Title with responsive sizing */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground tracking-tight leading-none">
            {banner.title}
          </h1>
          
          {/* Description with better readability */}
          <p className="text-sm sm:text-base md:text-lg text-foreground/90 max-w-xl leading-relaxed line-clamp-3">
            {banner.description}
          </p>
          
          {/* CTA Buttons with enhanced styling */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4 items-center md:items-start">
            {/* Play Button - Netflix Red */}
            <NetflixButton 
              variant="play" 
              className="group bg-primary hover:bg-primary/90 text-primary-foreground px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              <span>Play</span>
            </NetflixButton>
            
            {/* More Info Button - Gray/Transparent */}
            <NetflixButton 
              variant="info" 
              className="group bg-muted/30 backdrop-blur-md text-foreground hover:bg-muted/50 px-6 md:px-8 py-2.5 md:py-3 text-base md:text-lg font-semibold border border-muted/50 hover:border-muted shadow-md hover:shadow-lg transform hover:scale-105 transition-all duration-300 w-full sm:w-auto"
            >
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>More Info</span>
            </NetflixButton>
          </div>
        </div>
      </div>
      
      {/* Bottom fade edge for smooth blend into content rows */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      
      {/* Banner indicators (dots) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 md:hidden">
        {bannerContent.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentBanner(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentBanner 
                ? 'bg-foreground w-6' 
                : 'bg-foreground/40 hover:bg-foreground/60'
            }`}
            aria-label={`Go to banner ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroBanner