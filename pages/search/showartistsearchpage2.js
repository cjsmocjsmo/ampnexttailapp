import Image from "next/image"
import Link from "next/link"
import Layout from "../../components/layout"

function ShowArtistSearchPage2({ data }) {

    function setSelectedAlbumID(albid) {
        const u = "http://192.168.0.91:9090/updateselectedalbumid?selalbid=" + albid
        const url = encodeURI(u)
        fetch(url)
    }


    return (
        <Layout>
            <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 m-10 items-center justify-evenly">
                {
                    data
                        ?
                        data.map((d) => (
                            <div key={d.albumID} className='m-5'>
                                <Link
                                    href="/songsforalbumpage"
                                    key={d._id}
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
        </Layout>

    )
}

export async function getServerSideProps() {
    const myUrl = (id) => {
        const url = "http://192.168.0.91:9090/albumsForArtist?selected=" + id
        return encodeURI(url)
    }
    const arid = await fetch("http://192.168.0.91:9090/getartistid")
    const artid = await arid.json()
    const eurl = await myUrl(artid)
    const d = await fetch(eurl)
    const data = await d.json()
    return { props: { data } }
}

export default ShowArtistSearchPage2