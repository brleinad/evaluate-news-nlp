const isLinkValid = require('linkChecker')
//const isLinkValid = require('../src/client/js/linkChecker')
//import { isValidLink } from './src/client/js/linkChecker'


const testLink = 'http://www.bbc.com/sport/0/football/25912393'

test('Is this link valid?', () => {
    expect(isLinkValid(testLink).toBe(true))
})