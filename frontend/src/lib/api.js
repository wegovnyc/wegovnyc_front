import qs from 'qs';

const STRAPI_URL = process.env.NEXT_PUBLIC_STRAPI_URL || 'http://127.0.0.1:1337';

export async function fetchAPI(path, options = {}) {
    const { headers, cache, isDraftMode, ...queryParams } = options;

    // Merge default and user-provided headers
    const mergedOptions = {
        headers: {
            'Content-Type': 'application/json',
            ...headers,
        },
        cache: isDraftMode ? 'no-store' : (cache || 'force-cache'),
    };

    // Build the query string
    const queryString = qs.stringify(queryParams, {
        encodeValuesOnly: true, // prettify URL
    });

    let requestUrl = `${STRAPI_URL}/api${path}${queryString ? `?${queryString}` : ''}`;

    if (isDraftMode) {
        const separator = requestUrl.includes('?') ? '&' : '?';
        requestUrl = `${requestUrl}${separator}status=draft`;
    }

    const response = await fetch(requestUrl, mergedOptions);

    if (!response.ok) {
        console.error("Fetch failed:", response.status, response.statusText);
        let errorDetails = response.statusText;
        try {
            const errorJson = await response.json();
            console.error("Strapi Error JSON:", JSON.stringify(errorJson, null, 2));
            if (errorJson.error) {
                errorDetails = `${errorJson.error.message} (${errorJson.error.name})`;
                if (errorJson.error.details) {
                    errorDetails += ` - ${JSON.stringify(errorJson.error.details)}`;
                }
            }
        } catch (e) {
            console.error("Could not parse error JSON:", e);
        }

        console.error("Failed URL:", requestUrl);
        throw new Error(`API Error (${response.status}): ${errorDetails} | URL: ${requestUrl}`);
    }

    const data = await response.json();
    return data;
}

export function getStrapiMedia(url) {
    if (url == null) {
        return null;
    }

    // Return the full URL if the media is hosted on an external provider
    if (url.startsWith('http') || url.startsWith('//')) {
        return url;
    }

    // Otherwise prepend the Strapi URL
    return `${STRAPI_URL}${url}`;
}
