import React, { useState } from 'react'
import {useNavigate} from "react-router-dom";
import { useAuth } from '../../store/auth';
import { toast } from 'react-toastify';

const Signin = () => {

  const [user, setUser] = useState({
    email: "",
    password:"",
  })

  const navigate = useNavigate();
  const {storetokenInLS} = useAuth();

  const handleInput =(e)=>{
    let name = e.target.name;
    let value = e.target.value;

    setUser({
      ...user, 
     [name]:value,
    })
  }

  const handlePassword = (e)=>{
    e.preventDefault();
    toast("Password Yaad Rakha Kr bhai")
  }
  //handlesubmit
  const handleSubmit = async (e)=>{
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:5000/api/auth/login`,{
        method:"POST",
        headers:{
          "Content-Type": "application/json",
        },
        body: JSON.stringify(user),
      });


      const res_data = await response.json();
      console.log(res_data);
      if(response.ok){
        toast.success("Login Sucessfully")
        
        //store the token in local storage
        storetokenInLS(res_data.token);
        // localStorage.setItem("token", res_data.token);

        setUser({email:"", password:""});
        navigate("/Premium");
      }else{
        toast.error(res_data.extraDetails ? res_data.extraDetails : res_data.message);
      }

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div style={{ 
      backgroundImage: `url("https://media.istockphoto.com/id/1467661374/video/soft-white-background-the-concept-of-abstract-clean-beautiful-soft-shiny-simple-blurred.jpg?s=640x640&k=20&c=2YiaSio1Nh1Zhc1IU0liUUOV85SIFHfcrhYPsG0GEd8=")`, backgroundSize: "cover",
      backgroundRepeat: "no-repeat", 
    }}>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-10 w-auto"
            src="https://w7.pngwing.com/pngs/832/490/png-transparent-avatar-computer-icons-user-profile-casino-avatar-game-face-heroes.png"
            alt="Your"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form onSubmit = {handleSubmit} className="space-y-6" action="#" method="POST">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium leading-8 text-gray-900">
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      
                      autoComplete="off"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={user.email} 
                      onChange={handleInput}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                      Password
                    </label>
                    <div className="text-sm">
                      <a href="#"  className="font-semibold text-red-600 hover:text-indigo-500" onClick={handlePassword}>
                        Forgot password?
                      </a>
                    </div>
                  </div>
                  <div className="mt-2">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="off"
                      required
                      className="block w-full rounded-md border-0 py-1.5 px-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={user.password}
                      onChange={handleInput}
                    />
                  </div>
                </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign in
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            Not a member?{' '}
            <a href="\Signup" className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">
              Create Your Account
            </a>
          </p>
        </div>
      </div>
    </div>
       
    </div>
  )
}

export default Signin
