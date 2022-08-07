import { Link } from "react-router-dom";


const BlogRecentPost = (props) => {
    return (
        <>
            <div className="row mb-3">
                <div className="col-6">
                    <Link to="/">
                        <img src={props.img} alt="blog-img" />
                    </Link>
                </div>
                <div className="col-6">
                    <Link to="/">{props.title}</Link>
                    <br />
                    <small className="text-muted">{props.date}</small>
                </div>
            </div>
        </>
    )
}

export default BlogRecentPost;