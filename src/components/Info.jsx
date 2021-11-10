import MoreInfo from "./MoreInfo"
import Button from "./Button"

function Info() {
    return (
        <div className="info">
            <h2 className="info-job">Full Stack Web Developer</h2>
            <p className="info-name">Tommy</p>
            <p className="info-period">December 2015 - Present</p>
            <div className="info-bottom">
                {false && <MoreInfo />}
                <Button />
            </div>
        </div>
    );
}

export default Info;