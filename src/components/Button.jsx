function Button({ toggleBtn, tf }) {
    return (
        <button className="btn" onClick={() => toggleBtn(tf)}>
            {!tf ? 'More Info' : 'Less Info'}
        </button>
    );
}

export default Button;