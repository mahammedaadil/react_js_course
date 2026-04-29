import BasicProps from "./components/BasicProps";
import ChildProps from "./components/ChildProps";
import ComplexProps from "./components/ComplexProps";
import RefProps from "./components/RefProps";

const Navigation = () => {
  const sections = [
    { id: "basic", label: "Basic Props", icon: "📦" },
    { id: "ref", label: "ref Props", icon: "🔗" },
    { id: "children", label: "children Props", icon: "👶" },
    { id: "complex", label: "complex Props", icon: "🧩" },
    { id: "theme", label: "theme Props", icon: "🎨" },
  ];

  return (
    <>
      <div className=" mt-2 container flex items-center justify-center gap-2">
        {sections.map((section) => (
          <button
            className={`
                px-4 py-2 rounded-lg font-medium transition-all bg-blue-600 text-white
                hover:bg-blue-800
              `}
            key={section.id}
          >
            <span>{section.icon}</span>
            {section.label}
          </button>
        ))}
      </div>
    </>
  );
};

function AppContent() {
  const isDark = true;

  return (
    <div
      className={`min-h-screen bg-gray-800 ${
        isDark ? "bg-gray-900" : "bg-purple-400"
      }`}
    >
      <Navigation />
      <div className="container mx-auto px-4 py-8">
        <header
          className={`text-center mb-12 transition-colors ${
            isDark ? "text-white" : "text-gray-800"
          }`}
        >
          <h1 className="text-5xl font-bold mb-4">React Props Explained</h1>
          <p
            className={`text-xl ${isDark ? "text-gray-300" : "text-gray-600"}`}
          >
            A comprehensive guide to understanding props in React
          </p>
          <div
            className={`mt-4 inline-block px-6 py-2 rounded-full ${
              isDark ? "bg-gray-800" : "bg-white"
            } shadow-md`}
          >
            <span className="font-semibold">
              Built with Bun + Vite + React + Tailwind CSS
            </span>
          </div>
        </header>
        <div className="space-y-8">
          <div id="basic" className="scroll-mt-200">
            <BasicProps />
          </div>

          <div id="basic" className="scroll-mt-200">
            <ChildProps />
          </div>

          <div id="basic" className="scroll-mt-200">
            <ComplexProps />
          </div>

          <div id="basic" className="scroll-mt-200">
            <RefProps />
          </div>
        </div>
        <footer
          className={`mt-12 text-center pb-8 transition-colors ${
            isDark ? "text-gray-400" : "text-gray-600"
          }`}
        >
          <p className="text-sm">
            Made with ❤️ using Bun, Vite, React, and Tailwind CSS
          </p>
        </footer>
      </div>
    </div>
  );
}

function App() {
  return (
    <>
      <AppContent />
    </>
  );
}

export default App;
