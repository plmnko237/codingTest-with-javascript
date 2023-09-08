function solution(num_list) {
    const index = num_list.findIndex((x) => x < 0);
    return index > -1 ? index : -1;
}