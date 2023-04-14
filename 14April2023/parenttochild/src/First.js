import Second from "./Second";

function First(props) {
    return (
        <div>
            <h1>First</h1>
            <Second data={props.data}></Second>
        </div>
    )
}

export default First;