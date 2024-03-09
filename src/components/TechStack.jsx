import { FaGithub, FaHtml5, FaNodeJs, FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import {
  TbBrandCss3,
  TbBrandFirebase,
  TbBrandJavascript,
  TbBrandReactNative,
} from "react-icons/tb";
import { SiExpress, SiMysql, SiTailwindcss } from "react-icons/si";
import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <motion.div className="w-full h-full  font-extrabold grid overflow-hidden ">
      {/* <motion.div className="w-4/5 h-full md:flex md:place-self-center "> */}
      <motion.div className="text-2xl md:text-5xl  ml-3 w-[100px] md:w-max break-words">
        <motion.p>TECH I KNOW</motion.p>
      </motion.div>
      <motion.div className="   grid grid-cols-5 gap-8 p-2  md:place-self-center rounded-md relative">
        {/* <div className="absolute top-0 left-0 aspect-square w-full h-full "></div> */}
        <motion.div className="grid gap-2 ">
          <motion.div
            className="tech_card  md:place-self-end"
            initial={false}
            whileHover={{
              y: -10,
              boxShadow:
                "0px 0px 0px 10px rgb(255,190,240),0px 0px 0px 20px rgb(205,190,240)",
              transition: {
                duration: 0.5,
                bounce: 0.5,
                ease: "easeInOut",
                type: "spring",
                stiffness: 400,
                damping: 17,
              },
            }}
          >
            <motion.span >
              <BiLogoMongodb size={100} />
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div className="grid gap-2 ">
          <motion.div className="tech_card ">
            <motion.span>
              <FaReact size={100} />
            </motion.span>
          </motion.div>
          <motion.div className="tech_card ">
            <motion.span>
              <TbBrandJavascript size={100} />
            </motion.span>
          </motion.div>
          <motion.div className="tech_card ">
            <motion.span>
              <TbBrandCss3 size={100} />
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div className="grid gap-2 md:mt-6">
          <motion.div className="tech_card ">
            <motion.span>
              <SiTailwindcss size={100} />{" "}
            </motion.span>
          </motion.div>
          <motion.div className="tech_card ">
            <motion.span>
              <TbBrandFirebase size={100} />
            </motion.span>
          </motion.div>
          <motion.div className="tech_card ">
            <motion.span>
              <FaNodeJs size={100} />
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div className="grid gap-2">
          <motion.div className="tech_card ">
            <motion.span>
              <SiMysql size={100} />
            </motion.span>
          </motion.div>
          <motion.div className="tech_card ">
            <motion.span>
              <SiExpress size={100} />
            </motion.span>
          </motion.div>
          <motion.div className="tech_card ">
            <motion.span>
              <FaGithub size={100} />
            </motion.span>
          </motion.div>
        </motion.div>
        <motion.div className="grid gap-2 md:mt-6">
          <motion.div className="tech_card  ">
            <motion.span>
              <FaHtml5 size={100} />
            </motion.span>
          </motion.div>
          <motion.div className="tech_card  ">
            <motion.span>
              <TbBrandReactNative size={100} />
            </motion.span>
          </motion.div>
        </motion.div>
      </motion.div>
      {/* </motion.div> */}
    </motion.div>
  );
};

export default TechStack;
