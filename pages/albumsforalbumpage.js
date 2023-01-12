import Link from 'next/link';
import Image from 'next/image';
import Layout from '../components/layout';

function AlbumsForAlbumPage({ data }) {

    function setSelectedAlbumID(albid) {
        const url = "http://192.168.0.34:9090/updateselectedalbumid?selalbid=" + albid
        fetch(url)
    }

    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">Albums</div>
                <div className="grid xxsm:grid-cols-1 sm:grid-cols-3 md:grid-cols-6 lg:grid-cols-4 xl:grid-cols-8 gap=2 m-10 items-center justify-evenly">

                    {
                        data
                            ?
                            data.map((d) => (
                                <div className='m-5'>
                                    <Link href="songsforalbumpage" key={d._id} onClick={() => setSelectedAlbumID(d.AlbumID)}>
                                        <Image id={d.AlbumID} src={d.ThumbHttpPath} alt={d.Album} width="120" height="120" />
                                    </Link>
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
    const foo = await fetch("http://192.168.0.34:9090/getalbumfirstletterid")
    const aid = await foo.json()
    const url = 'http://192.168.0.34:9090/albumsForFirstLetter?firstletter=' + aid[4, 5]
    const url2 = "http://192.168.0.34:9090/updatealbumsforfirstletterurl?url=" + url
    const d = await fetch(url2)
    const res = await fetch("http://192.168.0.34:9090/getalbumsforfirstletterurl")
    const addr = await res.json()
    const data1 = await fetch(addr)
    const data = await data1.json()
    return { props: { data } }
}

export default AlbumsForAlbumPage