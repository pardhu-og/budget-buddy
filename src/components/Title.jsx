//Title.js
export default function Title () {

    return (
        <div className="m-1 p-2  border-b-2 border-gray-300 rounded-lg
                        md:m-8
                        ">
        <h1 className="text-2xl text-center  font-semibold italic 
                        md:text-3xl
                        lg:text-5xl">Budget Buddy</h1>
        <p className="text-sm text-right  italic 
                      md:text-base md:pr-28
                      lg:text-xl lg:pr-44">Track every rupee, every day</p>
        </div>
    )
}