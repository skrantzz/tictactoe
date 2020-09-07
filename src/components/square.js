import React from "react";

const style = {
    background: 'pink',
    border: '2px solid red',
    fontSize: '30px',
    fontWeight: '800',
    cursor: 'pointer',

}
const Sqaure = ({ value, onClick }) => 
<button style={style} onClick={onClick}>{value}</button>;

export default Sqaure;
