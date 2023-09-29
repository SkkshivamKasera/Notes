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
            <h1 className='Recommended-Courses'>Recommended Courses</h1>
            <div className='card_container'>
            {   
                courses && 
                <>
                    <CourseCard id={courses[0]._id} CourseImage={courses[0].CourseImage.url} paid={courses[0].paid} price={courses[0].price} name={courses[0].name} desc={courses[0].desc} enrollments={courses[0].enrollments} setProgress={setProgress} EON={"Enroll Now"}/>
                    <CourseCard id={courses[3]._id} CourseImage={courses[3].CourseImage.url} paid={courses[3].paid} price={courses[3].price} name={courses[3].name} desc={courses[3].desc} enrollments={courses[3].enrollments} setProgress={setProgress} EON={"Enroll Now"}/>
                    <CourseCard id={courses[2]._id} CourseImage={courses[2].CourseImage.url} paid={courses[2].paid} price={courses[2].price} name={courses[2].name} desc={courses[2].desc} enrollments={courses[2].enrollments} setProgress={setProgress} EON={"Enroll Now"}/> 
                </>
            }
            </div>
        </div>
    )
}

export default Home