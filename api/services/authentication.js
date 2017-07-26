export function authenticate(email,password){

    return new Promise( (resolve,reject) => {
        if(email === 'your@email.com' && password === 'correct')
            return resolve({
                userId: 1,
                name: 'John Doe',
                email: 'your@email.com',
                password: 'correct'
            });

        reject();

    })

}
