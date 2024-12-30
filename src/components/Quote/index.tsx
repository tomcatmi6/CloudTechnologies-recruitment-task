import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, CircularProgress, Card, CardContent } from "@mui/material";

const Quote: React.FC = () => {
  type QuoteType = {
    quote: string;
    author: string;
    category: string;
  };

  const [quote, setQuote] = useState<QuoteType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios
      .get("https://api.api-ninjas.com/v1/quotes", {
        headers: { "X-Api-Key": "PzS4jWbRb2c0QYiEajuRUg==yuFB5FiyNhf7nuTK" },
      })
      .then((response) => {
        setQuote(response.data[0]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress />;

  return (
    <Card>
      <CardContent>
        <Typography
          component="blockquote"
          align="center"
          sx={{
            fontStyle: "italic",
            fontSize: {
              xs: "1rem",
              sm: "1.1rem",
              md: "1.2rem",
              xl: "1.4rem",
            },
            fontWeight: 300,
          }}
        >
          {`"${quote?.quote}"`}
        </Typography>
        <Typography
          component="p"
          sx={{
            fontSize: {
              xs: "0.8rem",
              xl: "1rem",
            },
          }}
          align="right"
        >{`Author: ${quote?.author}`}</Typography>
      </CardContent>
    </Card>
  );
};

export default Quote;
