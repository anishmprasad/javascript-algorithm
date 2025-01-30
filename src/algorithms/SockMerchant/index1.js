function sockMerchant(n, ar) {
    let sockCounts = new Map();
    let pairs = 0;

    // Count occurrences of each sock color
    for (let sock of ar) {
        if (sockCounts.has(sock)) {
            sockCounts.set(sock, sockCounts.get(sock) + 1);
        } else {
            sockCounts.set(sock, 1);
        }
    }

    // Calculate pairs for each sock color
    for (let count of sockCounts.values()) {
        pairs += Math.floor(count / 2);
    }

    return pairs;
}

// Example usage
const n = 9;
const ar = [10, 20, 20, 10, 10, 30, 50, 10, 20];
console.log(sockMerchant(n, ar)); // Output: 3