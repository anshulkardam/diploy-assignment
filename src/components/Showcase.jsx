import { HeroHighlight,Highlight  } from "./Highlight"
import { motion } from "framer-motion";

export const Showcase = () => {
  return <div className="">
    <HeroHighlight>
        <div className="text-center max-w-2xl mx-auto">
        <motion.h1
        initial={{
          opacity: 0,
          y: 20,
        }}
        animate={{
          opacity: 1,
          y: [20, -5, 0],
        }}
        transition={{
          duration: 0.5,
          ease: [0.4, 0.0, 0.2, 1],
        }}
        className="text-2xl px-4 md:text-4xl lg:text-4xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
      >
        Create beautiful reviews with {" "}
        <Highlight className="text-black dark:text-white">
        unlimited possibilities.
        </Highlight>
      </motion.h1>
          <p className="text-lg font-poppins text-neutral-500 font-medium mt-4">
            Be ready to use the next generation of WordPress themes. Experience Essentials by Pixfort.
          </p>
        </div>  
    </HeroHighlight>
  </div>
}


