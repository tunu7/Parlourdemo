// pages/about.js
export default function About() {
    return (
      <div className="min-h-screen bg-gray-100 py-12 px-6">
        <div className="container mx-auto max-w-3xl bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-3xl font-semibold text-blue-700 mb-4">About Us</h2>
          <p className="text-gray-700 leading-relaxed">
            Welcome to <span className="font-semibold">Beauty Parlour</span>, where beauty meets elegance.
            Our salon is dedicated to providing exceptional beauty treatments and services tailored to your needs.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            We specialize in professional hair styling, skincare, makeup, and spa treatments, ensuring our clients
            feel confident and rejuvenated. Our expert team uses top-quality products and the latest techniques
            to bring out your best look.
          </p>
          <p className="mt-4 text-gray-700 leading-relaxed">
            Experience a relaxing and luxurious environment with personalized services designed to enhance your
            natural beauty. Visit us today and let us pamper you with the care you deserve.
          </p>
        </div>
      </div>
    );
  }
  