(async function () {
    const retryWithDelay = (asyncFn, retries = 3, delay = 500, finalError = "I Failed!!!", resolve, reject) => {
        const tryFn = async (resolve, reject) => {
            return asyncFn()
                .then(resolve)
                .catch(error => {
                    if (retries > 0) {
                        console.log(error.message);
                        console.log('Retry #' + retries);
                        setTimeout(() => retryWithDelay(asyncFn, retries - 1, delay, finalError, resolve, reject), delay);
                    }
                    else {
                        console.log(error.message);
                        console.log('Failed - ' + finalError);
                        resolve();
                        // reject(finalError);
                    }
                });
        };
        if (resolve) {
            return tryFn(resolve, reject);
        }
        else {
            return new Promise((resolve, reject) => {
                tryFn(resolve, reject);
            });
        }
    };
    // Test function
    const getTestFunc = () => {
        let callCounter = 0;
        return async () => {
            callCounter += 1;
            // if called less than 5 times
            // throw error
            if (callCounter < 5) {
                throw new Error('Not yet');
            }
        }
    };


    // Test the code
    const test = async (tries) => {
        await retryWithDelay(getTestFunc(), tries);
        console.log(tries > 5 ? 'success' : 'will fail before getting here');
        // await retryWithDelay(getTestFunc(), 3);
        // console.log('will fail before getting here');
    }

    await test(3);
})();
