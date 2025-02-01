import { useState } from 'react';

interface CoverArtProps {
  songId: string;
  coverUrl: string | null;
  title: string;
}

export default function CoverArt({ songId, coverUrl, title }: CoverArtProps) {
  const [lyrics, setLyrics] = useState<string>('');
  const [isLoading, setIsLoading] = useState(false);
  const [showLyrics, setShowLyrics] = useState(false);

  const fetchLyrics = async () => {
    if (!lyrics && !isLoading) {
      setIsLoading(true);
      try {
        const response = await fetch(`/api/v1/lyrics/${songId}`);
        if (!response.ok) throw new Error('Failed to fetch lyrics');
        const data = await response.json();
        setLyrics(data.lyrics);
      } catch (error) {
        console.error('Error fetching lyrics:', error);
      } finally {
        setIsLoading(false);
      }
    }
  };

  return (
    <div 
      className="relative h-[400px] w-[400px]"
      onMouseEnter={() => {
        setShowLyrics(true);
        fetchLyrics();
      }}
      onMouseLeave={() => setShowLyrics(false)}
    >
      {coverUrl ? (
        <img
          src={coverUrl}
          alt={`Album artwork for ${title}`}
          className="h-full w-full rounded-md object-cover"
        />
      ) : (
        <div className="h-full w-full bg-gray-200 rounded-md flex items-center justify-center">
          <span className="text-gray-500">No Cover</span>
        </div>
      )}

      {showLyrics && (
        <div className="absolute inset-0 overflow-auto bg-black/75 p-4 text-white opacity-0 transition-opacity hover:opacity-100">
          {isLoading ? (
            <div className="flex h-full items-center justify-center">
              <div className="h-6 w-6 animate-spin rounded-full border-2 border-white border-t-transparent" />
            </div>
          ) : (
            <pre className="whitespace-pre-wrap font-inter text-sm">
              {lyrics}
            </pre>
          )}
        </div>
      )}
    </div>
  );
}
