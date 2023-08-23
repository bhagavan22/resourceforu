import './home.css'
import Axios from 'axios'
import { useEffect,useState } from 'react';

const Test=()=>{
    const [data, setData] = useState();
const [selectedTechnology, setSelectedTechnology] = useState();
const [subtopics, setSubtopics] = useState();
const [selectedSubtopic, setSelectedSubtopic] = useState();

useEffect(() => {
Axios.get('http://localhost:9000/get-courses').then((res) => {
setData(res.data.data.allcourses);
console.log("came")
});
}, []);

useEffect(() => {
if (selectedTechnology) {
const selectedData = data.find((val) => val.technologyname === selectedTechnology);
Axios.get(`http://localhost:9000/get-allsubtopics/${selectedData._id}`)
.then((res) => {
setSubtopics(res.data.data.subtopics);
console.log(res.data.data.subtopics);
console.log("came")
})
.catch((err) => console.log(err));
}
}, [selectedTechnology, data]);

const handleTechnologySelect = (event) => {
setSelectedTechnology(event.target.value);
};

const handleSubtopicSelect = (event) => {
const selectedSubtopic = subtopics.find((val) => val.Topicname === event.target.value);
setSelectedSubtopic(selectedSubtopic);
};

    
    
    return(
        <>
    <div class="fluid-container">
        <nav class="navbar">
            <div class="nav-flex">
                <div>
                    <img src="https://tse2.mm.bing.net/th?id=OIP.yJL6rAt5xQWu1TY6na_cYwHaFU&pid=Api&P=0" alt="logo" class="logo" />
                </div>
                <ul class="desk-nav-links">
                    <li class="link"> <a href="#home">Home</a></li>
                    <li class="link"> <a href="#technologies">TECHNOLOGIES</a></li>
                    <li class="link"> <a href="#reports">TOPICS</a></li>
                </ul>
                <ul class="mb-nav-links">
                    <li class="link"> <a href="#home"><i class="fa fa-home" id="link" aria-hidden="true"></i></a></li>
                    <li class="link"> <a href="#technologies"><i class="fa fa-bars" id="link" aria-hidden="true"></i></a></li>
                    <li class="link"> <a href="#reports"><i class="fa fa-file-text" id="link" aria-hidden="true"></i></a></li>
                </ul>

            </div>
        </nav>
        <div id="home" class="landing-page">
            <div class="img-container order-1">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQS-I-1DSSUYAZ_bkvulj-Oij86P-a40sFQ7Q&usqp=CAU" class="landing-logo" alt="landing-page" />
            </div>
            <div class="landing-content">
                <h1 class="content-heading pb-2"> RESOURCE FOR YOU </h1>
                <h2>TRUSTED FOR SUCCESS</h2>
                <p class="content-paragraph pt-3"> We are providing the best resources for INDUSTRY 4.0 TECHNOLOGIES like Machine Learning, BlockChain, Internet Of Things,Data Science,Cloud Computing.You Can explore these courses here. This platform will enhance your career opportunities.ALL THE BEST.
                </p>
                <button class="btn btn-info shadow mt-3"> <a class="explore-btn" href="#technologies">EXPLORE</a> </button>
            </div>
        </div>
        <div class="technology-page" id="technologies">
            <div>
                <h2 class="transcribe-heading pl-5"> INDUSTRY 4.0 TECHNOLOGIES <i class="fa fa-hand-o-right" aria-hidden="true"></i> </h2>
                <div class=" trans-card d-flex flex-column justify-content-center shadow">

                    <label for="TECHNOLOGIES" class="content-heading pb-2 pl-2 mt-3 ">TECHNOLOGIES</label>
                    {data ? (
                    <select onChange={handleTechnologySelect}>
                    {data.map((val) => (
                    <option key={val._id} value={val.technologyname}>
                    {val.technologyname}
                    </option>
                    ))}
                    </select>
                    ) : (
                    <p>Loading...</p>
                    )}
                    {selectedTechnology && <p>Selected Technology: {selectedTechnology}</p>}
                    {subtopics && (
                    <>
                    <h3>Subtopics:</h3>
                    <select onChange={handleSubtopicSelect}>
                    {subtopics.map((val) => (
                    <option key={val._id} value={val.Topicname}>
                    {val.Topicname}
                    </option>
                    ))}
                    </select>
                    </>
                    )}
                </div>
            </div>
        </div>
        <div id="reports" class="reports-page">
            <h2 class="transcribe-heading pl-5"> TOPICS <i class="fa fa-book ml-2" aria-hidden="true"></i> </h2>
            <div class="report-card shadow">
            {selectedSubtopic && (
                      <>
                 <h3>Selected Subtopic:{selectedSubtopic.Topicname}</h3>
                 <h1 class="content-heading">TECHNOLOGY NAME : {selectedTechnology}</h1>
                <h1 class="content-heading">SUBTOPIC: {selectedSubtopic.Topicname} </h1>
                <p id="available-info">EXPLANATION: {selectedSubtopic.Explanation} </p>
                <h1 class="content-heading">RESOURCES:  {selectedSubtopic.ResourceLinks}</h1>
                </>
                )}
                <div class="d-flex flex-column justify-content-around align-items-center p-3" id="reportContainer">
                </div>
            </div>
            <h6 class="transcribe-heading footer-info text-center"> <i class="fa fa-copyright" aria-hidden="true"></i> - RESOURCE FOR YOU - sarika </h6>
        </div>
    </div>
        </>
    )
}

export default Test;