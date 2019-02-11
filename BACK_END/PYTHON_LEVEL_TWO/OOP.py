# PART ONE
class Sample():
    pass

x = Sample()
# print(type(x))

# PART TWO
class Dog():

    # CLASS OBJECT ATTRIBUTE
    species = "Mammal"

    def __init__(self,breed,name):
        self.breed = breed
        self.name = name



mydog = Dog("Lab","Sammy")
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
print(myc.area())
