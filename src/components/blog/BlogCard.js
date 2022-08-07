import { Link } from "react-router-dom";
import { BlogContentWrapper } from "./BlogStyled";
import Button from "../button/Button";

const BlogCard = (props) => {

    const { img, date, title, desc } = props;

    return (
        <>
            <BlogContentWrapper>
                <figure className="m-0">
                    <img src={img} className="w-100" alt="blog-img" />
                </figure>
                <div className="p-4">
                    <span>{date}</span>
                    <h2 className="my-3">
                        <Link to="/">{title}</Link>
                    </h2>
                    <p className="mb-4">{desc}</p>
                    <Button btnText="Read More" />
                </div>
            </BlogContentWrapper>
        </>
    );
};

export default BlogCard;