import Footer from "./Footer";
import MusicPlayer from "./MusicPlayer";
import CoverArt from "./CoverArt";

function App() {
  return (
    <div className="flex h-full min-h-screen flex-col justify-between p-8">
      <CoverArt />
      <MusicPlayer />
      <Footer />
    </div>
  );
}

export default App;
