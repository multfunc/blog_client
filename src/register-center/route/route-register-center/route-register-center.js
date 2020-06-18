//register route
//app route $/$
//first level route $name_route$
//second level route $name_route$
// export const ROUTE_APP=""
// export const ROUTE_HOME_PAGE="homePage"
// export const ROUTE_DATA_MONITOR="dataMonitor"
/**
 * rule:[string:name_route,integer:symbol]
 *      'name_route' can change anytime,but 'symbol' is always constant.
 *
 * 'symbol' range:
 *      zero level 'symbol' range is between 0 and 100  [0,9]
 *      first level 'symbol' range is between 100 and 10000 [1,99]*10
 *      second level 'symbol' range is between 10000 and 1000000    [1,999]*1000
 *      third level 'symbol' range is between 1000000 and 1000000000    [1,9999]*1000 0000
 *      fourth level 'symbol' range is in [1,99999]*10000 0000 0000
 * note:JavaScript max integer 9007 1992 5474 0992
 * @type {*[]}
 */
const ZERO_WEIGHT = 1
const FIRST_WEIGHT = 10
const SECOND_WEIGHT = 1000
const THIRD_WEIGHT = 10000000
const FOURTH_WEIGHT = 1000000000000
//zero level
export const ROUTE_APP = ["", 0 * ZERO_WEIGHT]

//first level
export const ROUTE_LOGIN = ["login", 10 * FIRST_WEIGHT]//登录
export const ROUTE_DIMENSION_READING = ['dimension-reading', 20 * FIRST_WEIGHT]//读书笔记
export const ROUTE_MANAGE_DIMENSION_READING = ['manage-dimension-reading', 30 * FIRST_WEIGHT]//设置


// export const ROUTE_NOTE_READING=["note_reading",10*FIRST_WEIGHT]
// export const ROUTE_BUG_FIX=["bug_fix",20*FIRST_WEIGHT]
// export const ROUTE_FOOTPRINT_PHOTO=["footprint_photo",30*FIRST_WEIGHT]
// export const ROUTE_GROW_UP=["grow_up",40*FIRST_WEIGHT]
// export const ROUTE_LOGIN = ["login", 10 * FIRST_WEIGHT]
// export const ROUTE_REGISTER = ["register", 20 * FIRST_WEIGHT]
// export const ROUTE_HOME = ["home", 30 * FIRST_WEIGHT]
// export const ROUTE_EXHIBITION=['exhibition',40*FIRST_WEIGHT]
// export const ROUTE_DATA_MONITOR = ["dataMonitor", 21 * FIRST_WEIGHT]

//second level
/*user-center*/


//third level




