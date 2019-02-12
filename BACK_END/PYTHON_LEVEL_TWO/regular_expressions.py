import re

patterns = ['term1','term2']

text = 'this is a string with term1, not the other'

for pattern in patterns:
    print('im searching for: '+pattern)

    if re.search(pattern, text):
        print('MATCH')
    else:
        print('no match..')

match = re.search('term1', text)
print(type(match))

print(match.start()) # returns the index value of the match


splitTerm = '@'
email = 'user@gmail.com'
print(re.split(splitTerm,email))

print(re.findall('match','test phrase match in match middle'))

def multiReFind(patterns,phrase):
    for pat in patterns:
        print('searching for pattern {}'.format(pat))
        print(re.findall(pat,phrase))
        print('\n')
test_phrase = 'sdsd..sssddd..sdddsddd...dsds.dsssssss...sdddddddd'

test_patterns = ['sd*'] #returns ['sd', 'sd', 's', 's', 'sddd', 'sddd', 'sddd', 'sd', 's', 's', 's', 's', 's', 's', 's', 's', 'sdddddddd']
test_patterns2 = ['sd+'] #returns ['sd', 'sd', 'sddd', 'sddd', 'sddd', 'sd', 'sdddddddd']
test_patterns3 = ['sd?'] #returns ['sd', 'sd', 's', 's', 'sd', 'sd', 'sd', 'sd', 's', 's', 's', 's', 's', 's', 's', 's', 'sd']
test_patterns4 = ['sd{3}'] #returns ['sddd', 'sddd', 'sddd', 'sddd']
test_patterns5 = ['sd{1,3}'] #returns ['sd', 'sd', 'sddd', 'sddd', 'sddd', 'sd', 'sddd']
test_patterns6 = ['s[sd]+'] #returns['sdsd', 'sssddd', 'sdddsddd', 'sds', 'sssssss', 'sdddddddd'] s followed by one or more s's or d's
multiReFind(test_patterns6,test_phrase)

test_phrase = 'This is a string! But it has punctuation. How can we remove it?'
test_patterns = ['[^!.?]+']
multiReFind(test_patterns,test_phrase)

test_patterns = ['[a-z]+']
multiReFind(test_patterns,test_phrase)

test_patterns = ['[A-Z]+']
multiReFind(test_patterns,test_phrase)

test_phrase = 'This is a string with numbers 12323141234 and a symbol #hashtag'
test_patterns = [r'\d+']
multiReFind(test_patterns,test_phrase)

test_phrase = 'This is a string with numbers 12323141234 and a symbol #hashtag'
test_patterns = [r'\s+']
multiReFind(test_patterns,test_phrase)

test_phrase = 'This is a string with numbers 12323141234 and a symbol #hashtag'
test_patterns = [r'\S+']
multiReFind(test_patterns,test_phrase)

test_phrase = 'This is a string with numbers 12323141234 and a symbol #hashtag'
test_patterns = [r'\w+']
multiReFind(test_patterns,test_phrase)

test_phrase = 'This is a string with numbers 12323141234 and a symbol #hashtag'
test_patterns = [r'\W+']
multiReFind(test_patterns,test_phrase)
