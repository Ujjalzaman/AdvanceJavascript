//here simple excersie of how we can have error like null and undefine

function MyFunction(nums) {             //if we did'nt named perameter and pass it
    const sum = nums + 50;
    //return sum;                 //if we can return in function
}
const result = MyFunction();        //if we did'tn declare variable
console.log(result);                    // if did'nt pass parameter
/**
 * if we didn't set perameter
 * lastly if we set undefine 
 * null means nothing has anything it's like empty or sometimes ==0 but using 0 in conditon or anywhere it's not recommended beacuse 
 * 0 means false .it's can stuck anywhere.
 */