import SkillCard from './SkillCard'
import React, { useState, useEffect } from 'react';
import { getDocs, collection } from "firebase/firestore";
import db from "../firebaseConfig/index"

const Skills = () => {
    const [skills, setSkills] = useState([]);
    useEffect(() => {
        const colRef = collection(db, "Skills");
        const data = getDocs(colRef);
        data.then((ret) => {
            ret.forEach(doc => {
                setSkills(old => [...old, doc.data()]);
            })
        })
    }, [])
    return (
        <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className=' w-full flex justify-center items-center flex-col mb-7'>
                    <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center '>Skills</p>
                    <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
                </div>
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    {
                        skills.map((skill) => <SkillCard skill={skill.name} />)
                    }
                </div>
            </div>
        </div>
    );
};
export default Skills;