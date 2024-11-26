import {Avatar} from "@mui/material";
import {stringToColor} from "../util/text.ts";
import {AutoColoredAvatarProps} from "./types.ts";

export function AutoColoredAvatar(props: AutoColoredAvatarProps) {
    return <Avatar sx={{
        bgcolor: stringToColor(props.text),
        children: `${props.text.split(' ')[0][0]}${props.text.split(' ')[1][0]}`
    }} />
}