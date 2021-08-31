import EqualizerIcon from '@material-ui/icons/Equalizer';
import AirplayIcon from '@material-ui/icons/Airplay';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import DashboardIcon from '@material-ui/icons/Dashboard';


export const DashBoard=[
    {
    text: 'DashBoard',
    icon: <DashboardIcon />,
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

export const AppPanelD = [
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



export const Admin = [
    {
        text: "Admin",
        icon: "fas fa-users-cog",
        drop: [
            {
                text: "Partner Management",
                to: '/partnermgt'
            },
            {
                text: "Partner Transactions",
                to: '/partnersummarymgt'
            },
            {
                text: "Partner Recharge",
                to: '/partnerrechargemgt'
            }
        ]

    }
]




export const Partner = [
    {
        text: "Vitaran Partner",
        icon: "fas fa-users-cog",
        drop: [
            {
                text: "Transaction Summary",
                to: '/vitaranpartnertransactionmgt'
            },
            {
                text: "Agent Mangement",
                to: '/vitaranpartneragentmgt'
            },
            {
                text: "Pickup Centers",
                to: '/vitaranpartnerpickupcenter'
            }
        ]

    }
]