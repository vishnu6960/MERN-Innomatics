console.log('Start');

async function asyncFunc() {
  console.log('Inside asyncFunc');
  await Promise.resolve();
  console.log('After await in asyncFunc');
}

asyncFunc().then(() => {
  console.log('asyncFunc resolved');
});

Promise.resolve().then(() => {
  console.log('Promise 1');
});

setTimeout(() => {
  console.log('setTimeout 1');
}, 0);

Promise.resolve().then(() => {
  console.log('Promise 2');
});

setTimeout(() => {
  console.log('setTimeout 2');
}, 0);

console.log('End');