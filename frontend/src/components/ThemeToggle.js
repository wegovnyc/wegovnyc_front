'use client';

import { useTheme } from '@/context/ThemeContext';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [dropdownRef]);

    const themes = [
        { id: 'nyc', label: 'NYC Core Framework', flag: '/assets/nyc_flag.png' },
        { id: 'amsterdam', label: 'Amsterdam Design System', flag: '/assets/amsterdam_flag.png' }
    ];

    const currentTheme = themes.find(t => t.id === theme) || themes[0];

    return (
        <div
            className="theme-toggle"
            ref={dropdownRef}
            style={{
                position: 'fixed',
                top: '1rem',
                right: '1rem',
                zIndex: 9999,
            }}
        >
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    background: 'transparent',
                    border: 'none',
                    width: '40px',
                    height: '26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    padding: 0,
                }}
                aria-label="Toggle Theme"
            >
                <Image
                    src={currentTheme.flag}
                    alt={`${currentTheme.label} Flag`}
                    width={40}
                    height={26}
                    style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                />
            </button>

            {isOpen && (
                <div style={{
                    position: 'absolute',
                    top: '100%',
                    right: 0,
                    marginTop: '0.5rem',
                    background: 'white',
                    border: '1px solid #ccc',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    overflow: 'hidden',
                    minWidth: '200px'
                }}>
                    {themes.map((t) => (
                        <button
                            key={t.id}
                            onClick={() => {
                                toggleTheme(t.id);
                                setIsOpen(false);
                            }}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                width: '100%',
                                padding: '10px',
                                border: 'none',
                                background: theme === t.id ? '#f0f0f0' : 'white',
                                cursor: 'pointer',
                                textAlign: 'left',
                                gap: '10px'
                            }}
                        >
                            <div style={{
                                width: '30px',
                                height: '20px',
                                position: 'relative',
                                flexShrink: 0,
                                border: '1px solid #eee'
                            }}>
                                <Image
                                    src={t.flag}
                                    alt={`${t.label} Flag`}
                                    fill
                                    style={{ objectFit: 'cover' }}
                                />
                            </div>
                            <span style={{ fontSize: '14px', color: '#333' }}>{t.label}</span>
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
}
