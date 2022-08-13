import { Link } from "react-router-dom";

const BlogRecentPost = (props) => {

    const { img, title, date } = props;

    return (
        <>
            <div className="row mb-3">
                <div className="col-6">
                    <Link to="/">
                        <img src={img} alt="blog-img" />
                    </Link>
                </div>
                <div className="col-6">
                    <Link to="/">{title}</Link>
                    <br />
                    <small className="text-muted">{date}</small>
                </div>
            </div>
        </>
    );
};

export default BlogRecentPost;