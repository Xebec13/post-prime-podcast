import { 
    FaPlay, 
    FaEye, 
    FaThumbsUp, 
    FaComment, 
    FaYoutube, 
    FaFacebook, 
    FaInstagram 
} from "react-icons/fa";


export const iconMap = {
    Play: FaPlay,
    View: FaEye,
    Like: FaThumbsUp,
    Comment: FaComment,
    Youtube: FaYoutube,
    Facebook: FaFacebook,
    Instagram: FaInstagram,
};

export type IconName = keyof typeof iconMap;