function solution(num_list) {
    const sum = num_list.reduce((a, b) => a + b);
    const multi = num_list.reduce((a, b) => a * b);
    
    return Math.pow(sum,2) > multi ? 1 : 0
}