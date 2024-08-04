export default function Appbar() {
    return (
        <div className="flex justify-between h-15 shadow-md mb-4">
            <div className="flex flex-col justify-center h-full font-semibold text-xl mt-1.5 ml-4">
                TOUPE
            </div>

            <div className="flex">
                <div className="flex flex-col justify-center h-full font-medium text-xl mr-4">
                    Hello
                </div>

                <div className="rounded-full  h-10 w-10 bg-slate-200 flex justify-center my-1 mr-4 ">
                    <div className="flex flex-col justify-center h-full text-xl">
                        U
                    </div>
                </div>
            </div>
        </div>
    )
}