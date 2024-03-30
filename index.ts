import {generateJSON} from './json.js'
import {fetchIPInfo, fetchGeolocationInfo} from './geo-ip.js'
import {getSystemInfo} from './systemInfo.js'


export default async function userInfo() {
    const ipInfo = await fetchIPInfo();
    const geolocationInfo = await fetchGeolocationInfo(ipInfo.ip);
    const systemInfo = getSystemInfo();
    const json = generateJSON(ipInfo, geolocationInfo, systemInfo);
    return json;
}


