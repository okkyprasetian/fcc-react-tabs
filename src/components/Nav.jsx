function Nav({ jobs, navClick }) {
    return (
        <nav className="nav">
            {jobs.map((job, i) => <h2 key={i} onClick={() => navClick(i)} >{job.company}</h2>)}
        </nav>
    );
}

export default Nav;