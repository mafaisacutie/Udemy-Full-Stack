def func():
    print("func in name_and_main_one.py")

print("TOP LEVEL name_and_main_one.py")

if __name__ == '__main__':
    print("name_and_main_one.py is being run directly")
else:
    print('name_and_main_one.py has been imported')
