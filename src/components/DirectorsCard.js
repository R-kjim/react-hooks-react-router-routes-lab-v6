export default function DirectorsCard({directors}){
    const directorsList=directors.map((director)=>{
        return (
            <article key={director.id}>
                <h2>{director.name}</h2>
                <ul>
                    Movies List
                   <ul> {director.movies.map((movie,index)=>{
                    return <li key={index}>{movie}</li>
                   })}</ul>
                </ul>
            </article>
        )
    })

    return (
        <>
        {directorsList}
        </>
    )

}