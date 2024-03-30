export function generateJSON(ipInfo:IpInfo, geolocationInfo:GeolocationInfo, systemInfo:SystemInfo) {
    return {
        ipInfo: {
            ip: ipInfo.ip,
            network: ipInfo.network,
            version: ipInfo.version,
            city: ipInfo.city,
            region: ipInfo.region,
            region_code: ipInfo.region_code,
            country: ipInfo.country,
            country_name: ipInfo.country_name,
            country_code: ipInfo.country_code,
            country_code_iso3: ipInfo.country_code_iso3,
            country_capital: ipInfo.country_capital,
            country_tld: ipInfo.country_tld,
            continent_code: ipInfo.continent_code,
            in_eu: ipInfo.in_eu,
            postal: ipInfo.postal,
            latitude: ipInfo.latitude,
            longitude: ipInfo.longitude,
            timezone: ipInfo.timezone,
            utc_offset: ipInfo.utc_offset,
            country_calling_code: ipInfo.country_calling_code,
            currency: ipInfo.currency,
            currency_name: ipInfo.currency_name,
            languages: ipInfo.languages,
            country_area: ipInfo.country_area,
            country_population: ipInfo.country_population,
            asn: ipInfo.asn,
            org: ipInfo.org
        },
        geolocationInfo: {
            ip: geolocationInfo.ip,
            country_code: geolocationInfo.country_code,
            country_name: geolocationInfo.country_name,
            region_code: geolocationInfo.region_code,
            region_name: geolocationInfo.region_name,
            city: geolocationInfo.city,
            zip_code: geolocationInfo.zip_code,
            time_zone: geolocationInfo.time_zone,
            latitude: geolocationInfo.latitude,
            longitude: geolocationInfo.longitude,
            metro_code: geolocationInfo.metro_code
        },
        systemInfo: {
            userAgent: systemInfo.userAgent,
            platform: systemInfo.platform,
            languages: systemInfo.languages,
            cookieEnabled: systemInfo.cookieEnabled,
            doNotTrack: systemInfo.doNotTrack,
            screenWidth: systemInfo.screenWidth,
            screenHeight: systemInfo.screenHeight,
            colorDepth: systemInfo.colorDepth,
            timeZone: systemInfo.timeZone,
            browserPlugins: systemInfo.browserPlugins,
            javaEnabled: systemInfo.javaEnabled,
            battery: systemInfo.battery,
            hardwareConcurrency: systemInfo.hardwareConcurrency,
            deviceMemory: systemInfo.deviceMemory,
            webGLRenderer: systemInfo.webGLRenderer
        }
    };
}

// export { generateJSON };


interface IpInfo {
    ip: string;
    network: string;
    version: string;
    city: string;
    region: string;
    region_code: string;
    country: string;
    country_name: string;
    country_code: string;
    country_code_iso3: string;
    country_capital: string;
    country_tld: string;
    continent_code: string;
    in_eu: boolean;
    postal: string;
    latitude: number;
    longitude: number;
    timezone: string;
    utc_offset: string;
    country_calling_code: string;
    currency: string;
    currency_name: string;
    languages: string[];
    country_area: number;
    country_population: number;
    asn: string;
    org: string;
}

interface GeolocationInfo {
    ip: string;
    country_code: string;
    country_name: string;
    region_code: string;
    region_name: string;
    city: string;
    zip_code: string;
    time_zone: string;
    latitude: number;
    longitude: number;
    metro_code: number;
}

interface SystemInfo {
    userAgent: string;
    platform: string;
    languages: string[];
    cookieEnabled: boolean;
    doNotTrack: string | null;
    screenWidth: number;
    screenHeight: number;
    colorDepth: number;
    timeZone: string;
    browserPlugins: any[]; // You can define a proper interface for browserPlugins if needed
    javaEnabled: boolean;
    battery: { charging: boolean; level: number } | null; // Define proper interface for battery if needed
    hardwareConcurrency: number;
    deviceMemory: number;
    webGLRenderer: string;
}