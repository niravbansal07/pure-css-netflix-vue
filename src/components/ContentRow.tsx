import movieGrid from "@/assets/movie-grid.jpg"

interface ContentRowProps {
  title: string
  items?: number
}

const ContentRow = ({ title, items = 8 }: ContentRowProps) => {
  // Generate random colors for variety in placeholder content
  const placeholderColors = [
    'from-red-900 to-red-600',
    'from-blue-900 to-blue-600',
    'from-purple-900 to-purple-600',
    'from-green-900 to-green-600',
    'from-yellow-900 to-yellow-600',
    'from-pink-900 to-pink-600',
    'from-indigo-900 to-indigo-600',
    'from-gray-900 to-gray-600',
  ]
  return (
    <div className="relative px-4 md:px-12 mb-10">
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
        {title}
      </h2>
      
      {/* Scroll Container */}
      <div className="relative group">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Content Container */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth">
          {[...Array(items)].map((_, index) => (
            <div
              key={index}
              className="flex-none w-40 md:w-48 lg:w-56 aspect-video group/item cursor-pointer"
            >
              <div className="relative h-full rounded-sm overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-20 hover:shadow-xl">
                {/* Using gradient backgrounds with variety */}
                <div className={`absolute inset-0 bg-gradient-to-br ${placeholderColors[index % placeholderColors.length]}`}>
                  {/* Simulated movie poster with overlaid image section */}
                  <div 
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage: `url(${movieGrid})`,
                      backgroundPosition: `${(index * 240)}px center`,
                      backgroundSize: 'cover',
                      filter: 'brightness(0.7)'
                    }}
                  />
                </div>
                
                {/* Netflix "N" badge for originals */}
                {index % 3 === 0 && (
                  <div className="absolute top-2 left-2 text-primary font-bold text-xs bg-background/80 px-1.5 py-0.5 rounded">
                    N
                  </div>
                )}
                
                {/* Number overlay for Top 10 */}
                {title.includes("Top 10") && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-black text-foreground drop-shadow-2xl">
                      {index + 1}
                    </span>
                  </div>
                )}
                
                {/* Hover Overlay with controls */}
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    {/* Title placeholder */}
                    <p className="text-sm font-semibold text-foreground mb-2 truncate">
                      {title === "Action Movies" && "Action Title " + (index + 1)}
                      {title === "Comedies" && "Comedy Title " + (index + 1)}
                      {title === "Horror Movies" && "Horror Title " + (index + 1)}
                      {title === "Documentaries" && "Documentary " + (index + 1)}
                      {!["Action Movies", "Comedies", "Horror Movies", "Documentaries"].includes(title) && "Title " + (index + 1)}
                    </p>
                    
                    {/* Control buttons */}
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/80 transition-all transform hover:scale-110">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-full border border-muted-foreground text-foreground flex items-center justify-center hover:border-foreground hover:bg-foreground/10 transition-all transform hover:scale-110">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-full border border-muted-foreground text-foreground flex items-center justify-center hover:border-foreground hover:bg-foreground/10 transition-all transform hover:scale-110">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ContentRow