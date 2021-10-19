import { Typography } from '@mui/material';
import React from 'react';
import DetailForm from './DetailForm';

function Influencer() {
    
    return (
        <div style={{ marginTop: 20, height:"81.6vh" }}>
            <Typography variant="h3">Join as Influencer</Typography>
            <DetailForm type="Influencer" />
        </div>
    )
}

export default Influencer;
