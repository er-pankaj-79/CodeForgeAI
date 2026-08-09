import React from 'react';
import Image from 'next/image';
import SignInFormClient from '@/modules/auth/components/sign-in-form-client';
const Page = () => {
    return (
        <>
            <div className='text-white text-2xl border-2 border-red-500 p-4 rounded-lg'>   
                Sign In Page
            </div>
            <Image src = {"/login.svg"} alt = 'login-Image' height = {200} width = {200} className='m-6 object-cover'/>
            <SignInFormClient/>
        </>
    )
}   

export default Page