console.log("Welcome to App");

setTimeout(() => {
    console.log("Order received...");

    setTimeout(() => {
        console.log("Order completed...");

        setTimeout(() => {
            console.log("Rating...");

            for (let i = 1; i <= 5; i++) {
                setTimeout(() => {
                    console.log(i);
                }, i * 1000);
            }
        }, 1000);
    }, 1000);
}, 1000);
