import ExploreNearby from "./ExploreNearby"
import LargeCards from "./LargeCards"
import LiveAnywhere from "./LiveAnywhere"

function MainPage() {
  return (
    <main className="max-w-screen-2xl mx-auto px-10 lg:px-20">
      <ExploreNearby />
      <LiveAnywhere />

      <LargeCards
        img="https://links.papareact.com/4cj"
        title="The Greatest Outdoors"
        description="Wishlists curated by Aribnb."
        buttonText="Get Inspired"
      />

    </main>
  )
}

export default MainPage
