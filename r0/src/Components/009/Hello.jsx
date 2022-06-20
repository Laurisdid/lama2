function Hello({spalva, bg}) {

    return (
        <h2 style={
            {
                color: spalva,
                backgroundColor: bg,
                padding: '7px'
            }
        }>Hello</h2>
    );
}


export default Hello;