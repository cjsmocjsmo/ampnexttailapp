// import useSWR from 'swr'
// import { useEffect, useState } from 'react'
import Image from 'next/image'

// const fetcher = (...args) => fetch(...args).then(res => res.json())

export default function AlbumsForAlbumComp() {

    // const [Url, setUrl] = useState(null)
    // const { data, error, isLoading } = useSWR(Url, fetcher)

    // console.log(data)

    // useEffect(() => {
    //     let foo = localStorage.getItem('albumsForFirstLetterURL');
    //     setUrl(foo)
    // }, []);

    // if (error) return <div>failed to load</div>
    // if (isLoading) return <div>loading...</div>

    return (
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8 m-10 items-center justify-evenly">

            {
                data
                ?
                data.map((d) => (
                    <div className='m-5'>
                        <a href="/songsforalbumpage" key={d._id} onClick={() => localStorage.setItem("selectedAlbumID", d.AlbumID)} >
                            <Image src={d.ThumbHttpPath} width="120" height="120" />
                        </a>
                    </div>
                ))
                :
                <h1></h1>
            }
        </div>
    )
}