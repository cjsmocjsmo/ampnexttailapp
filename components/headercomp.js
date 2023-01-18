
import Link from "next/link"

export default function Header() {

    return (
        <div className="bg-gray-700 flex h-24 w-full items-center justify-center border-t">
            <Link href="/searchpage">
                <button className="bg-purple-400 text-amber-400, m-2 p-2 rounded-lg">
                    Search
                </button>
            </Link>
            <Link href="/artistpage">
                <button className="bg-purple-400 text-black, m-2 p-2 rounded-lg">
                    Artist
                </button>
            </Link>
            <Link href="/albumpage">
                <button className="bg-purple-400 text-amber-400, m-2 p-2 rounded-lg">
                    Album
                </button>
            </Link>
            <Link href="/songpage">
                <button className="bg-purple-400 text-amber-400, m-2 p-2 rounded-lg">
                    Song
                </button>
            </Link>

            <Link href="/playlistmainpage">
                <button className="bg-purple-400 text-amber-400, m-2 p-2 rounded-lg">
                    Playlist
                </button>
            </Link>
        </div>
    )
}



