export const CHANGE_STATS = 'CHANGE_STATS';



export const changeStats = (statsType: 'followers' | 'following', sum: number) => ({
    type: typeof CHANGE_STATS,
    payload: {
        statsType, sum
    }
})