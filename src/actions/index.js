//action creator---jo text input ae return Action with type defined , reducer will read type and change state against it


export const emailChanged = text => {
    return {
        type: "email_changed",
        payload: text
    };
};