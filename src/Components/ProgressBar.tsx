import * as React from 'react';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';

type Props={
    progressWidth:number
}
export const ProgressBar: React.FC<Props> = ({progressWidth})=> {

    return (  
        <div className="container">
            <Box sx={{ width: '100%', margin: "37px auto" }}>
                <LinearProgress className="progressBar" sx={{ height: "10px" }} variant="determinate" value={progressWidth} />
            </Box>
        </div>
        
    );
}
