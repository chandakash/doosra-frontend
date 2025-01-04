interface PlayerStatsProps {
  stats: {
      matches: number;
      wickets: number;
      runsScored: number;
      strikeRate: number;
      bowlingAverage: number;
      economy: number;
      catches: number;
      bestBowling: string;
  };
}

export default function PlayerStats({ stats }: PlayerStatsProps) {
  return (
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
          <StatCard label="Matches" value={stats.matches.toString()} />
          <StatCard label="Wickets" value={stats.wickets.toString()} />
          <StatCard label="Runs Scored" value={stats.runsScored.toString()} />
          <StatCard label="Bowling Average" value={stats.bowlingAverage.toFixed(2)} />
          <StatCard label="Economy" value={stats.economy.toFixed(2)} />
          <StatCard label="Catches" value={stats.catches.toString()} />
          <StatCard label="Best Bowling" value={stats.bestBowling} />
      </div>
  );
}

function StatCard({ label, value }: { label: string; value: string }) {
  return (
      <div className="bg-gray-800 p-4 rounded-lg">
          <p className="text-sm text-gray-400">{label}</p>
          <p className="text-xl font-bold text-white">{value}</p>
      </div>
  );
}