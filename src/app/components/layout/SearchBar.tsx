export default function SearchBar() {
    return (
        <div className="relative mb-4">
            <div className="bg-[#0F0F0F] rounded-lg p-3">
                <h3 className="text-[#FFB800] text-xs flex items-center gap-1 mb-2">
                    Featured AI search <span>✨</span>
                </h3>
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search players, predictions, teams etc."
                        className="w-full bg-[#1F1F1F] rounded-lg pl-10 pr-4 py-3.5 text-sm text-white placeholder-gray-400 focus:outline-none border border-purple-500"
                    />
                    <div className="absolute left-3 top-1/2 -translate-y-1/2">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-gray-400">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    )
}