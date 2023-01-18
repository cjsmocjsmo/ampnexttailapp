import Link from "next/link"
import Layout from "../components/layout"
import styles from "../components/tooltip.module.css"
export default function PlayListMainPage() {
    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">PlayLists</div>

                <div className="flex flex-1 flex-row items-center justify-evenly" >
                    <Link href="/playlistcreatepage">
                        <button className="mt-4 p-3 rounded-xl bg-purple-600 text-xl text-amber-400">
                            Create Playlist
                        </button>
                    </Link>
                    <Link href="/playlistcreaterandompage">
                        <button className="mt-4 p-3 rounded-xl bg-purple-600 text-xl text-amber-400">
                            Create Random Playlist
                        </button>
                    </Link>
                </div>



                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 m-10 items-center justify-evenly">
                    <div
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-3xl font-bold text-purple-600">Playlist1 &rarr;</h3>
                        <div className="flex flex-1 flex-row items-center justify-evenly">
                            <div className={styles.tooltip}>
                                <span className={styles.tooltiptext}>Play Playlist</span>
                                <Link href="/playerpage">
                                    <button
                                        className="mt-4 p-3 rounded-xl bg-purple-600 text-xl text-amber-400"
                                    // onClick={() => setSongID(d.SongID, d.ThumbHttpPath)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>

                            <div className={styles.tooltip}>
                                <span className={styles.tooltiptext}>Edit Playlist</span>
                                <Link href="/playlisteditpage">
                                    <button
                                        className="mt-4 p-3 rounded-xl bg-purple-600 text-xl text-amber-400"
                                    // onClick={() => addSongToPlaylist(d.SongID)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>



                    <div
                        className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                    >
                        <h3 className="text-3xl font-bold text-purple-600">Playlist2 &rarr;</h3>
                        <div className="flex flex-1 flex-row items-center justify-evenly">
                            <div className={styles.tooltip}>
                                <span className={styles.tooltiptext}>Play Playlist</span>
                                <Link href="/playerpage">
                                    <button
                                        className="mt-4 p-3 rounded-xl bg-purple-600 text-xl text-amber-400"
                                    // onClick={() => setSongID(d.SongID, d.ThumbHttpPath)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-play-fill" viewBox="0 0 16 16">
                                            <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                            <div className={styles.tooltip}>
                                <span className={styles.tooltiptext}>Edit Playlist</span>
                                <Link href="/playlisteditpage">
                                    <button
                                        className="mt-4 p-3 rounded-xl bg-purple-600 text-xl text-amber-400"
                                    // onClick={() => addSongToPlaylist(d.SongID)}
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-pencil-fill" viewBox="0 0 16 16">
                                            <path d="M12.854.146a.5.5 0 0 0-.707 0L10.5 1.793 14.207 5.5l1.647-1.646a.5.5 0 0 0 0-.708l-3-3zm.646 6.061L9.793 2.5 3.293 9H3.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.207l6.5-6.5zm-7.468 7.468A.5.5 0 0 1 6 13.5V13h-.5a.5.5 0 0 1-.5-.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.5-.5V10h-.5a.499.499 0 0 1-.175-.032l-.179.178a.5.5 0 0 0-.11.168l-2 5a.5.5 0 0 0 .65.65l5-2a.5.5 0 0 0 .168-.11l.178-.178z" />
                                        </svg>
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </center>
        </Layout>
    )
}