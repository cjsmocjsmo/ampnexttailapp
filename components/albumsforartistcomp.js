import Link from 'next/link'
import Image from 'next/image'

export default function AlbumsForArtistComp(props) {

    function setSelectedAlbumID(albid) {
        const url = "http://192.168.0.91:9090/updateselectedalbumid?selalbid=" + albid
        fetch(url)
    }

    return (

        <div className="grid xxsm:grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-8 gap=2 m-10 items-center justify-evenly">

            {
                props.data
                    ?
                    props.data.map((d) => (
                        <div key={d.albumID} className='m-5'>
                            <Link
                                href="songsforalbumpage"
                                key={d.albumID}
                                onClick={() => setSelectedAlbumID(d.albumID)}
                            >

                                <Image
                                    key={d.albumID}
                                    id={d.albumID}
                                    src={d.thumbhttppath}
                                    alt={d.album}
                                    width="120"
                                    height="120"
                                />
                            </Link>
                        </div>
                    ))
                    :
                    <h1></h1>
            }
        </div>
    )
}