import { FaReact } from "react-icons/fa";
const TechStack = () => {
    return (
        <div className='w-full h-full font-extrabold grid  '>
            {/* <div className="w-4/5 h-full md:flex md:place-self-center "> */}
            <div className="text-2xl md:text-5xl text-white ml-3 w-[100px] md:w-max break-words"><p>TECH I KNOW</p></div>
            <div className="   grid grid-cols-2  md:grid-cols-5 gap-8 p-2  md:place-self-center rounded-md relative">
                <div className="grid gap-2 ">
                    <div className="tech_card  md:place-self-end">
                        <span>MongoDb</span>
                    </div>
                </div>
                <div className="grid gap-2 ">
                    <div className="tech_card ">
                        <span><FaReact /></span>
                    </div>
                    <div className="tech_card ">
                        <span>Javascript</span>
                    </div>
                    <div className="tech_card ">
                        <span>CSS</span>
                    </div>
                </div>
                <div className="grid gap-2 md:mt-6">

                    <div className="tech_card ">
                        <span>Tailwind CSS</span>
                    </div>
                    <div className="tech_card ">
                        <span>Firebase</span>
                    </div>
                    <div className="tech_card ">
                        <span>Node</span>
                    </div>
                </div>
                <div className="grid gap-2">

                    <div className="tech_card ">
                        <span>Firebase</span>
                    </div>
                    <div className="tech_card ">
                        <span>Express</span>
                    </div>
                    <div className="tech_card ">
                        <span>Git and Github</span>
                    </div>
                </div>
                <div className="grid gap-2 md:mt-6">

                    <div className="tech_card  ">
                        <span>HTML</span>
                    </div>

                </div>
            </div>
            {/* </div> */}
        </div>
    )
}

export default TechStack