import { Typography } from "@mui/material";

interface IParams {
    label: string;
    value: string;
}

export const InlineItem = (props: IParams) => {
    const { label, value } = props;

    return (
        <Typography>
            <span style={{ fontWeight: "bold" }}>{label}:</span> {value}
        </Typography>
    );
};
