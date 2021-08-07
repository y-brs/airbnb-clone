import ExploreNearby from "./ExploreNearby"
import LargeCards from "./LargeCards"
import LiveAnywhere from "./LiveAnywhere"

function MainPage() {
  return (
    <main className="max-w-screen-2xl mx-auto px-10 lg:px-20">
      <ExploreNearby />

      <LargeCards
        img="/images/large-cards-1.jpg"
        title="Not sure where to go?"
        description="Perfect."
        buttonText="I'm flexible"
      />

      <LiveAnywhere />

      <LargeCards
        img="/images/large-cards-2.jpg"
        title="The Greatest Outdoors"
        description="Wishlists curated by Aribnb."
        buttonText="Get Inspired"
      />

    </main>
  )
}

export default MainPage
