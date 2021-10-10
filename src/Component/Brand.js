import { Typography } from '@mui/material'
import React from 'react';
import DetailForm from './DetailForm';

function Brand() {
    return (
        <div style={{ marginTop: 20 }}>
            <Typography variant="h3">Join as Brand</Typography>
            <DetailForm type="Brand" />;
        </div>
    )
}

export default Brand
