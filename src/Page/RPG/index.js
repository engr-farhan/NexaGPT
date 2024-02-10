import { Box } from "@mui/material";
import { Fragment } from "react";

export default function RPG() {
  return (
    <Fragment>
      <Box
        height="100vh"
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <iframe
          style={{ height: "100%", width: "100%" }}
          src="https://www.taskade.com/embed/zHSrKYKGrZUNk7yu?as=actionsheet&share=view&view=X77w8XNpMZHm9EA1&theme=light&coverImageType=background"
        ></iframe>
      </Box>
    </Fragment>
  );
}
