import React from "react";
import { Button } from "@material-ui/core";
import { LocationOnTwoTone, WhatshotTwoTone } from "@material-ui/icons";
import FlashOnTwoTone from '@material-ui/icons/FlashOnTwoTone'


export default function Marker(props) {
    return (
        <div style={{height: '100%', width:'100%', position:"absolute"}}>
            <Button color="inherit" size="small" onClick={props.handleOnClick}>
                {props.hazardType == "hurricane" ? <FlashOnTwoTone color="secondary" /> : <WhatshotTwoTone color="error"/>} 
                {props.name}
            </Button>
        </div>
    )
}