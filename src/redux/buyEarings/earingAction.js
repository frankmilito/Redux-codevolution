import { BUY_EARINGS } from './earingTypes'

export const buyEaring = number => {
    return {
        type: BUY_EARINGS,
        payload: number
    }
}