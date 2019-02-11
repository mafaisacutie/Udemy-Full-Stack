# Python Scope follows the LEGB Rule:
# Local
# Enclosing Function locals
# Global
# Built-in

# Local - Names assigned in any way within a function(def or lambda) and not declared global in that function
#
# EFL - Name in the local scope of any and all enclosing functions(def of lambda) from inner to outer
#
# Global: Names assigned at the top-level of a module file or declared global in a def within the file
#
# Built-in (Python) - Names preassigned in the built-in names module: open,range,SyntaxError

# x = 25
#
# def my_func():
#     x = 50
#     return x
#
# print(x)
# # prints 25
#
# print(my_func())
# # prints 50
#
# my_func()
# print(x)
# # prints 25

# -----------------------------------------------------------------------

# local
lambda x: x**2

# enclosing fucntions local
name = "this is a global name!"
# outside a func

def greet():
    name = 'sammy'
    def hello():
        print("hello "+name)
    hello()
    #this prints hello sammy
    # if you comment out name = 'sammy' the next scope will then be name which is name = "this is a global name!"

greet()
# this prints nothing, because nothing is being returned from greet()
print(name)
