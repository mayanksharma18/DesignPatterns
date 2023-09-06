```Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.```


### Tradeoffs
```
1.Restricting the instantiation to just one instance could potentially save a lot of memory space.
2.
```



### Use cases
```
 1. To have some sort of global state throughout your application.

 2. Use the Singleton pattern when a class in your program should have just a single instance available to    all clients; for exam- ple, a single database object shared by different parts of the program.
   -> The Singleton pattern disables all other means of creating objects of a class except for the special creation method. This method either creates a new object or returns an existing one if it has already been created.


 3. Use the Singleton pattern when you need stricter control over global variables.
   -> Unlike global variables, the Singleton pattern guarantees that there’s just one instance of a class. Nothing, except for the Sin- gleton class itself, can replace the cached instance.

```

### Real-World Analogy
```
The government is an excellent example of the Singleton pat- tern. A country can have only one official government. Regard- less of the personal identities of the individuals who form governments, the title, “The Government of X”, is a global point of access that identifies the group of people in charge.

```

### Cons
```
1. Violates the Single Responsibility Principle. The pattern solves two problems at the time.
2. It may be difficult to unit test the client code of the Single- ton because many test frameworks rely on inheritance when producing mock objects. 
3. The pattern requires special treatment in a multithreaded environment so that multiple threads won’t create a singleton object several times.
4.  A lot of developers consider the Singleton pattern an antipattern. That’s why its usage is on the decline in TypeScript code.
```