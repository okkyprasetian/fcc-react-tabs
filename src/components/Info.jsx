import MoreInfo from "./MoreInfo"
import Button from "./Button"

function Info({ showJobs, moreBtn, toggleBtn }) {
    return (
        <div className="info">
            <h2 className="info-job">{showJobs.title}</h2>
            <span className="info-name">{showJobs.company}</span>
            <p className="info-period">{showJobs.dates}</p>
            <div className="info-bottom">
                {moreBtn && showJobs.duties.map((desc, i) => <MoreInfo key={i} desc={desc} />)}
                <Button toggleBtn={toggleBtn} tf={moreBtn} />
            </div>
        </div>
    );
}

export default Info;