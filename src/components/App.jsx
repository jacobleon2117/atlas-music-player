import Footer from "./Footer";
import Playlist from "./Playlist";

function App() {
  return (
    <div className="flex min-h-screen flex-col justify-between bg-white p-8">
      <div className="flex flex-col items-center gap-8">
        <Playlist />
      </div>
      <Footer />
    </div>
  );
}

export default App;
