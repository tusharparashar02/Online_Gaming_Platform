import React, { useState } from 'react'
import { useAuth } from '../../store/auth';

const defaultContactformdata = {
    username: "",
    email: "",
    message: "",
};

export default function Contact() {

    const[contact, setContact] = useState(defaultContactformdata );

    const [userData, setUserData] = useState(true);
    const {user} = useAuth();

    if(userData && user){
        setContact({
            username:user.username,
            email: user.email,
            message: "",
        });

        setUserData(false);
    }
    //handle input
    const handleInput = (e)=>{
        const name = e.target.name;
        const value = e.target.value;

        setContact({
            ...contact,
            [name]: value,
        })
        // setContact((prev)=>(
        //     {
        //         ...prev,
        //         [name]: value,
        //     }));
        };

    //handle form
    const handleSubmit = async (e)=>{
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/api/form/contact",{
                method:"POST",
                    headers:{
                        "Content-Type": "application/json",
                      },
                      body: JSON.stringify(contact),      
            })
            if(response.ok){
                setContact(defaultContactformdata );
                const data = await response.json();
                console.log(data);
                alert('message send successfully');
            }
        } catch (error) {
            alert("message not send");
            console.log(error);
        }
        console.log(contact);
    }


    return (
        <>
        <div style={{ 
      backgroundImage: `url("https://media.istockphoto.com/id/1467661374/video/soft-white-background-the-concept-of-abstract-clean-beautiful-soft-shiny-simple-blurred.jpg?s=640x640&k=20&c=2YiaSio1Nh1Zhc1IU0liUUOV85SIFHfcrhYPsG0GEd8=")` 
    }}>
         <div>
                <section className=" :bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-black">Contact Us</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-900 sm:text-xl">Got a technical issue? Want to send feedback about a beta feature? Let us know.</p>
                        <form onSubmit ={handleSubmit} action="#" className="space-y-8 "method='POST'>
                        <div>
                            <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">username</label>
                            <input type="text" name='username' id="username" autoComplete="off" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" value={contact.username} onChange={handleInput} required />
                        </div>
                        <div>
                            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">email</label>
                            <input type="email" name='email' id="email" autoComplete="off" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" value={contact.email} onChange={handleInput} required />
                        </div>
                        
                        <div className="sm:col-span-2">
                            <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-900">Your message</label>
                            <textarea name='message' id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..." value={Contact.message} onChange={handleInput} defaultValue={""} autoComplete='off' required/>
                        </div>
                        <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-black rounded-lg bg-indigo-400 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Send message</button>
                        </form>
                </div>
                </section>
            </div>
    </div>
        </>
    );
};
