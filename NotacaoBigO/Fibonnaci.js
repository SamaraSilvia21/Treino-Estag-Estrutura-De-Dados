// Note Big O(2^n)

function fibonacci(n) {

    if(n <= 1){
        return n
    }else{
        return fibonacci(n-1) + fibonacci(n-2)
    }
}

n_terms = 10

for(let i = 0; i<=n_terms;i++){
    console.log(fibonacci(i))
}