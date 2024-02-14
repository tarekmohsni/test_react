/* eslint-disable react/jsx-props-no-spreading */
import { useForm, Controller } from "react-hook-form";
import { IUser, IUserPayload } from "@features/User/IUser";
import { Button, MenuItem, Stack, TextField, Typography } from "@mui/material";
import { usersApiRoute } from "@api-routes/users";
import { fetcher } from "@utils/fetcher";
import { useState } from "react";
import { genericErrorMessage, requiredErrorMessage } from "@constants";

interface IParams {
    handleSuccess(user: IUser): void;
}

export const AddUser = (props: IParams) => {
    const { handleSuccess } = props;
    const [error, setError] = useState<string | undefined>();
    const { register, control, handleSubmit, formState } = useForm<IUserPayload>({
        defaultValues: { name: "", email: "", gender: "", status: "" },
    });

    const submit = (formData: IUserPayload) => {
        setError(undefined);
        fetcher<IUser>(usersApiRoute(), { method: "POST", body: JSON.stringify(formData) })
            .then((userResponse: IUser) => handleSuccess(userResponse))
            .catch((err) => {
                setError(err.message ?? genericErrorMessage);
                // eslint-disable-next-line no-console
                console.log(err);
            });
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <Stack spacing={2}>
                <TextField
                    {...register("name", { required: requiredErrorMessage })}
                    error={Boolean(formState.errors.name)}
                    helperText={formState.errors.name?.message}
                    id="name"
                    label="Name"
                />
                <TextField
                    {...register("email", { required: requiredErrorMessage })}
                    error={Boolean(formState.errors.email)}
                    helperText={formState.errors.email?.message}
                    id="email"
                    label="Email"
                    type="email"
                />
                <Controller
                    control={control}
                    name="gender"
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            error={Boolean(fieldState.error)}
                            helperText={fieldState.error?.message}
                            id="gender"
                            inputRef={field.ref}
                            label="Gender"
                            select
                        >
                            <MenuItem value="male">Male</MenuItem>
                            <MenuItem value="female">Female</MenuItem>
                        </TextField>
                    )}
                    rules={{ required: requiredErrorMessage }}
                />
                <Controller
                    control={control}
                    name="status"
                    render={({ field, fieldState }) => (
                        <TextField
                            {...field}
                            error={Boolean(fieldState.error)}
                            helperText={fieldState.error?.message}
                            id="status"
                            inputRef={field.ref}
                            label="Status"
                            select
                        >
                            <MenuItem value="active">Active</MenuItem>
                            <MenuItem value="inactive">Inactive</MenuItem>
                        </TextField>
                    )}
                    rules={{ required: requiredErrorMessage }}
                />
                {error && (
                    <Typography color="error.main" variant="caption">
                        {error}
                    </Typography>
                )}
                <Button aria-label="Submit the user form" type="submit" variant="contained">
                    Submit
                </Button>
            </Stack>
        </form>
    );
};
