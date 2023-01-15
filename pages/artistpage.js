import Link from 'next/link';
import Layout from '../components/layout';

function Artist({ data }) {

    function updateArtistFirstLetterID(artflid) {
        const url = "http://192.168.0.91:9090/updateartistfirstletterid?artflid=" + artflid
        fetch(url)
    }

    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">Artist</div>
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 m-10 items-center justify-evenly">
                    {
                        data
                            ?
                            data.map((d) => (
                                <Link
                                    href="/artistpage2"
                                    key={d._id}
                                    id={d.firstletterid}
                                    onClick={() => updateArtistFirstLetterID(d.firstletterid)}
                                    className="m-4 text-3xl text-green-600"
                                >
                                    {d.firstletter}
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
    const res = await fetch("http://192.168.0.91:9090/artistFirstLetter")
    const data = await res.json()
    return { props: { data } }
}

export default Artist