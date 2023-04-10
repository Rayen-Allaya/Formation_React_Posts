import Button from "../ui/Button";
import Post from "./Post"

const posts = [
    { id: "m1", title: "React", description: "react is easy" },
    { id: "m2", title: "Javascript", description: "js is awesome" },
]

function Feed() {

    let loggedIn = false;

    return (
        <section className="d-flex justify-content-center align-items-center flex-column my-3">
            {loggedIn ?
                <button className="btn btn-danger" onClick={logoutHandler}>Logout</button> :
                <button className="btn btn-primary" onClick={loginHandler}>Login</button>}
            {!loggedIn && <h1>You are not Logged In</h1>}
            {loggedIn &&
                <div className="d-flex justify-content-center align-items-center flex-column">
                    {posts.map(
                        (post) => {
                            return (
                                <Post key={post.id} title={post.title} description={post.description} />
                            )
                        }
                    )}
                </div>
            }
        </section>
    )
}

export default Feed;