import SmallCards from "./SmallCards"

function ExploreNearby() {
  const exploreNearby = require('../../dummyData/exploreNearby.json');

  return (
    <section>
      <h2 className="text-4xl font-semibold pt-14 pb-5">Explore Nearby</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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

export default ExploreNearby
