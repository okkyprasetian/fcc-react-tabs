import MoreInfo from "./MoreInfo"
import Button from "./Button"

function Info({ showJobs }) {

    const moreInfo = me => {
        me.map(desc => <MoreInfo desc={desc} />)
    }

    return (
        <div className="info">
            <h2 className="info-job">{showJobs.title}</h2>
            <p className="info-name">{showJobs.company}</p>
            <p className="info-period">{showJobs.dates}</p>
            <div className="info-bottom">
                {false && moreInfo(showJobs.duties)}
                <Button />
            </div>
        </div>
    );
}

export default Info;