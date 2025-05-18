import React from 'react'

const Manager = () => {
    return (
        <>
            <div class="absolute inset-0 -z-10 h-full w-full bg-green-100 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]">
                <div class="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(circle_800px_at_100%_200px,#d5c5ff,transparent)]"></div>
            </div>
            <div className='mycontainer'>
                <h1 className='text-xl text-center font-semibold'>
                    <span className='text-green-700'>&lt;</span>
                    <span className=''>Pass</span>
                    <span className="text-green-700">Op/&gt;</span>
                </h1>
                <p className='text-center'>Your own password manager</p>
                <div className='flex flex-col p-4 text-black gap-8'>
                    <input type="text" name="" id="" placeholder="Enter website URL" className='rounded-full border border-green-500 w-full px-4 py-1'/>
                    <div className='flex w-full justify-content-between gap-8'>
                        <input type="text" placeholder="Enter Username" className='rounded-full border border-green-500 w-full px-4 py-1' />
                        <div className="relative">
                            <input type="text" placeholder="Enter Password" className='rounded-full border border-green-500 w-full px-4 py-1'/>
                            <span className='absolute right-0 top-2 cursor-pointer' onClick="">
                                <lord-icon
                                    src="https://cdn.lordicon.com/dicvhxpz.json"
                                    trigger="hover"
                                    stroke="bold"
                                    className="w-10 h-4" >
                                </lord-icon>
                                {/* <img src="/icons/eye.png" className="p-1" alt="Eye" width={30} height={30} /> */}
                            </span>
                        </div>
                    </div>
                    <button className='flex gap-2 justify-center items-center border border-gray-700 bg-green-500 hover:bg-green-600 rounded-full py-1 px-4 w-fit mx-auto'>
                        <lord-icon
                            src="https://cdn.lordicon.com/efxgwrkc.json"
                            trigger="hover">
                        </lord-icon>
                        Add Password
                    </button>
                </div>
            </div>
        </>
    )
}

export default Manager