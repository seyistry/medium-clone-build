import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PostCard from "../components/PostCard";
import { sanityClient } from "../sanity";
import { Post } from "../typings";

interface Props {
    posts: [Post];
}
export default function Home({ posts }: Props) {
    return (
        <div className="max-w-7xl mx-auto">
            <Head>
                <title>Medium Blog</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <Hero />

            {/* Post */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 p-2 lg:p-6">
                {posts.map((post) => (
                    <PostCard key={post._id} post={post} />
                ))}
            </div>
        </div>
    );
}

export const getServerSideProps = async () => {
    const query = `*[ _type == "post" ]{
        _id,
        title,
        slug,
        author -> {
            name, 
            image 
        },
        description,
        mainImage,
    }`;
    const posts = await sanityClient.fetch(query);
    return {
        props: {
            posts,
        },
    };
};
// export default Home;
