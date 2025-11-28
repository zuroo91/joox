import Image from "next/image";

export default function JooxClone() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Location Warning Banner */}
      <div className="bg-gray-200 text-red-600 text-center py-3 px-4 text-sm font-medium">
        <span className="font-bold">Sorry, JOOX is not available in this location.</span> JOOX is now available in Hong Kong, Macau, Thailand, Malaysia, Indonesia.
      </div>

      {/* Hero Section */}
      <section className="relative px-6 py-16 lg:px-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center px-20">
            <div className="space-y-8`">
              {/* JOOX Logo */}
              <div className="mb-12">
                <Image
                  src="https://ext.same-assets.com/2118367811/4108263545.png"
                  alt="JOOX"
                  width={300}
                  height={120}
                  className="h-24 w-auto"
                />
              </div>

              <div className="space-y-6">
                <p className="text-lg lg:text-xl leading-relaxed">
                  Its the <span className="font-bold">FREE</span> music player app with more than 40 million songs from
                  all over the world. Enjoy social music experience with Karaoke, Live
                  video group chat rooms, and trending short videos
                </p>

                <p className="text-base lg:text-lg text-gray-300 leading-relaxed">
                  Now available on Mobile App (iOS and Android), Desktop App,
                  joox.com, Android TV and Google Nest in Hong Kong, Thailand,
                  Malaysia, Indonesia, Myanmar.
                </p>
              </div>
            </div>

            {/* Phone Mockup */}
            <div className="flex justify-center lg:justify-end">
              <Image
                src="https://ext.same-assets.com/2118367811/2231491971.png"
                alt="JOOX Mobile App"
                width={400}
                height={600}
                className="w-80 h-auto lg:w-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Huge Music Library Section */}
      <section className="px-6 py-16 lg:px-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-1 items-center">
            <div style={{ paddingBottom: "130px" }}>
              <h2 className="text-4xl lg:text-6xl font-bold text-[#1cc875] leading-tight mb-4 text-right">
                <b>
                  Huge<br />
                  Music<br />
                  Library
                </b>
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed text-right">
                Instantly access streaming more than 40 million songs from all over the world.
              </p>
            </div>

            <div className="flex justify-center">
              <Image
                src="https://ext.same-assets.com/2118367811/737332724.png"
                alt="Music Library"
                width={200}
                height={300}
                className="w-80 h-auto lg:w-96"
                style={{ width: "300px" }} 
              />
            </div>

            <div style={{ paddingTop: "200px" }}>
                <div>
                  <h2 className="text-4xl lg:text-6xl font-bold text-[#1cc875] leading-tight mb-4">
                    <b>Playlists</b>                    
                  </h2>
                </div>

              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-bold mb-2">Recommended Popular Music Playlists</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Find playlists recommended by us, with songs to fit your mood.
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-2">Personalised Music</h3>
                  <p className="text-gray-300 leading-relaxed">
                    Customise your playlists with your favourite songs and tracks for every occasion.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Playlists Section */}
      <section className="px-6 py-16 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">

          

          </div>
        </div>
      </section>

      {/* Feature Cards Section */}
      <section className="px-6 py-16 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Live Broadcasting */}
            <div className="bg-blue-500 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <Image
                  src="https://ext.same-assets.com/2118367811/640263480.png"
                  alt="Live Broadcasting"
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">
                  Live<br />Broadcasting
                </h3>
                <p className="text-sm leading-relaxed">
                  Get closer to your favourite artist and their hits in JOOX Live.
                </p>
              </div>
            </div>

            {/* JOOX Rooms */}
            <div className="bg-orange-500 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <Image
                  src="https://ext.same-assets.com/2118367811/281881775.png"
                  alt="JOOX Rooms"
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">
                  JOOX<br />Rooms
                </h3>
                <p className="text-sm leading-relaxed">
                  Enjoy music and live conver-sations with audio and video group chatting.
                </p>
              </div>
            </div>

            {/* Trending Videos */}
            <div className="bg-green-500 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <Image
                  src="https://ext.same-assets.com/2118367811/96003026.png"
                  alt="Trending Videos"
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">
                  Trending<br />Videos
                </h3>
                <p className="text-sm leading-relaxed">
                  Tons of popular short videos are waiting for you to explore. You will never get bored in JOOX.
                </p>
              </div>
            </div>

            {/* JOOX Karaoke */}
            <div className="bg-purple-600 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <Image
                  src="https://ext.same-assets.com/2118367811/3292810872.png"
                  alt="JOOX Karaoke"
                  width={200}
                  height={150}
                  className="w-full h-32 object-cover rounded-lg mb-6"
                />
                <h3 className="text-2xl font-bold mb-4">
                  JOOX<br />Karaoke
                </h3>
                <p className="text-sm leading-relaxed">
                  Enjoy JOOXs karaoke feature, which allows you to sing, dance your go-to Karaoke songs and duet with your favorite singers anytime, anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enjoy Music Anywhere Section */}
      <section className="px-6 py-16 lg:px-16 lg:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-bold text-[#1cc875] leading-tight mb-8">
                Enjoy Music<br />
                Anywhere<br />
                Anytime
              </h2>
              <p className="text-lg lg:text-xl text-gray-300 leading-relaxed">
                Discover the best new music that fit your taste and mood on your devices, anytime, anywhere.
              </p>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src="https://ext.same-assets.com/2118367811/3837345596.png"
                alt="Multiple Devices"
                width={400}
                height={300}
                className="w-80 h-auto lg:w-96"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800">
        {/* JOOX Branding Section */}
        <div className="px-6 py-12 lg:px-16">
          <div className="max-w-7xl mx-auto text-center">
            <div className="mb-8">
              <Image
                src="https://ext.same-assets.com/2118367811/1492228345.png"
                alt="JOOX"
                width={200}
                height={80}
                className="h-16 w-auto mx-auto mb-4"
              />
              <p className="text-lg font-medium text-gray-300">Your Music, Your Community</p>
            </div>

            {/* App Download Links */}
            <div className="flex flex-wrap justify-center items-center gap-4 mb-12">
              <Image
                src="https://ext.same-assets.com/2118367811/4137276888.png"
                alt="Download on App Store"
                width={140}
                height={50}
                className="h-12 w-auto"
              />
              <Image
                src="https://ext.same-assets.com/2118367811/2447155652.png"
                alt="Get it on Google Play"
                width={140}
                height={50}
                className="h-12 w-auto"
              />
              <Image
                src="https://ext.same-assets.com/2118367811/2539627930.png"
                alt="Explore it on AppGallery"
                width={140}
                height={50}
                className="h-12 w-auto"
              />
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-gray-900 px-6 py-12 lg:px-16">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-6">Contact US</h3>

            <p className="text-gray-300 mb-8 leading-relaxed">
              Were always looking for ways to improve your experience. Follow us and send us your feedback to
              support JOOX. Your comments and suggestions are greatly appreciated!
            </p>

            <p className="text-gray-300 mb-8">You can contact us by the following methods</p>

            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-white mb-2">feedback@JOOX.com</h4>
                <p className="text-gray-400 text-sm">Please provide your feedback for JOOX</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">support@JOOX.com</h4>
                <p className="text-gray-400 text-sm">For help, please contact JOOX Technical Support.</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">press@JOOX.com</h4>
                <p className="text-gray-400 text-sm">For PR inquiries, please contact our PR Team.</p>
              </div>

              <div>
                <h4 className="font-bold text-white mb-2">BD@JOOX.com</h4>
                <p className="text-gray-400 text-sm">For business inquiries, please contact our BD Team.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
