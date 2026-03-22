import { Dialog } from '@mui/material';
import react from 'react';


function TechStack(props) {
    return (
        <Dialog open={true} onClose={props.setShowTechStack(false)} style={{width:"400px" , height:"400px"}}>Hellow</Dialog>
    )

}

export default TechStack;