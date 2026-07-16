"use client";
import { useState } from 'react';

const STRAPI_URL = (process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337').replace(/\/$/, '');

/**
 * UnnycCampaignSignup — "Get Updates" email capture for the campaign section.
 *
 * Client component: posts the email to the Strapi `campaign-signup` collection
 * (public `create` permission), tagged with `campaign` so signups are grouped
 * by the campaign they came from. Renders inline success / error states.
 */
export default function UnnycCampaignSignup({ campaign = 'un-open-source' }) {
    const [email, setEmail] = useState('');
    // 'idle' | 'submitting' | 'success' | 'error'
    const [status, setStatus] = useState('idle');
    const [message, setMessage] = useState('');

    const submit = async (e) => {
        e.preventDefault();
        if (status === 'submitting') return;

        const value = email.trim();
        // Light client-side check; Strapi's `email` type validates authoritatively.
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
            setStatus('error');
            setMessage('Please enter a valid email address.');
            return;
        }

        setStatus('submitting');
        setMessage('');

        try {
            const res = await fetch(`${STRAPI_URL}/api/campaign-signups`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    data: {
                        email: value,
                        campaign,
                        source: '/unnyc#open-source',
                    },
                }),
            });

            if (!res.ok) throw new Error(`Signup failed (${res.status})`);

            setStatus('success');
            setMessage("You're on the list. We'll keep you posted on the campaign.");
            setEmail('');
        } catch (err) {
            setStatus('error');
            setMessage('Something went wrong. Please try again in a moment.');
        }
    };

    return (
        <div className="unnyc-campaign__signup">
            <h3 className="unnyc-campaign__signup-heading">Get Updates</h3>
            <p className="unnyc-campaign__signup-text">
                Follow the campaign to open-source NYC government. Enter your email and
                we&rsquo;ll send occasional updates on our progress and how to help.
            </p>

            {status === 'success' ? (
                <p className="unnyc-campaign__signup-success" role="status">
                    {message}
                </p>
            ) : (
                <form className="unnyc-campaign__signup-form" onSubmit={submit} noValidate>
                    <label htmlFor="campaign-email" className="unnyc-visually-hidden">
                        Email address
                    </label>
                    <input
                        id="campaign-email"
                        type="email"
                        name="email"
                        inputMode="email"
                        autoComplete="email"
                        placeholder="you@example.com"
                        className="unnyc-campaign__signup-input"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        aria-invalid={status === 'error'}
                        required
                    />
                    <button
                        type="submit"
                        className="unnyc-btn unnyc-btn--primary unnyc-campaign__signup-btn"
                        disabled={status === 'submitting'}
                    >
                        {status === 'submitting' ? 'Submitting…' : 'Get Updates'}
                    </button>
                </form>
            )}

            {status === 'error' && (
                <p className="unnyc-campaign__signup-error" role="alert">
                    {message}
                </p>
            )}
        </div>
    );
}
