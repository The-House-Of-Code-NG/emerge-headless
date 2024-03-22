import {gql, useQuery} from "@apollo/client";
import Image from "next/image";
import moment from "moment/moment";
import {createExcerpt, Tag} from "../components/Blog";
import Link from 'next/link'

const GET_POSTS = gql`
    query GetPosts {
    posts(first: 3) {
      nodes {
        id
        title
        slug
        date
        excerpt
        featuredImage {
            node {
            altText
            id
            sourceUrl
            }
        }
        categories {
            nodes {
            name
            id
            }
        }
        author {
            node {
            id
            slug
            avatar {
                url
            }
            description
            name
            }
        }
        tags {
            nodes {
            name
            slug
            id
            }
        }
      } 
    }
  }
`;

export default function EmergeHomepagePosts( props ) {
    const {data, loading} = useQuery(GET_POSTS)

    function formatDate(date) {
        const format = moment(date)

        return format.format("MMMM DD, YYYY");
    }


    return (
        <section
            className="bg-gradient-to-t pt-12 pb-24 from-[#F4F0FF] via-white to-transparent
              w-full px-[1.25rem] lg:px-[8rem] overflow-hidden"
        >
            <div className="flex flex-col items-center w-full">
                <div className="font-Inter text-left font-Inter text-[#100650] font-medium uppercase min-h-[36px] bg-opacity-5 bg-[#4A00FF0F] px-2.5 rounded-[6px] py-2 w-fit">
                    Our blog
                </div>
                <div className="flex flex-row items-center mt-4">
                    <h1 className="font-Satoshi font-bold text-black text-[42px] text-center">
                        Latest News & Updates
                    </h1>
                </div>
                <div className="grid grid-col-1 md:grid-cols-3 auto-cols-fr mt-14 gap-8">
                    {!loading && data?.posts?.nodes?.length > 0 && data?.posts?.nodes?.map(post => {
                        return (
                            <Link href={post?.slug} className="cursor-pointer">
                                <div className="flex flex-col cursor-pointer">
                                    <div className="rounded-[16px] mb-6">
                                        <Image src={post.featuredImage ? post.featuredImage.node.sourceUrl : ""} className='w-full aspect-w-16 aspect-h-10 object-cover' alt={data.title} width={384} height={240} />
                                    </div>
                                    <div className="flex gap-x-2">
                                        {post?.tags.nodes.map((tag, index) => <Tag className="bg-none" key={index}>{tag.name}</Tag>)}
                                    </div>
                                    <span className="text-sm text-[#6941C6] font-Inter ">{post?.tags[0]}</span>
                                    <div className="flex flex-row items-center justify-between mt-2">
                                        <h3 className="text-2xl font-semibold text-[#101828] font-Inter">{createExcerpt(post?.title, 7)}</h3>
                                        <div className="w-1/5">
                                            <svg className="w-[24px] h-[24px]" width="24" height="28" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M7 21L17 11M17 11H7M17 11V21" stroke="#101828" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <article className="font-Inter text-[#475467] text-sm mt-2" dangerouslySetInnerHTML={{__html: createExcerpt(post?.excerpt)}} />
                                    <div className="flex flex-row mt-6">
                                        <img src={post?.author?.node?.avatar?.url} className="w-[40px] h-[40px] rounded-full aspect-1" />
                                        <div className="font-Inter flex flex-col ml-3">
                                            <span className="text-[#101828] font-Inter font-semibold text-sm">{post?.author?.node?.name}</span>
                                            <span className="text-[#475467] text-sm">{formatDate(post.date)}</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}



EmergeHomepagePosts.fragments = {
    entry: gql`
    fragment EmergeHomepagePostsFragment on EmergeBlocksHomepagePosts {
        name
    }
  `,
    key: `EmergeHomepagePostsFragment`,
};

EmergeHomepagePosts.displayName = 'EmergeBlocksHomepagePosts'
