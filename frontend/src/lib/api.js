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
        console.error(response.statusText);
        throw new Error(`An error occurred while fetching the API: ${response.statusText}`);
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
