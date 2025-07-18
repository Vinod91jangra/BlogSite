export default function Header() {
  return (
    <header className="py-4 px-6 shadow-glass fixed top-0 inset-x-0 z-50 bg-glass-gradient backdrop-blur-md rounded-b-2xl animate-fadeIn">
      <h1 className="font-extrabold text-4xl tracking-tight text-white drop-shadow-lg text-center animate-slideUp transition-all duration-700">
        <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
          Blogs Center
        </span>
      </h1>
    </header>
  );
}
