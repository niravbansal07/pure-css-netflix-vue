import { NetflixButton } from "./ui/netflix-button"

const HeroBanner = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image - Using gradient placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-background to-background" />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
      
      {/* Content */}
      <div className="relative h-full flex items-center px-4 md:px-12">
        <div className="max-w-2xl space-y-6 animate-fade-in">
          {/* Title */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground tracking-tight">
            STRANGER THINGS
          </h1>
          
          {/* Description */}
          <p className="text-base md:text-lg text-foreground/90 max-w-xl leading-relaxed">
            When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.
          </p>
          
          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <NetflixButton variant="play" className="group">
              <svg className="w-6 h-6 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
              Play
            </NetflixButton>
            
            <NetflixButton variant="info" className="group">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              More Info
            </NetflixButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner