import { Button, Grid, TextField, Typography } from "@mui/material";
import "./App.css";
import Header from "./component/Header";
import Rating from "@mui/material/Rating";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

function App() {
  const StyledRating = styled(Rating)({
    "& .MuiRating-iconHover": {
      color: "#C79A00",
    },
  });

  return (
    <>
      <Header></Header>
      <Grid container spacing={2} marginTop={"70px"} width={"1100px"}>
        <Grid item xs={4}>
          <img
            src="src\assets\Katniss_Everdeen.jpg"
            alt=""
            style={{ width: "100%", height: "100%" }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography variant="h5" style={{ marginBottom: "15px" }}>
            Katniss Everdeen
          </Typography>
          <hr />
          <Typography variant="h4" style={{ marginTop: "15px" }}>
            Character
          </Typography>
          <Typography variant="subtitle1">
            Katniss Everdeen is a fictional character and the protagonist of The
            Hunger Games trilogy written by American author Suzanne Collins.[1]
            She is portrayed by Jennifer Lawrence in the film adaptations The
            Hunger Games, The Hunger Games: Catching Fire, The Hunger Games:
            Mockingjay – Part 1, and The Hunger Games: Mockingjay – Part 2.
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/mfmrPu43DF8?si=3eQS697yqHUVHp7z"
          ></iframe>
        </Grid>
        <Grid item xs={7}>
          <Typography variant="h5">Personality</Typography>
          <Typography variant="subtitle1">
            Katniss is the sixteen-year-old protagonist of The Hunger Games, and
            the story is told from her perspective. She is fiercely protective
            of her family and practical, having learned to care for her mom and
            little sister, Prim, after their father died in a mining accident
            when Katniss was just eleven. She’s described as having dark hair,
            olive skin, and gray eyes, like most of the others who live in the
            Seam of District 12. Katniss is tough, independent, resourceful,
            fiery, and skilled with a bow and arrow, and yet she also has a
            compassionate side and deep loyalty to those she loves. This
            combination of traits turns out to be dangerous for the Capitol and
            President Snow, as it inspires others and serves as a catalyst that
            creates bonds among people, including between districts, threatening
            the government’s system of division and control.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <hr />
          <Typography variant="subtitle1" style={{ marginTop: "10px" }}>
            Comment
          </Typography>
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={5}
            defaultValue="What do you feel about this?"
            sx={{ width: "100%", marginTop: "10px" }}
          />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: "10px",
            }}
          >
            <StyledRating
              name="customized-color"
              defaultValue={0}
              getLabelText={(value: number) =>
                `${value} Heart${value !== 1 ? "s" : ""}`
              }
              precision={1}
              icon={<FavoriteIcon fontSize="inherit" />}
              emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
            />
            <Button variant="contained">Contained</Button>
          </div>
        </Grid>
      </Grid>
    </>
  );
}

export default App;
