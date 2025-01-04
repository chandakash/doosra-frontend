export default function CurrentForm({ data }: any) {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="w-full text-sm">
                    <thead>
                        <tr className="text-gray-400">
                            <th className="text-left pb-2">Last 5 Matches</th>
                            <th className="text-left pb-2">Bowling</th>
                            <th className="text-left pb-2">Batting</th>
                            <th className="text-right pb-2">⌀ Avg</th>
                            <th className="text-right pb-2">✗ Avg</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.lastMatches.map((match: any, index: number) => (
                            <tr key={index} className="border-b border-gray-800">
                                <td className="py-2">{match.date}</td>
                                <td className="py-2">{match.bowling}</td>
                                <td className="py-2">{match.batting}</td>
                                <td className="text-right py-2">{match.avgPoints}</td>
                                <td className="text-right py-2">{match.xAvg}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4">
                <StatBox 
                    label="Avg fantasy points" 
                    value={data.summary.fantasyPoints} 
                    color="bg-purple-500"
                />
                <StatBox 
                    label="Wickets" 
                    value={data.summary.wickets} 
                    color="bg-pink-500"
                />
                <StatBox 
                    label="Runs" 
                    value={data.summary.runs} 
                    color="bg-blue-500"
                />
            </div>
        </div>
    );
}

function StatBox({ label, value, color }: any) {
    return (
        <div className={`p-4 rounded-lg bg-gray-900`}>
            <div className="text-xl font-bold mb-1">{value}</div>
            <div className="text-xs text-gray-400">{label}</div>
        </div>
    );
}