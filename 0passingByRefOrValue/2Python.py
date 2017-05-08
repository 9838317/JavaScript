"""
usually it is considered that primarives are passed by values, and
                              objects    are passed by ref.
this example shows that it depends.
"""

print "to test id"
a = 10
b = a
print id(a), id(b)


def changeInt(i):
    i = 5050
    print "now we are in the function, and id is", id(i)

def changeArrayElement(iList):
    iList[0] = 5050
    print "now we are in the function, and id is", id(iList)

def ChangeAllList(iList):
    print "now we are in the function, and id is", id(iList)
    iList = [9,9,9,9,9]
    print "now we are in the function, and id is", id(iList)
    
i = 10
print i, id(i)
changeInt(i)
print i, id(i)


iList = [1,2,3,4,6]
print iList, id(iList)
changeArrayElement(iList)
print iList, id(iList)

iList = [1,2,3,4,6]
print iList, id(iList)
ChangeAllList(iList)
print iList, id(iList)



