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
        str = str.replaceAll('Hà Lan', 'The Netherlands')
    }
    if (str.includes('Trung Quốc')) {
        str = str.replaceAll('Trung Quốc', 'China')
    }
    if (str.includes('Ý')) {
        str = str.replaceAll('Ý', 'Italy')
    }
    return str;
}

export function ToEngPackaging(str : string) : string {
    console.log('packaging', typeof(str))
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
    return str;
}