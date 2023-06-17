
import { useEffect } from "react";
import Footer from "./component/footer/Footer";
import Third from "./component/third/Third";
import Twothird from "./component/twothird/Twothird";
import resumeData from "../src/assets/resume.json";
import { useState } from "react";
function App() {
  const [resume, setResume] = useState({ resumeData });
  const set = () => {
    setResume(resumeData);
  }
  return (
    <>
      <div className="w3-container w3-margin-top">
        <div className="w3-row-padding">
          <Third resume={resume} />
          <Twothird resume={resume} />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
