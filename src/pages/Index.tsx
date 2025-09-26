import Navigation from "@/components/Navigation"
import HeroBanner from "@/components/HeroBanner"
import ContentRow from "@/components/ContentRow"
import Footer from "@/components/Footer"

const Index = () => {
  const contentCategories = [
    'Trending Now',
    'Popular on Netflix',
    'Continue Watching',
    'Top 10 in Your Country',
    'Action Movies',
    'Comedies',
    'Horror Movies',
    'Documentaries'
  ]

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Hero Banner */}
      <HeroBanner />
      
      {/* Content Rows */}
      <div className="relative -mt-32 z-10 pb-10">
        {contentCategories.map((category) => (
          <ContentRow key={category} title={category} />
        ))}
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
