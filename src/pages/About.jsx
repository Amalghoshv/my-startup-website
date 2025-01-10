const About = () => (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">About Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">Our Story</h3>
            <p className="text-gray-600">
              Founded by young tech enthusiasts, we bring fresh perspectives to 
              ERPNext solutions. Our innovative approach combines technical expertise 
              with modern business understanding.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-gray-900">Our Mission</h3>
            <p className="text-gray-600">
              We're dedicated to transforming businesses through cutting-edge 
              ERPNext solutions, making enterprise resource planning accessible 
              and efficient for companies of all sizes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
  export default About