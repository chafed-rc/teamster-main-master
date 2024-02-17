

import Image from 'next/image';
import codeIcon from '../../public/icons/code-solid.svg'; // Update the path to your icon
import { auth } from '../auth'
import Link from 'next/link';

export default async function Dashboard(){

    const session = await auth()


    if(!session){
        return(
            <div className="flex items-center justify-center h-screen">
                <div className="p-10 rounded-lg text-white text-center max-w-md w-full">
                    <div className="mb-6 flex justify-center">
                        <Image
                        src={codeIcon}
                        alt="code icon"
                        width={50}
                        height={50}
                        />
                    </div>
                    <h1 className='font-semibold text-xl'>Oops, Not Signed in!</h1>
                    <p className='mt-3 mb-3 text-gray-300'>Please Sign In to Continue</p>
                    <Link href={'/signup'}><span className='text-xl underline hover:text-[#5CB8E4]'>Sign in</span></Link>
                </div>
            </div>
        )
    }

    return(
        <>
        <div className="flex items-center justify-center h-screen">
            <div className="p-10 rounded-lg text-white text-center max-w-md w-full">
                <div className="mb-6 flex justify-center">
                    <Image
                    src={codeIcon}
                    alt="code icon"
                    width={50}
                    height={50}
                    />
                </div>
                <h2 className="text-2xl font-medium mb-6">Ready to get to work?</h2>
                <Link href={'/dashboard/workspace'}><span className='text-2xl hover:text-[#5CB8E4]'>Launch Dashboard</span></Link>
            </div>
        </div>
        </>
    )
}