export default function Header() {
  return (
    <header className="bg-[#1A1A1A] p-4 flex justify-between items-center sticky top-0 z-50">
      <div className="flex items-center justify-center w-full">
        <button className="text-[#FFB800] absolute left-4">
          <span className="material-icons">menu</span>
        </button>
        <div className="text-xl font-bold text-[#FFB800]">Doosra</div>
      </div>
    </header>
  )
}