import CardPlayButton from "./cardplaybutton"
import CardEditButton from "./cardeditbutton"
import CardDeleteButton from "./carddeletebutton"

export default function Card(props) {
    console.log(props.data)

    return (
        <>
            {
                props.data
                    ?
                    props.data.map((d) => (
                        <div key={d.PlayListID}
                            className="mt-6 w-96 rounded-xl border p-6 text-left hover:text-blue-600 focus:text-blue-600"
                        >
                            <h3 className="text-3xl font-bold text-purple-600">{d.PlayListName} &rarr;</h3>
                            <div className="flex flex-1 flex-row items-center justify-evenly">
                                <CardPlayButton />
                                <CardEditButton />
                                <CardDeleteButton myid={d.PlayListID} />
                            </div>
                        </div>
                    ))
                    :
                    <h1></h1>
            }
        </>
    )
}