import roasters from '@/data/roasters.json';

export function findRoasterById(id){
    const roasterList = roasters.roasters;
    return roasterList.find((roasterID) => roasterID === id);
}
