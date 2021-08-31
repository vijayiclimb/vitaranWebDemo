import { GETANALYTICS, GETSUBS, ERROR, SUCCESS, PROFILEDETAILS, PROFSUCCESS, PROFERROR, GETSUBSAVG, GETTYPE } from '../../constants/analytics/subscription'

const initialState = {
    loading: true,
    profileLoader: true,

    RoleCount:{},
    SubscriberStateCount: {},
    weeklyDataList: [],
    increaseDecreasePercent: "",
    avgValuePerTransactionCount: {},
    subscriberUsageCount: {},
    subscriberUsageDataList: {},
    avgValuePerTransactionDataList: [],

    subscriberFilteredList: [],
    subscriberDetails: {},
    Title: '',
    type: ''
}


export default (subscriberAnalytics = initialState, action) => {
    switch (action.type) {
        case GETANALYTICS:
            return {
                ...subscriberAnalytics,
                SubscriberStateCount: action.payload.subscriberStateCount,
                weeklyDataList: action.payload.weeklyUserList,
                increaseDecreasePercent: action.payload.increaseDecreasePercent,
                avgValuePerTransactionCount: action.payload.subscriberAvgCount,
                subscriberUsageCount: action.payload.subscriberUsageCount,
                subscriberUsageDataList: action.payload.subscriberUsageGraph,
                avgValuePerTransactionDataList: action.payload.subscriberAvgTransation,
                RoleCount: action.payload.countByrole
            }
        case GETSUBS:
            return {
                ...subscriberAnalytics,

                subscriberFilteredList: action.payload.subscriberFilteredList,
                //  subscriberDetails: action.payload.subscriberDetails,
                profileLoader: false,
            }
        case ERROR:
            return {
                ...subscriberAnalytics,
                loading: false,
            }
        case SUCCESS:
            return {
                ...subscriberAnalytics,
                loading: false,
            }
        case PROFILEDETAILS:
            return {
                ...subscriberAnalytics,
                subscriberDetails: action.payload.subscriberIndividualDetails,

            }
        case PROFSUCCESS:
            return {
                ...subscriberAnalytics,
                profileLoader: false,
            }
        case PROFERROR:
            return {
                ...subscriberAnalytics,
                profileLoader: true,
            }

        case GETSUBSAVG:
            return {
                ...subscriberAnalytics,

                subscriberFilteredList: action.payload.SubscriberFilteredList,
                //  subscriberDetails: action.payload.subscriberDetails,
                profileLoader: false,
            }
        case GETTYPE:
            return{
                ...subscriberAnalytics,
                type:action.payload.Type,
                Title: action.payload.Title
            }

        default:
            return subscriberAnalytics
    }
}