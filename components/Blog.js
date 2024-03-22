import Image from 'next/image'
import moment from 'moment';
import classNames from "classnames";


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
      darkColor: `${darkColor}-800`,
      ringColor: `${darkColor}-400`,
    };
  }




  export function Tag({ children , className}) {
    const { lightColor, darkColor } = generateTagColors();

    return (
      <span className={classNames(`bg-${lightColor} text-${darkColor} py-1 px-3 ring-1 rounded-2xl flex justify-center items-center`, className)}>
        {children}
      </span>
    );
  }

export function BlogHero() {
    return (
        <div className="h-[288px] flex justify-center items-center flex-col w-full bg-white">
            <span className="text-[#6941C6] md:text-2xl text-xl">Our Blog</span>
            <h2 className="text-[#101828] md:text-[3.75rem] text-center text-[2.75rem] leading-[3rem] capitalize">Stories and interviews</h2>
        </div>
    )
}

export function createExcerpt(text, minWords = 12) {
    const words = text.split(' ');
    let excerpt = words.slice(0, minWords).join(' ');

    if (words.length > minWords && excerpt.split(' ').length < minWords) {
      for (let i = minWords; i < words.length; i++) {
        excerpt += " " + words[i];
        if (excerpt.split(' ').length >= minWords) {
          break;
        }
      }
    }

    excerpt += '...';
    return excerpt;
  }

export function BlogList({ posts }) {
    function formatDate(date) {
        const format = moment(date)

        return format.format("MMMM DD, YYYY");
    }
    return (
       <section className='px-[1.25rem] lg:px-[8rem]'>
            <h2 className='text-[#101828] text-[2rem] mb-8'>All blog posts</h2>
         <div className="grid md:grid-cols-3 grid-cols-1 w-full gap-x-8 gap-y-12 mb-24">
            {posts.map((data, index) => (
                <div key={index} className="">
                <div className="mb-6">
                    <Image src={data.featuredImage ? data.featuredImage.node.sourceUrl : ""} className='w-full object-cover' alt={data.title} width={384} height={240} />
                </div>
                <div className="w-full">
                    <span className="text-sm text-[#6941C6] leading-3">{data.author.node.name} • {formatDate(data.date)}</span>
                    <div className="flex w-full justify-between items-center my-2">
                        <h4 className="text-[#101828] text-2xl basis-[80%]">{data.title}</h4>
                       <div className='basis-[10%]'>
                        <Image width={24} height={24} src="/arrow-icon.svg" />
                       </div>
                    </div>
                    <p className='text-[#2D2D2D]' dangerouslySetInnerHTML={{ __html: createExcerpt(data.excerpt) }}></p>
                    <div className="mt-6">
                        <div className="flex gap-x-2">
                            {data.categories.nodes.map((category, index) => <Tag key={index}>{category.name}</Tag>)}
                        </div>
                    </div>
                </div>
            </div>
            ))}
        </div>
       </section>
    )
}
