interface PlayerCardProps {
    name: string;
    role: string;
    rating: number;
    stats: {
        matches: number;
        runs: number;
    };
}

export default function PlayerCard({ name, role, rating, stats }: PlayerCardProps) {
    return (
        <div className="bg-secondary rounded-lg p-4 hover:bg-secondary/80 transition-colors cursor-pointer">
            <div className="flex items-start justify-between">
                <div className="flex-1">
                    <h3 className="font-semibold text-lg">{name}</h3>
                    <p className="text-sm text-gray-400">{role}</p>
                    <div className="mt-2 flex flex-wrap gap-2">
                        <span className="text-xs bg-primary px-2 py-1 rounded">
                            M: {stats.matches}
                        </span>
                        <span className="text-xs bg-primary px-2 py-1 rounded">
                            R: {stats.runs}
                        </span>
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <div className="bg-accent/20 text-accent px-2 py-1 rounded text-sm">
                        {rating}
                    </div>
                </div>
            </div>
        </div>
    )
}