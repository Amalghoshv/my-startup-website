const Contact = () => (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Contact Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="text-gray-600">
              Have questions about our ERPNext solutions? We'd love to hear from you.
              Send us a message and we'll respond as soon as possible.
            </p>
            <div className="space-y-4">
              <p className="flex items-center text-gray-600">
                <div className="w-5 h-5 mr-2" />
                upscalenext@gmail.com
              </p>
              <p className="flex items-center text-gray-600">
                <div className="w-5 h-5 mr-2" />
                +91-7025732665
              </p>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <textarea
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg"
            />
            <button className="w-full bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
export default Contact  