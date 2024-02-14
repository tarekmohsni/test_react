/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@mui/material";

export const HomePage = () => (
    <div>
        <h1>Thanks for taking time to do this exercise!</h1>
        <h2>Context</h2>
        <Typography>
            This app this a simplified version of our react boilerplate. You will find libraries we use, and a code
            structure similar to ours.
        </Typography>
        <Typography>
            {"This app is a simple UI to manage a user and its posts. It is plugged on a public API "}
            <a href="https://gorest.co.in/" rel="noreferrer" target="_blank">
                gorest.co.in
            </a>
            . You might want to read the frontpage, there is some useful information...
        </Typography>
        <h2>Here are the rules</h2>
        <ul>
            <li>You have to add a few features to make this app complete. They are detailed in the README.md.</li>
            <li>Check the given time for each exercise. Create a commit when you have done an exercise.</li>
            <li>
                Respect the deadlines please. You can continue later on your free time if you want (in other commits)
            </li>
            <li>
                You can use any lib of your choice, even if there is yet in this project a library doing the job, as
                long as you can justify it. (don't understand the library, more fitting for the case, ...)
            </li>
            <li>Don't focus too much on the style, but make something in the spirit of the app.</li>
            <li>Focus on quality over quantity, but keep track of time.</li>
            <li>The color theme might make you cry, fell free to change it if you have time.</li>
        </ul>
        <h2>Have fun!</h2>
    </div>
);
