import Link from 'next/link';
import Layout from '../components/layout';

function ArtistsForArtistPage({ data2 }) {

    function setArtistId(aid) {
        const url = "http://192.168.0.34:9090/updateartistid?artid=" + aid
        fetch(url)
    }

    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">Artist</div>
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 m-10 items-center justify-evenly">
                    {
                        data2
                            ?
                            data2.map((d) => (
                                <Link
                                    href="/albumsforartistpage"
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
            </center>
        </Layout>
    )
}

export async function getServerSideProps() {
    function newaddr(a1) {
       const url11 = 'http://192.168.0.34:9090/artistsForFirstLetter?firstletter=' + a1[5, 6]
        const url12 = "http://192.168.0.34:9090/updateartistsforfirstletterurl?url=" + url11
        return url12
    }

    const res = await fetch("http://192.168.0.34:9090/getartistfirstletterid")
    const data = await res.json()
    const url = await newaddr(data)
    const res2 = await fetch(url)

    const res3 = await fetch("http://192.168.0.34:9090/getartistsforfirstletterurl")
    const aurl = await res3.json()
    const res4 = await fetch(aurl)
    const data2 = await res4.json()
    return { props: { data2 } }
}

export default ArtistsForArtistPage