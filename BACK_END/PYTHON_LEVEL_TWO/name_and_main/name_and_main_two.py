import name_and_main_one

print("TOP LEVEL name_and_main_two.py")
name_and_main_one.func()

if __name__ == '__main__':
    print('name_and_main_two.py being run directly')
else:
    print('name_and_main_two.py is being imported')
