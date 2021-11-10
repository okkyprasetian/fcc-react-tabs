function Button({ toggleBtn, tf }) {
    return (
        <button className="btn" onClick={() => toggleBtn(tf)}>
            More Info
        </button>
    );
}

export default Button;