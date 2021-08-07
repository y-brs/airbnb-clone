function Footer() {
  return (
    <footer className="bg-gray-100 border-t border-gray-300">
      <section className="max-w-screen-2xl mx-auto px-10 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        <div className="space-y-5 text-sm text-gray-600 pt-10 pb-10 border-b border-gray-300">
          <h5 className="font-bold uppercase text-gray-800">About</h5>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">How Airbnb works</a></li>
            <li><a href="#" className="hover:underline">Newsroom</a></li>
            <li><a href="#" className="hover:underline">Airbnb 2021</a></li>
            <li><a href="#" className="hover:underline">Investors</a></li>
            <li><a href="#" className="hover:underline">Airbnb Plus</a></li>
            <li><a href="#" className="hover:underline">Airbnb Luxe</a></li>
            <li><a href="#" className="hover:underline">HotelTonight</a></li>
            <li><a href="#" className="hover:underline">Airbnb for Work</a></li>
            <li><a href="#" className="hover:underline">Made possible by Hosts</a></li>
            <li><a href="#" className="hover:underline">Careers</a></li>
            <li><a href="#" className="hover:underline">Founders' Letter</a></li>
          </ul>
        </div>
        <div className="space-y-5 text-sm text-gray-600 pt-10 pb-10 border-b border-gray-300">
          <h5 className="font-bold uppercase text-gray-800">Community</h5>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Diversity & Belonging</a></li>
            <li><a href="#" className="hover:underline">Against Discrimination</a></li>
            <li><a href="#" className="hover:underline">Accessibility</a></li>
            <li><a href="#" className="hover:underline">Airbnb Associates</a></li>
            <li><a href="#" className="hover:underline">Frontline Stays</a></li>
            <li><a href="#" className="hover:underline">Guest Referrals</a></li>
            <li><a href="#" className="hover:underline">Gift cards</a></li>
            <li><a href="#" className="hover:underline">Airbnb.org</a></li>
          </ul>
        </div>
        <div className="space-y-5 text-sm text-gray-600 pt-10 pb-10 border-b border-gray-300">
          <h5 className="font-bold uppercase text-gray-800">Host</h5>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Host your home</a></li>
            <li><a href="#" className="hover:underline">Host an Online Experience</a></li>
            <li><a href="#" className="hover:underline">Host an Experience</a></li>
            <li><a href="#" className="hover:underline">Responsible hosting</a></li>
            <li><a href="#" className="hover:underline">Resource Center</a></li>
            <li><a href="#" className="hover:underline">Community Center</a></li>
          </ul>
        </div>
        <div className="space-y-5 text-sm text-gray-600 pt-10 pb-10 border-b border-gray-300">
          <h5 className="font-bold uppercase text-gray-800">Support</h5>
          <ul className="space-y-3">
            <li><a href="#" className="hover:underline">Our COVID-19 Response</a></li>
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Cancellation options</a></li>
            <li><a href="#" className="hover:underline">Neighborhood Support</a></li>
            <li><a href="#" className="hover:underline">Trust & Safety</a></li>
          </ul>
        </div>
      </section>
      <section className="max-w-screen-2xl mx-auto flex px-10 lg:px-20">
        <div className="text-sm text-gray-600 pt-5 pb-5 border-b">
          © 2021 Airbnb, Inc.
          {' '}· <a href="#" className="hover:underline">Privacy</a>
          {' '}· <a href="#" className="hover:underline">Terms</a>
          {' '}· <a href="#" className="hover:underline">Sitemap</a>
        </div>
      </section>
    </footer>
  )
}

export default Footer
