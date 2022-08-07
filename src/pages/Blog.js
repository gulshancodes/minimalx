import { Link } from "react-router-dom";
import { Section } from "../components/common/CommonStyled";
import { Widget, SocialButton } from "../components/blog/BlogStyled";
import PagesHead from "../components/pagesHead/PagesHead";
import Button from "../components/button/Button";
import BlogCard from '../components/blog/BlogCard';
import BlogCardData from "../components/blog/BlogCardData";
import BlogRecentPost from "../components/blog/BlogRecentPost";
import BlogRecentPostData from "../components/blog/BlogRecentPostData";

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
                                    <SocialButton to="/" color="#DB4437">
                                        <i className="bi bi-google"></i>
                                    </SocialButton>
                                    <SocialButton to="/" color="#4267B2">
                                        <i className="bi bi-facebook"></i>
                                    </SocialButton>
                                    <SocialButton to="/" color="#00acee">
                                        <i className="bi bi-twitter"></i>
                                    </SocialButton>
                                    <SocialButton to="/" color="#fb3958">
                                        <i className="bi bi-instagram"></i>
                                    </SocialButton>
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
                                    <li className="archives_date">
                                        <Link to="/">January 2020</Link>
                                        <span>(2)</span>
                                    </li>
                                    <li className="archives_date">
                                        <Link to="/">August 2020</Link>
                                        <span>(5)</span>
                                    </li>
                                    <li className="archives_date">
                                        <Link to="/">February 2021</Link>
                                        <span>(4)</span>
                                    </li>
                                    <li className="archives_date">
                                        <Link to="/">October 2021</Link>
                                        <span>(8)</span>
                                    </li>
                                    <li className="archives_date">
                                        <Link to="/">March 2022</Link>
                                        <span>(7)</span>
                                    </li>
                                </ul>
                            </Widget>

                            <Widget>
                                <h6>Popular Tags</h6>
                                <div className="d-flex flex-wrap gap-2">
                                    <Link to="/" className="tags">Web Design</Link>
                                    <Link to="/" className="tags">Single Page App</Link>
                                    <Link to="/" className="tags">SEO Ranking</Link>
                                    <Link to="/" className="tags">Wordpress Site</Link>
                                    <Link to="/" className="tags">ECommerce</Link>
                                    <Link to="/" className="tags">Branding</Link>
                                    <Link to="/" className="tags">Affiliate Marketing</Link>
                                    <Link to="/" className="tags">Tech Support</Link>
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