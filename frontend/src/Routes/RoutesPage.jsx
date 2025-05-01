import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from '../Pages/Home/Home'
import EventsPage from '../Pages/Events/Events'
import EventDetailPage from '../Pages/EventDetail/EventDetail'
import NewEvent from '../Pages/NewEvent/NewEvent'
import EditEventPage from '../Pages/EditEvent/EditEvent'
import RootLayout from './RootLayout'
import EventsRootLayout from '../Pages/EventsRootLayout'
import { loader } from '../Pages/Events/Events'
const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [
            { index: true, element: <HomePage /> },
            {
                path: '/events',
                element: <EventsRootLayout />,
                children: [
                    {
                        index: true,
                        element: <EventsPage />,
                        loader: loader
                    },
                    { path: ':eventID', element: <EventDetailPage /> },
                    { path: 'new', element: <NewEvent /> },
                    { path: ':id/edit', element: <EditEventPage /> }
                ]

            },
        ]
    }
])

export default function RoutesPages() {
    return (
        <RouterProvider router={router}></RouterProvider>
    )
}