addEventListener('message', ({ data }) => {
    const { numbers } = data;
    const processedData = numbers.map((num: number) => num * 2);
    postMessage({ processedData });
  });
  