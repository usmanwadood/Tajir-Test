// matrix multiplication 
// takes 2 matrices and returns the product 

// a = [[1,2,3],[4,5,6],[7,8,9]]

// b = [[3,2,1],[6,5,4],[9,8,7]]

const matrixMult = (a, b) => {

    // multiply each row with each column
    temp = [[]]

    for (let i = 0; i < a.length; i++) {

        if (temp == []) {

            temp = [arrayMult(getRows(a,i), getCols(b,i))]
            
        } else {

            temp[i] = arrayMult(getRows(a,i), getCols(b,i))
        }

        console.log(temp);
    }

    return temp

} 

const getRows = (a, i) => {

    // takes a matrix and returns the ith row of the matrix

    return a[i]

}

const getCols = (a, j) => {

    // takes a matrix and returns the ith col of the matrix

    temp = []

    for (let i = 0; i < a.length; i++) {
        temp[i] = a[i][j]
    }

    return temp

}

const arrayMult = (a, b) => {

    // takes two arrays and multiplies the arrays to give one single array
    // a = [1,2,3]
    // b = [4,5,6]

    temp = []

    for (let i = 0; i < a.length; i++) {
        
        temp[i] = a[i]*b[i]
    }

    return temp

}

console.log(matrixMult( [[1,2,3],[4,5,6],[7,8,9]], [[3,2,1],[6,5,4],[9,8,7]]));
