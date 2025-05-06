import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './styles/index.css'

// Layout
import RootLayout from './RootLayout'

// Pages
import HomePage from './pages/HomePage'
import InfoPage from './pages/InfoPage'
import ContactPage from './pages/ContactPage'
import PlaceholderPage from './pages/PlaceholderPage'
import SearchResultsPage from './pages/SearchResultsPage'

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    // Error Element can be added later
    children: [
      { index: true, element: <HomePage /> },
      { path: "info", element: <InfoPage /> },
      { path: "contact", element: <ContactPage /> },
      // New Resource routes using the placeholder
      { path: "guides", element: <PlaceholderPage /> },
      { path: "tips", element: <PlaceholderPage /> },
      { path: "gear-reviews", element: <PlaceholderPage /> },
      { path: "newsletter", element: <PlaceholderPage /> },
      // Search route
      { path: "search", element: <SearchResultsPage /> },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
