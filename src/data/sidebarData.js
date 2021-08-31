import EqualizerIcon from '@material-ui/icons/Equalizer';
import AirplayIcon from '@material-ui/icons/Airplay';

// import DashboardIcon from '@material-ui/icons/Dashboard';

export const DashBoard=[
    {
    text: 'Analytics',
    icon: <EqualizerIcon />,
    drop: []
    }
]




export const Analytics = [
    // {  
    //     text: 'DashBoard',
    //     icon:  <DashboardIcon/>,

    // },
    {
        text: 'Analytics',
        icon: <EqualizerIcon />,
        drop: [
            {
                text: 'Subscription',
                to: '/subscriptionAnalytics',
                drop:[],

            },
            {
                text: 'Market Analysis',
                to: '/market',
                drop: [
                    {
                        text: 'Product',
                        to: '/productAnalytics'
                    },
                    {
                        text: "Company",
                        to: '/companyAnalytics'
                    },
                    {
                        text:"Category",
                        to:'/categoryAnalytics'
                    }
                ]
            }, {
                text: 'Deals',
                to: '/dealAnalytics',
                drop:[],
            },
            {
                text: 'Coupons',
                to: '/couponAnalytics',
                drop:[],
            },
            {
                text: 'Vitaran Parameters',
                to: '/vitaranparameter',
                drop:[],
            }
        ]

    }

]

export const AppPanel = [
    {
        text: 'App Panel',
        icon: <AirplayIcon />,
        drop: [
            {
                text: "Product Management",
                to: '/productmgt'
            },
            {
                text: "Subscription Management",
                to: '/submgt',
            },
            {
                text: "Cancellation Management",
                to: "/cancelmgt"
            },
            {
                text: "Deals Management",
                to: '/dealmgt'
            },
            {
                text: "Coupon Management",
                to: '/couponmgt',
            },
            {
                text: "User Management",
            }
        ]
    }
]