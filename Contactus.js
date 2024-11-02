const Contactus = () => {
    return (
      <div className="flex flex-col items-center bg-gradient-to-r from-green-50 to-green-100 py-10 min-h-screen">
        {/* Page Title */}
        <h1 className="text-5xl font-extrabold text-green-700 mb-4">Contact Us</h1>
        <p className="text-lg text-gray-600 max-w-xl text-center mb-8">
          We’re here to help! Reach out with any questions, feedback, or issues.
        </p>
  
        {/* Contact Information */}
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full mb-6">
          <h2 className="text-2xl font-semibold text-green-600 mb-3">Contact Information</h2>
          <p className="text-gray-700">
            <strong>Phone:</strong> 7075484861
          </p>
          <p className="text-gray-700">
            <strong>Email:</strong> vardhanmamidi7@gmail.com
          </p>
          <p className="text-gray-700">
            <strong>Instagram:</strong>mr_vardhu
          </p>
          <p className="text-gray-700">
            <strong>LinkedIn:</strong> vardhan mamidi
          </p>
          <p className="text-gray-700">
            <strong>GitHub:</strong>vardhan mamidi
          </p>
        </div>
  
        {/* Inquiry Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-3xl font-semibold text-green-600 mb-4">Send us a Message</h2>
          <form className="space-y-4">
            <div>
              <label className="block text-gray-700 font-medium mb-1">Name</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Email</label>
              <input
                type="email"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Subject</label>
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Subject"
              />
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-1">Message</label>
              <textarea
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                placeholder="Type your message here..."
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-green-600 text-white font-semibold p-2 rounded hover:bg-green-700 transition duration-200"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default Contactus;
  