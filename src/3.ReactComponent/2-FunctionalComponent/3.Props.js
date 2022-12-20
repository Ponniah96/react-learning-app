import "../../App.css";

export default function FunctionalComponentProps(props){
    return(
        <div>
            <p>2.React Functional Component Props</p>
            <p>Name: {props.name}</p>
            <p>Age:  {props.age}</p>
        </div>
    )
}