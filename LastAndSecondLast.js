const lastLetters = (string) => {
    return `${string.charAt(string.length - 1)} ${string.charAt(string.length - 2)}`;
}

lastLetters('bat')  // 't a'