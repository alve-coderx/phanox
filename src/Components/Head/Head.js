import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
  BannerContainer,
  BannerContent,
  BannerDescription,
  BannerImage,
  BannerShopButton,
  BannerTitle,
} from "./HeadStyled.styled";

export default function Banner() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
      <BannerContainer style={{background : '#bda683'}}>
      <BannerImage src="https://i.ibb.co/t24T1Mg/27.jpg" />
      <BannerContent>
        <Typography variant="h6">Huge Collection</Typography>
        <BannerTitle variant="h2" style={{color : '#181818'}}>
          Digital Febric Design
        </BannerTitle>

        <BannerDescription variant="subtitle">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>

        <BannerShopButton style={{background : '#181818'}}>Shop Now</BannerShopButton>
      </BannerContent>
    </BannerContainer>

    <BannerContainer style={{background : '#181818'}}>
      <BannerContent>
        <BannerTitle style={{color : '#bda683'}} variant="h2">
          Create Custom Design
        </BannerTitle>

        <BannerDescription style={{color : '#bda683'}} variant="subtitle">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>

        <BannerShopButton style={{background : '#bda683'}}>Create Now</BannerShopButton>
      </BannerContent>
      <BannerImage src="https://i.ibb.co/c83RyMP/31.jpg" />
    </BannerContainer>
    
    </>
  );
}