(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/Antigravity/WeGovMarketing/frontend/src/context/ThemeContext.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ThemeProvider",
    ()=>ThemeProvider,
    "useTheme",
    ()=>useTheme
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
const ThemeContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])();
function ThemeProvider({ children }) {
    _s();
    const [theme, setTheme] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('nyc'); // Default to NYC
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            // Apply theme to document root
            document.documentElement.setAttribute('data-theme', theme);
        }
    }["ThemeProvider.useEffect"], [
        theme
    ]);
    // Optionally persist key
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeProvider.useEffect": ()=>{
            const saved = localStorage.getItem('theme');
            if (saved) setTheme(saved);
        }
    }["ThemeProvider.useEffect"], []);
    const toggleTheme = (newTheme)=>{
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ThemeContext.Provider, {
        value: {
            theme,
            toggleTheme
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/context/ThemeContext.js",
        lineNumber: 27,
        columnNumber: 9
    }, this);
}
_s(ThemeProvider, "Svkt6RbkjrjpDxfVu2rd7bJklHA=");
_c = ThemeProvider;
function useTheme() {
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(ThemeContext);
}
_s1(useTheme, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "ThemeProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Antigravity/WeGovMarketing/frontend/src/components/ThemeToggle.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThemeToggle
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/src/context/ThemeContext.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function ThemeToggle() {
    _s();
    const { theme, toggleTheme } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const dropdownRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // Close dropdown when clicking outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ThemeToggle.useEffect": ()=>{
            function handleClickOutside(event) {
                if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                    setIsOpen(false);
                }
            }
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "ThemeToggle.useEffect": ()=>{
                    document.removeEventListener("mousedown", handleClickOutside);
                }
            })["ThemeToggle.useEffect"];
        }
    }["ThemeToggle.useEffect"], [
        dropdownRef
    ]);
    const themes = [
        {
            id: 'nyc',
            label: 'NYC Core Framework',
            flag: '/assets/nyc_flag.png'
        },
        {
            id: 'amsterdam',
            label: 'Amsterdam Design System',
            flag: '/assets/amsterdam_flag.png'
        }
    ];
    const currentTheme = themes.find((t)=>t.id === theme) || themes[0];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "theme-toggle",
        ref: dropdownRef,
        style: {
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            zIndex: 9999
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                style: {
                    background: 'transparent',
                    border: 'none',
                    width: '40px',
                    height: '26px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    padding: 0
                },
                "aria-label": "Toggle Theme",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    src: currentTheme.flag,
                    alt: `${currentTheme.label} Flag`,
                    width: 40,
                    height: 26,
                    style: {
                        objectFit: 'cover',
                        width: '100%',
                        height: '100%'
                    }
                }, void 0, false, {
                    fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/ThemeToggle.js",
                    lineNumber: 58,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/ThemeToggle.js",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
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
                },
                children: themes.map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            toggleTheme(t.id);
                            setIsOpen(false);
                        },
                        style: {
                            display: 'flex',
                            alignItems: 'center',
                            width: '100%',
                            padding: '10px',
                            border: 'none',
                            background: theme === t.id ? '#f0f0f0' : 'white',
                            cursor: 'pointer',
                            textAlign: 'left',
                            gap: '10px'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    width: '30px',
                                    height: '20px',
                                    position: 'relative',
                                    flexShrink: 0,
                                    border: '1px solid #eee'
                                },
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: t.flag,
                                    alt: `${t.label} Flag`,
                                    fill: true,
                                    style: {
                                        objectFit: 'cover'
                                    }
                                }, void 0, false, {
                                    fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/ThemeToggle.js",
                                    lineNumber: 106,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/ThemeToggle.js",
                                lineNumber: 99,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    fontSize: '14px',
                                    color: '#333'
                                },
                                children: t.label
                            }, void 0, false, {
                                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/ThemeToggle.js",
                                lineNumber: 113,
                                columnNumber: 29
                            }, this)
                        ]
                    }, t.id, true, {
                        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/ThemeToggle.js",
                        lineNumber: 81,
                        columnNumber: 25
                    }, this))
            }, void 0, false, {
                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/ThemeToggle.js",
                lineNumber: 68,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/ThemeToggle.js",
        lineNumber: 33,
        columnNumber: 9
    }, this);
}
_s(ThemeToggle, "cyKJ2GEWxoGnGOxQANKMS1DaWNc=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$src$2f$context$2f$ThemeContext$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTheme"]
    ];
});
_c = ThemeToggle;
var _c;
__turbopack_context__.k.register(_c, "ThemeToggle");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/Antigravity/WeGovMarketing/frontend/src/components/Navbar.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Navbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
function Navbar({ data, siteName, children }) {
    if (!data) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: "navbar",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container navbar-container",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    href: "/",
                    className: "navbar-logo",
                    children: siteName || 'WeGovNYC'
                }, void 0, false, {
                    fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/Navbar.js",
                    lineNumber: 10,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "navbar-center",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/Navbar.js",
                    lineNumber: 15,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "navbar-menu",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                            className: "navbar-links",
                            children: data.links && data.links.map((link)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: link.url,
                                        target: link.isExternal ? '_blank' : '_self',
                                        className: "navbar-link",
                                        children: link.label
                                    }, void 0, false, {
                                        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/Navbar.js",
                                        lineNumber: 23,
                                        columnNumber: 33
                                    }, this)
                                }, link.id, false, {
                                    fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/Navbar.js",
                                    lineNumber: 22,
                                    columnNumber: 29
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/Navbar.js",
                            lineNumber: 20,
                            columnNumber: 21
                        }, this),
                        data.button && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "navbar-cta",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: data.button.url,
                                target: data.button.isExternal ? '_blank' : '_self',
                                className: `btn btn-${data.button.style || 'primary'} btn-sm`,
                                children: data.button.label
                            }, void 0, false, {
                                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/Navbar.js",
                                lineNumber: 36,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/Navbar.js",
                            lineNumber: 35,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/Navbar.js",
                    lineNumber: 19,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/Navbar.js",
            lineNumber: 9,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/components/Navbar.js",
        lineNumber: 8,
        columnNumber: 9
    }, this);
}
_c = Navbar;
var _c;
__turbopack_context__.k.register(_c, "Navbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=Antigravity_WeGovMarketing_frontend_src_b344e09e._.js.map