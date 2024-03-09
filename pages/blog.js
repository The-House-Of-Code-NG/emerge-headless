import {Footer} from "../components/Footer";
import {Header} from "../components/Header";
import { BlogFeatured, BlogHero, BlogList, SignupForms } from "../components/Blog";
import { posts } from "../data/posts";


export default function Blog() {
    return (
        <>
            <Header />
                <BlogHero />
                <BlogFeatured />
                <BlogList posts={posts} />
                <SignupForms />
            <Footer />
        </>
    )
}
