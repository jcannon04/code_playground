import Link from "next/link";
const DemoPage = () => {
  return (
      <div className="h-full flex items-center justify-center mt-12">
          <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
              <h1 className="text-2xl font-bold mb-4">Welcome to CodeCrewLabs</h1>
              <p className="mb-6">
                  CodeCrewLabs is an interactive e-learning environment with a codepen-like web playground.
                  You can create projects in multiple programming languages, practice coding, and more!
              </p>
              <Link href="/demo">
              <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
                  Try Now!
              </button>
              </Link>
          </div>
      </div>
  );
};

export default DemoPage;
