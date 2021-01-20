import getURL from './utils.js'
import * as constants from './constant.js'


const url = getURL(constants.ADDRESS, constants.PORT, constants.PATH)
const region = constants.REGION

export {url, region} 


