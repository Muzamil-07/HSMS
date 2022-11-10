// component
import Iconify from '../../components/Iconify'

// ----------------------------------------------------------------------

const getIcon = name => <Iconify icon={name} width={22} height={22} />

const navConfig = [
  {
    title: 'dashboard',
    path: '/dashboard/app',
    icon: getIcon('eva:pie-chart-2-fill'),
  },
  {
    title: 'users',
    path: '/dashboard/users',
    icon: getIcon('mdi:account-multiple-outline'),
  },
  {
    title: 'roles',
    path: '/dashboard/roles',
    icon: getIcon('mdi:account-group-outline'),
  },
  {
    title: 'blocks',
    path: '/dashboard/blocks',
    icon: getIcon( 'bx:building-house' ),
  },
  {
    title: 'plots',
    icon: getIcon( 'mdi:greenhouse' ),
    children: [
      {
        title: 'detail',
        path: '/dashboard/plots/detail',
        icon: getIcon( 'fa6-solid:house-medical-circle-check' ),
      },
      {
        title: 'assigned plots',
        path: '/dashboard/plots/users',
        icon: getIcon( 'fa-solid:house-user' ),
      },
    ]
  },
  {
    title: 'content',
    icon: getIcon('mdi:folder-search-outline'),
    children: [
      {
        title: 'digital pages',
        path: '/dashboard/content/digitalpages',
        icon: getIcon('mdi:image-frame'),
      },
      {
        title: 'ads',
        path: '/dashboard/content/ads',
        icon: getIcon('mdi:advertisements'),
      },
      {
        title: 'gallery',
        path: '/dashboard/content/gallery',
        icon: getIcon('mdi:view-gallery-outline'),
      },
      {
        title: 'society forms',
        path: '/dashboard/content/societyforms',
        icon: getIcon('mdi:form-select'),
      },
      {
        title: 'general information',
        path: '/dashboard/content/generalinfo',
        icon: getIcon('mdi:information-outline'),
      },
    ],
  },
  {
    title: 'complaints',
    path: '/dashboard/complaints',
    icon: getIcon('mdi:file-document-multiple'),
  },
  {
    title: 'notification',
    path: '/dashboard/notification',
    icon: getIcon('mdi:bell-outline'),
  },
]

export default navConfig
