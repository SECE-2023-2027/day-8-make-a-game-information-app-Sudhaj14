'use client';

type Game = {
  id: number;
  name: string;
  poster: string;
  releaseYear: string;
  developer: string;
  category: string;
};

export default function GameCard({ game }: { game: Game }) {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white hover:scale-105 transition-transform">
      <img
        src={game.poster}
        alt={game.name}
        className="w-full h-40 object-cover rounded"
      />
      <h2 className="mt-2 font-bold text-lg">{game.name}</h2>
      <p className="text-sm text-gray-600">Released: {game.releaseYear}</p>
      <p className="text-sm text-gray-600">Developer: {game.developer}</p>
      <span className="inline-block mt-2 text-xs text-white bg-blue-500 px-2 py-1 rounded">
        {game.category}
      </span>
    </div>
  );
}
