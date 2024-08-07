import { CardMedia, Card, CardContent, Typography, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({
  article_id,
  topic,
  author,
  created_at,
  article_img_url,
  title,
}) => {
  return (
    <Grid item xs={6}>
    <Card sx={{display: 'flex', flexDirection: 'column'}}>
      <Link to={`/articles/${article_id}`}>
        <CardMedia
        style={{height:0, paddingTop:'75%'}}
          image={article_img_url}
        />
      </Link>
      <CardContent >
        <Link to={`/articles/${article_id}`}>
          <Typography sx={{fontFamily: 'serif', fontSize: 16, fontWeight: '300'}}>{title}</Typography>
        </Link>
        <Typography sx={{fontFamily:'sans-serif'}}>by {author}</Typography>
      </CardContent>
    </Card>
    </Grid>
  );
};

export default ArticleCard;
