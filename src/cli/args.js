export const parseArgs = () => {
  const [command, file, ...argv] = process.argv;
  const result = [];

  argv.forEach((val, i) => {
        if (i % 2 === 0) result.push(`${val} is ${argv[i + 1]}`)
      }
  )
  console.log(result.join(', '));
};
parseArgs()
