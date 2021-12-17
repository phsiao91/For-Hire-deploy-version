import React, {useState, useEffect} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt, faEnvelope, faPhoneSquare, faFutbol, faGamepad, faMusic, faHiking } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faFacebookSquare, faInstagramSquare, faTwitterSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Link } from "react-router-dom";
import IconNew from "./IconNew";


function Resume() {

    // const [resumes, setResumes] = useState([])
    const [summary, setSummary] = useState([])
    const [bios, setBios] = useState([])
    const [workHistories, setWorkHistories] = useState([])
    const [skills, setSkills] = useState([])
    const [educations, setEducations] = useState([])
    const [tasks, setTasks] = useState([])
    const [socials, setSocials] = useState([])
    const [hobby, setHobbies] = useState([])

    const getSummary = () => {
        fetch("/myintro")
        .then(res => res.json())
        .then(fetchedIntro => setSummary(fetchedIntro)
    )
    }
    useEffect(getSummary, [])

    const getBio = () => {
        fetch("/mybio")
        .then(res => res.json())
        .then(fetchedBio => setBios(fetchedBio)
    )
    }
    useEffect(getBio, [])

    const getWorkHistory = () => {
        fetch("/allwork")
        .then(res => res.json())
        .then(fetchedWorkHistory => setWorkHistories(fetchedWorkHistory)
    )
    }
    useEffect(getWorkHistory, [])

    const getSkill = () => {
        fetch("/mylanguages")
        .then(res => res.json())
        .then(fetchedSkill => setSkills(fetchedSkill)
    )}
    useEffect(getSkill, [])


    const getEducation = () => {
        fetch("/alleducation")
        .then(res => res.json())
        .then(fetchedEducation => setEducations(fetchedEducation)
    )}
    useEffect(getEducation, [])



    const getTask = () => {
        fetch("/mytask")
        .then(res => res.json())
        .then(fetchedTask => setTasks(fetchedTask)
    )
    }
    useEffect(getTask, [])

    const getHobby = () => {
        fetch("/myhobbies")
        .then(res => res.json())
        .then(fetchedHobby => setHobbies(fetchedHobby)
    )
    }
    useEffect(getHobby, [])

    const mapHobbies = () => {
        let mappedIcons = hobby.map(eachIcon =>{ 
            
            console.log(eachIcon)
            // let hob = eachIcon.description.charAt(0).toUpperCase() + eachIcon.description.slice(1)
            // console.log(hob)
            // return (<Icon iconToRender={eachIcon} />)
            return (
                    <p>
                        <IconNew className="icon" iconToProcess={eachIcon}/>
                    </p>
            )           
        })
        // console.log(mappedTasks[0])
        return mappedIcons
        
    }

    const getSocial = () => {
        fetch("/mysocials")
        .then(res => res.json())
        .then(fetchedSocial => setSocials(fetchedSocial)
    )
    }
    useEffect(getSocial, [])

    // function mapTasks() {
    //     let mappedTasks = () => { tasks.map( eachTask => {
    //         console.log(eachTask)
    //         return eachTask.details
    //     })
    //         return mappedTasks
    //     }
    // }

        const mapTasks = () => {
            let mappedTasks = workHistories.tasks.details.map(eachTask =>{
                // console.log(eachTask.details)
                return (eachTask)
            })
            // console.log(mappedTasks[0])
            return mappedTasks
            
        }


        const mapSkills = () => {
            let mappedSkills = skills.map(eachSkill =>{
                // console.log(eachSkill)
                    return (<li>
                                <div class="skill_name">
                                    <p>{eachSkill.expertise}</p>
                                </div>
                                <div class="skill_progress">
                                    <span style={{width: `${eachSkill.rating}%`}}></span>
                                </div>
                                <div class="skill_per">{`${eachSkill.rating}%`}</div>
                            </li>)
            })
                    // console.log(mappedSkills)
                    return mappedSkills
        
    }

    const mapWork = () => {
        let mappedWork = workHistories.map(eachWork =>{
            console.log(eachWork)
            return (
                    <div className="li_wrap_light">
                        <div className="date">{eachWork.start_date} - {eachWork.end_date}</div>
                        <div className="info_dark">
                            <p className="info_title">{eachWork.title}</p>
                            <p className="info_com">{eachWork.company}</p>
                            {
                                eachWork.tasks.map(eachTask => {
                                    return(
                                        <p className="info_cont">{eachTask.details}</p>
                                    )
                                }) 
                            }
                            {/* <p className="info_cont">{eachWork.tasks[0].details}</p>
                            <p className="info_cont">{eachWork.tasks[1].details}</p> */}
                        </div>
                    </div>
            )
        })
        // console.log(mappedWork)
        return mappedWork
        
    }

    const mapEducations = () => {
        let mappedEducations = educations.map(eachEducation =>{
            // console.log(eachEducation)
            return (
                <div className="li_wrap_light">
                <div className="date">{eachEducation.start_date} - {eachEducation.end_date}</div>
                <div className="info_dark">
                    <p className="info_title">{eachEducation.degree}</p>
                    <p className="info_com">{eachEducation.school}</p>
                </div>
                </div>
            )
        })
        // console.log(mappedEducations)
        return mappedEducations
        
    }
    



    return(
    <div>
        <Link to="dark">
            <button className="mode">Dark Mode</button>
        </Link>
        <div className="resume">
            <div className="resume_left">
                <div class="resume_profile">
                    <img src={bios.image} alt="profile_pic"></img>
                </div>
                <div className="resume_content">
                    <div className="resume_item resume_bio">
                        <div class="title">
                            <h2 className="bold">{bios.name}</h2>
                        </div>
                        <ul>
                            <li>
                                <FontAwesomeIcon class="icon" icon={faMapMarkerAlt} />
                                    <div class="data">
                                        <p className="semi_bold">{bios.address}</p>
                                    </div>
                            </li>
                            <li>
                                <FontAwesomeIcon class="icon" icon={faPhoneSquare} />
                                    <div class="data">
                                        <p className="semi_bold">{bios.phone}</p>
                                    </div>
                            </li>
                            <li>
                                <FontAwesomeIcon class="icon" icon={faEnvelope} />
                                    <div class="data">
                                        <p className="semi_bold">{bios.email}</p>
                                    </div>
                            </li>
                            <li>
                                <FontAwesomeIcon class="icon" icon={faGithub} />
                                    <div class="data">
                                        <a className="semi_bold" href ={bios.github} target="_blank">github</a>
                                    </div>
                            </li>
                        </ul>
                    </div>
                    <div class="resume_item resume_skills">
                        <div class="title">
                            <h2 className="bold">Skills</h2>
                        </div>
                            <ul>
                                {mapSkills()}
                            </ul>
                    </div>
                    <div class="resume_item resume_social">
                        <div class="title">
                            <h2 className="bold">Social</h2>
                        </div>
                        <ul>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faFacebookSquare} />
                                <div class="data">
                                    <a className="semi_bold" href ={socials.facebook} target="_blank">facebook</a>
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faInstagramSquare} />
                                <div class="data">
                                    <a className="semi_bold" href ={socials.instagram} target="_blank">instagram</a>
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faTwitterSquare} />
                                <div class="data">
                                    <a className="semi_bold" href ={socials.twitter} target="_blank">twitter</a>
                                </div>
                            </li>
                            <li>
                                <FontAwesomeIcon className="icon" icon={faLinkedin} />
                                <div class="data">
                                    <a className="semi_bold" href ={socials.linkedin} target="_blank">linkedin</a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
                <div class="resume_item resume_right">
                    <div className="resume_item resume_about">
                        <div class="title">
                            <h2 class="bold">About me</h2>
                        </div>
                        <p>{summary.summary}</p>
                    </div>
                    <div className="resume_item right_inner">
                        <div className="resume_item exp">
                            <div className="title">
                                <h2 className="bold">Experience</h2>
                            </div>
                            <div className="exp_wrap">
                                <ul>
                                    {mapWork()}
                                </ul>
                            </div>
                        </div>
                        <div className="resume_item exp">
                            <div className="title">
                            <h2 className="bold">Education</h2>
                            </div>
                            <div className="education_wrap">
                                <ul>
                                    {mapEducations()}
                                </ul>
                            </div>
                        </div>
                    </div>
                    {/* <div className="resume_item resume_about">
                        <div class="title">
                            <h2 class="bold">Professional Summary</h2>
                        </div>
                        <p>{summary.summary}</p>
                    </div> */}
                    {/* <div className="resume_item resume_work">
                        <div class="title">
                            <h2 class="bold">Work History</h2>
                        </div>
                        <ul>
                                <div class="date">from: {workHistories.start_date} to: {workHistories.end_date}</div>
                                <div class="info">
                                    <li>
                                        <h4 class="semi-bold">title</h4>
                                    </li>
                                        <p>{workHistories.title}</p>
                                    <li>
                                        <h4 class="semi-bold">company</h4>
                                    </li>
                                        <p>{workHistories.company}</p>
                                </div>
                        </ul>
                    </div>
                    <div className="resume_item resume_task">
                        <div class="title">
                            <h3 class="bold">tasks</h3>
                        </div>
                        <div>
                            <ul>
                                    {mapTasks()}
                            </ul>
                        </div>
                    </div> */}
                    {/* <div className="resume_item resume_education">
                        <div class="title">
                            <h2 class="bold">Education</h2>
                        </div>
                        <ul>
                            <div class="date">from: {educations.start_date} to: {educations.end_date}</div>
                            <div class="info">
                                <li>
                                    <h4 class="semi-bold">school</h4>
                                </li>
                                    <p>{educations.school}</p>
                                <li>
                                    <h4 class="semi-bold">degree</h4>
                                </li>
                                    <p>{educations.degree}</p>
                            </div>
                        </ul>
                    </div> */}
                    <div className="resume_item resume_hobby">
                        <div class="title">
                            <h2 class="bold">Hobby</h2>
                        </div>
                        <ul>
                            {mapHobbies()}
                            {/* <p>
                                <FontAwesomeIcon className="icon" icon={faFutbol} />
                            </p>
                            <p>
                                <FontAwesomeIcon className="icon" icon={faGamepad} />
                            </p>
                            <p>
                                <FontAwesomeIcon className="icon" icon={faMusic} />
                            </p>
                            <p>
                                <FontAwesomeIcon className="icon" icon={faHiking} />
                            </p> */}
                        </ul>
                    </div>
                </div>
        </div>
    </div>
    )
}

export default Resume