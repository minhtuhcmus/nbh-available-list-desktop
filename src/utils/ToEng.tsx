import ke from "../assets/flags/ke.png";

export function ToEngOrigin(str : string) : string {
    if (typeof(str) === "undefined")
        return "";
    if (str.includes('Việt Nam')) {
        str = str.replaceAll('Việt Nam', 'Vietnam')
    }
    if (str.includes('Nhật Bản')) {
        str = str.replaceAll('Nhật Bản', 'Japan')
    }
    if (str.includes('Hà Lan')) {
        str = str.replaceAll('Hà Lan', 'Netherlands')
    }
    if (str.includes('Trung Quốc')) {
        str = str.replaceAll('Trung Quốc', 'China')
    }
    if (str.includes('Ý')) {
        str = str.replaceAll('Ý', 'Italy')
    }
    if (str.includes('Úc')) {
        str = str.replaceAll('Úc', 'Australia')
    }
    if (str.includes('Thái Lan')) {
        str = str.replaceAll('Thái Lan', 'Thailand')
    }
    if (str.includes('Mỹ')) {
        str = str.replaceAll('Mỹ', 'USA')
    }
    if (str.includes('Đan Mạch')) {
        str = str.replaceAll('Đan Mạch', 'Denmark')
    }
    if (str.includes('Bồ Đào Nha')) {
        str = str.replaceAll('Bồ Đào Nha', 'Portugal')
    }
    if (str.includes('Tây Ban Nha')) {
        str = str.replaceAll('Tây Ban Nha', 'Spain')
    }
    if (str.includes('Nam Phi')) {
        str = str.replaceAll('Nam Phi', 'South Africa')
    }
    return str;
}

export function ToEngPackaging(str : string) : string {
    if (typeof(str) === "undefined")
        return "";
    if (str.includes('cành')) {
        str = str.replaceAll('cành', 'stem')
    }
    if (str.includes('bó')) {
        str = str.replaceAll('bó', 'bunch')
    }
    if (str.includes('lá')) {
        str = str.replaceAll('lá', 'leaves')
    }
    if (str.includes('bông')) {
        str = str.replaceAll('bông', 'flowers')
    }
    if (str.includes('gồm')) {
        str = str.replaceAll('gồm', 'with')
    }
    if (str.includes('nhiều nụ')) {
        str = str.replaceAll('nhiều nụ', 'many buds')
    }
    if (str.includes('Đường kính')) {
        str = str.replaceAll('Đường kính', 'Diameter')
    }
    if (str.includes('chậu')) {
        str = str.replaceAll('chậu', 'pot')
    }
    if (str.includes('cái')) {
        str = str.replaceAll('cái', 'pcs')
    }
    return str;
}