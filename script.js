function insert_Row() {
  //Write your code here
  const table = document.getElementById("sampleTable");
  const newRow = "<tr><td>New Cell1</td><td>New Cell2</td></tr>";
  table.innerHTML = newRow + table.innerHTML;
}
