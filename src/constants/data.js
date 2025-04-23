export const header = {
  menu: [
    { label: 'Головна', link: '#', active: false },
    { label: 'Перевізникам', link: '#', active: false},
    { label: 'Про нас', link: '#', active: false },
    { label: 'Профіль перевізника', link: '#', active: true}
  ],
  createBtn: 'Створити профіль',
  loginBtn: 'Увійти',
  logo: '/logo.svg',
  altText: 'Sprinters, перевізники Європи'
}

export const breadcrunbs = ['Головна', 'Профіль перевізника', 'Stripe']

export const companyProfile = {
  logoSrc: '/stripe-logo.png',
  title: 'Stripe',
  countTrips: '43',
  tripsLabel: 'Поїздок',
  contacts: {
    mail: {
      icon: 'planet',
      link: 'https://stripe.com',
      value: 'https://stripe.com'
    },
    phone: {
      icon: 'phone',
      link: '+38 (073) 555 55 55',
      value: '+38 (073) 555 55 55'
    },
  },
  achievement: [
    {
      icon: 'fire',
      iconColor: '#26A4FF',
      label: 'На ринку від:',
      value: 'Травень 31, 2011'
    },
    {
      icon: 'people',
      iconColor: '#26A4FF',
      label: 'Перевезених пасажирів',
      value: '4000+'
    },
    {
      icon: 'train',
      iconColor: '#26A4FF',
      label: 'Автопарк',
      value: '8 бусів'
    },
    {
      icon: 'marker',
      iconColor: '#26A4FF',
      label: 'Обслуговуємо',
      value: '8 країн'
    },
    {
      icon: 'city',
      iconColor: '#26A4FF',
      label: 'Місто',
      value: 'Львів'
    }
  ]
}
