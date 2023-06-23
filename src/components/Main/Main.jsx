import React, { useState } from "react";
import './Main.css';
import MobileStepper from '@mui/material/MobileStepper';
import { addToCart } from '../../redux/cart';
import Paper from '@mui/material/Paper';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import { useTheme } from "styled-components";
import image1 from '../../assets/images/bag7.jpg';
import shoe1 from '../../assets/images/shoe1.jpg';
import dress from '../../assets/images/hoodie4.jpg';
import dress2 from '../../assets/images/t-shirt1.jpg'
import { useNavigate } from "react-router-dom";
import { Box, Typography,Button } from "@mui/material";
import { sliderData } from "../../assets/data/dummyData";
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import { useDispatch } from "react-redux";

const data = ["Shoes", "Bags", "Clothes"];
const cloth = ["Hoodies", "Jackets", "Jeans", "Suits"];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const images = [
  {
    imgPath:
      shoe1,
  },
  {

    imgPath:
      image1
  },
  {

    imgPath:
      dress
  },
  {

    imgPath:
      dress2
  },
];
const Main = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const navigate = useNavigate();
  const handleClick = (e, element) => {
    navigate('/pdp', { state: { name: element } });
  }
  const handleChange=(e,item1)=>{
    navigate('/pdp', { state: {product: item1 } });
  }
  const dispatch = useDispatch();
    const handleChange1 = (e, ele) => {
        dispatch(addToCart(ele));
    }

  return (
    <div>
      <div className="main-compoent">
        {data.map((element, index) => {
          if (element === "Clothes") {
            return (
              <div className="dropdown">
                <button className="dropbtn">Clothing</button>
                <div className="dropdown-content">
                  {cloth.map((item1, index) => {
                    return (
                      <div>
                      <a onClick={(e)=>{handleChange(e,item1)}}>{item1}</a>
                      </div>
                    )
                  })}
                </div>
              </div>
            )
          }
          else return <button  className="product-btn"onClick={(e) => handleClick(e, element)}>{element}</button>
        })}
      </div>
      <Box>
        <Paper
          square
          elevation={0}
          sx={{
            display: 'flex',
            alignItems: 'center',
            pl: 2,
            bgcolor: 'background.default',
          }}
        >
          <Typography>{images[activeStep].label}</Typography>
        </Paper>
        <AutoPlaySwipeableViews
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 ? (
                <Box
                  component="img"
                  sx={{
                    display: 'block',
                    overflow: 'hidden',
                    width: '100%',
                    height: '900'
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
              ) : null}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper style={{
          display: "flex",
          justifyContent: "center"
        }}
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
        />
      </Box>
      <div className="compoents">
        {sliderData.map((ele,index)=>{
           return <Card
           variant="outlined"
           orientation="horizontal"
           sx={{
               width: 320,
               display: "flex",
               alignItems: "center",
               justifyContent: "center",
               flexDirection: "column",
               '&:hover': { boxShadow: 'md', borderColor: 'neutral.outlinedHoverBorder' },
               className: "card-element"
           }}
       >
           <AspectRatio ratio="0.8" sx={{ width: 200, '&:hover': { boxShadow: 'lg', backgroundColor: 'green', width: "400" }, }}>
               <img className='product-image'
                   src={ele.img}

               />
           </AspectRatio>
           <CardContent>
               <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                   <p>{ele.name}</p>
               </Typography>
               <Typography level="h2" fontSize="lg" id="card-description" mb={0.5}>
                   <h3>${ele.price}</h3>
               </Typography>
               <Button onClick={(e) => handleChange1(e, ele)}>Add to Cart</Button>
           </CardContent>
       </Card>

        })}

      </div>
    </div >
  );
}
export default Main;
