# Carbon Credits Dashboard

This is a React dashboard that displays carbon credits, allows searching/filtering, and lets users download retirement certificates.

## Reflection Questions

### 1. How did you decide what to show on the main page vs details?
On the main page, I showed the essential information for each carbon credit: UNIC ID, project name, vintage, and status. Detailed information like the certificate is available via the “Download Certificate” button.

### 2. What design choices did you make to keep it clean?
1. Centered heading and search bar for easy navigation.
2. Color-coded badges (green = Active, gray = Retired).
3. Consistent padding, borders, and rounded corners.
4. Buttons with hover effects for clarity.

### 3. If the system had 10,000 credits, how would you keep the dashboard fast?
1. Use pagination or virtual scrolling.
2. Memoize components to reduce re-renders.
3. Optimize search/filtering, possibly server-side.
4. Lazy load table rows or components.
