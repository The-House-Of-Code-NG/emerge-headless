import FeatureImageOne from '../assets/blog/feature-1.svg'
import FeatureImageTwo from '../assets/blog/feature-2.svg'
import ArrowIcon from '../assets/blog/arrow-icon.svg'
import signupimage from '../assets/black-afro.png'
import vector from '../assets/Vector(2).svg'
import { Container } from './Container';
import Image from 'next/image'
import moment from 'moment';


const colorNames = [
    "red", "orange", "yellow", "green", "teal", "blue", "indigo", "purple", 
    "pink", "gray", 
    "fuchsia", "lime", "emerald", "cyan", "sky", "violet", 
  ]; 
  
  

function generateTagColors() {
    // Randomly select two colors (ensuring contrast)
    let lightColor, darkColor;
    do {
      lightColor = colorNames[Math.floor(Math.random() * colorNames.length)];
      darkColor = colorNames[Math.floor(Math.random() * colorNames.length)];
    } while (lightColor === darkColor || darkColor === "white" || lightColor === "black");
  
    // Apply Tailwind opacity classes
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

export function BlogHero() {
    return (
        <div className="h-[288px] flex justify-center items-center flex-col w-full bg-white">
            <span className="text-[#6941C6] md:text-2xl text-xl">Our Blog</span>
            <h2 className="text-[#101828] md:text-[3.75rem] text-center text-[2.75rem] leading-[3rem] capitalize">Stories and interviews</h2>
        </div>
    )
}

export function BlogFeatured() {
    return (
       <Container>
             <div className="grid md:grid-cols-2 grid-cols-1 md:gap-x-8 gap-y-12 w-full mb-[6rem]">
            <div className="">
                <div className="mb-6">
                    <Image src={FeatureImageOne} height={60} className='h-[60px] w-full object-cover rounded-br-[16px] rounded-bl-[16px]' />
                </div>
                <div className="w-full">
                    <span className="text-xl text-[#6941C6] leading-3">Olivia Rhye • 20 Jan 2024</span>
                    <div className="flex w-full justify-between items-center my-2">
                        <h4 className="text-[#101828]">UX review presentations</h4>
                        <Image src={ArrowIcon} />
                    </div>
                    <p className='text-[#2D2D2D] text-2xl'>How do you create compelling presentations that wow your colleagues and impress your managers?</p>
                    <div className="mt-6">
                        <div className="flex gap-x-2">
                            <Tag>Design</Tag>
                            <Tag>Research</Tag>
                            <Tag>Presentation</Tag>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex pt-[1.75rem] w-full">
                <div className="flex-1 mr-6">
                    <Image src={FeatureImageTwo} width={320} height={192} className='object-cover rounded-2xl' alt="Feature Two" />
                </div>
                <div className="flex-1 w-full">
                <span className="text-xl text-[#6941C6] leading-3">Lana Steiner • 18 Jan 2024</span>
                    <div className="flex w-full justify-between items-center my-2">
                        <h4 className="text-[#101828]">Building your API stack</h4>
                        <Image src={ArrowIcon} />
                    </div>
                    <p className='text-[#2D2D2D] te xt-2xl'>The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...</p>
                    <div className="mt-6">
                        <div className="flex gap-x-2">
                            <Tag>Softwere</Tag>
                            <Tag>Research</Tag>
                        </div>
                    </div>
                </div>
            </div>
        </div>
       </Container>
    )
}

export const SignupForms = () => {
    return (
       <Container>
           <section className="bg-[#100650] bg-auto bg-no-repeat bg-left-top mb-28 rounded-[24px] px-6 md:px-20 pb-12 ">
               <div className="flex flex-col md:flex-row pt-12">
                   <div className="flex-1">
                       <h1 className='w-full md:w-2/3  font-black font-Satoshi text-white text-[48px] leading-[57px]'>
                           Subscribe to Stay Up to Date
                       </h1>
                       <p className="font-Inter font-normal text-lg mt-3.5 text-white">Grow Your Business with our insights to the Digital Landscape</p>
                       <div className="flex flex-col mt-5 md:w-[300px] w-full">
                           <input placeholder="your full name" className=" px-2 text-white bg-[#2D2466] border-[1px] border-white/20 h-[50px] py-2 rounded-[9px]" />
                           <input placeholder="your email address" className="px-2 bg-[#2D2466]  border-[1px] border-white/20 mt-3.5 h-[50px] py-2 rounded-[9px]" />
                           <button className="mt-3.5 flex flex-row justify-center text-white text-lg text-center font-Inter font-semibold bg-[#8959FF] inline-flex rounded-[8px] px-3.5 py-2">
                               Subscribe
                           </button>
                       </div>
                   </div>
                   <div className="newsletter-image">
                        <img  src="/Vector(2).svg" className="newsletter-vector-image" />
                        <img className="newsletter-main-image" src='/black-afro.png' alt="" />
                    </div>
               </div>
           </section>
       </Container>
    )
}

function createExcerpt(text, minWords = 12) {
    const words = text.split(' ');
    let excerpt = words.slice(0, minWords).join(' ');
  
    // If the excerpt is shorter than the minimum, add more words until the minimum is reached
    if (words.length > minWords && excerpt.split(' ').length < minWords) {
      for (let i = minWords; i < words.length; i++) {
        excerpt += " " + words[i];
        if (excerpt.split(' ').length >= minWords) {
          break;
        }
      }
    }
  
    excerpt += '...'; // Add an ellipsis to indicate truncation
    return excerpt;
  }

export function BlogList({ posts }) {
    function formatDate(date) {
        const format = moment(date)

        return format.format("MMMM DD, YYYY"); 
    }
    return (
       <Container>
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
                        <Image width={24} height={24} src={ArrowIcon} />
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
       </Container>
    )
}