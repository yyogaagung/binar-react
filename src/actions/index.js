export const increment= () => {
    return {
        type: 'STATE/INCREMENT',
    };
};

export const decrement = () => {
    return {
        type: 'STATE/DECREMENT'
    };
};

export const input = (num) => {
    return {
        type: 'STATE/INCREMENT + X',
        payload: num * 1
    };
};