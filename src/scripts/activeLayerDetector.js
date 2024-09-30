export function activeLayerDetector(filters, target) {
    if(!filters.display) {
        return false;
    } else {
        if(filters.display[target]) {
            return true;
        } else {
            return false;
        }
    }
}