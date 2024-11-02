import Userclass from "./Userclass";

const Aboutus = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-r from-blue-50 to-blue-100 py-10 min-h-screen">
      {/* Title Section */}
      <h1 className="text-5xl font-extrabold text-blue-700 mb-4">Food App Clone</h1>
      <p className="text-lg text-gray-600 max-w-xl text-center mb-8">
        A React-based food app clone that fetches live data from APIs to display a range of restaurant menus, categories, and item details.
      </p>

      {/* User Information */}
    
      {/* Project Highlights */}
      <div className="bg-blue-50 p-6 rounded-lg shadow-lg max-w-lg w-full mb-6">
        <h2 className="text-3xl font-semibold text-blue-600 mb-3">Project Highlights</h2>
        <ul className="list-disc pl-5 space-y-2 text-gray-700">
          <li>Used core React concepts including state management, props, and hooks for dynamic functionality.</li>
          <li>Data fetched from a live API, providing real-time restaurant data and menu details.</li>
          <li>Tailwind CSS for sleek and responsive design, enhancing user experience across devices.</li>
        </ul>
      </div>

      {/* Contact Information */}
    
    </div>
  );
};

export default Aboutus;
