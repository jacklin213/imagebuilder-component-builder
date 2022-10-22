import { useLocation } from "react-router-dom";
import Box from "@cloudscape-design/components/box";

function Error404() {
  let location = useLocation();

  return (
    <Box textAlign="center">
      <Box variant="h1">
        <strong>Error</strong> 404
      </Box>
      <Box variant="h2">
        Hmm... looks like page: <Box variant="code">{location.pathname}</Box> was not found
      </Box>
      <Box>
        Click <a href="#/home">here</a> to return to the home page.
      </Box>
    </Box>
  );
}

export default Error404;
