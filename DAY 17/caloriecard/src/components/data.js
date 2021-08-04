const List = ({data}) =>{
    // console.log(data)
    return (
        <>
        { data.map(({name, cal}, index)=>(
            <div key={ index } className='cards' >
            <h2>{name}</h2>
            <p> THIS CONTAINS {cal} CALORIES</p>
            </div>
        ))}
        </>
    );
}
export default List;

    © 2021 GitHub, Inc.
    Terms
    Privacy
    Security