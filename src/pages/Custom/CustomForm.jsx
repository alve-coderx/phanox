import React,{Fragment, useState} from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepButton from '@mui/material/StepButton';
import Button from '@mui/material/Button';
import { PhotoCamera } from '@mui/icons-material';
import {useDispatch} from 'react-redux'
import { addCustomProduct } from '../../features/admin/customActions';
import { TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'

const steps = ['Select campaign settings', 'Create an ad group', 'Create an ad'];

export default function HorizontalNonLinearStepper() {
  const [activeStep, setActiveStep] = useState(0);
  const [completed, setCompleted] = useState({});
  const [selectedImage, setSelectedImage] = useState(null);
  const [description,setDescription] = useState('');
  const [name,setName] = useState('');
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault();
    const customProduct = {
      image : URL.createObjectURL(selectedImage),
      description,
      name,
      productId : 654654654654
    }

    console.log(customProduct)
    dispatch(addCustomProduct(customProduct))
  }
  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  return (
    <Box sx={{display : 'flex',flexDirection  : 'column',alignItems : 'center',m : 10}}>
      <Stepper nonLinear activeStep={activeStep}>
        {steps.map((label, index) => (
          <Step key={label} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
          <Fragment>
          <Container sx={{display :'flex', flexDirection : 'column', alignItems : 'center'}}>
             <form onSubmit={handleSubmit}>
                {activeStep === 0 ? 
                (
                <Box sx={{marginY : '50px'}}>
                    <Typography variant='h3'>1. Sample Design</Typography>
                    <h4 className="my-3">Add Images For Product</h4>
                    <Button variant="outlined" fullWidth style={{color : '#bda683',background : '#181818'}} component="label">
                    <input hidden accept="image/*" type="file" onChange={(event) => {
                        setSelectedImage(event.target.files[0]);
                        }}/>
                    <PhotoCamera />
                    </Button>
                </Box>
                ) : activeStep === 1 ? 
                (
                <Box sx={{marginTop : '50px'}}>
                    <Typography variant='h3'>2.Add Pattern Name</Typography>
                    <TextField
                        id="outlined-multiline-static"
                        label="Text.."
                        multiline
                        rows={1}
                        fullWidth
                        onChange={(e) => setName(e.target.value)}
                        sx={{background: 'white'}}
                    />
                </Box>
                ) : activeStep === 2 ? 
                (
                <Box sx={{marginTop : '50px'}}>
                    <Typography variant='h3'>3. Add Some Notes</Typography>
                    <TextField
                        id="outlined-multiline-static"
                        label="Text.."
                        multiline
                        rows={1}
                        fullWidth
                        onChange={(e) => setDescription(e.target.value)}
                        sx={{background: 'white'}}
                    />
                </Box>
                ) : ''}
               
               <Box sx={{ display: 'flex', justifyContent : 'space-between' ,flexDirection: 'row', pt: 2 }}>
                    <Button
                        color="inherit"
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        sx={{ mr: 1 }}
                    >
                        Back
                    </Button>
                    {
                        activeStep === 2 && (<Button style={{width: '200px', borderRadius: '0',backgroundColor : '#181818',color : '#bda683'}} variant="outlined" color='success'>Add to cart</Button>)
                    }
                    <Box sx={{ flex: '1 1 auto' }} />
                    <Button disabled={activeStep === 2} onClick={handleNext} sx={{ mr: 1 }}>
                        Next
                    </Button>
                    
                    
                    </Box>
            </form>
            </Container>
          </Fragment>
        
      </div>
    </Box>
  );
}