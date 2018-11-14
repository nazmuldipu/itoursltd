export const SideNavbarDashboard = [
  {
    name: 'Dashboard',
    icon: 'fa-home',
    url: '/dashboard',
    authority: '',
    secondMenu: []
  },
  {
    name: 'Packages',
    icon: 'fa-briefcase',
    url: '',
    authority: '',
    secondMenu: [
      {
        name: 'Add',
        icon: 'fa-plus',
        url: '/dashboard/packages-add',
        authority: 'ADMIN'
      },
      {
        name: 'List',
        icon: 'fa-list',
        url: '/dashboard/packages-list',
        authority: 'ADMIN'
      }
    ]
  },
  {
    name: 'Hot Deals',
    icon: 'fa-fire',
    url: '',
    authority: '',
    secondMenu: [
      {
        name: 'Add',
        icon: 'fa-plus',
        url: '/dashboard/hotdeals-add',
        authority: 'ADMIN'
      },
      {
        name: 'List',
        icon: 'fa-list',
        url: '/dashboard/hotdeals-list',
        authority: 'ADMIN'
      }
    ]
  },
  {
    name: 'Gallery',
    icon: 'fa-file-image-o',
    url: '',
    authority: '',
    secondMenu: [
      {
        name: 'Add',
        icon: 'fa-plus',
        url: '/dashboard/gallery-add',
        authority: 'ADMIN'
      },
      {
        name: 'List',
        icon: 'fa-list',
        url: '/dashboard/gallery-list',
        authority: 'ADMIN'
      }
    ]
  },
  {
    name: 'Feedback',
    icon: 'fa-commenting-o ',
    url: '/dashboard/feedbacks',
    authority: 'ADMIN',
    secondMenu: []
  },
  {
    name: 'Custom Package',
    icon: 'fa-pencil-square-o ',
    url: '/dashboard/customPackages',
    authority: 'ADMIN',
    secondMenu: []
  }
];
