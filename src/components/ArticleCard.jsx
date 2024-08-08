import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  Grid,
  Link,
} from "@mui/material";
import React from "react";

const ArticleCard = ({
  article_id,
  topic,
  author,
  created_at,
  article_img_url,
  title,
}) => {
  return (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            padding: "0.5rem",
            paddingLeft: "1rem",
            color: "black",
            bgcolor: "#ded5f2",
            fontSize: "0.9rem",
          }}
        >
          {topic}
        </Typography>
        <Link to={`/articles/${article_id}`}>
          <CardMedia
            sx={{ height: 2, paddingTop: "62.5%", cursor: "pointer" }}
            image={article_img_url}
          />
        </Link>
        <CardContent>
          <Typography
            component={Link}
            sx={{
              fontFamily: "serif",
              fontSize: "1rem",
              fontWeight: "300",
              textDecoration: "none",
            }}
          >
            <Link
              to={`/articles/${article_id}`}
              underline="hover"
              sx={{ fontFamily: "serif", cursor: "pointer", fontSize: "1rem" }}
            >
              {title}
            </Link>
          </Typography>
          <Typography
            sx={{
              fontFamily: "sans-serif",
              fontSize: "0.8rem",
              paddingTop: "0.75rem",
            }}
          >
            by {author}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ArticleCard;
