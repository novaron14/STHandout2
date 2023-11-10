export function greet(names: string[]): string {
  if (names.length === 0) {
    return 'Hello, my friend';
  }
  const normalNames = names.filter(str => /[a-z]/.test(str));
  let normalGreetings: string = '';
  if(normalNames.length==1){
    normalGreetings = `Hello ${normalNames[0]}!`
  }else if(normalNames.length>1){
    normalGreetings = `Hello ${normalNames.slice(0, -1).join(', ')} and ${normalNames.slice(-1)}!`;
  }
  return normalGreetings;
}