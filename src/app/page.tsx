export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl md:text-5xl font-bold">Welcome to Beauty Parlour</h1>
          <p className="mt-4 text-lg md:text-xl">Your perfect destination for beauty and wellness.</p>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-700">Why Choose Us?</h2>
        <p className="mt-4 text-gray-700 leading-relaxed">
          At <span className="font-semibold">Beauty Parlour</span>, we prioritize quality, professionalism, and customer satisfaction.
          Our team of experts ensures you receive the best beauty and wellness services in a relaxing environment.
        </p>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Expert Stylists</h3>
            <p className="mt-2 text-gray-600">Our professional team is trained in the latest beauty trends and techniques.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Premium Products</h3>
            <p className="mt-2 text-gray-600">We use only high-quality, skin-friendly, and hair-friendly products.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Luxurious Ambience</h3>
            <p className="mt-2 text-gray-600">Relax and enjoy beauty treatments in a soothing and elegant environment.</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-700">Our Services</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6 container mx-auto px-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Hair Styling</h3>
            <p className="mt-2 text-gray-600">Trendy cuts, coloring, and hair treatments.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Facials & Skin Care</h3>
            <p className="mt-2 text-gray-600">Rejuvenate your skin with our premium facials.</p>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Bridal & Party Makeup</h3>
            <p className="mt-2 text-gray-600">Look stunning for every special occasion.</p>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="container mx-auto py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-blue-700">Our Gallery</h2>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">Image 1</div>
          <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">Image 2</div>
          <div className="bg-gray-300 h-48 rounded-lg flex items-center justify-center">Image 3</div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="bg-gray-100 py-12 text-center">
        <h2 className="text-3xl font-semibold text-blue-700">What Our Clients Say</h2>
        <div className="mt-6 container mx-auto px-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 bg-white shadow-md rounded-lg">
            {/* Disabled eslint rule for this section */}
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="italic text-gray-600">
              Absolutely amazing service! The staff is so friendly and professional. I felt pampered and beautiful.
            </p>
            <h4 className="mt-4 font-semibold text-gray-800">- Sarah J.</h4>
          </div>
          <div className="p-6 bg-white shadow-md rounded-lg">
            {/* Disabled eslint rule for this section */}
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <p className="italic text-gray-600">
              Best beauty salon in town! I loved my bridal makeup and hairdo. Highly recommended!
            </p>
            <h4 className="mt-4 font-semibold text-gray-800">- Emily R.</h4>
          </div>
        </div>
      </section>
    </main>
  );
}
