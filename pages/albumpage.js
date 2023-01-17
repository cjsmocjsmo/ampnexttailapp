import Link from 'next/link';
import Layout from '../components/layout';

function Album({ data }) {

    function setAlbumFirstLetterID(aflid) {
        const u = "http://192.168.0.91:9090/updatealbumfirstletterid?albid=" + aflid
        const url = encodeURI(u)
        fetch(url)
    }

    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">Album</div>
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 m-10 items-center justify-evenly">
                    {
                        data
                            ?
                            data.map((d) => (
                                <Link
                                    href="/albumpage2"
                                    key={d._id}
                                    id={d.firstletterid}
                                    onClick={() => setAlbumFirstLetterID(d.firstletterid)}
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
    const res = await fetch("http://192.168.0.91:9090/albumFirstLetter")
    const data = await res.json()
    return { props: { data } }
}

export default Album