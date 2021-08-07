import MediumCards from './MediumCards';

function LiveAnywhere() {

  const liveAnywhere = require('../../dummyData/liveAnywhere.json');

  return (
    <section>
      <h2 className="text-4xl font-semibold pt-14 pb-5">Live Anywhere</h2>

      <div className="flex space-x-4 overflow-scroll scrollbar-hide p-3 -ml-3 -mt-3">
        {liveAnywhere.map(({ img, title }) => (
          <MediumCards
            key={img}
            img={img}
            title={title}
          />
        ))}
      </div>
    </section>
  )
}

export default LiveAnywhere
