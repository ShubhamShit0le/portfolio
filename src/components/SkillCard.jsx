const SkillCard = (props) => {
    return (
        <>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <p className='my-4'>{props.skill}</p>
            </div>
        </>
    );
}

export default SkillCard;