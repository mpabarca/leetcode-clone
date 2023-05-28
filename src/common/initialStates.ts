import { Form, YoutubePlayer } from "./types";

export const initialFormState: Form = {
    email: '',
    password: ''
};

export const initialYoutubePlayerState: YoutubePlayer = {
    isOpen: false,
    videoId: '',
};
