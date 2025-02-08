import React, { useState, useEffect, useRef } from "react";
import "./Adbar.css";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import { Box, Button, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";
const Adbar = () => {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const bannerRef = useRef(null);

  const ads = [
    { id: 1, image: "https://files.oaiusercontent.com/file-Tw3BYKaxgoFXhzGRhMjUR7?se=2025-01-25T06%3A31%3A23Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Dc65c410a-b869-448d-9662-07b83a465c41.webp&sig=5Sl8KgVGhzMmqR2NWixEw/ng0eL1ZVRBgVmNwuRJroU%3D", link: "#" },
    { id: 2, image: "https://files.oaiusercontent.com/file-7hpe2DDtpZ1ir8bBiRrUzF?se=2025-01-25T06%3A35%3A58Z&sp=r&sv=2024-08-04&sr=b&rscc=max-age%3D604800%2C%20immutable%2C%20private&rscd=attachment%3B%20filename%3Db255513a-8212-4e24-a4ce-339856ad8a9e.webp&sig=khDiqYp/eQoa2rWteL1LWjPs9cCkcuM4kMFRiVUnscQ%3D", link: "#" },
    { id: 3, image: "https://imgs.search.brave.com/NVQqFgMYJUzZDQMouwv1T0PCUTLVe6TQNaU3_OcAIAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzUy/MTU5LmpwZw", link: "#" },
    { id: 4, image: "https://imgs.search.brave.com/yX2z3G74E8y_EptKG9S_5ovh06XlsYyJSSfOK9FQup8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wcmV2/aWV3LnJlZGQuaXQv/Z29kc3BlZWQtZGF2/aWQtbHluY2gtdHdp/bi1wZWFrcy01MTIw/eDIxNjAtdjAtOXB2/YXR2Nzd0aGRlMS5q/cGVnP3dpZHRoPTY0/MCZjcm9wPXNtYXJ0/JmF1dG89d2VicCZz/PTYzMThhMDhmNTkz/NzY0MmE1MjE5YTNh/NzIzNjhkODU1MGIx/MmFhYjU", link: "#" },
    { id: 5, image: "https://imgs.search.brave.com/NVQqFgMYJUzZDQMouwv1T0PCUTLVe6TQNaU3_OcAIAw/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93YWxs/cGFwZXJhY2Nlc3Mu/Y29tL2Z1bGwvMzUy/MTU5LmpwZw", link: "#" },
  ];


  const scrollToAd = (index) => {
    if (bannerRef.current) {
      const scrollAmount = index * bannerRef.current.clientWidth; 
      bannerRef.current.scrollTo({
        left: scrollAmount,
        behavior: "smooth", 
      });
    }
  };


  const handlePrev = () => {
    const newIndex = currentIndex === 0 ? ads.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    scrollToAd(newIndex);
  };


  const handleNext = () => {
    const newIndex = (currentIndex + 1) % ads.length;
    setCurrentIndex(newIndex);
    scrollToAd(newIndex);
  };


  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // -----------------------variables below adbar---------------------------
  const [data,setdata] = useState([])
  const navigate = useNavigate()
  axios.get("http://localhost:3011/view")
  .then((res) => {
    setdata(res.data)
  })
  //------------------------------------------------------------------------




  return (
    <>
    <br /><br /><br /><br /><br />
        <div className="ad-banner-container">
        {/* Left Navigation Button */}
        <button className="nav-button left" onClick={handlePrev}>
            &#8249;
        </button>

        {/* Scrollable Banner */}
        <div className="scrollable-banner" ref={bannerRef}>
            {ads.map((ad) => (
            <a key={ad.id} href={ad.link} className="ad-item">
                <img src={ad.image} alt={`Ad ${ad.id}`} />
            </a>
            ))}
        </div>

        {/* Right Navigation Button */}
        <button className="nav-button right" onClick={handleNext}>
            &#8250;
        </button>
        </div>

        {/* ----------------------below adbar------------------------- */}
        <div>
          <br /><br /><br /><br /><br /><br />
            <div className="div1"> {/* -------------------First Division------------------- */}
              <Box className="box1">
                <Button className="but1" variant="text" sx={{color: 'black', fontSize: '20px', textAlign: 'left','&:hover':{backgroundColor:'#ebecf1'}}}><Typography variant="h1" sx={{ textDecoration: 'underline' }}>Electronics:</Typography></Button>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  {data
                  .filter((val) => val.Cat === "ELECTRONICS")//-------Filtering Code-----------
                  .map((val) => {
                    return(  
                      <Grid item xs = {4}>
                        <Card>
                          <CardMedia 
                          component="img"
                          height="140"
                          image={val.Image}>
                          </CardMedia>

                          <CardContent>
                            <Typography gutterBottom variant="h5">
                              {val.Name} <br />
                            </Typography>

                            <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h8">
                              {val.Details},<br />
                            </Typography>

                            <Typography variant="h6">
                            Price: ₹{val.Price}
                            </Typography>

                            <Button variant="contained" sx={{backgroundColor: 'orange'}}>Add to Cart</Button>&nbsp;
                            <Button variant="contained" sx={{backgroundColor: 'green'}}>Buy Now</Button>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  })}
                </Grid>

              </Box>
            </div>

            <div className="div2"> {/* -------------------Second Division------------------- */}
            <br /><br /><br /><br /><br />
              <Box className="box1">
                <Button className="but1" variant="text" sx={{color: 'black', fontSize: '20px', textAlign: 'left','&:hover':{backgroundColor:'#ebecf1'}}}><Typography variant="h1" sx={{ textDecoration: 'underline' }}>Groceries:</Typography></Button>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  {data
                  .filter((val) => val.Cat === "GROCERIES")//-------Filtering Code-----------
                  .map((val) => {
                    return(  
                      <Grid item xs = {4}>
                        <Card>
                          <CardMedia 
                          component="img"
                          height="140"
                          image={val.Image}>
                          </CardMedia>

                          <CardContent>
                            <Typography gutterBottom variant="h5">
                              {val.Name} <br />
                            </Typography>

                            <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h8">
                              {val.Details},<br />
                            </Typography>

                            <Typography variant="h6">
                            Price: ₹{val.Price}
                            </Typography>

                            <Button variant="contained" sx={{backgroundColor: 'orange'}}>Add to Cart</Button>&nbsp;
                            <Button variant="contained" sx={{backgroundColor: 'green'}}>Buy Now</Button>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  })}
                </Grid>

              </Box>
            </div>

            <div className="div3"> {/* -------------------Third Division------------------- */}
            <br /><br /><br /><br /><br />
              <Box className="box1">
                <Button className="but1" variant="text" sx={{color: 'black', fontSize: '20px', textAlign: 'left','&:hover':{backgroundColor:'#ebecf1'}}}><Typography variant="h1" sx={{ textDecoration: 'underline' }}>Beauty:</Typography></Button>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  {data
                  .filter((val) => val.Cat === "Beauty")//-------Filtering Code-----------
                  .map((val) => {
                    return(  
                      <Grid item xs = {4}>
                        <Card>
                          <CardMedia 
                          component="img"
                          height="140"
                          image={val.Image}>
                          </CardMedia>

                          <CardContent>
                            <Typography gutterBottom variant="h5">
                              {val.Name} <br />
                            </Typography>

                            <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h8">
                              {val.Details},<br />
                            </Typography>

                            <Typography variant="h6">
                            Price: ₹{val.Price}
                            </Typography>

                            <Button variant="contained" sx={{backgroundColor: 'orange'}}>Add to Cart</Button>&nbsp;
                            <Button variant="contained" sx={{backgroundColor: 'green'}}>Buy Now</Button>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  })}
                </Grid>

              </Box>
            </div>

            <div className="div4"> {/* -------------------Fourth Division------------------- */}
            <br /><br /><br /><br /><br />
              <Box className="box1">
                <Button className="but1" variant="text" sx={{color: 'black', fontSize: '20px', textAlign: 'left','&:hover':{backgroundColor:'#ebecf1'}}} ><Typography variant="h1" sx={{ textDecoration: 'underline' }}>Kitchenry:</Typography></Button>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  {data
                  .filter((val) => val.Cat === "KITCHEN")//-------Filtering Code-----------
                  .map((val) => {
                    return(  
                      <Grid item xs = {4}>
                        <Card>
                          <CardMedia 
                          component="img"
                          height="140"
                          image={val.Image}>
                          </CardMedia>

                          <CardContent>
                            <Typography gutterBottom variant="h5">
                              {val.Name} <br />
                            </Typography>

                            <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h8">
                              {val.Details},<br />
                            </Typography>

                            <Typography variant="h6">
                            Price: ₹{val.Price}
                            </Typography>

                            <Button variant="contained" sx={{backgroundColor: 'orange'}}>Add to Cart</Button>&nbsp;
                            <Button variant="contained" sx={{backgroundColor: 'green'}}>Buy Now</Button>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  })}
                </Grid>

              </Box>
            </div>

            <div className="div4"> {/* -------------------Fifth Division------------------- */}
            <br /><br /><br /><br /><br />
              <Box className="box1">
                <Button className="but1" variant="text" sx={{color: 'black', fontSize: '20px', textAlign: 'left','&:hover':{backgroundColor:'#ebecf1'}}} ><Typography variant="h1" sx={{ textDecoration: 'underline' }}>Fashion:</Typography></Button>
              </Box>
              <Box>
                <Grid container spacing={2}>
                  {data
                  .filter((val) => val.Cat === "CLOTHING")//-------Filtering Code-----------
                  .map((val) => {
                    return(  
                      <Grid item xs = {4}>
                        <Card>
                          <CardMedia 
                          component="img"
                          height="140"
                          image={val.Image}>
                          </CardMedia>

                          <CardContent>
                            <Typography gutterBottom variant="h5">
                              {val.Name} <br />
                            </Typography>

                            <Typography sx={{ textAlign: 'left' }} gutterBottom variant="h8">
                              {val.Details},<br />
                            </Typography>

                            <Typography variant="h6">
                            Price: ₹{val.Price}
                            </Typography>

                            <Button variant="contained" sx={{backgroundColor: 'orange'}}>Add to Cart</Button>&nbsp;
                            <Button variant="contained" sx={{backgroundColor: 'green'}}>Buy Now</Button>
                          </CardContent>
                        </Card>
                      </Grid>
                    )
                  })}
                </Grid>

              </Box>
            </div>
        </div>
    </>
  );
};

export default Adbar;
