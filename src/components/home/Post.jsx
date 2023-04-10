import Button from "../ui/Button";
import classes from "./Post.module.css"

// const buttonClasses = [
//     { class: 'btn btn-success', text: "Like" },
//     { class: 'btn btn-danger', text: "Dislike" },
//     { class: 'btn btn-primary', text: "Share" },
// ]

// {
//     buttonClasses.map(
//         (button) => {
//             return (<Button className={"mx-3 " + button.class} >{button.text}</Button>)
//         }
//     )
// }


function Post(props) {
    const title = props.title;
    const description = props.description;
    return (
        <div className={classes.card}>
            <h1>{title}</h1>
            <p>{description}</p>
            <div className="d-flex justify-content-around py-3">
                <Button color="blue" >Like</Button>
                <Button color="red">Dislike</Button>
                <Button color="green">Share</Button>
            </div>
        </div>
    );
}

export default Post;