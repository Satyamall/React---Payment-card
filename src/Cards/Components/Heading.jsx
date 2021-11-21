

const Heading = ({title})=>{

    var Style = {
        width:"180px",
        height: "60px",
        background: "black", 
        color: "white",
        fontSize:"28px",
        fontWeight: "600",
        textAlign: "center",
        paddingTop : "25px"
    }
    return (
         <div style={Style}>
           {title}
         </div>
    )
}

export default Heading;