(async function() {


    const retry = async (asyncFn, retries = 3, delay=200, finalError = 'Failed!') => {
        try {
            retries --;
            await asyncFn();
            console.log('Success!');
        } catch(err) {
            if (retries > 0) {
                await setTimeout(async ()=> {
                    await retry(asyncFn, retries, delay, finalError);
                }, delay);
            } else {
                console.log('Failed after 4 tries or less.');
            }
        }
    }

    let numRuns = 1;
    // Will succeed if run more than 4 times.
    const myFailingFunction = async () => {
        if (numRuns<5) {
            console.log('attempt #' + numRuns);
            numRuns++;
            throw('Failure #' + numRuns);
        }
        console.log('success #' + numRuns);
    }

    await retry(myFailingFunction, 6);
})()