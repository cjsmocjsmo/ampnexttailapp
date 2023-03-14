import Layout from "../../components/layout"
import Card from "../../components/card"
import CreatePlaylistButtonGroup from "../../components/createplaylistbuttongroup"

function PlayListMainPage({ data }) {
    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">Playlists</div>
                <CreatePlaylistButtonGroup />
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 m-10 items-center justify-evenly">
                    {
                        data
                            ?
                            data.map((d) => (
                                <Card key={d.PlayListID} id={d.PlayListID} data={data} />

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
    const plists = await fetch("http://192.168.0.91:9090/allplaylists")
    const data = await plists.json()


    return { props: { data } }
}

export default PlayListMainPage