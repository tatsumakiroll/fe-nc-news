import {
  CardMedia,
  Card,
  CardContent,
  Typography,
  Grid,
  Link,
  Divider,
  Chip,
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
      <Card
        variant="outlined"
        sx={{ display: "flex", flexDirection: "column", elevation: 0 }}
      >
        <Link href={`/articles/${article_id}`}>
          <CardMedia
            sx={{ height: 2, paddingTop: "62.5%", cursor: "pointer" }}
            image={article_img_url}
          />
        </Link>
        <Chip
          label={topic}
          size="small"
          sx={{
            width: "auto",
            borderRadius: 1,
            position: "absolute",
            color: "#2b317a",
            bgcolor: "#ded5f2",
            margin: "0.5rem",
          }}
        ></Chip>
        <CardContent>
          <Typography
            component={Link}
            sx={{
              fontFamily: "serif",
              fontSize: "1.25rem",
              fontWeight: "800",
              textDecoration: "none",
            }}
          >
            <Link
              href={`/articles/${article_id}`}
              underline="hover"
              sx={{ fontFamily: "serif", cursor: "pointer", fontSize: "1rem" }}
            >
              {title}
            </Link>
          </Typography>
          <Divider sx={{ marginTop: "1rem" }} />
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
