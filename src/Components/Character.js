const Character = (props) => {
    return (
        <article>
            <h2>{props.name}</h2>
            <img src={props.img} alt="img"/>
            <div>
                <span>Status: {props.status}</span>
                <br />
                <span>Specie: {props.specie}</span>
            </div>
        </article>
    );
}
export default Character;