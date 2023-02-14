import React,{useState} from 'react'
import { Box } from '@mui/system'
import { Chip } from '@mui/material'

const TabNavigation = () => {
    const [selected,setSelected] = useState(0)
  return (
    <Box sx={{display:"flex"}}>
   <Chip label="Data Science" className={`categoryTab ${selected==0 ? "":"selected"}`} onClick={() => setSelected(0)}/>
   <Chip label="Design" className={`categoryTab ${selected==1 ? "":"selected"}`} onClick={() => setSelected(1)}/>
   <Chip label="Security" className={`categoryTab ${selected==2 ? "":"selected"}`} onClick={() => setSelected(2)}/>

    </Box>
  )
}

export default TabNavigation