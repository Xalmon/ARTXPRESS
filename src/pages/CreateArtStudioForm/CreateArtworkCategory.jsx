import React,{useState} from 'react'
import { TextField } from "@mui/material";
import { Button } from "@mui/material";


const CreateArtworkCategory = () => {
    const [formData,setFormData] = useState({genreName:"",artStudioId:""})

    const handleSubmit = () => {
        const data={
            name:formData.genreName,
            artStudioId:{
                id:1
            }

        }
        
      console.log(data)
    }
    const handleInputChange=(e)=>{
        const {name,value}=e.target
        setFormData({
            ...formData,[name]:value
        })
    }
  return (
    <div className=''>
    <div className='p-5'>
        <h1 className='text-gray-900 text-center text-xl pb-10'>
        Create Genre
        </h1>
        <form action="" onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="genreName"
          name="genreName"
          label="GenreName"
          variant="outlined"
          onChange={handleInputChange}
          value={formData.genreName}
          sx={{height:"60px",width:"300px",fontSize:"3.5rem",border:"3px solid black",}}
          placeholder='ArtworkName'

          >

            </TextField>  

        <Button variant="contained"
        type="submit" sx={{backgroundColor:"gray",color:"white", marginTop:"10px",marginLeft:"80px"}}
        >
            Create Genre
        </Button>
        </form>
    </div>
    </div>
  )
}

export default CreateArtworkCategory