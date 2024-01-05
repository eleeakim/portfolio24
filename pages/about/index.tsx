import { NextPage } from "next";

const About: NextPage = () => {
    return (
        <div className="about">
            <div className="biodata section">
                <div className="title">
                    Eliakim Nyawinda
                </div>
                <div className="subtitle">
                    A Microsoft 365 support specialist.
                </div>
                <a href="mailto:eleeakim@gmail.com">
                    Get in touch
                </a>
                <div className="spotify">
                    <iframe style={{borderRadius: '12px'}} src="https://open.spotify.com/embed/playlist/3I4rXWzBCaHD55SNmJ0sCa?utm_source=generator&theme=0" width="100%" height="370" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
                </div>
            </div>
            <div className="text section">
                <p>Hello There....</p>
                <p>I am a dedicated M365 Support Specialist and Website Developer with a passion for technology and a relentless curiosity to learn.</p>
                <p>My expertise lies in providing top-notch support for Microsoft 365 solutions, ensuring seamless functionality and user satisfaction.</p>
                <p>As a seasoned website developer, I thrive in crafting innovative and user-friendly web experiences.</p>
                <p>I embrace challenges as opportunities to grow, making me a perpetual learner in the dynamic landscape of technology.</p>
                <p>I find joy in engaging with individuals and hearing about their experiences. Through this blog, I aim to capture my insights and share various reflections.</p>
            </div>
        </div>
    )
}

export default About