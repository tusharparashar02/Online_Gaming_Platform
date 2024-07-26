import React from 'react'
import { useAuth } from '../../store/auth'
const About = () => {
    const {user} = useAuth();
  return (
    <>
     <div style={{ 
      backgroundImage: `url("https://media.istockphoto.com/id/1467661374/video/soft-white-background-the-concept-of-abstract-clean-beautiful-soft-shiny-simple-blurred.jpg?s=640x640&k=20&c=2YiaSio1Nh1Zhc1IU0liUUOV85SIFHfcrhYPsG0GEd8=")` 
    }}>
      <div className="py-12  ">
        <h2 className="mb-8 text-2xl tracking-tight font-extrabold text-center text-red-800 ">Welcome {user ? ` "${user.username}" to our  website` : `to Our Gaming Universe`}</h2>
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://c.files.bbci.co.uk/E909/production/_112375695_crucible976.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Empowering Gamers Since 2024
                        </h2>
                        <p className="mt-6 text-gray-600 font-bold">
                        Welcome Gamers! your ultimate destination for the best in online gaming. 
                        Whether you're a seasoned pro or a newcomer looking to dive into the exciting world of online gaming, we've got something for everyone.
                        </p>
                        <p className="mt-4 text-gray-600 font-bold">
                        We strive to bring together gamers from all walks of life, providing a platform where they can connect, compete, and share their love for games. 
                        Our goal is to be the go-to source for all things gaming, offering top-notch content, resources, and a welcoming environment for gamers around the globe.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="py-16 ">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        What We Offer
                        </h2>
                        <p className="mt-6 text-black-600 font-bold">
                        Extensive Game Library:-
                        Explore our vast collection of games spanning multiple genres and platforms. 
                        From action-packed shooters and strategic RPGs to casual puzzle games and immersive MMORPGs, we have something to suit every taste and skill level.
                        </p>
                        <p className="mt-4 text-gray-600 font-bold">
                        Community Forums:-
                        Join our vibrant community forums to discuss your favorite games, share tips and strategies, and connect with fellow gamers. 
                        Our forums are a great place to make new friends, find gaming partners, and stay updated on the latest gaming news and trends.
                        </p>
                        <p className="mt-4 text-gray-600 font-bold">
                        Events and Tournaments:-
                        Participate in our exciting events and tournaments to test your skills and compete for awesome prizes. 
                        Whether you're a casual gamer or a competitive player, our events offer something for everyone, with opportunities to showcase your talents and have fun.
                        </p>
                    </div>
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://wallpapers.com/images/hd/fortnite-cool-pictures-1920-x-1080-k0ae8y71it87f8f5.jpg"
                            alt="image"
                        />
                    </div>
                </div>
            </div>
        </div>
        <div className="py-16 ">
            <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12">
                        <img
                            src="https://e0.pxfuel.com/wallpapers/290/966/desktop-wallpaper-fortnite-skins-epic-games-gamer-pics-gaming-fortnite-skins-season-7.jpg"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                        Why Choose Us?
                        </h2>
                        <p className="mt-6 text-gray-600 font-bold">
                        Passionate Team:- Our team of dedicated gamers and industry professionals are passionate about delivering the best gaming content and experiences.
                        </p>
                        <p className="mt-4 text-gray-600 font-bold">
                        Trusted Source:- Our reviews and guides are unbiased and thorough, ensuring you get the most reliable information.
                        </p>
                        <p className="mt-4 text-gray-600 font-bold">
                        Constantly Evolving: We're always updating our platform with new games, features, and content to keep things fresh and exciting.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
      </>
  )
}

export default About
