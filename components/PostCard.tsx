import Link from "next/link";
import { Post } from "../typings";
import { urlForAuthorImage, urlForMainImage } from "../sanity";

interface Props {
    post: Post;
}

function PostCard({ post }: Props) {
    return (
        <Link key={post._id} href={`/post/${post.slug.current}`}>
            <div className="border rounded-lg group cursor-pointer overflow-hidden">
                <img
                    className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                    src={urlForMainImage(post.mainImage).url()}
                    alt=""
                />
                <div className="flex justify-between p-5 bg-white">
                    <div>
                        <p className="text-lg font-bold">{post.title}</p>
                        <p className="text-xs">
                            {post.description} by {post.author.name}
                        </p>
                    </div>
                    <img
                        className="h-12 w-12 rounded-full "
                        src={urlForAuthorImage(post.author.image).url()!}
                        alt=""
                    />
                </div>
            </div>
        </Link>
    );
}

export default PostCard;
