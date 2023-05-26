import { FcGoogle, fcGoogle } from "react-icons/fc";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useRouter } from "next/router";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import { toast } from 'react-toastify';

function Login(){

   const router = useRouter();
   const [user, loading] = useAuthState(auth);

   //signin sa google

   const googleProvider = new GoogleAuthProvider();


    const SigninBtnClickHandler = async () => {

       try{
            const res = await signInWithPopup(auth,googleProvider);
            router.push("/");
            toast.success("Succesfully logged in.",{
                position: toast.POSITION.TOP_CENTER,
                hideProgressbar: true,
                autoclose: 1500,
            })

       }catch(err){
         toast.error("Authentication Failed!",{
            position: toast.POSITION.TOP_CENTER,
            hideProgressbar: true,
            autoclose: 1500,
         })
       }

    }
   

 

    return(


        <>
        {/*container*/}
   
        <div className='bg-gradient-to-b from-white via-gray-400 to-white block h-screen items-center justify-center p-4 md:flex'> 
       
        {/*Login card*/}
       <div className='bg-cover bg-image flex flex-col items-center max-w-screen-lg overflow-hidden rounded-lg shadow-lg text-gray-600 w-full md:flex-row'>
       
       
        {/*Logo*/}
       <div className=' backdrop-filter flex flex-col items-center justify-center p-4 text-white w-full md:w-1/2'>
      <img src='/title.png'></img>
        </div>
   
      
       {/* form*/}
       <div className=' bg-white flex flex-col items-center p-4 space-y-8 w-full md:w-1/2'>
       {/*Welcome*/}
       <div className='flex flex-col items-center'>
         <h1 className=' font-medium text-black 400 text-xl' >Welcome Back</h1>
         <p> Login to proceed</p>
       </div>
         {/*inputs*/}
        
           
          
           {/*links*/}
   
           <div class="px-6 sm:px-0 max-w-sm">
       <button onClick={SigninBtnClickHandler} 
       type="button" class="text-white w-full  bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between dark:focus:ring-[#4285F4]/55 mr-2 mb-2"><svg class="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>Sign up with Google<div></div></button>
   
   
           </div>
   
       <div>
   
       </div>
       </div>
        
        </div>
        </div>
        
        
        </>


    )
}

export default Login;