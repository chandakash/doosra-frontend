import Image from 'next/image';

export default function Banner() {
    return (
        <div className="relative w-full max-w-7xl mx-auto h-32 sm:h-40 md:h-48 lg:h-56 overflow-hidden rounded-lg mb-4">
            <Image
                src="/assets/images/banner.tiff"
                alt="Fantasy Cricket"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 1200px"
                className="object-cover object-center"
                priority
            />
            <div className="absolute bottom-2 sm:bottom-3 w-full bg-purple-500 py-1 px-4 z-10">
                <div className="flex flex-col">
                    <div className="flex justify-between items-center">
                        <span className="text-base sm:text-lg text-white font-bold">Get Best Analysis!</span>
                        <span className="text-sm sm:text-base text-yellow-400 font-bold">Doosra</span>
                    </div>
                    <span className="text-xs sm:text-xs text-white">Win Big on Fantasy!</span>
                </div>
            </div>
        </div>
    )
}