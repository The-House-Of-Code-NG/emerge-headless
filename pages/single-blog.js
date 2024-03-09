import Footer from "../components/Footer";
import Navbar from "../components/Header";
import { BlogHero, BlogList, BlogContent, SignupForms } from "../components/SingleBlog";
import { posts } from "../data/posts";


export default function Blog() {
    return (
        <>
            <Navbar />
                <BlogHero />
                <BlogContent />
                <BlogList posts={posts} />
                <SignupForms />
                
            <Footer />
        </>
    )
}
