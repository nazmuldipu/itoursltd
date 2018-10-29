export const SideNavbarDashboard = [
  {
    name: 'Dashboard',
    icon: 'fa-home',
    url: '/dashboard',
    authority: '',
    secondMeu: []
  },
  {
    name: 'Packages',
    icon: 'fa-briefcase',
    url: '',
    authority: '',
    secondMeu: [
      {
        name: 'List',
        icon: 'fa-list',
        url: '/dashboard/packages-list',
        authority: 'ADMIN'
      },
      {
        name: 'Add',
        icon: 'fa-plus',
        url: '/dashboard/packages-add',
        authority: 'ADMIN'
      }
    ]
  },
  {
    name: 'Hot Deals',
    icon: 'fa-fire',
    url: '',
    authority: '',
    secondMeu: [
      {
        name: 'List',
        icon: 'fa-list',
        url: '/dashboard/hotdeals-list',
        authority: 'ADMIN'
      },
      {
        name: 'Add',
        icon: 'fa-plus',
        url: '/dashboard/hotdeals-add',
        authority: 'ADMIN'
      }
    ]
  },
  {
    name: 'Gallery',
    icon: 'fa-picture-o',
    url: '',
    authority: '',
    secondMeu: [
      {
        name: 'List',
        icon: 'fa-list',
        url: '/dashboard/gallery-list',
        authority: 'ADMIN'
      },
      {
        name: 'Add',
        icon: 'fa-plus',
        url: '/dashboard/gallery-add',
        authority: 'ADMIN'
      }
    ]
  }
];
