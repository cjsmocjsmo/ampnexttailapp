import Link from 'next/link'
import Layout from '../components/layout'

function Song({ data }) {

    function setFirstLetterID(flid) {
        const url = "http://192.168.0.91:9090/updatesongfirstletterid" + flid
        fetch(url)
    }

    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">Song</div>
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 m-10 items-center justify-evenly">
                    {
                        data.map((d) => (
                            <Link
                                key={d._id}
                                id={d.firstletterid}
                                className="m-4 text-3xl text-green-600"
                                href="songsforsongpage"
                                onClick={() => setFirstLetterID(d.firstletterid)}
                            >
                                {d.firstletter}
                            </Link>
                        ))
                    }
                </div>
            </center>
        </Layout>
    )
}

export async function getServerSideProps() {
    const res = await fetch("http://192.168.0.91:9090/songFirstLetter")
    const data = await res.json()
    return { props: { data } }
}

export default Song

