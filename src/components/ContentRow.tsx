import trendingPosters from "@/assets/trending-posters.jpg"
import actionPosters from "@/assets/action-posters.jpg"
import comedyPosters from "@/assets/comedy-posters.jpg"
import documentaryPosters from "@/assets/documentary-posters.jpg"
import horrorPosters from "@/assets/horror-posters.jpg"
import movieGrid from "@/assets/movie-grid.jpg"

interface ContentRowProps {
  title: string
  items?: ShowItem[]
}

interface ShowItem {
  id: number
  title: string
  year?: string
  rating?: string
  match?: string
  isNetflixOriginal?: boolean
}

// Popular show/movie data for each category
const contentData: Record<string, ShowItem[]> = {
  "Trending Now": [
    { id: 1, title: "Wednesday", year: "2022", rating: "TV-14", match: "98%", isNetflixOriginal: true },
    { id: 2, title: "The Crown", year: "2023", rating: "TV-MA", match: "94%", isNetflixOriginal: true },
    { id: 3, title: "Stranger Things", year: "2022", rating: "TV-14", match: "96%", isNetflixOriginal: true },
    { id: 4, title: "Money Heist", year: "2021", rating: "TV-MA", match: "92%" },
    { id: 5, title: "The Witcher", year: "2023", rating: "TV-MA", match: "89%", isNetflixOriginal: true },
    { id: 6, title: "Squid Game", year: "2021", rating: "TV-MA", match: "95%", isNetflixOriginal: true },
    { id: 7, title: "Breaking Bad", year: "2013", rating: "TV-MA", match: "97%" },
    { id: 8, title: "Lucifer", year: "2021", rating: "TV-14", match: "88%" },
  ],
  "Popular on Netflix": [
    { id: 1, title: "You", year: "2023", rating: "TV-MA", match: "91%", isNetflixOriginal: true },
    { id: 2, title: "Bridgerton", year: "2022", rating: "TV-MA", match: "93%", isNetflixOriginal: true },
    { id: 3, title: "Ozark", year: "2022", rating: "TV-MA", match: "90%", isNetflixOriginal: true },
    { id: 4, title: "The Queen's Gambit", year: "2020", rating: "TV-MA", match: "96%", isNetflixOriginal: true },
    { id: 5, title: "Dark", year: "2020", rating: "TV-MA", match: "94%", isNetflixOriginal: true },
    { id: 6, title: "Narcos", year: "2017", rating: "TV-MA", match: "89%", isNetflixOriginal: true },
    { id: 7, title: "Peaky Blinders", year: "2022", rating: "TV-MA", match: "93%" },
    { id: 8, title: "Vikings", year: "2020", rating: "TV-MA", match: "92%" },
  ],
  "Continue Watching": [
    { id: 1, title: "House of Cards", year: "2018", rating: "TV-MA", match: "87%", isNetflixOriginal: true },
    { id: 2, title: "Black Mirror", year: "2023", rating: "TV-MA", match: "91%", isNetflixOriginal: true },
    { id: 3, title: "The Umbrella Academy", year: "2022", rating: "TV-14", match: "88%", isNetflixOriginal: true },
    { id: 4, title: "Cobra Kai", year: "2023", rating: "TV-14", match: "90%", isNetflixOriginal: true },
    { id: 5, title: "Sex Education", year: "2023", rating: "TV-MA", match: "89%", isNetflixOriginal: true },
    { id: 6, title: "The Last Kingdom", year: "2022", rating: "TV-MA", match: "91%" },
  ],
  "Top 10 in Your Country": [
    { id: 1, title: "Avatar: The Last Airbender", year: "2024", rating: "TV-14", match: "94%", isNetflixOriginal: true },
    { id: 2, title: "One Piece", year: "2023", rating: "TV-14", match: "92%", isNetflixOriginal: true },
    { id: 3, title: "Berlin", year: "2023", rating: "TV-MA", match: "88%", isNetflixOriginal: true },
    { id: 4, title: "Physical: 100", year: "2023", rating: "TV-MA", match: "86%", isNetflixOriginal: true },
    { id: 5, title: "Love is Blind", year: "2024", rating: "TV-MA", match: "85%", isNetflixOriginal: true },
    { id: 6, title: "The Gentlemen", year: "2024", rating: "TV-MA", match: "89%" },
    { id: 7, title: "Fool Me Once", year: "2024", rating: "TV-14", match: "87%" },
    { id: 8, title: "Griselda", year: "2024", rating: "TV-MA", match: "90%", isNetflixOriginal: true },
    { id: 9, title: "My Life with the Walter Boys", year: "2023", rating: "TV-14", match: "84%" },
    { id: 10, title: "The Brothers Sun", year: "2024", rating: "TV-MA", match: "88%", isNetflixOriginal: true },
  ],
  "Action Movies": [
    { id: 1, title: "Extraction", year: "2020", rating: "R", match: "91%", isNetflixOriginal: true },
    { id: 2, title: "The Gray Man", year: "2022", rating: "PG-13", match: "87%", isNetflixOriginal: true },
    { id: 3, title: "Red Notice", year: "2021", rating: "PG-13", match: "89%", isNetflixOriginal: true },
    { id: 4, title: "6 Underground", year: "2019", rating: "R", match: "85%", isNetflixOriginal: true },
    { id: 5, title: "The Old Guard", year: "2020", rating: "R", match: "88%", isNetflixOriginal: true },
    { id: 6, title: "John Wick", year: "2014", rating: "R", match: "93%" },
    { id: 7, title: "Mad Max: Fury Road", year: "2015", rating: "R", match: "95%" },
    { id: 8, title: "The Dark Knight", year: "2008", rating: "PG-13", match: "97%" },
  ],
  "Comedies": [
    { id: 1, title: "Glass Onion", year: "2022", rating: "PG-13", match: "92%", isNetflixOriginal: true },
    { id: 2, title: "Murder Mystery", year: "2023", rating: "PG-13", match: "86%", isNetflixOriginal: true },
    { id: 3, title: "The Adam Project", year: "2022", rating: "PG-13", match: "88%", isNetflixOriginal: true },
    { id: 4, title: "Don't Look Up", year: "2021", rating: "R", match: "85%", isNetflixOriginal: true },
    { id: 5, title: "The Good Place", year: "2020", rating: "TV-PG", match: "93%" },
    { id: 6, title: "Brooklyn Nine-Nine", year: "2021", rating: "TV-14", match: "91%" },
    { id: 7, title: "Schitt's Creek", year: "2020", rating: "TV-14", match: "94%" },
    { id: 8, title: "Arrested Development", year: "2019", rating: "TV-14", match: "89%", isNetflixOriginal: true },
  ],
  "Horror Movies": [
    { id: 1, title: "Bird Box", year: "2018", rating: "R", match: "87%", isNetflixOriginal: true },
    { id: 2, title: "Fear Street Trilogy", year: "2021", rating: "R", match: "89%", isNetflixOriginal: true },
    { id: 3, title: "The Platform", year: "2019", rating: "TV-MA", match: "88%" },
    { id: 4, title: "His House", year: "2020", rating: "PG-13", match: "91%", isNetflixOriginal: true },
    { id: 5, title: "Midnight Mass", year: "2021", rating: "TV-MA", match: "90%", isNetflixOriginal: true },
    { id: 6, title: "The Conjuring", year: "2013", rating: "R", match: "92%" },
    { id: 7, title: "Hereditary", year: "2018", rating: "R", match: "89%" },
    { id: 8, title: "The Haunting of Hill House", year: "2018", rating: "TV-MA", match: "93%", isNetflixOriginal: true },
  ],
  "Documentaries": [
    { id: 1, title: "Our Planet", year: "2019", rating: "TV-PG", match: "95%", isNetflixOriginal: true },
    { id: 2, title: "The Social Dilemma", year: "2020", rating: "PG-13", match: "91%", isNetflixOriginal: true },
    { id: 3, title: "Tiger King", year: "2020", rating: "TV-MA", match: "86%", isNetflixOriginal: true },
    { id: 4, title: "Making a Murderer", year: "2018", rating: "TV-14", match: "90%", isNetflixOriginal: true },
    { id: 5, title: "The Last Dance", year: "2020", rating: "TV-MA", match: "96%" },
    { id: 6, title: "Drive to Survive", year: "2023", rating: "TV-MA", match: "92%", isNetflixOriginal: true },
    { id: 7, title: "American Factory", year: "2019", rating: "PG-13", match: "88%", isNetflixOriginal: true },
    { id: 8, title: "My Octopus Teacher", year: "2020", rating: "TV-G", match: "94%", isNetflixOriginal: true },
  ],
}

