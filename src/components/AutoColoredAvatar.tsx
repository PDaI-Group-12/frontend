import {Avatar} from "@mui/material";
import {stringToColor} from "../util/text.ts";
import {AutoColoredAvatarProps} from "./types.ts";

export function AutoColoredAvatar(props: AutoColoredAvatarProps) {
    const text = props.text.trim()
    const words = text.split(' ')
    const initials = words.length > 1 ? `${words[0][0]}${words[1][0]}`.toUpperCase() : text.slice(0, 2).toUpperCase();

    return (
        <Avatar
            sx={{
                width: 48,
                height: 48,
                bgcolor: stringToColor(text),
            }}
        >
            {initials}
        </Avatar>
    );
}