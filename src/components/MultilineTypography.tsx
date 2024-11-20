import {Typography} from "@mui/material";
import {MultilineTypographyProps} from "./types.ts";

export default function MultilineTypography(props: MultilineTypographyProps) {
    return <Typography style={{wordBreak: "break-word"}}>{props.children}</Typography>
}