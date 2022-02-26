// -------------------------------------------------------------------------
//
// Amanda Billigsley
// RSEG 161 - Project 2
// Assignment 2-4: Map Sample
//
// -------------------------------------------------------------------------

// --------------------------------------------------------------------------
// 1. Create a map.
console.log("");
console.log("1. Create a map.");
var myMap = new Map();
console.log(myMap);

// --------------------------------------------------------------------------
// 2. Does the map have the firstName key?
console.log("");
console.log("2. Does the map have the \"firstName\" key? ", myMap.has("firstName"));

// --------------------------------------------------------------------------
// 3. Can you get the firstName key?
console.log("");
console.log("3. Can you get the \"firstName\" key?", myMap.get("firstName"));

// --------------------------------------------------------------------------
// 4. Set a firstName as key and lastName as value in this map
console.log("");
console.log("4. Set a \"firstName\" as key and \"lastName\" as value in this map");
myMap.set('firstName', "Gozilla");
myMap.set('lastName', "Monster");
console.log(myMap);

// --------------------------------------------------------------------------
// 5. Does the map has firstName key?
console.log("");
console.log("5. Does the map have the \"firstName\" key? ", myMap.has("firstName"));

// --------------------------------------------------------------------------
// 6. Can you get the firstName key?
console.log("");
console.log("6. Can you get the \"firstName\" key?", myMap.get("firstName"));

// --------------------------------------------------------------------------
// 7. Does the map has lastName key?
console.log("");
console.log("7. Does the map have the \"lastName\" key? ", myMap.has("lastName"));

// --------------------------------------------------------------------------
// 8. Can you get the firstName key?
console.log("");
console.log("8. Can you get the \"lastName\" key?", myMap.get("lastName"));

// --------------------------------------------------------------------------
// 9. What is the map size?
console.log("");
console.log("9. What is the map size ", myMap.size);

// --------------------------------------------------------------------------
// 10. Delete from the the firstName key/value pair.
console.log("");
console.log("10. Delete the firstName key/value pair.");
myMap.delete('firstName');
console.log(myMap);

// --------------------------------------------------------------------------
// 11. Now the firstName value =
console.log("");
console.log("11. Now the firstName value = ", myMap.get("firstName"));

// --------------------------------------------------------------------------
// 12. Now the lastName value =
console.log("");
console.log("12. Now the lastName value = ", myMap.get("lastName"));

// --------------------------------------------------------------------------
// 13. Now the map size = 
console.log("");
console.log("13. Now the map size = ", myMap.size);

// --------------------------------------------------------------------------
// 14. Clear the map.
console.log("");
console.log("14. Clear the map.");
myMap.clear();
console.log(myMap);

// --------------------------------------------------------------------------
// 15. Does the map has firstName key?
console.log("");
console.log("15. Does the map have the \"firstName\" key? ", myMap.has("firstName"));

// --------------------------------------------------------------------------
// 16. Does the map has firstName key?
console.log("");
console.log("16. Does the map have the \"lastName\" key? ", myMap.has("lastName"));

// --------------------------------------------------------------------------
// 17. What is the map size?
console.log("");
console.log("17. What is the map size ", myMap.size);

// --------------------------------------------------------------------------
// 18. Create a second map and populate it with three key/value pairs
console.log("");
console.log("18. Create a second map and populate it with three key/value pairs");
var myOtherMap = new Map();
myOtherMap.set("animal", "dog");
myOtherMap.set("name", "Sadie");
myOtherMap.set("age", 13);
console.log(myOtherMap);

// --------------------------------------------------------------------------
// 19. Retrieve map content using entries() method.
console.log("");
console.log("19. Retrieve map content using entries() method.");
console.log(myOtherMap.entries());

// --------------------------------------------------------------------------
// 20. Retrieve map content using Symbol.iterator method.
console.log("");
console.log("20. Retrieve map content using Symbol.iterator method.");
console.log(myOtherMap[Symbol.iterator]());

// --------------------------------------------------------------------------
// 21. Using the spread operator convert the Map into an array.
console.log("");
console.log("21. Using the spread operator convert the Map into an array.");
var myArray = [...myOtherMap];
console.log(myArray);
