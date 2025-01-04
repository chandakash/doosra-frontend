interface PlayerInfoProps {
  information: string[];
  videos: { id: number; title: string; thumbnail: string }[];
}

export default function PlayerInfo({ information, videos }: PlayerInfoProps) {
  return (
      <div className="p-4 space-y-3">
          <h3 className="text-lg font-semibold">More Information</h3>
          <ul className="list-disc list-inside text-gray-300">
              {information.map((info, index) => (
                  <li key={index}>{info}</li>
              ))}
          </ul>
          <h4 className="text-lg font-semibold mt-4">Videos</h4>
          <div className="grid grid-cols-2 gap-4">
              {videos.map(video => (
                  <VideoThumbnail key={video.id} title={video.title} thumbnail={video.thumbnail} />
              ))}
          </div>
      </div>
  );
}

function VideoThumbnail({ title, thumbnail }: { title: string; thumbnail: string }) {
  return (
      <div className="relative aspect-video bg-gray-800 rounded-lg">
          <img src={thumbnail} alt={title} className="absolute inset-0 w-full h-full object-cover rounded-lg" />
          <span className="absolute inset-0 flex items-center justify-center">
              <span className="material-icons text-4xl text-white">play_circle</span>
          </span>
      </div>
  );
}