"use client";

import React, { useState, ChangeEvent, FormEvent } from 'react';

interface ContactFormProps {
    isOpen: boolean;
    onClose: () => void;
}

interface FormData {
    name: string;
    phone: string;
    email: string;
    ideas: string;
}

export default function ContactForm({ isOpen, onClose }: ContactFormProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        ideas: ''
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        onClose();
    };

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    if (!isOpen) return null;

    return (
        <>
            {/* Backdrop */}
            <div
                className="fixed inset-0 bg-black/70 backdrop-blur-sm z-[100] transition-opacity duration-300"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="fixed inset-0 z-[101] flex items-center justify-center p-6">
                <div className="relative bg-white rounded-[2rem] shadow-2xl w-full max-w-xl animate-slideUp">

                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute -top-6 -right-6 w-16 h-16 bg-[#FF4500] rounded-full flex items-center justify-center text-white hover:bg-[#ff3300] transition-all hover:rotate-90 duration-300 shadow-xl z-10"
                    >
                        <span className="text-4xl leading-none mb-1">×</span>
                    </button>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="px-12 py-10">

                        {/* Name Input */}
                        <div className="mb-6">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your name here.."
                                required
                                className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-700 text-lg placeholder-gray-400 focus:border-[#FF4500] focus:outline-none transition-colors duration-300"
                            />
                        </div>

                        {/* Phone Input */}
                        <div className="mb-6">
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone here.."
                                required
                                className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-700 text-lg placeholder-gray-400 focus:border-[#FF4500] focus:outline-none transition-colors duration-300"
                            />
                        </div>

                        {/* Email Input */}
                        <div className="mb-6">
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your e-mail here.."
                                required
                                className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-700 text-lg placeholder-gray-400 focus:border-[#FF4500] focus:outline-none transition-colors duration-300"
                            />
                        </div>

                        {/* Ideas Textarea */}
                        <div className="mb-8">
                            <textarea
                                name="ideas"
                                value={formData.ideas}
                                onChange={handleChange}
                                placeholder="Enter your ideas here.."
                                rows={4}
                                required
                                className="w-full bg-transparent border-b-2 border-gray-300 py-3 text-gray-700 text-lg placeholder-gray-400 focus:border-[#FF4500] focus:outline-none transition-colors duration-300 resize-none"
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-[#FF4500] text-white text-2xl font-bold py-4 rounded-full hover:bg-[#ff3300] transition-all duration-300 hover:scale-[1.01] shadow-xl"
                        >
                            Submit
                        </button>

                    </form>
                </div>
            </div>
        </>
    );
}
