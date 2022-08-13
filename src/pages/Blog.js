import { Link } from "react-router-dom";
import { Section } from "../components/common/CommonStyled";
import { Widget, SocialButton } from "../components/blog/BlogStyled";
import PagesHead from "../components/pagesHead/PagesHead";
import Button from "../components/button/Button";
import BlogCard from '../components/blog/BlogCard';
import BlogRecentPost from "../components/blog/BlogRecentPost";
import { BlogArchivesData, BlogCardData, BlogRecentPostData, BlogSocialData, BlogTagsData } from "../components/blog/BlogData";

const Blog = () => {
    return (
        <>
            <PagesHead
                title="Blogs"
                subTitle="Read our latest blogs"
            />

            <Section>
                <div className="container">
                    <div className="row justify-content-around gy-5">

                        <div className="col-lg-7">
                            {
                                BlogCardData.map((currValue) => (
                                    <BlogCard
                                        key={currValue.id}
                                        {...currValue}
                                    />
                                ))
                            }
                        </div>

                        <div className="col-lg-4">
                            <Widget>
                                <h6>Search</h6>
                                <div className="input_box d-flex">
                                    <input type="search" className="form-control" placeholder="Search..." />
                                    <Button btnText="Search" />
                                </div>
                            </Widget>

                            <Widget>
                                <h6>Social Links</h6>
                                <div className="d-flex flex-wrap justify-content-lg-between gap-4">
                                    {
                                        BlogSocialData.map((currValue) => {
                                            const { id, path, className, color } = currValue;
                                            return (
                                                <SocialButton to={path} color={color} key={id}>
                                                    <i className={className}></i>
                                                </SocialButton>
                                            );
                                        })
                                    }
                                </div>
                            </Widget>

                            <Widget>
                                <h6>Recent Posts</h6>
                                {
                                    BlogRecentPostData.map((currValue) => (
                                        <BlogRecentPost
                                            key={currValue.id}
                                            {...currValue}
                                        />
                                    ))
                                }
                            </Widget>

                            <Widget>
                                <h6>Archives</h6>
                                <ul>
                                    {
                                        BlogArchivesData.map((currValue) => {
                                            const { id, path, numbs, date } = currValue;
                                            return (
                                                <li className="archives_date" key={id}>
                                                    <Link to={path}>{date}</Link>
                                                    <span>({numbs})</span>
                                                </li>
                                            );
                                        })
                                    }
                                </ul>
                            </Widget>

                            <Widget>
                                <h6>Popular Tags</h6>
                                <div className="d-flex flex-wrap gap-2">
                                    {
                                        BlogTagsData.map((currValue) => {
                                            const { id, path, tag } = currValue;
                                            return (
                                                <Link to={path} className="tags" key={id}>
                                                    {tag}
                                                </Link>
                                            );
                                        })
                                    }
                                </div>
                            </Widget>
                        </div>

                    </div>
                </div>
            </Section>
        </>
    );
};

export default Blog;