// Map categories to their poster images
const categoryImages: Record<string, string> = {
  "Trending Now": trendingPosters,
  "Popular on Netflix": movieGrid,
  "Action Movies": actionPosters,
  "Comedies": comedyPosters,
  "Horror Movies": horrorPosters,
  "Documentaries": documentaryPosters,
}

const ContentRow = ({ title, items }: ContentRowProps) => {
  // Use predefined content or fallback to default
  const content = items || contentData[title] || contentData["Trending Now"]
  const posterImage = categoryImages[title] || movieGrid
  
  return (
    <div className="relative px-4 md:px-12 mb-10">
      {/* Row Title */}
      <h2 className="text-xl md:text-2xl font-bold text-foreground mb-4">
        {title}
      </h2>
      
      {/* Scroll Container */}
      <div className="relative group">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />
        
        {/* Content Container with horizontal scroll */}
        <div className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth pb-2">
          {content.map((item, index) => (
            <div
              key={item.id}
              className="flex-none w-40 md:w-48 lg:w-56 group/item cursor-pointer"
            >
              {/* Card Container */}
              <div className="space-y-2">
                {/* Poster Image Container */}
                <div className="relative aspect-video rounded-sm overflow-hidden transform transition-all duration-300 hover:scale-105 hover:z-20 hover:shadow-xl">
                  {/* Background poster image */}
                  <div 
                    className="absolute inset-0"
                    style={{
                      backgroundImage: `url(${posterImage})`,
                      backgroundPosition: `${-(index * 192)}px center`,
                      backgroundSize: 'cover',
                    }}
                  />
                  
                  {/* Overlay gradient for better visibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-60" />
                  
                  {/* Netflix Original Badge */}
                  {item.isNetflixOriginal && (
                    <div className="absolute top-2 left-2 text-primary font-bold text-xs bg-background/90 px-1.5 py-0.5 rounded">
                      N
                    </div>
                  )}
                  
                  {/* Top 10 Number for Top 10 category */}
                  {title.includes("Top 10") && (
                    <div className="absolute left-2 top-1/2 -translate-y-1/2">
                      <span className="text-5xl md:text-6xl font-black text-foreground drop-shadow-2xl stroke-text">
                        {index + 1}
                      </span>
                    </div>
                  )}
                  
                  {/* Hover Overlay with controls */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-3">
                      {/* Quick info */}
                      <div className="mb-2">
                        <p className="text-xs text-primary font-semibold">{item.match} Match</p>
                        <p className="text-xs text-muted-foreground">{item.year} • {item.rating}</p>
                      </div>
                      
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
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
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
                
                {/* Title under poster (visible by default) */}
                <div className="px-1">
                  <p className="text-sm font-medium text-foreground truncate group-hover/item:text-foreground/90">
                    {item.title}
                  </p>
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