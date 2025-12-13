"use client";

import { useState } from "react";

interface SubscribeFormData {
    name: string;
    email: string;
}

export default function SubscribeForm() {
    const [formData, setFormData] = useState<SubscribeFormData>({
        name: "",
        email: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
        // przyszla logika np. zapisu do newslettera
    };

    return (

        <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1  gap-2 text-gray-950 text-sm"
        >
            <input
                type="text"
                name="name"
                placeholder="Imię"
                value={formData.name}
                onChange={handleChange}
                className="p-2  outline-none bg-orange-200/80 uppercase"
                required
            />
            <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="p-2  outline-none bg-orange-200/80 uppercase"
                required
            />
        </form>

    );
}