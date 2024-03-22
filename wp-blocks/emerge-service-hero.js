import {motion} from 'framer-motion'
import {gql} from "@apollo/client";

export default function EmergeServiceHero (props) {
    const { attributes } = props;
    const { buttonText, buttonLink, richText, title, tagText, imageUrl } =
        attributes;


    return (
        <motion.section
            className="w-full px-[1.25rem] lg:px-[8rem] overflow-hidden"
        >
            <div className="hero-content">
                <div className="hero-text-block">
                    <div className={ `tag` }>{ tagText }</div>
                    <h2 className="hero-title">{ title }</h2>
                    <p className={ `hero-text` }>{ richText }</p>
                    <motion.a
                        whileHover={{
                            scale: 1.1,
                            backgroundColor: "#d62ba3"
                        }}
                        transition={{ duration: 0.5, yoyo: Infinity }}
                        href={ buttonLink }
                        className="mt-5 text-white text-lg text-center font-Inter font-semibold bg-[#8959FF] inline-flex rounded-[8px] px-3.5 py-2"
                    >
                        { buttonText }
                    </motion.a>
                </div>
                <div className="hero-image-wrapper">
                    <img
                        className="hero-image"
                        src={ imageUrl }
                        alt="Service Slide"
                    />
                </div>
            </div>
        </motion.section>
    )
}

EmergeServiceHero.fragments = {
    entry: gql`
    fragment EmergeServiceHeroFragment on EmergeBlocksServiceHero {
      attributes {
        title
        buttonText
        buttonLink
        richText
        tagText
        imageUrl
      }
    }
  `,
    key: `EmergeServiceHeroFragment`,
};

EmergeServiceHero.displayName = 'EmergeBlocksServiceHero'

