import Icon from "./Icon";

interface PlayButtonProps {
    className?: string;
}

export default function PlayButton({ className = "" }: PlayButtonProps) {
    return (
        <div className={`
            inline-flex items-center justify-center 
            py-3 px-6 md:py-5 md:px-10 
            bg-orange-500/90 rounded-lg shadow-xl 
            transition-transform duration-300 
            group-hover:scale-110 group-hover:bg-orange-500
            pointer-events-none
            ${className}
        `}>
            <Icon 
                name="Play" 
                className="text-gray-300 size-6 lg:size-8 transition-colors duration-300 group-hover:text-white" 
            />
        </div>
    );
}