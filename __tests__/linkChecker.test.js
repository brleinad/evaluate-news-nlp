import { isValidLink } from '../src/client/js/linkChecker'

console.log('This is isValidLink', isValidLink)

const testLink = 'http://www.bbc.com/sport/0/football/25912393'

test('Is this link valid?', () => {
    expect(isValidLink(testLink)).toBe(true)
})