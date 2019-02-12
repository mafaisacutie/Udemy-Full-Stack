# PART ONE
class Sample():
    pass

x = Sample()
# print(type(x))

# PART TWO
# class Dog():
#
#     # CLASS OBJECT ATTRIBUTE
#     species = "Mammal"
#
#     def __init__(self,breed,name):
#         self.breed = breed
#         self.name = name
#
#
#
# mydog = Dog("Lab","Sammy")
# print(mydog.breed)
# print(mydog.name)
# print(mydog.species)

class Circle():
    pi = 3.14

    def __init__(self, radius=1):
        self.radius = radius

    def area(self):
        return self.radius*self.radius*Circle.pi

    def set_radius(self,new_radius):
        self.radius = new_radius


myc = Circle(3)
myc.set_radius(123)
# print(myc.area())


# PART THREE
 # INHERITANCE
class Animal():

    def __init__(self):
        print("Animal Created")

    def whoAmI(self):
        print("Animal")

    def eat(self):
        print("Eating")

class Dog(Animal):

    def __init__(self):
        Animal.__init__(self)
        print("Dog Created")

    def bark(self):
        print("Woof!")

    def eat(self):
        print("Dog Eating")


# mydog = Dog()
# mydog.whoAmI()
# mydog.eat()
# mydog.bark()

 # SPECIAL METHODS
class Book():
    def __init__(self,title,author,pages):
        self.title = title
        self.author = author
        self.pages = pages

    def __str__(self):
        return "Title: {}, Author: {}, Pages: {}".format(self.title,self.author,self.pages)

    def __len__(self):
        return self.pages

    def __del__(self):
        print("a book is destroyed")

b = Book("Python","Jose",200)
print(b)
print(len(b))
del(b)
