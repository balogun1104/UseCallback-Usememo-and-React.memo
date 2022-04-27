const MyParagraph = props => {
    console.log('Paragraph is runniing');
    return (
        <p> {props.children} </p>
    )
}

export default MyParagraph