import Link from 'next/link'
import Image from 'next/image'

export default function AlbumsForAlbumComp(props) {

    function setSelectedAlbumID(albid) {
        const url = "http://192.168.0.34:9090/updateselectedalbumid?selalbid=" + encodeURIComponent(albid) 
        fetch(url)
    }

    console.log(props)

    return (

        <div className="grid xxsm:grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-8 gap=2 m-10 items-center justify-evenly">

            {
                props.data
                    ?
                    props.data.map((d) => (
                        <div key={d._id} className='m-5'>
                            <Link
                                href="songsforalbumpage"
                                key={d._id}
                                onClick={() => setSelectedAlbumID(d.AlbumID)}
                            >
                                <Image
                                    key={d._id}
                                    id={d.AlbumID}
                                    src={d.ThumbHttpPath}
                                    alt={d.Album}
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