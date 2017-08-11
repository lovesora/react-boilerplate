export default (props) => {
    let style = {
        text: {
            margin: '2rem 2rem 0 2rem',
            padding: '1rem',
            border: '1px solid rgba(151, 151, 151, .5)',
            borderRadius: '8px 8px 0 0',
            backgroundColor: '#fff',
            color: '#7F7E7F',
            textAlign: 'center',
            whiteSpace: 'pre-wrap',
            fontSize: '2rem'
        },
        button: {
            backgroundColor: '#fff',
            margin: '0 2rem 2rem 2rem',
            borderRadius: '0 0 8px 8px',
            color: '#7F7E7F',
            textAlign: 'center',
            fontSize: '2rem',
            lineHeight: '4rem'
        }
    }
    return <div>
        <div style={{...style.text, ...props.textStyle}}>{props.text}</div>
        <div style={style.button} onClick={props.onClick}>{props.buttonText}</div>
    </div>;
}