// components/ContactCard.tsx
'use client';
import React, { useState } from 'react';
import './contactCard.scss';

interface ContactFormData {
    name: string;
    phone: string;
    email: string;
    message: string;
}

const ContactCard: React.FC = () => {
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        phone: '',
        email: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission, such as sending data to an API or email service
        console.log(formData);
    };

    return (
        <div className="contact-card">
            <form onSubmit={handleSubmit} className="contact-form">
                <h1>Contact us</h1>
                <p>brödtext</p>
                <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="full-width-input"
                    required
                />
                <div className="input-row">
                    <input
                        type="text"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        className="half-width-input"
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        className="half-width-input"
                        required
                    />
                </div>
                <textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    className="full-width-textarea"
                    required
                />
                <button type="submit" className="submit-button">Send</button>
            </form>
        </div>
    );
};

export default ContactCard;
