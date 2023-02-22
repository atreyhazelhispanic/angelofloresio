import React from "react";
import Select, {SelectChangeEvent} from "@mui/material/Select";
import {Box, FormControl, InputLabel, MenuItem} from "@mui/material";

export default function BasicSelect(props) {
    const [rewind, setRewind] = React.useState(props.rewinds[0]);

    const handleChange = (event: SelectChangeEvent) => {
        setRewind(event.target.value);
    };

    const selectStyles = {
        color: 'rgba(65, 211, 240, 0.75)',
        '.MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(65, 211, 240, 0.75)'
        },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 87, 61, 0.70)'
        },
        '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'rgba(255, 87, 61, 0.60)'
        },
        '.MuiSvgIcon-root ': {
            fill: 'rgba(65, 211, 240, 0.75) !important'
        }
    }

    return (
        <div className="basicSelect">
            <Box sx={{
                width: 300,
                display: 'flex',
                textAlign: 'center',
                boxShadow: 1,
                paddingTop: 3
            }}>
                <FormControl margin="normal" fullWidth>
                    <InputLabel id="youtube-rewinds">Annual Rewinds</InputLabel>
                    <Select
                        labelId="rewinds"
                        id="rewind"
                        value={rewind}
                        label="Rewind year"
                        onChange={handleChange}
                        sx={selectStyles}
                    >
                        {props.rewinds.map(
                            (rewind) => <MenuItem value={rewind}>{rewind.props.id}</MenuItem>
                        )}
                    </Select>
                </FormControl>
            </Box>
            <div className="playVideo">
                {rewind}
            </div>
        </div>
    );
}