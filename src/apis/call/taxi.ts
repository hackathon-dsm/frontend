import { instance } from ".."

export const getTaxiId = async() => {
    return await instance.get("")
}
