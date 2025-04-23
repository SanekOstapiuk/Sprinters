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

export const breadcrumbs = ['Головна', 'Профіль перевізника', 'Stripe']

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

export const about = {
  title: 'Опис перевізника',
  description: 'Stripe is a software platform for starting and running internet businesses. Millions of businesses rely on Stripe’s software tools to accept payments, expand globally, and manage their businesses online. Stripe has been at the forefront of expanding internet commerce, powering new business models, and supporting the latest platforms, from marketplaces to mobile commerce sites. We believe that growing the GDP of the internet is a problem rooted in code and design, not finance. Stripe is built for developers, makers, and creators. We work on solving the hard technical problems necessary to build global economic infrastructure—from designing highly reliable systems to developing advanced machine learning algorithms to prevent fraud.',
}

export const socialBlock = {
  twitter: {
    link: 'twitter.com/stripe',
    value: 'twitter.com/stripe',
    icon: 'twitter',
    iconColor: '#4640DE'
  },
  facebook: {
    link: 'facebook.com/StripeHQ',
    value: 'facebook.com/StripeHQ',
    icon: 'facebook',
    iconColor: '#4640DE'
  },
}

export const socialMedia = {
  title: 'Ми у соц мережах',
  images: ['/bus1.png', 'bus2.png', 'bus3.png']
}
