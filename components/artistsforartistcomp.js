
import Link from 'next/link'

export default function ArtistsForArtistComp(props) {

    function setArtistId(aid) {
        const url = "http://192.168.0.91:9090/updateartistid?artid=" + aid
        fetch(url)
    }

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 m-10 items-center justify-evenly">
            {
                props.data
                    ?
                    props.data.map((d) => (
                        <Link
                            href="/artistpage3"
                            key={d._id}
                            id={d.artistid}
                            onClick={() => setArtistId(d.artistid)}
                            className="m-4 text-3xl text-green-600"
                        >
                            {d.artist}
                        </Link>
                    ))
                    :
                    <h1></h1>
            }
        </div>
    )
}


