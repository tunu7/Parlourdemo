// app/services/page.js
export default function Services() {
    return (
      <main className="min-h-screen bg-gray-100">
        <section className="container mx-auto py-12">
          <h1 className="text-3xl font-semibold text-center text-gray-800">Our Services</h1>
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">Hair Styling</h2>
              <p className="mt-2 text-gray-600">Professional haircuts, styling, and treatments for all hair types.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">Facial Treatments</h2>
              <p className="mt-2 text-gray-600">Revitalize your skin with our exclusive facial therapies.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold text-gray-800">Nail Care</h2>
              <p className="mt-2 text-gray-600">Manicures and pedicures for healthy and beautiful nails.</p>
            </div>
          </div>
        </section>
      </main>
    )
  }
  