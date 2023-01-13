import Image from 'next/image'
import Layout from '../components/layout'

function AlbumsForArtistPage({ data2 }) {

    function setSelectedAlbumID(albid) {
        const url = "http://192.168.0.34:9090/updateselectedalbumid?selalbid=" + albid
        fetch(url)
    }

    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">Artist</div>
                <div className="grid xxsm:grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-8 gap=2 m-10 items-center justify-evenly">

                    {
                        data2
                            ?
                            data2.map((d) => (
                                <div className='m-5'>
                                    <a href="songsforalbumpage" key={d._id} onClick={() => setSelectedAlbumID(d.albumID)}>
                                        <Image id={d.albumID} src={d.thumbhttppath} alt={d.album} width="120" height="120" />
                                    </a>
                                </div>
                            ))
                            :
                            <h1></h1>
                    }
                </div>
            </center>
        </Layout>
    )
}

export async function getServerSideProps() {
    function newaddr(artid) {
        const url1 = "http://192.168.0.34:9090/albumsForArtist?selected=" + artid
        const url2 = "http://192.168.0.34:9090/updatealbumsforartisturl?url=" + url1
        return url2
    }
    const data = await fetch("http://192.168.0.34:9090/getartistid")
    const artid = await data.json()
    const url2 = await newaddr(artid)

    const res = await fetch(url2)

    const res2 = await fetch("http://192.168.0.34:9090/getalbumsforartisturl")
    const aurl = await res2.json()
    const res3 = await fetch(aurl)
    const data2 = await res3.json()
    return { props: { data2 } }
}

export default AlbumsForArtistPage