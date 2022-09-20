function wordsUppercase(string) {
    let str = string.toUpperCase()
        .replace(/[\W]+/g, ' ')
        .trim()
        .split(' ')
        .map(x => x.trim())
        .join(', ');
    console.log(str);
}
wordsUppercase('Hi, how {}. a.re you?')
wordsUppercase('hello')