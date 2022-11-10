import { Navigate, useRoutes } from 'react-router-dom'
// layouts
import DashboardLayout from './layouts/dashboard'
import LogoOnlyLayout from './layouts/LogoOnlyLayout'
//
import Plots from './pages/Plots/Plots'
import Users from './pages/Users/Users'
import Login from './pages/Login'
import NotFound from './pages/Page404'
import Register from './pages/Register'
import Roles from './pages/Roles'
import DashboardApp from './pages/DashboardApp'
import Complaints from './pages/Complaints/Complaints'
import Notification from './pages/Notification/Notification'
import GeneralInfo from './pages/GeneralInfo'
import Gallery from './pages/Gallery/Gallery'
import AddGalleryEvent from './pages/Gallery/AddGalleryEvent'
import EditGalleryEvent from './pages/Gallery/EditGalleryEvent'
import Advertisement from './pages/Advertisement/Adertisement'
import SocietyForms from './pages/SocietyForms/SocietyForms'
import NewRole from './pages/NewRole'
import AddAdvertisement from './pages/Advertisement/AddAdvertisement'
import EditAdvertisement from './pages/Advertisement/EditAdvertisement'
import Adduser from './pages/Users/Adduser'
import Viewuser from './pages/Users/Viewuser'
import Edituser from './pages/Users/Edituser'
import ViewComplaint from './pages/Complaints/ViewComplaint'
import { AssignPlot } from './pages/Plots/AssignPlot'
import AssignedPlots from './pages/Plots/AssignedPlots'
import { AddPlot } from './pages/Plots/AddPlot'
import Blocks from './pages/Blocks/Blocks'
import { UpdatePlot } from './pages/Plots/UpdatePlot'
import { UpdateAssignedPlot } from './pages/Plots/UpdateAssignedPlot'
import ViewAssignedPlot from './pages/Plots/ViewAssignedPlot'
import AddNotification from './pages/Notification/AddNotification'
import ViewNotification from './pages/Notification/ViewNotification'
import DigitalPages from './pages/Content/Digital Pages/DigitalPages'
import AddNewDigitalPage from './pages/Content/Digital Pages/AddNewDigitalPage'
import ViewDigitalPage from './pages/Content/Digital Pages/ViewDigitalPage'
import UpdateDigitalPage from './pages/Content/Digital Pages/UpdateDIgitalpage'
import AddSocietyForm from './pages/SocietyForms/AddSocietyForm'
import { AddBlock } from './pages/Blocks/AddBlock'
import { UpdateBlock } from './pages/Blocks/UpdateBlock'
import Information from './pages/General_Info/Information'

// ----------------------------------------------------------------------

export default function Router () {
  return useRoutes([
    {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
        { path: 'app', element: <DashboardApp /> },
        { path: 'users', element: <Users /> },
        { path: 'roles', element: <Roles /> },
        { path: 'roles/newRole', element: <NewRole /> },
        { path: 'plots/detail', element: <Plots /> },
        { path: 'plots/add', element: <AddPlot /> },
        { path: 'plots/update', element: <UpdatePlot /> },
        { path: 'plots/users', element: <AssignedPlots /> },
        { path: 'plots/assign', element: <AssignPlot /> },
        { path: 'plots/assign/update', element: <UpdateAssignedPlot /> },
        { path: 'plots/assign/view', element: <ViewAssignedPlot /> },
        { path: 'blocks', element: <Blocks /> },
        { path: 'blocks/add', element: <AddBlock /> },
        { path: 'blocks/update', element: <UpdateBlock /> },
        { path: 'complaints', element: <Complaints /> },
        { path: 'notification', element: <Notification /> },
        { path: 'content/digitalpages', element: <DigitalPages /> },
        { path: 'content/digitalpages/add', element: <AddNewDigitalPage /> },
        { path: 'content/digitalpages/view', element: <ViewDigitalPage /> },
        { path: 'content/digitalpages/update', element: <UpdateDigitalPage /> },
        { path: 'content/ads', element: <Advertisement /> },
        { path: 'content/societyforms/add', element: <AddSocietyForm /> },
        {
          path: 'content/digitalpages/addnewpage',
          element: <AddNewDigitalPage />
        },
        { path: 'content/ads/add', element: <AddAdvertisement /> },
        { path: 'content/ads/edit', element: <EditAdvertisement /> },
        { path: 'content/gallery', element: <Gallery /> },
        { path: 'content/gallery/add', element: <AddGalleryEvent /> },
        { path: 'content/gallery/edit', element: <EditGalleryEvent /> },
        { path: 'content/societyforms', element: <SocietyForms /> },
        { path: 'content/generalinfo', element: <Information /> },
        { path: 'users/addnewuser', element: <Adduser /> },
        { path: 'users/view', element: <Viewuser /> },
        { path: 'users/edit', element: <Edituser /> },
        { path: 'complaint/view', element: <ViewComplaint /> },
        { path: 'users/add', element: <Adduser /> },
        { path: 'users/view', element: <Viewuser /> },
        { path: 'users/update', element: <Edituser /> },
        { path: 'complaint/view', element: <ViewComplaint /> },
        { path: 'notification/add', element: <AddNotification /> },
        { path: 'notification/view', element: <ViewNotification /> }
      ]
    },
    {
      path: 'login',
      element: <Login />
    },
    {
      path: 'register',
      element: <Register />
    },
    {
      path: '/',
      element: <LogoOnlyLayout />,
      children: [
        { path: '/', element: <Navigate to='/dashboard/app' /> },
        { path: '404', element: <NotFound /> },
        { path: '*', element: <Navigate to='/404' /> }
      ]
    },
    {
      path: '*',
      element: <Navigate to='/404' replace />
    }
  ])
}
