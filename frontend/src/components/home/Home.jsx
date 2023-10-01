import './Home.css'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import CourseCard from '../card/CourseCard'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

const Home = ({ setProgress }) => {
    const { courses } = useSelector(state => state.course)

    const [text] = useTypewriter({
        words: ["Coding", "Python", "Machine Learning", "HTML", "CSS", "Java Script", "React Js"],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 20
    })

    return (
        <div className='container'>
            <div className='div1'>
                <div className='text-div'>
                    <h1>Welcome to <span className='span1'>Code</span></h1>
                    <h2>Learn <span className='span2'>{text}<Cursor isTyping={true} blinkSpeed={100} /></span></h2>
                    <span className='span3'>Confused on which course to take? I have got you covered. Browse courses and find out the best course for you. Its free! Code With Harry is my attempt to teach basics and those coding techniques to people in short time which took me ages to learn.</span>
                    <div>
                        <Link to={"/courses"}>FREE COURSE</Link>
                    </div>
                </div>
                <div className='img-div'></div>
            </div>
            <h1 className={courses.length===3?"Recommended-Courses":"visibilty_none"}>Recommended Courses</h1>
            <div className='card_container'>
            {   
                courses.length === 3 &&
                <>
                    <CourseCard id={courses[0]._id} CourseImage={courses[0].CourseImage.url} paid={courses[0].paid} price={courses[0].price} name={courses[0].name} desc={courses[0].desc} enrollments={courses[0].enrollments} setProgress={setProgress} EON={"Enroll Now"}/>
                    <CourseCard id={courses[1]._id} CourseImage={courses[1].CourseImage.url} paid={courses[1].paid} price={courses[1].price} name={courses[1].name} desc={courses[1].desc} enrollments={courses[1].enrollments} setProgress={setProgress} EON={"Enroll Now"}/>
                    <CourseCard id={courses[2]._id} CourseImage={courses[2].CourseImage.url} paid={courses[2].paid} price={courses[2].price} name={courses[2].name} desc={courses[2].desc} enrollments={courses[2].enrollments} setProgress={setProgress} EON={"Enroll Now"}/> 
                </>
            }
            </div>
        </div>
    )
}

export default Home