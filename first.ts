const str: string = 'DDADSADASDAAADS';
const pattern: string = 'DAS';

const matches: string[] = [];

for (let i = 0; i <= str.length - pattern.length; i++) {
    if (str.substring(i, i + pattern.length) === pattern) {
        matches.push(pattern);
    }
}

if (matches.length > 0) {
    console.log(matches.join(', '));
}
