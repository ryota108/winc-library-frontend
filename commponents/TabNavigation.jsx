import React,{useState} from 'react'
import { Box } from '@mui/system'
import { Chip } from '@mui/material'

const TabNavigation = () => {
    const [selected,setSelected] = useState(true)
  return (
    <Box sx={{display:"flex"}}>
   <Chip label="Data Science" className={`categoryTab ${!selected ? "selected":""}`}/>
   <Chip label="Design" className={`categoryTab ${selected ? "selected":""}`}/>
   <Chip label="Security" className={`categoryTab ${selected ? "selected":""}`}/>

    </Box>
  )
}

export default TabNavigation