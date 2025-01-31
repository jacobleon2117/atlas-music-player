import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden bg-white dark:bg-primary-dark">
      <div className="flex flex-grow flex-col items-center justify-center px-4">
        <div className="mx-auto w-full max-w-5xl">
          <MusicPlayer />
        </div>
      </div>
      <Footer />
    </div>
  );
}