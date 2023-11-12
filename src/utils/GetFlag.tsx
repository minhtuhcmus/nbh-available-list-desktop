import vn from "../assets/flags/vn.png";
import cn from "../assets/flags/cn.png";
import it from "../assets/flags/it.png";
import jp from "../assets/flags/jp.png";
import my from "../assets/flags/my.png";
import nl from "../assets/flags/nl.png";
import ec from "../assets/flags/ec.png";
import co from "../assets/flags/co.png";
import nz from "../assets/flags/nz.png";
import il from "../assets/flags/il.png";
import au from "../assets/flags/au.png";
import th from "../assets/flags/th.png";
import us from "../assets/flags/us.png";
import dk from "../assets/flags/dk.png";
import ke from "../assets/flags/ke.png";
import pt from "../assets/flags/pt.png";
import es from "../assets/flags/es.png";
import za from "../assets/flags/za.png";

export function getFlags(org: string) : string {
    if (typeof(org) === "undefined")
        return "";
    if (org.includes('Việt Nam')) {
        return vn;
    }
    if (org.includes('Nhật Bản')) {
        return jp;
    }
    if (org.includes('Hà Lan')) {
        return nl;
    }
    if (org.includes('Trung Quốc')) {
        return cn;
    }
    if (org.includes('Ý')) {
        return it;
    }
    if (org.includes('Malaysia')) {
        return my;
    }
    if (org.includes('Ecuador')) {
        return ec;
    }
    if (org.includes('Colombia')) {
        return co;
    }
    if (org.includes('Úc')) {
        return au;
    }
    if (org.includes('Thái Lan')) {
        return th;
    }
    if (org.includes('Mỹ')) {
        return us;
    }
    if (org.includes('Đan Mạch')) {
        return dk;
    }
    if (org.includes('Bồ Đào Nha')) {
        return pt;
    }
    if (org.includes('Tây Ban Nha')) {
        return es;
    }
    if (org.includes('New Zealand')) {
        return nz;
    }
    if (org.includes('Israel')) {
        return il;
    }
    if (org.includes('Kenya')) {
        return ke;
    }
    if (org.includes('Nam Phi')) {
        return za;
    }
    return vn;
}