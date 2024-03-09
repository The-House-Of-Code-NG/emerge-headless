import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import { BlogHero, BlogList, BlogContent, SignupForms } from "../components/SingleBlog";
import { posts } from "../data/posts";


export default function SingleBlog() {
    return (
        <>
            <Header />
                <BlogHero />
                <BlogContent /> 
                <BlogList posts={posts} />
                <SignupForms />
                
            <Footer /> 
        </>
    )
}
