import Layout from "../components/layout"

function ShowSongSearch({ data }) {
    return (
        <Layout>
            <center>
                <div className="text-5xl text-white">show song search page</div>
            </center>
        </Layout>

  )
}

// export async function getServerSideProps() {
    //     const res = await fetch("http://192.168.0.91:9090/artistFirstLetter")
    //     const data = await res.json()
    //     return { props: { data } }
    // }

export default ShowSongSearch