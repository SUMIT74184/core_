import React from 'react'
import { FaArrowRight } from "react-icons/fa"
import { Link } from 'react-router-dom'
import HighlightText from '../components/core/Homepage/HighlightText'
import CTAButton from '../components/core/Homepage/Button'
import Banner from '../assets/Images/banner.mp4'
import CodeBlock from '../components/core/Homepage/CodeBlock'
import TimelineSection from '../components/core/Homepage/TimelineSection'
import LearningLanguageSection from '../components/core/Homepage/LearningLanguageSection'
import InstructorSection from "../components/core/Homepage/InstructorSection"
import Footer from '../components/core/Homepage/common/Footer'
import ExploreMore from '../components/core/Homepage/ExploreMore'
import Navbar from '../components/core/Homepage/common/Navbar'

const Home = () => {
  return (
    <div>
      <Navbar />
      {/* section */}
      <div className='relative mx-auto flex flex-col w-11/12 max-w-maxContent items-center text-white justify-between'>
        <Link to={"/signup"}>
          <div className='group mt-16 p-1 mx-auto rounded-full bg-richblack-800 font-bold text-richblack-200 transition-all 
          duration-200 hover:scale-95 w-fit'>
            <div className='flex flex-row items-center gap-0 rounded-full px-10 py-[5px] transition-all 
            duration-200 group-hover:bg-richblack-900'>
              <p>Become an Instructor</p>
              <FaArrowRight />
            </div>
          </div>
        </Link>

        <div className='text-center text-4xl font-semibold mt-7'>
          Empower Your Future with
          <HighlightText text={"New Skills"} />
        </div>

        <div className='w-[90%] text-center mt-4'>
          With our online coding courses, you can learn at your pace, from anywhere in the world, and get access to
          a wealth of resources, including hands-on projects, quizzes, and personalized feedback from instructors.
        </div>

        <div className='flex flex-row gap-7 mt-8'>
          <CTAButton active={true} linkto={"/signup"}>
            Learn More
          </CTAButton>

          <CTAButton active={false} linkto={"/login"}>
            Book a Demo
          </CTAButton>
        </div>

        <div className='shadow-blue-200 mx-3 my-12'>
          <video muted loop autoPlay>
            <source src={Banner} type="video/mp4" />
          </video>
        </div>

        {/* CODE SECTION 1 */}
        <div>
          <CodeBlock
            position={"lg:flex-row"}
            heading={
              <div className='text-4xl font-semibold'>
                Unlock Your
                <HighlightText text={"Potential"} />{" "}
                with our Online Courses
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in the fields and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "Try it yourself",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeBlock={`<!DOCTYPE html>
                <html lang="en">
                    <head>
                      <meta charset="UTF-8">
                      <title>My First Webpage</title>
                    </head>
                    <body>
                    </body>
                  </html>
                      `}
            codeColor={"text-yellow-25"}
          />
        </div>

        {/* CODE SECTION 2 */}
        <div>
          <CodeBlock
            position={"lg:flex-row-reverse"}
            heading={
              <div className='text-4xl font-semibold'>
                Start learning with full
                <HighlightText text={"Potential"} />{" "}
                and keep moving on!!!!
              </div>
            }
            subheading={
              "Our courses are designed and taught by industry experts who have years of experience in the fields and are passionate about sharing their knowledge with you."
            }
            ctabtn1={{
              btnText: "continue Learning",
              linkto: "/signup",
              active: true,
            }}
            ctabtn2={{
              btnText: "Learn More",
              linkto: "/login",
              active: false,
            }}
            codeBlock={`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My First Webpage</title>
  </head>
  <body>
  </body>
</html>
`}
            codeColor={"text-yellow-25"}
          />
        </div>

        <ExploreMore />

      </div>

      {/* code section 2 */}
      <div className='bg-pure-greys-5 text-richblack-700'>
        <div className='homepage_bg h-[310px]'>
          <div className='w-11/12 max-w-maxContent flex flex-col items-center justify-between gap-5 mx-auto'>
            {/* button section */}
            <div className='h-[150px]'></div>
            <div className='flex flex-row gap-7 text-white'>
              <CTAButton active={true} linkto={"/signup"}>
                <div className='flex items-center gap-3'>
                  Explore Full Catalog
                  <FaArrowRight />
                </div>

              </CTAButton>

              <CTAButton active={false} linkto={"/signup"}>
                <div>
                  Learn More
                </div>

              </CTAButton>

            </div>

          </div>

        </div>

        <div className='mx-auto w-11/12 max-w-maxContent flex flex-col items-center justify-center gap-7'>
          <div className='flex flex-row gap-5 mb-10 mt-[95px]'>
            <div className='text-4xl font-semibold w-[45%]'>
              Get the skills you need for a
              <HighlightText text={"job that is in demand"} />
            </div>


            <div className='flex flex-col gap-10 w-[40%] items-start '>
              <div className='text-[16px]'>
                The modern StudyNotion is the dictates its own terms. Today, to be a competitive specialist requires more than professional skills.
              </div>
              <CTAButton active={true} linkto={"/signup"}>
                <div>
                  Learn More
                </div>
              </CTAButton>
            </div>



          </div>
          {/* new components are used in  this  */}
          <TimelineSection />

          <LearningLanguageSection />

        </div>


      </div>

      {/* code section 3 */}
      <div className='w-11/12 mx-auto max-w-maxContent flex-col items-center justify-between 
      gap-8 first-letter bg-richblack-900 text-white'>
        <InstructorSection />
        <h2 className='text-center text-4xl font-semibold mt-10'>Review From Other Learners</h2>
      </div>


      {/* rest of the code  */}
      <Footer />
    </div>
  )
}

export default Home
