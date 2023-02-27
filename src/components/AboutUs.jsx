import { useState } from "react";
import Timeline from "./Timeline";
import Footer from "./Footer";
import "../../src/styles/styles.css";

function AboutUs() {
  const [showTimeline, setShowTimeline] = useState(false);

  return (
    <>
      <div className="about-us">
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla eget
          lobortis leo, a vestibulum nisi. Sed lobortis ipsum nec libero congue,
          id lobortis arcu efficitur. Morbi sit amet risus vitae lectus
          ullamcorper sodales. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Nullam quis tortor ut turpis
          efficitur facilisis. Suspendisse dignissim ante et ultrices posuere.
        </p>
        <img
          src="https://scitechdaily.com/images/Eye-Scan-Illustration.jpg?ezimgfmt=ng%3Awebp%2Fngcb2%2Frs%3Adevice%2Frscb2-1"
          alt="placeholder"
        />
        <button onClick={() => setShowTimeline(!showTimeline)}>
          Our Timeline
        </button>
        {showTimeline && <Timeline />}
      </div>
    </>
  );
}
export default AboutUs;
