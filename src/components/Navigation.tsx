import { NetflixButton } from "./ui/netflix-button"

const Navigation = () => {
  const navLinks = ['Home', 'TV Shows', 'Movies', 'New & Popular', 'My List', 'Browse by Languages']

  return (
    <nav className="fixed top-0 z-50 w-full bg-gradient-to-b from-background via-background/80 to-transparent backdrop-blur-sm transition-all duration-500">
      <div className="flex items-center justify-between px-4 md:px-12 py-4">
        <div className="flex items-center gap-8">
          {/* Netflix Logo */}
          <div className="text-primary font-bold text-2xl md:text-3xl tracking-wider">
            NETFLIX
          </div>
          
          {/* Navigation Links - Hidden on mobile */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <NetflixButton
                key={link}
                variant="nav"
                className="hover:text-foreground"
              >
                {link}
              </NetflixButton>
            ))}
          </div>
        </div>

        {/* Right side - Profile and utilities */}
        <div className="flex items-center gap-4">
          {/* Search Icon */}
          <button className="text-foreground hover:text-foreground/80 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {/* Notifications */}
          <button className="text-foreground hover:text-foreground/80 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
            </svg>
          </button>
          
          {/* Profile */}
          <NetflixButton variant="profile" size="icon">
            <div className="w-8 h-8 bg-primary rounded-sm flex items-center justify-center text-foreground font-semibold">
              U
            </div>
          </NetflixButton>
        </div>
      </div>
    </nav>
  )
}

export default Navigation