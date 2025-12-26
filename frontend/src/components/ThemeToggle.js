'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <div className="theme-toggle" style={{
            position: 'fixed top right',
            top: '1rem',
            right: '1rem',
            zIndex: 9999,
            background: 'rgba(255,255,255,0.9)',
            padding: '0.5rem',
            border: '1px solid #ccc',
            borderRadius: '8px'
        }}>
            <label style={{ marginRight: '0.5rem', fontWeight: 'bold' }}>Theme:</label>
            <select
                value={theme}
                onChange={(e) => toggleTheme(e.target.value)}
                style={{ padding: '5px' }}
            >
                <option value="nyc">NYC Core Framework</option>
                <option value="amsterdam">Amsterdam Design System</option>
            </select>
        </div>
    );
}
