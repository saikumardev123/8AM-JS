import { useState } from 'react';
function SearchBar(props) {
    const [search, setSearch] = useState({
        term: ''
    })

    const searchVideo = (event) => {
        event.preventDefault();
        console.log(search.term);
        props.onSearchTerm(search.term);
    }

    return (
        <div>
            <br></br> <br></br>
            <form>
                <input onChange={
                    (event) => {
                        setSearch({ term: event.target.value })
                    }
                } style={{ padding: "10px", border: "2px solid black" }} size="60" type="text" placeholder="enter your search"></input> <button onClick={searchVideo} style={{ padding: "10px", width: "130px" }}>Search</button>

                <br></br><br></br>
            </form>
        </div>
    )

}
export default SearchBar;