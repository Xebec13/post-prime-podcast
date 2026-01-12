import { iconMap, IconName } from "../utils/icons";

interface IconProps {
    name: IconName;       // Tutaj wymuszamy, że musi to być klucz z naszego utils
    className?: string;   // Opcjonalne klasy Tailwind
    size?: number;        // Opcjonalny rozmiar
}

export default function Icon({ name, size, className }: IconProps) {
    const IconComponent = iconMap[name];

    return <IconComponent size={size} className={className} />;
}