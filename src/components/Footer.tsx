const Footer = () => {
  const footerLinks = {
    column1: ['Audio and Subtitles', 'Media Center', 'Privacy', 'Contact Us'],
    column2: ['Audio Description', 'Investor Relations', 'Legal Notices'],
    column3: ['Help Center', 'Jobs', 'Cookie Preferences'],
    column4: ['Gift Cards', 'Terms of Use', 'Corporate Information']
  }

  return (
    <footer className="bg-background px-4 md:px-12 py-16 mt-20">
      <div className="max-w-7xl mx-auto">
        {/* Social Links */}
        <div className="flex gap-6 mb-8">
          {['facebook', 'instagram', 'twitter', 'youtube'].map((social) => (
            <button
              key={social}
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={social}
            >
              <div className="w-6 h-6 rounded-full border border-muted-foreground hover:border-foreground transition-colors" />
            </button>
          ))}
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {Object.entries(footerLinks).map(([column, links]) => (
            <div key={column} className="space-y-3">
              {links.map((link) => (
                <a
                  key={link}
                  href="#"
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link}
                </a>
              ))}
            </div>
          ))}
        </div>

        {/* Service Code Button */}
        <button className="text-sm text-muted-foreground border border-muted-foreground hover:border-foreground hover:text-foreground px-4 py-2 mb-6 transition-colors">
          Service Code
        </button>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © 1997-2024 Netflix Clone, Inc.
        </p>
      </div>
    </footer>
  )
}

export default Footer