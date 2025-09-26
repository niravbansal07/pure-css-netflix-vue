interface ContentRowProps {
  title: string
  items?: number
}

const ContentRow = ({ title, items = 8 }: ContentRowProps) => {
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
              <div className="relative h-full rounded-sm overflow-hidden bg-gradient-to-br from-muted to-secondary transform transition-all duration-300 hover:scale-105 hover:z-20 hover:shadow-xl">
                {/* Placeholder Content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-4xl font-bold text-muted-foreground/50">
                    {index + 1}
                  </span>
                </div>
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <div className="flex items-center gap-2">
                      <button className="w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center hover:bg-foreground/80 transition-colors">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                      <button className="w-8 h-8 rounded-full border border-muted-foreground text-foreground flex items-center justify-center hover:border-foreground hover:bg-foreground/10 transition-all">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
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