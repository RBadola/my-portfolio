
const TechStack = () => {
    return (
        <div className='w-full h-full font-extrabold bg-orange-700 grid '>
            <div className="w-4/5 h-full flex  place-self-center">
                <div className=" text-5xl text-white "><p>TECH I KNOW</p></div>
                <div className="h-3/4 -mt-8  grid grid-cols-5 gap-8 p-2  place-self-center rounded-md relative">
                    <div className="grid gap-2 ">
                        <div className="tech_card  place-self-end">
                            <span>MongoDb</span>
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <div className="tech_card ">
                            <span>React</span>
                        </div>
                        <div className="tech_card ">
                            <span>Javascript</span>
                        </div>
                        <div className="tech_card ">
                            <span>CSS</span>
                        </div>
                    </div>
                    <div className="grid gap-2 mt-6">

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
                    <div className="grid gap-2 mt-6">

                        <div className="tech_card  ">
                            <span>HTML</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default TechStack