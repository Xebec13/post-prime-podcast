import { 
    FaArrowRight,
    FaEnvelope,
    FaPlay, 
    FaEye, 
    FaThumbsUp, 
    FaComment, 
    FaYoutube, 
    FaFacebook, 
    FaBasketballBall
    
} from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";

export const iconMap = {
    ArrowRight:FaArrowRight,
    Contact:FaEnvelope,
    Play: FaPlay,
    View: FaEye,
    Like: FaThumbsUp,
    Comment: FaComment,
    Youtube: FaYoutube,
    Facebook: FaFacebook,
    Instagram: FaSquareInstagram,
    Basketball:FaBasketballBall,
};

export type IconName = keyof typeof iconMap;