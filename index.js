// Q1.Find Grades--------------------------------

function findGrades(M) {
    let grade;

    switch (true) {
        case (M <= 10):
            grade = 'E';
            break;
        case (M <= 20):
            grade = 'D';
            break;
        case (M <= 30):
            grade = 'C';
            break;
        case (M <= 40):
            grade = 'B';
            break;
        case (M <= 50):
            grade = 'A';
            break;
        
        default:
            grade = 'invalid marks';
            break;
    }
    return grade;
}
let M = 1
console.log(findGrades(M));


// Q2. Get Value--------------------------------------

function getValue (C) {
    let value;

    switch (C) {
        case 'P':
        case 'p':
            value = 'PrepBytes';
            break;
        case 'Z':
        case 'z':
            value = 'Zenith';
            break;
        case 'E':
        case 'e':
            value = 'Expert Coder';
            break;
        case 'D':
        case 'd':
            value = 'Data Structure';
            break;

        default:
        value = 'invaild value';
        break;
    }
    return value;
}
let c = 'E';
console.log(getValue(c));


//Q3. Find the maximum out of three numbers.---------------------------------------------

function Max_out_of_three (A, B, C) {
    if (A === B && B === C) {
        return -1
    } else {
        return Math.max(A, B, C);     
    }
}
let A = 2,
B = 5, 
C = 4;
console.log(Max_out_of_three(A, B, C));


//Q4. Second Smallest------------------------------------------------------

function findSndSmallest (X, Y, Z) {
    let arr = [X, Y, Z];
    
    arr.sort((a, b) => a - b);
    
    return arr[1];
}
let X = 2, Y = 9, Z = 23; 
console.log(findSndSmallest(X, Y, Z));


//Q5. Check whether the triangle is Acute or Obtuse-------------------------------------------

function Triangle_Check(A, B, C) {
    if (A + B + C === 180) {
        if (A > 90 || B > 90 || C > 90) {
            return "obtuse";
        } else {
            return "acute"; 
        }
    } else {
        return "Invalid triangle"; 
    }
}
let A = 60, B = 100, C = 20;
console.log(Triangle_Check(A, B, C));






