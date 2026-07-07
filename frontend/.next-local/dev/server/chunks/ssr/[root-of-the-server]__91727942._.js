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
"[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>BlogPage,
    "metadata",
    ()=>metadata,
    "revalidate",
    ()=>revalidate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/src/lib/api.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/node_modules/next/dist/client/app-dir/link.react-server.js [app-rsc] (ecmascript)");
;
;
;
const revalidate = 3600;
const metadata = {
    title: 'Blog | WeGovNYC',
    description: 'Updates and news from WeGovNYC'
};
async function getArticles() {
    try {
        const response = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["fetchAPI"])('/articles?populate=image&sort=originalPublishDate:desc');
        return response.data || [];
    } catch (error) {
        console.error('Error fetching articles:', error);
        return [];
    }
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
async function BlogPage() {
    const articles = await getArticles();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "blog-page",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "blog-hero",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "blog-hero-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            children: "Blog"
                        }, void 0, false, {
                            fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                            lineNumber: 38,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "blog-hero-subtitle",
                            children: "Updates, tutorials, and news from WeGovNYC"
                        }, void 0, false, {
                            fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                            lineNumber: 39,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                    lineNumber: 37,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                lineNumber: 36,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "blog-grid-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "blog-grid",
                    children: articles.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "no-articles",
                        children: "No articles found."
                    }, void 0, false, {
                        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                        lineNumber: 48,
                        columnNumber: 25
                    }, this) : articles.map((article)=>{
                        const imageUrl = article.image?.url ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$src$2f$lib$2f$api$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["getStrapiMedia"])(article.image.url) : null;
                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "blog-card",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$react$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                href: `/blog/${article.slug}`,
                                className: "blog-card-link",
                                children: [
                                    imageUrl ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "blog-card-image",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: imageUrl,
                                            alt: article.title
                                        }, void 0, false, {
                                            fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                                            lineNumber: 61,
                                            columnNumber: 49
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                                        lineNumber: 59,
                                        columnNumber: 45
                                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "blog-card-image blog-card-image-placeholder",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "WeGovNYC"
                                        }, void 0, false, {
                                            fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                                            lineNumber: 65,
                                            columnNumber: 49
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                                        lineNumber: 64,
                                        columnNumber: 45
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "blog-card-content",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                                className: "blog-card-title",
                                                children: article.title
                                            }, void 0, false, {
                                                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                                                lineNumber: 69,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "blog-card-meta-tags",
                                                children: [
                                                    article.category && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "blog-card-category",
                                                        children: article.category
                                                    }, void 0, false, {
                                                        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                                                        lineNumber: 72,
                                                        columnNumber: 53
                                                    }, this),
                                                    article.tags && article.tags.length > 0 && article.tags.map((tag, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "blog-card-tag",
                                                            children: tag
                                                        }, idx, false, {
                                                            fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                                                            lineNumber: 76,
                                                            columnNumber: 57
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                                                lineNumber: 70,
                                                columnNumber: 45
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "blog-card-meta",
                                                children: [
                                                    article.author && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "blog-card-author",
                                                        children: article.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                                                        lineNumber: 82,
                                                        columnNumber: 53
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("time", {
                                                        className: "blog-card-date",
                                                        children: formatDate(article.originalPublishDate)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                                                        lineNumber: 84,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                                                lineNumber: 80,
                                                columnNumber: 45
                                            }, this),
                                            article.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Antigravity$2f$WeGovMarketing$2f$frontend$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                className: "blog-card-excerpt",
                                                children: article.description
                                            }, void 0, false, {
                                                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                                                lineNumber: 89,
                                                columnNumber: 49
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                                        lineNumber: 68,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                                lineNumber: 57,
                                columnNumber: 37
                            }, this)
                        }, article.id, false, {
                            fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                            lineNumber: 56,
                            columnNumber: 33
                        }, this);
                    })
                }, void 0, false, {
                    fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                    lineNumber: 46,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js",
        lineNumber: 35,
        columnNumber: 9
    }, this);
}
}),
"[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/Antigravity/WeGovMarketing/frontend/src/app/blog/page.js [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__91727942._.js.map