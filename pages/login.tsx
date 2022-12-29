import { FieldValues, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { UserInfo, userSchema } from "../lib/validation";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import axios from "axios";
import ShowPasswordButton from "../components/common/ShowPasswordButton";
import Loader from "../components/common/Loader";
import { useRouter } from "next/router";

function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<UserInfo>({ resolver: yupResolver(userSchema) });
    
    const [showPassword, setShowPassword] = useState(false);
    const [showConPassword, setShowConPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();
    
    useEffect(()=> {
        console.log(errors)
        toast.error( errors.phone?.message || errors.password?.message, {
          position:'top-center', theme: 'colored'
        } )
      },[errors])
    
      const onSubmit = async (data: FieldValues) => {
        try {
          setIsLoading(true);
          const res = await axios.post("/api/signup", data);
          console.log(res.data.token);
          // Check the token in notification
          toast.success(res.data.token);
          setIsLoading(false);
          // Redirect to home
          router.push('/')
          
        } catch (error: any) {
          console.log(error.message);
          toast.error(error.message, {
            position: "top-center",
            theme: "colored",
          });
          setIsLoading(false);
        }
      };
    
    
  return (
    <div className='grid justify-center items-center w-full h-fit p-4'>
        <div className='md:p-16 p-4 rounded-xl shadow max-w-[500px] border'>
            <div className='flex justify-between items-center rounded-xl bg-gray-100 border'>
                <button className=' bg-white px-4 md:px-8 py-4 border rounded-xl font-bold flex-auto text-center'> Login </button>
                <Link className='px-4 md:px-8 py-4 rounded-xl font-bold flex-auto text-center' href="/register"> Register </Link>
            </div>

            {/* Login Form */}

            <form onSubmit={handleSubmit(onSubmit)}>
                <input className="my-3 p-4 rounded-xl bg-gray-100 outline-none hover:bg-slate-200 focus:bg-slate-200 w-full" type="number" {...register("phone")} placeholder="Phone Number" />
                <div className='flex my-3 rounded-xl bg-gray-100 outline-none hover:bg-slate-200 focus:bg-slate-200 w-full'>
                    <input className="p-4 my-0 outline-none w-full bg-transparent" type={showPassword ? "text" : "password"} {...register("password")} placeholder="Password" />
                    <ShowPasswordButton show={showPassword} onClick={()=> setShowPassword(!showPassword)} />
                </div>
                <button className='my-3 font-bold bg-black rounded-xl text-white w-full py-4 px-8' disabled={isLoading ? true : false}>
                  {isLoading ? <Loader loaderColor="white"  loaderLineSize="2px" size="25px" width="30px" height="30px"/>: "Login"}
                 </button>
            </form>
            <button className='mt-8 font-bold'> Forgot Password? </button>
        </div>
    </div>
  )
}

export default Login