import React, { useEffect, useState } from "react";
import axios from "axios";
import { Typography, CircularProgress, Card, CardContent } from "@material-ui/core";

const Quote: React.FC = () => {

    type QuoteType = {
        quote: string;
        author: string;
        category: string;
    }

  const [quote, setQuote] = useState<QuoteType>();
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    axios.get("https://api.api-ninjas.com/v1/quotes", {
      headers: { "X-Api-Key": "PzS4jWbRb2c0QYiEajuRUg==yuFB5FiyNhf7nuTK" },
    })
    .then((response) => {
        console.log(response, 'response');
      setQuote(response.data[0]);
      setLoading(false);
    })
    .catch(() => setLoading(false));
  }, []);

  if (loading) return <CircularProgress />;

  return <Card>
        <CardContent>
  <Typography variant="blockquote" align="center">{`"${quote?.quote}"`}</Typography>
  <Typography align="right" >{`Author: ${quote?.author}`}</Typography>
    </CardContent>
    </Card>
};

export default Quote;