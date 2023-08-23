import axios from 'axios';
import { useState,useEffect } from 'react';

const Admin=()=>{
    const [technologyname,setTechnologyname]=useState()
    const [selectedTechnology, setSelectedTechnology] = useState();
    const [data, setData] = useState();
    const [CourseId,setCourseid]=useState();
    const [Topicname,setTopicname]=useState();
    const [Explanation,setExplaination]=useState();
    const [ResourceLinks,setResourcelinks]=useState()
    const HandleName=(e)=>{
        setTechnologyname(e.target.value)
    }

    const HandleCourse=()=>{
        axios.post('http://localhost:9000/add-technology',{technologyname});
        alert('course name sent ')
        window.location.reload()
    }
    useEffect(() => {
        axios.get('http://localhost:9000/get-courses').then((res) => {
        setData(res.data.data.allcourses);
        console.log("came")
        });
        }, []);
        const handleSelectChange = (event) => {
            setSelectedTechnology(event.target.value);
            setCourseid(event.target.value);
            };
    const HandleSubtopics=()=>{
            
            axios.post('http://localhost:9000/add-Subtopic',{CourseId,Topicname,Explanation,ResourceLinks});
            alert('course-subtopics sent')
            window.location.reload()
            }
    return(
        <>
        <h1>Add course-Name</h1>
        <label>Enter Course Name  </label>
        <input onChange={HandleName}/>
        <button onClick={HandleCourse}>Submit</button>
        {data ? (
<select onChange={handleSelectChange}>
{data.map((val) => (

<option key={val._id} value={val._id}>
{val.technologyname}
</option>
))}
</select>
) : (
<p>Loading...</p>
)}
{selectedTechnology && <p>Selected Technology: {selectedTechnology}</p>}
<>
<label>Topicname</label>
<input onChange={(e)=>setTopicname(e.target.value)}/>
<label>Explanation</label>
<input onChange={(e)=>setExplaination(e.target.value)}/>
<label>ResourceLinks</label>
<input onChange={(e)=>setResourcelinks(e.target.value)}/>

<button onClick={HandleSubtopics}>SUbmit sub</button>
</>
        </>
    )
}


export default Admin;