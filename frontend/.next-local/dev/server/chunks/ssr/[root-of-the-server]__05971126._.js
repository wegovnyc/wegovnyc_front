module.exports = [
"[project]/Antigravity/WeGovMarketing/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Antigravity/WeGovMarketing/frontend/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/src/app/favicon.ico.mjs { IMAGE => \"[project]/Antigravity/WeGovMarketing/frontend/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)"));
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/Antigravity/WeGovMarketing/frontend/src/app/layout.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/src/app/layout.js [app-rsc] (ecmascript)"));
}),
"[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/[slug]/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ArticlePage,
    "generateMetadata",
    ()=>generateMetadata,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/src/lib/api.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$api$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/node_modules/next/dist/api/navigation.react-server.js [app-rsc] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/node_modules/next/dist/client/components/navigation.react-server.js [app-rsc] (ecmascript)");
;
;
;
;
;
const revalidate = 3600;
async function getArticle(slug) {
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAPI"])(`/articles?filters[slug][$eq]=${slug}&populate=image`);
        return response.data?.[0] || null;
    } catch (error) {
        console.error('Error fetching article:', error);
        return null;
    }
}
async function generateMetadata({ params }) {
    const { slug } = await params;
    const article = await getArticle(slug);
    if (!article) {
        return {
            title: 'Article Not Found'
        };
    }
    return {
        title: `${article.title} | WeGovNYC Blog`,
        description: article.description || article.title
    };
}
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}
async function ArticlePage({ params }) {
    const { slug } = await params;
    const article = await getArticle(slug);
    if (!article) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$components$2f$navigation$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["notFound"])();
    }
    const imageUrl = article.image?.url ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiMedia"])(article.image.url) : null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
        className: "article-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
                className: "article-header",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        href: "/blog",
                        className: "article-back-link",
                        children: "← Back to Blog"
                    }, void 0, false, {
                        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/[slug]/page.js",
                        lineNumber: 55,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "article-title",
                        children: article.title
                    }, void 0, false, {
                        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/[slug]/page.js",
                        lineNumber: 58,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "article-meta",
                        children: [
                            article.originalPublishDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                className: "article-date",
                                children: formatDate(article.originalPublishDate)
                            }, void 0, false, {
                                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/[slug]/page.js",
                                lineNumber: 61,
                                columnNumber: 25
                            }, this),
                            article.author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "article-author",
                                children: [
                                    "By ",
                                    article.author
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/[slug]/page.js",
                                lineNumber: 66,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/[slug]/page.js",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/[slug]/page.js",
                lineNumber: 54,
                columnNumber: 13
            }, this),
            imageUrl && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "article-featured-image",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                    src: imageUrl,
                    alt: article.title,
                    width: 1200,
                    height: 600,
                    style: {
                        objectFit: 'cover',
                        width: '100%',
                        height: 'auto'
                    },
                    priority: true
                }, void 0, false, {
                    fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/[slug]/page.js",
                    lineNumber: 73,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/[slug]/page.js",
                lineNumber: 72,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "article-content",
                dangerouslySetInnerHTML: {
                    __html: article.content
                }
            }, void 0, false, {
                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/[slug]/page.js",
                lineNumber: 84,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/[slug]/page.js",
        lineNumber: 53,
        columnNumber: 9
    }, this);
}
}),
"[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/[slug]/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/[slug]/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__05971126._.js.map