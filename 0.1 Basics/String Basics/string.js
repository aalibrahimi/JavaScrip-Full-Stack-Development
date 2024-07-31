//concate
    let first = "Oliver ";
    let last = "Albert";

    let fullname = first + last;

    console.log(fullname);

//1. second version cancatanation

    let f = "blaze ";
    let l = "hunter";

    console.log(`${f}${l}`);

//2. third version
    let fur = "jose ";
    let endo = "garc";
    let fullnames = fur.concat(endo);
    console.log(fullnames);

//3. append a new value (cancate version three)
    first += "abraham";
    console.log(first);

//4. casings
    let lowerCse = "ALEJANDRO";
    let uppercase = "alexy";
    console.log(lowerCse.toLowerCase()); //alejandro
    console.log(uppercase.toUpperCase()); //ALEXY

//5. Slice
//Oliver
//012345
console.log(first.slice(2, 6)); //I pick the starting index and the end index and that will print out the values inbetwween

//6. Split aand Join
    console.log(first.split("").join(" "));     //['O', 'l', 'i', 'v', 'e', 'r', ' ', 'a', 'b', 'r', 'a', 'h', 'a', 'm']
    console.log(first.split("").join(""));      // O l i v e r   a b r a h a m
    console.log(first.split("").join(""));      //Oliver abraham

//7. Includes
    console.log(first.toLowerCase().includes("o"));       //true (becomes false without the LowereCase())


//8. Trim
let space = "       long"
console.log(space.trim());      //removes space 
