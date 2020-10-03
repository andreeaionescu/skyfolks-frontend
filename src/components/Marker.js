import React from 'react';
import { Button } from '@material-ui/core';
import { LocationOnTwoTone } from '@material-ui/icons';

export default function Marker(props) {
    return (
        <div>
            <Button color="inherit" >
                <LocationOnTwoTone style={{ margin: '0 auto' }} />
                    Pin
            </Button>
      </div>
    )
}