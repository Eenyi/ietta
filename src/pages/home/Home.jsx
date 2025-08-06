import "./home.css";
import Signin from "../../components/signin/Signin";
import Signup from "../../components/signup/Signup";
import logo_black from '../../images/light_theme_2.png';
import logo_white from '../../images/dark_theme_2.png';
import { useState, useRef } from "react";
import IettaButton from "../../components/iettaComponents/IettaButton";
import NotifyToggle from "../../components/notifyToggle/NotifyToggle";
import CloseIcon from '@mui/icons-material/Close';

/**
 * @description Renders the Landing Page of IETTA before login.
 * @param {null} null Accepts nothing as parameter.
 * @react_page  
 */

export default function Home() {
  const [signUpToggle, setSignUpToggled] = useState(false);
  const reference = useRef(null);       //this hooks is to change the class on click to signup button. does the job of 
  const logoReference = useRef(null);
  //document.getElementsByClassName(className)[0]
  let expandSignupDiv = () => {
    reference.current.classList = reference.current.classList == "wp-home-head-expanded" ? "wp-home-head" : "wp-home-head-expanded";
    logoReference.current.classList = logoReference.current.classList == "wp-logo-expanded" ? "wp-logo" : "wp-logo-expanded";
    setSignUpToggled(!signUpToggle)
  }
  const [notification, setNotification] = useState(false);
  const [response, setResponse] = useState(null);
  return (
    <>
      {notification && <NotifyToggle value={notification} setValue={setNotification} response={response} setResponse={setResponse} />}
      <div className="wp-otr-home">
        <div className="wp-home-head" ref={reference}>
          <div className="wp-logo w3-animate-left" ref={logoReference}><img src={logo_black} alt="" className="light-theme-logo" /><img src={logo_white} alt="" className="dark-theme-logo" /></div>
          {signUpToggle ? <Signup setValue={setNotification} setResponse1={setResponse} /> :
            <Signin setNotification={setNotification} setResponse={setResponse} />}
        </div>
        <div className="wp-home-body w3-animate-bottom">
          <div className="wp-home-title w3-animate-opacity">
            <span className="ietta-heading">Information Extractor and Trained Text Annotator</span>
            {/* <span className="ietta-heading"><span style={{ color: "var(--theme-color)" }}>I</span>nformation <span style={{ color: "var(--theme-color)" }}>E</span>xtractor and <span style={{ color: "var(--theme-color)" }}>T</span>rained <span style={{ color: "var(--theme-color)" }}>T</span>ext <span style={{ color: "var(--theme-color)" }}>A</span>nnotator</span> */}
            {!signUpToggle ?
              <IettaButton buttonCssClass={"wp-signup-btn w3-animate-right"} buttonOnClick={expandSignupDiv}
                buttonText={"Signup"}
              /> :
              <button className="wp-cross-btn w3-animate-right" onClick={expandSignupDiv}>
                <CloseIcon style={{ fontSize: 30 }} />
              </button>
            }
          </div>
          <div className="wp-home-discription w3-animate-opacity">
            <div className="subheading-line w3-animate-fading"></div>
            <div className="wp-text-align-center">
              <span className="ietta-subheading">
                A web based machine-assisted text annotation tool,
                that is, for adding notes to the text documents. Try our demo below by uploading a pdf file.</span>
            </div>
          </div>
          <div className="wp-home-upload w3-animate-bottom">
            {/* <div className="wp-upload-btn w3-animate-zoom">
              <h4 style={{ fontWeight: 'bold' }}>Upload File</h4>
            </div> */}
            <IettaButton buttonCssClass={"wp-upload-btn w3-animate-zoom"} buttonOnClick={null}
              buttonText={<h4 style={{ fontWeight: 'bold' }}>Upload File</h4>} />
          </div>
        </div>
      </div>
    </>
  )
}

