# Proxy Design Pattern 
### *Placeholder for objects*
___

## Structural Design Pattern


## 📌Introduction

A Proxy is a very simple structural design pattern. 

It's a class functioning as an interface to some other class. 

___

## ⚡️In short

A proxy is a wrapper, to provide extra functionality.

It is called by the client to access the real needed object, which is hidden.

For a client, the usage of a proxy object is the same as using the real object, because the proxy and the class implement the same interface.

___

## 💡Intent
Provide a placeholder for another object, to control access and perform some operations to it.
___


## 🔧 Apply when
- Extra functionality is required in a transparent way.
- Want to provide additional logic, and a reference is not enough.
- Want to to cache when operations on the real object are resource intensive.
- Want to check preconditions before operations on the real object are invoked. 
___

## ✅Pro
The proxy lets you execute something either before or after the primary logic of the class, with no changes for that class. The proxy implements the same interface as the class, so it can be passed to a client that expects an object as areal service.

___


## ⚠️Cons
- Adds indirection, which has a cost. For example time delay in http requests.

___


## 🏆 Great for
- Transparently add functionality to an existing real object.

___