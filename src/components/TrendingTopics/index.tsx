import { useEffect, useState } from "react";

import "./styles.scss";
import { Typography } from "@mui/material";
import { Trending } from "../../types/Trending";
import { getTrendings } from "../../services/PostServices";

export default function TrendingTopics () {
  const [trending, setTrending] = useState<Trending[]>()
  
  useEffect(() => {
    getTrendings()
      .then(data => setTrending(data))
      .catch(error => console.error(error))
  }, [])

  return (
    <div className="trending-box">
      <div className="title-trending">
        <Typography>Trending Topics</Typography>
      </div>
      <div className="trending-content">
        {trending && trending.map((item) => (
          <div key={item.term} className="trending-item">
            <Typography className="word">{item.term}</Typography>
            <Typography>{item.count} Posts</Typography>
          </div>
        ))}
      </div>
    </div>
  );
}

