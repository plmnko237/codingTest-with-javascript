function solution(num_list) {
    let a = [...num_list]
      .filter((x) => x % 2 === 0)
      .toString()
      .replace(/,/g, "");
    let b = [...num_list]
      .filter((x) => x % 2 !== 0)
      .toString()
      .replace(/,/g, "");
    return parseInt(a)+parseInt(b);
}