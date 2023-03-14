import Link from "next/link"

export default function CreatePlaylistButtonGroup() {

    return (
        <div className="flex flex-1 flex-row items-center justify-evenly" >
            <Link href="/playlist/playlistcreatepage">
                <button className="mt-4 p-3 rounded-xl bg-purple-600 text-xl text-amber-400">
                    Create Playlist
                </button>
            </Link>
            <Link href="/playlist/playlistcreaterandompage">
                <button className="mt-4 p-3 rounded-xl bg-purple-600 text-xl text-amber-400">
                    Create Random Playlist
                </button>
            </Link>
        </div>
    )
}