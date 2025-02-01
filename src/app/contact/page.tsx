// app/contact/page.js
export default function Contact() {
    return (
      <main className="min-h-screen bg-gray-50">
        <section className="container mx-auto py-12">
          <h1 className="text-3xl font-semibold text-center text-gray-800">Contact Us</h1>
          <div className="mt-6 flex justify-center">
            <form className="w-full sm:w-1/2 bg-white p-8 rounded-lg shadow-lg">
              <div className="mb-4">
                <label className="block text-gray-800" htmlFor="name">Full Name</label>
                <input className="w-full px-4 py-2 mt-2 border border-gray-300 rounded" id="name" type="text" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800" htmlFor="email">Email</label>
                <input className="w-full px-4 py-2 mt-2 border border-gray-300 rounded" id="email" type="email" />
              </div>
              <div className="mb-4">
                <label className="block text-gray-800" htmlFor="message">Message</label>
                <textarea className="w-full px-4 py-2 mt-2 border border-gray-300 rounded" id="message"></textarea>
              </div>
              <button type="submit" className="w-full py-2 bg-blue-500 text-white rounded">Send Message</button>
            </form>
          </div>
        </section>
      </main>
    )
  }
  