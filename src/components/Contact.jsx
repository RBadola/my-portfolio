
const Contact = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-3 contact">
        <p className="text-4xl text-white  font-bold">Reach Out To Me</p>
        <form className=" text-white text-2xl h-3/4 ">
            <input type="text" placeholder="Enter your email" className="bg-transparent outline-none p-4 border-2 border-white rounded w-2/4 capitalize" />
        </form>
    </div>
    )
}

export default Contact