export default function BottomNavigation() {
    return (
      <nav className="fixed bottom-0 left-0 right-0 bg-secondary py-2 px-4 flex justify-around items-center border-t border-gray-700">
        <a href="#" className="flex flex-col items-center p-2">
          <span className="material-icons text-2xl">sports_cricket</span>
          <span className="text-xs mt-1">Matches</span>
        </a>
        <a href="#" className="flex flex-col items-center p-2">
          <span className="material-icons text-2xl">home</span>
          <span className="text-xs mt-1">Home</span>
        </a>
        <a href="#" className="flex flex-col items-center p-2">
          <span className="material-icons text-2xl">person</span>
          <span className="text-xs mt-1">Profile</span>
        </a>
      </nav>
    )
  }