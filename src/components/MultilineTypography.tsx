import {Typography} from "@mui/material";
import {MultilineTypographyProps} from "./types.ts";

export default function MultilineTypography(props: MultilineTypographyProps) {
    return <Typography variant="h6" style={{wordBreak: "break-word"}}>{props.children}</Typography>
}