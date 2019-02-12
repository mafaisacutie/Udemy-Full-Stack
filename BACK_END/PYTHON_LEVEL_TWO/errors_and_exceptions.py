# try
# except
# finally

# print('hello)
# returns SyntaxError: EOL while scanning string literal

# mylisthere = [1,2,3]
# print(mylist)
# returns NameError: name 'mylist' is not defined

try:
    f = open('myfile.txt','r')
    f.write("Test write to myfile!")
except:
    print("ERROR: COULD NOT FIND FILE OR READ DATA!")
finally:
    print("This is code executed after the except!")
