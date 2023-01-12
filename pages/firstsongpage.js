import Link from 'next/link'
import Layout from '../components/layout'

function Song({ data }) {

    function setFirstLetterID(flid) {
        const url = "http://192.168.0.34:9090/updatesongfirstletterid" + flid
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
                                href="songsforsongpage"
                                key={d._id}
                                id={d.firstletterid}
                                onClick={() => setFirstLetterID(d.firstletterid)}
                                className="m-4 text-3xl text-green-600">
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
    const res = await fetch("http://192.168.0.34:9090/songFirstLetter")
    const data = await res.json()
    return { props: { data } }
}

export default Song

