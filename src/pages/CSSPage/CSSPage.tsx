import { useStyle,Item } from "@pages/CSSPage/style";
import { Navigation } from "@features/Navigation/Navigation";
import { Language, PhoneInTalk, Sms } from "@mui/icons-material";
import { Fragment } from "react";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import { Button, Typography } from "@mui/material";

export const CSSPage = () => {
    const classes = useStyle();

    return (
        <Fragment>
            <Navigation />
            <Grid>
                <h1 className={classes.title}>Welcome</h1>
                <p className={classes.usageText}>Usage since 07/11/2024</p>
                <Grid container justifyContent="center" alignItems="center" rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 1 }}>
                    <Grid md={4}>
                        <Avatar className={classes.circle}>
                            <Sms />
                            <span>SMS</span>
                            <span className={classes.circleValue}>145</span>
                        </Avatar>
                    </Grid>
                    <Grid xs={4}>
                        <Avatar className={classes.circle}>
                            <Language />
                            <span>DATA</span>
                            <span className={classes.circleValue}>2GB</span>
                        </Avatar>
                    </Grid>
                    <Grid xs={4}>
                        <Avatar className={classes.circle}>
                            <PhoneInTalk />
                            <span>VOICE</span>
                            <span className={classes.circleValue}>1h36</span>
                        </Avatar>
                    </Grid>
                </Grid>
                <Grid container justifyContent="center" alignItems="center" owSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid>
                        <Grid container spacing={2}>
                            <Grid xs={2} md={8}>
                                <p className={classes.boxTitle}>Current month invoices</p>
                            </Grid>
                            <Grid xs={2} md={4}>
                                <Button variant="outlined">Download all</Button>
                            </Grid>
                            <Grid md={10}>
                                <Item>
                                    <p className={classes.textHighlight}>Add-on invoices - 05/11/2024</p>
                                    <p className={classes.textCaption}>Roaming Europe (up to 5 GB)</p>
                                    <p className={classes.textHighlight}>19.99E</p>
                                </Item>
                            </Grid>
                        </Grid>
                        <Grid md={10}>
                            <Item>
                                <p className={classes.textHighlight}>Recurring bill - 04/11/2024</p>
                                <p className={classes.textHighlight}>19.99E</p>
                            </Item>
                        </Grid>
                    </Grid>
                    <Grid>
                        <Grid md={10}>
                            <p className={classes.boxTitle}>Your information</p>
                        </Grid>
                        <Grid md={12}>
                            <Item>
                                <Grid>
                                    <Grid item md={6}>
                                        <Typography variant="h6" gutterBottom>
                                            Personal Information
                                        </Typography>
                                        <Typography>Jane doe</Typography>
                                        <Typography>12/02/1998</Typography>
                                        <Typography>jane.doe@itsfactory.fr</Typography>
                                    </Grid>
                                    <Grid item md={6}>
                                        <Typography variant="h6" gutterBottom>
                                            Address
                                        </Typography>
                                        <Typography>6 rue Beranger</Typography>
                                        <Typography>69006 Lyon</Typography>
                                        <Typography>France</Typography>
                                    </Grid>
                                </Grid>
                            </Item>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Fragment>
    );
};
