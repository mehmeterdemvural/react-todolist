function editInputs(item) {
  let arr = item.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] =
      arr[i][0].toLocaleUpperCase("TR") +
      arr[i].slice(1).toLocaleLowerCase("TR");
  }
  return arr.join(" ");
}



export { editInputs };
