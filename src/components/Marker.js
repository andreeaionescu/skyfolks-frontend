import React from "react";
import { Button } from "@material-ui/core";
import { LocationOnTwoTone, WhatshotTwoTone } from "@material-ui/icons";

export default function Marker(props) {
    return (
        <div style={{height: "100vh"}}>
            <Button color="inherit">
                {props.hazardType == "hurricane" ? <LocationOnTwoTone color="secondary" /> : <WhatshotTwoTone color="error"/>} 
                {props.name}
            </Button>
        </div>
    )
}