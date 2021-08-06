import SmallCards from "./SmallCards"

export default function ExploreNearby() {
  const exploreNearby = require('../../dummyData/exploreNearby.json');

  return (
    <section className="pt-6">
      <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {exploreNearby.map(({ img, distance, location }) => (
          <SmallCards
            key={img}
            img={img}
            distance={distance}
            location={location}
          />
        ))}
      </div>

    </section>
  )
}
