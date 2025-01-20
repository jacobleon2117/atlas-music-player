import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white p-8">
      <div className="flex flex-col items-center gap-8"></div>
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
