import { Container } from './Container';
import Image from 'next/image'
import moment from "moment";
import {createExcerpt} from "./Blog";
import Link from 'next/link'

const colorNames = [
    "red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple",
    "pink", "gray",
    "fuchsia", "lime", "emerald", "cyan", "sky", "violet",
  ];

function generateTagColors() {
    let lightColor, darkColor;
    do {
      lightColor = colorNames[Math.floor(Math.random() * colorNames.length)];
      darkColor = colorNames[Math.floor(Math.random() * colorNames.length)];
    } while (lightColor === darkColor || darkColor === "white" || lightColor === "black");

    return {
      lightColor: `${darkColor}-200`,
      darkColor: `${darkColor}-800`
    };
  }




  function Tag({ children }) {
    const { lightColor, darkColor } = generateTagColors();

    return (
      <span className={`bg-${lightColor} text-${darkColor} py-1 px-3 leading-none rounded-2xl flex justify-center items-center`}>
        {children}
      </span>
    );
  }

export function BlogHero({post}) {
    function formatDate(date) {
        const format = moment(date)

        return format.format("MMMM DD, YYYY");
    }

    return (
        <Container>
            <div className="min-h-[288px] flex justify-center items-center flex-col w-full bg-white">
                <span className="text-[#6941C6] md:text-2xl text-sm mb-3">Published {formatDate(post.date)}</span>
                <h2 className="text-[#101828] md:text-[3.75rem] font-Satoshi font-[900] text-center text-[2.75rem] leading-[60px] capitalize">{post.title}</h2>
                <p className="font-Inter md:text-3xl text-[28px] mb-[2.5rem] text-center mt-6" dangerouslySetInnerHTML={{__html: createExcerpt(post?.excerpt)}} />
                <div className="flex gap-x-2">
                    {post?.tags.nodes.map((tag, index) => <Tag className="bg-none" key={index}>{tag.name}</Tag>)}
                </div>
            </div>
        </Container>
    )
}


export function BlogList({ posts }) {
    function formatDate(date) {
        const format = moment(date)

        return format.format("MMMM DD, YYYY");
    }
    return (
       <Container>
            <h2 className='text-[#101828] text-[2rem] mb-8 mt-24'>From the blog</h2>
            <p className="text-[#475467] text-xl mt-5 mb-16">The latest industry news, interviews, technologies, and resources.</p>
         <div className="grid md:grid-cols-2 grid-cols-1 w-full gap-x-8 gap-y-16 mb-24">
            {posts.map((data, index) => (
                <div className="" key={index}>
                <div className="mb-6 relative">
                    <Image width={592} height={280} src={data.featuredImage ? data.featuredImage.node.sourceUrl : ""} className='w-full object-cover' alt="Feature One" />
                    <div className="backdrop-filter backdrop-blur absolute w-full top-[64%] flex justify-between items-center left-0 h-[88px] px-6">
                      <div className='w-full h-full bg-black opacity-20 absolute left-0 top-0 -z-10' />
                        <div className="text-white ">
                            <p className="text-sm font-semibold">{data.name}</p>
                            <p className="text-sm">{formatDate(data.date)}</p>
                        </div>
                        <p className="text-white">{data?.tags.nodes[0]?.name ?? 'design'}</p>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex w-full justify-between items-center my-2 pt-10 md:pt-0">
                        <h4 className="text-[#000000] text-2xl">{data.title}</h4>
                    </div>
                    <p className='text-[#2D2D2D]' dangerouslySetInnerHTML={{ __html: createExcerpt(data.excerpt) }} />
                    <Link href={`/${data.slug}`} >
                       <div className="text-sm cursor-pointer flex  gap-2 items-center text-[#6941C6] mt-6">
                           <span> Read post</span>
                        <Image width={8} className='ml-2' height={8} src="/purple-arrow.svg" />
                       </div>
                    </Link>
                </div>
            </div>
            ))}
        </div>
        <div className="bg-[#EAECF0] w-full h-[1px] mt-24"></div>
        <div className="ml-auto w-fit mt-4 mb-24">
                <Link href="/blog" className="">
                    <div className="text-white bg-[#8959FF] rounded-[8px] px-[20px] py-[12px] text-center cursor-pointer">
                        View all post
                    </div>
                </Link>
        </div>
       </Container>
    )
}

function Button({ children, size, onClick }) {

    return (
      <button className={`all-[unset] box-border flex ${size === "sm" ? "w-full lg:w-[183.58px] h-[52px]" : 'w-full lg:w-[304px] h-[54px]'} items-center justify-center pt-[6px] pb-[8px] px-[14px] bg-[#8959ff] rounded-[8px] overflow-hidden`} onClick={onClick}>
      <div className="relative w-fit [font-family:'Inter-SemiBold',Helvetica] font-semibold text-white text-[18px] tracking-[0] leading-[24px] whitespace-nowrap">
        {children}
      </div>
    </button>
    );
  }


export function ArticleBottom({ article }) {

  function formatDate(date) {
    const format = moment(date)

    return format.format("MMMM DD, YYYY");
}

  return (
    <div className="flex md:flex-row flex-col justify-between md:items-center items-left mt-6">
                <div className="flex">
                    <Image className='rounded-full' width={56} height={56} src={article.author.node.avatar.url} alt="Avatar" />
                    <div className="ml-4">
                        <h4 className="text-[#101828] text-lg">{article.author.node.name}</h4>
                        <p className="text-[#475467]">{formatDate(article.date)}</p>
                    </div>
                </div>
                <div className="flex gap-3 md:mt-0 mt-4">
                    <button className="border border-[#D0D5DD] text-sm bg-white text-[#344054] rounded-lg w-[7.68rem] h-10 flex justify-center items-center">
                    <div className='mr-2'>
                        <Image width={20} height={20} src='/copy.svg' className='mr-2' />
                    </div>
                        Copy Link
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-white flex justify-center items-center border border-[#D0D5DD]">
                        <Image width={20} height={20} src="/twit.svg" />
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-white flex justify-center items-center border border-[#D0D5DD]">
                        <Image width={20} height={20} src="/face.svg" />
                    </button>
                    <button className="w-10 h-10 rounded-lg bg-white flex justify-center items-center border border-[#D0D5DD]">
                        <Image width={20} height={20} src="/linked.svg" />
                    </button>
                </div>
            </div>
  )
}
