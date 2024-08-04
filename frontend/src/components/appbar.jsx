export default function Appbar() {
    return (
        <div className="fixed top-0 left-0 right-0 flex justify-between h-15 bg-slate-50 shadow-md ">
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